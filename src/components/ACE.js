import React from 'react';

import ACEComponent, { events, triggers, config } from './ACEComponent'

export function ACE(props) {
    // lets enumerate schema to extract uiSchema and validation
    return (<ACEComponent {...props} />);
}

export function registerACE(component_manager) {
    // self register component to layout manager
    component_manager.registerComponent({
        component: ACE,
        type: config.type,
        events: events,
        triggers: triggers,
        config: config
    });
}