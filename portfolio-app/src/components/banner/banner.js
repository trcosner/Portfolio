import React, {Component} from 'react';
import Navigation from './navigation'
import Scroller from './scroller'
import bannerPhoto from '../../content/images/banner.png'
import './banner.css'

class Banner extends Component{
  render() {
    const styles = {
      container: {
        background: 'hsl(153, 67%, 50%)', // eslint-disable-next-line
        background: '-moz-linear-gradient(90deg, hsla(153, 67%, 50%, .9), hsla(200, 100%, 50%, .9)),url(' + bannerPhoto + ') center',// eslint-disable-next-line
        background: '-webkit-linear-gradient(90deg, hsla(153, 67%, 50%, .9), hsla(200, 100%, 50%, .9)),url(' + bannerPhoto + ') center', // eslint-disable-next-line
        background: '-o-linear-gradient(90deg, hsla(153, 67%, 50%, .9),hsla(200, 100%, 50%, .9)),url(' + bannerPhoto +') center',// eslint-disable-next-line
        background: 'linear-gradient(90deg, hsla(153, 67%, 50%, .9),hsla(200, 100%, 50%, .9)),url(' + bannerPhoto + ') center',
        backgroundSize: 'cover',
      },
    };

    return (
      <div style={styles.container} className='Banner-Container'>
      <Navigation />
        <div style={styles.center}>
          <span className='Banner-firstName'>TYLER</span>
          <span className='Banner-lastName'>COSNER</span><br />
          <div className='Banner-subTitle'><i>Creative Developer</i></div>
        </div>
        <Scroller />
      </div>
    );
  }
}

export default Banner;
