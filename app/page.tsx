import Link from 'next/link';
import { getAllCharacters } from './services/getAllCharacters';
import Button from './components/button';
import Characters from './components/characters';

const Home = async () => {
  const characters = await getAllCharacters();
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-4xl font-bold text-center mb-4'>
        Rick and Morty Characters
      </h1>
      <Link href='/create'>
        <Button title='Crear nuevo' btnColor='success' className='mb-4' />
      </Link>
      <Characters characters={characters} />
    </div>
  );
};

export default Home;
