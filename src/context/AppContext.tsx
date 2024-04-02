import { ReactNode, createContext, useContext, useEffect, useReducer, useState } from "react";

interface AppContextType {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    timeRemaining: number;
    setTimeRemaining: React.Dispatch<React.SetStateAction<number>>;
    totalTime: number;
    startEssay: boolean;
    setStartEssay: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {

    const [currentStep, setCurrentStep] = useState<number>(0)
    // const totalTime = 10800
    const totalTime = 200
    const [timeRemaining, setTimeRemaining] = useState<number>(totalTime);
    const [startEssay, setStartEssay] = useState<boolean>(false);


    return (
        <AppContext.Provider
            value={{
                currentStep, setCurrentStep,
                timeRemaining, setTimeRemaining,
                totalTime,
                startEssay, 
                setStartEssay
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = (): AppContextType => {

    const context = useContext(AppContext);

    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context
}