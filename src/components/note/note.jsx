import React, { Component } from 'react';
import './note.scss';

import { format } from 'date-fns';

import Modal from './../common/modal/modal';
import Memo from './../common/memo/memo';
import Delete from './../common/delete/delete';

class Note extends Component {
  state = {
    showChangeModal: false,
    showDeleteModal: false
  };

  componentDidMount() {
    console.log(this.props.noteNumber);
  }

  toogle = e => {
    this.setState({
      [e.target.id]: !this.state[e.target.id]
    });
  };

  render = () => (
    <div id="note">
      <div id="note-menu">
        <span>{this.props.title}</span>
        <span>
          <span id="showChangeModal" onClick={this.toogle}>
            편집
          </span>
          <span id="showDeleteModal" onClick={this.toogle}>
            삭제
          </span>
        </span>
      </div>
      <div>
        {format(this.props.date, 'MM / DD ddd')}
        {this.props.edited && ' (edited)'}
      </div>
      <div>{this.props.text}</div>

      {this.state.showChangeModal && (
        <Modal
          close={() => {
            this.toogle({ target: { id: 'showChangeModal' } });
          }}
        >
          <Memo
            number={this.props.noteNumber}
            action={this.props.changeNote}
            close={() => {
              this.toogle({ target: { id: 'showChangeModal' } });
            }}
            title={'메모 수정'}
            subject={this.props.title}
            text={this.props.text}
          />
        </Modal>
      )}

      {this.state.showDeleteModal && (
        <Modal
          close={() => {
            this.toogle({ target: { id: 'showDeleteModal' } });
          }}
        >
          <Delete
            number={this.props.noteNumber}
            action={this.props.deleteNote}
            close={() => {
              this.toogle({ target: { id: 'showDeleteModal' } });
            }}
            title={'메모 수정'}
          />
        </Modal>
      )}
    </div>
  );
}

export default Note;
