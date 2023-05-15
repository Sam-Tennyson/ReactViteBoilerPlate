import { combineReducers } from 'redux';
import Auth from './Auth';
import Loader from './Loader';

const appReducer = combineReducers({
  auth: Auth,
  loading: Loader
});

const RootReducer = (state, action) => {
  return appReducer(state, action);
};

export default RootReducer;