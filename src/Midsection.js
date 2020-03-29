import React, { Component } from 'react';
import Particles from 'react-particles-js';
import CardSection from './cardSection.js';
import Typical from 'react-typical';
import RecentWork from './recentwork.js';
import WorkEx from './WorkEx.js';

const particlesParam={ 
    particles: { 
      number: { 
        value: 150, 
        density: { 
          enable: true, 
          value_area: 1000, 
        } 
      }, 
    }, 
  }
class Midsection extends Component {
    render(){
    return(
        
        <div >
            <div >
                <div style={{fontSize:40,fontWeight:40,bottom:60 ,marginTop:"200px"}}>
                <center><Typical
                  steps={['Welcome', 1000, 'Welcome to my Portfolio', 500]}
                  loop={Infinity}
                  wrapper="p"
                /></center>
                </div>
                <div style={{height:40}}>
                    <center>Full-Stack Developer</center>
                </div>
            </div>
            <br />
            <br/>
            <hr />
            <center ><CardSection/> </center>
            <br />
            <br/>
            <hr />
            <RecentWork />
            <br />
            <br/>
            <hr />
            <center ><WorkEx /></center>
            

        </div>
    );
}} ;

export default Midsection;

