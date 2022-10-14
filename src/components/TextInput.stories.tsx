import { Meta, StoryObj } from '@storybook/react'
import { Envelope, Lock } from 'phosphor-react'
import { TextInput, TextInputRootProps } from './TextInput'


export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            
                <TextInput.Icon>
                    <Envelope />
                    <Lock />
                </TextInput.Icon>,
                <TextInput.Input placeholder='Type your e-mail adress' />
            
        ]
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
    }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon : StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input placeholder='Type your e-mail adress' />
    }
}