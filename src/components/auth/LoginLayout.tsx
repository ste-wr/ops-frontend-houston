import * as React from 'react'
import styled from 'styled-components'
import GoogleLogin from 'react-google-login'

const LoginContainer = styled.div`
    background-color: ${(props: any) => props.theme.grey_300};
    border-color: ${(props: any) => props.theme.grey_200};
    width: 400px;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 6px 6px 24px rgba(0,0,0,0.05);
`

const LoginHeader = styled.h1`
    text-align: center;
    font-size: 32;
    line-height: 149%;
    color: ${(props: any) => props.theme.grey_600}
`

const LoginForm = styled.form`
    margin-bottom: 24px;
`

const LoginFormInput = styled.input`
    background-color: ${(props: any) => props.theme.grey_200};
    border: none;
    padding: 12px;
    min-width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 149%;
    margin-bottom: 24px;
    border-radius: 12px;
    color: ${(props: any) => props.theme.grey_400};
    &:focus {
        color: ${(props: any) => props.theme.grey_800};
    }
`

const LoginFormSubmit = styled.input`
    background-color: ${(props: any) => props.theme.orange_default};
    font-size: 16px;
    font-weight: 600;
    color: ${(props: any) => props.theme.grey_800};
    box-sizing: border-box;
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 12px;
`
const ErrorResponseField = styled.div`
    background-color: ${(props: any) => props.theme.red_default};
    border-radius: 8px;
    min-width: 100%;
    padding: 6px 8px;
    color: ${(props: any) => props.theme.red_default};
    box-sizing: border-box;
    text-align: center;
`

const LoginSeparator = styled.div`
    min-width: 100%;
    height: 16px;
    text-align: center;
    color: ${(props: any) => props.theme.grey_500};
    margin-bottom: 24px;
`

const loginUser = async (credentials) => {
    return fetch('/auth/login', {
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
            // set an auth token in cookies
            // set isAuthenticated to true
            return true
        }
    })
}

const handleGoogleSuccess = async(googleData) => {
    const res = await fetch('/auth/google', {
        method: 'POST',
        body: JSON.stringify(googleData),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const data = await res.json()
    console.log(data)
    return true
}

const LoginLayout = () => {
    const [username, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('')
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
            console.log('logging in (LOGINLAYOUT)')
            console.log(response)
        }
    }
    const handleGoogleFailure = (error) => {
        console.log(error)
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
            <LoginSeparator>or</LoginSeparator>
            <GoogleLogin
                responseType="code"
                clientId="605997161745-vn13em4krj1mq7pkdjuoom2kg1ritn72.apps.googleusercontent.com"
                buttonText="Continue with Google"
                onSuccess={handleGoogleSuccess}
                onFailure={handleGoogleFailure}
                cookiePolicy={'single_host_origin'}
            />
        </LoginContainer>
    )
}

export default LoginLayout