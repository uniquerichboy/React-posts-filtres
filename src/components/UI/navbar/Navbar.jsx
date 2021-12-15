import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const Navbar = () => {
    return (
        <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
            <Menu.Item key="2"><Link to="/">News</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/about">About</Link></Menu.Item>
        </Menu>
      </Header>

        // <div className="navbar">
        //     <div className="navbar__links">
        //         <Link to="/about">About</Link>
        //         <Link to="/">posts</Link>
        //     </div>
        // </div>
    );
};

export default Navbar;