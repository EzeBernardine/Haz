import "./styles.css";
import { RiArrowDropDownLine } from "react-icons/ri";

function Input({ htmlFor, placeHolder, className, noIcon = false }) {
  return (
    <div
      className={`input-container ${className} flex items-center justify-between`}
    >
      <input
        type="text"
        id={htmlFor}
        placeholder={placeHolder}
        className="flex-1 min-w-0 "
      />
      {!noIcon ? (
        <span>
          <RiArrowDropDownLine className="text-black h-5 w-5" />
        </span>
      ) : null}
    </div>
  );
}

export default Input;
