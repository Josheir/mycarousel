import React from 'react'
import {useState} from 'react';
import ArrayPush from "./ArrayPush.jsx" 

//let i = 0;
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

    class vector extends Array{}
    {
        function pushVector(element){
            vector.push(element);
            console.log(element);
        }

    }


    const ArrayPush1 = () => {

        const [counter, SetCounter] = React.useState('');
            
        
        
        
        return (
            <div>
            <ArrayPush>
        
        
        </ArrayPush>
        
        <h1> fjaoissssssssssssssssssa</h1>
        </div>
        )
        
        };
            
           
             
        export default ArrayPush1;
        
           
             
        



        
    //let v = new Vector(A0,A1,A3);
    
    //    v.push(A4);

    
