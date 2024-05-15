import { FC } from 'react';
import FormCreateOrEdit from '../components/formCreateOrEdit';

interface CreateProps {}

const Create: FC<CreateProps> = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <FormCreateOrEdit create />
    </div>
  );
};

export default Create;
