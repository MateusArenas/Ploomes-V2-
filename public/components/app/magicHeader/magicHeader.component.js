(function(){
'use strict'
angular.module('q',[]).component('magicHeader',{
  templateUrl: './components/app/magicHeader/magicHeader.component.html',
  controller: [ controller],
  controllerAs: 'notCtrl',
  bindings: {
    user: '@', ///taipo de binding
  },
});
function controller(){
  const ctrl = this;


}



})();