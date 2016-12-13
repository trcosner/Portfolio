import React, {Component} from 'react';

class About extends Component{
  render(){
    const styles = {
      header: {
        color: 'hsl(153, 67%, 50%)',
      },
      paragraph:{
        paddingTop: '65px'
      },
    };

    return (
      <div id='about' className='sectionContainer' stlye={styles.container}>
        <h1 style={styles.header}>About Me</h1>
        <p style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu</p>
      </div>
    )
  }
}

export default About;
