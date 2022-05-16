import "styles.css";
import Mockman from "mockman-js";
import {Routes, Route} from "react-router-dom";
import {Home, Explore, Bookmarks, Profile, Login, Signup} from "pages";
import { Navbar, NotFound, WithSidebar } from "components";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route element={<WithSidebar/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/bookmarks" element={<Bookmarks/>} />
          <Route path="/profile" element={<Profile/>} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/mockman" element={<Mockman/>} />
      </Routes> 
    </div>
  );
}

export default App;
