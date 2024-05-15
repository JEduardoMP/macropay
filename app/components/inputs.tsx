'use client';
import React, { FC, InputHTMLAttributes, useState } from 'react';

interface IInputs extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Inputs: FC<IInputs> = ({ label, ...inputProps }) => {
  const [value, setValue] = useState(inputProps?.value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    inputProps?.onChange?.(e);
  };
  return (
    <label className='flex flex-col items-start'>
      {label}:
      <input
        {...inputProps}
        value={value}
        onChange={handleChange}
        className={`${inputProps.className} w-full p-1 text-black`}
      />
    </label>
  );
};

export default Inputs;
