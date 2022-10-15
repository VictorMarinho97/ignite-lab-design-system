import { Meta, StoryObj } from '@storybook/react'
import { SignIn } from './Signin'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { rest } from 'msw'
import { expect } from '@storybook/jest'

export default {
    title: 'Pages/Sign In',
    component: SignIn,
    args: {},
    argTypes: {},
    parameters: {
        msw: {
            handlers: [
                rest.post('/sessions', (req, res, ctx) => {
                    return res(ctx.json({
                        message: 'Login realizado"'
                    }))
                })
            ],
        },
    }

} as Meta

export const Default: StoryObj = {
    play: async ({ canvasElement }) => { /*Wireframe que mostra o componente */
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'victormarinho.ads1@gmail.com')
        userEvent.type(canvas.getByPlaceholderText('********'), '12345678')

        userEvent.click(canvas.getByRole('button')) /*Isso é porque temos apenas um botão*/

        await waitFor(() => {
            return expect(canvas.getAllByText('Login realizado!')).toBeInTheDocument()
        })
    }
}

