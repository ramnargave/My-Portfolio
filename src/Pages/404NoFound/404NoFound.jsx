import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, RefreshCw, Trophy, Play } from "lucide-react";

export default function NotFoundGame() {
  const canvasRef = useRef(null);
  const [gameStatus, setGameStatus] = useState("start"); // start, playing, gameover
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Game Configuration
  const SHIP_SIZE = 30;
  const BULLET_SPEED = 7;
  const ENEMY_SPEED = 2;
  const SPAWN_RATE = 60; // Frames between spawns

  // Game Loop Refs (to avoid re-renders)
  const gameState = useRef({
    playerX: 0,
    bullets: [],
    enemies: [],
    particles: [],
    frame: 0,
    gameLoopId: null,
  });

  // ------------------- GAME ENGINE -------------------
  const startGame = () => {
    setGameStatus("playing");
    setScore(0);
    const canvas = canvasRef.current;
    gameState.current = {
      playerX: canvas.width / 2,
      bullets: [],
      enemies: [],
      particles: [],
      frame: 0,
      gameLoopId: requestAnimationFrame(loop),
    };
  };

  const stopGame = () => {
    cancelAnimationFrame(gameState.current.gameLoopId);
    setGameStatus("gameover");
    if (score > highScore) setHighScore(score);
  };

  const spawnEnemy = (width) => {
    const textOptions = ["404", "ERROR", "BUG", "NULL"];
    const text = textOptions[Math.floor(Math.random() * textOptions.length)];
    gameState.current.enemies.push({
      x: Math.random() * (width - 50) + 25,
      y: -40,
      width: 40,
      height: 20,
      text: text,
      hp: 1
    });
  };

  const createExplosion = (x, y, color) => {
    for (let i = 0; i < 8; i++) {
      gameState.current.particles.push({
        x, y,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        life: 1.0,
        color: color
      });
    }
  };

  const loop = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const state = gameState.current;

    // Clear Screen
    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Starfield Background Effect
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    for(let i=0; i<10; i++) {
        const sx = Math.random() * canvas.width;
        const sy = Math.random() * canvas.height;
        ctx.fillRect(sx, sy, 1, 1);
    }

    // Update Player Position (Mouse/Touch Follow)
    // Drawn as a Neon Triangle
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#00f0ff";
    ctx.fillStyle = "#00f0ff";
    ctx.beginPath();
    ctx.moveTo(state.playerX, canvas.height - 50);
    ctx.lineTo(state.playerX - 15, canvas.height - 20);
    ctx.lineTo(state.playerX + 15, canvas.height - 20);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Auto Fire Bullets
    if (state.frame % 15 === 0) {
      state.bullets.push({ x: state.playerX, y: canvas.height - 50 });
    }

    // Update & Draw Bullets
    ctx.fillStyle = "#ff0055";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#ff0055";
    state.bullets.forEach((b, i) => {
      b.y -= BULLET_SPEED;
      ctx.fillRect(b.x - 2, b.y, 4, 10);
      if (b.y < 0) state.bullets.splice(i, 1); // Remove off-screen
    });
    ctx.shadowBlur = 0;

    // Spawn Enemies
    if (state.frame % SPAWN_RATE === 0) {
      spawnEnemy(canvas.width);
    }

    // Update & Draw Enemies
    ctx.font = "bold 20px monospace";
    ctx.textAlign = "center";
    state.enemies.forEach((enemy, i) => {
      enemy.y += ENEMY_SPEED;
      
      // Draw Enemy Text
      ctx.fillStyle = "#ffffff";
      if (enemy.text === "404") ctx.fillStyle = "#ffaa00";
      if (enemy.text === "BUG") ctx.fillStyle = "#ff4444";
      ctx.fillText(enemy.text, enemy.x, enemy.y);

      // Collision: Enemy hits Player
      if (enemy.y > canvas.height - 40 && Math.abs(enemy.x - state.playerX) < 30) {
        stopGame();
      }
      // Remove off-screen
      if (enemy.y > canvas.height) state.enemies.splice(i, 1);
    });

    // Collision: Bullet hits Enemy
    state.bullets.forEach((bullet, bi) => {
      state.enemies.forEach((enemy, ei) => {
        if (
          bullet.x > enemy.x - 20 &&
          bullet.x < enemy.x + 20 &&
          bullet.y > enemy.y - 20 &&
          bullet.y < enemy.y
        ) {
          // Hit!
          createExplosion(enemy.x, enemy.y, "#ffaa00");
          state.enemies.splice(ei, 1);
          state.bullets.splice(bi, 1);
          setScore(prev => prev + 100);
        }
      });
    });

    // Update & Draw Particles
    state.particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 0.05;
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, 3, 3);
      if (p.life <= 0) state.particles.splice(i, 1);
    });
    ctx.globalAlpha = 1;

    state.frame++;
    if (gameStatus !== "gameover") {
      gameState.current.gameLoopId = requestAnimationFrame(loop);
    }
  };

  // Handle Input
  const handleMouseMove = (e) => {
    if (gameStatus !== "playing") return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    gameState.current.playerX = e.clientX - rect.left;
  };
  
  const handleTouchMove = (e) => {
    if (gameStatus !== "playing") return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    gameState.current.playerX = e.touches[0].clientX - rect.left;
  };

  // Setup Canvas Size
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = Math.min(window.innerWidth - 32, 600);
    canvas.height = 500;
  }, []);

  return (
    <section className="min-h-screen bg-[#020202] flex items-center justify-center p-4 font-sans text-white relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#000000_100%)] z-0" />
      
      <div className="relative z-10 w-full max-w-2xl">
        
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
            404
          </h1>
          <p className="text-gray-400">Page Lost in Space. Defend the server!</p>
        </div>

        {/* Game Container */}
        <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(0,240,255,0.15)] bg-black">
          
          {/* Canvas */}
          <canvas
            ref={canvasRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="block mx-auto cursor-none touch-none w-full"
            style={{ maxWidth: "600px", height: "500px" }}
          />

          {/* HUD (Score) */}
          {gameStatus === "playing" && (
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 font-mono text-xl text-yellow-400">
              Score: {score}
            </div>
          )}

          {/* START SCREEN OVERLAY */}
          {gameStatus === "start" && (
            <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-center p-6">
               <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
                 <Play size={40} className="text-blue-400 ml-1" />
               </div>
               <h2 className="text-3xl font-bold text-white mb-2">Ready to Defend?</h2>
               <p className="text-gray-400 mb-8 max-w-xs">Move your mouse to control the ship. Destroy the bugs and 404 errors!</p>
               <button 
                 onClick={startGame}
                 className="px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform"
               >
                 Start Game
               </button>
            </div>
          )}

          {/* GAME OVER OVERLAY */}
          {gameStatus === "gameover" && (
            <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center text-center p-6">
               <Trophy size={48} className="text-yellow-500 mb-4" />
               <h2 className="text-4xl font-bold text-white mb-2">Mission Failed!</h2>
               <p className="text-gray-400 mb-6">The 404 errors took over.</p>
               
               <div className="flex gap-8 mb-8">
                 <div className="text-center">
                   <p className="text-xs text-gray-500 uppercase tracking-widest">Score</p>
                   <p className="text-3xl font-mono font-bold">{score}</p>
                 </div>
                 <div className="text-center">
                   <p className="text-xs text-gray-500 uppercase tracking-widest">Best</p>
                   <p className="text-3xl font-mono font-bold text-yellow-500">{highScore}</p>
                 </div>
               </div>

               <div className="flex gap-4">
                 <button 
                   onClick={startGame}
                   className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors"
                 >
                   <RefreshCw size={18} /> Retry
                 </button>
                 <a 
                   href="/"
                   className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors"
                 >
                   <ArrowLeft size={18} /> Go Home
                 </a>
               </div>
            </div>
          )}
          
        </div>

        {/* Instructions */}
        <div className="mt-6 text-center text-xs text-gray-500 font-mono">
           Desktop: Mouse to Move • Mobile: Touch & Drag
        </div>

      </div>
    </section>
  );
}