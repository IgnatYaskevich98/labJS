import * as actions from "../actions/actions";
import { handleActions } from "redux-actions";


const initialState = {
  pokemonList: [],
  isLoading: false,
  errors: null,
};

export const pokemonPageReducer = handleActions(
  {
    [actions.GET_POKEMON_REQUEST]: (state) => {
      return { ...state, isLoading: true };
    },
    [actions.GET_POKEMON_SUCCESS]: (state, { payload: pokemonList }) => {
      return { ...state, isLoading: false, pokemonList: pokemonList };
    },
    [actions.GET_POKEMON_FAIL]: (state, { payload: error }) => {
      return { ...state, isLoading: false, errors: error };
    },
  },
  initialState
);
