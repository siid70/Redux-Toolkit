import { closeModal } from "../features/Modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
      </div>
      <div className="btn-container">
        <button
          className="btn confirm-btn"
          onClick={() => {
            dispatch(clearCart());
            dispatch(closeModal());
          }}
        >
          Confirm
        </button>
        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          Cancel
        </button>
      </div>
    </aside>
  );
};

export default Modal;