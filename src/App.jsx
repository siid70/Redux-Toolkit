import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { calcTotal } from "./features/cart/cartReducer";
import "./App.css";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calcTotal());
  }, [dispatch, cartItems]);
  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  );
}

export default App;
