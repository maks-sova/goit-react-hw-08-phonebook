import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authOperations';
import { useSelector } from 'react-redux';
import { selectUserName } from '../../redux/selectors';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <div className={css.usermenu}>
      <p className={css.name}>Welcome {name}</p>

      <button className={css.button} type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
