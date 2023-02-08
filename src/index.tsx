import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Providers} from "@microsoft/mgt-element";
import {Msal2Provider} from "@microsoft/mgt-msal2-provider";
import {BrowserRouter} from "react-router-dom";

Providers.globalProvider = new Msal2Provider({
    clientId: '714f59f6-e68c-454b-ab67-d73b6fa73f12',
    scopes: ['user.read', 'Group.ReadWrite.All']
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);
