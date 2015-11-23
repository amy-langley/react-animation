import React from 'react'

export default class Line extends React.Component {
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
    var x1 = 100*(Math.cos(when/300)/2.0+0.5)
    var x2 = 100*(Math.sin(when/300)/2.0+0.5)
    //var y2 = 100*(Math.cos(when/300)/2.0+1.0)
    return (
      <g stroke="hsl(0,0%,20%)">
      <line x1={this.scaleX(x1)} y1="0" x2={this.scaleX(x2)} y2={this.scaleY(100)} strokeWidth={this.scaleX(2)} />
      </g>
    );
  }
}