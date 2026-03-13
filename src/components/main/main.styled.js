import styled from "styled-components";

export const MainClass = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.backgroundMainPage};
`;
export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
`;
export const MainContent = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
export const EmptyTasks = styled.div`
  font-family: Roboto;
  font-weight: 500;
  font-style: Medium;
  font-size: 25px;
  line-height: 50vh;
  letter-spacing: 0px;
  color: #000;
  text-align: center;
  width: 100%;
`;
