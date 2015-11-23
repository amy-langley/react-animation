import React from 'react'

export default class SVGContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <svg {...this.props}>{this.props.children}</svg>;
  }
}