(this.webpackJSONPwpmdb=this.webpackJSONPwpmdb||[]).push([[7],{642:function(e,a){},730:function(e,a,t){"use strict";t.r(a);var n,i=t(12),l=t(0),r=t.n(l),c=t(18),o=t.n(c),s=t(57),d=t(7),m=t(1),u=t(13),p=t.n(u),f=t(113),b=t.n(f),g=t(41),v=t(75),w=t(23),h=(t(537),t(34)),O=t(583),E=["svgRef"];function j(){return(j=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function y(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var N=function(e){var a=e.svgRef,t=y(e,E);return r.a.createElement("svg",j({width:16,height:16,viewBox:"0 0 16 16",ref:a},t),n||(n=r.a.createElement("polyline",{fill:"none",stroke:"#FFF",strokeWidth:2,points:"0 3.5 3.2 6 8 0",transform:"translate(4 5)"})))},_=r.a.forwardRef(function(e,a){return r.a.createElement(N,j({svgRef:a},e))}),k=(t.p,t(153)),D=t(4),F=t(11),x=t(110),M=t(728),S=t(157),P=Object(d.c)(function(e){return{media_files:e.media_files}},{updateMFDate:v.k})(function(e){var a=e.media_files.date;if(!a||""===a){var t=Date.now();a=new Date(t).toISOString()}var n=Object(l.useState)(!1),i=Object(F.a)(n,2),c=i[0],o=i[1],s=Object(l.useRef)(null),d=function(e){s.current.contains(e.target)||setTimeout(function(){o(!1)},50)};Object(l.useEffect)(function(){return c?document.addEventListener("mousedown",d):document.removeEventListener("mousedown",d),function(){document.removeEventListener("mousedown",d)}},[c]);var m=new Date(a).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),u=new Date(a).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}),p="".concat(m," ").concat(u),f=Object(x.d)(c,null,{from:{opacity:0,marginTop:-25},enter:{opacity:1,marginTop:0},leave:{opacity:0,marginTop:-25}});return r.a.createElement("div",{className:"datepicker-wrap",ref:s},r.a.createElement("div",null,r.a.createElement("div",{onClick:function(){o(!0)},className:"media-date"},p)),f.map(function(t){var n=t.item,i=t.key,l=t.props;return n&&r.a.createElement(x.a.div,{key:i,style:l,className:"datepicker-box"},r.a.createElement(M.a,{currentDate:a||Date.now(),onChange:function(a){e.updateMFDate(a)},is12Hour:!0,isInvalidDate:function(e){var a=new Date;return e.setHours(0,0,0,0),a.setHours(0,0,0,0),e>=new Date}}),r.a.createElement("div",{className:"close-wrap"},r.a.createElement("button",{onClick:function(){o(!1)},className:"close-picker"},r.a.createElement(S.a,null))))}))}),C=t(66),L=t(5),A=function(e){var a=e.disabled,t=e.media_files,n="undefined"!==typeof t&&t.enabled,i=Object(d.d)(),l=function(){i(n?Object(w.h)("media_files"):Object(w.c)("media_files")),i(Object(v.j)())};return r.a.createElement("div",{className:"media-files-header"},r.a.createElement("input",{type:"checkbox",onChange:function(e){if(a)return e.preventDefault(),!1;l()},checked:n,id:"enable-media-files"}),r.a.createElement("h4",{className:"panel-title"},r.a.createElement("label",{htmlFor:"enable-media-files",onClick:function(e){if(a)return e.preventDefault(),!1;l()}},Object(m.a)("Media Files","wp-migrate-db"))))},T=t(199);a.default=Object(d.c)(function(e){var a=e.profiles.profile_loading,t=Object(h.a)("panelsOpen",e),n=Object(D.d)("status",e),i=e.profiles.loaded_profile,l=e.migrations.local_site.media_files_version;return{isLoading:a,panel_info:e.panels,migration:e.migrations,current_migration:e.migrations.current_migration,addons:e.addons,media_files:e.media_files,status:n,panelsOpen:t,loaded_profile:i,local_version:l}},{toggleMediaFiles:v.j,setMediaOption:v.i,togglePanelsOpen:w.l,addOpenPanel:w.c,removeOpenPanel:w.h,updateMFExcludes:v.l,updateMFDate:v.k})(function(e){var a=e.media_files,t=e.panelsOpen,n=e.status,l=e.local_version,c=a.enabled,u=Object(d.d)(),f="undefined"!==typeof a.available&&!a.available,w=b()(n,{name:"MF_INVALID_DATE"}),h=b()(n,{name:"MF_OPTION_NULL"}),E={all:Object(m.a)("Migrate All Files","wp-migrate-db"),new:Object(m.a)("Migrate New Files","wp-migrate-db")},j=function(t){if(a.option===t)return null;e.setMediaOption(t)},y=t.includes("media_files"),N=!1;c&&!y&&(N=!0);var D=[];N&&D.push("has-divider"),c&&D.push("enabled");var F=function(e){return"media-option"+(a.option===e?" selected":"")};return r.a.createElement("div",{className:"media-files"},r.a.createElement(g.a,{title:Object(m.a)("Media Files","wp-migrate-db"),className:D.join(" "),header:r.a.createElement(A,Object(i.a)({},e,{disabled:f})),panelName:"media_files",disabled:f,panelSummary:r.a.createElement(function(e){return f?r.a.createElement(T.a,{message:a.message,pluginSlug:"wp-migrate-db-pro-media-files",remoteUpgradable:a.remoteUpgradable,version:l,shortName:v.c}):!o()(t,"media_files")&&a.option&&a.enabled?r.a.createElement(r.a.Fragment,null,E[a.option]):null},Object(i.a)({disabled:f},e)),forceDivider:N,callback:function(a){return Object(k.b)(a,"media_files",y,c,f,e.addOpenPanel,e.removeOpenPanel,function(){return u(Object(L.a)(C.d))})}},r.a.createElement("div",{className:"media-files-inner-wrap"},r.a.createElement("div",{className:"media-files-options"},r.a.createElement("div",{onClick:function(){j("all")},className:F("all"),"data-tip":!0,"data-for":"media-all"},"all"===a.option&&r.a.createElement(_,{className:"media-check"}),r.a.createElement("strong",null,E.all),Object(m.a)("Copy all files in the uploads folder","wp-migrate-db")),r.a.createElement(s.a,{effect:"solid",place:"right",type:"light",border:!0,className:"action-tooltip",id:"media-all"},r.a.createElement("div",{className:"content"},Object(m.a)("All files in the uploads folder will be copied to the destination regardless if they exist at the destination or not.","wp-migrate-db")," ",r.a.createElement("span",{className:"dark"},Object(m.a)("Any files with the same path will be overwritten.","wp-migrate-db")))),r.a.createElement("div",{onClick:function(){j("new")},className:F("new"),"data-tip":!0,"data-for":"media-new"},"new"===a.option&&r.a.createElement(_,{className:"media-check"}),r.a.createElement("strong",null,E.new),Object(m.a)("Copy only the files in the uploads folder added/updated since a specified date","wp-migrate-db")),r.a.createElement(s.a,{effect:"solid",place:"right",type:"light",border:!0,className:"action-tooltip",id:"media-new"},r.a.createElement("div",{className:"content"},r.a.createElement("p",null,Object(m.a)("Any files in the uploads folder added/updated since the specified date will be copied to the destination regardless if they exist at the destination or not.","wp-migrate-db")," ",r.a.createElement("span",{className:"dark"},Object(m.a)("Any files with the same path will be overwritten.","wp-migrate-db")))))),r.a.createElement("div",{className:"media-files-excludes excludes-wrap"},r.a.createElement(O.a,Object(i.a)({},e,{excludes:a.excludes,excludesUpdater:e.updateMFExcludes})))),"new"===a.option&&r.a.createElement(P,null),w&&r.a.createElement("p",{className:"red error"},p()(Object(m.a)('The date selected <a href="https://www.youtube.com/watch?v=G3AfIvJBcGo" target="_blank" rel="noopener noreferrer">is in the future</a>, please select a valid date.',"wp-migrate-db"))),h&&r.a.createElement("p",{className:"red error"},p()(Object(m.a)("Please select a media option above.","wp-migrate-db")))))})}}]);