export default function Alert({ message }) {
  return (
    <div className="alert-page">
      <div className="alert-box">
        {" "}
        <p className="alert-box-p">{message}</p>
      </div>
    </div>
  );
}
