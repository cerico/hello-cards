import React from 'react';

const Detail = (props) => {

  const showThirdCol = function showThirdCol() {
    if (props.cols == 3) {
      <div></div>
    }
  };


  let border,lineHeight,paddingLeft,paddingTop
  if (props.direction === 'column'){
    border = 'dotted 1px #fff',
    lineHeight = '1rem';
    paddingTop ='13px',
    paddingLeft = '0%' 
  } else {
    border = '0px', 
    lineHeight = '1.4rem',
    paddingTop ='25px',
    paddingLeft = '7%'
  }

  const wrapper = {
    flexDirection: 'row',
    display: 'flex',
    width: '100%',
    overflow: 'auto',
    float: 'left',
    paddingTop: '8px',
    paddingBottom: '8px',
    marginBottom: '5px',
    borderTop: border,
    borderBottom: border,
    paddingTop: paddingTop,
    paddingLeft: paddingLeft
  };

  const section = {
    borderLeft: 'none',
    paddingLeft: '0',
    paddingLeft: '8px',
    paddingRight: '8px',
    flex: 1
  };

  const value = {
    fontSize: '22px',
    lineHeight: '1rem',
    marginBottom: '5%'
  };

  
  const label = {
    fontSize: '14px',
    lineHeight: lineHeight,
    fontFamily: 'archivo narrow',
    fontSize: '1.1rem'
  };

  const borderLeft = {
    borderLeft: 'dotted 1px #fff'
  };

  return (
    <div style={wrapper}>
    {props.direction == 'column' ?
      <div style={section}>
        <div style={label}>{props.textOne}</div>
        <div style={label}>{props.textTwo}</div>
      </div>
      :  null}
      {props.direction == 'column' ?
      <div style={{...section,...borderLeft}}>
        <div style={label}>{props.textThree}</div>
        <div style={label}>{props.textFour}</div>
      </div>
      
      :  null}
       {props.direction == 'column' ?
      <div style={{...section,...borderLeft}}>
        <div style={label}>{props.textThree}</div>
        <div style={label}>{props.textFour}</div>
      </div>
      
      :  null}
        {props.direction == 'column' ?
        null :
        <div style={section}>
        <div style={label}>{props.textOne}</div>
        <div style={label}>{props.textTwo}</div>
        <div style={label}>{props.textThree}</div>
        <div style={label}>{props.textFour}</div>
        <div style={label}>{props.textFive}</div>
        <div style={label}>{props.textSix}</div>
      </div>

  }
        
        
    </div>
  );
};

export default Detail;
