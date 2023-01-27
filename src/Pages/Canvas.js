import React, {useRef, useEffect, useState} from 'react';
import {Particles} from '../Components/Particles';
import debounce from 'lodash.debounce';

const Canvas = props => {
  const [currentColor, setCurrentColor] = useState('red');
  const [ready, setReady] = useState(false);
  const [wind, setWind] = useState(false);
  const [hsl, setHsl] = useState(10);
  const [ctx, setCtx] = useState(null);
  const colors = ['red', 'green', 'blue', 'yellow', 'magenta'];
  const canvasRef = useRef();

  let particleArray = []

  useEffect(() => {
    let c = document.getElementById("myCanvas");
    let ctxTemp = c.getContext("2d");

    setCtx(ctxTemp)
  }, [canvasRef]);

  function draw(event, extraSize) {
    if (ctx === null) {return null}
    for (let i=0; i< 10; i++) {
      particleArray.push(new Particles(ctx, event.clientX, event.clientY, currentColor, hsl, extraSize, 0))
    }

    requestAnimationFrame(animate)
  }

  const animate = () => {
    if (ctx === null) {return null}
    // ctx.clearRect(0, 0, 1000, 1000)
    ctx.fillStyle = 'rgba(0,0,0,0.03)';
    ctx.fillRect(0,0,1000, 1000)
    handleParticles()

    if (particleArray.length > 5) {
      setHsl(hsl+1)
      requestAnimationFrame(animate)
    }
  }

  const handleParticles = () => {
    if (particleArray.length === 0) {
      return null
    }
    let lifetime = 3;
    for (let i=0; i< particleArray.length; i++) {
      // handleParticles(particleArray[i])
      particleArray[i].update();
      particleArray[i].draw();

      if (particleArray[i].size < 0.2) {
        // console.log(particleArray[i]);
        if (particleArray[i].lifetime > 0) {
          for (let i=0; i< 10; i++) {
            particleArray.push(new Particles(
                ctx,
                particleArray[i].x,
                particleArray[i].y,
                currentColor,
                hsl,
                true,
                particleArray[i].lifetime - 1
            ))
          }
        }


        particleArray.splice(i, 1);
        i--;
      }
    }
  }

  const changeColor = () => {
    const randNr = Math.floor(Math.random()  * (colors.length - 0) + 0);
    setCurrentColor(colors[randNr])
    return colors[randNr];
  }

  window.addEventListener('keydown', (event) => {
    // console.log('stuff..', event.key);
    // setWind(true);
    debounce(() => {
      console.log('KEY STUFF');
    }, 400)

  },false);

  animate()

  return (
      <div >
        <canvas

            id="myCanvas"
            width="1000"
            height="1000"
            style={{ border: "1px solid #d3d3d3" }}
            onKeyPress={(event) => {
              console.log(event);
            }}
            onMouseMove={(event) => draw(event, null)}
            onClick={(event) => {
              changeColor()
              draw(event, 'big')
              for (let i=0; i< 100; i++) {
                particleArray.push(new Particles(ctx, event.clientX, event.clientY, currentColor, hsl, 'big', 1))
              }
              requestAnimationFrame(animate)
            }}
        >
          Your browser does not support the HTML canvas tag.
        </canvas>
        <p style={{backgroundColor: "hsl(" + hsl + ", 100%, 50%)", width: "100%"}}>Color</p>
        <p>Wind? {wind}</p>
      </div>
  );
}

export default Canvas
