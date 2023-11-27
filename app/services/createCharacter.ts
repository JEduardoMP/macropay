import axios from 'axios';

export const createCharacter = async (body: any) => {
  try {
    const res = await axios.post(`http://localhost:3001/results`, body);
    const response = res.data;
    return response;
  } catch (error) {
    console.log({ error });
  }
};
