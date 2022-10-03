import classNames from 'classnames';
import './Input.scss';

const Input = ({ placeholder, value, disabled, fullWidth, onChange }) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={classNames({
        [`disabled`]: disabled,
        [`full-width`]: fullWidth
      })}
    />
  );
};

export default Input;
