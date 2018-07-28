
import { UPDATE_TOKEN } from "./action";

export default function isLoading(token = null, action) {
  switch (action.type) {
      case UPDATE_TOKEN:
          return action.token
          break;
      default:
          return token
  }
}