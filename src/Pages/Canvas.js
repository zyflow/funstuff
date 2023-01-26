import React, {useRef, useEffect, useState} from 'react';
import {Particles} from '../Components/Particles';

const Canvas = props => {
  const [currentColor, setCurrentColor] = useState('red');
  const [ready, setReady] = useState(false);
  const colors = ['red', 'green', 'blue', 'yellow', 'magenta'];
  const canvasRef = useRef(null);

  let ctx = {}
  let particleArray = []

  useEffect(() => {
    console.log('ctx', canvasRef.current);
    if (canvasRef && canvasRef.current && canvasRef.current.getContext('2d')) {
      console.log('go ', canvasRef.current.getContext('2d'));
    }
      // setReady(true)
  }, [canvasRef.current])

  // useEffect(() => {
  //   console.log('refresh ..');
  //   init();
  // }, [])

  function draw(x, y, color) {
    // let ctx = canvasRef.current.getContext('2d');

    requestAnimationFrame(animate)
    // drawCircle(ctx, x, y, color)

    // ctx.requestAnimationFrame()
    // for (let i=0; i< 5; i++) {
    //   particleArray.push(new Particles(ctx, x, y))
    // }


    // for (let i=0; i< particleArray.length; i++) {
    //   handleParticles(particleArray[i])
    // }
  }

  // const drawCircle = (ctx, x, y, color) => {
  //   // ctx.globalCompositeOperation = 'source-over'
  //   // ctx.fillStyle = color;
  //   ctx.beginPath();
  //   // ctx.arc(x, y, 7, 0, 2*Math.PI)
  //   // ctx.fill();
  //   // setTimeout(() => {
  //   //   // ctx.clearRect(x, y, 40, 40)
  //   //   ctx.globalCompositeOperation = 'destination-out'
  //   //   ctx.arc(x, y, 14, 0, 2*Math.PI)
  //   //   ctx.fill();
  //   // }, 300 )
  // }

  const animate = () => {
    let ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, 1000, 1000)
    handleParticles()
  }

  const handleParticles = () => {
    console.log('length', particleArray.length);
    for (let i=0; i< particleArray.length; i++) {
      // handleParticles(particleArray[i])
      particleArray[i].update();
      particleArray[i].draw();
    }

  }

  // const changeColor = () => {
  //   const randNr = Math.floor(Math.random()  * (colors.length - 0) + 0);
  //   console.log('int', randNr, colors[randNr]);
  //   setCurrentColor(colors[randNr])
  //   return colors[randNr];
  // }

  const init = (event) => {
    for (let i=0; i< 1; i++) {
      particleArray.push(new Particles(ctx, event.clientX, event.clientY))
    }
  }


  return (
      <>
        {ready ? <canvas
            ref={canvasRef}
            width={1000}
            height={1000}
            onClick={(event) => {
              // changeColor();
              // animate(event);
              // init(event)
              // draw(event.clientX, event.clientY, currentColor)

            }}
            // onMouseMove={(event) => {
            //   draw(event.clientX, event.clientY, currentColor)
            // }}
        /> : '' }
        </>
  );
}

export default Canvas
