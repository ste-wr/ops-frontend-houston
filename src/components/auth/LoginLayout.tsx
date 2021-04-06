import * as React from 'react'
import styled from 'styled-components'
import * as Cookies from 'js-cookie'

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

const GoogleButton = styled.div`
    max-height: 48px;
    font-size: 16px;
    background-color: ${(props: any) => props.theme.grey_800};
    color: ${(props: any) => props.theme.grey_100};
    padding: 12px;
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

const LoginLayout = () => {
    const [errorMessage, setErrorMessage] = React.useState(null)
    const handleOAuth = async e => {
        e.preventDefault()
        Cookies.set('__hstn_auth_origin', window.location.href)
        await fetch("/auth/login", {
            method: 'GET'
        }).then(data => {
            if (!data.ok) {
                setErrorMessage('Failed to get Google Auth URL')
            } else {
                data.text().then(text => {
                    window.location.href = text
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
            <GoogleButton onClick={handleOAuth}>Continue with Google</GoogleButton>
            <ErrorResponseField style={style}>{errorMessage}</ErrorResponseField>
        </LoginContainer>
    )
}

export default LoginLayout