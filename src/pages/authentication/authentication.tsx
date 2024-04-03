import { Button } from "@/components/button/Button"
import { Card, CardTitle, CardText, CardButton } from "@/components/card"
import { Divider } from "@/components/divider/Divider"
import { useAppContext } from "@/context/AppContext"
import { formatCPF } from "@/help"
import React from "react"

interface UserDataObject {
    email: string,
    cpf: string
}

const Authentication: React.FC = () => {

    const { setCurrentStep, handleVerifyUser, setUserData, userData, loading, setLoading } = useAppContext()

    const verifyInputs = () => {

        if (!userData || typeof userData !== 'object') {
            alert('Dados do usuário inválidos.')
            return false
        }

        if (!('cpf' in userData) || !userData?.cpf || userData.cpf === '') {
            alert('Preencha o cpf corretamente.')
            return false
        }

        if (!('email' in userData) || !userData?.email || userData.email === '') {
            alert('Preencha o e-mail corretamente.')
            return false
        }

        return true
    }

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {

        if (e.target.name == 'cpf') {
            let str = e.target.value;
            e.target.value = await formatCPF(str)
        }

        setUserData((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value,
        }))
    }

    const handleAuthenticationUser = async () => {
        if (verifyInputs()) {
            setLoading(true)
            try {
                const result = await handleVerifyUser(userData as UserDataObject)

                if (result) {
                    if (!result?.success) {
                        let message = result?.message
                        setCurrentStep(1)
                        alert(message)
                        return
                    } else {
                        alert(result?.message)
                        return
                    }
                } else {
                    alert('Ocorreu um erro ao verificar seu dados. Contate o Suporte, ou tente novamente mais tarde.')
                    return
                }
                // setCurrentStep(1)

            } catch (error) {
                console.log(error)
                return error
            } finally {
                setLoading(false)
            }
        }
    }

    return (
        <div className="flex flex-col gap-12">
            <Card gap={2}>
                <CardTitle text="Seja Bem vindo a redação online!" />
                <CardText text="Esse é o primeiro passso para entrar na maior faculdade de Animação da América latína!" />
                <CardText text="Atente-se para os pontos a seguir, antes de começar a prova." />
                <Divider />
                <CardText bold text="Digite seu e-mail e cpf para validarmos a prova." />
                <div>
                    <form className="">
                        <div className="mb-3">
                            <label htmlFor="email-address-icon"
                                className="block mb-2 text-sm font-medium text-gray-700">Seu e-mail</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    name="email"
                                    value={userData?.email}
                                    onChange={handleChange}
                                    id="email-user"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5"
                                    placeholder="aluno@gmail.com"
                                />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="cpf-user"
                                className="block mb-2 text-sm font-medium text-gray-700">Seu CPF</label>
                            <input
                                type="text"
                                name="cpf"
                                value={userData?.cpf}
                                onChange={handleChange}
                                id="cpf-user"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 py-2.5"
                                placeholder="412.123.123.45"
                            />
                        </div>
                    </form>
                </div>
                <Button arrowIcon={!loading} isLoading={loading} text="Prosseguir" onClick={() => handleAuthenticationUser()} />
            </Card>
        </div>
    )

}

export default Authentication