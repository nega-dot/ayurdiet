import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  rightElement?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  rightElement,
  className = '',
  ...props
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-[#141711]" htmlFor={props.id}>
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#4B5563]">
            {icon}
          </div>
        )}
        <input
          className={`
            form-input w-full rounded-lg border-[#E0E5DC] bg-white/80 h-12 px-4 
            placeholder:text-[#A0A89C] focus:ring-2 focus:ring-[#7FB069] 
            focus:border-transparent transition duration-200
            ${icon ? 'pl-10' : ''}
            ${rightElement ? 'pr-20' : ''}
            ${error ? 'border-red-500 focus:ring-red-500' : ''}
            ${className}
          `}
          {...props}
        />
        {rightElement && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {rightElement}
          </div>
        )}
      </div>
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};