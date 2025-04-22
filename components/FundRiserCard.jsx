import Link from 'next/link';
import { formatAmount, calculateProgress, getTimeLeft } from '../helper/helper';

const FundRiserCard = ({ project }) => {
  const progress = calculateProgress(project.currentAmount, project.targetAmount);

  return (
    <div className="card hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      
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

      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          {getTimeLeft(project.endTime)}
        </span>
        <Link
          href={`/project-details/${project.id}`}
          className="btn-primary text-sm"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default FundRiserCard; 