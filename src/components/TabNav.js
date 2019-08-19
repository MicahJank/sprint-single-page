import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import WelcomePage from './WelcomePage.js';



// TODO: Add missing tabs below

const panes = [
    { menuItem: 'Home Page', render: () => <Tab.Pane><WelcomePage /></Tab.Pane> },
    { menuItem: 'Characters', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Locations', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    { menuItem: 'Episodes', render: () => <Tab.Pane>Tab 4 Content</Tab.Pane> },
  ]

export default function TabNav() {

    return (
        <Tab panes={panes} />
    );
};
