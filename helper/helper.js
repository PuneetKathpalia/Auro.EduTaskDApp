import { ethers } from 'ethers';

export const formatAddress = (address) => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const formatAmount = (amount) => {
  if (!amount) return '0';
  return ethers.utils.formatEther(amount);
};

export const parseAmount = (amount) => {
  if (!amount) return '0';
  return ethers.utils.parseEther(amount.toString());
};

export const calculateProgress = (current, target) => {
  if (!current || !target) return 0;
  const currentAmount = ethers.utils.formatEther(current);
  const targetAmount = ethers.utils.formatEther(target);
  return (currentAmount / targetAmount) * 100;
};

export const getTimeLeft = (endTime) => {
  if (!endTime) return '0 days';
  const now = Math.floor(Date.now() / 1000);
  const timeLeft = endTime - now;
  
  if (timeLeft <= 0) return 'Ended';
  
  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  
  if (days > 0) return `${days} days`;
  return `${hours} hours`;
}; 