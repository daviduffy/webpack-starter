// import React from 'react';
import cat_1 from 'images/cat_1.png';
import gif_1 from 'images/supa_hot_fire.gif';
import cat_2 from 'images/cat_2.jpg';


const hello = () => {
  return (
    <div className="container">
      <div>
        <h1>Hello from my React component!</h1>
        <img src={cat_1} alt="" />
        <img src={gif_1} alt="" />
        <img src={cat_2} alt="" />
      </div>
    </div>
  )
}

export default hello;