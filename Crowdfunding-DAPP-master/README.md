# 🚀 Crowdfunding DApp

A decentralized crowdfunding platform where anyone can start or support fundraising campaigns built on Ethereum using smart contracts.

## 💡 Features

- ✅ Start a fundraising campaign
- ✅ Anyone can contribute to active campaigns
- ✅ Automatically end campaign when target is reached
- ✅ Campaign expires if goal not met before deadline
- ✅ Contributors can withdraw if campaign expires
- ✅ Owner must request contributor approval to withdraw
- ✅ Owner can withdraw funds if 50%+ contributors approve
- ✅ Wallet integration for Web3 interaction

---

## 🛠 Tech Stack & Packages

| Package 📦                                                         | Description 📘                                                        |
|---------------------------------------------------------------------|------------------------------------------------------------------------|
| [Next.js](https://nextjs.org/docs/getting-started)                  | Frontend framework                                                     |
| [Solidity](https://docs.soliditylang.org/)                          | Smart contract development                                             |
| [Tailwind CSS](https://tailwindcss.com/docs/installation)           | UI design utility classes                                              |
| [Ethers.js](https://docs.ethers.io/v5/)                             | Ethereum library for interaction & testing                             |
| [Web3.js](https://web3js.readthedocs.io/)                           | Ethereum JavaScript API                                                |
| [Hardhat](https://hardhat.org/)                                     | Ethereum development environment                                       |
| [Redux](https://redux.js.org/)                                      | Application state management                                           |
| [Chai](https://www.chaijs.com/)                                     | Testing assertion library                                              |
| [React Toastify](https://www.npmjs.com/package/react-toastify)      | Toast notifications for the frontend                                   |

---

## 🏁 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/crowdfunding-dapp.git
cd crowdfunding-dapp
npx hardhat accounts                               # List accounts
npx hardhat compile                               # Compile contracts
npx hardhat clean                                 # Clear build artifacts
npx hardhat test                                  # Run tests
npx hardhat node                                  # Run local Ethereum network
node scripts/deploy.js                            # Deploy contract
npx hardhat run scripts/deploy.js --network <network>  # Deploy on custom network
npx hardhat help                                  # CLI help

