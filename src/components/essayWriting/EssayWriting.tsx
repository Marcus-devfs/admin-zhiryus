import { useAppContext } from '@/context/AppContext';
import React, { useState, useEffect } from 'react';
import { Button } from '../button/Button';

export const EssayWriting: React.FC = () => {
    const { timeRemaining, setCurrentStep, setAlertData, userData, essayContent, setEssayContent } = useAppContext();

    const charCount = essayContent?.replace(/\s/g, '')?.length;

    const handleSendWriting = async () => {
        if (charCount >= 1000 && charCount <= 5000) {
            try {

                const response = await fetch('/api/sendEssayWriting', {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        essayData: {
                            id_redacao: userData?.id_redacao,
                            redacao: essayContent,
                            dt_realizacao: new Date()
                        }
                    })
                });

                if (!response.ok) {
                    throw new Error('Erro ao confirmar o início da redação');
                }

                const data = await response.json();

                if (data?.success) {
                    setAlertData({
                        active: true,
                        title: 'Redação enviada.',
                        message: 'Sua redação foi enviada com sucesso.',
                        type: 'success'
                    })
                    setCurrentStep(2)
                } else {
                    setAlertData({
                        active: true,
                        title: 'Ocorreu um erro.',
                        message: 'Ocorreu um erro ao enviar sua redação. Tente novamente ou contate o suporte Méliès.',
                        type: 'success'
                    })
                }

            } catch (error) {
                console.log(error)
                return error
            }
        } else {
            setAlertData({
                active: true,
                title: 'Quantidade de caractéres inválido.',
                message: 'Número de caractéres inválido. A redação precisa ter no mínimo 1 mil carácteres, e no máximo 5 mil.',
                type: 'info'
            })
        }
    }


    return (
        <>
            <div className="w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow container gap-3">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 mb-4">Escreva sua resposta</h1>
                <div className='w-full flex justify-end px-2'>
                    <span>Quantidade de carácteres: <strong>{charCount}</strong></span>
                </div>
                <textarea
                    className="w-full h-64 border border-gray-300 rounded-md p-2 text-slate-800"
                    placeholder="Digite sua redação aqui..."
                    value={essayContent}
                    onPaste={(e) => e.preventDefault()}
                    spellCheck="false"
                    onChange={(e) => setEssayContent(e.target.value)}
                    disabled={timeRemaining <= 0} // Desabilita o textarea quando o tempo acabar
                />

                <Button text='Enviar Redação' onClick={() => handleSendWriting()} disabled={timeRemaining <= 0} />
            </div>
        </>
    );
};

