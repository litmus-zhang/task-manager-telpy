import React, { createContext, useReducer, useContext } from "react"
import { v4 } from 'uuid'

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)
interface AppStateContextProps {
    state: AppState
}

const appData: AppState = {
    lists: [
        {
            id: '0',
            text: 'To Do',
            tasks: [{ id: 'c0', text: 'Generate app Scaffold' }]
        },
        {
            id: '1',
            text: 'In Progress',
            tasks: [{ id: 'c2', text: 'Learn Typescript' }]
        },
        {
            id: '2',
            text: 'Done',
            tasks: [{ id: 'c3', text: 'Begin to use static typing' }]
        }
    ]
}

interface Task {
    id: string
    text: string
}

interface List {
    id: string
    text: string
    tasks: [Task]
}
export interface AppState {
    lists: List[]
}

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(appStateReducer, appData)
    return (
        <AppStateContext.Provider value={{ state }}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext)
}

type Action =
    | {
        type: "ADD_LIST"
        payload: string
    }
    | {
        type: "ADD_TASK"
        payload: { text: string; taskId: string }
    }


const appStateReducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case "ADD_LIST": {
            return {
                ...state,
                lists: [
                    { id: v4(), text: action.payload, tasks: [...state.lists[0].tasks] }
                ]
            }
        }
        case "ADD_TASK": {
            return {
                ...state,
            }
        }
        default: {
            return state
        }
    }
}