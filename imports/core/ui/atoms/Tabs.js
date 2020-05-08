import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  CardBody,
} from 'reactstrap';

const Tabs = ({ tabs, activeTab, setActiveTab, position }) => {
  const [active, setActive] = useState(activeTab || tabs[0].tab);

  const toggle = (tab) => {
    if (setActiveTab) {
      setActiveTab(tab);
    } else {
      setActive(tab);
    }
  };

  const classNamePosition = position ? `tabs-${position}` : '';

  return (
    <div className={'tabs-container'}>
      <div className={classNamePosition}>
        <Nav tabs>
          {tabs.map(({ title, tab }) => (
            <NavItem key={tab}>
              <NavLink
                active={activeTab || active === tab}
                onClick={() => toggle(tab)}
              >
                {title}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <TabContent activeTab={activeTab || active}>
          {tabs.map(({ tab, content }) => (
            <TabPane key={tab} tabId={tab}>
              <CardBody>
                {content}
              </CardBody>
            </TabPane>
          ))}
        </TabContent>
      </div>
    </div>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.func,
  position: PropTypes.oneOf(['left', 'right']),
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    tab: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
  })).isRequired,
};

export default Tabs;
