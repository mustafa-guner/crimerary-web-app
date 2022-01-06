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
import CriminalsForm from "./components/Admin/layout/CriminalsForm";
import CrimesForm from "./components/Admin/layout/CrimesForm";
import CrimesEdit from "./components/Admin/layout/CrimesEdit";
import AdminError from "./pages/Admin/Error";
import Team from "./pages/Team";
import CrimesList from "./pages/CrimesList";
import CriminalsList from "./pages/CriminalsList";
import CriminalEdit from "./components/Admin/layout/CriminalsEdit";
import Contact from "./pages/Contact";
import Crime from "./pages/Crime";
import MissingPeopleForm from "./components/Admin/layout/MissingPeopleForm";

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
          <Route exact path={"/team"} element={<Team />} />
          <Route exact path={"/crimes"} element={<CrimesList />} />
          <Route exact path={"/crimes/crime/:crimeID"} element={<Crime />} />
          <Route exact path={"/criminals"} element={<CriminalsList />} />
          <Route exact path={"/contact"} element={<Contact />} />
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
            path={"/dashboard/crimes"}
            element={
              <PrivateRoute>
                <Crimes />
              </PrivateRoute>
            }
          />

          <Route
            exact
            path={"/dashboard/add-criminal"}
            element={
              <PrivateRoute>
                <CriminalsForm />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path={"/dashboard/add-crime-post"}
            element={
              <PrivateRoute>
                <CrimesForm />
              </PrivateRoute>
            }
          />

          <Route
            exact
            path={"/dashboard/edit-crime/:crimeID"}
            element={
              <PrivateRoute>
                <CrimesEdit />
              </PrivateRoute>
            }
          />

          <Route
            exact
            path={"/dashboard/criminals"}
            element={
              <PrivateRoute>
                <Criminals />
              </PrivateRoute>
            }
          />

          <Route
            exact
            path={"/dashboard/edit-criminal/:criminalID"}
            element={
              <PrivateRoute>
                <CriminalEdit />
              </PrivateRoute>
            }
          />

          <Route
            exact
            path={"/dashboard/missing-people"}
            element={
              <PrivateRoute>
                <MissingPeople />
              </PrivateRoute>
            }
          />

          <Route
            exact
            path={"/dashboard/add-missing-person"}
            element={
              <PrivateRoute>
                <MissingPeopleForm />
              </PrivateRoute>
            }
          />

          <Route
            exact
            path={"/dashboard/forms"}
            element={
              <PrivateRoute>
                <Forms />
              </PrivateRoute>
            }
          />
          <Route exact path={"/dashboard/*"} element={<AdminError />} />

          <Route exact path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default connect(null, { loadUser })(App);
