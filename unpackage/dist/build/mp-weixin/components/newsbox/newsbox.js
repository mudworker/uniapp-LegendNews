(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/newsbox/newsbox"],{"271e":function(t,n,e){"use strict";e.r(n);var a=e("b84f"),i=e.n(a);for(var c in a)["default"].indexOf(c)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(c);n["default"]=i.a},"2c83":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},i=[]},"4fea":function(t,n,e){"use strict";var a=e("7afd"),i=e.n(a);i.a},"7afd":function(t,n,e){},b84f:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"newsbox",props:{item:{type:Object,default:function(){return{id:"",title:"",author:"",hits:"",picurl:"../../static/images/nopic.jpg"}}}},data:function(){return{}},methods:{toDetail:function(n){t.navigateTo({url:"/pages/detail/detail?id=".concat(n.id,"&cid=").concat(n.classid)})}}};n.default=e}).call(this,e("543d")["default"])},f0c51:function(t,n,e){"use strict";e.r(n);var a=e("2c83"),i=e("271e");for(var c in i)["default"].indexOf(c)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(c);e("4fea");var u=e("f0c5"),f=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"5f904fc2",null,!1,a["a"],void 0);n["default"]=f.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/newsbox/newsbox-create-component',
    {
        'components/newsbox/newsbox-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f0c51"))
        })
    },
    [['components/newsbox/newsbox-create-component']]
]);
