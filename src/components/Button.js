import React from "react";
import styled from "styled-components";

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 42px;
  height: 42px;
  background-color: #262e38;
  color: #7c8798;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
  border-radius: 21px;
  border: none;
  cursor: pointer;
  &:hover {
    transition: 0.5s all ease-out;
    background-color: #fc7614;
    color: #fff;
  }
  &:focus {
    background-color: #7c8798;
    color: white;
  }
  @media screen and (min-width: 1440px) {
    width: 51px;
    height: 51px;
    font-size: 16px;
    margin-bottom: 15px;
    border-radius: 25px;
  }
`;
export default function Buttons({ lists, getNumber }) {
  return (
    <ButtonBox>
      {lists.map((item) => {
        return (
          <Button onClick={() => getNumber(item)} key={item}>
            {item}
          </Button>
        );
      })}
    </ButtonBox>
  );
}
