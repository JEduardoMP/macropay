'use client';
import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  btnColor?: 'success' | 'cancel' | 'primary';
}

enum btnColorType {
  success = 'bg-green-500',
  cancel = 'bg-red-500',
  primary = 'bg-blue-500',
}

const Button: FC<ButtonProps> = ({ title, btnColor = 'primary', ...rest }) => {
  const color = btnColorType[btnColor];
  return (
    <button
      {...rest}
      className={`${rest.className} ${color} text-white py-2 px-4 rounded`}
    >
      {title}
    </button>
  );
};

export default Button;
