import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Admin/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { loadUser } from "./redux/actions/auth";
import { connect } from "react-redux";
import Error from "./pages/Error";
import store from "./redux/store";
import { useDispatch } from "react-redux";
import Crimes from "./pages/Admin/Crimes";
import Criminals from "./pages/Admin/Criminals";
import MissingPeople from "./pages/Admin/MissingPeople";
import Forms from "./pages/Admin/Forms";
import Summary from "./pages/Admin/Summary";

if (window.localStorage.getItem("token")) {
  store.dispatch(loadUser());
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      dispatch(loadUser());
    }
  }, []);
  return (
    <>
      <Router>
        <header className="App-header"></header>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/login"} element={<Login />} />
          <Route
            exact
            path={"/dashboard"}
            element={
              <PrivateRoute>
                <Summary />
              </PrivateRoute>
            }
          />

          <Route
            exact
            path={"/crimes"}
            element={
              <PrivateRoute>
                <Crimes />
              </PrivateRoute>
            }
          />

          <Route
            exact
            path={"/criminals"}
            element={
              <PrivateRoute>
                <Criminals />
              </PrivateRoute>
            }
          />

          <Route
            exact
            path={"/missing-people"}
            element={
              <PrivateRoute>
                <MissingPeople />
              </PrivateRoute>
            }
          />

          <Route
            exact
            path={"/forms"}
            element={
              <PrivateRoute>
                <Forms />
              </PrivateRoute>
            }
          />

          <Route exact path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default connect(null, { loadUser })(App);
