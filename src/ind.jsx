import html2canvas from 'html2canvas';
import $ from 'jquery';
import React from 'react';
import MemeComponent from './Components/MemeComponent'; 
 
 
function PrintDiv(div){
    html2canvas((div),{
        onrendered: function(canvas){
            var myimage=canvas.toDataURL();
            downloadURI(myimage,"abc.png");
        }
    });
}

function downloadURI(uri,name){
    var link=document.createElement("a");
    link.download=name;
    document.body.appendChild(link);
    link.click();
}



 // Global variable
 var element = $("#html-content-holder"); 
          
 // Global variable
 var getCanvas; 

 $(".btni").on('click', function() {
     console.log("btao");
    var imgageData = getCanvas.toDataURL("image/png");
  
    // Now browser starts downloading 
    // it instead of just showing it
    var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
  
    $(".btni").attr("download", "GeeksForGeeks.png").attr("href", newData);
});