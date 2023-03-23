import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
        <Auth0Provider
            domain="dev-8uou6hewaq4fh5wd.us.auth0.com"
            clientId="BsqEP3ILEYUVDxNEtEvRkLrW3aBuBDPA"
            authorizationParams={{
            redirect_uri: window.location.origin
            }}
        >
            <App />
        </Auth0Provider>
        </BrowserRouter>
    </React.StrictMode>,
)
