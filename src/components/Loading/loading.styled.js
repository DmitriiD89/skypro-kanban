import styled from "styled-components";

export const LoadingCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: #b5b5b5;
  border-radius: 10px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    animation: shimmer 2s infinite;
  }
`;
export const LoadingCardTopic = styled.div`
  width: 82px;
  height: 20px;
  background-color: #ffffff;
  top: 15px;
  left: 13px;
  border-radius: 18px;
  position: absolute;

  &::after {
    content: "";
    position: absolute;
    width: 20%;
    height: 100%;
    left: 30px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 0, 0, 0.4),
      transparent
    );
    animation: shimmer 2s infinite;
  }
`;
