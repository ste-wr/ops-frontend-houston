import * as React from 'react'
import styled from 'styled-components'

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

const fetchAuthorizeURL: any = async() => {
    const res = await fetch('/auth/login', {
        method: 'GET'
    })
    return res
}

const LoginLayout = () => {
    const [errorMessage, setErrorMessage] = React.useState(null)
    const handleAuthorize = async e => {
        e.preventDefault()
        let authPopup = window.open("about:blank", "Google Authentication", "width=630,height=685")
        await fetchAuthorizeURL().then(data => {
            if (!data.ok) {
                setErrorMessage('Failed to get Google Auth URL')
            } else {
                data.text().then(text => {
                    authPopup.location.href = text
                })
            }
        })
    }
    let style={
        display: ""
    }
    if(!errorMessage) style.display = "none";
    return (
        <LoginContainer className="login-form">
            <LoginHeader>Login</LoginHeader>
            <LoginForm onSubmit={handleAuthorize}>
                <LoginFormSubmit type="submit" value="Continue with Google" />
            </LoginForm>
            <ErrorResponseField style={style}>{errorMessage}</ErrorResponseField>
        </LoginContainer>
    )
}

export default LoginLayout