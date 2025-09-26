"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useModal } from "../context/ModalContext";

const GlobalModal = () => {
  const { isOpen, closeModal } = useModal();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30 }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 200,
              duration: 0.8,
            }}
            className="bg-white dark:bg-darker/50 shadow-xl w-full max-w-md p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-heading text-dark dark:text-light">
                Contact with us
              </h1>
              <button onClick={closeModal} aria-label="Close contact form">
                <FiX className="w-6 h-6 text-gray-00 dark:text-light" />
              </button>
            </div>

            {/* Input Forms */}
            <form
              action="https://formsubmit.co/mariaherreralope@gmail.com"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for reaching out! We will get back to you as soon as possible."
              />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-body font-medium text-darker dark:text-gray-100 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-dark rounded-lg focus:ring-secondary focus:border-darker bg-light dark:bg-slate-700 text-slate-800 dark:text-gray-100"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-secondary focus:border-secondary bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-1"
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  id="message"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-secondary focus:border-secondary bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <motion.button className="w-full px-4 py-2 text-white bg-gradient-to-r from-btt to-primary hover:from-primary hover:to-btt transition-all duration-300 font-body">
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlobalModal;
