import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../features/Modal/modalSlice";
import CartItem from "./CartItem";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  if (amount < 1) {
    return (
      <section className="cart container">
        <header>
          <h2 className="head-title">Your Bag</h2>
          <h4 className="empty-cart">Is currently Empty!</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart container">
      <header>
        <h2 className="head-title">Your Bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer style={{ alignItems: "center", textAlign: "center" }}>
        <hr />
        <div className="cart-total" style={{ paddingBottom: "3rem" }}>
          <h4>
            <span style={{ float: "left" }}>Total</span>{" "}
            <span style={{ float: "right" }}>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="btn btn-danger clear-btn"
          onClick={() => dispatch(openModal())}
        >
          Clear Carts
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
