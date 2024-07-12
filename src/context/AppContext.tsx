import { CryptoModal } from "@/components";
import { CardIcon } from "@/components/card";
import { ReactNode, createContext, useContext, useEffect, useReducer, useState } from "react";

interface AppContextType {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    timeRemaining: number;
    setTimeRemaining: React.Dispatch<React.SetStateAction<number>>;
    totalTime: number;
    startEssay: boolean;
    setStartEssay: React.Dispatch<React.SetStateAction<boolean>>;
    userAuthentication: UserAuthentication;
    setUserAuthentication: React.Dispatch<React.SetStateAction<UserAuthentication>>;
    handleVerifyUser: (userData: UserAuthentication) => Promise<void | object | any>;
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    userData: object | any;
    setUserData: React.Dispatch<React.SetStateAction<object | any>>;
    alertData: AlertData,
    setAlertData: React.Dispatch<React.SetStateAction<AlertData>>;
    isAuthenticated: boolean
}

interface UserAuthentication {
    email?: string,
    password?: string
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

interface AlertData {
    active: boolean,
    title?: string,
    message?: string,
    type: string
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {

    const [currentStep, setCurrentStep] = useState<number>(0)
    const totalTime = 10800
    // const totalTime = 200
    const [timeRemaining, setTimeRemaining] = useState<number>(totalTime);
    const [startEssay, setStartEssay] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [userAuthentication, setUserAuthentication] = useState<UserAuthentication>({
        password: '',
        email: ''
    });
    const [userData, setUserData] = useState<object | any>();
    const [alertData, setAlertData] = useState<AlertData>({
        active: false,
        title: '',
        message: '',
        type: ''
    })
    const [essayContent, setEssayContent] = useState<string>('');

    const handleVerifyUser = async (userAuthentication: UserAuthentication) => {
        try {
            // const response = await fetch('/api/verifyUser', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ userAuthentication } as Record<string, unknown>)
            // });

            // if (!response.ok) {
            //     throw new Error('Erro ao verificar o usuário');
            // }

            // const data = await response.json();

            // if (data?.user) {
            //     setUserData(data?.user)
            // }
            // return data;
            setUserData(userAuthentication)
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
                userAuthentication, setUserAuthentication,
                handleVerifyUser,
                loading, setLoading,
                userData, setUserData,
                alertData,
                setAlertData,
                // isAuthenticated: !!userData
                isAuthenticated: true
            }}
        >
            {children}

            <div>
                <CryptoModal title={alertData?.title} type={alertData?.type} isOpen={alertData?.active} closeModal={() => setAlertData({ active: false, title: '', message: '', type: '' })}>
                    <div className='w-full align-center flex justify-center py-2 flex-col items-center'>
                        {alertData?.type === 'success' &&
                            <CardIcon icon='/icons/checked.png' alt='check-icon' width={55} height={55} />
                        }
                        {alertData?.type === 'error' &&
                            <CardIcon icon='/icons/error.png' alt='check-icon' width={55} height={55} />
                        }
                        {alertData?.type === 'info' &&
                            <CardIcon icon='/icons/info.png' alt='check-icon' width={55} height={55} />
                        }
                        <p className="mt-5">{alertData?.message}</p>
                    </div>
                </CryptoModal>
            </div>
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