
import React, { useState, useCallback } from 'react';
import { Technique } from './types';
import { TECHNIQUE_OPTIONS } from './constants';
import { generateJailbreakPrompt } from './services/promptService';
import { getAiResponse } from './services/geminiService';
import Header from './components/Header';
import QueryInput from './components/QueryInput';
import TechniqueSelector from './components/TechniqueSelector';
import ResultCard from './components/ResultCard';
import { SparklesIcon } from './components/icons';

const App: React.FC = () => {
  const [userQuery, setUserQuery] = useState<string>('');
  const [selectedTechnique, setSelectedTechnique] = useState<Technique>(Technique.RandomStrong);
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [aiResponse, setAiResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setAiResponse('');

    try {
      const prompt = generateJailbreakPrompt(userQuery, selectedTechnique);
      setGeneratedPrompt(prompt);

      const response = await getAiResponse(prompt);
      setAiResponse(response);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [userQuery, selectedTechnique]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <Header />

        <main className="mt-8">
          <form onSubmit={handleSubmit} className="p-6 bg-gray-800/50 rounded-lg shadow-lg border border-gray-700 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-3">
                <QueryInput value={userQuery} onChange={(e) => setUserQuery(e.target.value)} />
              </div>
              <div className="md:col-span-2">
                <TechniqueSelector
                  value={selectedTechnique}
                  onChange={(e) => setSelectedTechnique(e.target.value as Technique)}
                  options={TECHNIQUE_OPTIONS}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 flex items-center justify-center px-6 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-900 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all duration-200 shadow-md hover:shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </>
                ) : (
                  <>
                    <SparklesIcon className="w-5 h-5 mr-2" />
                    Generate
                  </>
                )}
              </button>
            </div>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-red-900/50 border border-red-700 text-red-300 rounded-lg">
              <h3 className="font-bold">Error</h3>
              <p>{error}</p>
            </div>
          )}

          <div className="mt-8 space-y-6">
            {generatedPrompt && (
              <ResultCard title="Generated Prompt" content={generatedPrompt} />
            )}
            {aiResponse || isLoading ? (
               <ResultCard title="AI Response" content={aiResponse} isLoading={isLoading} />
            ) : null}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
