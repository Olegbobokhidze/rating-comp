import React from "react";
import styled from "styled-components";
const Button = styled.button`
  display: flex;
  font-family: "Overpass", sans-serif;
  font-weight: 700;
  background-color: #fc7614;
  width: 279px;
  height: 45px;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 1.87px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border: none;
  border-radius: 22px;
  cursor: pointer;
  &:hover {
    color: #fc7614;
    background-color: white;
    transition: 0.5s all ease-out;
  }
  @media screen and (min-width: 1440px) {
    width: 370px;
    font-size: 15px;
  }
`;
export default function SubmitButton({ onClick }) {
  return (
    <Button onClick={(event) => onClick(event)} type="submit">
      Submit
    </Button>
  );
}
