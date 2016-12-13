import React, {Component} from 'react';

class DataLinkPatPort extends Component{
  render(){
    const styles = {
      container: {
        background: 'hsl(150, 65%, 50%)',
        color: 'white'
      },
    };
    return (
      <div style={styles.container} className='sectionContainer'>
        <h1>DataLink</h1>
        <h2>Patient Portal</h2>
        <p >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu</p>
      </div>
    )
  }
}

export default DataLinkPatPort;
