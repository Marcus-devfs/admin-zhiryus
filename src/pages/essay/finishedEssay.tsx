import { Card, CardButton, CardIcon, CardText, CardTitle } from '@/components/card';
import { useAppContext } from '@/context/AppContext';
import React, { useState, useEffect } from 'react';

const FinishedEssay: React.FC = () => {

    const { setCurrentStep } = useAppContext()

    useEffect(() => {
        const requestCameraPermission = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                stream.getTracks().forEach((track) => track.stop()); 
            } catch (error) {
                console.error('Erro ao acessar a câmera:', error);
                return error
            }
        };
        setTimeout(() => {
            requestCameraPermission()
            setCurrentStep(0)
        }, 150000)
    }, [])

    return (
        <>
            <div className="flex flex-col gap-12">
                <Card gap={2}>
                    <div className='w-full align-center flex justify-center py-2'>
                        <CardIcon icon='/icons/checked.png' alt='check-icon' width={45} height={45} />
                    </div>
                    <div>
                        <CardTitle text="Obrigado pelo envio!" center />
                        <CardText text="Redação finalizada." center />
                    </div>
                    <CardText text="A redação será análisada, e assim que houver uma nota, você receberá o resultado por e-mail." center />
                    <CardText text="Boa sorte!" center />
                </Card>
            </div>
        </>
    );
};

export default FinishedEssay;
