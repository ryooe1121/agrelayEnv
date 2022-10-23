import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon, Typography
} from '@mui/material';
import { Search as SearchIcon } from '../../../icons/search';

// mui
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Delete from '@mui/icons-material/Delete';

export const SettingListToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        m: -1
      }}
    >
      <Box sx={{ m: 1 }}>
        <Button
          startIcon={<AddIcon />}
          sx={{ mr: 1 }}
        >
          新規
        </Button>
        <Button
          startIcon={<EditIcon />}
          sx={{ mr: 0 }}
        >
          編集
        </Button>
        <Button
          startIcon={<Delete />}
          sx={{ mr: 0 }}
        >
          削除
        </Button>
      </Box>      
    </Box>
  </Box>
);
