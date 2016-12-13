import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import ScrollToElement from 'scroll-to-element';

class Scroller extends Component{
  render(){
    const styles={
      scroller:{
        color: 'white',
        position: 'absolute',
        top: '85vh',
        left: 0,
        right: 0,
        fontSize: '20px',
        cursor: 'pointer'
      }
    }

    return(
      <div style={styles.scroller} onClick={() => ScrollToElement('#about')}>
        <FontAwesome name='angle-down' size='2x'/><br />
        Learn More
      </div>
    )
  }
}

export default Scroller;
