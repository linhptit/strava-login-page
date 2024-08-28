import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CallbackPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleStravaCallback = async () => {
            const queryParams = new URLSearchParams(location.search);
            const code = queryParams.get('code');

            if (code) {
                try {
                    // Call the Strava callback endpoint
                    const response = await fetch(`https://strava-webhook.vercel.app/strava/callback?code=${code}`);

                    if (response.ok) {
                        const data = await response.json();

                        // Store the athlete object in AsyncStorage
                        await AsyncStorage.setItem('athlete', JSON.stringify(data.athlete));

                        // Navigate to the homepage
                        navigate('/');
                    } else {
                        console.error('Failed to fetch athlete data from Strava callback');
                    }
                } catch (error) {
                    console.error('Error occurred during the Strava callback process:', error);
                }
            } else {
                console.error('No authorization code found.');
            }
        };

        handleStravaCallback();
    }, [location, navigate]);

    return (
        <Layout>
            <div className="flex items-center justify-center h-full">
                <p className="text-center">Processing your login...</p>
            </div>
        </Layout>
    );
};

export default CallbackPage;
