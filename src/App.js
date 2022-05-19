import "styles.css";
import Mockman from "mockman-js";
import {Routes, Route} from "react-router-dom";
import {Home, Explore, Bookmarks, Profile} from "pages";
import { Navbar, NotFound, RequireAuth, RestrictAuth, WithSidebar } from "components";
import {Login, Signup} from "features";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route element={<RequireAuth/>}>
          <Route element={<WithSidebar/>}>
            <Route path="/" element={<Home/>} />
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
