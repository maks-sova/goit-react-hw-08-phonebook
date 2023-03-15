import css from './Register.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from '../../redux/auth/authOperations';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        return setName(event.target.value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form
      className={`${css.form} ${css.block} ${css.container}`}
      onSubmit={handleSubmit}
    >
      <label className={css.block}>
        Name
        <input
          className={css.block}
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          required
        ></input>
      </label>
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
      <button type="Submit">Register</button>
    </form>
  );
};

export default Register;
