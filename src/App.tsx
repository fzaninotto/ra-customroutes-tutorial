import { Admin, CustomRoutes, Resource } from "react-admin";
import { Route } from "react-router-dom";

import { authProvider } from "./providers/authProvider";
import { dataProvider } from "./providers/dataProvider";
import { MyLayout } from "./layout/MyLayout";
import products from "./products";
import customers from "./customers";
import groups from "./groups";
import orders from "./orders";
import { Settings } from "./Settings";

export const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    layout={MyLayout}
  >
    <Resource name="orders" {...orders} />
    <Resource name="customers" {...customers} />
    <Resource name="groups" {...groups} />
    <Resource name="products" {...products} />
    <CustomRoutes>
      <Route path="/settings" element={<Settings />} />
    </CustomRoutes>
  </Admin>
);
