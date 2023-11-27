import axios from 'axios';

export const getCharacter = async (id: number) => {
  try {
    const res = await axios.get(`http://localhost:3001/results/${id}`);
    const characters = res.data;
    return characters;
  } catch (error) {
    console.log({ error });
  }
};
