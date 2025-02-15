import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/navbar";
import Signup from "./Pages/Signup";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Signup></Signup>
      </div>
    </>
  );
}

export default App;
