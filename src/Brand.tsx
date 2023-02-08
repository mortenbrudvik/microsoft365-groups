import {Box, Group, Title} from "@mantine/core";
import React from "react";

export function Brand() {
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
                <Title order={4}>Microsoft 365 Groups</Title>
            </Group>
        </Box>
    );
}