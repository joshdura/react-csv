import React from 'react';
import {buildURI} from '../core';
import {
   defaultProps as commonDefaultProps} from '../metaProps';
const defaultProps = {
  target: '_blank'
};

/**
 *
 * @example ../../sample-site/csvdownload.example.md
 */
class CSVDownload extends React.Component {

  static defaultProps = Object.assign(
    commonDefaultProps,
    defaultProps
  );

  constructor(props) {
    super(props);
    this.state={};
  }

  buildURI() {
    return buildURI(...arguments);
  }

  componentDidMount(){
    const {data, headers, separator, enclosingCharacter, uFEFF, target, specs, replace} = this.props;
    this.state.page = window.open(
        this.buildURI(data, uFEFF, headers, separator, enclosingCharacter), target, specs, replace
    );
  }

  getWindow() {
    return this.state.page;
  }

  render(){
    return (null)
  }
}

export default CSVDownload;
