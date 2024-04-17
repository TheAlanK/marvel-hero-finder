import { createReducer, on } from "@ngrx/store";
import { LoadingState } from "./loading.state";
import { setLoading } from "./loading.actions";

export const initialState: LoadingState = {
  loading: false,
};

export const loadingReducer = createReducer(
  initialState,
  on(setLoading, (state, { status }) => ({ ...state, loading: status }))
);
