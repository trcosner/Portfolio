import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import designPhoto from '../../content/images/brushes.jpg';
import mobilePhoto from '../../content/images/phone.jpg';
import webPhoto from '../../content/images/computer.jpg'
import Swipeable from 'react-swipeable';

class Disciplines extends Component{
  constructor(props){
    super(props);
    this.state = {
      showing: null,
      photo: designPhoto,
      sections: [
        {name: 'Design', photo: designPhoto},
        {name: 'Web', photo: webPhoto},
        {name: 'Mobile', photo: mobilePhoto}
      ]
    };
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  componentWillMount(){
    let showing = this.state.sections[0].name;
    this.setState({showing});
  }

  previousSlide(){
    let index = this.state.sections.map(section => section.name).indexOf(this.state.showing);
    if(index < 0){
      return;
    }
    index = index === 0 ? this.state.sections.length - 1 : index - 1;
    this.setState({showing: this.state.sections[index].name, photo: this.state.sections[index].photo});
  }

  nextSlide(){
    let index = this.state.sections.map(section => section.name).indexOf(this.state.showing);
    if(index < 0){
      return;
    }
    index = index === this.state.sections.length - 1 ? 0: index + 1;
    this.setState({showing: this.state.sections[index].name, photo: this.state.sections[index].photo});
  }

  render(){
    const styles={
      container: {
        background: 'hsl(153, 67%, 50%)', // eslint-disable-next-line
        background: '-moz-linear-gradient(90deg, hsla(173,5%,34%,.7), hsla(173,5%,34%,.7)),url(' + this.state.photo + ') center',// eslint-disable-next-line
        background: '-webkit-linear-gradient(90deg, hsla(173,5%,34%,.7), hsla(173,5%,34%,.7)),url(' + this.state.photo + ') center', // eslint-disable-next-line
        background: '-o-linear-gradient(90deg, hsla(173,5%,34%,.7),hsla(173,5%,34%,.7)),url(' + this.state.phot0 + ') center',// eslint-disable-next-line
        background: 'linear-gradient(90deg, hsla(173,5%,34%,.7),hsla(173,5%,34%,.7)),url(' + this.state.photo + ') center',
        backgroundSize: 'cover',
        color: 'white'
      },
      paragraph:{
        paddingTop: '65px'
      },
      button:{
        cursor: 'pointer',
        color: 'white',
        padding: '20px'
      },
    }
    //TODO: Include transition animations and check swipe functionality
    return (
      <Swipeable onSwipingLeft={this.previousSlide} onSwipingRight={this.nextSlide} style={styles.container} className='sectionContainer right'>
        {this.state.showing === 'Design' ?
          <div>
            <h1>Design</h1>
            <p style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu</p>
          </div>
        : null}
        {this.state.showing === 'Web' ?
          <div>
            <h1>Web</h1>
            <p style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu</p>
          </div>
        : null}
        {this.state.showing === 'Mobile' ?
          <div>
            <h1>Mobile</h1>
            <p style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu</p>
          </div>
        : null}
          <FontAwesome style={styles.button} name='chevron-left' onClick={this.previousSlide}/>
          <FontAwesome style={styles.button} name='chevron-right' onClick={this.nextSlide}/>
      </Swipeable>
    )
  }
};

export default Disciplines;
