import React from 'react';
import {Link} from "react-router";

const NavItem = ({item}) => {
    return (
        <Link to={`${item.route}`}
              className="nav-item btn btn-danger mx-1">{item.title}</Link>
    );
};

export default NavItem;