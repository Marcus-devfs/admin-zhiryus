import { SectionHeader } from "@/components"
import { Card, CardTitle, CardText, CardButton } from "@/components/card"
import { useAppContext } from "@/context/AppContext"
import React from "react"

const Dashboard: React.FC = () => {

    const { userData } = useAppContext()

    return (
        <SectionHeader title="Dashboard" />
    )

}

export default Dashboard