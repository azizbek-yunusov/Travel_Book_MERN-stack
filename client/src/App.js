import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBook from "./pages/AddBook";
import UpdateBook from "./pages/UpdateBook";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <div className="raw">
          <div className="col-lg-8 offset-lg-2">
            <Routes>
              <Route path="/" exect element={<Main />} />
              <Route path="/add" element={<AddBook />} />
              <Route path="/update/:id" element={<UpdateBook />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
