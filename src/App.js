import "styles.css";
import Mockman from "mockman-js";
import {Routes, Route} from "react-router-dom";
import {Bookmarks, Profile} from "pages";
import { Navbar, NotFound, RequireAuth, RestrictAuth, WithSidebar } from "components";
import {Login, Signup, Feed, Explore} from "features";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllUser } from "features/profile/userSlice";
import { getPosts } from "features/post/postSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllUser());
    dispatch(getPosts());
  },[]);

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route element={<RequireAuth/>}>
          <Route element={<WithSidebar/>}>
            <Route path="/" element={<Feed/>} />
            <Route path="/explore" element={<Explore/>} />
            <Route path="/bookmarks" element={<Bookmarks/>} />
            <Route path="/profile" element={<Profile/>} />
          </Route>
        </Route>
        <Route element={<RestrictAuth/>}>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Route>
        <Route path="*" element={<NotFound/>} />
        <Route path="/mockman" element={<Mockman/>} />
      </Routes> 
    </div>
  );
}

export default App;
