import '../App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useEffect, useRef} from 'react';

function Canvas() {
  const canvasRef = useRef(null)
  // const canvas = canvasRef.current
  // const context = canvas.getContext('2d')

  const draw = ctx => {
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 2, 40, 2*Math.PI)
    ctx.fill()
  }

  useEffect(() => {
    const canvas = document.getElementById('canva');
    const context = canvas.getContext('2d')
    //Our first draw
    context.fillStyle = '#000000'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    console.log('context', context);
  }, [draw])

  return (
      <div className="canvas">
        <p>Kanva</p>
      </div>
  );
}

export default Canvas;
