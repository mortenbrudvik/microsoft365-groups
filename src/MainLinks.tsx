import React from 'react';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import {Plus} from 'tabler-icons-react';
import {Link} from "react-router-dom";

interface MainLinkProps {
    icon: React.ReactNode;
    color: string;
    label: string;
    page?: string;
}

function MainLink({ icon, color, label, page }: MainLinkProps) {
    return (<Link to={"/" + page} style={{textDecoration: 'none'}}>
            <UnstyledButton
                sx={(theme) => ({
                    display: 'block',
                    width: '100%',
                    padding: theme.spacing.xs,
                    borderRadius: theme.radius.sm,
                    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

                    '&:hover': {
                        backgroundColor:
                            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                    },
                })}
            >
                <Group>
                    <ThemeIcon color={color} variant="light">
                        {icon}
                    </ThemeIcon>

                    <Text size="sm">{label}</Text>
                </Group>
            </UnstyledButton></Link>
    );
}

const data = [
    { icon: <Plus size={16}  />, color: 'blue', label: 'Create group', page: 'create-group' },
    // { icon: <AlertCircle size={16} />, color: 'teal', label: 'Open Issues' },
    // { icon: <Messages size={16} />, color: 'violet', label: 'Discussions' },
    // { icon: <Database size={16} />, color: 'grape', label: 'Databases' },
];

export function MainLinks() {
    const links = data.map((link) => <MainLink {...link} key={link.label} />);
    return <div>{links}</div>;
}