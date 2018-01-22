import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './child-component.less';
import view from './child-component.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the child-component component'
  },
  count: {
    value: 0
  },
  increment(){
    this.count ++
  }
});

export default Component.extend({
  tag: 'child-component',
  ViewModel,
  view
});
