import { ethers } from 'ethers';
import { setLoading, setError } from './actions';

// Add your contract ABI and address here
const CONTRACT_ADDRESS = 'YOUR_CONTRACT_ADDRESS';
const CONTRACT_ABI = []; // Add your contract ABI here

export const getContract = (withSigner = false) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  if (withSigner) {
    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider.getSigner());
  }
  return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
};

export const createProject = async (dispatch, title, description, targetAmount) => {
  try {
    dispatch(setLoading(true));
    const contract = getContract(true);
    const tx = await contract.createProject(title, description, ethers.utils.parseEther(targetAmount));
    await tx.wait();
    dispatch(setLoading(false));
    return true;
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
    return false;
  }
};

export const contribute = async (dispatch, projectId, amount) => {
  try {
    dispatch(setLoading(true));
    const contract = getContract(true);
    const tx = await contract.contribute(projectId, {
      value: ethers.utils.parseEther(amount),
    });
    await tx.wait();
    dispatch(setLoading(false));
    return true;
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
    return false;
  }
};

export const createWithdrawRequest = async (dispatch, projectId, amount) => {
  try {
    dispatch(setLoading(true));
    const contract = getContract(true);
    const tx = await contract.createWithdrawRequest(projectId, ethers.utils.parseEther(amount));
    await tx.wait();
    dispatch(setLoading(false));
    return true;
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
    return false;
  }
};

export const voteOnWithdrawRequest = async (dispatch, projectId, requestId, approve) => {
  try {
    dispatch(setLoading(true));
    const contract = getContract(true);
    const tx = await contract.voteOnWithdrawRequest(projectId, requestId, approve);
    await tx.wait();
    dispatch(setLoading(false));
    return true;
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
    return false;
  }
}; 