import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import { FormControl, MenuItem } from '@material-ui/core';
import { Row } from '../ui/layout';
import { P } from '../ui/text';
import { IThemes } from '../themes/CurrentTheme';

const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const NavbarRoot = styled(AppBar)`
  grid-area: navbar;
  background-color: ${props => props.theme.colors.componentBackgroundColor};
  color: ${props => props.theme.colors.text};
`

const ThemedSelect = styled(Select)`
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
          <Row>
            <FormControl>
              <ThemedSelect startAdornment={<P> Theme: </P>}>
                <MenuItem value={IThemes.light}> Light </MenuItem>
                <MenuItem value={IThemes.dark}> Dark </MenuItem>
              </ThemedSelect>
            </FormControl>
            <Button color="inherit">Account</Button>
          </Row>
        </NavbarContainer>
      </Toolbar>
    </NavbarRoot>
  );
}

export default Navbar;
