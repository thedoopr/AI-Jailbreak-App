
import React, { useState, useCallback } from 'react';
import { CopyIcon } from './icons';
import LoadingSpinner from './LoadingSpinner';

interface ResultCardProps {
  title: string;
  content: string;
  isLoading?: boolean;
}

const ResultCard: React.FC<ResultCardProps> = ({ title, content, isLoading = false }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [content]);

  return (
    <div className="bg-gray-800/60 rounded-lg shadow-lg border border-gray-700 backdrop-blur-sm overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <h2 className="text-lg font-bold text-gray-200">{title}</h2>
        <button
          onClick={handleCopy}
          disabled={!content || isLoading}
          className="px-3 py-1.5 text-sm font-semibold text-gray-300 bg-gray-700/50 hover:bg-gray-600/50 rounded-md transition-all flex items-center disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <CopyIcon className="w-4 h-4 mr-2" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="p-4">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center min-h-[120px] text-gray-400">
             <LoadingSpinner />
             <p className="mt-2 text-sm">Waiting for AI response...</p>
          </div>
        ) : (
          <pre className="whitespace-pre-wrap break-words font-mono text-sm text-gray-300">
            <code>{content || '...'}</code>
          </pre>
        )}
      </div>
    </div>
  );
};

export default ResultCard;
