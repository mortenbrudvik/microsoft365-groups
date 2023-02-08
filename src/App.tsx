import React, {useState} from 'react';
import {ColorScheme, ColorSchemeProvider, MantineProvider, Navbar, Title} from "@mantine/core";
import {Brand} from "./Brand";
import {MainLinks} from "./MainLinks";
import {UserLogin} from './UserLogin';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {CreateGroup} from "./features/CreateGroup";

function App() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
    const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    
    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider withGlobalStyles withNormalizeCSS>
                <div>
                    <Navbar className="aside" p="xs" width={{base: 300}}>
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
                    <div className="content">
                        <Routes>
                            <Route path="/create-group" element={<CreateGroup/>}/>
                        </Routes>
                    </div>
                </div>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default App;
