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

  props.direction ==- 'column' ?
   (props.border = 'dotted 1px #fff', props.lineHeight = '1rem' ):
   (props.border = '0px', props.lineHeight = '1.4rem')

  const wrapper = {
    flexDirection: 'row',
    display: 'flex',
    width: '100%',
    overflow: 'auto',
    float: 'left',
    paddingTop: '8px',
    paddingBottom: '8px',
    marginBottom: '5px',
    borderTop: props.border,
    borderBottom: props.border
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
    lineHeight: '1rem'
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
