export default function Alert({ message }) {
  return (
    <div className="alert-page" role="alert-main">
      <div className="alert-box">
        {" "}
        <p role="alert-p">{message}</p>
      </div>
    </div>
  );
}
