export default function FormRow({ label, id, onChange, value }) {
  return (
    <div className="form-row">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        className="form-input"
        type="text"
        id={id}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
