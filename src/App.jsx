import React, { Component } from 'react';
import styled from 'styled-components';

import SearchBar from './components/search-bar/search-bar';
import NoteList from './components/note-list/note-list';

const RootDiv = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 2rem);
  margin: 1rem;
  font-family: 'Noto Sans KR';
`;
const AppDiv = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 10px 20px #00000030, 0 6px 6px #0000003b;
  background-color: skyblue;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;
const Title = styled.span`
  color: white;
  font-size: 3rem;
  font-weight: bold;
`;

class App extends Component {
  state = {
    search: '',
    title: '',
    text: '',
    notes: [
      { date: new Date(), text: 'one', title: '원', edited: false },
      { date: new Date(), text: 'two', title: '투', edited: false },
      { date: new Date(), text: 'three', title: '쓰리', edited: false },
      { date: new Date(), text: 'four', title: '포', edited: false },
      { date: new Date(), text: 'one', title: '원', edited: false },
      { date: new Date(), text: 'two', title: '투', edited: false },
      { date: new Date(), text: 'three', title: '쓰리', edited: false },
      { date: new Date(), text: 'four', title: '포', edited: false },
      { date: new Date(), text: 'one', title: '원', edited: false },
      { date: new Date(), text: 'two', title: '투', edited: false },
      { date: new Date(), text: 'three', title: '쓰리', edited: false },
      { date: new Date(), text: 'four', title: '포', edited: false },
      { date: new Date(), text: 'one', title: '원', edited: false },
      { date: new Date(), text: 'two', title: '투', edited: false },
      { date: new Date(), text: 'three', title: '쓰리', edited: false },
      { date: new Date(), text: 'four', title: '포', edited: false }
    ]
  };

  onChange = input =>
    this.setState({
      [input.currentTarget.name]: input.currentTarget.value
    });

  addNote = (title, text) =>
    this.setState({
      notes: [{ date: new Date(), text, title, edited: false }, ...this.state.notes]
    });
  changeNote = (title, text, number) =>
    this.setState({
      notes: this.state.notes.map((note, idx) => (idx === number ? { ...note, title, text, edited: true } : note))
    });
  deleteNote = number =>
    this.setState({
      notes: this.state.notes.filter((note, idx) => (idx === number ? false : true))
    });

  render = () => {
    return (
      <RootDiv className="app-container">
        <AppDiv>
          <Header>
            <Title>메모장</Title>
            <SearchBar addNote={this.addNote} search={this.state.search} onChange={this.onChange} />
          </Header>
          <NoteList
            notes={this.state.notes}
            search={this.state.search}
            changeNote={this.changeNote}
            deleteNote={this.deleteNote}
          />
        </AppDiv>
      </RootDiv>
    );
  };
}

export default App;
