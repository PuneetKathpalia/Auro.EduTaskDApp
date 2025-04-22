import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth } from '../helper/authWrapper';
import FundRiserCard from '../components/FundRiserCard';
import FundRiserForm from '../components/FundRiserForm';
import Loader from '../components/Loader';

export default function Dashboard() {
  const { account } = useAuth();
  const dispatch = useDispatch();
  const { projects, loading } = useSelector((state) => state);

  if (!account) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Please connect your wallet</h2>
        <p className="text-gray-600">You need to connect your wallet to view the dashboard.</p>
      </div>
    );
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Active Projects</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <FundRiserCard key={project.id} project={project} />
            ))}
          </div>
        </div>
        <div>
          <FundRiserForm />
        </div>
      </div>
    </div>
  );
} 