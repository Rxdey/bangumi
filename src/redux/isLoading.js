import { LOADING_STATE } from "./action";

export default function isLoading(isLoading = false, action) {
  switch (action.type) {
      case LOADING_STATE:
          return action.isLoading
          break;
      default:
          return isLoading
  }
}