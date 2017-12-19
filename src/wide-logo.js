import React from 'react';

var classNames = require('classnames');

const WideLogo = (props) => {

    let useStyle
    var imgStyle = {
      backgroundImage: 'url(\'' + props.logo + '\')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100%'
    };
    var divStyle = {
      display: 'inline-block',
      position: 'relative',
      height: '174px',
      marginLeft: '10px'
    };
    var numStyle = {
      fontSize: '6rem',
      border: props.colour,
      borderRadius: '50%',
      margin: '0 auto',
      marginTop: '0px',
      paddingLeft: '5%',
      marginLeft: '5%',
      marginRight: '23%',
      width: '50%',
      height: '80%',
      marginTop: '5%',
      textAlign: 'center',
      paddingTop: '50px',
    }

    props.logo ? 
      useStyle = imgStyle
      : useStyle = numStyle


    return (
      <div style={divStyle}>
        <div style={useStyle}>23</div>
      </div>
    )
};

export default WideLogo
