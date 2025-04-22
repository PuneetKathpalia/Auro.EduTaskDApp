import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAuth } from '../helper/authWrapper';
import FundRiserCard from '../components/FundRiserCard';
import Loader from '../components/Loader';

export default function MyContributions() {
  const { account } = useAuth();
  const { contributions, loading } = useSelector((state) => state);

  if (!account) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Please connect your wallet</h2>
        <p className="text-gray-600">You need to connect your wallet to view your contributions.</p>
      </div>
    );
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">My Contributions</h2>
      {contributions.length === 0 ? (
        <p className="text-gray-600">You haven't contributed to any projects yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contributions.map((project) => (
            <FundRiserCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
} 