import React from 'react';
import Layout from '../components/Layout';

const HomePage: React.FC = () => {
    const handleLogin = () => {
        const clientId = 113888;
        const redirectUri = 'https://strava-webhook.vercel.app/strava/callback';
        // need to encode the redirectUri
        const stravaUrl = `https://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=read%2Cactivity%3Awrite%2Cactivity%3Aread&state=some_random_state`;

        window.location.href = stravaUrl;
    };

    return (
        <Layout>
            <div className="flex items-center justify-center h-full">
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={handleLogin}
                >
                    Login with Strava
                </button>
            </div>
        </Layout>
    );
};

export default HomePage;
