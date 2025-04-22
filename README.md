# Crowdfunding DApp

A decentralized crowdfunding platform built with Next.js, Tailwind CSS, and Ethereum smart contracts.

## Features

- Create and manage crowdfunding projects
- Contribute to projects using ETH
- View project details and progress
- Create and vote on withdrawal requests
- Track your contributions
- MetaMask wallet integration

## Tech Stack

- Next.js
- Tailwind CSS
- Redux
- Ethers.js
- Web3Modal
- MetaMask

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd crowdfunding-dapp
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```
NEXT_PUBLIC_CONTRACT_ADDRESS=your_contract_address
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
client/
  components/      # Reusable UI components
  helper/         # Helper functions and utilities
  pages/          # Next.js pages
  redux/          # Redux store, actions, and reducers
  styles/         # Global styles and Tailwind CSS
  public/         # Static assets
```

## Smart Contract Integration

The frontend interacts with an Ethereum smart contract for:
- Project creation and management
- Contributions
- Withdrawal requests
- Voting system

Make sure to:
1. Deploy the smart contract
2. Update the contract address in your environment variables
3. Have MetaMask installed in your browser

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License. 