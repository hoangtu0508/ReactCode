import Home from "../pages/Home/Home";
import News from "../pages/News/News";
import Contact from "../pages/Contact/Contact";
import UseState from "../pages/Hooks/UseState";
import UseEffect from "../pages/Hooks/UseEffect";
import UseRef from "../pages/Hooks/UseRef";
import UseCallback from "../pages/Hooks/UseCallback";
import UseMemo from "../pages/Hooks/UseMemo";
import UseReducer from "../pages/Hooks/UseReducer";
import UseContext from "../pages/Hooks/UseContext";
import GlobalState from "../pages/Hooks/GlobalState";
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
    {path: '/usecontext', component: UseContext},
    {path: '/useglobalstate', component: GlobalState},

]



const privateRoutes = []

export {publicRoutes, privateRoutes};