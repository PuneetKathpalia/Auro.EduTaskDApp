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

const initialState = {
  account: null,
  projects: [],
  contributions: [],
  withdrawRequests: [],
  loading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONNECT_WALLET:
      return {
        ...state,
        account: action.payload,
        error: null,
      };
    case DISCONNECT_WALLET:
      return {
        ...state,
        account: null,
        error: null,
      };
    case SET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        error: null,
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        error: null,
      };
    case SET_CONTRIBUTIONS:
      return {
        ...state,
        contributions: action.payload,
        error: null,
      };
    case SET_WITHDRAW_REQUESTS:
      return {
        ...state,
        withdrawRequests: action.payload,
        error: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer; 