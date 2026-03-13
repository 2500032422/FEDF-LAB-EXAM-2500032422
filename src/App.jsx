import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./exam/Home";
import AddStudent from "./exam/AddStudent";
import ApiDemo from "./exam/ApiDemo";
import DisplayData from "./exam/DisplayData";


function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<AddStudent />} />
        <Route path="/api-demo" element={<ApiDemo />} />
        <Route path="/display" element={<DisplayData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
