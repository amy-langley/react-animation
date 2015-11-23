import React from 'react'

export default class Circle extends React.Component {
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
  	var color='hsla('+Math.floor((when/30)%360)+',100%,50%,0.7)'
    var radius=15+5*Math.sin(when/150)
    return (
		<circle r={this.scaleX(radius)} cx={this.scaleX(60)} cy={this.scaleY(40)} fill={color}/>
    );
  }
}