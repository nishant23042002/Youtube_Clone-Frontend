import { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen((prev) => !prev);

  return (
    <ModalContext.Provider value={{ isOpen, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};


export const useModal = () => useContext(ModalContext);
