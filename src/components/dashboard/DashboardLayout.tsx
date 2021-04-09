import { useEffect } from 'react'

export const DashboardLayout = () => {
    useEffect(() => {
        const fetchData = async () => {
            await fetch("/system/dashboard", {
                method: 'GET'
            }).then(res => {
                if(res.ok) {
                    res.text().then(data => {
                        console.log(data)
                    })
                } else {
                    console.log('BAD')
                }
            })
        }
        fetchData()
    },[])
    return (
        <div>
            <p>Dashboard</p>
        </div>
    )
}