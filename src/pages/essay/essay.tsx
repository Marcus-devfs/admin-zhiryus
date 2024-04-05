import { Button } from '@/components/button/Button';
import { EssayWriting } from '@/components/essayWriting/EssayWriting';
import { TimeBarProgress } from '@/components/timeBarProgress/TimeBar';
import { useAppContext } from '@/context/AppContext';
import { error } from 'console';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface ShowDetails {
    instruction: boolean,
    vestibular: boolean,
}


interface CameraPermission {
    active?: boolean, success?: boolean, error?: boolean
}

const EssayCompose: React.FC = () => {
    const { timeRemaining, setStartEssay, startEssay, userData, essayContent, setCurrentStep, setAlertData, setTimeRemaining, totalTime} = useAppContext();
    const [cameraPermission, setCameraPermission] = useState<CameraPermission>({ active: false, success: false, error: false });
    const [showDetails, setShowDetails] = useState<ShowDetails>({
        instruction: true,
        vestibular: false
    });
    const [barWidth, setBarWidth] = useState<number>(100);

    const handleConfirmStartWriting = async () => {
        try {
            setStartEssay(true)
            setShowDetails({ instruction: false, vestibular: false })

            const response = await fetch('/api/confirmStartWriting', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ writingId: userData?.id_redacao })
            });

            if (!response.ok) {
                throw new Error('Erro ao confirmar o início da redação');
            }

            const data = await response.json();
            console.log(data);

        } catch (error) {
            console.log(error)
            return error
        }
    }

    useEffect(() => {
        const requestCameraPermission = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                setCameraPermission({ active: true, success: true, error: false });
                // stream.getTracks().forEach((track) => track.stop()); // Parar a câmera após a permissão ser concedida
            } catch (error) {
                console.error('Erro ao acessar a câmera:', error);
                setCameraPermission({ active: true, success: false, error: true });
            }
        };

        if (!cameraPermission?.active) {
            requestCameraPermission();
        }
    }, [cameraPermission]);


    const timeExpiredSentWriting = async () => {
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

            const data = await response.json();

            if (data?.success) {
                setAlertData({
                    active: true,
                    title: 'Tempo expirado.',
                    message: 'O tempo de prova terminou. Sua redação foi enviada para análise.',
                    type: 'info'
                })
                setCurrentStep(2)
            } else {
                setAlertData({
                    active: true,
                    title: 'Tempo expirado.',
                    message: 'O tempo de prova terminou, porém ocorreu um erro ao enviar sua redação. Entre em contato com o suporte Méliès.',
                    type: 'error'
                })
            }

            return data

        } catch (error) {
            console.log(error)
            return error
        }
    }


    useEffect(() => {
        if (startEssay) {
            if (timeRemaining > 0) {
                const startTime = Date.now();
                const timer = setInterval(() => {
                    const elapsedTime = Date.now() - startTime;
                    const progressPercentage = (elapsedTime / (totalTime * 1000)) * 100;
                    setBarWidth((prevWidth) => Math.max(prevWidth - progressPercentage, 0));
                    setTimeRemaining((prevTime) => Math.max(prevTime - 1, 0)); // Garante que o tempo nunca seja menor que zero
                }, 1000);

                return () => clearInterval(timer);
            } else {
                timeExpiredSentWriting()
            }
        }
    }, [timeRemaining, setCurrentStep, setTimeRemaining, startEssay]);


    return (
        <>
            <div className='flex flex-col w-full items-center justify-start gap-6 py-8'>
                <div className={`w-full p-6 bg-white border border-gray-200 rounded-lg shadow container flex-col flex`}>
                    <div className='flex w-full justify-between' onClick={() => setShowDetails({ ...showDetails, instruction: !showDetails?.instruction })}>
                        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Instruções da Redação</h1>
                        <div>
                            <Image alt='icon-gray' src='/icons/gray_arrow_down.png' width={30} height={20} className='' />
                        </div>
                    </div>
                    {showDetails?.instruction &&
                        <div>
                            {cameraPermission?.active ? (
                                <div className='flex gap-2 items-center mt-3'>
                                    {cameraPermission?.success ?
                                        <>
                                            <Image alt='icon-check-permission' src='/icons/checked.png' width={20} height={10} />
                                            <p className='font-normal text-gray-700'>Permissão para a câmera do notebook/computador concedida!</p>
                                        </>
                                        :
                                        <>
                                            <Image alt='icon-check-permission' src='/icons/error.png' width={20} height={10} />
                                            <p className='font-normal text-gray-700'>Sua câmera está com erro para conceder permissão.</p>
                                        </>
                                    }
                                </div>
                            ) : (
                                <p className='mb-3 font-normal text-gray-700'>Solicitando permissão para acessar a câmera...</p>
                            )}

                            <div className='mt-5 flex flex-col gap-2'>
                                <p className='font-normal text-gray-700'>Nome: <strong>{userData?.nome}.</strong></p>
                                <p className='font-normal text-gray-700'>Curso: <strong>{userData?.nome_turma} - {userData?.nome_curso}_{userData?.nivel_curso} {userData?.modalidade_curso}.</strong></p>

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

                        </div>}
                </div>

                <div className={`w-full p-6 bg-white border border-gray-200 rounded-lg shadow container flex-col flex`}>
                    <div className='flex w-full justify-between' onClick={() => setShowDetails({ ...showDetails, vestibular: !showDetails?.vestibular })}>
                        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Vestibular Méliés 2024.2</h1>
                        <div>
                            <Image alt='icon-gray' src='/icons/gray_arrow_down.png' width={30} height={20} className='' />
                        </div>
                    </div>
                    {showDetails?.vestibular &&
                        <div className='flex flex-col py-6 px-3'>
                            <div className="mb-8 border border-gray-200">
                                <div className='flex w-full bg-gray-200 px-3 py-3'>
                                    <h1 className="text-2xl font-bold">1º Texto</h1>
                                </div>
                                <div className='flex w-full flex-col gap-4 px-3 py-3'>
                                    <p className="text-lg">
                                        As profissões digitais são aquelas que envolvem o uso da tecnologia e da internet como meio de trabalho. Essas profissões têm ganhado cada vez mais destaque, principalmente nos últimos anos, devido ao crescimento do mercado digital (...) e as empresas estão se adaptando a essa realidade, buscando profissionais capacitados para atuar nesse ambiente. Além disso, o mercado de trabalho para as profissões digitais tende a crescer ainda mais nos próximos anos, e a demanda por esses profissionais só tende a aumentar.
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        RODRIGUEZ, Basília. Direitos iguais, nem mais, nem menos. <br /> In: <a href="https://blog.lojaintegrada.com.br/o-mundo-online-e-a-importancia-das-profissoes-digitais" target="_blank" className="text-blue-600">SPAGNUOLO, Raphael. O mundo online e as profissões digitais.</a> Acessado em 10 de outubro de 2023.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-8 border border-gray-200">
                                <div className='flex w-full bg-gray-200 px-3 py-3'>
                                    <h1 className="text-2xl font-bold">2º Texto</h1>
                                </div>
                                <div className='flex w-full flex-col gap-4 px-3 py-3'>
                                    <p className="text-lg">
                                        A realidade do futuro do trabalho e da nossa sociedade vem sendo representada há muito tempo por filmes, séries, e até mesmo desenhos animados. Por isso, muitas pessoas pensam que o destino do mundo corporativo estará tomado por robôs e que os humanos sofrerão com o desemprego. Que as máquinas ocuparão o lugar de mão de obra humana, isso não é novidade para ninguém. Entretanto, não são os empregos que vão deixar de existir: as atividades é que serão adaptadas e, dessa forma, dividiremos o espaço com a tecnologia.
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <a href="https://www.roberthalf.com.br/blog/tendencias/futuro-do-trabalho-quais-tendencias-e-como-preparar-empresa-rc" target="_blank" className="text-blue-600">HALF, Robert. Futuro do trabalho: quais as tendências e como preparar a empresa?</a> Disponível in: <a href="https://www.roberthalf.com.br/blog/tendencias/futuro-do-trabalho-quais-tendencias-e-como-preparar-empresa-rc" target="_blank" className="text-blue-600">https://www.roberthalf.com.br/blog/tendencias/futuro-do-trabalho-quais-tendencias-e-como-preparar-empresa-rc</a>. Acessado em 10 de outubro de 2023.
                                    </p>
                                </div>

                            </div>

                            <div className="mb-8 border border-gray-200">
                                <div className='flex w-full bg-gray-200 px-3 py-3'>
                                    <h1 className="text-2xl font-bold">3º Texto</h1>
                                </div>
                                <div className='flex w-full flex-col gap-4 px-3 py-3'>
                                    <p className="text-lg">
                                        A transformação digital traz consigo desafios como a segurança de dados, a integração de tecnologias legadas e a necessidade de habilidades especializadas. No entanto, também oferece oportunidades incríveis para inovação, eficiência e crescimento. Por isso, as profissões do futuro, em geral, são estrategicamente importantes para empresas e setores em expansão, o que resulta em alta demanda ou alta probabilidade de demanda futura. Isso oferece boas oportunidades profissionais para aqueles que optam por essas carreiras.
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <a href="https://www.portaldaindustria.com.br/industria-de-a-z/profissoes-do-futuro/" target="_blank" className="text-blue-600">Profissões do futuro.</a> In: <a href="https://www.portaldaindustria.com.br/industria-de-a-z/profissoes-do-futuro/" target="_blank" className="text-blue-600">https://www.portaldaindustria.com.br/industria-de-a-z/profissoes-do-futuro/</a>. Acessado em 10 de outubro de 2023.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-8 border border-gray-200">
                                <div className='flex w-full bg-gray-200 px-3 py-3'>
                                    <h1 className="text-2xl font-bold">4º Texto</h1>
                                </div>
                                <div className='flex w-full flex-col gap-4 px-3 py-3'>
                                    <p className="text-lg">
                                        A arte está entre os campos de expressão da subjetividade humana há milhões de anos. Ao longo da história, muitos artistas trouxeram contribuições significativas e novos olhares para retratar sentimentos cotidianos e as mais variadas impressões. Nesse sentido, os suportes para a expressão artística foram se adaptando e, nas últimas décadas, com o advento da internet, nasceram as artes digitais. Profissão Artista Digital: como seguir essa carreira.
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        In: <a href="https://www.sos.com.br/noticias/guia-de-profissao/profissao-artista-digital-como-seguir-essa-carreira" target="_blank" className="text-blue-600">https://www.sos.com.br/noticias/guia-de-profissao/profissao-artista-digital-como-seguir-essa-carreira</a>. Acessado em 10 de outubro de 2023.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-8 border border-gray-200">
                                <div className='flex w-full bg-gray-200 px-3 py-3'>
                                    <h1 className="text-2xl font-bold">5º Texto</h1>
                                </div>
                                <div className='flex w-full flex-col gap-4 px-3 py-3'>
                                    <p className="text-lg">
                                        Há quem diga que todos têm um lado artístico. Mas, independente do tipo de arte que você pratica, existe uma linha que separa os amadores dos artistas profissionais. O artista digital, por exemplo, desempenha um papel vital na criação, inovação e comunicação visual na sociedade tecnológica. Suas contribuições não apenas enriquecem a cultura visual, mas também moldam a forma como interagimos com a tecnologia e compreendemos o mundo ao nosso redor. Como ser um artista.
                                    </p>
                                    <p className="text-lg">
                                        Como você observa, o mercado de trabalho está em frequente mudança e ele se impõe ao exigir um novo perfil de profissional: aquele que precisa se capacitar para ampliar sua visão tanto para dentro como para fora da empresa. O futuro do profissional para esse mercado, pontuado por novas tecnologias, é promissor, mas também desafiador. Além disso, sabemos bem a importância da estabilidade financeira e que este é um dos principais motivos para o nosso esforço diário. Mas, e além disso? Quais são as suas aspirações e motivações profissionais, na área que pretende se especializar? Como você se vê profissionalmente em um futuro próximo?
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        In: <a href="https://www.universidadedointercambio.com/como-ser-um-artista" target="_blank" className="text-blue-600">https://www.universidadedointercambio.com/como-ser-um-artista</a>. Acessado em 10 de outubro de 2023.
                                    </p>
                                    <p className="font-bold text-center text-lg bg-yellow-200 p-4 mt-5">
                                        ATENÇÃO!! Não é permitida a utilização de ferramentas IA para a produção do seu texto!
                                    </p>
                                </div>
                            </div>

                            {!startEssay && <div className='w-full flex justify-end items-end'>
                                <Button text='Começar' onClick={() => handleConfirmStartWriting()} disabled={startEssay} />
                            </div>}

                        </div>}
                </div>

                {startEssay && <EssayWriting />}
            </div>
            <div className='w-full h-14 flex flex-col fixed bottom-0 pt-2 gap-2 align-center justify-center border bg-white'>
                <p className='font-normal text-gray-700 text-center'>
                    Tempo Restante:{" "}
                    <strong>
                        {String(Math.floor(timeRemaining / 3600)).padStart(2, "0")}:
                        {String(Math.floor((timeRemaining % 3600) / 60)).padStart(2, "0")}:
                        {String(timeRemaining % 60).padStart(2, "0")}
                    </strong>
                </p>
                <TimeBarProgress barWidth={barWidth} />
            </div>
        </>
    );
};

export default EssayCompose;
