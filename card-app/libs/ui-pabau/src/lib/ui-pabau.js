import './ui-pabau.module.css';
import PropTypes from 'prop-types';

export function UiPabau(
  props,
  {
    backgroundColor = props.backgroundColor,
    color = props.color,
    textAlign = 'center',
    cursor = 'pointer',
    handleClick,
  }
) {
  const style = {
    backgroundColor,
    color,
    textAlign,
    cursor,
  };
  return (
    <div style={style}>
      <button onClick={handleClick}>
        Welcome to UiPabau!
        {props.name}
      </button>
    </div>
  );
}

UiPabau.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  textAlign: PropTypes.string,
  cursor: PropTypes.string,
  handleClick: PropTypes.func,
};

export default UiPabau;
