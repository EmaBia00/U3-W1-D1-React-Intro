const ButtonComponent = (props) => {
  return (
    <div style={props.containerStyle}>
      <p style={props.titleStyle}>{props.title}</p>
      <button style={props.buttonStyle}>{props.text}</button>
    </div>
  );
};

export default ButtonComponent;
