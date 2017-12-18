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
        fontFamily: 'Inconsolata',
        width:'100%',
        color: '#484AB3',
        fontSize: '3rem'
      },
      blurb:{
        color:'grey',
        fontSize: '1.5rem',
        lineHeight: '2rem',
        letterSpacing: '0.05rem'
      },
      link: {
        color: '#484AB3'
      }
    }

    return(
      <div className={styles.grid} style={style.general}>
      
      <h1 style={style.header}>Intro</h1>
        
        <span style={style.blurb}>Hello Cards are some pre-designed ui cards to display information</span>
      
      <h2 style={style.header}>What it uses</h2>

        <span style={style.blurb}>
          React, Flexbox</span>

        <h1 style={style.header}>How it works</h1>

        <span style={style.blurb}>The code is available at <a style={style.link} href="http://github.com/cerico/hello-cards">github</a> - and I'm writing up a more in depth piece to go alongside this brief overview.</span>


        <h1 style={style.header}>Example app</h1> 

        <span style={style.blurb}>The Node application uses Child Processes to run a combination of pm2 and lsof commands that bring back all the online applications and the port each is running on, alongside associated information like uptime, cpu usage etc. This is constructed into a json object and returning to the client app.</span>
       
        <h1 style={style.header}>Client</h1>

        <span style={style.blurb}>The React/Redux client application makes an api to the node application, and with the returned JSON creates a coloured card for each application</span>
      </div> 
    )
  }
}


export default About
