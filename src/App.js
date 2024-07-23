import Main from "./layouts/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about/about";
import Layout from "./layouts/layout/Layout";
import Shop from "./pages/shop/shop";
import Register from "./pages/register/register";
import ProductDetailPage from "./pages/detailPage/detailPage";
import TermsAndConditions from "./pages/terms&conditions/t&c";
import Blog from "./pages/blog/blog";
import Cart from "./pages/cart/cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Register />} />
            <Route path="/product-detail/:id" element={<ProductDetailPage />} />
            <Route path='/terms' element={<TermsAndConditions/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/cart' element={<Cart/>} />
          </Route>
        </Routes>
      </BrowserRouter> 
    </>
  );
}
export default App;
