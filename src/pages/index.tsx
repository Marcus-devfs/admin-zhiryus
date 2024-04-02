import { Inter } from "next/font/google";
import React, { ReactNode, useState } from "react";
import { CardButton, CardText, CardTitle, Card } from "@/components/card";
import { useAppContext } from "@/context/AppContext";
import { Divider } from "@/components/divider/Divider";
import EssayCompose from "./essay/essay";
import FinishedEssay from "./essay/finishedEssay";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const { currentStep, setCurrentStep } = useAppContext()

  interface Steps {
    step: number,
    title: string,
    render: JSX.Element;
  }

  const steps: Steps[] = [
    {
      step: 0, title: 'Bem-Vindo',
      render: (
        <div className="flex flex-col gap-12">
          <Card gap={2}>
            <CardTitle text="Seja Bem vindo a redação online!" />
            <CardText text="Esse é o primeiro passso para entrar na maior faculdade de Animação da América latína!" />
            <CardText text="Atente-se para os pontos a seguir, antes de começar a prova." />
            <Divider />
            <CardButton text="Prosseguir" onClick={() => setCurrentStep(1)} />
          </Card>
        </div>
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
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-8">
      {steps
        .filter((item) => item.step === currentStep)
        .map((item) => (
          <React.Fragment key={item.step}>{item.render}</React.Fragment>
        ))}
    </div>
  );
}
