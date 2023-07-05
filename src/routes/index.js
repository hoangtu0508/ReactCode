import Home from "../pages/Home/Home";
import News from "../pages/News/News";
import Contact from "../pages/Contact/Contact";
import UseState from "../pages/Hooks/UseState";
import UseEffect from "../pages/Hooks/UseEffect";
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/news', component: News},
    {path: '/contact', component: Contact},
    {path: '/usestate', component: UseState},
    {path: '/useeffect', component: UseEffect}
]



const privateRoutes = []

export {publicRoutes, privateRoutes};