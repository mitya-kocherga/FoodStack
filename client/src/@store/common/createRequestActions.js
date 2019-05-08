import { createAction } from "redux-actions";

export const createRequestActions = (actionType, payloadCreator) => {
  const actionCreator = createAction(actionType, payloadCreator);
  actionCreator.success = actionType + "_SUCCESS";
  actionCreator.fail = actionType + "_FAIL";

  return actionCreator;
}
