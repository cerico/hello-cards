import React from 'react';
import Top from './top'
import Detail from './detail';
import WideLogo from './wide-logo';

import styles from './card.css'

const Body = (props) => {

  const divStyle = {
    paddingTop: '.625rem',
    height: '100%'

  };
  const whatStyle = {
    display: 'flex',
    flexDirection: props.product.direction || 'row'
  };

  return (
    <div style={whatStyle}>
      <Top {...props}/>
      <Detail {...props}/>
      {props.product.direction == 'column' ? 
        <WideLogo logo={props.product.logo}/>
        : null
      }
    </div>
  )
}

export default Body
