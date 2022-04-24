import React, {useState,useEffect} from 'react';
import '../Components/Style.css'
import App from '../App';
import pic from "../memelogo3.png";
function Nav(props){


        return(
            <div>
            <nav class="Rectangle">
                <img className="memelogo" src={pic}></img>
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