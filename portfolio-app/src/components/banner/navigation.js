import React, {Component} from 'react';
import ScrollToElement from 'scroll-to-element';

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      sections: [
        {name: 'About', id: '#about'},
        {name: 'Experience', id: '#experience'},
        {name: 'Contact', id: '#contact'}
     ]
    }
  }

  render() {
    const styles={
      bar: {
        textSize: '20px',
        display: 'flex',
        justifyContent: 'space-around',
        color: 'white',
        position: 'relative',
        top: '2vh',
        textAlign: 'justify'
      },
      link: {
        cursor: 'pointer'
      }
    }

    let sectionList = this.state.sections.map((item) => {
      return (
          <div style={styles.link} onClick={() => ScrollToElement(item.id)} key={item.id}>{item.name}</div>
      );
    });

    return(
      <div style={styles.bar}>
        {sectionList}
      </div>
    )
  }
}

export default Navigation;
