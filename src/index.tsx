import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Providers} from "@microsoft/mgt-element";
import {Msal2Provider} from "@microsoft/mgt-msal2-provider";
import {BrowserRouter} from "react-router-dom";

Providers.globalProvider = new Msal2Provider({
    clientId: '714f59f6-e68c-454b-ab67-d73b6fa73f12',
    scopes: ['Group.Read.All', 'Group.ReadWrite.All', 'GroupMember.Read.All',
        'Mail.ReadBasic','offline_access', 'openid', 'People.Read', 'People.Read.All', 
        'Presence.Read', 'Presence.Read.All', 'profile',
        'Sites.Read.All', 'user.read', 'User.ReadBasic.All', 'User.Read.All']
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
