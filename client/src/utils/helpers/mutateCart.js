import {
  displayAlert,
  clearAlert,
} from "../../lib/features/alerts/alertsSlice";

function callAlert({ alertMessage, dispatch }) {
  dispatch(displayAlert({ alertMessage }));
  setTimeout(() => {
    dispatch(clearAlert());
  }, 3000);
}

export default async function mutateCart({
  cartData,
  productData,
  createShopifyCart,
  updateCartLine,
  addCartLine,
  index,
  dispatch,
}) {
  if (index === null) {
    callAlert({ alertMessage: "Choose a size.", dispatch });
    return;
  }
  let merchQuantity;
  let lineId;
  const productTitle = productData.product.title;
  const productImageUrl = productData.product.featuredImage;
  const variantTitle = productData.product.variants.edges[index].node.title;
  const merchandiseId = productData.product.variants.edges[index].node.id;

  if (cartData.cartData) {
    cartData.cartData.lines.edges.map((edge) => {
      if (edge.node.merchandise.id === merchandiseId) {
        lineId = edge.node.id;
        merchQuantity = edge.node.quantity;
      }
    });

    if (lineId) {
      try {
        const res = await updateCartLine({
          cartId: cartData.cartData.id,
          lineId,
          quantity: merchQuantity + 1,
          productTitle,
          productImageUrl,
          variantTitle,
        });
        let userErrorMessage = res.data.cartLinesUpdate.userErrors.length
          ? res.data.cartLinesUpdate.userErrors[0].message
          : undefined;
        if (userErrorMessage) {
          callAlert({ alertMessage: userErrorMessage, dispatch });
        } else {
          callAlert({ alertMessage: "Item added to cart!", dispatch });
        }
      } catch (error) {
        console.log("error", error);
        callAlert({ alertMessage: "Something went wrong.", dispatch });
      }
    } else {
      try {
        const res = await addCartLine({
          cartId: cartData.cartData.id,
          lineId: lineId,
          quantity: 1,
          productTitle,
          productImageUrl,
          variantTitle,
          merchandiseId,
        });

        let userErrorMessage = res.data.cartLinesAdd.userErrors.length
          ? res.data.cartLinesUpdate.userErrors[0].message
          : undefined;
        if (userErrorMessage) {
          callAlert({ alertMessage: userErrorMessage, dispatch });
        } else {
          callAlert({ alertMessage: "Item added to cart!", dispatch });
        }
      } catch (error) {
        console.log("error", error);

        callAlert({ alertMessage: "Something went wrong.", dispatch });
      }
    }
  } else {
    try {
      const res = await createShopifyCart({
        merchandiseId,
        productTitle,
        variantTitle,
        productImageUrl,
      });
      let userErrorMessage = res.data.cartLinesAdd.userErrors.length
        ? res.data.cartLinesAdd.userErrors[0].message
        : undefined;
      if (userErrorMessage) {
        callAlert({ alertMessage: userErrorMessage, dispatch });
      } else {
        callAlert({ alertMessage: "Item added to cart!", dispatch });
      }
    } catch (error) {
      console.log("error", error);

      callAlert({ alertMessage: "Something went wrong.", dispatch });
    }
  }
}
