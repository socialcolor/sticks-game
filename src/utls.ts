import { Players } from './types/state';
type randomizierPlayersType = {
    playerOne: string;
    playerTwo: string;
}
export const randomizierPlayers = ():randomizierPlayersType => {
    const players = [Players.player, Players.computer]
    const randomIndex = Math.floor(Math.random() * players.length)
    const playerOne = players[randomIndex];

    const playerTwo = players.filter(player => player !== playerOne)[0];

    return {
        playerOne,
        playerTwo,
    }
}

