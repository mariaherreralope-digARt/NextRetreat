"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

export default function Hero() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPaused(false);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-2xl md:text-4xl font-extralight mb-6 px-12 text-slate-300text-center max-w-3xl"
        >
          Transformative Luxury Retreats
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-md md:text-xl mb-10 px-12 text-center font-extralight text-slate-400 max-w-3xl"
        >
          Exclusive retreats designed to restore balance, ignite growth, and create unforgettable moments in the world’s most inspiring destinations.
        </motion.p>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: false }}
          className="flex gap-4"
        >
          {/* Mute/Unmute */}
          <button
            onClick={toggleMute}
            className="flex items-center gap-2 px-6 py-2 rounded-lg bg-white/20 hover:bg-white/40 transition"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            {isMuted ? "Unmute" : "Mute"}
          </button>

          {/* Play/Pause */}
          <button
            onClick={togglePlayPause}
            className="flex items-center gap-2 px-6 py-2 rounded-lg bg-white/20 hover:bg-white/40 transition"
          >
            {isPaused ? <Play size={20} /> : <Pause size={20} />}
            {isPaused ? "Play" : "Pause"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
