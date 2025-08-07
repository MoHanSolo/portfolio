"use client";
import React, { useRef, useEffect } from "react";
import { useState } from "react";

const WIDTH = 600;
const HEIGHT = 300;
const PADDLE_HEIGHT = 60;
const PADDLE_WIDTH = 10;
const BALL_SIZE = 10;

export default function Pong() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(null);
  const [started, setStarted] = useState(false);
  const [leftScore, setLeftScore] = useState(0);
  const [rightScore, setRightScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (!started) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Game state
    let leftPaddleY = HEIGHT / 2 - PADDLE_HEIGHT / 2;
    let rightPaddleY = HEIGHT / 2 - PADDLE_HEIGHT / 2;
    let ballX = WIDTH / 2 - BALL_SIZE / 2;
    let ballY = HEIGHT / 2 - BALL_SIZE / 2;
    let ballVX = 3;
    let ballVY = 2;

    // Keyboard state
    let upPressed = false;
    let downPressed = false;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, WIDTH, HEIGHT);

      // Draw paddles
      ctx.fillStyle = "#22c55e";
      ctx.fillRect(10, leftPaddleY, PADDLE_WIDTH, PADDLE_HEIGHT);
      ctx.fillRect(WIDTH - 20, rightPaddleY, PADDLE_WIDTH, PADDLE_HEIGHT);

      // Draw ball
      ctx.fillStyle = "#22d3ee";
      ctx.fillRect(ballX, ballY, BALL_SIZE, BALL_SIZE);
    }

    function update() {
      // Move paddles
      if (upPressed && leftPaddleY > 0) leftPaddleY -= 5;
      if (downPressed && leftPaddleY < HEIGHT - PADDLE_HEIGHT) leftPaddleY += 5;

      // Simple AI for right paddle
      if (rightPaddleY + PADDLE_HEIGHT / 2 < ballY) rightPaddleY += 3;
      else if (rightPaddleY + PADDLE_HEIGHT / 2 > ballY) rightPaddleY -= 3;

      // Move ball
      ballX += ballVX;
      ballY += ballVY;

      // Ball collision with top/bottom
      if (ballY <= 0 || ballY + BALL_SIZE >= HEIGHT) ballVY *= -1;

      // Ball collision with paddles
      if (
        ballX <= 20 &&
        ballY + BALL_SIZE >= leftPaddleY &&
        ballY <= leftPaddleY + PADDLE_HEIGHT
      ) {
        ballVX *= -1;
        ballX = 20;
      }
      if (
        ballX + BALL_SIZE >= WIDTH - 20 &&
        ballY + BALL_SIZE >= rightPaddleY &&
        ballY <= rightPaddleY + PADDLE_HEIGHT
      ) {
        ballVX *= -1;
        ballX = WIDTH - 20 - BALL_SIZE;
      }

      // Ball out of bounds (handle scoring & reset)
      if (ballX < 0) {
        setRightScore(prev => {
          const newScore = prev + 1;
          if (newScore >= 5) {
            setGameOver(true);
          }
          return newScore;
        });
        ballX = WIDTH / 2 - BALL_SIZE / 2;
        ballY = HEIGHT / 2 - BALL_SIZE / 2;
        ballVX = 3 * (Math.random() > 0.5 ? 1 : -1);
        ballVY = 2 * (Math.random() > 0.5 ? 1 : -1);
      }
      if (ballX > WIDTH) {
        setLeftScore(prev => {
          const newScore = prev + 1;
          if (newScore >= 5) {
            setGameOver(true);
          }
          return newScore;
        });
        ballX = WIDTH / 2 - BALL_SIZE / 2;
        ballY = HEIGHT / 2 - BALL_SIZE / 2;
        ballVX = 3 * (Math.random() > 0.5 ? 1 : -1);
        ballVY = 2 * (Math.random() > 0.5 ? 1 : -1);
      }
    } 

    function loop() {
      if (gameOver) return; 
      
      update();
      draw();
      animationRef.current = requestAnimationFrame(loop);
    }

    // Keyboard events
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowUp") upPressed = true;
      if (e.key === "ArrowDown") downPressed = true;
    }
    function handleKeyUp(e: KeyboardEvent) {
      if (e.key === "ArrowUp") upPressed = false;
      if (e.key === "ArrowDown") downPressed = false;
    }
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    loop();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [started]);

  return (
  <div className="relative flex flex-col justify-center items-center mt-6 sm:mt-25 mb-6 sm:mb-10">
    
    {/* Scoreboard - smaller text on mobile */}
    <div className="mb-4 text-lg sm:text-2xl text-white" 
         style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
      <span>Player: {leftScore}</span>
      <span className="mx-4 sm:mx-8">|</span>
      <span>Computer: {rightScore}</span>
    </div>

    {/* Canvas - responsive sizing */}
    <div className="w-full max-w-full overflow-hidden">
      <canvas
        ref={canvasRef}
        width={600}
        height={300}
        className="bg-black border-2 sm:border-4 border-green-500 rounded-lg w-full max-w-[600px] h-auto"
        style={{ aspectRatio: '2/1' }}
        tabIndex={0}
      />
    </div>
    
    {!started && (
      <button
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-600 text-2xl sm:text-4xl rounded-full w-16 sm:w-24 aspect-square flex items-center justify-center shadow-lg hover:bg-green-700 transition"
        style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}
        onClick={() => setStarted(true)}
      >
        GO!
      </button>
    )}

    {gameOver && (
      <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4">
        <div className="text-center text-white p-4 sm:p-8 max-w-sm">
          <div className="text-2xl sm:text-4xl mb-4" style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}>
            {leftScore >= 5 ? "You Win!" : "Computer Wins!"}
          </div>
          <button 
            className="px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm sm:text-base"
            style={{ fontFamily: 'Bitcount, Arial, Helvetica, sans-serif' }}
            onClick={() => {
              setLeftScore(0);
              setRightScore(0);
              setGameOver(false);
              setStarted(false);
            }}
          >
            Play Again
          </button>
        </div>
      </div>
    )}
  </div>
  )
};