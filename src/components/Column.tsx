import React from 'react'
import { ColumnContainer, ColumnTitle } from '../styles'
import AddNewItem from './AddNewItem'
import { useAppState } from '../AppStateContext'
import Card from './Card'



interface ColumnProps {
    text: string
    index: number
}

function Column(props: ColumnProps) {
    const { text, index } = props
    const { state } = useAppState()

    return (
        <div className={ColumnContainer}>
            <div className={ColumnTitle}>{text}</div>
            {
                state.lists[index].tasks.map(task => (
                    <Card text={task.text} key={task.id} />
                ))
            }
            <AddNewItem
                toggleButtonText='+ Add another task'
                onAdd={console.log}
                dark={false}
            />
        </div>
    )
}

export default Column
