require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey =
  "e4f258668e3a0ecbb292381775bdb71cdf042199fb12b5b44f981e82fcf19de3";
const projectId = "1bde000487b449a4932b269a0084a6f3";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 137,
    },
    mumbai: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${projectId}`
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [privateKey],
    },
    matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [privateKey],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
