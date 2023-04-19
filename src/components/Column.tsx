import React, { Children } from 'react'
import { ColumnContainer, ColumnTitle } from '../styles'

interface Props {
    text: string
    children: React.PropsWithChildren
}

function Column(props: Props) {
    const { text, children } = props

    return (
        <div className={ColumnContainer}>
            <div className={ColumnTitle}>{text}</div>
            {children}
        </div>
    )
}

export default Column
