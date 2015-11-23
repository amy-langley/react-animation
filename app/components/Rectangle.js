import React from 'react'

export default class Rectangle extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  	var animator = function(){
  		this.forceUpdate()
  		window.requestAnimationFrame(animator.bind(this))
  	}
    window.requestAnimationFrame(animator.bind(this))
  }
  scaleX(val){
  	return Math.floor(val*this.props.dims.width/100.0)
  }
  scaleY(val){
  	return Math.floor(val*this.props.dims.height/100.0)
  }
  render() {
    var when = new Date().getTime()
    var offset = (when/100)%100
    var two = 25+25*Math.cos(when/200)
	var color='hsla(150,80%,'+(20+40*(1+Math.sin(when/2000)))+'%,'+(1+Math.cos(when/300)/2.0)+')'
    return (
		<rect height={this.scaleY(30)} width={this.scaleX(30)} x={1.3*this.scaleX(offset-15)} y={1.3*this.scaleY(two-15)} fill={color}/>
    );
  }
}