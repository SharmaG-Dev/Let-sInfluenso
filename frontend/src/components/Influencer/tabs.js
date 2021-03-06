import PropTypes from 'prop-types';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Favorite, Person, PersonPin } from '@mui/icons-material';
import ProfileFeeds from './probilefeeds';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ProfileVideo from './profileVideo';
import FeedIcon from '@mui/icons-material/Feed';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import UpdateProfile from './UpdateProfile';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={<FeedIcon/>} label="Feeds" {...a11yProps(0)} />
          <Tab icon={<OndemandVideoIcon/>} label="Videos" {...a11yProps(1)} />
          <Tab icon={<ManageAccountsIcon/>} label="Update" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ProfileFeeds/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProfileVideo/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <UpdateProfile/>
      </TabPanel>
    </Box>
  );
}