import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';


export const PrivateRoute = ({
    isAuthenticated,
    component: Componet,
    ...rest
}) => {

 
    return (
        <Route { ...rest }
            component={ ( props ) => (
                ( isAuthenticated )
                    ? ( <Componet { ...props } /> )
                    : ( <Redirect to="/auth/login" /> )
            )}
        
        
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
