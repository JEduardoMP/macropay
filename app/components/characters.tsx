'use client';
import Link from 'next/link';
import { FC } from 'react';
import { deleteCharacter } from '../services/deleteCharacter';
import Button from './button';
import { useRouter } from 'next/navigation';

interface CharactersProps {
  characters: any[];
}

const Characters: FC<CharactersProps> = ({ characters }) => {
  const router = useRouter();
  const handleClick = async (id: number) => {
    await deleteCharacter(id);
    router.refresh();
  };
  return (
    <div className='grid grid-cols-3 gap-4'>
      {characters.map((character: any) => (
        <div key={character.id} className='border p-4 rounded'>
          <div className='max-w-3/12 max-h-3/12'>
            <img className='mb-2 w-full h-full' src={character.image} alt={character.name} />
            <p className='font-bold'>{character.name}</p>
            <p>{character.description}</p>
          </div>
          <Link href={`${character.id}`} className='mr-2'>
            <Button title='Editar' />
          </Link>
          <Button
            title='Eliminar'
            btnColor='cancel'
            onClick={() => handleClick(character.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Characters;
