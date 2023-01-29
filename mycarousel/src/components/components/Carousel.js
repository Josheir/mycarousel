
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




const MAXCOUNT = 100;

        
    let k = -1;
    i = -1;

    
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

        


        
        let vectorOfElements= [] ;
        let storageArray = [0,0,0,0];
        
        class vector
        {
        constructor()
        {
            this.startingIndex = 0;
            this.endingIndex = 3;
            this.lengthOfArray=  0;    
            this.storageArray = [];   
            this.storageOfStartNode = '1';
            
        }
        getArrayLength()
        {
            this.lengthOfArray = vectorOfElements.length ;
            return(this.lengthOfArray);
        }
        getValueOfEndNode()
        {
            

        }
        getValueofStartNode()
        {
            let storedfirstNode = vectorOfElements[0];
            return(this.storedfirstNode);
        }

        //pushes for initilaization from left to right
        pushVector(element1){
            vectorOfElements.push(element1);
            
        }
        
        
        moveElementsOfArrayRight()
        {
            let storedValue  = vectorOfElements[5];
           
            for (let i = 5; i >= (0) ; i-- )
            {      //all values but start move right to left replacing earlier node with farther along node
                
               
                vectorOfElements[i+1] = vectorOfElements[i];
               
            
            }

            vectorOfElements[0] = storedValue;
            

        }
        
        
        moveElementsOfArrayLeft()
        {
            let arrayLength = this.getArrayLength();
            
            
            
           alert(this.storageOfStartNode);

           
            
            
            let storedValue  = vectorOfElements[0];
            //Fills all but 4th imas index 3
            for (let i = 0; i <= (5) ; i++ )
            {      //all values but start move right to left replacing earlier node with farther along node
                
               
                vectorOfElements[i] = vectorOfElements[i+1];
               
            
            }

            this.storageOfStartNode = '2';
           
            vectorOfElements[5] = storedValue;
            console.log("here");
           
            console.log(vectorOfElements);

            

            
        }






        readFirstFourValues()
        {   //arange first four values for displaying images
            for(i = 0 ; i<= 3 ; i++)
            storageArray[i] = vectorOfElements[i];
        }
        displayFirstFourCharacters()
        {
            console.log(a0 + "1 " + a1 + " " + a2 + " " + a3);
           
            a0 = storageArray[0];
            a1 = storageArray[1];
            a2 = storageArray[2];
            a3 = storageArray[3];

        }
    }

    let arrayClass = new vector();



    
    
    
    arrayClass.pushVector(a0);
    
    arrayClass.pushVector(a1);
    
    arrayClass.pushVector(a2);
    
    arrayClass.pushVector(a3);
   
    arrayClass.pushVector(a4);
    
    arrayClass.pushVector(a5);
   
    


function operations1(){

        
        console.log(arrayClass);
        arrayClass.moveElementsOfArrayLeft();
        arrayClass.readFirstFourValues();
        
        arrayClass.displayFirstFourCharacters();

        
        
}

function operations2(){

       
    console.log(arrayClass);
    arrayClass.moveElementsOfArrayRight();
    arrayClass.readFirstFourValues();
    
    arrayClass.displayFirstFourCharacters();

    
    
}
       
    

    

        
const Carousel = () => {

const [counter, SetCounter] = React.useState('');
    



return (
    
<div className = "images" >

  

<img className = "arrows arrow" src = "arrow-left.jpg" alt = "" onClick={() => {operations1(); SetCounter(counter+1);}} />




<img className = "images2 images" src = {a0} alt = "" />
<img className = "images2 images" alt = ""src = {a1} />
<img className = "images2 images" alt = "" src = {a2} />
<img className = "images2" alt = "" src = {a3} /> 
<img className = "arrows" src = "arrow-right.png" alt = "" onClick={() => {operations2(); SetCounter(counter+1);}}/>

</div>

)

};
    
   
     
export default Carousel;
