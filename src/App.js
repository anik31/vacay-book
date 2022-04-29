import "styles.css";
import Mockman from "mockman-js";
import {Routes, Route} from "react-router-dom";
import {Home} from "pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/mockman" element={<Mockman/>} />
      </Routes>
    </div>
  );
}

export default App;
