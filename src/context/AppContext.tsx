import { ReactNode, createContext, useContext, useEffect, useReducer, useState } from "react";

interface AppContextType {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    timeRemaining: number;
    setTimeRemaining: React.Dispatch<React.SetStateAction<number>>;
    totalTime: number;
    startEssay: boolean;
    setStartEssay: React.Dispatch<React.SetStateAction<boolean>>;
    userData: UserDataObject;
    setUserData: React.Dispatch<React.SetStateAction<UserDataObject>>;
    handleVerifyUser: (userData: UserDataObject) => Promise<void | object | any>;
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface UserDataObject {
    email?: string,
    cpf?: string
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
    const [loading, setLoading] = useState<boolean>(false);
    const [userData, setUserData] = useState<UserDataObject>({
        cpf: '',
        email: ''
    });

    const handleVerifyUser = async (userData: UserDataObject) => {
        try {
            const response = await fetch('/api/verifyUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userData } as Record<string, unknown>)
            });

            if (!response.ok) {
                throw new Error('Erro ao verificar o usuário');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro ao verificar o usuário:', error);
            return error
        }
    }

    return (
        <AppContext.Provider
            value={{
                currentStep, setCurrentStep,
                timeRemaining, setTimeRemaining,
                totalTime,
                startEssay,
                setStartEssay,
                userData, setUserData,
                handleVerifyUser,
                loading, setLoading
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