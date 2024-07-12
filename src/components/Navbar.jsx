import { appleImg } from '../utils/index.js';

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={appleImg} alt={'appleImg'} />
      </nav>
    </header>
  );
};

export default Navbar;
