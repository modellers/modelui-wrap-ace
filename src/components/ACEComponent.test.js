/**
 * ListComponent tests
 * Testing DD events and actions integrety
 */

import ACEComponent, { events, triggers, config } from './ACEComponent';
import { ACE } from './ACE';
import { util } from 'modelui-core-runtime';
import { layout } from 'modelui-core-runtime'
import registerComponents from './Components';
import renderer from 'react-test-renderer';

describe('ACEComponent', () => {
  const tests = util.TestUtil.createComponentClassTests(
    layout.Manager.ComponentManager.getInstance(),
    registerComponents,
    renderer,    
    config,
    [
      'submit',
      'enable',
      'disable',
      'clear',
      'populate',
      'replace'
      // 'configure'
    ],
    [
      'changed',
      'enabled',
      'disabled',
      'submitted',
      'cleared',
      'populated',
      'replaced',
      'invalidated',
      'validated'
    ]);
  tests.forEach((t) => { test(t.title, t.test); });
});

describe('ACEComponent', () => {
  const tests = util.TestUtil.createComponentRegisterTests(
    layout.Manager.ComponentManager.getInstance(),
    registerComponents,
    'code-editor',
    ACE,
    triggers,
    events,
    config,
    {}
  );
  tests.forEach((t) => { test(t.title, t.test); });
});
