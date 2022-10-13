import { clsx } from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react';
import { } from '@radix-ui/react-slot';


export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> { }

export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputProps) {
    return (
        <div className='flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full  text-gray-100 text-xs placeholder:text-gray-400 focus-within:ring-2 ring-cyan-300 h-12'>
            {props.children}
        </div>
    )

}

TextInputInput.displayName = 'TextInput.Root'

export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
    return (
        <slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </slot>
    )
}

TextInputIcon.displayName = 'TextInputIcon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }

function TextInputInput(props: TextInputInputProps) {
    return (

        <input className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
            {...props}
        />

    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}