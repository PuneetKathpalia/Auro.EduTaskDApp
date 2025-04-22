import { useDispatch } from 'react-redux';
import { voteOnWithdrawRequest } from '../redux/interactions';
import { formatAmount, formatAddress } from '../helper/helper';

const WithdrawRequestCard = ({ projectId, request }) => {
  const dispatch = useDispatch();

  const handleVote = async (approve) => {
    await voteOnWithdrawRequest(dispatch, projectId, request.id, approve);
  };

  return (
    <div className="card">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="font-semibold">Request by {formatAddress(request.requester)}</h4>
          <p className="text-gray-600">Amount: {formatAmount(request.amount)} ETH</p>
        </div>
        <div className="text-sm text-gray-500">
          Votes: {request.approvals}/{request.requiredApprovals}
        </div>
      </div>

      <div className="flex space-x-2">
        <button
          onClick={() => handleVote(true)}
          className="btn-primary flex-1"
          disabled={request.hasVoted}
        >
          Approve
        </button>
        <button
          onClick={() => handleVote(false)}
          className="btn-secondary flex-1"
          disabled={request.hasVoted}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default WithdrawRequestCard; 