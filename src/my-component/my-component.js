import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './my-component.less';
import view from './my-component.stache';
import route from 'can-route';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the my-component component'
  },

  routeData: {
    get(){
      return route.data;
    }
  }
});

export default Component.extend({
  tag: 'my-component',
  ViewModel,
  view
});
