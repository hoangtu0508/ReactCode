import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import {publicRoutes} from '../src/routes/index';
import DefaultLayout from "./component/Layout/DefaultLayout";

function App() {
 
  return (
    <div>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout === null ?  Fragment : DefaultLayout;
            const Page = route.component;
            return <Route key={index} path={route.path} 
            element={
              <Layout>
                <Page />
              </Layout>}/>
          })}
        </Routes>
    </div>
  );
}

export default App;
