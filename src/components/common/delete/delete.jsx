import React, { Component } from 'react';
import './delete.scss';

class Delete extends Component {
  action = () => this.props.action(this.props.number) || this.props.close();

  render = () => (
    <>
      <div id="memo-what-for">
        <span>메모 삭제</span>
      </div>

      <div id="memo-button">
        <button onClick={this.action}>삭제하기</button>
      </div>
    </>
  );
}

export default Delete;
