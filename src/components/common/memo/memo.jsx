import React, { Component } from 'react';
import './memo.scss';

const onChange = (state, props, etc) => {
  console.log(state);
  console.log(props);
  console.log(etc);
  return state;
};

class Memo extends Component {
  state = {
    title: '',
    text: ''
  };

  componentDidMount() {
    this.setState({});
  }

  onChnage = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  action = () => this.props.action(this.state.title, this.state.text, this.props.number) || this.props.close();

  render = () => (
    <>
      <div id="memo-what-for">
        <span>{this.props.title}</span>
        <span onClick={this.props.close}>나가기</span>
      </div>
      <div id="memo-form">
        <input
          id="memo-title"
          name="title"
          type="text"
          placeholder="메모 제목 입력"
          value={this.state.title}
          onChange={this.onChnage}
          className="radius"
        />
        <textarea
          id="memo-text"
          name="text"
          placeholder="텍스트 입력"
          value={this.state.text}
          onChange={this.onChnage}
          className="radius"
        />
      </div>
      <div id="memo-button">
        <button onClick={this.addNote}>작성하기</button>
      </div>
    </>
  );
}

export default Memo;
