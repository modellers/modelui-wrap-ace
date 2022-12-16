import React from 'react';
import { action } from '@storybook/addon-actions' // storybook action handler
// test utils
import { util } from 'modelui-core-runtime'
import registerComponents from './Components';

// components
import ACEComponent from './ACEComponent';
import { triggers, events, config } from './ACEComponent'
import { layout } from 'modelui-core-runtime'

/// Event addon
export default {
  title: 'Extras/ACE',
  component: ACEComponent,
  argTypes: util.StoryUtil.createStoryArgumentTypesFromSchema(config.options)
};

const configure_js = {
  maxLines: 5,
  fontSize: 16,
  tabSize: 8,
  printMargin: false,
  wrap: true,
  theme: 'github' //'https://ace.c9.io/build/src/theme-nord_dark.js'
}

const populate_data = {
  id: "THIS-IS-THE-ID-32",
  value: "// some code here"
}

export const ACEBasic = (args) => {
  const overrides = { "configure": configure_js, "populate": populate_data, "replace": populate_data }
  const props = {
    id: 'ACEBasic_test_id',
    type: 'code-editor',
    data: {
      'value': 'John Doe',
      'id': 'THIS-IS-THE-ID'
    },
    config: { options: args },
    schema: {
      type: 'object',
      properties: {
        value: { type: 'string' }
      }
    }
  }

  return (
    <div>
      { util.StoryUtil.prepStoryComponent(layout.Manager.ComponentManager.getInstance(), action, registerComponents, props, triggers, events, overrides)}
      <ACEComponent {...props} />
    </div>
  );
};

ACEBasic.args = {
  theme: config.options.properties.theme.default,
  syntax: config.options.properties.syntax.default,
  fontSize: config.options.properties.fontSize.default,
  tabSize: config.options.properties.tabSize.default,
  tabWithSpaces: config.options.properties.tabWithSpaces.default,
  maxLines: config.options.properties.maxLines.default,
  printMargin: config.options.properties.printMargin.default,
  enabled: config.options.properties.enabled.default,
}
