import React from "react"

interface CardTitleProps {
    text: string,
    center?: boolean
}

export const CardTitle: React.FC<CardTitleProps> = ({ text = "Noteworthy technology acquisitions 2021",
    center = false }) => {
    return (
        <h5 className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 ${center && 'text-center'}`}>
            {text}
        </h5>
    )
}