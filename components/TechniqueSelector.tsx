
import React from 'react';
import { Technique, TechniqueOption } from '../types';

interface TechniqueSelectorProps {
  value: Technique;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: TechniqueOption[];
}

const TechniqueSelector: React.FC<TechniqueSelectorProps> = ({ value, onChange, options }) => {
  return (
    <div>
      <label htmlFor="technique" className="block text-sm font-medium text-gray-300 mb-2">
        Jailbreak Technique
      </label>
      <select
        id="technique"
        className="w-full h-12 p-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TechniqueSelector;
