(window.webpackJsonpstellar_admin_react=window.webpackJsonpstellar_admin_react||[]).push([[9],{161:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,s.default)((function(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];var r=null;return a.forEach((function(e){if(null==r){var a=e.apply(void 0,t);null!=a&&(r=a)}})),r}))};var l,r=t(162),s=(l=r)&&l.__esModule?l:{default:l};e.exports=a.default},162:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){function a(a,t,l,r,s,n){var c=r||"<<anonymous>>",i=n||l;if(null==t[l])return a?new Error("Required "+s+" `"+i+"` was not specified in `"+c+"`."):null;for(var o=arguments.length,m=Array(o>6?o-6:0),d=6;d<o;d++)m[d-6]=arguments[d];return e.apply(void 0,[t,l,c,s,i].concat(m))}var t=a.bind(null,!1);return t.isRequired=a.bind(null,!0),t},e.exports=a.default},163:function(e,a,t){e.exports=t.p+"static/media/logo-dark.c7546414.svg"},367:function(e,a,t){"use strict";var l=t(1),r=t(3),s=t(8),n=t.n(s),c=t(0),i=t.n(c),o=(t(161),t(19)),m=t.n(o),d={type:m.a.string.isRequired,as:m.a.elementType},u=i.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"div":t,c=e.className,o=e.type,m=Object(r.a)(e,["as","className","type"]);return i.a.createElement(s,Object(l.a)({},m,{ref:a,className:n()(c,o&&o+"-feedback")}))}));u.displayName="Feedback",u.propTypes=d,u.defaultProps={type:"valid"};var f=u,b=i.a.createContext({controlId:void 0}),p=t(10),v=i.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,o=e.bsCustomPrefix,m=e.className,d=e.isValid,u=e.isInvalid,f=e.isStatic,v=e.as,N=void 0===v?"input":v,h=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),x=Object(c.useContext)(b),y=x.controlId;return s=x.custom?Object(p.b)(o,"custom-control-input"):Object(p.b)(s,"form-check-input"),i.a.createElement(N,Object(l.a)({},h,{ref:a,id:t||y,className:n()(m,s,d&&"is-valid",u&&"is-invalid",f&&"position-static")}))}));v.displayName="FormCheckInput",v.defaultProps={type:"checkbox"};var N=v,h=i.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,o=e.className,m=e.htmlFor,d=Object(r.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),u=Object(c.useContext)(b),f=u.controlId;return t=u.custom?Object(p.b)(s,"custom-control-label"):Object(p.b)(t,"form-check-label"),i.a.createElement("label",Object(l.a)({},d,{ref:a,htmlFor:m||f,className:n()(o,t)}))}));h.displayName="FormCheckLabel";var x=h,y=i.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,o=e.bsCustomPrefix,m=e.inline,d=e.disabled,u=e.isValid,v=e.isInvalid,h=e.feedback,y=e.className,O=e.style,j=e.title,E=e.type,w=e.label,P=e.children,g=e.custom,k=e.as,C=void 0===k?"input":k,I=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),F="switch"===E||g;s=F?Object(p.b)(o,"custom-control"):Object(p.b)(s,"form-check");var R=Object(c.useContext)(b).controlId,_=Object(c.useMemo)((function(){return{controlId:t||R,custom:F}}),[R,F,t]),V=null!=w&&!1!==w&&!P,L=i.a.createElement(N,Object(l.a)({},I,{type:"switch"===E?"checkbox":E,ref:a,isValid:u,isInvalid:v,isStatic:!V,disabled:d,as:C}));return i.a.createElement(b.Provider,{value:_},i.a.createElement("div",{style:O,className:n()(y,s,F&&"custom-"+E,m&&s+"-inline")},P||i.a.createElement(i.a.Fragment,null,L,V&&i.a.createElement(x,{title:j},w),(u||v)&&i.a.createElement(f,{type:u?"valid":"invalid"},h))))}));y.displayName="FormCheck",y.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},y.Input=N,y.Label=x;var O=y,j=(t(33),i.a.forwardRef((function(e,a){var t,s,o=e.bsPrefix,m=e.type,d=e.size,u=e.id,f=e.className,v=e.isValid,N=e.isInvalid,h=e.plaintext,x=e.readOnly,y=e.as,O=void 0===y?"input":y,j=Object(r.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),E=Object(c.useContext)(b).controlId;if(o=Object(p.b)(o,"form-control"),h)(s={})[o+"-plaintext"]=!0,t=s;else if("file"===m){var w;(w={})[o+"-file"]=!0,t=w}else{var P;(P={})[o]=!0,P[o+"-"+d]=d,t=P}return i.a.createElement(O,Object(l.a)({},j,{type:m,ref:a,readOnly:x,id:u||E,className:n()(f,t,v&&"is-valid",N&&"is-invalid")}))})));j.displayName="FormControl",j.Feedback=f;var E=j,w=i.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,o=e.children,m=e.controlId,d=e.as,u=void 0===d?"div":d,f=Object(r.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(p.b)(t,"form-group");var v=Object(c.useMemo)((function(){return{controlId:m}}),[m]);return i.a.createElement(b.Provider,{value:v},i.a.createElement(u,Object(l.a)({},f,{ref:a,className:n()(s,t)}),o))}));w.displayName="FormGroup";var P=w,g=["xl","lg","md","sm","xs"],k=i.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,c=e.as,o=void 0===c?"div":c,m=Object(r.a)(e,["bsPrefix","className","as"]),d=Object(p.b)(t,"col"),u=[],f=[];return g.forEach((function(e){var a,t,l,r=m[e];if(delete m[e],null!=r&&"object"===typeof r){var s=r.span;a=void 0===s||s,t=r.offset,l=r.order}else a=r;var n="xs"!==e?"-"+e:"";null!=a&&u.push(!0===a?""+d+n:""+d+n+"-"+a),null!=l&&f.push("order"+n+"-"+l),null!=t&&f.push("offset"+n+"-"+t)})),u.length||u.push(d),i.a.createElement(o,Object(l.a)({},m,{ref:a,className:n.a.apply(void 0,[s].concat(u,f))}))}));k.displayName="Col";var C=k,I=i.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.column,o=e.srOnly,m=e.className,d=e.htmlFor,u=Object(r.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),f=Object(c.useContext)(b).controlId;t=Object(p.b)(t,"form-label");var v=n()(m,t,o&&"sr-only",s&&"col-form-label");return d=d||f,s?i.a.createElement(C,Object(l.a)({as:"label",className:v,htmlFor:d},u)):i.a.createElement("label",Object(l.a)({ref:a,className:v,htmlFor:d},u))}));I.displayName="FormLabel",I.defaultProps={column:!1,srOnly:!1};var F=I,R=i.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,c=e.as,o=void 0===c?"small":c,m=e.muted,d=Object(r.a)(e,["bsPrefix","className","as","muted"]);return t=Object(p.b)(t,"form-text"),i.a.createElement(o,Object(l.a)({},d,{ref:a,className:n()(s,t,m&&"text-muted")}))}));R.displayName="FormText";var _=R,V=i.a.forwardRef((function(e,a){return i.a.createElement(O,Object(l.a)({},e,{ref:a,type:"switch"}))}));V.displayName="Switch",V.Input=O.Input,V.Label=O.Label;var L=V,S=t(37),G=i.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.inline,c=e.className,o=e.validated,m=e.as,d=void 0===m?"form":m,u=Object(r.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(p.b)(t,"form"),i.a.createElement(d,Object(l.a)({},u,{ref:a,className:n()(c,o&&"was-validated",s&&t+"-inline")}))}));G.displayName="Form",G.defaultProps={inline:!1},G.Row=Object(S.a)("form-row"),G.Group=P,G.Control=E,G.Check=O,G.Switch=L,G.Label=F,G.Text=_;a.a=G},381:function(e,a,t){"use strict";t.r(a),t.d(a,"Login",(function(){return u}));var l=t(11),r=t(12),s=t(14),n=t(13),c=t(15),i=t(0),o=t.n(i),m=t(5),d=t(367),u=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(n.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"d-flex align-items-center auth px-0"},o.a.createElement("div",{className:"row w-100 mx-0"},o.a.createElement("div",{className:"col-lg-4 mx-auto"},o.a.createElement("div",{className:"auth-form-light text-left py-5 px-4 px-sm-5"},o.a.createElement("div",{className:"brand-logo"},o.a.createElement("img",{src:t(163),alt:"logo"})),o.a.createElement("h4",null,"Hello! let's get started"),o.a.createElement("h6",{className:"font-weight-light"},"Sign in to continue."),o.a.createElement(d.a,{className:"pt-3"},o.a.createElement(d.a.Group,{className:"d-flex search-field"},o.a.createElement(d.a.Control,{type:"email",placeholder:"Username",size:"lg",className:"h-auto"})),o.a.createElement(d.a.Group,{className:"d-flex search-field"},o.a.createElement(d.a.Control,{type:"password",placeholder:"Password",size:"lg",className:"h-auto"})),o.a.createElement("div",{className:"mt-3"},o.a.createElement(m.b,{className:"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn",to:"/dashboard"},"SIGN IN")),o.a.createElement("div",{className:"my-2 d-flex justify-content-between align-items-center"},o.a.createElement("div",{className:"form-check"},o.a.createElement("label",{className:"form-check-label text-muted"},o.a.createElement("input",{type:"checkbox",className:"form-check-input"}),o.a.createElement("i",{className:"input-helper"}),"Keep me signed in")),o.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()},className:"auth-link text-black"},"Forgot password?")),o.a.createElement("div",{className:"mb-2"},o.a.createElement("button",{type:"button",className:"btn btn-block btn-facebook auth-form-btn"},o.a.createElement("i",{className:"icon-social-facebook mr-2"}),"Connect using facebook")),o.a.createElement("div",{className:"text-center mt-4 font-weight-light"},"Don't have an account? ",o.a.createElement(m.b,{to:"/user-pages/register",className:"text-primary"},"Create"))))))))}}]),a}(i.Component);a.default=u}}]);
//# sourceMappingURL=9.1243ea66.chunk.js.map