import {
  SET_NAME_MOVIE,
} from 'src/actions/quizz';

export const initialState = {
  name: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NAME_MOVIE:
      return {
        ...state,
        name: action.value,
      };
    default:
      return state;
  }
};

// == Export
export default reducer;
