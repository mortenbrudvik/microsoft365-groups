import { Affix, Button, Card, Group, Image, Paper, Stack, Text, TextInput } from '@mantine/core';
import { useEffect, useState } from "react";
import { useForm } from "@mantine/form";

export const Jokes = () => {
    const [image, setImage] = useState('https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80');
    const topic = 'film'; // change this to any topic you want
    const [joke, setJoke] = useState<any>(null);

    useEffect(() => {
        fetch(`https://source.unsplash.com/random/800x600?${topic}`)
            .then((response) => setImage(response.url))
            .catch((error) => console.error(error));
    }, [topic]);

    useEffect(() => {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then((response) => response.json())
            .then((data) => {
                setJoke(data);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
            <Card
                shadow="sm"
                p="xl"
                component="a"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank">
                <Card.Section>
                    <Image
                        src={image}
                        height={160}
                        alt="No way!"
                    />
                </Card.Section>

                <Text weight={350} size="lg" mt="md">
                    {joke && joke.setup}
                </Text>

                <Text weight={450} size="lg" mt="md">
                    {joke && joke.punchline}
                </Text>
            </Card>
            <Affix position={{top: 50, right: 50}}>


                <Paper shadow="xs" p="md" w={400} >
                    <Stack >
                        <TextInput
                            size="lg"
                            label="Setup"
                            value={joke && joke.setup}
                        />
                        <TextInput
                            size="lg"
                            label="Punchline"
                            value={joke && joke.punchline}
                        />
                        
                    </Stack>
                </Paper>
            </Affix>
        </>
    );
};