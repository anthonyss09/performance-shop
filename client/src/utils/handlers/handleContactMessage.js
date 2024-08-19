async function handleContactMessage(
  dispatch,
  clearAlert,
  displayAlert,
  email,
  message,
  isEmail,
  setEmail,
  setMessage,
  setShowLoader
) {
  //   e.preventDefault();
  if (!isEmail(email)) {
    dispatch(displayAlert({ alertMessage: "Please provide a valid email." }));
    setTimeout(() => {
      dispatch(clearAlert());
    }, 3000);
    return;
  }
  if (!message) {
    dispatch(displayAlert({ alertMessage: "Please add a message." }));
    setTimeout(() => {
      dispatch(clearAlert());
    }, 3000);
    return;
  }
  const formData = new FormData();
  formData.append("email", email);
  formData.append("message", message);
  try {
    setShowLoader(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      console.log("fire the alert");
      dispatch(displayAlert({ alertMessage: "Something went wrong." }));
    }
    setShowLoader(false);
    dispatch(displayAlert({ alertMessage: "Email sent!" }));
    setEmail("");
    setMessage("");
  } catch (error) {
    console.log(error);
    dispatch(displayAlert({ alertMessage: "Something went wrong." }));
    setShowLoader(false);
  }
  setTimeout(() => {
    dispatch(clearAlert());
  }, 3000);
}

export default handleContactMessage;
