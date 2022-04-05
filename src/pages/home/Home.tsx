import React from "react";
import Styles from './Home.module.css';
import Form from "../../components/form/Form";

const Home:React.FC =()=>
  <div className={Styles.mainContainer}>

    <header className={Styles.header}>
       <div className={Styles.headerContent}>
         <h2>Code-leap Network</h2>
       </div>
    </header>
    <div className={Styles.contentContainer}>
        <div className={Styles.formaContainer}>
          <Form/>
        </div>
        <h1>klklklkl</h1>
    </div>

  </div>



export default Home;