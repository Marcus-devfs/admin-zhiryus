import { Card, CardTitle, CardText, CardButton } from "@/components/card"
import { useAppContext } from "@/context/AppContext"
import React from "react"

const Dashboard: React.FC = () => {

    const { userData } = useAppContext()

    return (
        <div className="flex">
            <CardTitle color="white" text="Seja Bem-Vindo ao seu Saas!" />
            <CardText color='gray-400' text={`Olá! ${userData?.email}`} />
        </div>
    )

}

export default Dashboard