import React, { Component } from 'react';
import { format } from 'date-fns';
import './note.scss';

class Note extends Component {
  render = () => (
    <div id="note">
      <div>{this.props.title}</div>
      <div>
        {format(this.props.date, 'MM / HH ddd')}
        {this.props.edited && '(edited)'}
      </div>
      <div>{this.props.text}</div>
    </div>
  );
}

export default Note;
