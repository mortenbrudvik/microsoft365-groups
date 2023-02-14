import {Joke} from "../types/Joke";

export const createJoke = async (topic:string) => {
    const joke: Joke = {
        id: createGuid(),
        sharedWith: []
    };

    await fetch('https://official-joke-api.appspot.com/random_joke')
        .then((response) => response.json())
        .then((data) => {
            joke.setup = data.setup;
            joke.punchline = data.punchline;
        })
        .catch((error) => console.error(error));

    await fetch(`https://source.unsplash.com/random/800x600?${topic}`)
        .then((response) => {
            joke.image = response.url;
        })
        .catch((error) => console.error(error));

    return joke;
};


const createGuid = ():string => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};
