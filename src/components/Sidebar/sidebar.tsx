import React from 'react';
import { Nav, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';

import { getTheme, initializeIcons } from "@fluentui/react";
import { useState } from 'react';


initializeIcons();

const navStyles: Partial<INavStyles> = {
  root: {
    width: 250,
    height: 673,
    boxSizing: 'border-box',
    border: '1px solid black',
    overflowY: 'auto',
    padding: '5px',
    marginTop: '-1.5vh',
    top: '42px',
  },
  link: {
    whiteSpace: 'normal',
    lineHeight: 'inherit',
  },
};

const navLinkGroups: INavLinkGroup[] = [
  {
    name: 'Dashboard',
    expandAriaLabel: 'Expand Dashboard section',
    collapseAriaLabel: 'Collapse Dashboard section',
    links: [
      {
        name: 'Workspaces',
        url: 'http://example.com',
        icon: 'ProductVariant',
        key: 'key3',
        target: '_blank',
        title: '',
      },
      {
        name: 'Usuários',
        url: 'http://msn.com',
        icon: 'Contact',
        key: 'key4',
        target: '_blank',
        title: '',
      },
      {
        name: 'Configurações',
        url: 'http://cnn.com',
        icon: 'ConfigurationSolid',
        key: 'key7',
        // target: '_blank',
        title: '',
      },
    ],
  },
];




const SideBar = (props: any) => {
  return (
    <Nav styles={navStyles} groups={navLinkGroups} />
  );
};


export default SideBar;