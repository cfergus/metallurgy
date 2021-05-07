import palette from '../palette';

const MuiTableRow = {
  root: {
    '&$selected': {
      backgroundColor: palette.background.default,
    },
    '&$hover': {
      '&:hover': {
        backgroundColor: palette.primary.action,
      },
    },
  },
};

export default MuiTableRow