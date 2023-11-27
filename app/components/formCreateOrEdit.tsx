'use client';

import { FC, useState } from 'react';
import { INPUTS } from '../constants/inputs';
import Button from './button';
import Inputs from './inputs';
import { useParams, useRouter } from 'next/navigation';
import { updateCharacter } from '../services/updateCharacter';
import { createCharacter } from '../services/createCharacter';

interface FormCreateOrEditProps {
  edit?: boolean;
  character?: Record<any, any>;
}

const FormCreateOrEdit: FC<FormCreateOrEditProps> = ({ character, edit }) => {
  const [data, setData] = useState<Record<any, any>>({});
  const router = useRouter();
  const { id } = useParams();

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!edit) {
      await updateCharacter(id as unknown as number, data);
      router.push('/', { shallow: true })
    } else {
      await createCharacter(data);
      router.push('/', { shallow: true })
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleForm} className='flex flex-col gap-4'>
      {INPUTS.map((input) => (
        <Inputs
          key={input.name}
          label={input.title}
          name={input.name}
          type='text'
          value={character?.[input.name]}
          onChange={handleChange}
        />
      ))}
      <div className='flex gap-4 justify-center'>
        <Button title='Regresar' onClick={() => router.push('/')} />
        <Button
          title={!edit ? 'Actualizar' : 'Crear'}
          type='submit'
          btnColor='success'
        />
      </div>
    </form>
  );
};

export default FormCreateOrEdit;
