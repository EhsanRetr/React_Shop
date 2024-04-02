import "./App.css";
import Header from "./containers/header/header";
import { Footer } from "./containers/footer/footer";
import { Routes, Route } from "react-router-dom";
import { Shop, Login } from "./pages";
import { Shopcategory } from "./pages/shop/shop-category";
import { Productpage } from "./pages/shop/Product-page";
import Cart from "./pages/shop/Cart";
import Home from "./pages/Home/Home";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ForHouse" element={<Shopcategory category="House" />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Home" element={<Home />} />
        <Route
          path="/Localstore"
          element={<Shopcategory category="Localy" />}
        />
        <Route path="/Productpage" element={<Productpage />}>
          <Route path=":productId" element={<Productpage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

//<Route exact path="/shop" component={shop}>
