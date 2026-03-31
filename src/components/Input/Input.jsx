import './Input.scss';

const Input = ({ label, type = "text", placeholder, value, onChange, error }) => {
  return (
    <div className="c-input-group">
      {label && <label className="c-input-group__label">{label}</label>}
      <input 
        type={type}
        className={`c-input-group__field ${error ? 'c-input-group__field--error' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <span className="c-input-group__error-msg">{error}</span>}
    </div>
  );
};

export default Input;