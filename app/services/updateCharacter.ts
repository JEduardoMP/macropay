import axios from 'axios';

export const updateCharacter = async (id: number, body: any) => {
  try {
    const res = await axios.patch(`http://localhost:3001/results/${id}`, body);
    const response = res.data;
    return response;
  } catch (error) {
    console.log({ error });
  }
};
