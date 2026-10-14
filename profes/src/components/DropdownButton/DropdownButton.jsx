import { forwardRef } from "react";
import "./DropdownButton.css"
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
const DropdownButton = forwardRef((props, ref) => {

  const {children, open, toggle, activeColor}=props;
  const buttonStyle=open && activeColor
  ?{border: `5px solid ${activeColor}`}
  :{border: `5px solid transparent`};

  return (
    <div 
    onClick={toggle} 
    className={`dropdown-btn ${open ? "button-open" : null}`} 
    ref={ref}
    style={buttonStyle}
    >
    {children}
    <span className='toggle-icon'>
    {open ? <FaChevronUp /> :
    <FaChevronDown />}
    </span>
    </div>
  )
});

export default DropdownButton