import Button from './Button';
import { ReactComponent as EmblemIcon } from 'assets/icons/emblem.svg';
import './Navbar.scss';

const Navbar = ({ title }) => {
  return (
    <div className="navbar-container">
      <EmblemIcon />
      <div className="navbar-title">{title}</div>
      <Button variant="soft" size="small">LOG IN</Button>
    </div>
  )
};

export default Navbar;
