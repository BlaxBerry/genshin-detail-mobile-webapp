import{a as x,r as d}from"./react.42aed624.js";import"./react-dom.19f2fe6a.js";import{c as g,d as E,_ as C,a as M}from"./@babel.f3c2a14e.js";import{j as f}from"./@mui.02662e57.js";const v=x.createContext(null);function h(i,r){var o=function(t){return r&&d.exports.isValidElement(t)?r(t):t},a=Object.create(null);return i&&d.exports.Children.map(i,function(e){return e}).forEach(function(e){a[e.key]=o(e)}),a}function b(i,r){i=i||{},r=r||{};function o(p){return p in r?r[p]:i[p]}var a=Object.create(null),e=[];for(var t in i)t in r?e.length&&(a[t]=e,e=[]):e.push(t);var n,l={};for(var s in r){if(a[s])for(n=0;n<a[s].length;n++){var u=a[s][n];l[a[s][n]]=o(u)}l[s]=o(s)}for(n=0;n<e.length;n++)l[e[n]]=o(e[n]);return l}function c(i,r,o){return o[r]!=null?o[r]:i.props[r]}function V(i,r){return h(i.children,function(o){return d.exports.cloneElement(o,{onExited:r.bind(null,o),in:!0,appear:c(o,"appear",i),enter:c(o,"enter",i),exit:c(o,"exit",i)})})}function j(i,r,o){var a=h(i.children),e=b(r,a);return Object.keys(e).forEach(function(t){var n=e[t];if(!!d.exports.isValidElement(n)){var l=t in r,s=t in a,u=r[t],p=d.exports.isValidElement(u)&&!u.props.in;s&&(!l||p)?e[t]=d.exports.cloneElement(n,{onExited:o.bind(null,n),in:!0,exit:c(n,"exit",i),enter:c(n,"enter",i)}):!s&&l&&!p?e[t]=d.exports.cloneElement(n,{in:!1}):s&&l&&d.exports.isValidElement(u)&&(e[t]=d.exports.cloneElement(n,{onExited:o.bind(null,n),in:u.props.in,exit:c(n,"exit",i),enter:c(n,"enter",i)}))}}),e}var F=Object.values||function(i){return Object.keys(i).map(function(r){return i[r]})},T={component:"div",childFactory:function(r){return r}},m=function(i){g(r,i);function r(a,e){var t;t=i.call(this,a,e)||this;var n=t.handleExited.bind(E(t));return t.state={contextValue:{isMounting:!0},handleExited:n,firstRender:!0},t}var o=r.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},r.getDerivedStateFromProps=function(e,t){var n=t.children,l=t.handleExited,s=t.firstRender;return{children:s?V(e,l):j(e,n,l),firstRender:!1}},o.handleExited=function(e,t){var n=h(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(l){var s=C({},l.children);return delete s[e.key],{children:s}}))},o.render=function(){var e=this.props,t=e.component,n=e.childFactory,l=M(e,["component","childFactory"]),s=this.state.contextValue,u=F(this.state.children).map(n);return delete l.appear,delete l.enter,delete l.exit,t===null?f(v.Provider,{value:s,children:u}):f(v.Provider,{value:s,children:f(t,{...l,children:u})})},r}(x.Component);m.propTypes={};m.defaultProps=T;const G=m;export{G as T};
