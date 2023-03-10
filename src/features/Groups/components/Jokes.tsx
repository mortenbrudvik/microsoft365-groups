import { Affix, Button, Card, Image, Paper, Stack, Text, TextInput, ScrollArea } from '@mantine/core';
import { PeoplePicker, People, PersonType } from "@microsoft/mgt-react";
import {useJokeStore} from "../stores/useJokeStore";
import { Joke } from '../types/Joke';
import { createJoke } from '../api/createJoke';
import { useClickOutside, useScrollIntoView } from "@mantine/hooks";

export const Jokes = () => {
    const {targetRef, scrollIntoView} = useScrollIntoView<HTMLDivElement>()
    const jokeStore = useJokeStore();

    // href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    return (
        <>
            <ScrollArea >
                <Stack mb={25}>
                    {jokeStore.jokes.map(joke => (
                        <JokeCard joke={joke}/>
                    ))}
                </Stack>
            </ScrollArea>
                <Button mt={15} onClick={async () => {
                    const joke = await createJoke('nature');
                    jokeStore.addJoke(joke);
                    scrollIntoView();
                }}>
                    Create Joke
                </Button>
                <div ref={targetRef}/>

            { jokeStore.selectedJoke && <JokeSidePanel jokeId={jokeStore.selectedJoke.id} />}
        </>
    );
};

const JokeCard = (props:{joke: Joke}) => {
    const {setSelected, selectedJoke} = useJokeStore();
    const {id, setup, punchline, image, sharedWith} = props.joke;
    
    const isSelected = selectedJoke?.id === id;
    const textColor = isSelected ? "blue" : "black";
    return <Card
        key={id}
        shadow="xl"
        radius="lg"
        withBorder
        m="md"
        p="xl"
        w={400}
        onClick={() => {
            console.log("set selected joke: " + id );
            return setSelected(props.joke);
        }}
    >
        <Card.Section>
            <Image
                src={image}
                height={100}
                alt="No way!"
            />
        </Card.Section>

        <Text color={textColor } 
              size="lg" 
              mt="md">
            {setup}
        </Text>

        <Text
            color={textColor }
            weight={450} size="lg" mt="md">
            {punchline}
        </Text>

        <People people={sharedWith} showPresence/>
    </Card>;
};

const JokeSidePanel = ({jokeId}: { jokeId: string }) => {
    const jokeStore = useJokeStore();
    const ref = useClickOutside(() => jokeStore.setSelected(undefined));

    const joke = jokeStore.jokes.find(j => j.id === jokeId);
    if (!joke) return <div>no joke</div>;
    const {sharedWith, id, punchline, setup} = joke!;
    return <Affix position={{top: 50, right: 50}}>
        <Paper shadow="xs" p="md" w={400} ref={ref}>
            <Stack>
                <TextInput
                    size="lg"
                    label="Joke Setup"
                    value={setup}
                />
                <TextInput
                    size="lg"
                    label="Joke Punchline"
                    value={punchline}
                />
                <Text weight={550} size="lg" mt={0} mb={0} pb={0}>Share with</Text>

                <PeoplePicker
                    selectionMode="multiple"
                    type={PersonType.any}
                    selectedPeople={sharedWith}
                    selectionChanged={(e: any) => {
                        jokeStore.shareWith(joke, e.target.selectedPeople);
                    }}
                />

            </Stack>
        </Paper></Affix>
};
