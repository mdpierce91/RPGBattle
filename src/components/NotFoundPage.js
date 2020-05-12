import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404 - <NavLink exact={true} to="/">Go Home</NavLink>
    </div>
);
export default NotFoundPage;