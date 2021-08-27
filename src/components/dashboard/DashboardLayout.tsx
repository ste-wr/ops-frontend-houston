import * as React from 'react'
import { useUserState } from '../core/Context'

const fetchBase = async (token: string) => {
    return fetch('http://localhost:4000/api/1/platform/base', {
        method: 'GET',
        headers: {
            'x-access-token': token
        }
    })
    .then(response => response.json())
}

const DashboardLayout = () => {
    const userState = useUserState()
    React.useEffect(() => {
        async function getBase() {
            await fetchBase(JSON.stringify(userState.token))
            .then(data => {
                if(data.code !== 200) {
                    //userState.unsetToken(false)
                    console.log(data)
                    // TODO HERE, handle logout
                }
            })
        }
        getBase()
    }, [userState.token])
    return(
        <div>
            <p>Dashboard</p>
        </div>
    )
}

export default DashboardLayout

