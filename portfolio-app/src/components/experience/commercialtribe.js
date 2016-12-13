import React, {Component} from 'react';

class Commercialtribe extends Component{
  render(){
    const styles={
      paragraph:{
        paddingTop: '65px'
      }
    }
    return (
      <div className='sectionContainer'>
        <h1>CommercialTribe</h1>
        <p style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu</p>
      </div>
    )
  }
}

export default Commercialtribe;
