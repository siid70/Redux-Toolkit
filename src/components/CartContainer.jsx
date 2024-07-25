import { clearCart } from "../features/cart/cartReducer";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  if (amount < 1) {
    return (
      <section className="cart container">
        <header>
          <h2 style={{ textAlign: "center" }}>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart container">
      <header>
        <h2 style={{ textAlign: "center" }}>your bag</h2>
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
            <span style={{ float: "right" }}>${total}</span>
          </h4>
        </div>
        <button
          className="btn btn-danger clear-btn"
          onClick={() => dispatch(clearCart())}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
