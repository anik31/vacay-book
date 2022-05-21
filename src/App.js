import "styles.css";
import Mockman from "mockman-js";
import {Routes, Route} from "react-router-dom";
import { Navbar, NotFound, RequireAuth, RestrictAuth, WithSidebar } from "components";
import {Login, Signup, Feed, Explore, Bookmarks, Profile} from "features";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "features/profile/userSlice";
import { getPosts } from "features/post/postSlice";
import { getBookmarkPosts } from "features/post/bookmarkSlice";
import {useScrollToTop} from "hooks/useScrollToTop";

function App() {
  const dispatch = useDispatch();
  const {token} = useSelector(store=>store.auth);

  useScrollToTop();

  useEffect(()=>{
    if(token){
      dispatch(getAllUser());
      dispatch(getPosts());
      dispatch(getBookmarkPosts());
    }
  },[token]);

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route element={<RequireAuth/>}>
          <Route element={<WithSidebar/>}>
            <Route path="/" element={<Feed/>} />
            <Route path="/explore" element={<Explore/>} />
            <Route path="/bookmarks" element={<Bookmarks/>} />
            <Route path="/profile/:username" element={<Profile/>} />
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
