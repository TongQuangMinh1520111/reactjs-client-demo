import { Route, Routes } from "react-router-dom";
import Register from "./components/register.component";
import Login from "./components/login.component.";
import Header from "./components/header.component";
import Home from "./pages/home";
import ProductDetail from "./components/products/ProductDetail";
import CartScreen from "./components/cart/CartScreen";
import ListProduct from "./components/products/ListProduct";
import Footer from "./components/footer.component";
import Profile from "./components/profile/Profile";
import ProtectedRoutes from "./components/ProtectedRoutes";
import OrderForm from "./components/order/OrderForm";
import Search from "./pages/search";
import Cookies from "universal-cookie";

const App = () => {
  const cookies = new Cookies();
  const isLogIn = cookies.get("TOKEN");
  console.log("token", isLogIn);
  return (
    <>
      <Header isLogIn={isLogIn} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ListProduct />}></Route>
          <Route path="/products/:slug" element={<ProductDetail />}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={isLogIn ? <Home /> : <Login />} />
          <Route path="/search" element={<Search />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/order" element={<OrderForm />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
