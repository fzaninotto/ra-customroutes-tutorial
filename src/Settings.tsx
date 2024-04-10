import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  InputAdornment,
  Tabs,
  Tab,
  TextField,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Title, useAuthenticated } from "react-admin";

export const Settings = () => {
  useAuthenticated();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Card sx={{ mt: 2 }}>
      <Title title="Settings" />
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Profile" />
          <Tab label="Password" />
          <Tab label="Team" />
          <Tab label="Billing" />
          <Tab label="Notifications" />
        </Tabs>
      </Box>
      <CardContent>
        {value === 0 && (
          <Box maxWidth={300}>
            <TextField
              fullWidth
              label="website"
              defaultValue="https://www.acme.com"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LanguageIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Email"
              defaultValue="dnedry@acme.com"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Phone"
              defaultValue="+62 523 567 45 77"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Joined"
              defaultValue="26 March, 2023"
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarMonthIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              fullWidth
              color="primary"
              disabled
              sx={{ mt: 1 }}
            >
              Save Changes
            </Button>
          </Box>
        )}
        {value === 1 && <div>Password</div>}
        {value === 2 && <div>Team</div>}
        {value === 3 && <div>Billing</div>}
        {value === 4 && <div>Notifications</div>}
      </CardContent>
    </Card>
  );
};
