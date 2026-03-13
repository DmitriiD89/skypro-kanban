import styled from "styled-components";

export const PopRegister = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;
export const PopRegisterContainer = styled.div`
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
export const PopRegisterBlock = styled.div`
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
export const PopRegisterTtl = styled.div`
  text-align: center;
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.headerUserSet};
`;
export const PopRegisterForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export const PopRegisterYes = styled.button`
  width: 248px;
  height: 30px;
  margin-top: 20px;
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
    display: inline-block;
    width: 100%;
    height: 100%;
    margin-top: 5px;
    color: #ffffff;
  }
`;
export const PopRegisterNo = styled.div`
 width: 248px;
  height: 30px;
  background-color: transparent;
  
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #94A6BE66;
  margin-top: 20px;
  }
  a{
  
  color:#94A6BE66;
  }
`;
export const PopRegisterInputName = styled.input`
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
export const PopRegisterInputMail = styled.input`
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
export const PopRegisterInputPassword = styled.input`
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
