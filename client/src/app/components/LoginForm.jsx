"use client";
import FormRow from "./FormRow";
import {
  useCreateCustomerTokenMutation,
  useRegisterCustomerMutation,
} from "../../lib/features/authentication/authenticationSlice";
import { useState } from "react";
import chevronRight from "../assets/svgs/chevronRight.svg";
import Image from "next/image";
import { displayAlert, clearAlert } from "@/lib/features/alerts/alertsSlice";
import { useDispatch } from "react-redux";
import Loader from "./loader/Loader";
import handleLogin from "../../utils/handlers/handleLogin";

export default function Login({ showAuthForm, closeAuthForm }) {
  const [registerCustomer, { data, error, isLoading, isSuccess, isError }] =
    useRegisterCustomerMutation();
  const [createCustomerToken] = useCreateCustomerTokenMutation();

  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState(true);

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "firstName":
        setFirstName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const toggleAuthType = () => {
    setIsLogin(!isLogin);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    handleLogin({
      dispatch,
      displayAlert,
      clearAlert,
      closeAuthForm,
      email,
      password,
      isLogin,
      setEmail,
      setPassword,
      registerCustomer,
      createCustomerToken,
      setLoading,
    });
  };
  return (
    <>
      {loading && <Loader loadingMessage="Loading..." />}

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
          <FormRow
            label="name"
            id="firstName"
            onChange={handleChange}
            value={firstName}
          />
        )}
        <FormRow
          label="Email"
          id="email"
          onChange={handleChange}
          value={email}
        />
        <FormRow
          label="Password"
          id="password"
          onChange={handleChange}
          value={password}
        />
        <button className="btn btn-auth-submit" role="login-form-btn-submit">
          {isLogin ? "login" : "register"}
        </button>
        <p>
          Join the performance club to personalize your shopping experience and
          recieve exclusive club benefits.
        </p>
      </form>
    </>
  );
}
