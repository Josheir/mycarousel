
import './Carousel.css';

//Display 4 images



import React from 'react'
import {useState} from 'react';

//let i = 0;
let backgroundImage = new Array();
backgroundImage[0] = './image1.png';
backgroundImage[1] = './image2.png';
backgroundImage[2] = './image3.png';
backgroundImage[3] = './image4.png';
backgroundImage[4] = './image5.png';
backgroundImage[5] = './image6.png';
//backgroundImage[6] = './image1.png';
//backgroundImage[7] = './image2.png';
//backgroundImage[8] = './image3.png';
//backgroundImage[9] = './image4.png';

var a0 = 0;
var a1 = 0;
let a2 = 0;
let a3= 0;
let a4 = 0;
let a5 = 0;
let a6 = 0;
let a7 = 0;
let a8 = 0;
let a9 = 0;

var i=0;
a0 = backgroundImage[i]
a1 = backgroundImage[i+1];
a2 = backgroundImage[i+2];
a3 = backgroundImage[i+3];
a4 = backgroundImage[i+4];
a5 = backgroundImage[i+5];
a6 = backgroundImage[i+6];
//a7 = backgroundImage[i];
//a8 = backgroundImage[i +1];
//a9 = backgroundImage[i +2];




const MAXCOUNT = 100;

        /*
        console.log("A");
        console.log(i);
        //a2 = backgroundImage[i+1];
        console.log(i+1);
        //a3 = backgroundImage[i+2]
        console.log(i+2);
        //a4 = backgroundImage[i+3];
        console.log(i+3);
        console.log("A"); 

        console.log(a1); 
        console.log(a2);
        console.log(a3);
        console.log(a4);
*/
    
    
    //let counter1 = 1;
    //let j = 4;
    let k = -1;
    i = -1;

    console.log("i");
    console.log(i);
    function ClickedArrowLeft()
    {


        alert("here");
        
        //console.log("here");
        //console.log(i);

    //k is either 1,2,3,or 0
/*
    if (k === 4)
    {
        k = 0;
    }
    else if (k === 5)
    {
        k =1 ;
    } 
    else if (k === 6)
    {
        k=2;
    }
    else if (k === 7)
    {
        k = 3;
    }
    */

    /*
    k = checkForMaxCount(k);
    console.log(k);
    a1 = backgroundImage[k];
    
    k = checkForMaxCount(k);
    console.log(k);
    a2 = backgroundImage[k];
    
    k = checkForMaxCount(k);
    console.log(k);
    a3 = backgroundImage[k];
    
    k = checkForMaxCount(k);
    console.log(k);
    a4 = backgroundImage[k];
    
    

   
    i=i+4;
    k++;
    
*/
    }
        //i=i+4;
        console.log("B"); 
        
        
        
        i=i+1
        

        function A0(){
            a0 = backgroundImage[0];
            console.log(i);
            return(a0);
        }

        function A1(){
            a1 = backgroundImage[1];
            console.log(i);
            return(a1);
        }

        function A2(){
            a2 = backgroundImage[2];
            console.log(i);
            return(a2);
        }

        function A3(){
            a3 = backgroundImage[3];
            console.log(i);
            return(a3);
        }
        function A4(){
            a4 = backgroundImage[4];
            console.log(i);
            return(a4);
        }

       

        a0 = A0();
        a1= A1();
        a2 = A2();
        a3 = A3();

        a0 = A1();
        a1= A2();
        a2 = A3();
        a3 = A4();


/*


        if(i >= 4){
            i=0;
        }
        a1 = backgroundImage[i];
        console.log(i);

        
        
        let a = "b";
        i = `${a}`+ "test";

        alert(i);
        i=i+1
        
        if(i >= 4){
            i=0;
        }
        a2 = backgroundImage[i];
        console.log(i);



        i=i+1
        
        if(i >= 4){
            i=0;
        }
        a3 = backgroundImage[i];
        console.log(i);

        i=i+1
        
        if(i >= 4){
            i=0;
        }
        a4 = backgroundImage[i];
        console.log(i);
        i++;


       
        alert(i);

        

        //
        console.log(a1); 
        console.log(a2);
        console.log(a3);
        console.log(a4);
        

        
}
*/
    function checkForMaxCount(l){
       
        if (i >= (MAXCOUNT-1))
        {
            alert("here");
            //alert(i);
            //i = 0;
            return(0);
        }
        //else if(j == 4)
        //{j = 0;
        //return(0);
        //}
         else{
            //if i > 4 i = 0
            l=l+1;
            //i=l;
            //alert(i);
        return(l);
        }
    }
    /////

const Carousel = () => {

const [counter, SetCounter] = React.useState('');
    



return (
    
<div className = "images" >

{a1};  

<img className = "arrows arrow" src = "arrow-left.jpg" alt = "" onClick={() => {ClickedArrowLeft(); SetCounter('1');}} />


<img className = "images2 images" src = {a0} alt = "" />
<img className = "images2 images" alt = ""src = {a1} />
<img className = "images2 images" alt = "" src = {a2} />
<img className = "images2" alt = "" src = {a3} /> 
<img className = "arrows" src = "arrow-right.png" alt = "" />

</div>

)

};
    
   
     
export default Carousel;
