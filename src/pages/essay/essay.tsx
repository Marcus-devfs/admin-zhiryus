import { Button } from '@/components/button/Button';
import { EssayWriting } from '@/components/essayWriting/EssayWriting';
import { TimeBarProgress } from '@/components/timeBarProgress/TimeBar';
import { useAppContext } from '@/context/AppContext';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const EssayCompose: React.FC = () => {
    const [essayContent, setEssayContent] = useState<string>('');
    const { timeRemaining, setStartEssay, startEssay } = useAppContext();
    const [cameraPermission, setCameraPermission] = useState<boolean>(false);
    const [showDetails, setShowDetails] = useState<boolean>(true);

    useEffect(() => {
        const requestCameraPermission = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                setCameraPermission(true);
                stream.getTracks().forEach((track) => track.stop()); // Parar a câmera após a permissão ser concedida
            } catch (error) {
                console.error('Erro ao acessar a câmera:', error);
                setCameraPermission(false);
            }
        };

        if (!cameraPermission) {
            requestCameraPermission();
        }
    }, [cameraPermission]);

    console.log(startEssay)

    return (
        <>
            <div className='flex flex-col w-full items-center justify-start gap-6 py-8'>
                <div className={`w-full h-${(showDetails && !startEssay) && 'screen'} p-6 bg-white border border-gray-200 rounded-lg shadow container flex-col flex`}>
                    <div className='flex w-full justify-between' onClick={() => setShowDetails(!showDetails)}>
                        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Instruções da Redação</h1>
                        <div>
                            <Image alt='icon-gray' src='/icons/gray_arrow_down.png' width={30} height={20} className='' />
                        </div>
                    </div>
                    {showDetails &&
                        <div>
                            {cameraPermission ? (
                                <div className='flex gap-2 items-center mt-3'>
                                    <Image alt='icon-check-permission' src='/icons/checked.png' width={20} height={10} />
                                    <p className='font-normal text-gray-700'>Permissão para a câmera do notebook concedida!</p>
                                </div>
                            ) : (
                                <p className='mb-3 font-normal text-gray-700'>Solicitando permissão para acessar a câmera...</p>
                            )}

                            <div className='mt-5 flex flex-col gap-2'>
                                <p className='font-normal text-gray-700'>Nome: <strong>Marcus Silva</strong></p>
                                <p className='font-normal text-gray-700'>Turma: <strong>Design de Animação</strong></p>

                                <h1 className='font-bold text-gray-700 mt-5'>INSTRUÇÕES:</h1>

                                <p className='font-normal text-gray-700'>1. A prova de redação dissertativa é totalmente online;</p>
                                <p className='font-normal text-gray-700'>2. A partir deste momento, você tem até 3 (três) horas para produzir e enviar a prova completa;</p>
                                <p className='font-normal text-gray-700'>3. Caso não envie, o sistema fechará automaticamente e será validado o que estiver pronto até o momento;</p>
                                <p className='font-normal text-gray-700'>4. Você não pode mudar nem atualizar a tela, pois o sistema enviará automaticamente o texto até o momento que você o desenvolveu;</p>
                                <p className='font-normal text-gray-700'>5. Sua redação deverá ter no mínimo 1.000 (um mil) e no máximo 5.000 (cinco mil) caracteres (sem espaços);</p>
                                <p className='font-normal text-gray-700'>6. No topo da página existe um contador de tempo, com a contagem regressiva para fechar o sistema; tem também um contador de caracteres e o botão salvar, que só é ativado após a contagem mínima de caracteres;</p>
                                <p className='font-normal text-gray-700'>7. Ao terminar sua prova, <b>clique no botão salvar do topo da página para finalizar e enviar</b>;</p>
                                <p className='font-normal text-gray-700'>8. Boa prova!</p>

                                <h1 className="text-center mt-2 text-gray-700">ATENÇÃO!</h1>
                                <h1 className="text-justify mb-2 text-gray-700">
                                    Antes de escrever sua redação, leia o conjunto de textos a seguir como motivadores para suas ideias e reflexões. Não há obrigatoriedade de escolher ou fazer referência a nenhum deles. O tema de redação da prova está no final deste conjunto de textos.
                                </h1>
                            </div>

                            <div className='w-full flex justify-end items-end'>
                                <Button text='Começar' onClick={() => {
                                    setStartEssay(true)
                                    setShowDetails(false)
                                }} disabled={startEssay} />
                            </div>

                        </div>}
                </div>

                {startEssay && <EssayWriting />}
            </div>
            <div className='w-full h-12 flex flex-col fixed bottom-3 pt-4 align-center justify-center border bg-white'>
                <p className='mb-3 font-normal text-gray-700 text-center'>
                    Tempo restante:{" "}
                    {String(Math.floor(timeRemaining / 3600)).padStart(2, "0")}:
                    {String(Math.floor((timeRemaining % 3600) / 60)).padStart(2, "0")}:
                    {String(timeRemaining % 60).padStart(2, "0")}
                </p>
                <TimeBarProgress />
            </div>
        </>
    );
};

export default EssayCompose;
