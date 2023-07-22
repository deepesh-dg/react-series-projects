import { createContext, useContext } from "react";

export const TicTacToeContext = createContext({
    data: { record: { x: {}, o: {} }, currTurn: null, winner: null, completed: false },
    add: (position) => {},
    reset: () => {},
    won: (who) => {},
});

export const useTicTacToe = () => {
    return useContext(TicTacToeContext);
};

export const TicTacToeProvider = TicTacToeContext.Provider;
