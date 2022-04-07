import React,{useState} from 'react'
import { FlexType, ButtonType } from 'customTypes'
import { Container, LoginBox as Box } from '../../styles/Flex.styles'
import Button from '../../components/button/Button'
import { Label, InputField } from '../../styles/Input.styles'

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
    
    const [disable,setisable] = useState(true)
    const ButtonProps: ButtonType = {
        text: 'Enter',
        variant: '',
        disabled: !disable,
    }
    return(
        <Container {...FlexProps}>
        <Box>
            <Container {...FlexChild}>
                <h2>Welcome to CodeLeap network!</h2>
                <Label>Please enter your username</Label>
                <InputField onChange={(e)=>setisable(!!(e.target.value))} placeholder="Enter your username" />
                <div style={{ alignSelf: 'end' }}>
                    <Button button={ButtonProps} />
                </div>
            </Container>
        </Box>
    </Container>

    )

}
    
export default LoginPage
