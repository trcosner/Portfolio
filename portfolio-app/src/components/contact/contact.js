import React, {Component} from 'react';

class Contact extends Component{
  render(){
    const styles = {
      container:{
        background: 'hsl(200, 100%, 50%)',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    };

    return (
      <div id='contact' className='sectionContainer' style={styles.container}>
          (813) 812 - 2605 <br /><br />
          trcosner@gmail.com
      </div>
    )
  }
}

export default Contact;
