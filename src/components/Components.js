// Managers and factories
import { layout } from 'modelui-core-runtime';

// Components
import { registerACE } from './ACE';

export default function registerComponents(component_manager) {

    if (!component_manager) {
        component_manager = layout.Manager.ComponentManager.getInstance();
    }

    registerACE(component_manager);

}