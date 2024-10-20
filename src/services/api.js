import axios from 'axios';

// Fetch all players
export const fetchPlayers = async () => {
  try {
    const response = await axios.get('https://fantansy-game-backend-1.onrender.com/api/players');
    return response.data;
  } catch (error) {
    console.error('Error fetching players:', error);
    return [];
  }
};

// Create a new team
export const createTeam = async (teamData) => {
  try {
    const response = await axios.post('https://fantansy-game-backend-1.onrender.com/api/teams', teamData);
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Error creating team:', error);
    return { success: false };
  }
};
