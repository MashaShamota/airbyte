"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[6980],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,h=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50985:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={},c="Getting Started",u={unversionedId:"connector-development/tutorials/cdk-tutorial-python-http/getting-started",id:"connector-development/tutorials/cdk-tutorial-python-http/getting-started",title:"Getting Started",description:"Summary",source:"@site/../docs/connector-development/tutorials/cdk-tutorial-python-http/0-getting-started.md",sourceDirName:"connector-development/tutorials/cdk-tutorial-python-http",slug:"/connector-development/tutorials/cdk-tutorial-python-http/getting-started",permalink:"/connector-development/tutorials/cdk-tutorial-python-http/getting-started",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/connector-development/tutorials/cdk-tutorial-python-http/0-getting-started.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"mySidebar",previous:{title:"Python CDK Speedrun: Creating a Source",permalink:"/connector-development/tutorials/cdk-speedrun"},next:{title:"Step 1: Creating the Source",permalink:"/connector-development/tutorials/cdk-tutorial-python-http/creating-the-source"}},p={},s=[{value:"Summary",id:"summary",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Checklist",id:"checklist",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This is a step-by-step guide for how to create an Airbyte source in Python to read data from an HTTP API. We'll be using the Exchange Rates API as an example since it is simple and demonstrates a lot of the capabilities of the CDK."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Python ",">","= 3.9"),(0,i.kt)("li",{parentName:"ul"},"Docker"),(0,i.kt)("li",{parentName:"ul"},"NodeJS ","(","only used to generate the connector",")",". We'll remove the NodeJS dependency soon.")),(0,i.kt)("p",null,"All the commands below assume that ",(0,i.kt)("inlineCode",{parentName:"p"},"python")," points to a version of python ",">","=3.9.0. On some systems, ",(0,i.kt)("inlineCode",{parentName:"p"},"python")," points to a Python2 installation and ",(0,i.kt)("inlineCode",{parentName:"p"},"python3")," points to Python3. If this is the case on your machine, substitute all ",(0,i.kt)("inlineCode",{parentName:"p"},"python")," commands in this guide with ",(0,i.kt)("inlineCode",{parentName:"p"},"python3"),"."),(0,i.kt)("h2",{id:"checklist"},"Checklist"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step 1: Create the source using the template"),(0,i.kt)("li",{parentName:"ul"},"Step 2: Install dependencies for the new source"),(0,i.kt)("li",{parentName:"ul"},"Step 3: Define the inputs needed by your connector"),(0,i.kt)("li",{parentName:"ul"},"Step 4: Implement connection checking"),(0,i.kt)("li",{parentName:"ul"},"Step 5: Declare the schema of your streams"),(0,i.kt)("li",{parentName:"ul"},"Step 6: Implement functionality for reading your streams"),(0,i.kt)("li",{parentName:"ul"},"Step 7: Use the connector in Airbyte"),(0,i.kt)("li",{parentName:"ul"},"Step 8: Write unit tests or integration tests")),(0,i.kt)("p",null,"Each step of the Creating a Source checklist is explained in more detail in the following steps. We also mention how you can submit the connector to be included with the general Airbyte release at the end of the tutorial."))}d.isMDXComponent=!0}}]);