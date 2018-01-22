import QUnit from 'steal-qunit';
import { ViewModel } from './my-component';

// ViewModel unit tests
QUnit.module('donejs-bug/my-component');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the my-component component');
});
