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
                    <p className='font-normal text-gray-700'>Nome: <strong>{userData?.nome}</strong></p>
                    <p className='font-normal text-gray-700'>Curso: <strong>{userData?.nome_turma} - {userData?.nome_curso}_{userData?.nivel_curso} {userData?.modalidade_curso}</strong></p>
                    <p className='font-normal text-gray-700'>Data do envio: <strong>{formatTimeStamp(userData?.dt_realizacao, true)}</strong></p>
                    <p className='font-normal text-gray-700'>Situação: <strong>{userData?.aprovado === 1 && 'Aprovado' ||
                        parseInt(userData?.aprovado) === 0 && 'Reprovado' ||
                        'Aguardando'}</strong></p>
                    <p className='font-normal text-gray-700'>Nota da Redação: <strong>{userData?.nt_redacao}</strong></p>

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
                                        Texto 1
                                        O processo de criação do artista é a parte mais valiosa da obra. Lógico que o produto final é importante, mas é durante o início e o término da obra que estão suas inquietações, erros e acertos, dúvidas e certezas, vontade de mudar tudo, e o mais importante: os seus questionamentos! Todo artista se pergunta no seu processo de criação, ou pelo menos deveria se perguntar: o eu quero dizer com essa obra?
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        BULHÃO, Layo. O que é processo de criação. Disponível em:  <br /> In: <a href="http://driartessempre.blogspot.com.br" target="_blank" className="text-blue-600">driartessempre.</a> Acesso em: 28 de março de 2024.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-8 border border-gray-200">
                                <div className='flex w-full bg-gray-200 px-3 py-3'>
                                    <h1 className="text-2xl font-bold">2º Texto</h1>
                                </div>
                                <div className='flex w-full flex-col gap-4 px-3 py-3'>
                                    <p className="text-lg">
                                        Um personagem bem construído é fundamental para o funcionamento de uma história e de sua narrativa. Um autor deve, através do roteiro, saber criar personagens marcantes que consigam provocar na audiência as emoções desejadas, sejam elas de atração ou de repulsa, amor ou ódio, preocupação ou indiferença.</p>
                                    <p className="text-sm text-gray-600">
                                        MASSARI, Sandro. A criação de personagens.
                                        Disponível em:
                                        <a href="http://www.massarani.com.br/rot-criar-personagens-roteiro-cinema.html" target="_blank" className="text-blue-600">
                                            MASSARI, Sandro. A criação de personagens.
                                        </a>
                                        Acesso em: 28 de março de 2024
                                    </p>
                                </div>

                            </div>

                            <div className="mb-8 border border-gray-200">
                                <div className='flex w-full bg-gray-200 px-3 py-3'>
                                    <h1 className="text-2xl font-bold">3º Texto</h1>
                                </div>
                                <div className='flex w-full flex-col gap-4 px-3 py-3'>
                                    <p className="text-lg">
                                        A personagem é um ser fictício, — expressão que soa como paradoxo. De fato, como pode uma ficção ser? Como pode existir o que não existe? No entanto, a criação literária repousa sobre este paradoxo, e o problema da verossimilhança no romance depende desta possibilidade de um ser fictício, isto é, algo que, sendo uma criação da fantasia, comunica a impressão da mais lídima verdade existencial. Podemos dizer, portanto, que o romance se baseia, antes de mais nada, num certo tipo de relação entre o ser vivo e o ser fictício, manifestada através da personagem, que é a concretização deste.
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        CANDIDO, Antônio. A Personagem do Romance. In: A Personagem de Ficção. Perspectiva: São Paulo
                                    </p>
                                </div>
                            </div>

                            <div className="mb-8 border border-gray-200">
                                <div className='flex w-full bg-gray-200 px-3 py-3'>
                                    <h1 className="text-2xl font-bold">4º Texto</h1>
                                </div>
                                <div className='flex w-full flex-col gap-4 px-3 py-3'>
                                    <p className="text-lg">
                                        Nildo Viana (2003) diferencia herói de super-herói. O herói é alguém com habilidades especiais e com grande coragem, que pode ser alguém da vida real e o super-herói é alguém com superpoderes, um personagem fictício inicialmente dos gêneros de quadrinhos de superaventuras. O herói como força mítica existe desde a antiguidade e representa o ser humano e suas superações.
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        MODESTO, Sandro Luiz. Reflexões Sobre Os Super-Heróis na Educação e Suas Potencialidades.
                                        In: <a href=": https://periodicos2.uesb.br " target="_blank" className="text-blue-600">: https://periodicos2.uesb.br </a>. Acessado em 28 de março de 2024.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-8 border border-gray-200">
                                <div className='flex w-full bg-gray-200 px-3 py-3'>
                                    <h1 className="text-2xl font-bold">5º Texto</h1>
                                </div>
                                <div className='flex w-full flex-col gap-4 px-3 py-3'>
                                    <p className="text-lg">
                                        A sociedade moderna se identifica mais facilmente com personagens controversos e, muitas vezes, na vida real, eleva ao posto de herói figuras cujos erros e defeitos morais – por piores que sejam – são ignorados em prol da luta contra um suposto inimigo.
                                    </p>
                                    <p className="text-lg">
                                        (…) Você já deve ter notado o sucesso das obras que colocam anti-heróis como protagonistas. Diferentemente do herói infalível, bom, que se sacrifica em nome de causas nobres, o anti-herói é um personagem que erra, toma atitudes que julgamos imorais e não possui virtudes geralmente atribuídas aos heróis (como coragem, resiliência, justiça). É natural que tenhamos mais facilidade de nos identificarmos com um anti-herói como Deadpool – que fala palavrão e é egocêntrico, sarcástico e vingativo – do que com o Super-homem, que sequer é deste planeta. Os heróis modernos erram muito, mas geralmente os perdoamos, pois acreditamos na causa que defendem, mesmo que os meios para alcançá-la sejam altamente questionáveis.
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        MIRANDA, Lucas Mascaranhas de. A Fronteira tênue entre heróis e vilões. In: Ciência e Cultura Pop. Ciência Hoje.
                                        In: <a href="https://cienciahoje.org.br/artigo/a-fronteira-tenue-entre-herois-e-viloes" target="_blank" className="text-blue-600">https://cienciahoje.org.br/artigo/a-fronteira-tenue-entre-herois-e-viloes</a>. Acessado em 28 de março de 2024.
                                    </p>
                                </div>
                            </div>


                            <div className='flex w-full flex-col gap-4 px-3 py-3 mb-5 mt-5'>
                                <p className="text-lg">
                                    É do conhecimento de todos que, quando estamos diante de grandes desafios ou algum tipo de problema, buscamos um “salvador”, um “herói”, que resolverá todos os nossos conflitos.
                                    Na linha desse raciocínio, você se identifica mais com um herói ou anti-herói?  E se você fosse um personagem fictício? Em qual personagem você se inspiraria? Por quê?
                                    Considerando esses questionamentos, queremos conhecer seu ponto de vista; por isso, propomos o seguinte tema:
                                </p>
                            </div>

                            <div className='flex w-full flex-col gap-4 px-3 py-3 mb-5 mt-5'>
                                <h1 className="text-2xl font-bold text-center">
                                    SENDO UM PERSONAGEM FICTÍCIO,
                                    O QUE FARIA PARA RESOLVER CONFLITOS NA SOCIEDADE NA QUAL VIVEMOS?
                                </h1>
                            </div>

                            <p className="font-bold text-center text-lg bg-yellow-200 p-4 mt-5">
                                ATENÇÃO!! Não é permitida a utilização de ferramentas IA para a produção do seu texto!
                            </p>
                        </div>}
                </div>

                <div className="w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow container gap-3">
                    <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 mb-4">Resposta do Interessado</h1>
                    <div className="w-full border border-gray-300 rounded-md p-2 text-slate-800 overflow-auto">
                        <span className='whitespace-pre-wrap'>{essayContent}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Avaliation;
