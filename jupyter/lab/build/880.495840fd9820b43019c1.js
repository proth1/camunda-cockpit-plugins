(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[880],{60880:(e,t,o)=>{"use strict";o.r(t);var r=o(67599),s=o(52075),l=o(78548);const n=Promise.all([o.e(8555),o.e(8147)]).then(o.bind(o,8147)),a=[o.e(9595).then(o.t.bind(o,89595,23)),o.e(5260).then(o.t.bind(o,85260,23)),o.e(1804).then(o.t.bind(o,41804,23)),o.e(1440).then(o.t.bind(o,31440,23))],i=[...JSON.parse(l.PageConfig.getOption("disabledExtensions")||"[]"),"@jupyterlab/apputils-extension:workspaces","@jupyterlab/application-extension:logo","@jupyterlab/application-extension:main","@jupyterlab/application-extension:tree-resolver","@jupyterlab/apputils-extension:resolver","@jupyterlab/docmanager-extension:download","@jupyterlab/filebrowser-extension:download","@jupyterlab/help-extension:about"];async function c(e,t){try{return(await window._JUPYTERLAB[e].get(t))()}catch(o){throw console.warn(`Failed to create module: package: ${e}; module: ${t}`),o}}!async function(){await n;const e=[],t=[],f=[],h=[],p=JSON.parse(l.PageConfig.getOption("federated_extensions")),u=new Set;function*y(e){let t;t=e.hasOwnProperty("__esModule")?e.default:e;let o=Array.isArray(t)?t:[t];for(let e of o)i.includes(e.id)||i.includes(e.id.split(":")[0])||(yield e)}p.forEach((e=>{e.extension&&(u.add(e.name),t.push(c(e.name,e.extension))),e.mimeExtension&&(u.add(e.name),f.push(c(e.name,e.mimeExtension))),e.style&&h.push(c(e.name,e.style))}));const b=[];if(!u.has("@jupyterlite/iframe-extension"))try{let e=o(57968);for(let t of y(e))b.push(t)}catch(e){console.error(e)}if(!u.has("@jupyterlab/json-extension"))try{let e=o(65307);for(let t of y(e))b.push(t)}catch(e){console.error(e)}if(!u.has("@jupyterlab/vega5-extension"))try{let e=o(74425);for(let t of y(e))b.push(t)}catch(e){console.error(e)}if((await Promise.allSettled(f)).forEach((e=>{if("fulfilled"===e.status)for(let t of y(e.value))b.push(t);else console.error(e.reason)})),!u.has("@jupyterlite/application-extension"))try{let t=o(15881);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/application-extension"))try{let t=o(56953);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/apputils-extension"))try{let t=o(90426);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/celltags-extension"))try{let t=o(98475);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/codemirror-extension"))try{let t=o(81342);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/completer-extension"))try{let t=o(51563);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/console-extension"))try{let t=o(17161);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/csvviewer-extension"))try{let t=o(43277);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/docmanager-extension"))try{let t=o(68979);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/filebrowser-extension"))try{let t=o(23521);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/fileeditor-extension"))try{let t=o(63837);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/help-extension"))try{let t=o(31659);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/imageviewer-extension"))try{let t=o(77259);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/inspector-extension"))try{let t=o(6907);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/launcher-extension"))try{let t=o(78329);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/logconsole-extension"))try{let t=o(41832);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/mainmenu-extension"))try{let t=o(94253);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/markdownviewer-extension"))try{let t=o(87573);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/mathjax2-extension"))try{let t=o(44724);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/notebook-extension"))try{let t=o(89694);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/rendermime-extension"))try{let t=o(90);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/running-extension"))try{let t=o(20954);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/settingeditor-extension"))try{let t=o(50163);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/shortcuts-extension"))try{let t=o(77471);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/statusbar-extension"))try{let t=o(16321);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/theme-dark-extension"))try{let t=o(18808);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/theme-light-extension"))try{let t=o(71425);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/toc-extension"))try{let t=o(87585);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/tooltip-extension"))try{let t=o(44508);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/ui-components-extension"))try{let t=o(1979);for(let o of y(t))e.push(o)}catch(e){console.error(e)}(await Promise.allSettled(t)).forEach((t=>{if("fulfilled"===t.status)for(let o of y(t.value))e.push(o);else console.error(t.reason)})),(await Promise.allSettled(h)).filter((({status:e})=>"rejected"===e)).forEach((({reason:e})=>{console.error(e)}));const x=new s.JupyterLiteServer({});x.registerPluginModules(await Promise.all(a)),await x.start();const{serviceManager:d}=x,j=new r.JupyterLab({mimeExtensions:b,serviceManager:d});j.name="JupyterLite",j.registerPluginModules(e),console.log("Starting app"),await j.start(),console.log(`${j.name} started, waiting for restore`),await j.restored,console.log(`${j.name} restored`)}()}}]);
//# sourceMappingURL=880.495840fd9820b43019c1.js.map