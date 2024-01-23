import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {HOME_ROUTE} from "../utils/consts";
import {adminRoutes, creatorRoutes, publicRoutes, userRoutes} from "../routes";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = () => {
    const {user} = useContext(Context)
    let role
    if(user.user) {
         role = user.user.role

    return (
        <Routes>
            {adminRoutes.map(({path, Component}) => (
                <Route key={path} path={path} element={role === 'ADMIN' ? <Component/> : <Navigate to="/"/>}/>
            ))}
            {creatorRoutes.map(({path, Component}) => (
                <Route key={path} path={path} element={role == 'CREATOR' ? <Component/> : <Navigate to="/"/>}/>
            ))}
            {userRoutes.map(({path, Component}) => (
                <Route key={path} path={path} element={role === 'USER' ? <Component /> : <Navigate to="/"/>}/>
            ))}
            {publicRoutes.map(({path, Component}) => (
                <Route key={path} path={path} element={<Component/>}/>
            ))}
            <Route path="*" element={<Navigate replace to={HOME_ROUTE}/>}/>
        </Routes>
    );
    }
};

export default observer(AppRouter);