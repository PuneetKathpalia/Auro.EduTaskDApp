import Web3Modal from 'web3modal';
import { ethers } from 'ethers';

export const web3Modal = new Web3Modal({
  network: 'mainnet',
  cacheProvider: true,
  providerOptions: {}
});

export const connectToWallet = async () => {
  try {
    const instance = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(instance);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    return { provider, signer, address };
  } catch (error) {
    console.error('Error connecting to wallet:', error);
    throw error;
  }
}; 