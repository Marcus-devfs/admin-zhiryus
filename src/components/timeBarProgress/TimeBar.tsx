import { useAppContext } from "@/context/AppContext"
import { useEffect, useState } from "react";

export const TimeBarProgress = () => {
    const { timeRemaining, setCurrentStep, setTimeRemaining, totalTime, startEssay } = useAppContext()
    const [barWidth, setBarWidth] = useState<number>(100);

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
                setCurrentStep(2)
            }
        }
    }, [timeRemaining, setCurrentStep, setTimeRemaining, startEssay]);

    return (
        <div className="w-full h-4 bg-slate-400">
            <div className="h-full bg-green-500" style={{ width: `${Math.max(barWidth, 0)}%` }}></div>
        </div>
    )
}