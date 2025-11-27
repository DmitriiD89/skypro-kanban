import styled from "styled-components";

export const HeaderClass = styled.header`
 width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;`;
export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;`;

export const HeaderLogo = styled.div`
 width: 85px;
 height: 17px;
 a {
    display: block;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
 
 `;
export const HeaderNav = styled.nav`
 max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  `;
export const PopUserSetName = styled.p`
color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
  

}
  `;
  export const PopUserSetMail = styled.p`
  color: #94A6BE;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
  `;
  export const PopUserSetTheme = styled.div`
  color: #000;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
  color: #000;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
}

input[type=checkbox] {
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: #EAEEF6;
  outline: none;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

input[type=checkbox]::before {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: #94A6BE;
  transition: 0.5s;
}

input:checked[type=checkbox]::before {
  left: 12px;
}
  `;

