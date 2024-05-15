import { FC } from 'react';
import { getCharacter } from '../services/getCharacter';
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
        <FormCreateOrEdit character={character} />
      </div>
    </div>
  );
};

export default CharacterDetail;
