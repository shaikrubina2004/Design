import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import backgroundVideo from "../assets/backgroundVedio/Background.mp4";
import "./Hero.css";

export default function Hero() {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);

  return (
    <section className="hero-section">
      {/* Background video with subtle zoom-in on load */}
      <motion.video
        className="hero-video-bg"
        src={backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 10, yoyo: Infinity, ease: "easeInOut" }}
      />

      {/* Dimming overlay with gentle fade */}
      <motion.div
        className="video-overlay"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 5, yoyo: Infinity, ease: "easeInOut" }}
      />

      {/* Content overlay */}
      <div className="hero-overlay">
        <div className="hero-typed-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <TypeAnimation
              sequence={[
                "You Dream It.",
                500,
                () => setShowSecondLine(true),
              ]}
              speed={50}
              repeat={0}
              className="hero-typed-line1"
              style={{ caretColor: "transparent" }}
            />
          </motion.div>

          {showSecondLine && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            >
              <TypeAnimation
                sequence={[
                  "We Build It.",
                  500,
                  () => setShowSubtext(true),
                ]}
                speed={50}
                repeat={0}
                className="hero-typed-line2"
                style={{ caretColor: "transparent" }}
              />
            </motion.div>
          )}

          {showSubtext && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
              className="hero-typed-subtext"
            >
              Crafting solutions with passion and precision.
            </motion.div>
          )}

          {showSubtext && (
            <motion.div
              className="cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1.5 }}
            >
              
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
