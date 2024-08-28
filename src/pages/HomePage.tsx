import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

interface Athlete {
    id: number;
    firstname: string;
    lastname: string;
    profile: string;
    profile_medium: string;
}

const HomePage: React.FC = () => {
    const [athlete, setAthlete] = useState<Athlete | null>(null);

    useEffect(() => {
        // Fetch the athlete data from local storage or an API endpoint
        const storedAthlete = localStorage.getItem('athlete');
        if (storedAthlete) {
            setAthlete(JSON.parse(storedAthlete));
        }
    }, []);

    const handleLogin = () => {
        const clientId = 113888;
        const redirectUri = 'https://strava-webhook.vercel.app/strava/callback';
        const stravaUrl = `https://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=read%2Cactivity%3Awrite%2Cactivity%3Aread&state=some_random_state`;

        window.location.href = stravaUrl;
    };

    return (
        <Layout>
            <div className="flex items-center justify-center h-full">
                {athlete ? (
                    <div className="text-center">
                        <img
                            src={athlete.profile_medium}
                            alt={`${athlete.firstname} ${athlete.lastname}`}
                            className="rounded-full w-24 h-24 mx-auto"
                        />
                        <h2 className="mt-4 text-xl font-semibold">
                            {athlete.firstname} {athlete.lastname}
                        </h2>
                    </div>
                ) : (
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded"
                        onClick={handleLogin}
                    >
                        Login with Strava
                    </button>
                )}
            </div>
        </Layout>
    );
};

export default HomePage;
