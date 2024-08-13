import chevronUp from "../assets/svgs/chevronUp.svg";
import chevronDown from "../assets/svgs/chevronDown.svg";
import styles from "./page.module.css";
import sneakerOne from "../../../public/assets/images/sneakerOne.jpeg";
import Image from "next/image";

export default function CartRow({
  cartId,
  lineId,
  productTitle,
  productImageUrl,
  updateCartLine,
  quantity,
  variantTitle,
}) {
  return (
    <div className={styles.cartItemRow}>
      {" "}
      <Image
        priority={true}
        src={productImageUrl}
        alt="product preview"
        width={150}
        height={100}
      />
      <div className={styles.cartItemDetails}>
        <p>{productTitle}</p>
        <p>{variantTitle}</p>
        <span>
          <p>Quantity {quantity}</p>
          <button
            className={styles.btnChevron}
            onClick={async () => {
              console.log("remove item", {
                cartId,
                lineId,
                quantity,
              });
              const res = await updateCartLine({
                cartId,
                lineId,
                quantity,
                productTitle,
                productImageUrl,
              });
              console.log("the response is", res);
            }}
          >
            <Image
              priority={true}
              src={chevronDown}
              alt="product preview"
              width={15}
              height={15}
            />
          </button>
          <button
            className={styles.btnChevron}
            onClick={async () => {
              {
                console.log("add item", {
                  cartId,
                  lineId,
                  quantity,
                });
                const res = await updateCartLine({
                  cartId,
                  lineId,
                  quantity,
                  productTitle,
                  productImageUrl,
                });
                console.log("the response is", res);
              }
            }}
          >
            <Image
              priority={true}
              src={chevronUp}
              alt="product preview"
              width={15}
              height={15}
            />
          </button>

          <p>$189</p>
        </span>
      </div>
    </div>
  );
}
