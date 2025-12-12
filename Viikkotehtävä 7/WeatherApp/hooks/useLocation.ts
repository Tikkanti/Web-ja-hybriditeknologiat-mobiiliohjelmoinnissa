import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'

export function useLocation() {
    const [latitude, setLatitude] = useState<number | null>(null)
    const [longitude, setLongitude] = useState<number | null>(null)

    useEffect(() => {
      getCurrentLocation()
    }, [])
    
    const getCurrentLocation = async (): Promise<void> => {
        try {
            // Request permission to access location 
            const { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                console.log('Permission denied', 'Location permission is required to show your position');
                return;
            }

            // Get current location 
            const currentLocation = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.High,
            });
            setLatitude(currentLocation.coords.latitude);
            setLongitude(currentLocation.coords.longitude);


        } catch (error) {
            console.error(error);
        }
    };

    return {latitude, longitude}
}