import React from 'react';
import styles from './App.css';
import SVGContainer from './components/SVGContainer'
import Rectangle from './components/Rectangle'
import Circle from './components/Circle'
import Line from './components/Line'
import SVGImage from './components/SVGImage'

var myImage = require('./asuka.png')

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dimensions: {width: 400, height: 400 }
    }
  }
    
  render() {
    var dims = this.state.dimensions;
    return (
      <div>
        <SVGContainer height={dims.height} width={dims.width}>
          <rect x="100" y="150" width="250" height="150" fill="hsl(200,80%,50%)" />
          <Line dims={dims} />
          <Rectangle dims={dims} />
          <rect x="30" y="30" width="200" height="200" fill="hsla(60,80%,80%,0.8)" rx="20" ry="20" />
          <Circle dims={dims} />
          <rect x="0" y="352" width="400" height="48" fill="hsl(0,0%,30%)" />
          <SVGImage dims={dims} src={myImage} />
        </SVGContainer>
      </div>
    );
  }
}
