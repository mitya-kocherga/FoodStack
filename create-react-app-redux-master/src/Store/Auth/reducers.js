import { handleActions } from "redux-actions";

import { Auth} from "./Auth";
import { logIn } from "./actions"

const logInHandler = (state, { payload }) => ({
  ...state,
    isLogin: true,
    user: payload.user,
    isAdmin: false,
});


 export const authReducer = handleActions(
    {
      [logIn]: logInHandler,
    },
    new Auth()
  );
  