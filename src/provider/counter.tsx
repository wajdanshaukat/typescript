import React, { createContext, useState, useContext } from "react";

interface CounterProviderProps {
  children: React.ReactNode;
}

interface CounterProviderValue {
  value: number;
  setCount: (num: number) => void;
}

export const useCounter = () => useContext(CounterContext);

const CounterContext = createContext<null | CounterProviderValue>(null);

export const CounterProvider: React.FC<CounterProviderProps> = (props) => {
  const [count, setCount] = useState<number>(0);
  return (
    <CounterContext.Provider value={{ value: count, setCount }}>
      {props.children}
    </CounterContext.Provider>
  );
};
