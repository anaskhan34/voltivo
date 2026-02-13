import { NavLink, useLocation } from "react-router-dom";

export const ScrollLink = ({ to, children, ...props }) => {
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === to) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <NavLink to={to} onClick={handleClick} {...props}>
      {children}
    </NavLink>
  );
};
