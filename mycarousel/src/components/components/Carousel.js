
import './Carousel.css';


import React from 'react'
import {useState} from 'react';


let backgroundImage = new Array();
backgroundImage[0] = './image1.jpg';
backgroundImage[1] = './image2.jpg';
backgroundImage[2] = './image3.jpg';
backgroundImage[3] = './image4.jpg';
backgroundImage[4] = './image5.jpg';
backgroundImage[5] = './image6.jpg';
backgroundImage[6] = './image7.jpg';


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
   
    
    i = -1;
    i=i+1
        

        

        
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
        
        

        /////////////////////////////
        moveElementsOfArrayRight()
        {
            let arrayLength = this.getArrayLength();
            alert(arrayLength);
            let storedValue  = vectorOfElements[(arrayLength-1)];
           
            for (let i = (arrayLength-1); i >= (0) ; i-- )
            {      //all values but start move left to right replacing farther along node with earlier
                
               
                vectorOfElements[i+1] = vectorOfElements[i];
               
            
            }

            vectorOfElements[0] = storedValue;
            

        }
        ////////////////////////////
        
        
        moveElementsOfArrayLeft()
        {
            let arrayLength = this.getArrayLength();
            
           alert(arrayLength);
            
            
            let storedValue  = vectorOfElements[0];
            //Fills all but 4th imas index 3
            for (let i = 0; i <= (arrayLength-1) ; i++ )
            {      //all values but start move right to left replacing earlier node with farther along node
                
               
                vectorOfElements[i] = vectorOfElements[i+1];
               
            
            }

            this.storageOfStartNode = '2';
           
            vectorOfElements[(arrayLength-1)] = storedValue;
           
          
        }

        readFirstFourValues()
        {   //arange first four values for displaying images
            for(i = 0 ; i<= 3 ; i++)
            storageArray[i] = vectorOfElements[i];
        }
        displayFirstFourCharacters()
        {
            
           
            a0 = storageArray[0];
            a1 = storageArray[1];
            a2 = storageArray[2];
            a3 = storageArray[3];

            console.log(a0 + " " + a1 + " " + a2 + " " + a3);

        }
    }

    let arrayClass = new vector();
    
    
    arrayClass.pushVector(a0);
    
    arrayClass.pushVector(a1);
    
    arrayClass.pushVector(a2);
    
    arrayClass.pushVector(a3);
   
    arrayClass.pushVector(a4);
    
    arrayClass.pushVector(a5);
   
    

/*

//FETCH URLfetch('https://jsonplaceholder.typicode.com/todos').then(response => {
//public
fetch('http://localhost:3000/file.txt').then(response => {
return response.json();
}).then(data => {
    
    
    
    data.forEach(element => {
        console.log(element.id);
        arrayClass.pushVector(element.id);
    });
    //console.log(data);
}).catch(err => {

});

*/


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
