
import './Carousel.css';

//Display 4 images



import React from 'react'
import {useState} from 'react';


let backgroundImage = new Array();
backgroundImage[0] = './image1.png';
backgroundImage[1] = './image2.png';
backgroundImage[2] = './image3.png';
backgroundImage[3] = './image4.png';
backgroundImage[4] = './image5.png';
backgroundImage[5] = './image6.png';



//document.write("<li><img  src='" + backgroundImage[0] + "' width='200' height='200'/><span>" + backgroundImage[0] + "</span></li>");

let a1 = 0;
let a2 = 0;
let a3= 0;
let a4 = 0;
let a5 = 0;
let i = 0;

a1 = backgroundImage[i];
a2 = backgroundImage[i +1];
a3 = backgroundImage[i +2];
a4 = backgroundImage[i+3];
a5 = backgroundImage[i+4];
i = 1;




let q= 0;
const Carousel = () => {
   
    

    const [counter, setCounter] = React.useState('');
    
    
    return (
       
        
       
        
       
<div className = "images" >


<img className = "arrows arrow" src = "arrow-left.jpg" alt = "" onClick={ClickedArrowLeft()} />



<img className = "images2 images" src = {a1} alt = "" />
<img className = "images2 images" alt = ""src = {a2} />
<img className = "images2 images" alt = "" src = {a3} />
<img className = "images2 " alt = "" src = {a4} /> 




<img className = "arrows" src = "arrow-right.png" alt = "" />

  
    
</div>





)

};

    //let flag = false;
    function ClickedArrowLeft()
    {
        //count - 1;
        //const [counter, setCounter] = useState(i);
        //setCounter(xounter);
        //flag = true;
        
        a1 = backgroundImage[i+1];
        a2 = backgroundImage[i+2];
        a3 = backgroundImage[i+3];
        a4 = backgroundImage[i+4]; 
    
        i++;
        //a5 = backgroundImage[i+5];
        //setCounter(counter+1);
        //setCounter('msg here', '');
        alert("msg");

        return(i);
    }
     
        
    
 
 export default Carousel;