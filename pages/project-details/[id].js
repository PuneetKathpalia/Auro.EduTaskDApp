import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../helper/authWrapper';
import { formatAmount, calculateProgress, getTimeLeft } from '../../helper/helper';
import { contribute } from '../../redux/interactions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader';

export default function ProjectDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { account } = useAuth();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state);
  const [project, setProject] = useState(null);
  const [contributionAmount, setContributionAmount] = useState('');

  useEffect(() => {
    if (id) {
      // In a real app, you would fetch the project details from your contract
      // For now, we'll use mock data
      setProject({
        id,
        title: 'Sample Project',
        description: 'This is a sample project description.',
        currentAmount: '1.5',
        targetAmount: '5.0',
        endTime: Math.floor(Date.now() / 1000) + 86400 * 7, // 7 days from now
        creator: '0x1234567890123456789012345678901234567890',
      });
    }
  }, [id]);

  const handleContribute = async (e) => {
    e.preventDefault();
    if (!contributionAmount) {
      alert('Please enter an amount to contribute');
      return;
    }

    try {
      const success = await contribute(dispatch, id, contributionAmount);
      if (success) {
        setContributionAmount('');
        // Refresh project data
        // In a real app, you would fetch the updated project data
      }
    } catch (error) {
      alert('Failed to contribute: ' + error.message);
    }
  };

  if (!project) {
    return <Loader />;
  }

  const progress = calculateProgress(project.currentAmount, project.targetAmount);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-600 mb-6">{project.description}</p>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>{formatAmount(project.currentAmount)} ETH</span>
            <span>{formatAmount(project.targetAmount)} ETH</span>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-600">
            <span className="font-semibold">Creator:</span> {project.creator.slice(0, 6)}...{project.creator.slice(-4)}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Time Left:</span> {getTimeLeft(project.endTime)}
          </p>
        </div>

        {account && (
          <form onSubmit={handleContribute} className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Contribution Amount (ETH)</label>
              <input
                type="number"
                value={contributionAmount}
                onChange={(e) => setContributionAmount(e.target.value)}
                className="input-field"
                placeholder="Enter amount in ETH"
                step="0.01"
                min="0"
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full"
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Contribute'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
} 