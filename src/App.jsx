import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components";

import Home from "./pages/Home";
import Register from "./pages/Register";
import ContactPage from "./pages/ContactPage";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
