import { closeModal } from "../features/Modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
// import { Modal } from "bootstrap";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-center">
      <div className="modal-content">
        <h4 className="modal-body">
          remove all items from your shopping cart?
        </h4>
      </div>
      <div className="btn-container">
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch(clearCart());
            dispatch(closeModal());
          }}
        >
          Confirm
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          Cancel
        </button>
      </div>
    </aside>
    // <div className="modal" tabIndex="-1">
    //   <div className="modal-dialog">
    //     <div className="modal-content">
    //       <div className="modal-header">
    //         <h5 className="modal-title">Modal title</h5>
    //         <button
    //           type="button"
    //           className="btn-close"
    //           data-bs-dismiss="modal"
    //           aria-label="Close"
    //         ></button>
    //       </div>
    //       <div className="modal-body">
    //         <p>Modal body text goes here.</p>
    //       </div>
    //       <div className="modal-footer">
    //         <button
    //           type="button"
    //           className="btn btn-secondary"
    //           onClick={() => {
    //             dispatch(clearCart());
    //             dispatch(closeModal());
    //           }}
    //           data-bs-dismiss="modal"
    //         >
    //           Confirm
    //         </button>
    //         <button
    //           type="button"
    //           className="btn btn-primary"
    //           onClick={() => {
    //             dispatch(closeModal());
    //           }}
    //         >
    //           Cancel
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Modal;
