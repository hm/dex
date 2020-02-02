import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const NavbarRoot = styled(AppBar)`
  background-color: ${props => props.theme.colors.backgroundColor};
  color: ${props => props.theme.colors.text};
`

const Navbar: FunctionComponent = () => {
  return (
    <NavbarRoot position="static">
      <Toolbar>
        <NavbarContainer>
          <Typography variant="h6">
            Dex
          </Typography>
          <Button color="inherit">Account</Button>
        </NavbarContainer>
      </Toolbar>
    </NavbarRoot>
  );
}

export default Navbar;
