import * as React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const LoginContainer = styled.div`
    background-color: ${(props: any) => props.theme.frameBackground};
    border-color: ${(props: any) => props.theme.frameBorderColor};
    width: 400px;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 6px 6px 24px rgba(0,0,0,0.05);
`

const LoginHeader = styled.h1`
    text-align: center;
    font-size: 32;
    line-height: 149%;
    color: ${(props: any) => props.theme.h1Color}
`

const LoginForm = styled.form`
    margin-bottom: 24px;
`

const LoginFormInput = styled.input`
    background-color: #F3F3F4;
    border: none;
    padding: 12px;
    min-width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 149%;
    margin-bottom: 24px;
    border-radius: 12px;
    color: #BEC3CE;
    &:focus {
        color: ${(props: any) => props.theme.buttonActiveContent};
    }
`

const LoginFormSubmit = styled.input`
    background-color: ${(props: any) => props.theme.primaryOrange};
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    box-sizing: border-box;
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 12px;
`
const ErrorResponseField = styled.div`
    background-color: ${(props: any) => props.theme.errorRed};
    border-radius: 8px;
    min-width: 100%;
    padding: 6px 8px;
    color: #ff0000;
    box-sizing: border-box;
    text-align: center;
`

const loginUser = async (credentials) => {
    return fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => {
        if(!data.ok) {
            return data.json()
        } else {
            return true
        }
    })
}

const LoginLayout = ({setToken}) => {
    const [username, setUserName] = React.useState()
    const [password, setPassword] = React.useState()
    const [errorMessage, setErrorMessage] = React.useState(null)
    const handleSubmit = async e => {
        e.preventDefault()
        const response = await loginUser({
            username,
            password
        })
        if(response.message) {
            setErrorMessage(response.message)
        } else {
            setErrorMessage(null)
            setToken({"token": "abc"})
        }
    }
    let style={
        display: ""
    }
    if(!errorMessage) style.display = "none";
    return (
        <LoginContainer className="login-form">
            <LoginHeader>Login</LoginHeader>
            <LoginForm onSubmit={handleSubmit}>
                <LoginFormInput type="email" name="username" placeholder="Username" onChange={e => setUserName(e.target.value)} />
                <LoginFormInput type="password" name="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                <LoginFormSubmit type="submit" value="Login" />
            </LoginForm>
            <ErrorResponseField style={style}>{errorMessage}</ErrorResponseField>
        </LoginContainer>
    )
}

LoginLayout.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default LoginLayout