import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodLog = () => {
    const [foodLogs, setFoodLogs] = useState([]);

    useEffect(() => {
        // Replace with your actual API URL
        axios.get('http://localhost:8000/api/food-log/')
            .then(response => {
                setFoodLogs(response.data); // Set the response data in state
            })
            .catch(error => console.error('Error fetching data:', error)); // Handle errors
    }, []); // Empty array means this runs once when the component mounts

    return (
        <div>
            <h1>Food Log</h1>
            <ul>
                {foodLogs.map(log => (
                    <li key={log.id}>{log.name}</li> // Adjust according to your data structure
                ))}
            </ul>
        </div>
    );
}

export default FoodLog;
