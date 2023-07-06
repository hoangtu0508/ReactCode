import Home from "../pages/Home/Home";
import News from "../pages/News/News";
import Contact from "../pages/Contact/Contact";
import UseState from "../pages/Hooks/UseState";
import UseEffect from "../pages/Hooks/UseEffect";
import UseRef from "../pages/Hooks/UseRef";
import UseCallback from "../pages/Hooks/UseCallback";
import UseMemo from "../pages/Hooks/UseMemo";
import UseReducer from "../pages/Hooks/UseReducer";
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/news', component: News},
    {path: '/contact', component: Contact},
    {path: '/usestate', component: UseState},
    {path: '/useeffect', component: UseEffect},
    {path: '/useref', component: UseRef},
    {path: '/usecallback', component: UseCallback},
    {path: '/usememo', component: UseMemo},
    {path: '/usereducer', component: UseReducer},

]



const privateRoutes = []

export {publicRoutes, privateRoutes};