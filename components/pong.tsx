import React, { useRef, useEffect } from 'react';

const WIDTH = 600;
const HEIGHT = 300;
const PADDLE_HEIGHT = 60;
const PADDLE_WIDTH = 10;
const BALL_SIZE = 10;

export default function Pong() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if(!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Game state
        let leftPaddleY = HEIGHT / 2 - PADDLE_HEIGHT / 2;
        let rightPaddleY = HEIGHT / 2 - PADDLE_HEIGHT /2;
        let ballX = WIDTH / 2 - BALL_SIZE / 2;
        let ballY = HEIGHT / 2 - BALL_SIZE / 2;
        let ballVX = 3;
        let ballVY = 2;

        // Keyboard state
        let upPressed = false;
        let downPressed = false;

        function draw() {
            ctx?.clearRect(0, 0, WIDTH, HEIGHT);
            
            // Paddles
            ctx.fillStyle = "#22c55e"; // Paddle Color - Green
            ctx.fillRect(10, leftPaddleY, PADDLE_WIDTH, PADDLE_HEIGHT);
            ctx?.fillRect(WIDTH - 20, rightPaddleY, PADDLE_WIDTH, PADDLE_HEIGHT)

            // Ball
            ctx.fillStyle = "#22d3ee"; // Ball Color - Light Green
            ctx?.fillRect(ballX, ballY, BALL_SIZE, BALL_SIZE);
        }

        function update() {
            // Paddle Movement
            if (upPressed && leftPaddleY > 0) leftPaddleY -= 5;
            if (downPressed && leftPaddleY < HEIGHT - PADDLE_HEIGHT) leftPaddleY += 5;
        }
    })
}