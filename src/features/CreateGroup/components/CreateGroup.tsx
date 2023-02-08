import { Box, Button, Container, Group, TextInput, Title } from "@mantine/core";
import { hasLength, useForm } from "@mantine/form";

export const CreateGroup = () => {
    const form = useForm({
        initialValues: {
            name: "",
            description: "",
        },
        validate: {
            name: hasLength({min: 3, max: 100}, "Name must be at least 3 characters long"),
        },
    });


    return (
        <Box component="form" maw={400} mx="auto" onSubmit={form.onSubmit(() => {
        })}>
            <TextInput label="Name"  withAsterisk {...form.getInputProps('name')} />
            <TextInput 
                label="Description"
                withAsterisk
                mt="md"
            />

            <Group position="right" mt="md">
                <Button type="submit">Submit</Button>
            </Group>
        </Box>
    );
};