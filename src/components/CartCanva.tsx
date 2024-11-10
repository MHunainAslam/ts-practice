import React from "react";
import { useCart } from "./useCart";
import { useAppContext } from "./AppContext";

type Props = {};

const CartCanva = (props: Props) => {
  const {
    cart,
    finalTotal,
    handleUpdateQuantity,
    checkItemInCart,
  } = useAppContext();
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {cart?.map((item) => {
            const itemInCart = checkItemInCart(item.name);
            return (
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="/images/cover_image_1698325190.jpeg"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <div className="d-flex justify-content-between">
                        <>
                          <button
                            className="btn btn-danger"
                            onClick={() =>
                              handleUpdateQuantity(item, "decrease")
                            }
                          >
                            -
                          </button>
                          <span className="align-self-center">
                            Quantity: {itemInCart?.quantity}
                          </span>
                          <button
                            className="btn btn-success"
                            onClick={() =>
                              handleUpdateQuantity(item, "increase")
                            }
                          >
                            +
                          </button>
                        </>
                      </div>{" "}
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {finalTotal ?? null}
        </div>
      </div>
    </>
  );
};

export default CartCanva;
