import React from "react";
import '../Components/Style.css'
import { Form } from "react-bootstrap";
import '../ind'
import domtoimage from "dom-to-image";


function MemeComponent(props){
  const printRef = React.useRef();
  const [buttontext, setbuttontxt]=React.useState(true)
  
  const [memeimg, setmemeimg]= React.useState({
       toptext: "",
       bottomtext: "",
       randomimg: ''
  })

  
  const [allmemes, setallmemes]= React.useState([])

  React.useEffect(()=>{
      // axios.get('https://api.imgflip.com/get_memes')      ----by axios method
      // .then(res=>{
      //   setallmemes(res.data)
      // })
      // .catch(err=>{
      //   console.log(err)
      // })


    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data=>setallmemes(data.data.memes))
    .catch((err)=>{
      alert("Error! No Internet connection")
    })
  },[])

  

  function clickhandler(){
        
        const randomnumber=Math.floor(Math.random() * allmemes.length)
        const url=allmemes[randomnumber].url
        setmemeimg(prevmeme=>({
            ...prevmeme,
            randomimg: url
        }))
        setbuttontxt(false)
         
  }

  function handlechange(event){
      const {name, value}=event.target
      setmemeimg(prevmeme=>({
        ...prevmeme,
        [name]: value
      }))

  }
  

const shot=()=>{
  var node=document.getElementById('load');
    
    domtoimage.toPng(node)
    
    // .then(function (dataUrl) {
    //     var img = new Image();
    //     img.src = dataUrl;
    //     document.body.appendChild(img);
        
    // })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
    domtoimage.toJpeg(document.getElementById('load'), { quality: 0.95 })
    .then(function (dataUrl) {
     
        var link = document.createElement('a');
        link.download = 'image.jpeg';
        link.href = dataUrl;
        link.click();
    });
}



        return(

          <main className={props.darkmode ? "dark" : "light"}>
            <form className="form">
   <div className="row">
    <div className="col">
       <input type="text" class="form-control" name="toptext" placeholder="Write First Sentence" value={memeimg.toptext} onChange={handlechange}/>
     </div>
     <div className="col">
       <input type="text" class="form-control" name="bottomtext" placeholder="Write Second Sentence" value={memeimg.bottomtext} onChange={handlechange}/>
     </div>
   </div>
  
 </form>
 <button onClick={clickhandler} className="submitbutton" >{buttontext? "GET A NEW MEME IMAGE" : "GET ANOTHER MEME IMAGE"}</button>
 <br></br>
 <br></br>

          <div className="meme" id="load" ref={printRef}>
         
              <img src={memeimg.randomimg} className="meme-img"  ></img>
              <h2 className="memetext top">{memeimg.toptext}</h2>
              <h2 className="memetext bottom">{memeimg.bottomtext}</h2>
            
          </div>
          <br></br>
          <button className="downloadbtn"  type="button" onClick={shot}>
        Download as Image
      </button>
         <br></br>
         <br></br>
         <br></br>
          <div className="connect">
            Connect with me:
          </div>

          <div className="foot">
         
          
          <div className="cover">
            
          <a href="https://www.facebook.com/profile.php?id=100005213804787" class="fa fa-facebook"></a>
          <a href="https://www.linkedin.com/in/aditya-pathak-7ab7b2173/" class="fa fa-linkedin"></a>
          <a href="https://www.instagram.com/aditya__pk/" class="fa fa-instagram"></a>
          </div>
          </div>
         


          </main>
          

        )
     }

//             
//             {/* {
//               meme.length ?
//               meme.map(meme=> <div key={meme.id}><img src={meme.url}></img></div>):
//               null
//             }
//             {
//               errormsg? <div>{errormsg}</div> : null
//             } */}
            
//             </div>
     

export default MemeComponent