import Home from "../pages/Home/Home";
import Hooks from "../pages/News/News";
import Redux from "../pages/redux/index";
import UseState from "../pages/Hooks/UseState";
import UseEffect from "../pages/Hooks/UseEffect";
import UseRef from "../pages/Hooks/UseRef";
import UseCallback from "../pages/Hooks/UseCallback";
import UseMemo from "../pages/Hooks/UseMemo";
import UseReducer from "../pages/Hooks/UseReducer";
import UseContext from "../pages/Hooks/UseContext";
import GlobalState from "../pages/Hooks/GlobalState";

import Counter from "../pages/redux/features/couter/Counter"
import Posts from "../pages/redux/index"
const publicRoutes = [
    {path: '/', component: Home, layout : null},
    {path: '/hooks', component: Hooks},
    {path: '/redux', component: Redux},
    {path: '/usestate', component: UseState},
    {path: '/useeffect', component: UseEffect},
    {path: '/useref', component: UseRef},
    {path: '/usecallback', component: UseCallback},
    {path: '/usememo', component: UseMemo},
    {path: '/usereducer', component: UseReducer},
    {path: '/usecontext', component: UseContext},
    {path: '/useglobalstate', component: GlobalState},

    {path: '/counter', component: Counter},
    {path: '/posts', component: Posts},

]



const privateRoutes = []

export {publicRoutes, privateRoutes};