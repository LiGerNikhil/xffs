import React from 'react';
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';

interface FloatingInputProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  pattern?: {
    value: RegExp;
    message: string;
  };
}

const FloatingInput: React.FC<FloatingInputProps> = ({
  id,
  label,
  type = 'text',
  required = false,
  register,
  errors,
  pattern,
}) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        className={`
          peer h-14 w-full border-2 rounded-md px-4 pt-6 pb-2 
          focus:outline-none focus:ring-2 focus:ring-purple-pain focus:ring-opacity-50
          ${errors[id] ? 'border-red-500' : 'border-gray-300'}
        `}
        placeholder=" "
        {...register(id, {
          required: required ? `${label} is required` : false,
          pattern: pattern,
        })}
      />
      <label
        htmlFor={id}
        className={`
          absolute text-sm left-4 top-2 transition-all duration-300
          peer-placeholder-shown:text-base peer-placeholder-shown:top-4
          peer-focus:text-sm peer-focus:top-2
          ${errors[id] ? 'text-red-500' : 'text-gray-600'}
        `}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {errors[id] && (
        <p className="mt-1 text-sm text-red-500">
          {errors[id]?.message as string}
        </p>
      )}
    </div>
  );
};

export default FloatingInput;