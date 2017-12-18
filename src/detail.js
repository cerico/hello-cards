import React from 'react';

const Detail = (props) => {

  const showThirdCol = function showThirdCol() {
    if (props.cols == 3) {
      <div></div>
    }
  };

  const showSecondCol = () => {
    {props.direction == 'column' ?
      <div style={{...section,...borderLeft}}>
        <div style={label}>{props.textThree}</div>
        <div style={label}>{props.textFour}</div>
      </div>
      :  null
    }
  }
  let border,lineHeight,paddingLeft,paddingTop
  props.direction ==- 'column' ?
   (border = 'dotted 1px #fff', 
    lineHeight = '1rem',
    paddingTop ='25px',
    paddingLeft = '5%' ):
   (border = '0px', lineHeight = '1.4rem',paddingTop ='25px',
   paddingLeft = '5%' )

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
    lineHeight: props.lineHeight
  };

  const borderLeft = {
    borderLeft: 'dotted 1px #fff'
  };

  return (
    <div style={wrapper}>
      <div style={section}>
        <div style={label}>{props.textOne}</div>
        <div style={label}>{props.textTwo}</div>
      </div>
        {showSecondCol()}
        {showThirdCol()}
    </div>
  );
};

export default Detail;
