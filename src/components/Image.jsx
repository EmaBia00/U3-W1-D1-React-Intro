import React from "react";

class ImageComponent extends React.Component {
  render() {
    const { src, alt, width } = this.props; //Destrutturazione del caso volessi usare le variabili src e alt e non il prefisso this.props.
    return <img src={this.props.src} alt={this.props.alt} width={this.props.width} />;
  }
}
export default ImageComponent;
