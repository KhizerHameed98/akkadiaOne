export const chainId = 137;
export const rpcUrls = "https://rpc-mainnet.maticvigil.com/";
export const nativeCurrency = {
  name: "MATIC",
  symbol: "MATIC",
  decimals: 18,
};

export const PINATA_API_KEY = "6010a28a84d3f899c1b9";
export const PINATA_API_SECRET =
  "4ccab7b55a6c474070fc6c36160154bb162bb58539af6370ca8349bef2f25ce1";

export const PINATA_GET_URL = "https://gateway.pinata.cloud/ipfs";
// export const params = [
//   {
//     chainId: "0x89",
//     rpcUrls: ["https://rpc-mainnet.matic.network/"],
//     chainName: "Matic Mainnet",
//     nativeCurrency: {
//       name: "MATIC",
//       symbol: "MATIC",
//       decimals: 18,
//     },
//     blockExplorerUrls: ["https://polygonscan.com/"],
//   },
// ];
export const params = [
  {
    chainId: 4,
    rpcUrls: ["https://rinkeby.infura.io/v3/"],
    // chainName: "Rinkeby Test Network",
    // nativeCurrency: {
    //   name: "MATIC",
    //   symbol: "RinkebyETH",
    //   decimals: 18,
    // },
    blockExplorerUrls: ["https://rinkeby.etherscan.io"],
  },
];
export const contractAddress = "0x7dc76c6c0F5655a413eB096bd286442E144b93C2";
