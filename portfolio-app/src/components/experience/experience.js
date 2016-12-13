import React, {Component} from 'react';
import DataLinkEHR from './datalinkehr';
import DataLinkRAE from './datalinkrae';
import DataLinkPatPort from './datalinkpatport'
import Commercialtribe from './commercialtribe'
import './experience.css'

class Experience extends Component{
  render(){
    return(
      <div id="experience">
        <span className='flexContainer'>
          <DataLinkEHR className='flexSub'/>
          <DataLinkRAE className='flexSub'/>
        </span>
        <span className='flexContainer'>
          <DataLinkPatPort className='flexSub'/>
          <Commercialtribe className='flexSub'/>
        </span>
      </div>
    )
  }
}

export default Experience;
