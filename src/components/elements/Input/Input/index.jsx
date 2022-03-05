import PropTypes from 'prop-types';
import cn from 'classnames';

export default function Input({
  className,
  label,
  id,
  value,
  required,
  onChange,
  name,
  placeholder,
  type,
  errorMessage,
  ...props
}) {
  return (
    <div className="form__group">
      {label && (
        <label htmlFor={id} className="form__group-label">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={cn('form__group-input', { 'form__group-input--error': errorMessage }, className)}
        value={value}
        required={required}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        {...props}
      />
      {errorMessage && <span className="form__group-error small-text">{errorMessage}</span>}
    </div>
  );
}

Input.defaultProps = {
  className: '',
  label: null,
  placeholder: null,
  errorMessage: null,
  required: false,
  type: 'text',
};

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  errorMessage: PropTypes.string,
};
