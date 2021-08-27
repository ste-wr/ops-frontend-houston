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

const ErrorResponseField = styled.div`
    background-color: ${(props: any) => props.theme.red_default};
    border-radius: 8px;
    min-width: 100%;
    padding: 6px 8px;
    color: ${(props: any) => props.theme.red_default};
    box-sizing: border-box;
    text-align: center;
`

async function loginUser(credentials) {
    return fetch("http://localhost:4000/api/1/auth/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

interface loginResponse {
    code: number,
    message: string,
    token: string
}

const LoginLayout = ( { setToken }) => {
    const [username, setUsername] = React.useState(null)
    const [password, setPassword] = React.useState(null)
    const [errorMessage, setErrorMessage] = React.useState(null)
    const handleLogin = async (e) => {
        e.preventDefault()
        await loginUser({
            username,
            password
        }).then((data: loginResponse) => {
            if(!data.token) {
                setErrorMessage(data.message)
            } else {
                setErrorMessage('')
                const token = {
                    jwt: data.token
                }
                setToken(token)
            }
        })
    }
    let style={
        display: ""
    }
    if(!errorMessage) style.display = "none";
    return (
        <LoginContainer className="login-form">
            <h1>Please Log In</h1>
            <form onSubmit={handleLogin}>
                <label>
                    <p>Email Address</p>
                    <input type="text" onChange={e => setUsername(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <ErrorResponseField style={style}>{errorMessage}</ErrorResponseField>
        </LoginContainer>
    )
}

export default LoginLayout