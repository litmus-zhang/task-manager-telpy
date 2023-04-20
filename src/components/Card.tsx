import React from 'react'
import { CardContainer } from '../styles'

interface CardProps {
    text: string
}

function Card(props: CardProps) {
    const { text } = props

    return (
        <div className={CardContainer}>{text}</div>
    )
}

export default Card
