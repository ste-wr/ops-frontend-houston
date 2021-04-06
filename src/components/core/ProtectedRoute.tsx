import * as React from 'react'
import { Redirect } from 'react-router-dom'
import { useUserState } from '../core/Context'

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
    const userState = useUserState()
    return (
      <Component {...rest} render={
        props => {
          if (userState.isLoggedIn) {
            return <Component {...rest} {...props} />
          } else {
            return <Redirect to={
              {
                pathname: '/',
                state: {
                  from: props.location
                }
              }
            } />
          }
        }
      } />
    )
  }
  
  export default ProtectedRoute;