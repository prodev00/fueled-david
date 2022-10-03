import { useState } from 'react';
import { usePopper } from 'react-popper';
import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrow-down.svg';

import './Select.scss';

const Select = ({
  options,
  selected,
  placeholder,
  onSelect = () => {},
}) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, { placement: 'bottom-start' });
  const [showPopper, setShowPopper] = useState(false);

  const handleClickPopper = () => {
    setShowPopper(prev => !prev);
  };

  const handleSelectOption = (option) => {
    onSelect(option);
    setShowPopper(false);
  };

  return (
    <div>
      <div
        className="popper-reference"
        ref={setReferenceElement}
        onClick={handleClickPopper}
      >
        <div>{selected?.label || placeholder}</div>
        <div className="arrow-wrapper">
          <ArrowDownIcon />
        </div>
      </div>

      {showPopper && (
        <div
          className="popper-element"
          ref={setPopperElement}
          style={{ ...styles.popper, minWidth: referenceElement.offsetWidth || 100 }}
          {...attributes.popper}
        >
          {options.map((option) => (
            <div
              key={option.value}
              className="popper-option"
              onClick={() => handleSelectOption(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
