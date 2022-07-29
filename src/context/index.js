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
import { GET_USER, REGISTER_USER } from "../Routes/serverRoutes";
import toast from "react-hot-toast";
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
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [registeredAlready, setRegisteredAlready] = useState();

  const connectMetamask = async () => {
    try {
      setLoading(true);
      if (window.ethereum !== "undefined") {
        let providerTemp = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(providerTemp);
        let accounts = await providerTemp.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
        let cont = await new ethers.Contract(
          contractAddress,
          abi,
          providerTemp
        );

        setContract(cont);
      } else {
        toast.error("Please install metamask");
      }
    } catch (error) {
      toast.error(error.message);
    }
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
    try {
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
        setLoading(false);
        if (nftOwned) {
          getNft();
        }
      } else {
        setLoading(false);
        toast.error("You are not a whitelisted user");
      }
    } catch (error) {
      console.log("error=", error);
    }
  };

  const mintNFT2 = async () => {
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

    let url = "https://api.pinata.cloud/pinning/pinJSONToIPFS";
    let res = await axios.post(url, tokenUri, {
      headers: {
        pinata_api_key: PINATA_API_KEY,
        pinata_secret_api_key: PINATA_API_SECRET,
      },
    });
    console.log("hey khizer===", res);
  };
  const mintNFT = async () => {};

  const getLoggedInUser = async () => {
    try {
      let user = await axios.get(
        `${GET_USER}/${account}`
      );
      const data = user.data;
      // console.log("hey =====", typeof data);
      // let data = JSON.stringify(user.data);
      // let email = data.split("\n");
      // email = email[0].split(":");
      // email = email[1].split(`\"`);
      // console.log("hey", email[1]);
      if (data.email) {
        setRegisteredAlready(true);
        setUserInfo(user.data);
      } else {
        setRegisteredAlready(false);
      }
    } catch (error) {
      console.log("Error===", error);
    }
  };

  const submitRegisterForm = async (username, email) => {
    try {
      let data = {
        username: username,
        email: email,
        wallet: account.toLocaleLowerCase(),
      };

      let res = await axios.post(`${REGISTER_USER}`, data);
      setUserInfo(data);
    } catch (error) {
      console.log("error====", error);
    }
  };

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

  useEffect(() => {
    if (account.length > 0 && isValidOrNot === true) {
      getLoggedInUser();
    }
  }, [account, isValidOrNot]);

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
        submitRegisterForm,
        isValidOrNot,
        hasNFT,
        loading,
        registeredAlready,
      }}
    >
      {children}
    </UberContext.Provider>
  );
};
