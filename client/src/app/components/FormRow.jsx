export default function FormRow({ label, id, onChange, value }) {
  return (
    <div className="form-row" role="div">
      <label className="form-label" role="label">
        {label}
      </label>
      <input
        className="form-input"
        type="text"
        id={id}
        onChange={onChange}
        role="input"
        value={value}
      />
    </div>
  );
}
