import styled from "styled-components";

export const PopLogin = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;
export const PopLoginContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;
export const PopLoginBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.theme.backgroundHeader};
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;
export const PopLoginTtl = styled.div`
  text-align: center;
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
  width: 45;
  height: 30;
  color: ${(props) => props.theme.headerUserSet};
`;
export const PopLoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
export const PopLoginYes = styled.button`
  width: 248px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;

  &:hover {
    background-color: #33399b;
  }
  a {
    margin-top: 4.5px;
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #fff;
  }
`;
export const PopLoginNo = styled.div`
  width: 248px;
  height: 42px;
  background-color: transparent;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 150%;
  font-weight: 400;
  letter-spacing: -0.14px;
  color: #94a6be66;
  margin-top: 20px;

  &:hover {
    text-decoration: inderline;
  }
  a {
    color: #94a6be66;
  }
`;
export const PopLoginInputMail = styled.input`
  border: 0.7px solid #94a6be66;
  width: 249px;
  height: 30;
  angle: 0 deg;
  opacity: 1;
  border-radius: 8px;
  border-width: 0.7px;
  gap: 10px;
  padding-top: 8px;
  padding-right: 10px;
  padding-bottom: 8px;
  padding-left: 10px;
  margin-bottom: 7px;
  color: ${(props) => props.theme.headerSetMail};
  background-color: ${(props) => props.theme.backgroundCard};
`;
export const PopLoginInputPassword = styled.input`
  border: 0.7px solid #94a6be66;
  width: 249px;
  height: 30;
  angle: 0 deg;
  opacity: 1;
  border-radius: 8px;
  border-width: 0.7px;
  gap: 10px;
  padding-top: 8px;
  padding-right: 10px;
  padding-bottom: 8px;
  padding-left: 10px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.headerSetMail};
  background-color: ${(props) => props.theme.backgroundCard};
`;
