import { useAppContext } from "@/context/AppContext"
import { useEffect, useState } from "react";

interface TimeBarProps {
    barWidth?: number
}

export const TimeBarProgress = ({ barWidth }: TimeBarProps) => {
    const { timeRemaining, setCurrentStep, setTimeRemaining, totalTime, startEssay } = useAppContext()


    return (
        <div className="w-full h-6 bg-slate-400">
            <div className="h-full bg-green-500 w-full" style={{ width: `${Math.max(Number(barWidth), 0)}%` }}></div>
        </div>
    )
}