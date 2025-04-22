import {
  CONNECT_WALLET,
  DISCONNECT_WALLET,
  SET_PROJECTS,
  ADD_PROJECT,
  SET_CONTRIBUTIONS,
  SET_WITHDRAW_REQUESTS,
  SET_LOADING,
  SET_ERROR,
} from './types';

export const connectWallet = (account) => ({
  type: CONNECT_WALLET,
  payload: account,
});

export const disconnectWallet = () => ({
  type: DISCONNECT_WALLET,
});

export const setProjects = (projects) => ({
  type: SET_PROJECTS,
  payload: projects,
});

export const addProject = (project) => ({
  type: ADD_PROJECT,
  payload: project,
});

export const setContributions = (contributions) => ({
  type: SET_CONTRIBUTIONS,
  payload: contributions,
});

export const setWithdrawRequests = (requests) => ({
  type: SET_WITHDRAW_REQUESTS,
  payload: requests,
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
}); 