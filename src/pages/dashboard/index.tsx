import { SectionHeader } from "@/components"
import ChartBar from "@/components/charts/ChartBar"
import ChartPie from "@/components/charts/ChartPie"
import ChartCard from "@/components/charts/ChartsCard"
import React from "react"

const Dashboard: React.FC = () => {

    return (
        <>
            <SectionHeader title="Dashboard" />
            <div className="flex gap-8 flex-wrap">
                <ChartCard />
                <ChartPie />
                <ChartBar />
            </div>
        </>
    )

}

export default Dashboard