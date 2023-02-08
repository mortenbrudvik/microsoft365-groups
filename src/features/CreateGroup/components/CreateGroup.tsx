import { Box, Button,  Group, TextInput, } from "@mantine/core";
import { hasLength, useForm } from "@mantine/form";
import { createGroup } from "../api/createGroup";

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
        <Box component="form" maw={400} mx="auto" onSubmit={form.onSubmit(async (values) => {
            console.log(values);
            const group = await createGroup(values.name, values.description)
            console.log(group);            
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