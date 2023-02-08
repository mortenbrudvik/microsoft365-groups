import React, {useState} from 'react';
import {ColorScheme, ColorSchemeProvider, MantineProvider, Navbar} from "@mantine/core";
import {Brand} from "./Brand";
import {MainLinks} from "./MainLinks";
import {UserLogin} from './UserLogin';
import './App.css';

function App() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
    const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    
    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider withGlobalStyles withNormalizeCSS>
                <Navbar className="main" height={600} p="xs" width={{base: 300}}>
                    <Navbar.Section mt="xs">
                        <Brand/>
                    </Navbar.Section>
                    <Navbar.Section grow mt="md">
                        <MainLinks/>
                    </Navbar.Section>
                    <Navbar.Section>
                        <UserLogin/>
                    </Navbar.Section>
                </Navbar>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default App;
