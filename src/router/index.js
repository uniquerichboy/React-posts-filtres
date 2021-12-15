import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import PostidPage from "../pages/PostidPage";

export const privateRoutes = [
    { path: '/', component: <Posts />, exact: true },
    { path: '/posts/:id', component: <PostidPage />, exact: true },
    { path: '/about', component : <About />, exact: true },
];

export const publicRoutes = [
    { path: '/', component: <Login />, exact: true },
];