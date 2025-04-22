import Link from 'next/link';
import { useAuth } from '../../../helper/authWrapper';
import { formatAddress } from '../../../helper/helper';

const Navbar = () => {
  const { account, connect, disconnect } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800">CrowdFund DApp</span>
            </Link>
            <div className="hidden md:flex items-center space-x-4 ml-10">
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                Dashboard
              </Link>
              <Link href="/my-contributions" className="text-gray-600 hover:text-gray-900">
                My Contributions
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {account ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">{formatAddress(account)}</span>
                <button
                  onClick={disconnect}
                  className="btn-secondary"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button
                onClick={connect}
                className="btn-primary"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 