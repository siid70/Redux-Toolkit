// import React from "react";
import { ChevronDown, ChevronUp } from "../icons";
import { removeItem, increase, decrease } from "../features/cart/cartReducer";
import { useDispatch } from "react-redux";

const CartItem = ({ id, title, img, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item container">
      <img src={img} alt={title} />
      <div className="cart-item-info">
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          remove
        </button>
      </div>
      <div className="amount-info">
        <button
          onClick={() => {
            dispatch(increase(id));
          }}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          onClick={() => {
            if (amount === 0) {
              // dispatch(removeItem(id));
              return;
            }
            dispatch(decrease(id));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
