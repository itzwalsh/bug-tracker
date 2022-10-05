import { useState, useRef, useEffect } from "react";


function NavItem(props) {

  const [open, setOpen] = useState(false);
  const ref = useRef()

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [open])

    return (
      <li className="nav-item" ref={ref}>
          <a href="#" className="icon-button" onClick={() => setOpen(oldState => !oldState)}>
            {props.icon}
          </a>

          {open && props.children}
      </li>
    );
}

export default NavItem;
