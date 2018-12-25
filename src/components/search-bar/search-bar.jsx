import React, { Component } from 'react';
import styled from 'styled-components';

const SearchBarDiv = styled.div`
  display: flex;
`;
const CreateButton = styled.button`
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: #dfe7f2;
  color: black;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 6px 10px 0px;
  transition: 0.25s;
  margin-right: 0.25rem;

  &:hover {
    background-color: black;
    color: #dfe7f2;
  }
`;
const InputBar = styled.input`
  border: 1px solid black;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 6px 10px 0px;
  padding: 1rem;
  font-size: 1.2rem;
  outline: none;
  background-color: #dfe7f2;
`;

class SearchBar extends Component {
  render = () => {
    return (
      <SearchBarDiv>
        <CreateButton>메모 작성</CreateButton>
        <InputBar
          name="search"
          placeholder="메모를 검색하세요"
          value={this.props.search}
          onChange={this.props.onChange}
        />
      </SearchBarDiv>
    );
  };
}

export default SearchBar;
