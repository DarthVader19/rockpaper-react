import React from 'react';
import './App.css';
import Score from './components/score';
import ImageCard from './components/imagecard';
import ButtonConsole from './components/buttons';
// import Navbar from './components/navbar';
import Signin from './components/signin';
import SignUp from './components/signup';
// import Footer from './components/footer';
// import ImageWithTitle from './components/imagedisplay';
// import RockPaperScissors from './components/new';






class App extends React.Component{
  constructor(){
    super();
    this.state={
      player:['bot','your choice'],
      version:false,
      score:0,
      botImgSrc:'./images/bot.jpg',
      userImgSrc:'./images/logo.png',
      status_:'PLAY',
      isSignedIn:false,
      email:'',
      pass:'',
      route:'signin',
      users:[
        {name:'harry',
         pass:'potter' ,
        email:'harry@1.com'       },
         {name:'ashu',
         pass:'ashu',
        email:'ashu@1.com'        },
         {
          name:"darth",
          pass:"vader" ,
          email:'darth@vader.com'    
         }
      ]
    }
  }
  randNo=()=>{
    return (2*Math.random()).toFixed()
  }
  botimg=(version)=>{
    const images={0:'rock',1:'paper',2:'scissor'};
    const vimg={0:'/vimg/rock',1:'/vimg/paper',2:'/vimg/scissor'};

    let bot=version?vimg[this.randNo()]:images[this.randNo()]
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
    if(this.state.version )
    {  
         this.setState({userImgSrc:`./images/vimg/${btn}.png`})
     }
    else{
    this.setState({userImgSrc:`./images/${btn}.png`})
    }
    let botinput =this.botimg(this.state.version)
    

    
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
errormsg=()=>{
  return (
    <p>Wrong</p>
  );
}
onRoute=()=>{
  if(this.state.email===this.state.users[2].email&&this.state.pass===this.state.users[2].pass)
     {
      this.setState({isSignedIn:true})
      console.log();
      this.setState({player:this.state.users[2].name})
      
     }
  if (this.state.email===this.state.users[1].email&&this.state.pass===this.state.users[1].pass)
    {
      this.setState({version:true})
      this.setState({isSignedIn:true})
      this.setState({player:this.state.users[1].name})
    }

  else{
      return (
        <Signin error={this.errormsg}/>
      )
    }
  
}
router=(route)=>{
  this.setState({route:route})
}

signUpForm=()=>{
  console.log('signup');
  this.setState({route:'signup'})
  
  
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
    return(<div>
      {(this.state.route==='signin'&&
      <Signin error={this.errormsg} onpasschange={this.onpasschange}onemailchange={this.onemailchange} onRoute={this.onRoute} signUpForm={this.signUpForm}/>)||
      (this.state.route==='signup'&&<SignUp router={this.router}/>)}
    </div>
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