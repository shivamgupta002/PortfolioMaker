import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Portfolio from "./components/Portfolio/Portfolio";
import Registered from "./components/Portfolio/Registered/Registered";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/registered" element={<Registered />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
