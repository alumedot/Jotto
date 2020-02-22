export interface IGuessedWords {
    guessedWord: string;
    letterMatchCount: number;
}

export interface IProps {
    // secretWord: string;
    // success: boolean;
    guessedWords: IGuessedWords[];
}
