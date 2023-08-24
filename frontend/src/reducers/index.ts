import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import api from './api';
import trip from './trip';

export const config = {
  key: 'root',
  storage,
  whitelist: ['trip'],
  timeout: 10000
};

const rootReducer = persistCombineReducers(config, {
  [api.reducerPath]: api.reducer,
  trip
});

export default rootReducer;