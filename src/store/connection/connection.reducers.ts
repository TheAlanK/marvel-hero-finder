import { createReducer, on } from '@ngrx/store';
import { checkConnectionFailure, checkConnectionSuccess } from './connection.actions';
import { ConnectionState } from './connection.state';

export const initialState: ConnectionState = {
  isConnected: true,
};

export const connectionReducer = createReducer(
  initialState,
  on(checkConnectionSuccess, state => ({ ...state, isConnected: true })),
  on(checkConnectionFailure, state => ({ ...state, isConnected: false }))
);
