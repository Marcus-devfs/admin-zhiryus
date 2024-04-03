import { Inter } from "next/font/google";
import React, { ReactNode, useState } from "react";
import { CardButton, CardText, CardTitle, Card } from "@/components/card";
import { useAppContext } from "@/context/AppContext";
import { Divider } from "@/components/divider/Divider";
import EssayCompose from "./essay/essay";
import FinishedEssay from "./essay/finishedEssay";
import Authentication from "./authentication/authentication";

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
        {steps
          .filter((item) => item.step === currentStep)
          .map((item) => (
            <React.Fragment key={item.step}>{item.render}</React.Fragment>
          ))}
    </div>
  );
}
