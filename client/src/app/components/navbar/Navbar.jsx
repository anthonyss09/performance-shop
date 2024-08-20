"use client";
import { useAppSelector } from "../../../lib/hooks";
import { useEffect } from "react";
import { useGetCartQuery } from "../../../lib/features/cart/cartSlice";
import {
  selectAuthenticationData,
  useLoginCustomerQuery,
} from "../../../lib/features/authentication/authenticationSlice";
import { useState } from "react";
import Alert from "../Alert";
import { selectAlertsData } from "../../../lib/features/alerts/alertsSlice";
import LightNavWrapper from "./LightNavWraper";
import DarkNavWrapper from "./DarkNavWrapper";
import { usePathname } from "next/navigation";
import LoginForm from "../LoginForm";
import DropMenu from "../dropMenu/DropMenu";

export default function Navbar() {
  const { cartCount, cartId } = useAppSelector((state) => state.cart);
  const { customerAccessToken } = useAppSelector(selectAuthenticationData);
  const { showAlert, alertType, alertMessage } =
    useAppSelector(selectAlertsData);
  const [showMenu, setShowMenu] = useState(false);
  const [showAuthForm, setShowAuthForm] = useState(false);

  const pathName = usePathname();

  const {
    data: shopifyCartData,
    isLoading: cartDataLoading,
    isSuccess: cartDataSuccess,
    isError: cartDataError,
    error: cartError,
  } = useGetCartQuery(cartId);

  const {
    data: authenticationData,
    isLoading: authenticationLoading,
    isSuccess: authenticationSuccess,
    isError: authenticationIsError,
    error: authenticationError,
  } = useLoginCustomerQuery(customerAccessToken);

  useEffect(() => {
    window.addEventListener("resize", resizeCB);
    return () => {
      window.removeEventListener("resize", resizeCB);
    };
  }, []);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const toggleAuthForm = () => {
    setShowAuthForm(!showAuthForm);
    console.log("shpw the form");
  };

  const closeAuthForm = () => {
    setShowAuthForm(false);
  };

  function resizeCB() {
    if (window.innerWidth > 700) {
      setShowMenu(false);
    }
  }

  return (
    <div>
      {" "}
      <LoginForm
        showAuthForm={showAuthForm}
        toggleAuthForm={toggleAuthForm}
        closeAuthForm={closeAuthForm}
      />
      <DropMenu showMenu={showMenu} handleMenuClick={handleMenuClick} />
      {showAlert && <Alert message={alertMessage} />}
      {pathName === "/" || pathName === "/frequently-asked-qustions" ? (
        <LightNavWrapper
          cartCount={cartCount}
          showMenu={showMenu}
          showAuthForm={showAuthForm}
          handleMenuClick={handleMenuClick}
          toggleAuthForm={toggleAuthForm}
          closeAuthForm={closeAuthForm}
          closeMenu={closeMenu}
        />
      ) : (
        <DarkNavWrapper
          cartCount={cartCount}
          showMenu={showMenu}
          handleMenuClick={handleMenuClick}
          showAuthForm={showAuthForm}
          toggleAuthForm={toggleAuthForm}
          closeAuthForm={closeAuthForm}
          closeMenu={closeMenu}
        />
      )}
    </div>
  );
}
