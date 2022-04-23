import React, {useState,useEffect} from 'react';
import '../Components/Style.css'
import App from '../App';

function Nav(props){


        return(
            <div>
            <nav class="Rectangle">
                <img className="memelogo" src='./memelogo3.png'></img>
               <b> <h1 class="logoname">MemeGenerator</h1></b>
               
               <label class="switch">
                   
  <input type="checkbox" onClick={props.toggledarkmode}/>
  <span class="slider round" ></span>
</label>


            </nav>
           
            </div>
            
        )
    }


export default Nav