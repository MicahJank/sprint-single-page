import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import WelcomePage from './WelcomePage.js';
import CharacterList from './CharacterList.js';
import LocationList from './LocationsList.js';
import EpisodeList from './EpisodeList.js';



// TODO: Add missing tabs below

const panes = [
    { menuItem: 'Home Page', render: () => <Tab.Pane><WelcomePage /></Tab.Pane> },
    { menuItem: 'Characters', render: () => <Tab.Pane><CharacterList /></Tab.Pane> },
    { menuItem: 'Locations', render: () => <Tab.Pane><LocationList /></Tab.Pane> },
    { menuItem: 'Episodes', render: () => <Tab.Pane><EpisodeList /></Tab.Pane> },
  ]

export default function TabNav() {

    return (
        <Tab panes={panes} />
    );
};
