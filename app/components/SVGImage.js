import React from 'react'

export default class SVGImage extends React.Component {
  constructor(props) {
    super(props);
  }

  scaleX(val){
  	return Math.floor(val*this.props.dims.width/100.0)
  }

  scaleY(val){
  	return Math.floor(val*this.props.dims.height/100.0)
  }

  render() {
  	var scale = this.scaleX(this.props.dims.width)/this.scaleX(1800)
  	var transformText = 'translate(0,150) scale('+scale+', '+scale+')'
    return (
		<g transform={transformText}>
			<g transform="translate(1790, 0) scale(-1, 1) ">
				<image x="0" y="0" width="1800" height="1000" xlinkHref={this.props.src} />
			</g>
		</g>
    );
  }
}