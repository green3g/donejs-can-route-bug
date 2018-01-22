import QUnit from 'steal-qunit';
import { ViewModel } from './child-component';

// ViewModel unit tests
QUnit.module('donejs-bug/child-component');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the child-component component');
});
