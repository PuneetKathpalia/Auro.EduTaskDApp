import { useAuth } from '../helper/authWrapper';
import Link from 'next/link';

export default function Home() {
  const { account } = useAuth();

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">
        Welcome to CrowdFund DApp
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        A decentralized platform for crowdfunding your projects
      </p>

      {account ? (
        <div className="space-y-4">
          <Link href="/dashboard" className="btn-primary inline-block">
            Go to Dashboard
          </Link>
          <p className="text-gray-600">
            Connected as: {account.slice(0, 6)}...{account.slice(-4)}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-gray-600">
            Connect your wallet to get started
          </p>
          <button
            onClick={() => window.ethereum.request({ method: 'eth_requestAccounts' })}
            className="btn-primary"
          >
            Connect Wallet
          </button>
        </div>
      )}
      
      <div className="mt-16 text-gray-500 text-4xl">
        Created by Puneet Kathpalia
      </div>
    </div>
  );
} 