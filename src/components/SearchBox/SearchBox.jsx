import { useId } from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  const id = useId();
  return (
    <div className={s.searchBox}>
      <div className={s.wrapper}>
        <label htmlFor={id} className={s.label}>
          Find contacts by name
        </label>
        <input
          type="text"
          id={id}
          className={s.input}
          value={value}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBox;
