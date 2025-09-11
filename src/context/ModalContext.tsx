"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of your context
type ModalContextType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

// Create context with undefined initial value for safety check
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Provider component
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook to consume context safely
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
