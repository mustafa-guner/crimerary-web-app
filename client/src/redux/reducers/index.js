import auth from "./auth";
import alert from "./alert";
import crimes from "./crimes";
import criminals from "./criminals";
import category from "./category";
import dashboard from "./dashboard";
import missingPerson from "./missingPerson";

import { combineReducers } from "redux";

export default combineReducers({
  auth,
  alert,
  crimes,
  criminals,
  category,
  dashboard,
  missingPerson,
});
