import React from "react";

const ImageCard = (props) => {
    const {player,userImgSrc,botImgSrc}=props;
  return (

<div className="bg-light-blue dib br3 pa3 ma2  bw2 shadow-5">
  <p className="">The Bot</p>
<img src={botImgSrc} className="rounded float-left w-40  br3" alt={player[0]}/>

<img src={userImgSrc} 
    className="rounded float-right w-60 imgback br3 ma2" alt={player[1]}/>
    <p className="">{player}</p>
</div>
    
);
};

export default ImageCard;
