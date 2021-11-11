import './navbar.module.css';

export function Navbar(props) {
  return (
    <div className="navbar">
    <img  alt="img" />
    <div>
      <h2>{props.title}</h2>
      <h4>{props.name}</h4>
    </div>
  </div>
  );
}
export default Navbar;
