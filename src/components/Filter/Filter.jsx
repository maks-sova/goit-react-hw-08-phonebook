import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filter/filterSlice';
import { selectFilter } from '../../redux/selectors';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div>
      <label className={css.filterLabel}>
        Find contacts by name
        <input
          className={css.filterInput}
          type="text"
          name="filter"
          value={filter}
          onChange={event =>
            dispatch(changeFilter({ filter: event.target.value }))
          }
        ></input>
      </label>
    </div>
  );
};

export default Filter;
