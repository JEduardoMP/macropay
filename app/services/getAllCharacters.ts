import axios from 'axios';

export const getAllCharacters = async () => {
  try {
    const res = await axios.get('http://localhost:3001/results', {
      headers: {
        'Cache-Control': 'no-cache'
      }
    });
    const characters = res.data;
    return characters;
  } catch (error) {
    console.log({ error });
  }
};
