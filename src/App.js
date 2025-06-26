
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./include/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Shop2 from "./pages/Shop2";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import './css/style.scss';


function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop2" element={<Shop2 />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
