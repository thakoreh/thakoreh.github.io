import React, { Component } from 'react';
import RecentCards from './RecentCards.js';

class RecentWork extends Component{
    render(){
        return(<div >
           <div class="recentwork">
               <center><h2>My Recent Work</h2></center>
           </div> 
           <br />
           <br />
           <RecentCards/>
            </div>
        );
    }
}

export default RecentWork;