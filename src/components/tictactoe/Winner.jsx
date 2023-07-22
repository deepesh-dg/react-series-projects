import React, { useEffect, useMemo } from "react";
import { useTicTacToe } from "../../contexts/tictactoe";

function Winner() {
    const {
        data: { record, completed, winner },
        won,
    } = useTicTacToe();

    const winningStages = useMemo(() => ["123", "369", "789", "147", "159", "357", "258", "456"], []);

    useEffect(() => {
        let winnerFound = null;

        for (let i = 0; i < winningStages.length; i++) {
            if (winnerFound) break;

            const stage = winningStages[i].split("");

            const didXWon = record.x[stage[0]] && record.x[stage[1]] && record.x[stage[2]];

            if (didXWon) {
                won("X");
                return;
            }

            const didOWon = record.o[stage[0]] && record.o[stage[1]] && record.o[stage[2]];

            if (didOWon) {
                won("O");
                return;
            }
        }
    }, [record, winningStages, won]);

    return (
        <div>
            <p>{winner && winner + " WON"}</p>
            <p>{completed && !winner && "Match Tie"}</p>
        </div>
    );
}

export default Winner;
