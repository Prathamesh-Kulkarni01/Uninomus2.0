import React, { createContext, useContext, useState } from 'react';

// Create a context
const EventContext = createContext();

// Create a provider component
export function EventProvider({ children }) {
  const [event, setEvent] = useState({});

  // Function to update the event state and accept a callback
  const updateEvent = (callback) => {
    setEvent(callback);
  };

  return (
    <EventContext.Provider value={{ event, updateEvent }}>
      {children}
    </EventContext.Provider>
  );
}

// Custom hook to consume the context
export function useEventContext() {
  return useContext(EventContext);
}