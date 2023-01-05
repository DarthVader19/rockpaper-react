import React from "react";

const Score = (props) => {
    const {status_,reset}=props;
    // const [bot,user]=player;
    
    
  return (
        <div>
           <div>
           <span className='badge'>{status_}</span>
           {/* <button type="button" className="btn btn-primary">
           {"Score"}<span className="badge badge-light">{score}</span>
         </button> */}
         <button onClick={reset} type="button" className=" btn btn-secondary">
           {'Reset'}
         </button>
           </div>
           
        </div>
  );
};

export default Score;

