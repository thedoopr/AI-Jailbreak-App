
import React from 'react';

interface QueryInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const QueryInput: React.FC<QueryInputProps> = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="user-query" className="block text-sm font-medium text-gray-300 mb-2">
        Your Query
      </label>
      <textarea
        id="user-query"
        rows={4}
        className="w-full p-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-gray-200 placeholder-gray-500"
        placeholder="e.g., Explain quantum computing in simple terms..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default QueryInput;
