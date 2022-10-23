import { SettingListToolbar } from './setting-list-toolbar'
import { Grid, Container } from '@mui/material';

import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon, Typography
} from '@mui/material';
import { KikaiResults } from './kikai-list-results'
import TagKikaiCollection from './TagKikaiCollection'
export default function KikaiSetting() {
    return (
        <>
        <SettingListToolbar />
        <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >   
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            
        <TagKikaiCollection />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            
        <TagKikaiCollection />
          </Grid>
        </Grid>
      </Container>
    </Box>
        </>
    )
}