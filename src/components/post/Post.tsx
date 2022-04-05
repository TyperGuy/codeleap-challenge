import React from 'react';
import {FlexType } from 'customTypes';
import Styles from './Post.module.css';
import { Container as Flex } from '../inputs/Input.styles';
import { ReactComponent as Edit} from '../../assets/img/edit.svg';
import { ReactComponent as Delete} from '../../assets/img/delete.svg';





const FlexProps : FlexType ={
  justify:"center",
  dir:"column",
  align : "center",
  bg: "#fff",
  height: ""
} 

const Post:React.FC =()=> (
    <div className={Styles.mainContainer}>
      <div className={Styles.header}>

        <p className={Styles.title}>My First Post at CodeLeap Network!</p>
        <div className={Styles.actionContainer}>
          <Delete/>
          <Edit/>
        </div>

      </div>
      <div style={{backgroundColor:'#fff',padding:'2em'}}>
         <Flex {...FlexProps} >
           <div className={Styles.flex}>
             <p className={Styles.title}>@Victor</p>
             <p>25 minutos ago</p>
           </div>
           <p>Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.
              <br/><br/>
            Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.</p>
         </Flex>
      </div>
    </div>
  )

export default Post;

