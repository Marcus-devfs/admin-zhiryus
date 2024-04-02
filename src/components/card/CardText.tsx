import React from "react"

interface CardTextProps {
    text: string,
    center?: boolean
}

export const CardText: React.FC<CardTextProps> = ({ text = "Here are",
    center = false }) => {
    return (
        <p className={`${center && 'text-center'} mb-3 font-normal text-gray-700`}>
            {text}
        </p>
    )
}