import React, { useState } from 'react'
import { NewItemButton, NewItemFormContainer, NewItemInput } from '../styles'
import { useFocus } from '../utils/useFocus'

interface NewItemFormProps {
    onAdd(text: string): void
}

function NewItemForm(props: NewItemFormProps) {
    const { onAdd } = props
    const [text, setText] = useState('')
    const inputRef = useFocus()

    return (
        <div className={NewItemFormContainer}>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
                ref={inputRef}
                className={NewItemInput} />
            <button className={NewItemButton} onClick={() => onAdd(text)}>
                Create
            </button>
        </div>
    )
}

export default NewItemForm
