import React, { Component } from 'react';

class ModalPage extends Component {
  wrapperRef = null;

  componentDidMount = () => {
    document.addEventListener('mousedown', this.handleClickOutside, false);
  };
  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleClickOutside, false);
  };

  setWrapperRef = node => {
    this.wrapperRef = node;
  };
  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.close();
    }
  };

  render = () => (
    <div className="modal transparent-black-background">
      <div ref={this.setWrapperRef} className="modal-card white-background white-gray-border radius transparent-shadow">
        {this.props.component && <this.props.component close={this.props.close} />}
      </div>
    </div>
  );
}

export default ModalPage;
