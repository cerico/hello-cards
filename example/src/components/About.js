import React from 'react';
import { connect } from 'react-redux';
const classNames = require('classnames');
import styles from './about.css';


class About extends React.Component  {

  render (){

    let display
    this.props.location.pathname === '/' ?
      display = 'flex' :
      display = 'flex'
    
    const style = {
      general: {
        display: display,
        width:'50%',
        fontFamily: 'Inconsolata',
        justifyContent: 'left',
        marginLeft:'25%',
        color: '#484AB3',
        backgroundColor: 'F9F7EE',
        marginBottom:'5%'
      },
      header: {
        fontFamily: 'Raleway',
        width:'100%',
        color: '#549fb8',
        fontSize: '4rem'
      },
      blurb:{
        color:'#484AB3',
        fontSize: '1.5rem',
        lineHeight: '2rem',
        letterSpacing: '0.05rem',
        display:'block',
        marginBottom:'50px',
        fontFamily: 'archivo narrow',
        fontWeight:200
      },
      link: {
        color: '#484AB3'
      },
      img: {
       marginTop:'10px',
       width:'528px'
      }
    }

    return(
      <div className={styles.grid} style={style.general}>
      
      

        <h1 style={style.header}>How To Use</h1>

        <div style={style.blurb}>
        Firstly, install the package<br/>

        <img style={style.img} src="https://s3.eu-west-2.amazonaws.com/io1937/screenshots/install.jpeg"/><br/></div>

        <div style={style.blurb}>Secondly import into your project<br/>

        <img style={style.img} src="https://s3.eu-west-2.amazonaws.com/io1937/screenshots/import.jpeg"/><br/></div>

        <div style={style.blurb}>Thirdly, include the Card component in your render method<br/>

        <img style={style.img} src="https://s3.eu-west-2.amazonaws.com/io1937/screenshots/include.jpeg"/><br/></div>

        <div style={style.blurb}>Fourth, pass it a product object, here is an example product object<br/>

        <img style={style.img} src="https://s3.eu-west-2.amazonaws.com/io1937/screenshots/product.jpeg"/><br/></div>

        <div style={style.blurb}>You can see full example code for a project using Hello-Cards, at <a href="https://github.com/cerico/hello-cards">https://github.com/cerico/hello-cards</a><br/>
        
        </div>
      </div> 
    )
  }
}


export default About
