import { useState, useEffect } from 'react';
import { createAuth0Client, Auth0Client, Auth0ClientOptions, RedirectLoginOptions, LogoutOptions } from '@auth0/auth0-spa-js';


const domain = "dev-o3rvpuckrzppjo1z.us.auth0.com";
const clientId = "Rb7zHCnqS59dBKuPyNvN0pz2or37yH3x";
const redirectUri = "http://localhost:3000/callback";

const auth0ClientOptions: Auth0ClientOptions = {
    domain,
    client_id: clientId, 
};

export const useAuth = () => {
    const [auth0Client, setAuth0Client] = useState<Auth0Client | null>(null);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const initAuth0Client = async () => {
            try {
                const client = await createAuth0Client(auth0ClientOptions);
                setAuth0Client(client);

             
                const user = await client.getUser();
                setUser(user);
            } catch (error) {
                console.error('Auth0 client initialization failed', error);
            }
        };

        initAuth0Client();
    }, []);

    const login = async () => {
        if (auth0Client) {
            const options: RedirectLoginOptions = { redirectUri };
            await auth0Client.loginWithRedirect(options);
        }
    };

    const register = async () => {
        if (auth0Client) {
            const options: RedirectLoginOptions = { redirectUri, screenHint: 'signup' };
            await auth0Client.loginWithRedirect(options);
        }
    };

    const logout = () => {
        if (auth0Client) {
            const options: LogoutOptions = { returnTo: window.location.origin };
            auth0Client.logout(options);
            setUser(null);
        }
    };

    const resetPassword = async (email: string) => {
        if (auth0Client) {
         
        }
    };

    return {
        user,
        login,
        register,
        logout,
        resetPassword,
    };
};