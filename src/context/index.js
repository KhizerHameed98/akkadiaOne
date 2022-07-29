import React, { useState, useEffect, createContext } from "react";
import { ethers } from "ethers";
import {
  contractAddress,
  params,
  PINATA_API_KEY,
  PINATA_API_SECRET,
  PINATA_GET_URL,
} from "./config";
import { abi } from "./abi.js";
import addresses from "./addresses.json";
import { merkledrop, merkleValue } from "./merkledrop";
import axios from "axios";
export const UberContext = createContext();
export const UberProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  const [provider, setProvider] = useState();
  const [contract, setContract] = useState();
  const [merkleTree, setMerkleTree] = useState([]);
  const [leaf, setLeaf] = useState();
  const [proof, setProof] = useState([]);
  const [isValidOrNot, setIsValidOrNot] = useState();
  const [hasNFT, setHasNFT] = useState();
  const [fileImg, setFileImg] = useState();

  const connectMetamask = async () => {
    let providerTemp = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(providerTemp);
    let accounts = await providerTemp.send("eth_requestAccounts", []);
    setAccount(accounts[0]);
    let cont = await new ethers.Contract(contractAddress, abi, providerTemp);
    setContract(cont);
  };

  const getBalance = async () => {
    let balance = await provider.getBalance(account);
    const balanceInEther = ethers.utils.formatEther(balance);
    // console.log("hey khizer====", await provider.getNetwork());
    console.log("hey khizer====", balanceInEther);
  };

  const getNft = async () => {
    let result = await contract.walletOfOwner(account);
    let tokeUri = await contract.tokenURI(result.toString());
    console.log("hey", tokeUri);
  };

  const checkIsValid = async () => {
    let index = addresses.findIndex(
      (address) => address.toLocaleLowerCase() === account.toLocaleLowerCase()
    );
    if (index >= 0) {
      let prof = merkleTree[index];
      setProof(merkleTree[index]);
      let checkLeaf = await contract.checkleaf(account);
      setLeaf(checkLeaf);
      let isValid = await contract.isValid(prof, checkLeaf);
      setIsValidOrNot(isValid);
      let nftOwned = await contract.mintcheck(account);
      setHasNFT(nftOwned);
      if (nftOwned) {
        getNft();
      }
      console.log("hey", nftOwned);
    } else {
      console.log("error====");
    }
  };

  const mintNFT = async () => {
    const formData = new FormData();
    formData.append("file", fileImg);
    const resFile = await axios({
      method: "post",
      url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
      data: formData,
      headers: {
        pinata_api_key: `${PINATA_API_KEY}`,
        pinata_secret_api_key: `${PINATA_API_SECRET}`,
        "Content-Type": "multipart/form-data",
      },
    });
    const ImgHash = `${PINATA_GET_URL}/${resFile.data.IpfsHash}`;
    let tokenUri = {
      tokenId: "0",
      name: "badge1",
      description: "abc",
      image: ImgHash,
    };
    // const resFile2 = await axios({
    //   method: "post",
    //   url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
    //   data: tokenUri,
    //   headers: {
    //     pinata_api_key: `${PINATA_API_KEY}`,
    //     pinata_secret_api_key: `${PINATA_API_SECRET}`,
    //     "Content-Type": "multipart/form-data",
    //   },
    // });
    let url = "https://api.pinata.cloud/pinning/pinJSONToIPFS";
    let res = await axios.post(url, tokenUri, {
      headers: {
        pinata_api_key: PINATA_API_KEY,
        pinata_secret_api_key: PINATA_API_SECRET,
      },
    });
    console.log("hey khizer===", res);

    // console.log("hey khizer====", resFile2);
  };

  useEffect(() => {
    if (fileImg) {
      mintNFT();
    }
  }, [fileImg]);

  useEffect(() => {
    const check = async () => {
      let c = merkledrop();
    };
    check();
  }, []);
  useEffect(() => {
    if (merkleValue.length > 0) {
      setMerkleTree(merkleValue);
    }
  }, [merkleValue]);

  useEffect(() => {
    if (account && contract && merkleTree.length > 0) {
      checkIsValid();
    }
  }, [account, merkleTree, contract]);

  //Restrict network

  // useEffect(() => {
  //   window.ethereum.request({
  //     method: "wallet_addEthereumChain",
  //     params: params,
  //   });
  // }, [window]);

  return (
    <UberContext.Provider
      value={{
        account,
        setAccount,
        connectMetamask,
        getBalance,
        setFileImg,
        isValidOrNot,
        hasNFT,
      }}
    >
      {children}
    </UberContext.Provider>
  );
};
