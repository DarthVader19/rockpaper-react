import React from "react";

const ButtonConsole = ({changeImg}) => {
   
  return (
        <div className='center '>
            <button onClick={changeImg}
             type="button" className="bg-light-blue dib br3 grow pa2 center bw2 shadow-3 btn btn-outline-primary">Rock</button>
            <button onClick={changeImg}
            type="button" className="bg-red dib br3 grow bw2 pa2 shadow-3  btn center btn-outline-secondary">Paper</button>
            <button onClick={changeImg}
            type="button" className="bg-green dib br3 grow bw2 center pa2 shadow-3 btn btn-outline-warning">Scissor</button>
        </div>
  );
};

export default ButtonConsole;