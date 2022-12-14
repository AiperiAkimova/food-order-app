import classes from './Header.module.css'  //classes kak object bolup ichinde svoistvoloru bar konkrettu, bir componentke ele tieshesi bar
import meals from "../../assets/meals.jpeg";
import { HeaderCartButton } from './HeaderCartButton';
const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={meals} alt="food-img" />
      </div>
    </>
  );
};

export default Header;
