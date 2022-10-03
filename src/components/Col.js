import classNames from 'classnames';
import './Col.scss';

const Col = ({ xs, sm, md, lg, xl, children }) => {
  return (
    <div
      className={classNames({
        [`col-xs-${xs}`]: !!xs,
        [`col-sm-${sm}`]: !!sm,
        [`col-md-${md}`]: !!md,
        [`col-lg-${lg}`]: !!lg,
        [`col-lg-${xl}`]: !!xl,
      })}
    >
      {children}
    </div>
  );
};

export default Col;
