import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import { JudgesListRoute } from '/imports/user/api/routes';
import { StageListRoute, ParticipantListRoute } from '/imports/participant/api/routes';

const TopNavbar = () => {
  const menu = [
    {
      route: JudgesListRoute,
      title: 'Adjudicators',
    },
    {
      route: StageListRoute,
      title: 'Stages',
    },
    {
      route: ParticipantListRoute,
      title: 'Participants',
    },
  ];

  return (
    <Navbar color={'dark'} dark expand>
      <NavbarBrand href={'/'}>Quick System</NavbarBrand>
      <Nav className={'mr-auto'} navbar>
        {menu.map(({ route, title }) => (
          <NavItem key={title} active={route.isActive()}>
            <NavLink active={route.isActive()} href={route.path()}>
              {title}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </Navbar>
  );
};

export default TopNavbar;
