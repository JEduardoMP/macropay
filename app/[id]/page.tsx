import { FC } from 'react';
import { getCharacter } from '../services/getCharacter';
import { INPUTS } from '../constants/inputs';
import Inputs from '../components/inputs';
import Button from '../components/button';
import { redirect } from 'next/navigation';
import FormCreateOrEdit from '../components/formCreateOrEdit';

interface ICharacterDetail {
  params: {
    id: number;
  };
}

const CharacterDetail: FC<ICharacterDetail> = async ({ params }) => {
  const character = await getCharacter(params.id);

  if (!character) return <p>Loading...</p>;

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='text-center'>
        <img className='mb-4' src={character.image} alt={character.name} />
        <FormCreateOrEdit character={character} />
      </div>
    </div>
  );
};

export default CharacterDetail;
