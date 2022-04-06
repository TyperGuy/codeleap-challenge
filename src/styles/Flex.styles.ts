import styled from 'styled-components';
import { FlexType } from 'customTypes';

const Container = styled.div<FlexType>`
  width: 100%;
  display:flex;
  flex-direction:${(props)=>props.dir};
  justify-Content:${(props)=>props.justify};
  gap:1em;
  ${(props)=>props.align!==""&& `
      align-items:${props.align};
  `  
  }
  background-color:${(props)=>props.bg};
  ${(props)=>props.height!==""&& `
    height:${(props.height)}
  `  
  }
`;

const Box = styled.div`
  border: 1px solid #999999;
  width: 660px ;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em;
  background-color: #fff;
  box-sizing: border-box;
`;
const LoginBox = styled.div`
  background-color: #fff;
  width: 500px ;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em;
  background-color: #fff;
`;

const Modal = styled.div`
  background-color: rgba(0,0,0,.10);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 100;
  top: 0;
`;

const ScrollView = styled.div`
  background-color: "#fff";
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow-y: hidden;
`;

export {Container,Box,Modal,LoginBox}


