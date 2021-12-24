import auth from "./auth";
import alert from "./alert";
import crimes from "./crimes";
import criminals from "./criminals";

import { combineReducers } from "redux";

export default combineReducers({ auth, alert, crimes, criminals });
