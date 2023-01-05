import React from 'react';
import './App.css';
import Score from './components/score';
import ImageCard from './components/imagecard';
import ButtonConsole from './components/buttons';
// import Navbar from './components/navbar';
import Signin from './components/signin';
// import ImageWithTitle from './components/imagedisplay';
// import RockPaperScissors from './components/new';






class App extends React.Component{
  constructor(){
    super();
    this.state={
      player:['bot','your choice'],
      score:0,
      botImgSrc:'./images/bot.jpg',
      userImgSrc:'./images/logo.png',
      status_:'PLAY',
      isSignedIn:false,
      email:'',
      pass:'',
      users:[
        {name:'harry',
         pass:'potter' ,
        email:'harry@1.com'       },
         {name:'ashu',
         pass:'ashu',
        email:'ashu@1.com'        },
         {
          name:"darth",
          pass:"vader"
         }
      ]
    }
  }
  randNo=()=>{
    return (2*Math.random()).toFixed()
  }
  botimg=()=>{
    const images={0:'rock',1:'paper',2:'scissor'};
    let bot=images[this.randNo()]
    // console.log('bot', bot);
    this.setState({botImgSrc:`./images/${bot}.png`})
    return bot

}
compare=([user,bot])=>{
 
  const comp={'rock':0,'paper':1,'scissor':2};
  console.log(bot, user);
  
     user=comp[user];
     bot=comp[bot];
console.log(bot, user,this.state.score);
let score=this.state.score;
  

if(bot===user)
        {this.setState({status_:'DRAW!!!'})}
        else 
        {   if(bot===2&&user===0)
            { this.setState({score:score++,status_:'YOU WON !!!'})
             }
             else if(bot===0&&user===2)
               { this.setState({score:score--,status_:'BOT WON'})}
             else if(user>bot)
            { this.setState({score:score++,status_:'YOU WON !!!'});
            } 
            else
            {this.setState({score:score--,status_:'BOT WON'})
             }
              
             }


}


  changeImg=(e)=>{
    const btn=e.target.innerHTML.toLowerCase();
    // console.log("user = ",btn);
    this.setState({userImgSrc:`./images/${btn}.png`})
    let botinput =this.botimg()
    this.setState({player:[botinput,btn]})

    
    this.compare([btn,botinput])
  }
 
reset=()=>{

  global.location.reload();

}
onemailchange=(e)=>{
  // console.log( e.target.value);
  const email=e.target.value;
  this.setState({email:email})


  
}
onpasschange=(e)=>{
  // console.log( e.target.value);
  const pass=e.target.value;
  this.setState({pass:pass})
}
onRoute=()=>{
  if(this.state.email===this.state.users[1].email&&this.state.pass===this.state.users[1].pass)

     this.setState({isSignedIn:true})
  
}

signin=()=>{
  
  const {status_,player,score,userImgSrc,botImgSrc}=this.state;
  if(this.state.isSignedIn)
  {
    return (
      <div className="App">
      {/* <Navbar/> */}
      <Score status_={status_}reset = {this.reset} player={player} score={score}/>
      <ImageCard botImgSrc={botImgSrc}
      userImgSrc={userImgSrc} player={player}/>
      {/* <ImageWithTitle title='this is image1' imageUrl='https://picsum.photos/200'/> */}
      
      <ButtonConsole changeImg={this.changeImg}/>
        
    </div>

    )
  }
  else{
    return(
      <Signin onpasschange={this.onpasschange}onemailchange={this.onemailchange} onRoute={this.onRoute}/>
    )
  }
}

 render(){

  
  return (
    <div>
      {/* <RockPaperScissors/> */}
      {this.signin()}
    </div>
    
  );
 }
}

export default App;