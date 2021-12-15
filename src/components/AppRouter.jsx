import React, {useContext} from 'react';
import { Routes, Route } from "react-router-dom";
import { AuthContext } from '../context';
import { publicRoutes, privateRoutes } from '../router';

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    return (
        <React.Fragment>
            { isAuth ?
            <Routes>
                { privateRoutes.map(route => 
                <Route 
                    key={route.path} 
                    path={route.path} 
                    element={route.component} 
                    exact={route.exact} />
                )}
            </Routes> :
            <Routes>
                { publicRoutes.map(route => 
                <Route 
                    path={route.path}
                    key={route.path}
                    element={route.component} 
                    exact={route.exact} />
                )}
            </Routes>
            }
        </React.Fragment>
    );
};

export default AppRouter;