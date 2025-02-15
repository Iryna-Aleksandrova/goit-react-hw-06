import { BiSolidUserRectangle } from "react-icons/bi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import s from "./Contact.module.css";

const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <div className={s.item}>
      <div>
        <p className={s.text}>
          <BiSolidUserRectangle /> {name}
        </p>
        <p className={s.text}>
          <FaPhoneSquareAlt /> {number}
        </p>
      </div>
      <button onClick={() => onDelete(id)} className={s.button}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
