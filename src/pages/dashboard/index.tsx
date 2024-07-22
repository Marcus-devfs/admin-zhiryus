import { Carousel, SectionHeader } from "@/components"
import ChartBar from "@/components/charts/ChartBar"
import ChartPie from "@/components/charts/ChartPie"
import ChartCard from "@/components/charts/ChartsCard"
import React from "react"

const Dashboard: React.FC = () => {

    return (
        <>
            <SectionHeader title="Seja Bem-Vindo(a)" />
            <div className="flex flex-col w-full h-md">
                <span className="text-gray-900 font-bolt text-lg">Últimas noticias do mercado ímobiliario.</span>
            </div>
                <Carousel />
            <div className="flex gap-2 flex-">
                <ChartCard />
                <ChartPie />
                <ChartBar />
            </div>
        </>
    )

}

export default Dashboard