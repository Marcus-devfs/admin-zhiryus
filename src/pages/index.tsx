import { Inter } from "next/font/google";
import React, { ReactNode, useEffect, useState } from "react";
import { CardButton, CardText, CardTitle, Card } from "@/components/card";
import { useAppContext } from "@/context/AppContext";
import { Divider } from "@/components/divider/Divider";
import EssayCompose from "./essay/essay";
import FinishedEssay from "./essay/finishedEssay";
import Authentication from "./authentication/authentication";
import { useRouter } from "next/router";
import Avaliation from "./avaliationWriting/avaliation";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const { currentStep, setCurrentStep, setUserData, setAlertData, setEssayContent } = useAppContext()
  const router = useRouter()
  const writingId = router?.query?.key_writing_user as string | null;

  useEffect(() => {
    const handleWritingUser = async (writingId: string) => {
      try {

        const response = await fetch(`/api/avaliationWriting?writingId=${writingId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Erro ao confirmar o início da redação');
        }

        const data = await response.json();
        if (data) {
          setUserData(data)
          setEssayContent(data?.redacao)
        } else {
          setAlertData({
            active: true,
            title: 'Erro ao carregar Redação.',
            message: 'Contate o Suporte Méliès para ajuda.',
            type: 'error'
          })
        }
      } catch (error) {
        console.log(error)
      }
    }
    if (writingId) {
      handleWritingUser(writingId)
    }
  }, [writingId])

  interface Steps {
    step: number,
    title: string,
    render: JSX.Element;
  }

  const steps: Steps[] = [
    {
      step: 0, title: 'Bem-Vindo',
      render: (
        <Authentication />
      )
    },
    {
      step: 1,
      title: 'Detalhes da Redação',
      render: (
        <EssayCompose />
      )
    },
    {
      step: 2,
      title: 'Redação enviada.',
      render: (
        <FinishedEssay />
      )
    }
  ]

  return (
    <div className="min-h-screen flex items-center justify-center py-8">
      <div
        className="z-[-1] fixed top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-[url('/background/imagem_prova.jpg')]"
      />
      {writingId ?
        <Avaliation />
        :
        <>
          {steps
            .filter((item) => item.step === currentStep)
            .map((item) => (
              <React.Fragment key={item.step}>{item.render}</React.Fragment>
            ))}
        </>
      }
    </div>
  );
}
