import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FormControl, MenuItem } from '@material-ui/core';
import { Row } from 'ui/layout';
import { P } from 'ui/text';
import { IThemes } from 'themes/CurrentTheme';
import { Session } from 'stores/session';
import { ThemedSelect } from 'ui/input';

const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const NavbarRoot = styled(AppBar)`
  grid-area: navbar;
  background-color: ${props => props.theme.colors.componentBackgroundColor};
  color: ${props => props.theme.colors.text};
`;

export const Navbar: FunctionComponent = () => {
  const session = new Session();
  return (
    <NavbarRoot position="static">
      <Toolbar>
        <NavbarContainer>
          <Typography variant="h6">
            Dex
          </Typography>
          <Row>
            <FormControl>
              <ThemedSelect
                startAdornment={<P> Theme:</P>}
                onChange={(e) => session.setTheme(e.target.value as IThemes)}
                value={session.currentTheme}
              >
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
