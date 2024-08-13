import { useGetProductByIdQuery } from "../../../lib/features/products/productsSlice";
import Loader from "../../components/loader/Loader";
import Image from "next/image";
import styles from "./page.module.css";
import { useRef } from "react";

export default function SingleProduct({ productId }) {
  const { data, isSuccess, isLoading, isError, error } = useGetProductByIdQuery(
    "gid://shopify/Product/7705952845871"
  );

  const variantIndex = useRef(null);

  const handleClick = (e) => {
    console.log(e.target.id);
    variantIndex.current = e.target.id;
  };

  let options;

  let content;
  if (isLoading) {
    content = <Loader />;
  } else if (isError) {
    content = <p>some error</p>;
  } else if (isSuccess) {
    console.log(data);
    options = data.product.variants.edges.map((edge, index) => {
      return (
        <button
          id={index}
          className={`btn ${styles.btn}`}
          key={index}
          onClick={handleClick}
        >
          {edge.node.title}
        </button>
      );
    });
    content = (
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <div className={styles.title}>
            <p>Performance: Generation One</p>
            <p>$189</p>
          </div>
          <Image
            src={data.product.featuredImage.url}
            alt={data.product.description}
            priority
            fill
          />
        </div>

        <div className={styles.optionsContainer}>
          {" "}
          <p>Select size</p>
          <div className={styles.options}> {options}</div>
          <button className={`btn ${styles.btn} ${styles.btnAdd}`}>
            Add to cart
          </button>
        </div>
      </div>
    );
  }

  return <>{content}</>;
}
