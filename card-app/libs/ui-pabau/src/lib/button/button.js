import './button.module.css';

export function Button({
  props,
  backgroundColor = props.backgroundColor,
  color = props.color,
  handleColor,
}) {
  const style = {
    backgroundColor,
    color,
  };

  return (
    <button onClick={handleColor} style={style}>
      Welcome to Pabau!
    </button>
  );
}

export default Button;
