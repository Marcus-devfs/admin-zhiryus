import { useAppContext } from '@/context/AppContext';
import React, { useState, useEffect } from 'react';
import { Button } from '../button/Button';

export const EssayWriting: React.FC = () => {
    const [essayContent, setEssayContent] = useState<string>('');
    const { timeRemaining, setCurrentStep } = useAppContext();


    return (
        <>
            <div className="w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow container gap-3">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 mb-4">Escreva sua resposta</h1>
                <textarea
                    className="w-full h-64 border border-gray-300 rounded-md p-2 text-slate-800"
                    placeholder="Digite sua redação aqui..."
                    value={essayContent}
                    onPaste={(e) => e.preventDefault()}
                    spellCheck="false"
                    onChange={(e) => setEssayContent(e.target.value)}
                    disabled={timeRemaining <= 0} // Desabilita o textarea quando o tempo acabar
                />
                {/* Botão para enviar */}

                <Button text='Enviar Redação' onClick={() => setCurrentStep(2)} disabled={timeRemaining <= 0} />
            </div>
        </>
    );
};

