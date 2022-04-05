import React from 'react';
import { FlexType} from 'customTypes';
import { Modal,Container as Flex } from '../../../styles/Flex.styles';
import Button from '../../button/Button';

const FlexProps : FlexType ={
  justify:"flex-start",
  dir:"column",
  align : "center",
  bg:"#fff",
  height: ""
  
}



const Alert :React.FC = () => (
      <Modal>
        <div  style={{ padding:"2em",background:"#fff",width:500}}>
          <Flex  {...FlexProps}>
            <p>Are you sure you want to delete this item?</p>
            <div style={{ display:"flex",justifyContent:"flex-end",gap:"1em", marginTop:20}}>
              <Button   button={{text : "Cancel",variant : "outlined"}}/>
              <Button button={{text : "OK",variant : "outlined"}}/>
            </div>
          </Flex>
        </div>
        
      </Modal>  
  )

export default Alert;
