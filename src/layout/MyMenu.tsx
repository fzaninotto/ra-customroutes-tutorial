import { Menu } from "react-admin";
import SettingsIcon from "@mui/icons-material/Settings";

export const MyMenu = () => (
  <Menu>
    <Menu.ResourceItems />
    <Menu.Item
      to="/settings"
      primaryText="Settings"
      leftIcon={<SettingsIcon />}
    />
  </Menu>
);
