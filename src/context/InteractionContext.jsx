import { createContext, useState } from "react";

export const InteractionContext = createContext();

const InteractionProvider = ({ children }) => {
    
  const [interactions, setInteractions] = useState([]);

  const addInteraction = (friendId, type) => {
    const newInteraction = {
      id: Date.now(),
      friendId,
      type,
      note: `${type} interaction`,
      date: new Date().toISOString(),
    };

    setInteractions((prev) => [newInteraction, ...prev]);
  };

  return (
    <InteractionContext.Provider value={{ interactions, addInteraction }}>
      {children}
    </InteractionContext.Provider>
  );
};

export default InteractionProvider;