import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({
    isAuthenticated,
    component: Componet,
    ...rest
}) => {


    return (
        <Route { ...rest }
            component={ ( props ) => (
                ( isAuthenticated )
                    ? ( <Redirect to="/" /> )
                    : ( <Componet { ...props } /> )
            )}
        
        
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
