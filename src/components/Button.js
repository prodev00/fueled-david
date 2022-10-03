import classNames from 'classnames';
import './Button.scss';

const BUTTON_VARIANTS = {
  CONTAINED: 'contained',
  OUTLINED: 'outlined',
  SOFT: 'soft',
};

const BUTTON_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const Button = ({
  onClick = () => {},
  variant = BUTTON_VARIANTS.CONTAINED,
  fullWidth = false,
  size = BUTTON_SIZES.MEDIUM,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames({
        [`btn`]: true,
        [`btn-${variant}`]: true,
        [`btn-size-${size}`]: true,
        [`btn-full`]: fullWidth,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
