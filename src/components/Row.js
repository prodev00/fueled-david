import classNames from 'classnames';
import './Row.scss';

const Row = ({ children, display, justifyContent, alignItems }) => {
  return (
    <div
      className={classNames({
        [display]: !!display,
        [`row`]: true,
        [`justify-content-${justifyContent}`]: !!justifyContent,
        [`align-items-${alignItems}`]: !!alignItems,
      })}
    >
      {children}
    </div>
  );
};

export default Row;
