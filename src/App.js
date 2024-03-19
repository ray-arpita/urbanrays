import "./App.css";
import Main from "./layouts/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about/about";
import Layout from "./layouts/layout/Layout";
import Shop from "./pages/shop/shop";
import Register from "./pages/register/register";
import ProductDetailPage from "./pages/detailPage/detailPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product-detail/:id" element={<ProductDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
