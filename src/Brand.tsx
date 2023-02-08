import {ActionIcon, Box, Group, useMantineColorScheme} from "@mantine/core";
import React from "react";
import {Logo} from "./Logo";
import {MoonStars, Sun } from "tabler-icons-react";

export function Brand() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <Box
            sx={(theme) => ({
                paddingLeft: theme.spacing.xs,
                paddingRight: theme.spacing.xs,
                paddingBottom: theme.spacing.lg,
                borderBottom: `1px solid ${
                    theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
                }`,
            })}
        >
            <Group position="apart">
                <Logo colorScheme={colorScheme} />
                <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                    {colorScheme === 'dark' ? <Sun  /> : <MoonStars/>}
                </ActionIcon>
            </Group>
        </Box>
    );
}