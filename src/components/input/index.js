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
        className="flex-1"
      />
      {!noIcon ? (
        <span>
          <RiArrowDropDownLine className="text-black h-6 w-6" />
        </span>
      ) : null}
    </div>
  );
}

export default Input;
