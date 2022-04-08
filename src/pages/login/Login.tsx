import React, { useContext, useState } from 'react'
import { FlexType, ButtonType } from 'customTypes'
import { useNavigate } from 'react-router-dom'
import { Container, LoginBox as Box } from '../../styles/Flex.styles'
import Button from '../../components/button/Button'
import { Label, InputField } from '../../styles/Input.styles'
import { MyContext } from '../../routes/Routes'

const FlexProps: FlexType = {
    justify: 'center',
    dir: 'row',
    align: 'center',
    bg: '#9999',
    height: '100vh',
}
const FlexChild: FlexType = {
    justify: 'center',
    dir: 'column',
    align: '',
    bg: '#fff',
    height: '',
}

const LoginPage: React.FC = () => {
    const navegate = useNavigate()
    const [disable, setisable] = useState(false)
    const context = useContext(MyContext)
    function login() {
        navegate('/home')
    }
    const ButtonProps: ButtonType = {
        text: 'Enter',
        variant: '',
        disabled: !disable,
        onClick: login,
    }
    return (
        <Container {...FlexProps}>
            <Box>
                <Container {...FlexChild}>
                    <h2>Welcome to CodeLeap network!</h2>
                    <Label>Please enter your username sir {context}</Label>
                    <InputField
                        onChange={(e) => setisable(!!e.target.value)}
                        placeholder="Enter your username"
                    />
                    <div style={{ alignSelf: 'end' }}>
                        <Button button={ButtonProps} />
                    </div>
                </Container>
            </Box>
        </Container>
    )
}

export default LoginPage
