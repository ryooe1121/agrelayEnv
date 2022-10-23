import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// components
import KikaiSetting from './setting/kikai-setting/kikai-setting'

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

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="圃場設定" {...a11yProps(0)} />
          <Tab label="作物設定" {...a11yProps(1)} />
          <Tab label="作業設定" {...a11yProps(2)} />
          <Tab label="機械設定" {...a11yProps(3)} />
          <Tab label="農薬設定" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        ↓圃場設定のUIを設定します
      </TabPanel>
      <TabPanel value={value} index={1}>
        ↓作物設定のUIを設定します
      </TabPanel>
      <TabPanel value={value} index={2}>
        ↓作業設定のUIを設定します
      </TabPanel>
      <TabPanel value={value} index={3}>
        <KikaiSetting />
      </TabPanel>
      <TabPanel value={value} index={4}>
        ↓農薬設定のUIを設定します
      </TabPanel>
    </Box>
  );
}


export default BasicTabs;