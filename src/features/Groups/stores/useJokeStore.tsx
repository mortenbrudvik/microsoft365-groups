import { create } from "zustand";
import { immer } from 'zustand/middleware/immer'
import {Joke} from "../types/Joke";
import {IDynamicPerson} from "@microsoft/mgt-components";

export interface JokeStore {
    jokes: Joke[];
    selectedJoke: Joke | undefined;
    addJoke: (joke: Joke) => void;
    shareWith: (joke: Joke, persons: IDynamicPerson[]) => void;
    setSelected: (joke: Joke|undefined) => void;
}

export const useJokeStore = create(immer<JokeStore>((set, get) => ({
    jokes: [],
    selectedJoke: undefined,
    addJoke: (joke: Joke) => set((state) => {
        state.jokes.push(joke);
    }),
    shareWith: (joke: Joke, persons: IDynamicPerson[]) => set((state) => {
        const updatedJoke = state.jokes.find(j => j.id === joke.id)!;
        updatedJoke.sharedWith = persons;
    }),
    setSelected: (joke: Joke|undefined) => set((state) => {
        state.selectedJoke = joke;
    }),
})));