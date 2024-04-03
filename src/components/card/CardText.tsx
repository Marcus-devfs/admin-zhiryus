import React from "react"

interface CardTextProps {
    text: string,
    center?: boolean,
    bold?: boolean,
}

export const CardText: React.FC<CardTextProps> = ({ text = "Here are",
    center = false, bold = false }) => {
    return (
        <p className={`${center && 'text-center'} mb-3 font-${bold ? 'bold' : 'normal'} text-gray-700`}>
            {text}
        </p>
    )
}