export const AppContainer = ' flex flex-row items-start p-3 w-screen h-screen bg-1 m-0'
export const ColumnContainer = 'bg-2 w-[300px] min-h-[40px]  mr-3 rounded p-2 grow'
export const ColumnTitle = ' px-3 py-1 font-bold'
export const CardContainer = 'bg-white flex cursor-pointer mb-1 py-1 px-2 max-w-full w-full rounded shadow-md shadow-blue-500/5'
export interface AddItemButtonProps {
    dark?: boolean
}

export const AddItemButton = (props: AddItemButtonProps) => `bg-3 rounded ${props.dark ? 'text-white' : 'text-black'} cursor-pointer py-2 px-3 text-left transition:colors max-w-full w-[300px] hover:bg-4 `
export const NewItemFormContainer = 'max-w-[300px] flex flex-col w-full items-start'
export const NewItemButton = 'bg-5 rounded border-none shadow-none text-white px-3 py-1 text-center'
export const NewItemInput = 'rounded border-none outline-none shadow-sm shadow-blue-500/5 mb-1 py-1 px-2 w-full'