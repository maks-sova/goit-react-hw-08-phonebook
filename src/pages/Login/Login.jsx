import css from './Login.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from '../../redux/auth/authOperations';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    switch (event.target.name) {
      case 'email':
        return setEmail(event.target.value);
      case 'password':
        return setPassword(event.target.value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form className={`${css.form} ${css.block} ${css.container}`} onSubmit={handleSubmit}>
      <label className={css.block}>
        E-mail
        <input
          className={css.block}
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        ></input>
      </label>
      <label className={css.block}>
        Password
        <input
          className={css.block}
          type="text"
          name="password"
          onChange={handleChange}
          value={password}
          required
        ></input>
      </label>
      <button type="Submit">Log in</button>
    </form>
  );
};

export default Login;
