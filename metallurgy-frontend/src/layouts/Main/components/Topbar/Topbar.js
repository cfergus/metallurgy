import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import palette from '../../../../theme/palette';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    backgroundColor: palette.primary.dark,
  },
  flexGrow: {
    flexGrow: 1,
  },
  link: {
    'font-family': 'Roboto',
    display: 'flex',
    alignItems: 'center',
    padding: '10px 15px',
    textDecoration: 'none',
    color: palette.text.link,
    borderRadius: '5px',
    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    '&:hover': {
      textDecoration: 'none',
      color: palette.text.link,
      backgroundColor: 'rgba(213,213,226,.1)',
    },
  },
  signOutButton: {
    marginLeft: theme.spacing(1),
  },
  cutleaf: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: '26px',
    marginLeft: 7,
  },
}));

const Topbar = (props) => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>

        <IconButton onClick={onSidebarOpen}>
          <MenuIcon />
        </IconButton>

        <RouterLink to="/" className={classes.link} >
          {/* <img alt="Logo" src="/images/logo/logo.svg" /> */}
          Metal App
        </RouterLink>
        <div className={classes.flexGrow} />
        <a className={classes.link} rel="noopener noreferrer" target="_blank" href="https://www.cutleafstudios.com">
          {/* <img alt="Cutleaf Studios" src="/images/cutleaf_logo.svg" /> */}
          <span className={classes.cutleaf}>CutLeaf Studios</span>
        </a>
       
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
};

export default Topbar;