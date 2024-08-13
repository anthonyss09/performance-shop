"use client";
import { useRouter } from "next/navigation";

import { useAppSelector, useAppDispatch } from "../../lib/hooks";
import {
  addItemToCart,
  removeItemFromCart,
  selectCartData,
  useUpdateCartLineMutation,
} from "../../lib/features/cart/cartSlice";
import Image from "next/image";
import styles from "./page.module.css";
import sneakerOne from "../../../public/assets/images/sneakerOne.jpeg";
import manRunnerDark from "../../../public/assets/images/manRunnerDark.jpeg";
import CartRow from "./CartRow";

export default function CartPage() {
  const cart = useAppSelector(selectCartData);
  const [updateCartLine] = useUpdateCartLineMutation();
  const lines = cart.cartData ? cart.cartData.lines : null;
  console.log(cart);

  // const dispatch = useAppDispatch();
  const router = useRouter();

  // const handleAddItem = () => {
  //   dispatch(addItemToCart());
  // };

  // const handleRemoveItem = () => {
  //   dispatch(removeItemFromCart());
  // };

  const hanldeCheckout = () => {
    console.log("checkout clicked", cart.cartData.checkoutUrl);
    const checkoutUrl = cart.cartData.checkoutUrl;
    router.push(checkoutUrl);
  };

  const itemList = (
    <ul className={styles.cartItemsList} role="cart-item-list">
      {lines ? (
        lines.edges.map((edge, index) => (
          <li key={index}>
            <CartRow
              productImageUrl={sneakerOne}
              productTitle={edge.node.attributes[0].value}
              variantTitle={edge.node.attributes[1].value}
              quantity={edge.node.quantity}
            />
          </li>
        ))
      ) : (
        <div className={styles.cartItemsList}>
          {" "}
          <p>No items in cart.</p>
        </div>
      )}
    </ul>
  );

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.manRunnerContainer}>
          {" "}
          <Image
            priority={true}
            src={manRunnerDark}
            alt="product preview"
            fill
            className={styles.manRunnerImage}
            role="cart-background-image"
          />
        </div>
        <h1>Cart Summary</h1>
      </header>
      <main className={styles.main} role="cart-main">
        <div>
          <header className={styles.subHeader} role="cart-header">
            <h2 className={styles.title} role="cart-h2">
              Your Cart
            </h2>
            <p role="cart-header-p">Items {cart.cartCount} / Subtotal $189</p>
          </header>
          {itemList}
        </div>

        <div className={styles.orderSummary}>
          <div className={styles.orderDetails}>
            <h3>Order Summary</h3>
            <span>
              <p>SubTotal</p>
              <p className={styles.amount} role="cart-subtotal">
                $189
              </p>
            </span>
            <span>
              <p>Sales Tax</p>
              <p className={styles.amount} role="cart-tax">
                $20
              </p>
            </span>
            <span>
              <p>Delivery</p>
              <p className={styles.amount} role="cart-delivery">
                Free
              </p>
            </span>
            <span className={styles.total}>
              <p>Total</p>
              <p className={styles.amount} role="cart-total">
                $209
              </p>
            </span>
          </div>
          <footer className={styles.footer}>
            {" "}
            <button
              className={`btn ${styles.btn}`}
              onClick={hanldeCheckout}
              role="cart-btn"
            >
              Checkout
            </button>
          </footer>
        </div>
      </main>
    </div>
  );
}
