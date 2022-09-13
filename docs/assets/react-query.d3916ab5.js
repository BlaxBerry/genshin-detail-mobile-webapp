import{_ as y,c as L}from"./@babel.f3c2a14e.js";import{a as R}from"./react.42aed624.js";import{j as oe}from"./@mui.02662e57.js";import{R as Se}from"./react-dom.19f2fe6a.js";var j=function(){function s(){this.listeners=[]}var r=s.prototype;return r.subscribe=function(e){var t=this,n=e||function(){};return this.listeners.push(n),this.onSubscribe(),function(){t.listeners=t.listeners.filter(function(a){return a!==n}),t.onUnsubscribe()}},r.hasListeners=function(){return this.listeners.length>0},r.onSubscribe=function(){},r.onUnsubscribe=function(){},s}(),W=typeof window>"u";function F(){}function qe(s,r){return typeof s=="function"?s(r):s}function re(s){return typeof s=="number"&&s>=0&&s!==1/0}function J(s){return Array.isArray(s)?s:[s]}function me(s,r){return Math.max(s+(r||0)-Date.now(),0)}function k(s,r,i){return ee(s)?typeof r=="function"?y({},i,{queryKey:s,queryFn:r}):y({},r,{queryKey:s}):s}function A(s,r,i){return ee(s)?[y({},r,{queryKey:s}),i]:[s||{},r]}function _e(s,r){if(s===!0&&r===!0||s==null&&r==null)return"all";if(s===!1&&r===!1)return"none";var i=s!=null?s:!r;return i?"active":"inactive"}function ce(s,r){var i=s.active,e=s.exact,t=s.fetching,n=s.inactive,a=s.predicate,u=s.queryKey,o=s.stale;if(ee(u)){if(e){if(r.queryHash!==ue(u,r.options))return!1}else if(!X(r.queryKey,u))return!1}var c=_e(i,n);if(c==="none")return!1;if(c!=="all"){var l=r.isActive();if(c==="active"&&!l||c==="inactive"&&l)return!1}return!(typeof o=="boolean"&&r.isStale()!==o||typeof t=="boolean"&&r.isFetching()!==t||a&&!a(r))}function le(s,r){var i=s.exact,e=s.fetching,t=s.predicate,n=s.mutationKey;if(ee(n)){if(!r.options.mutationKey)return!1;if(i){if(U(r.options.mutationKey)!==U(n))return!1}else if(!X(r.options.mutationKey,n))return!1}return!(typeof e=="boolean"&&r.state.status==="loading"!==e||t&&!t(r))}function ue(s,r){var i=(r==null?void 0:r.queryKeyHashFn)||U;return i(s)}function U(s){var r=J(s);return Ee(r)}function Ee(s){return JSON.stringify(s,function(r,i){return ie(i)?Object.keys(i).sort().reduce(function(e,t){return e[t]=i[t],e},{}):i})}function X(s,r){return be(J(s),J(r))}function be(s,r){return s===r?!0:typeof s!=typeof r?!1:s&&r&&typeof s=="object"&&typeof r=="object"?!Object.keys(r).some(function(i){return!be(s[i],r[i])}):!1}function Y(s,r){if(s===r)return s;var i=Array.isArray(s)&&Array.isArray(r);if(i||ie(s)&&ie(r)){for(var e=i?s.length:Object.keys(s).length,t=i?r:Object.keys(r),n=t.length,a=i?[]:{},u=0,o=0;o<n;o++){var c=i?o:t[o];a[c]=Y(s[c],r[c]),a[c]===s[c]&&u++}return e===n&&u===e?s:a}return r}function we(s,r){if(s&&!r||r&&!s)return!1;for(var i in s)if(s[i]!==r[i])return!1;return!0}function ie(s){if(!fe(s))return!1;var r=s.constructor;if(typeof r>"u")return!0;var i=r.prototype;return!(!fe(i)||!i.hasOwnProperty("isPrototypeOf"))}function fe(s){return Object.prototype.toString.call(s)==="[object Object]"}function ee(s){return typeof s=="string"||Array.isArray(s)}function Ae(s){return new Promise(function(r){setTimeout(r,s)})}function he(s){Promise.resolve().then(s).catch(function(r){return setTimeout(function(){throw r})})}function ge(){if(typeof AbortController=="function")return new AbortController}var De=function(s){L(r,s);function r(){var e;return e=s.call(this)||this,e.setup=function(t){var n;if(!W&&((n=window)==null?void 0:n.addEventListener)){var a=function(){return t()};return window.addEventListener("visibilitychange",a,!1),window.addEventListener("focus",a,!1),function(){window.removeEventListener("visibilitychange",a),window.removeEventListener("focus",a)}}},e}var i=r.prototype;return i.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},i.onUnsubscribe=function(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}},i.setEventListener=function(t){var n,a=this;this.setup=t,(n=this.cleanup)==null||n.call(this),this.cleanup=t(function(u){typeof u=="boolean"?a.setFocused(u):a.onFocus()})},i.setFocused=function(t){this.focused=t,t&&this.onFocus()},i.onFocus=function(){this.listeners.forEach(function(t){t()})},i.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},r}(j),$=new De,Me=function(s){L(r,s);function r(){var e;return e=s.call(this)||this,e.setup=function(t){var n;if(!W&&((n=window)==null?void 0:n.addEventListener)){var a=function(){return t()};return window.addEventListener("online",a,!1),window.addEventListener("offline",a,!1),function(){window.removeEventListener("online",a),window.removeEventListener("offline",a)}}},e}var i=r.prototype;return i.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},i.onUnsubscribe=function(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}},i.setEventListener=function(t){var n,a=this;this.setup=t,(n=this.cleanup)==null||n.call(this),this.cleanup=t(function(u){typeof u=="boolean"?a.setOnline(u):a.onOnline()})},i.setOnline=function(t){this.online=t,t&&this.onOnline()},i.onOnline=function(){this.listeners.forEach(function(t){t()})},i.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},r}(j),G=new Me;function xe(s){return Math.min(1e3*Math.pow(2,s),3e4)}function Z(s){return typeof(s==null?void 0:s.cancel)=="function"}var Oe=function(r){this.revert=r==null?void 0:r.revert,this.silent=r==null?void 0:r.silent};function V(s){return s instanceof Oe}var Ce=function(r){var i=this,e=!1,t,n,a,u;this.abort=r.abort,this.cancel=function(d){return t==null?void 0:t(d)},this.cancelRetry=function(){e=!0},this.continueRetry=function(){e=!1},this.continue=function(){return n==null?void 0:n()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(d,f){a=d,u=f});var o=function(f){i.isResolved||(i.isResolved=!0,r.onSuccess==null||r.onSuccess(f),n==null||n(),a(f))},c=function(f){i.isResolved||(i.isResolved=!0,r.onError==null||r.onError(f),n==null||n(),u(f))},l=function(){return new Promise(function(f){n=f,i.isPaused=!0,r.onPause==null||r.onPause()}).then(function(){n=void 0,i.isPaused=!1,r.onContinue==null||r.onContinue()})},v=function d(){if(!i.isResolved){var f;try{f=r.fn()}catch(h){f=Promise.reject(h)}t=function(m){if(!i.isResolved&&(c(new Oe(m)),i.abort==null||i.abort(),Z(f)))try{f.cancel()}catch{}},i.isTransportCancelable=Z(f),Promise.resolve(f).then(o).catch(function(h){var m,Q;if(!i.isResolved){var C=(m=r.retry)!=null?m:3,O=(Q=r.retryDelay)!=null?Q:xe,p=typeof O=="function"?O(i.failureCount,h):O,q=C===!0||typeof C=="number"&&i.failureCount<C||typeof C=="function"&&C(i.failureCount,h);if(e||!q){c(h);return}i.failureCount++,r.onFail==null||r.onFail(i.failureCount,h),Ae(p).then(function(){if(!$.isFocused()||!G.isOnline())return l()}).then(function(){e?c(h):d()})}})}};v()},Ue=function(){function s(){this.queue=[],this.transactions=0,this.notifyFn=function(i){i()},this.batchNotifyFn=function(i){i()}}var r=s.prototype;return r.batch=function(e){var t;this.transactions++;try{t=e()}finally{this.transactions--,this.transactions||this.flush()}return t},r.schedule=function(e){var t=this;this.transactions?this.queue.push(e):he(function(){t.notifyFn(e)})},r.batchCalls=function(e){var t=this;return function(){for(var n=arguments.length,a=new Array(n),u=0;u<n;u++)a[u]=arguments[u];t.schedule(function(){e.apply(void 0,a)})}},r.flush=function(){var e=this,t=this.queue;this.queue=[],t.length&&he(function(){e.batchNotifyFn(function(){t.forEach(function(n){e.notifyFn(n)})})})},r.setNotifyFunction=function(e){this.notifyFn=e},r.setBatchNotifyFunction=function(e){this.batchNotifyFn=e},s}(),b=new Ue,Fe=console;function z(){return Fe}function Ie(s){Fe=s}var Te=function(){function s(i){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=i.defaultOptions,this.setOptions(i.options),this.observers=[],this.cache=i.cache,this.queryKey=i.queryKey,this.queryHash=i.queryHash,this.initialState=i.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=i.meta,this.scheduleGc()}var r=s.prototype;return r.setOptions=function(e){var t;this.options=y({},this.defaultOptions,e),this.meta=e==null?void 0:e.meta,this.cacheTime=Math.max(this.cacheTime||0,(t=this.options.cacheTime)!=null?t:5*60*1e3)},r.setDefaultOptions=function(e){this.defaultOptions=e},r.scheduleGc=function(){var e=this;this.clearGcTimeout(),re(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){e.optionalRemove()},this.cacheTime))},r.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},r.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},r.setData=function(e,t){var n,a,u=this.state.data,o=qe(e,u);return(n=(a=this.options).isDataEqual)!=null&&n.call(a,u,o)?o=u:this.options.structuralSharing!==!1&&(o=Y(u,o)),this.dispatch({data:o,type:"success",dataUpdatedAt:t==null?void 0:t.updatedAt}),o},r.setState=function(e,t){this.dispatch({type:"setState",state:e,setStateOptions:t})},r.cancel=function(e){var t,n=this.promise;return(t=this.retryer)==null||t.cancel(e),n?n.then(F).catch(F):Promise.resolve()},r.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},r.reset=function(){this.destroy(),this.setState(this.initialState)},r.isActive=function(){return this.observers.some(function(e){return e.options.enabled!==!1})},r.isFetching=function(){return this.state.isFetching},r.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(e){return e.getCurrentResult().isStale})},r.isStaleByTime=function(e){return e===void 0&&(e=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!me(this.state.dataUpdatedAt,e)},r.onFocus=function(){var e,t=this.observers.find(function(n){return n.shouldFetchOnWindowFocus()});t&&t.refetch(),(e=this.retryer)==null||e.continue()},r.onOnline=function(){var e,t=this.observers.find(function(n){return n.shouldFetchOnReconnect()});t&&t.refetch(),(e=this.retryer)==null||e.continue()},r.addObserver=function(e){this.observers.indexOf(e)===-1&&(this.observers.push(e),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))},r.removeObserver=function(e){this.observers.indexOf(e)!==-1&&(this.observers=this.observers.filter(function(t){return t!==e}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:e}))},r.getObserversCount=function(){return this.observers.length},r.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},r.fetch=function(e,t){var n=this,a,u,o;if(this.state.isFetching){if(this.state.dataUpdatedAt&&(t==null?void 0:t.cancelRefetch))this.cancel({silent:!0});else if(this.promise){var c;return(c=this.retryer)==null||c.continueRetry(),this.promise}}if(e&&this.setOptions(e),!this.options.queryFn){var l=this.observers.find(function(O){return O.options.queryFn});l&&this.setOptions(l.options)}var v=J(this.queryKey),d=ge(),f={queryKey:v,pageParam:void 0,meta:this.meta};Object.defineProperty(f,"signal",{enumerable:!0,get:function(){if(d)return n.abortSignalConsumed=!0,d.signal}});var h=function(){return n.options.queryFn?(n.abortSignalConsumed=!1,n.options.queryFn(f)):Promise.reject("Missing queryFn")},m={fetchOptions:t,options:this.options,queryKey:v,state:this.state,fetchFn:h,meta:this.meta};if((a=this.options.behavior)!=null&&a.onFetch){var Q;(Q=this.options.behavior)==null||Q.onFetch(m)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((u=m.fetchOptions)==null?void 0:u.meta)){var C;this.dispatch({type:"fetch",meta:(C=m.fetchOptions)==null?void 0:C.meta})}return this.retryer=new Ce({fn:m.fetchFn,abort:d==null||(o=d.abort)==null?void 0:o.bind(d),onSuccess:function(p){n.setData(p),n.cache.config.onSuccess==null||n.cache.config.onSuccess(p,n),n.cacheTime===0&&n.optionalRemove()},onError:function(p){V(p)&&p.silent||n.dispatch({type:"error",error:p}),V(p)||(n.cache.config.onError==null||n.cache.config.onError(p,n),z().error(p)),n.cacheTime===0&&n.optionalRemove()},onFail:function(){n.dispatch({type:"failed"})},onPause:function(){n.dispatch({type:"pause"})},onContinue:function(){n.dispatch({type:"continue"})},retry:m.options.retry,retryDelay:m.options.retryDelay}),this.promise=this.retryer.promise,this.promise},r.dispatch=function(e){var t=this;this.state=this.reducer(this.state,e),b.batch(function(){t.observers.forEach(function(n){n.onQueryUpdate(e)}),t.cache.notify({query:t,type:"queryUpdated",action:e})})},r.getDefaultState=function(e){var t=typeof e.initialData=="function"?e.initialData():e.initialData,n=typeof e.initialData<"u",a=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0,u=typeof t<"u";return{data:t,dataUpdateCount:0,dataUpdatedAt:u?a!=null?a:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:u?"success":"idle"}},r.reducer=function(e,t){var n,a;switch(t.type){case"failed":return y({},e,{fetchFailureCount:e.fetchFailureCount+1});case"pause":return y({},e,{isPaused:!0});case"continue":return y({},e,{isPaused:!1});case"fetch":return y({},e,{fetchFailureCount:0,fetchMeta:(n=t.meta)!=null?n:null,isFetching:!0,isPaused:!1},!e.dataUpdatedAt&&{error:null,status:"loading"});case"success":return y({},e,{data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:(a=t.dataUpdatedAt)!=null?a:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var u=t.error;return V(u)&&u.revert&&this.revertState?y({},this.revertState):y({},e,{error:u,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return y({},e,{isInvalidated:!0});case"setState":return y({},e,t.state);default:return e}},s}(),Ke=function(s){L(r,s);function r(e){var t;return t=s.call(this)||this,t.config=e||{},t.queries=[],t.queriesMap={},t}var i=r.prototype;return i.build=function(t,n,a){var u,o=n.queryKey,c=(u=n.queryHash)!=null?u:ue(o,n),l=this.get(c);return l||(l=new Te({cache:this,queryKey:o,queryHash:c,options:t.defaultQueryOptions(n),state:a,defaultOptions:t.getQueryDefaults(o),meta:n.meta}),this.add(l)),l},i.add=function(t){this.queriesMap[t.queryHash]||(this.queriesMap[t.queryHash]=t,this.queries.push(t),this.notify({type:"queryAdded",query:t}))},i.remove=function(t){var n=this.queriesMap[t.queryHash];n&&(t.destroy(),this.queries=this.queries.filter(function(a){return a!==t}),n===t&&delete this.queriesMap[t.queryHash],this.notify({type:"queryRemoved",query:t}))},i.clear=function(){var t=this;b.batch(function(){t.queries.forEach(function(n){t.remove(n)})})},i.get=function(t){return this.queriesMap[t]},i.getAll=function(){return this.queries},i.find=function(t,n){var a=A(t,n),u=a[0];return typeof u.exact>"u"&&(u.exact=!0),this.queries.find(function(o){return ce(u,o)})},i.findAll=function(t,n){var a=A(t,n),u=a[0];return Object.keys(u).length>0?this.queries.filter(function(o){return ce(u,o)}):this.queries},i.notify=function(t){var n=this;b.batch(function(){n.listeners.forEach(function(a){a(t)})})},i.onFocus=function(){var t=this;b.batch(function(){t.queries.forEach(function(n){n.onFocus()})})},i.onOnline=function(){var t=this;b.batch(function(){t.queries.forEach(function(n){n.onOnline()})})},r}(j),$e=function(){function s(i){this.options=y({},i.defaultOptions,i.options),this.mutationId=i.mutationId,this.mutationCache=i.mutationCache,this.observers=[],this.state=i.state||Le(),this.meta=i.meta}var r=s.prototype;return r.setState=function(e){this.dispatch({type:"setState",state:e})},r.addObserver=function(e){this.observers.indexOf(e)===-1&&this.observers.push(e)},r.removeObserver=function(e){this.observers=this.observers.filter(function(t){return t!==e})},r.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(F).catch(F)):Promise.resolve()},r.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},r.execute=function(){var e=this,t,n=this.state.status==="loading",a=Promise.resolve();return n||(this.dispatch({type:"loading",variables:this.options.variables}),a=a.then(function(){e.mutationCache.config.onMutate==null||e.mutationCache.config.onMutate(e.state.variables,e)}).then(function(){return e.options.onMutate==null?void 0:e.options.onMutate(e.state.variables)}).then(function(u){u!==e.state.context&&e.dispatch({type:"loading",context:u,variables:e.state.variables})})),a.then(function(){return e.executeMutation()}).then(function(u){t=u,e.mutationCache.config.onSuccess==null||e.mutationCache.config.onSuccess(t,e.state.variables,e.state.context,e)}).then(function(){return e.options.onSuccess==null?void 0:e.options.onSuccess(t,e.state.variables,e.state.context)}).then(function(){return e.options.onSettled==null?void 0:e.options.onSettled(t,null,e.state.variables,e.state.context)}).then(function(){return e.dispatch({type:"success",data:t}),t}).catch(function(u){return e.mutationCache.config.onError==null||e.mutationCache.config.onError(u,e.state.variables,e.state.context,e),z().error(u),Promise.resolve().then(function(){return e.options.onError==null?void 0:e.options.onError(u,e.state.variables,e.state.context)}).then(function(){return e.options.onSettled==null?void 0:e.options.onSettled(void 0,u,e.state.variables,e.state.context)}).then(function(){throw e.dispatch({type:"error",error:u}),u})})},r.executeMutation=function(){var e=this,t;return this.retryer=new Ce({fn:function(){return e.options.mutationFn?e.options.mutationFn(e.state.variables):Promise.reject("No mutationFn found")},onFail:function(){e.dispatch({type:"failed"})},onPause:function(){e.dispatch({type:"pause"})},onContinue:function(){e.dispatch({type:"continue"})},retry:(t=this.options.retry)!=null?t:0,retryDelay:this.options.retryDelay}),this.retryer.promise},r.dispatch=function(e){var t=this;this.state=je(this.state,e),b.batch(function(){t.observers.forEach(function(n){n.onMutationUpdate(e)}),t.mutationCache.notify(t)})},s}();function Le(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function je(s,r){switch(r.type){case"failed":return y({},s,{failureCount:s.failureCount+1});case"pause":return y({},s,{isPaused:!0});case"continue":return y({},s,{isPaused:!1});case"loading":return y({},s,{context:r.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:r.variables});case"success":return y({},s,{data:r.data,error:null,status:"success",isPaused:!1});case"error":return y({},s,{data:void 0,error:r.error,failureCount:s.failureCount+1,isPaused:!1,status:"error"});case"setState":return y({},s,r.state);default:return s}}var Ne=function(s){L(r,s);function r(e){var t;return t=s.call(this)||this,t.config=e||{},t.mutations=[],t.mutationId=0,t}var i=r.prototype;return i.build=function(t,n,a){var u=new $e({mutationCache:this,mutationId:++this.mutationId,options:t.defaultMutationOptions(n),state:a,defaultOptions:n.mutationKey?t.getMutationDefaults(n.mutationKey):void 0,meta:n.meta});return this.add(u),u},i.add=function(t){this.mutations.push(t),this.notify(t)},i.remove=function(t){this.mutations=this.mutations.filter(function(n){return n!==t}),t.cancel(),this.notify(t)},i.clear=function(){var t=this;b.batch(function(){t.mutations.forEach(function(n){t.remove(n)})})},i.getAll=function(){return this.mutations},i.find=function(t){return typeof t.exact>"u"&&(t.exact=!0),this.mutations.find(function(n){return le(t,n)})},i.findAll=function(t){return this.mutations.filter(function(n){return le(t,n)})},i.notify=function(t){var n=this;b.batch(function(){n.listeners.forEach(function(a){a(t)})})},i.onFocus=function(){this.resumePausedMutations()},i.onOnline=function(){this.resumePausedMutations()},i.resumePausedMutations=function(){var t=this.mutations.filter(function(n){return n.state.isPaused});return b.batch(function(){return t.reduce(function(n,a){return n.then(function(){return a.continue().catch(F)})},Promise.resolve())})},r}(j);function Be(){return{onFetch:function(r){r.fetchFn=function(){var i,e,t,n,a,u,o=(i=r.fetchOptions)==null||(e=i.meta)==null?void 0:e.refetchPage,c=(t=r.fetchOptions)==null||(n=t.meta)==null?void 0:n.fetchMore,l=c==null?void 0:c.pageParam,v=(c==null?void 0:c.direction)==="forward",d=(c==null?void 0:c.direction)==="backward",f=((a=r.state.data)==null?void 0:a.pages)||[],h=((u=r.state.data)==null?void 0:u.pageParams)||[],m=ge(),Q=m==null?void 0:m.signal,C=h,O=!1,p=r.options.queryFn||function(){return Promise.reject("Missing queryFn")},q=function(E,I,S,K){return C=K?[I].concat(C):[].concat(C,[I]),K?[S].concat(E):[].concat(E,[S])},_=function(E,I,S,K){if(O)return Promise.reject("Cancelled");if(typeof S>"u"&&!I&&E.length)return Promise.resolve(E);var w={queryKey:r.queryKey,signal:Q,pageParam:S,meta:r.meta},x=p(w),H=Promise.resolve(x).then(function(Pe){return q(E,S,Pe,K)});if(Z(x)){var ne=H;ne.cancel=x.cancel}return H},g;if(!f.length)g=_([]);else if(v){var T=typeof l<"u",te=T?l:de(r.options,f);g=_(f,T,te)}else if(d){var N=typeof l<"u",P=N?l:He(r.options,f);g=_(f,N,P,!0)}else(function(){C=[];var M=typeof r.options.getNextPageParam>"u",E=o&&f[0]?o(f[0],0,f):!0;g=E?_([],M,h[0]):Promise.resolve(q([],h[0],f[0]));for(var I=function(w){g=g.then(function(x){var H=o&&f[w]?o(f[w],w,f):!0;if(H){var ne=M?h[w]:de(r.options,x);return _(x,M,ne)}return Promise.resolve(q(x,h[w],f[w]))})},S=1;S<f.length;S++)I(S)})();var B=g.then(function(M){return{pages:M,pageParams:C}}),D=B;return D.cancel=function(){O=!0,m==null||m.abort(),Z(g)&&g.cancel()},B}}}}function de(s,r){return s.getNextPageParam==null?void 0:s.getNextPageParam(r[r.length-1],r)}function He(s,r){return s.getPreviousPageParam==null?void 0:s.getPreviousPageParam(r[0],r)}var st=function(){function s(i){i===void 0&&(i={}),this.queryCache=i.queryCache||new Ke,this.mutationCache=i.mutationCache||new Ne,this.defaultOptions=i.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var r=s.prototype;return r.mount=function(){var e=this;this.unsubscribeFocus=$.subscribe(function(){$.isFocused()&&G.isOnline()&&(e.mutationCache.onFocus(),e.queryCache.onFocus())}),this.unsubscribeOnline=G.subscribe(function(){$.isFocused()&&G.isOnline()&&(e.mutationCache.onOnline(),e.queryCache.onOnline())})},r.unmount=function(){var e,t;(e=this.unsubscribeFocus)==null||e.call(this),(t=this.unsubscribeOnline)==null||t.call(this)},r.isFetching=function(e,t){var n=A(e,t),a=n[0];return a.fetching=!0,this.queryCache.findAll(a).length},r.isMutating=function(e){return this.mutationCache.findAll(y({},e,{fetching:!0})).length},r.getQueryData=function(e,t){var n;return(n=this.queryCache.find(e,t))==null?void 0:n.state.data},r.getQueriesData=function(e){return this.getQueryCache().findAll(e).map(function(t){var n=t.queryKey,a=t.state,u=a.data;return[n,u]})},r.setQueryData=function(e,t,n){var a=k(e),u=this.defaultQueryOptions(a);return this.queryCache.build(this,u).setData(t,n)},r.setQueriesData=function(e,t,n){var a=this;return b.batch(function(){return a.getQueryCache().findAll(e).map(function(u){var o=u.queryKey;return[o,a.setQueryData(o,t,n)]})})},r.getQueryState=function(e,t){var n;return(n=this.queryCache.find(e,t))==null?void 0:n.state},r.removeQueries=function(e,t){var n=A(e,t),a=n[0],u=this.queryCache;b.batch(function(){u.findAll(a).forEach(function(o){u.remove(o)})})},r.resetQueries=function(e,t,n){var a=this,u=A(e,t,n),o=u[0],c=u[1],l=this.queryCache,v=y({},o,{active:!0});return b.batch(function(){return l.findAll(o).forEach(function(d){d.reset()}),a.refetchQueries(v,c)})},r.cancelQueries=function(e,t,n){var a=this,u=A(e,t,n),o=u[0],c=u[1],l=c===void 0?{}:c;typeof l.revert>"u"&&(l.revert=!0);var v=b.batch(function(){return a.queryCache.findAll(o).map(function(d){return d.cancel(l)})});return Promise.all(v).then(F).catch(F)},r.invalidateQueries=function(e,t,n){var a,u,o,c=this,l=A(e,t,n),v=l[0],d=l[1],f=y({},v,{active:(a=(u=v.refetchActive)!=null?u:v.active)!=null?a:!0,inactive:(o=v.refetchInactive)!=null?o:!1});return b.batch(function(){return c.queryCache.findAll(v).forEach(function(h){h.invalidate()}),c.refetchQueries(f,d)})},r.refetchQueries=function(e,t,n){var a=this,u=A(e,t,n),o=u[0],c=u[1],l=b.batch(function(){return a.queryCache.findAll(o).map(function(d){return d.fetch(void 0,y({},c,{meta:{refetchPage:o==null?void 0:o.refetchPage}}))})}),v=Promise.all(l).then(F);return c!=null&&c.throwOnError||(v=v.catch(F)),v},r.fetchQuery=function(e,t,n){var a=k(e,t,n),u=this.defaultQueryOptions(a);typeof u.retry>"u"&&(u.retry=!1);var o=this.queryCache.build(this,u);return o.isStaleByTime(u.staleTime)?o.fetch(u):Promise.resolve(o.state.data)},r.prefetchQuery=function(e,t,n){return this.fetchQuery(e,t,n).then(F).catch(F)},r.fetchInfiniteQuery=function(e,t,n){var a=k(e,t,n);return a.behavior=Be(),this.fetchQuery(a)},r.prefetchInfiniteQuery=function(e,t,n){return this.fetchInfiniteQuery(e,t,n).then(F).catch(F)},r.cancelMutations=function(){var e=this,t=b.batch(function(){return e.mutationCache.getAll().map(function(n){return n.cancel()})});return Promise.all(t).then(F).catch(F)},r.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},r.executeMutation=function(e){return this.mutationCache.build(this,e).execute()},r.getQueryCache=function(){return this.queryCache},r.getMutationCache=function(){return this.mutationCache},r.getDefaultOptions=function(){return this.defaultOptions},r.setDefaultOptions=function(e){this.defaultOptions=e},r.setQueryDefaults=function(e,t){var n=this.queryDefaults.find(function(a){return U(e)===U(a.queryKey)});n?n.defaultOptions=t:this.queryDefaults.push({queryKey:e,defaultOptions:t})},r.getQueryDefaults=function(e){var t;return e?(t=this.queryDefaults.find(function(n){return X(e,n.queryKey)}))==null?void 0:t.defaultOptions:void 0},r.setMutationDefaults=function(e,t){var n=this.mutationDefaults.find(function(a){return U(e)===U(a.mutationKey)});n?n.defaultOptions=t:this.mutationDefaults.push({mutationKey:e,defaultOptions:t})},r.getMutationDefaults=function(e){var t;return e?(t=this.mutationDefaults.find(function(n){return X(e,n.mutationKey)}))==null?void 0:t.defaultOptions:void 0},r.defaultQueryOptions=function(e){if(e!=null&&e._defaulted)return e;var t=y({},this.defaultOptions.queries,this.getQueryDefaults(e==null?void 0:e.queryKey),e,{_defaulted:!0});return!t.queryHash&&t.queryKey&&(t.queryHash=ue(t.queryKey,t)),t},r.defaultQueryObserverOptions=function(e){return this.defaultQueryOptions(e)},r.defaultMutationOptions=function(e){return e!=null&&e._defaulted?e:y({},this.defaultOptions.mutations,this.getMutationDefaults(e==null?void 0:e.mutationKey),e,{_defaulted:!0})},r.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},s}(),ke=function(s){L(r,s);function r(e,t){var n;return n=s.call(this)||this,n.client=e,n.options=t,n.trackedProps=[],n.selectError=null,n.bindMethods(),n.setOptions(t),n}var i=r.prototype;return i.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},i.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),ve(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},i.onUnsubscribe=function(){this.listeners.length||this.destroy()},i.shouldFetchOnReconnect=function(){return se(this.currentQuery,this.options,this.options.refetchOnReconnect)},i.shouldFetchOnWindowFocus=function(){return se(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},i.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},i.setOptions=function(t,n){var a=this.options,u=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=a.queryKey),this.updateQuery();var o=this.hasListeners();o&&pe(this.currentQuery,u,this.options,a)&&this.executeFetch(),this.updateResult(n),o&&(this.currentQuery!==u||this.options.enabled!==a.enabled||this.options.staleTime!==a.staleTime)&&this.updateStaleTimeout();var c=this.computeRefetchInterval();o&&(this.currentQuery!==u||this.options.enabled!==a.enabled||c!==this.currentRefetchInterval)&&this.updateRefetchInterval(c)},i.getOptimisticResult=function(t){var n=this.client.defaultQueryObserverOptions(t),a=this.client.getQueryCache().build(this.client,n);return this.createResult(a,n)},i.getCurrentResult=function(){return this.currentResult},i.trackResult=function(t,n){var a=this,u={},o=function(l){a.trackedProps.includes(l)||a.trackedProps.push(l)};return Object.keys(t).forEach(function(c){Object.defineProperty(u,c,{configurable:!1,enumerable:!0,get:function(){return o(c),t[c]}})}),(n.useErrorBoundary||n.suspense)&&o("error"),u},i.getNextResult=function(t){var n=this;return new Promise(function(a,u){var o=n.subscribe(function(c){c.isFetching||(o(),c.isError&&(t==null?void 0:t.throwOnError)?u(c.error):a(c))})})},i.getCurrentQuery=function(){return this.currentQuery},i.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},i.refetch=function(t){return this.fetch(y({},t,{meta:{refetchPage:t==null?void 0:t.refetchPage}}))},i.fetchOptimistic=function(t){var n=this,a=this.client.defaultQueryObserverOptions(t),u=this.client.getQueryCache().build(this.client,a);return u.fetch().then(function(){return n.createResult(u,a)})},i.fetch=function(t){var n=this;return this.executeFetch(t).then(function(){return n.updateResult(),n.currentResult})},i.executeFetch=function(t){this.updateQuery();var n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(F)),n},i.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!(W||this.currentResult.isStale||!re(this.options.staleTime))){var n=me(this.currentResult.dataUpdatedAt,this.options.staleTime),a=n+1;this.staleTimeoutId=setTimeout(function(){t.currentResult.isStale||t.updateResult()},a)}},i.computeRefetchInterval=function(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1},i.updateRefetchInterval=function(t){var n=this;this.clearRefetchInterval(),this.currentRefetchInterval=t,!(W||this.options.enabled===!1||!re(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(n.options.refetchIntervalInBackground||$.isFocused())&&n.executeFetch()},this.currentRefetchInterval))},i.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},i.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},i.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},i.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},i.createResult=function(t,n){var a=this.currentQuery,u=this.options,o=this.currentResult,c=this.currentResultState,l=this.currentResultOptions,v=t!==a,d=v?t.state:this.currentQueryInitialState,f=v?this.currentResult:this.previousQueryResult,h=t.state,m=h.dataUpdatedAt,Q=h.error,C=h.errorUpdatedAt,O=h.isFetching,p=h.status,q=!1,_=!1,g;if(n.optimisticResults){var T=this.hasListeners(),te=!T&&ve(t,n),N=T&&pe(t,a,n,u);(te||N)&&(O=!0,m||(p="loading"))}if(n.keepPreviousData&&!h.dataUpdateCount&&(f==null?void 0:f.isSuccess)&&p!=="error")g=f.data,m=f.dataUpdatedAt,p=f.status,q=!0;else if(n.select&&typeof h.data<"u")if(o&&h.data===(c==null?void 0:c.data)&&n.select===this.selectFn)g=this.selectResult;else try{this.selectFn=n.select,g=n.select(h.data),n.structuralSharing!==!1&&(g=Y(o==null?void 0:o.data,g)),this.selectResult=g,this.selectError=null}catch(D){z().error(D),this.selectError=D}else g=h.data;if(typeof n.placeholderData<"u"&&typeof g>"u"&&(p==="loading"||p==="idle")){var P;if((o==null?void 0:o.isPlaceholderData)&&n.placeholderData===(l==null?void 0:l.placeholderData))P=o.data;else if(P=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof P<"u")try{P=n.select(P),n.structuralSharing!==!1&&(P=Y(o==null?void 0:o.data,P)),this.selectError=null}catch(D){z().error(D),this.selectError=D}typeof P<"u"&&(p="success",g=P,_=!0)}this.selectError&&(Q=this.selectError,g=this.selectResult,C=Date.now(),p="error");var B={status:p,isLoading:p==="loading",isSuccess:p==="success",isError:p==="error",isIdle:p==="idle",data:g,dataUpdatedAt:m,error:Q,errorUpdatedAt:C,failureCount:h.fetchFailureCount,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>d.dataUpdateCount||h.errorUpdateCount>d.errorUpdateCount,isFetching:O,isRefetching:O&&p!=="loading",isLoadingError:p==="error"&&h.dataUpdatedAt===0,isPlaceholderData:_,isPreviousData:q,isRefetchError:p==="error"&&h.dataUpdatedAt!==0,isStale:ae(t,n),refetch:this.refetch,remove:this.remove};return B},i.shouldNotifyListeners=function(t,n){if(!n)return!0;var a=this.options,u=a.notifyOnChangeProps,o=a.notifyOnChangePropsExclusions;if(!u&&!o||u==="tracked"&&!this.trackedProps.length)return!0;var c=u==="tracked"?this.trackedProps:u;return Object.keys(t).some(function(l){var v=l,d=t[v]!==n[v],f=c==null?void 0:c.some(function(m){return m===l}),h=o==null?void 0:o.some(function(m){return m===l});return d&&!h&&(!c||f)})},i.updateResult=function(t){var n=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!we(this.currentResult,n)){var a={cache:!0};(t==null?void 0:t.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,n)&&(a.listeners=!0),this.notify(y({},a,t))}},i.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n==null||n.removeObserver(this),t.addObserver(this))}},i.onQueryUpdate=function(t){var n={};t.type==="success"?n.onSuccess=!0:t.type==="error"&&!V(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()},i.notify=function(t){var n=this;b.batch(function(){t.onSuccess?(n.options.onSuccess==null||n.options.onSuccess(n.currentResult.data),n.options.onSettled==null||n.options.onSettled(n.currentResult.data,null)):t.onError&&(n.options.onError==null||n.options.onError(n.currentResult.error),n.options.onSettled==null||n.options.onSettled(void 0,n.currentResult.error)),t.listeners&&n.listeners.forEach(function(a){a(n.currentResult)}),t.cache&&n.client.getQueryCache().notify({query:n.currentQuery,type:"observerResultsUpdated"})})},r}(j);function Ge(s,r){return r.enabled!==!1&&!s.state.dataUpdatedAt&&!(s.state.status==="error"&&r.retryOnMount===!1)}function ve(s,r){return Ge(s,r)||s.state.dataUpdatedAt>0&&se(s,r,r.refetchOnMount)}function se(s,r,i){if(r.enabled!==!1){var e=typeof i=="function"?i(s):i;return e==="always"||e!==!1&&ae(s,r)}return!1}function pe(s,r,i,e){return i.enabled!==!1&&(s!==r||e.enabled===!1)&&(!i.suspense||s.state.status!=="error")&&ae(s,i)}function ae(s,r){return s.isStaleByTime(r.staleTime)}var Ve=Se.unstable_batchedUpdates;b.setBatchNotifyFunction(Ve);var We=console;Ie(We);var ye=R.createContext(void 0),Re=R.createContext(!1);function Qe(s){return s&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=ye),window.ReactQueryClientContext):ye}var Je=function(){var r=R.useContext(Qe(R.useContext(Re)));if(!r)throw new Error("No QueryClient set, use QueryClientProvider to set one");return r},ut=function(r){var i=r.client,e=r.contextSharing,t=e===void 0?!1:e,n=r.children;R.useEffect(function(){return i.mount(),function(){i.unmount()}},[i]);var a=Qe(t);return oe(Re.Provider,{value:t,children:oe(a.Provider,{value:i,children:n})})};function Xe(){var s=!1;return{clearReset:function(){s=!1},reset:function(){s=!0},isReset:function(){return s}}}var Ye=R.createContext(Xe()),Ze=function(){return R.useContext(Ye)};function ze(s,r,i){return typeof r=="function"?r.apply(void 0,i):typeof r=="boolean"?r:!!s}function et(s,r){var i=R.useRef(!1),e=R.useState(0),t=e[1],n=Je(),a=Ze(),u=n.defaultQueryObserverOptions(s);u.optimisticResults=!0,u.onError&&(u.onError=b.batchCalls(u.onError)),u.onSuccess&&(u.onSuccess=b.batchCalls(u.onSuccess)),u.onSettled&&(u.onSettled=b.batchCalls(u.onSettled)),u.suspense&&(typeof u.staleTime!="number"&&(u.staleTime=1e3),u.cacheTime===0&&(u.cacheTime=1)),(u.suspense||u.useErrorBoundary)&&(a.isReset()||(u.retryOnMount=!1));var o=R.useState(function(){return new r(n,u)}),c=o[0],l=c.getOptimisticResult(u);if(R.useEffect(function(){i.current=!0,a.clearReset();var v=c.subscribe(b.batchCalls(function(){i.current&&t(function(d){return d+1})}));return c.updateResult(),function(){i.current=!1,v()}},[a,c]),R.useEffect(function(){c.setOptions(u,{listeners:!1})},[u,c]),u.suspense&&l.isLoading)throw c.fetchOptimistic(u).then(function(v){var d=v.data;u.onSuccess==null||u.onSuccess(d),u.onSettled==null||u.onSettled(d,null)}).catch(function(v){a.clearReset(),u.onError==null||u.onError(v),u.onSettled==null||u.onSettled(void 0,v)});if(l.isError&&!a.isReset()&&!l.isFetching&&ze(u.suspense,u.useErrorBoundary,[l.error,c.getCurrentQuery()]))throw l.error;return u.notifyOnChangeProps==="tracked"&&(l=c.trackResult(l,u)),l}function at(s,r,i){var e=k(s,r,i);return et(e,ke)}export{st as Q,ut as a,at as u};
