import { useRef, useState } from 'react';
import cn from 'classnames';
import { isObjEmpty } from '@lib/check';
import useClickOutside from '@lib/hooks/useClickOutside';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import TriangleDownIcon from '@icons/ic_triangle_down.svg';

export default function Select({
  options,
  className,
  label,
  required,
  onClickOption,
  placeholder,
  errorMessage,
  defaultValue,
}) {
  const [valueSelected, setValueSelected] = useState(defaultValue);
  const [isOpenOptions, setIsOpenOptions] = useState(false);
  const selectRef = useRef(null);

  const handleToggleOptions = () => {
    setIsOpenOptions(!isOpenOptions);
  };

  const handleClickOption = (option) => {
    setValueSelected(option);
    onClickOption(option);
    setIsOpenOptions(false);
  };

  useClickOutside(selectRef, isOpenOptions, handleToggleOptions);

  return (
    <div className="form__group">
      {label && <label className="form__group-label">{label}</label>}

      <div className={cn('form__group-select-group', className)} id="select-input">
        <div onClick={handleToggleOptions} aria-hidden>
          <div
            className={cn('form__group-select', {
              'form__group-select--error': errorMessage,
              'form__group-select--focus': isOpenOptions,
            })}
            role="combobox"
            aria-controls="select-input"
            aria-expanded={false}
            ref={selectRef}
          >
            {isObjEmpty(valueSelected) && <p className="input-placeholder">{placeholder}</p>}
            {!isObjEmpty(valueSelected) && <p className="form__group-select-value">{valueSelected.label}</p>}
            <div className="form__group-select-divider" />
            <TriangleDownIcon />
          </div>
        </div>
        <input type="text" hidden required={required} />
        {isOpenOptions && (
          <div className="form__group-select-options">
            {options.length > 0 &&
              options.map((option) => (
                <div
                  key={uuid()}
                  className={cn('form__group-select-options-item', {
                    'form__group-select-options-item--selected': option.value === valueSelected?.value,
                  })}
                  onClick={() => handleClickOption(option)}
                  aria-hidden
                >
                  {option.label}
                </div>
              ))}
            {options.length === 0 && <p className="text-center">No data</p>}
          </div>
        )}
      </div>

      {errorMessage && <span className="form__group-error small-text">{errorMessage}</span>}
    </div>
  );
}

Select.defaultProps = {
  defaultValue: {},
  className: '',
  label: null,
  required: false,
  placeholder: null,
  errorMessage: null,
};

Select.propTypes = {
  defaultValue: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  onClickOption: PropTypes.func.isRequired,
};
