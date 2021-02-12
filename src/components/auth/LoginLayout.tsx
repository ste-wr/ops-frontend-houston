import * as React from 'react'
import styled from 'styled-components'

const Login = styled.div`
    margin-left: -82px;
`

const LoginContainer = styled.div`
    background-color: ${(props: any) => props.theme.frameBackground};
    border-color: ${(props: any) => props.theme.frameBorderColor};
    width: 400px;
    margin: 0px auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    border-radius: 12px;
    padding-top: 24px;
    padding-bottom: 24px;
    box-shadow: 6px 6px 24px rgba(0,0,0,0.05);
`

const LoginHeader = styled.h1`
    text-align: center;
    font-size: 32;
    line-height: 149%;
    color: ${(props: any) => props.theme.h1Color}
`

const LoginForm = styled.form`
    margin-left: 24px;
    margin-right: 24px;
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

const loginUser = async (credentials) => {
    return fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data=>data.json())
}

const LoginLayout = () => {
    const [username, setUserName] = React.useState()
    const [password, setPassword] = React.useState()
    const [errorMessage, setErrorMessage] = React.useState()
    const handleSubmit = async e => {
        e.preventDefault()
        const response = await loginUser({
            username,
            password
        })
        console.log(response)
    }
    return (
        <div>
            <Login className="login">
                <LoginContainer className="login-form">
                    <LoginHeader>Login</LoginHeader>
                    <LoginForm onSubmit={handleSubmit}>
                        <LoginFormInput type="email" name="username" placeholder="Username" onChange={e => setUserName(e.target.value)} />
                        <LoginFormInput type="password" name="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        <LoginFormSubmit type="submit" value="Login" />
                    </LoginForm>
                    <p>{errorMessage}</p>
                </LoginContainer>
            </Login>
        </div>
    )
}

export default LoginLayout