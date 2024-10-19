import Layout from "./layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFount from "./pages/NotFount";
import Single from "./pages/Single";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="category" element={<Category/>}  />
        <Route path="category/dog/smalldog/:id" element={<Single />} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="*" element={<NotFount/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
