import React from "react";
import '../Components/Style.css'
import { Form } from "react-bootstrap";
import '../ind'
import $ from 'jquery'
import html2canvas from 'html2canvas';


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
//   function PrintDiv(btni){
//     html2canvas((btni),{
//         onrendered: function(canvas){
//             var myimage=canvas.toDataURL();
//             downloadURI(myimage,"abc.png");
//         }
//     });
// }

// function downloadURI(uri,name){
//     var link=document.createElement("a");
//     link.download=name;
//     document.body.appendChild(link);
//     link.click();
// }


// var element = $("#html-content-holder"); 
          
//  // Global variable
//  var getCanvas; 
// $("#preview").on('click', function() {
//   html2canvas(element, {
//       onrendered: function(canvas) {
//           $("#previewImage").append(canvas);
//           getCanvas = canvas;
//       }
//   });
// });

//  $("#btni").on('click', function() {
//      console.log("btao");
//     var imgageData = getCanvas.toDataURL("image/png");
  
//     // Now browser starts downloading 
//     // it instead of just showing it
//     var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
  
//     $("#btni").attr("download", "GeeksForGeeks.png").attr("href", newData);
// });
const handleDownloadImage = async () => {
  const element = printRef.current;
  const canvas = await html2canvas(element);

  const data = canvas.toDataURL('image/jpg');
  const link = document.createElement('a');

  if (typeof link.download === 'string') {
    link.href = data;
    link.download = 'image.jpg';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    window.open(data);
  }
};

        return(

          <main className={props.darkmode ? "dark" : ""}>
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

          <div className="meme" ref={printRef}>
         
              <img src={memeimg.randomimg} className="meme-img"  ></img>
              <h2 className="memetext top">{memeimg.toptext}</h2>
              <h2 className="memetext bottom">{memeimg.bottomtext}</h2>
            
          </div>
          <button type="button" onClick={handleDownloadImage}>
        Download as Image
      </button>
         
          
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