import { useCallback, useState, useEffect } from 'react'
import { InputType, ButtonType, FlexType } from 'customTypes'
import Button from '../button/Button'
import { Container, Box } from '../../styles/Flex.styles'
import {
    InputField,
    Textarea,
    Label,
    Container as Flex,
} from '../../styles/Input.styles'

const FlexProps: FlexType = {
    justify: 'center',
    dir: 'column',
    align: 'flex-start',
    bg: '#fff',
    height: '',
}

export default function Form() {
    const [disable, setDisable] = useState(true)
    const [taIsEmpty, settaIsEmpty] = useState(true)
    const [tfIsEmpty, settfIsEmpty] = useState(true)

    const ButtonProps: ButtonType = {
        text: 'Entrar',
        variant: '',
        disabled: disable,
    }

    useEffect(() => {
        setDisable(false)
    })

    return (
        <Box>
            <Container {...FlexProps}>
                <h2>Whats is on your mind ?</h2>
                <Flex>
                    <Label>Title</Label>
                    <InputField
                        onChange={(e) => settaIsEmpty(false)}
                        placeholder="Hello world"
                        name="text"
                    />
                </Flex>
                <Flex>
                    <Label>Content</Label>
                    <Textarea
                        onChange={(e) => settfIsEmpty(false)}
                        placeholder="Content Here"
                        name="text"
                    />
                </Flex>
                <div style={{ alignSelf: 'end' }}>
                    <Button button={ButtonProps} />
                </div>
            </Container>
        </Box>
    )
}
