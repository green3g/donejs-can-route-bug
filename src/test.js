import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'donejs-bug/models/test';

import 'donejs-bug/my-component/my-component-test';

import 'donejs-bug/child-component/child-component-test';

F.attach(QUnit);

QUnit.module('donejs-bug functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('donejs-bug main page shows up', function() {
  F('title').text('donejs-bug', 'Title is set');
});
