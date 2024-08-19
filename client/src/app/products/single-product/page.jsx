"use client";
import { useSearchParams } from "next/navigation";
import SingleProduct from "./SingleProduct";
import { useGetProductByIdQuery } from "../../../lib/features/products/productsSlice";
import Image from "next/image";
import styles from "./page.module.css";
import Loader from "../../components/loader/Loader";
import { useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../../../lib/hooks";
import mutateCart from "../../../utils/helpers/mutateCart";
import {
  useCreateCartMutation,
  selectCartData,
  useUpdateCartLineMutation,
  useCartLinesAddMutation,
} from "../../../lib/features/cart/cartSlice";

export default function SingleProductPage() {
  // const searchParams = useSearchParams();
  // const productId = searchParams.get("productId");
  const { data, isSuccess, isLoading, isError, error } = useGetProductByIdQuery(
    "gid://shopify/Product/7705952845871"
  );
  const cartData = useAppSelector(selectCartData);
  const dispatch = useAppDispatch();
  const btnActiveId = useRef(null);

  const [createShopifyCart] = useCreateCartMutation();
  const [updateCartLine] = useUpdateCartLineMutation();
  const [addCartLine] = useCartLinesAddMutation();

  const cartIdRef = useRef(null);
  const variantIndex = useRef(null);

  useEffect(() => {
    cartIdRef.current = localStorage.getItem("performanceCartId")
      ? JSON.parse(localStorage.getItem("performanceCartId"))
      : null;
  }, []);

  let btnActive;

  const handleClick = (e) => {
    btnActive = document.getElementById(btnActiveId.current);
    if (btnActive) {
      btnActive.style.color = "rgb(247, 232, 234)";
      btnActive.style.background = "none";
    }

    variantIndex.current = e.target.id;
    btnActiveId.current = e.target.id;
    btnActive = document.getElementById(e.target.id);
    btnActive.style.background = "white";
    btnActive.style.color = "black";
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
          role="single-product-btn"
        >
          {edge.node.title}
        </button>
      );
    });
    content = (
      <div className={styles.content}>
        <div className={styles.title}>
          <p className={styles.titleP}>The Generation 1</p>
          <p className={styles.cost}>$189</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.product.featuredImage.url}
            alt={data.product.description}
            priority
            fill
          />
        </div>
        <div className={styles.spacer}></div>

        <div className={styles.optionsContainer}>
          {" "}
          <p>Select size</p>
          <div className={styles.options}> {options}</div>
          <button
            className={`btn ${styles.btn} ${styles.btnAdd}`}
            onClick={() => {
              mutateCart({
                cartData,
                productData: data,
                createShopifyCart,
                updateCartLine,
                addCartLine,
                index: variantIndex.current,
                dispatch,
              });
              variantIndex.current = null;
              btnActive.style.color = "rgb(247, 232, 234)";
              btnActive.style.background = "none";
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.page}>
      {" "}
      <header className={styles.header}>
        <h1 role="single-product-h1">Shop Performance</h1>
        <p role="single-product-header-p">
          Join the club for exclusive benefits!
        </p>
      </header>
      <main className={styles.main} role="single-product-main">
        {" "}
        {content}
      </main>
    </div>
  );
}
