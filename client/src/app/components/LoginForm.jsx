"use client";
import FormRow from "./FormRow";
import {
  useCreateCustomerTokenMutation,
  useRegisterCustomerMutation,
} from "../../lib/features/authentication/authenticationSlice";
import { useRef, useState } from "react";
import chevronRight from "../assets/svgs/chevronRight.svg";
import Image from "next/image";
import { createRedisCustomer } from "../../services/redis";

export default function Login({ showAuthForm, closeAuthForm, toggleAuthForm }) {
  const [registerCustomer, { data, error, isLoading, isSuccess, isError }] =
    useRegisterCustomerMutation();
  const [createCustomerToken] = useCreateCustomerTokenMutation();

  const refs = {
    firstName: useRef(null),
    lastName: useRef(null),
    email: useRef(null),
    password: useRef(null),
  };

  const [isLogin, setIsLogin] = useState(true);

  const handleChange = (e) => {
    const { id, value } = e.target;
    refs[e.target.id].current = e.target.value;
  };

  const toggleAuthType = () => {
    setIsLogin(!isLogin);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!isLogin) {
      try {
        const newCustomer = await registerCustomer({
          firstName: refs.firstName.current,
          lastName: refs.lastName.current,
          email: refs.email.current,
          password: refs.password.current,
        });
        const customerId = newCustomer.data.customerCreate.customer.id;
        const newCustomerToken = await createCustomerToken({
          email: refs.email.current,
          password: refs.password.current,
        });
        const redisCustomer = await createRedisCustomer({
          customerId,
          cartId: "gid://shopify/Cart/null",
        });

        console.log("the redis customer is", redisCustomer);
        console.log("new customer is", newCustomer);
        console.log("the token is", newCustomerToken);
      } catch (error) {
        console.log("there was an error registering", error);
      }
    } else {
      try {
        const response = await createCustomerToken({
          email: refs.email.current,
          password: refs.password.current,
        });
        const customerAccessTokenData = response.data.customerAccessTokenCreate;
        console.log("the new token is", customerAccessTokenData);
        if (customerAccessTokenData.customerAccessToken === null) {
          //link to register or show register form
          alert(customerAccessTokenData.customerUserErrors[0].message);
        }
      } catch (error) {
        console.log("the biggest error youve ever seen jsut occured", error);
      }
    }
  };
  return (
    <form
      className={`form ${showAuthForm ? "form-visible" : ""}`}
      onSubmit={handleFormSubmit}
      role="login-form-main"
    >
      <button
        className="btn btn-form-chevron"
        type="button"
        onClick={closeAuthForm}
      >
        <Image
          src={chevronRight}
          height={28}
          width={28}
          alt="close arrow"
          role="login-form-chevron"
        />
      </button>

      <h3>
        <button
          type="button"
          className={`btn btn-login ${!isLogin ? "btn-grey" : ""}`}
          onClick={toggleAuthType}
          disabled={isLogin}
          role="login-form-btn-login"
        >
          Login
        </button>
        &nbsp;/&nbsp;
        <button
          type="button"
          className={`btn btn-signup ${isLogin ? "btn-grey" : ""}`}
          onClick={toggleAuthType}
          disabled={!isLogin}
          role="login-form-btn-join"
        >
          Join the club
        </button>
      </h3>
      {!isLogin && (
        <FormRow label="name" id="firstName" onChange={handleChange} />
      )}
      <FormRow label="Email" id="email" onChange={handleChange} />
      <FormRow label="Password" id="password" onChange={handleChange} />
      <button className="btn btn-auth-submit" role="login-form-btn-submit">
        {isLogin ? "login" : "register"}
      </button>
      <p>
        Join the performance club to personalize your shopping experience and
        recieve exclusive club benefits.
      </p>
    </form>
  );
}
