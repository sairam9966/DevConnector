import { React, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/profile-forms/CreateProfile";
import Profile from "./components/profile/Profile";
import EditProfile from "./components/profile-forms/EditProfile";
import AddExperience from "./components/profile-forms/AddExperience";
import AddEducation from "./components/profile-forms/AddEducation";
import Profiles from "./components/profiles/Profiles";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";
import PrivateRoute from "./components/routing/PrivateRoute";
import NotFound from "./components/layout/NotFound";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Alert />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profiles' element={<Profiles />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/dashboard' element={<PrivateRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>

          <Route path='/create-profile' element={<PrivateRoute />}>
            <Route path='/create-profile' element={<CreateProfile />} />
          </Route>
          <Route path='/edit-profile' element={<PrivateRoute />}>
            <Route path='/edit-profile' element={<EditProfile />} />
          </Route>
          <Route path='/add-experience' element={<PrivateRoute />}>
            <Route path='/add-experience' element={<AddExperience />} />
          </Route>
          <Route path='/add-education' element={<PrivateRoute />}>
            <Route path='/add-education' element={<AddEducation />} />
          </Route>
          <Route path='/posts' element={<PrivateRoute />}>
            <Route path='/posts' element={<Posts />} />
          </Route>
          <Route path='/posts/:id' element={<PrivateRoute />}>
            <Route path='/posts/:id' element={<Post />} />
          </Route>

          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
