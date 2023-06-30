import {
  LIST_API
} from "../utils/utils";
export const reducer = (state, action) => {
  switch (action.type) {
    case "LIST_API":
      return { ...state, api: LIST_API };
    default:
      return state;
  }
};
