import React, { Component } from 'react';
import './note-list.scss';

import Note from './../note/note';

class NoteList extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps !== this.props) {
      return true;
    }
    return false;
  }

  render = () => {
    const searchResult = notes => renderContacts(notes.filter(note => note.text.indexOf(this.props.search) !== -1));
    const renderContacts = notes => {
      return notes.map((note, idx) => {
        return (
          <Note
            key={idx}
            noteNumber={idx}
            changeNote={this.props.changeNote}
            deleteNote={this.props.deleteNote}
            title={note.title}
            text={note.text}
            date={note.date}
            edited={note.edited}
          />
        );
      });
    };
    return (
      <>
        <div id="note-list-container">
          <div id="note-list">{searchResult(this.props.notes)}</div>
        </div>
      </>
    );
  };
}

export default NoteList;
