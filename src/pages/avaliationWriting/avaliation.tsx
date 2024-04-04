import { Button } from '@/components/button/Button';
import { CardIcon } from '@/components/card';
import { EssayWriting } from '@/components/essayWriting/EssayWriting';
import { TimeBarProgress } from '@/components/timeBarProgress/TimeBar';
import { useAppContext } from '@/context/AppContext';
import { formatTimeStamp } from '@/help';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';


const Avaliation: React.FC = () => {
    const { essayContent, userData } = useAppContext();
    const [cameraPermission, setCameraPermission] = useState<boolean>(false);
    const [showDetails, setShowDetails] = useState<boolean>(false)

    useEffect(() => {
        const requestCameraPermission = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                setCameraPermission(true);
                // stream.getTracks().forEach((track) => track.stop()); // Parar a câmera após a permissão ser concedida
            } catch (error) {
                console.error('Erro ao acessar a câmera:', error);
                setCameraPermission(false);
            }
        };

        if (!cameraPermission) {
            requestCameraPermission();
        }
    }, [cameraPermission]);


    return (
        <>

            <div className='flex px-6 py-3 items-center justify-center fixed top-5 left-5 bg gap-4 rounded-lg bg-white shadow border border-green-500'>
                <CardIcon icon='/icons/avaliation_icon.png' alt='icon-avaliation' height={25} width={25} />
                <p className='font-bold'>AMBIENTE DO AVALIADOR</p>
            </div>
            <div className='flex flex-col w-full items-center justify-start gap-6 py-8'>

                <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow container gap-3">
                    <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 mb-4">Dados do Interessado</h1>
                    <p className='font-normal text-gray-700'>Nome: <strong>{userData?.nome}.</strong></p>
                    <p className='font-normal text-gray-700'>Curso: <strong>{userData?.nome_turma} - {userData?.nome_curso}_{userData?.nivel_curso} {userData?.modalidade_curso}.</strong></p>
                    <p className='font-normal text-gray-700'>Data do envio: <strong>{formatTimeStamp(userData?.dt_realizacao, true)}.</strong></p>

                </div>

                <div className={`w-full p-6 bg-white border border-gray-200 rounded-lg shadow container flex-col flex`}>
                    <div className='flex w-full justify-between' onClick={() => setShowDetails(!showDetails)}>
                        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Vestibular Méliés 2024.2</h1>
                        <div>
                            <Image alt='icon-gray' src='/icons/gray_arrow_down.png' width={30} height={20} className='' />
                        </div>
                    </div>
                    {showDetails &&
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
                        </div>}
                </div>

                <div className="w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow container gap-3">
                    <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 mb-4">Resposta do Interessado</h1>
                    <div className="w-full h-64 border border-gray-300 rounded-md p-2 text-slate-800">
                        <span>{essayContent}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Avaliation;
