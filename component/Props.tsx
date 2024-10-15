import React from "react";
import Image from "next/image";
import blue0 from "../dataimage/Blue_1.webp";
import blue1 from "../dataimage/Blue_1.webp";
import blue2 from "../dataimage/blue2.jpeg";
import blue3 from "../dataimage/blue3.jpg";
import green1 from "../dataimage/Green_1.webp";
import green2 from "../dataimage/green2.jpg";
import green3 from "../dataimage/Green3.jpg";
import cyan1 from "../dataimage/cyan.jpg";
import cyan2 from "../dataimage/cyan2.jpg";
import cyan3 from "../dataimage/cyan3.jpg";


//import  {scor1,setGlobalVariable} from "../src/app/page"
// const Props=(props:{name:string, cast:string})=>{
const Props = ({ cname, onoff, clickno,plary1,scor1 }: { cname: string; onoff: boolean; clickno: number;plary1:number;scor1:number  }) => {
  //console.log(props)
  // Variable define.
   
  let def: string = cname;
  let rcv: number = 0;
  let cnumber:number =clickno
  let zero: boolean =false;
  let player1score:number=scor1;
  let player2score:number
  let img = blue0;
  let lnum:string[]=['B2','G1','C1']
  let picname:string='';
  let luckytrue: boolean;
  def = rnumber(cname);
  //==================================
   if ((cname === "Blue") && (rcv == 1)) {
      img = blue1;
    }
  if ((cname === "Blue") && (rcv == 2)) {
      img = blue2;
       }
 if ((cname === "Blue") && (rcv == 3)) {
    img = blue3;
   }
 
    if (cname === "Green" && rcv === 1) {
    img = green1;
    }
  if (cname === "Green" && rcv === 2) {
    img = green2;
  }
  if (cname === "Green" && rcv === 3) {
    img = green3;
  }
 
  if (cname === "Cyan" && rcv === 1) {
    img = cyan1;
   }
  if (cname === "Cyan" && rcv === 2) {
    img = cyan2;
  }
  if (cname === "Cyan" && rcv === 3) {
    img = cyan3;
  }


  if (cnumber < 0) {
    zero=true;
    cnumber=0;
    player1score=0;
    scor1=0
   
  }
  else {
    zero=false;
  }


  luckytrue = 	lnum.includes(picname);
  if (luckytrue==true) {
   scor1=(10+scor1);
  }


  
   return (
    // <h1> Hello {props.name +" "+ props.cast} </h1>   without destructure
    <div className="container">
      <p id="text-2"> {cname} </p>
      <h1> {` You have selected ${cname} button:`} </h1> <h1>{`${def}`} </h1>
      <div className="container1">
        <Image
          src={img}
          alt="Sole"
          className="w-[350px] h-[200px] ml-2 rounded-2xl align-middle "
        />

        {onoff ? (
          <p className="box" id="text-1">
            {" "}
            Select on-off button for start.{" "}
          </p>
        ) : (
          <p className="box" id="text-1">
            {" "}
            You have only 5 clicks to find a picture of a human
            <p id="text-2">you have now {cnumber} click</p>
            {zero ?(<p className="box" id="text-2" > You have completed your chances </p> ) :(<p  className="box" id="text-1"> Chance remaining </p>)}
            
            <p id="text-2"> Player 1  Score =   {scor1}</p>
            </p> 
            
        )}
        </div>
    </div>
  );

  ///  Rendum Number
  function rnumber(colname: string) {
    let rn: number;

    //rn=Math.floor(Math.random() * 3)
    rn = Math.floor(Math.random() * (3 - 1 + 1) + 1);
     switch (cname) {
      case "Blue":
        switch (rn) {
          case 1:
            def =
              "The color blue in many cultures is significant in religious beliefs, brings peace, or is believed to keep the bad spirits away.";
            rcv = rn;
           break;
          case 2:
            def =
              "Blue symbolizes trust, responsibility, dedication, and bravery. Several law enforcement agencies in America don blue uniforms as this color is seen as being more authoritative (especially when the hue is dark) and often evokes.";
            rcv = rn;
             picname='B2'
            break;
          case 3:
            def =
              "The meaning we assign to the color blue can vary based on several factors, some of which include our culture, spirituality, symbolism, and more.";
            rcv = rn;
            break;
           
        }
        break;
       case "Green":
        switch (rn) {
          case 1:
            def =
              "Those with Green color personality strengths tend to be perfectionistic, analytical, conceptual, cool, calm, inventive and logical. They seek knowledge and understanding as well as always looking for explanations and answers.";
            rcv = rn;
             picname='G1'
            break;
          case 2:
            def =
              "As a symbol of wealth, regeneration, fertility, health and harmony, green is another lucky color in Chinese culture. .";
            rcv = rn;
            break;
          case 3:
            def =
              "The Islamic green of the flag represents the Muslim-majority populace of Pakistan while the white stripe on the hoist-end represents its various religious minorities.";
            rcv = rn;
            break;
        }
        break;

      case "Cyan":
        switch (rn) {
          case 1:
            def =
              "Cyan is a relaxing and inspiring color that evokes images of crystal waters and is usually associated with liveliness, tranquility, youth, and energy.";
            rcv = rn;
             picname='C1'
            break;
          case 2:
            def =
              "In the exciting world of fashion, the color cyan is a tool to manifest a bold and avant-garde statement.";
            rcv = rn;
            break;
          case 3:
            def =
              "cyan pigments absorb red light. Cyan is sometimes called blue-green or turquoise and often goes undistinguished from light blue.";
            rcv = rn;
            break;
        }
        break;

      // You can add more cases for other colors if needed.
       }

    return def;
  }
};

export default Props;
