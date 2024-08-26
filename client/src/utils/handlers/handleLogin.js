import isEmail from "../helpers/isEmail";
import { createRedisCustomer, getRedisCustomer } from "../../services/redis";
import getShopifyCustomer from "../helpers/getShopifyCustomer";
import { setCartId } from "../../lib/features/cart/cartSlice";

export default async function handleLogin({
  dispatch,
  displayAlert,
  clearAlert,
  closeAuthForm,
  email,
  password,
  setEmail,
  setPassword,
  registerCustomer,
  createCustomerToken,
  setLoading,
  isLogin,
  setFirstName,
  firstName,
}) {
  setLoading(true);
  if (!isEmail(email)) {
    setLoading(false);
    dispatch(displayAlert({ alertMessage: "Enter a valid email address." }));
    setTimeout(() => {
      dispatch(clearAlert());
    }, 3000);
    return;
  }

  if (!isLogin) {
    try {
      const newCustomer = await registerCustomer({
        firstName: firstName,
        email: email,
        password: password,
      });
      const customerId = newCustomer.data.customerCreate.customer.id;
      const newCustomerToken = await createCustomerToken({
        email: email,
        password: password,
      });
      const redisCustomer = await createRedisCustomer({
        customerId,
        cartId: "gid://shopify/Cart/null",
      });
      localStorage.setItem("performanceCartId", "gid://shopify/Cart/null");
      dispatch(setCartId("gid://shopify/Cart/null"));

      dispatch(displayAlert({ alertMessage: "Welcome to the club!" }));
      setEmail("");
      setFirstName("");

      closeAuthForm();
    } catch (error) {
      dispatch(displayAlert({ alertMessage: "Something went wrong." }));
      console.log("the error", error);
    }
  } else {
    try {
      const response = await createCustomerToken({
        email: email,
        password: password,
      });
      const customerAccessTokenData = response.data.customerAccessTokenCreate;

      if (customerAccessTokenData.customerAccessToken === null) {
        setLoading(false);
        dispatch(displayAlert({ alertMessage: "Invalid credentials." }));
        setPassword("");
        setTimeout(() => {
          dispatch(clearAlert());
        }, 3000);
        return;
      }
      const shopifyData = await getShopifyCustomer(
        customerAccessTokenData.customerAccessToken.accessToken
      );

      const redisCustomer = await getRedisCustomer(shopifyData.customer.id);
      localStorage.setItem(
        "performanceCartId",
        JSON.stringify(redisCustomer.cartId)
      );
      dispatch(setCartId(redisCustomer.cartId));
      dispatch(displayAlert({ alertMessage: "Welcome back!" }));
      setEmail("");
      closeAuthForm();
    } catch (error) {
      dispatch(displayAlert({ alertMessage: "Something went wrong." }));
      console.log("the error", error);
    }
  }
  setPassword("");
  setLoading(false);
  setTimeout(() => {
    dispatch(clearAlert());
  }, 3000);
}
