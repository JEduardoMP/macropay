'use client';
import { FC, useState } from 'react';
import { INPUTS } from '../constants/inputs';
import Button from './button';
import Inputs from './inputs';
import { useParams, useRouter } from 'next/navigation';
import { updateCharacter } from '../services/updateCharacter';
import { createCharacter } from '../services/createCharacter';
import Image from 'next/image';

interface FormCreateOrEditProps {
  create?: boolean;
  character?: Record<any, any>;
}

const FormCreateOrEdit: FC<FormCreateOrEditProps> = ({ character, create }) => {
  const [data, setData] = useState<Record<any, any>>({});
  const router = useRouter();
  const { id } = useParams();

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!create) {
      await updateCharacter(id as unknown as number, data);
    } else {
      await createCharacter(data);
    }
    router.push('/');
    router.refresh();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setData((prev) => ({
          ...prev,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleForm} className='flex flex-col gap-4'>
      <img
        src={data.image ?? character?.image}
        alt={data.name}
        className='w-32 h-32 mx-auto'
      />
      <Inputs
        label='Imagen'
        name='image'
        type='file'
        accept='image/*'
        value={data.image}
        onChange={handleImage}
      />
      {INPUTS.map((input) => (
        <Inputs
          key={input.name}
          label={input.title}
          name={input.name}
          type='text'
          value={character?.[input.name]}
          onChange={handleChange}
          required={input.name !== 'type'}
        />
      ))}
      <div className='flex gap-4 justify-center'>
        <Button title='Regresar' onClick={() => router.push('/')} />
        <Button
          title={!create ? 'Actualizar' : 'Crear'}
          type='submit'
          btnColor='success'
        />
      </div>
    </form>
  );
};

export default FormCreateOrEdit;
