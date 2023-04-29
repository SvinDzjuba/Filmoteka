function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequired7c6=s),s.register("9QQ9J",(function(t,n){var r,i,o;e(t.exports,"SourceMapGenerator",(function(){return r}),(function(e){return r=e})),e(t.exports,"SourceMapConsumer",(function(){return i}),(function(e){return i=e})),e(t.exports,"SourceNode",(function(){return o}),(function(e){return o=e})),r=s("ic7WM").SourceMapGenerator,i=s("lbXUp").SourceMapConsumer,o=s("Tx9qF").SourceNode})),s.register("ic7WM",(function(t,n){var r;e(t.exports,"SourceMapGenerator",(function(){return r}),(function(e){return r=e}));var i=s("duvZU"),o=s("dQK2c"),a=s("lSTHk").ArraySet,c=s("2EyUB").MappingList;function l(e){e||(e={}),this._file=o.getArg(e,"file",null),this._sourceRoot=o.getArg(e,"sourceRoot",null),this._skipValidation=o.getArg(e,"skipValidation",!1),this._sources=new a,this._names=new a,this._mappings=new c,this._sourcesContents=null}l.prototype._version=3,l.fromSourceMap=function(e){var t=e.sourceRoot,n=new l({file:e.file,sourceRoot:t});return e.eachMapping((function(e){var r={generated:{line:e.generatedLine,column:e.generatedColumn}};null!=e.source&&(r.source=e.source,null!=t&&(r.source=o.relative(t,r.source)),r.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(r.name=e.name)),n.addMapping(r)})),e.sources.forEach((function(r){var i=r;null!==t&&(i=o.relative(t,r)),n._sources.has(i)||n._sources.add(i);var s=e.sourceContentFor(r);null!=s&&n.setSourceContent(r,s)})),n},l.prototype.addMapping=function(e){var t=o.getArg(e,"generated"),n=o.getArg(e,"original",null),r=o.getArg(e,"source",null),i=o.getArg(e,"name",null);this._skipValidation||this._validateMapping(t,n,r,i),null!=r&&(r=String(r),this._sources.has(r)||this._sources.add(r)),null!=i&&(i=String(i),this._names.has(i)||this._names.add(i)),this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:null!=n&&n.line,originalColumn:null!=n&&n.column,source:r,name:i})},l.prototype.setSourceContent=function(e,t){var n=e;null!=this._sourceRoot&&(n=o.relative(this._sourceRoot,n)),null!=t?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[o.toSetString(n)]=t):this._sourcesContents&&(delete this._sourcesContents[o.toSetString(n)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},l.prototype.applySourceMap=function(e,t,n){var r=t;if(null==t){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');r=e.file}var i=this._sourceRoot;null!=i&&(r=o.relative(i,r));var s=new a,c=new a;this._mappings.unsortedForEach((function(t){if(t.source===r&&null!=t.originalLine){var a=e.originalPositionFor({line:t.originalLine,column:t.originalColumn});null!=a.source&&(t.source=a.source,null!=n&&(t.source=o.join(n,t.source)),null!=i&&(t.source=o.relative(i,t.source)),t.originalLine=a.line,t.originalColumn=a.column,null!=a.name&&(t.name=a.name))}var l=t.source;null==l||s.has(l)||s.add(l);var u=t.name;null==u||c.has(u)||c.add(u)}),this),this._sources=s,this._names=c,e.sources.forEach((function(t){var r=e.sourceContentFor(t);null!=r&&(null!=n&&(t=o.join(n,t)),null!=i&&(t=o.relative(i,t)),this.setSourceContent(t,r))}),this)},l.prototype._validateMapping=function(e,t,n,r){if(t&&"number"!=typeof t.line&&"number"!=typeof t.column)throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||t||n||r)&&!(e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&n))throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:n,original:t,name:r}))},l.prototype._serializeMappings=function(){for(var e,t,n,r,s=0,a=1,c=0,l=0,u=0,h=0,d="",p=this._mappings.toArray(),f=0,m=p.length;f<m;f++){if(e="",(t=p[f]).generatedLine!==a)for(s=0;t.generatedLine!==a;)e+=";",a++;else if(f>0){if(!o.compareByGeneratedPositionsInflated(t,p[f-1]))continue;e+=","}e+=i.encode(t.generatedColumn-s),s=t.generatedColumn,null!=t.source&&(r=this._sources.indexOf(t.source),e+=i.encode(r-h),h=r,e+=i.encode(t.originalLine-1-l),l=t.originalLine-1,e+=i.encode(t.originalColumn-c),c=t.originalColumn,null!=t.name&&(n=this._names.indexOf(t.name),e+=i.encode(n-u),u=n)),d+=e}return d},l.prototype._generateSourcesContent=function(e,t){return e.map((function(e){if(!this._sourcesContents)return null;null!=t&&(e=o.relative(t,e));var n=o.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null}),this)},l.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},l.prototype.toString=function(){return JSON.stringify(this.toJSON())},r=l})),s.register("duvZU",(function(t,n){var r,i;e(t.exports,"encode",(function(){return r}),(function(e){return r=e})),e(t.exports,"decode",(function(){return i}),(function(e){return i=e}));var o=s("iJ1ZV");r=function(e){var t,n="",r=function(e){return e<0?1+(-e<<1):0+(e<<1)}(e);do{t=31&r,(r>>>=5)>0&&(t|=32),n+=o.encode(t)}while(r>0);return n},i=function(e,t,n){var r,i,s,a,c=e.length,l=0,u=0;do{if(t>=c)throw new Error("Expected more digits in base 64 VLQ value.");if(-1===(i=o.decode(e.charCodeAt(t++))))throw new Error("Invalid base64 digit: "+e.charAt(t-1));r=!!(32&i),l+=(i&=31)<<u,u+=5}while(r);n.value=(a=(s=l)>>1,1==(1&s)?-a:a),n.rest=t}})),s.register("iJ1ZV",(function(t,n){var r,i;e(t.exports,"encode",(function(){return r}),(function(e){return r=e})),e(t.exports,"decode",(function(){return i}),(function(e){return i=e}));var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");r=function(e){if(0<=e&&e<s.length)return s[e];throw new TypeError("Must be between 0 and 63: "+e)},i=function(e){return 65<=e&&e<=90?e-65:97<=e&&e<=122?e-97+26:48<=e&&e<=57?e-48+52:43==e?62:47==e?63:-1}})),s.register("dQK2c",(function(t,n){var r,i,s,o,a,c,l,u,h,d,p,f,m;e(t.exports,"getArg",(function(){return r}),(function(e){return r=e})),e(t.exports,"urlParse",(function(){return i}),(function(e){return i=e})),e(t.exports,"isAbsolute",(function(){return a}),(function(e){return a=e})),e(t.exports,"normalize",(function(){return s}),(function(e){return s=e})),e(t.exports,"join",(function(){return o}),(function(e){return o=e})),e(t.exports,"relative",(function(){return c}),(function(e){return c=e})),e(t.exports,"toSetString",(function(){return l}),(function(e){return l=e})),e(t.exports,"fromSetString",(function(){return u}),(function(e){return u=e})),e(t.exports,"compareByOriginalPositions",(function(){return h}),(function(e){return h=e})),e(t.exports,"compareByGeneratedPositionsDeflated",(function(){return d}),(function(e){return d=e})),e(t.exports,"compareByGeneratedPositionsInflated",(function(){return p}),(function(e){return p=e})),e(t.exports,"parseSourceMapInput",(function(){return f}),(function(e){return f=e})),e(t.exports,"computeSourceURL",(function(){return m}),(function(e){return m=e})),r=function(e,t,n){if(t in e)return e[t];if(3===arguments.length)return n;throw new Error('"'+t+'" is a required argument.')};var g=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,v=/^data:.+\,.+$/;function y(e){var t=e.match(g);return t?{scheme:t[1],auth:t[2],host:t[3],port:t[4],path:t[5]}:null}function _(e){var t="";return e.scheme&&(t+=e.scheme+":"),t+="//",e.auth&&(t+=e.auth+"@"),e.host&&(t+=e.host),e.port&&(t+=":"+e.port),e.path&&(t+=e.path),t}function w(e){var t=e,n=y(e);if(n){if(!n.path)return e;t=n.path}for(var r,i=a(t),s=t.split(/\/+/),o=0,c=s.length-1;c>=0;c--)"."===(r=s[c])?s.splice(c,1):".."===r?o++:o>0&&(""===r?(s.splice(c+1,o),o=0):(s.splice(c,2),o--));return""===(t=s.join("/"))&&(t=i?"/":"."),n?(n.path=t,_(n)):t}function b(e,t){""===e&&(e="."),""===t&&(t=".");var n=y(t),r=y(e);if(r&&(e=r.path||"/"),n&&!n.scheme)return r&&(n.scheme=r.scheme),_(n);if(n||t.match(v))return t;if(r&&!r.host&&!r.path)return r.host=t,_(r);var i="/"===t.charAt(0)?t:w(e.replace(/\/+$/,"")+"/"+t);return r?(r.path=i,_(r)):i}i=y,s=w,o=b,a=function(e){return"/"===e.charAt(0)||g.test(e)},c=function(e,t){""===e&&(e="."),e=e.replace(/\/$/,"");for(var n=0;0!==t.indexOf(e+"/");){var r=e.lastIndexOf("/");if(r<0)return t;if((e=e.slice(0,r)).match(/^([^\/]+:\/)?\/*$/))return t;++n}return Array(n+1).join("../")+t.substr(e.length+1)};var E=!("__proto__"in Object.create(null));function S(e){return e}function k(e){if(!e)return!1;var t=e.length;if(t<9)return!1;if(95!==e.charCodeAt(t-1)||95!==e.charCodeAt(t-2)||111!==e.charCodeAt(t-3)||116!==e.charCodeAt(t-4)||111!==e.charCodeAt(t-5)||114!==e.charCodeAt(t-6)||112!==e.charCodeAt(t-7)||95!==e.charCodeAt(t-8)||95!==e.charCodeAt(t-9))return!1;for(var n=t-10;n>=0;n--)if(36!==e.charCodeAt(n))return!1;return!0}function I(e,t){return e===t?0:null===e?1:null===t?-1:e>t?1:-1}l=E?S:function(e){return k(e)?"$"+e:e},u=E?S:function(e){return k(e)?e.slice(1):e},h=function(e,t,n){var r=I(e.source,t.source);return 0!==r||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)||n||0!==(r=e.generatedColumn-t.generatedColumn)||0!==(r=e.generatedLine-t.generatedLine)?r:I(e.name,t.name)},d=function(e,t,n){var r=e.generatedLine-t.generatedLine;return 0!==r||0!==(r=e.generatedColumn-t.generatedColumn)||n||0!==(r=I(e.source,t.source))||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)?r:I(e.name,t.name)},p=function(e,t){var n=e.generatedLine-t.generatedLine;return 0!==n||0!==(n=e.generatedColumn-t.generatedColumn)||0!==(n=I(e.source,t.source))||0!==(n=e.originalLine-t.originalLine)||0!==(n=e.originalColumn-t.originalColumn)?n:I(e.name,t.name)},f=function(e){return JSON.parse(e.replace(/^\)]}'[^\n]*\n/,""))},m=function(e,t,n){if(t=t||"",e&&("/"!==e[e.length-1]&&"/"!==t[0]&&(e+="/"),t=e+t),n){var r=y(n);if(!r)throw new Error("sourceMapURL could not be parsed");if(r.path){var i=r.path.lastIndexOf("/");i>=0&&(r.path=r.path.substring(0,i+1))}t=b(_(r),t)}return w(t)}})),s.register("lSTHk",(function(t,n){var r;e(t.exports,"ArraySet",(function(){return r}),(function(e){return r=e}));var i=s("dQK2c"),o=Object.prototype.hasOwnProperty,a="undefined"!=typeof Map;function c(){this._array=[],this._set=a?new Map:Object.create(null)}c.fromArray=function(e,t){for(var n=new c,r=0,i=e.length;r<i;r++)n.add(e[r],t);return n},c.prototype.size=function(){return a?this._set.size:Object.getOwnPropertyNames(this._set).length},c.prototype.add=function(e,t){var n=a?e:i.toSetString(e),r=a?this.has(e):o.call(this._set,n),s=this._array.length;r&&!t||this._array.push(e),r||(a?this._set.set(e,s):this._set[n]=s)},c.prototype.has=function(e){if(a)return this._set.has(e);var t=i.toSetString(e);return o.call(this._set,t)},c.prototype.indexOf=function(e){if(a){var t=this._set.get(e);if(t>=0)return t}else{var n=i.toSetString(e);if(o.call(this._set,n))return this._set[n]}throw new Error('"'+e+'" is not in the set.')},c.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)},c.prototype.toArray=function(){return this._array.slice()},r=c})),s.register("2EyUB",(function(t,n){var r;e(t.exports,"MappingList",(function(){return r}),(function(e){return r=e}));var i=s("dQK2c");function o(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}o.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t)},o.prototype.add=function(e){var t,n,r,s,o,a;t=this._last,n=e,r=t.generatedLine,s=n.generatedLine,o=t.generatedColumn,a=n.generatedColumn,s>r||s==r&&a>=o||i.compareByGeneratedPositionsInflated(t,n)<=0?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e))},o.prototype.toArray=function(){return this._sorted||(this._array.sort(i.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},r=o})),s.register("lbXUp",(function(t,n){var r;e(t.exports,"SourceMapConsumer",(function(){return r}),(function(e){return r=e}));var i=s("dQK2c"),o=s("bTtvB"),a=s("lSTHk").ArraySet,c=s("duvZU"),l=s("76ffZ").quickSort;function u(e,t){var n=e;return"string"==typeof e&&(n=i.parseSourceMapInput(e)),null!=n.sections?new p(n,t):new h(n,t)}function h(e,t){var n=e;"string"==typeof e&&(n=i.parseSourceMapInput(e));var r=i.getArg(n,"version"),s=i.getArg(n,"sources"),o=i.getArg(n,"names",[]),c=i.getArg(n,"sourceRoot",null),l=i.getArg(n,"sourcesContent",null),u=i.getArg(n,"mappings"),h=i.getArg(n,"file",null);if(r!=this._version)throw new Error("Unsupported version: "+r);c&&(c=i.normalize(c)),s=s.map(String).map(i.normalize).map((function(e){return c&&i.isAbsolute(c)&&i.isAbsolute(e)?i.relative(c,e):e})),this._names=a.fromArray(o.map(String),!0),this._sources=a.fromArray(s,!0),this._absoluteSources=this._sources.toArray().map((function(e){return i.computeSourceURL(c,e,t)})),this.sourceRoot=c,this.sourcesContent=l,this._mappings=u,this._sourceMapURL=t,this.file=h}function d(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}function p(e,t){var n=e;"string"==typeof e&&(n=i.parseSourceMapInput(e));var r=i.getArg(n,"version"),s=i.getArg(n,"sections");if(r!=this._version)throw new Error("Unsupported version: "+r);this._sources=new a,this._names=new a;var o={line:-1,column:0};this._sections=s.map((function(e){if(e.url)throw new Error("Support for url field in sections not implemented.");var n=i.getArg(e,"offset"),r=i.getArg(n,"line"),s=i.getArg(n,"column");if(r<o.line||r===o.line&&s<o.column)throw new Error("Section offsets must be ordered and non-overlapping.");return o=n,{generatedOffset:{generatedLine:r+1,generatedColumn:s+1},consumer:new u(i.getArg(e,"map"),t)}}))}u.fromSourceMap=function(e,t){return h.fromSourceMap(e,t)},u.prototype._version=3,u.prototype.__generatedMappings=null,Object.defineProperty(u.prototype,"_generatedMappings",{configurable:!0,enumerable:!0,get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),u.prototype.__originalMappings=null,Object.defineProperty(u.prototype,"_originalMappings",{configurable:!0,enumerable:!0,get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),u.prototype._charIsMappingSeparator=function(e,t){var n=e.charAt(t);return";"===n||","===n},u.prototype._parseMappings=function(e,t){throw new Error("Subclasses must implement _parseMappings")},u.GENERATED_ORDER=1,u.ORIGINAL_ORDER=2,u.GREATEST_LOWER_BOUND=1,u.LEAST_UPPER_BOUND=2,u.prototype.eachMapping=function(e,t,n){var r,s=t||null;switch(n||u.GENERATED_ORDER){case u.GENERATED_ORDER:r=this._generatedMappings;break;case u.ORIGINAL_ORDER:r=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var o=this.sourceRoot;r.map((function(e){var t=null===e.source?null:this._sources.at(e.source);return{source:t=i.computeSourceURL(o,t,this._sourceMapURL),generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:null===e.name?null:this._names.at(e.name)}}),this).forEach(e,s)},u.prototype.allGeneratedPositionsFor=function(e){var t=i.getArg(e,"line"),n={source:i.getArg(e,"source"),originalLine:t,originalColumn:i.getArg(e,"column",0)};if(n.source=this._findSourceIndex(n.source),n.source<0)return[];var r=[],s=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",i.compareByOriginalPositions,o.LEAST_UPPER_BOUND);if(s>=0){var a=this._originalMappings[s];if(void 0===e.column)for(var c=a.originalLine;a&&a.originalLine===c;)r.push({line:i.getArg(a,"generatedLine",null),column:i.getArg(a,"generatedColumn",null),lastColumn:i.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++s];else for(var l=a.originalColumn;a&&a.originalLine===t&&a.originalColumn==l;)r.push({line:i.getArg(a,"generatedLine",null),column:i.getArg(a,"generatedColumn",null),lastColumn:i.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++s]}return r},r=u,h.prototype=Object.create(u.prototype),h.prototype.consumer=u,h.prototype._findSourceIndex=function(e){var t,n=e;if(null!=this.sourceRoot&&(n=i.relative(this.sourceRoot,n)),this._sources.has(n))return this._sources.indexOf(n);for(t=0;t<this._absoluteSources.length;++t)if(this._absoluteSources[t]==e)return t;return-1},h.fromSourceMap=function(e,t){var n=Object.create(h.prototype),r=n._names=a.fromArray(e._names.toArray(),!0),s=n._sources=a.fromArray(e._sources.toArray(),!0);n.sourceRoot=e._sourceRoot,n.sourcesContent=e._generateSourcesContent(n._sources.toArray(),n.sourceRoot),n.file=e._file,n._sourceMapURL=t,n._absoluteSources=n._sources.toArray().map((function(e){return i.computeSourceURL(n.sourceRoot,e,t)}));for(var o=e._mappings.toArray().slice(),c=n.__generatedMappings=[],u=n.__originalMappings=[],p=0,f=o.length;p<f;p++){var m=o[p],g=new d;g.generatedLine=m.generatedLine,g.generatedColumn=m.generatedColumn,m.source&&(g.source=s.indexOf(m.source),g.originalLine=m.originalLine,g.originalColumn=m.originalColumn,m.name&&(g.name=r.indexOf(m.name)),u.push(g)),c.push(g)}return l(n.__originalMappings,i.compareByOriginalPositions),n},h.prototype._version=3,Object.defineProperty(h.prototype,"sources",{get:function(){return this._absoluteSources.slice()}}),h.prototype._parseMappings=function(e,t){for(var n,r,s,o,a,u=1,h=0,p=0,f=0,m=0,g=0,v=e.length,y=0,_={},w={},b=[],E=[];y<v;)if(";"===e.charAt(y))u++,y++,h=0;else if(","===e.charAt(y))y++;else{for((n=new d).generatedLine=u,o=y;o<v&&!this._charIsMappingSeparator(e,o);o++);if(s=_[r=e.slice(y,o)])y+=r.length;else{for(s=[];y<o;)c.decode(e,y,w),a=w.value,y=w.rest,s.push(a);if(2===s.length)throw new Error("Found a source, but no line and column");if(3===s.length)throw new Error("Found a source and line, but no column");_[r]=s}n.generatedColumn=h+s[0],h=n.generatedColumn,s.length>1&&(n.source=m+s[1],m+=s[1],n.originalLine=p+s[2],p=n.originalLine,n.originalLine+=1,n.originalColumn=f+s[3],f=n.originalColumn,s.length>4&&(n.name=g+s[4],g+=s[4])),E.push(n),"number"==typeof n.originalLine&&b.push(n)}l(E,i.compareByGeneratedPositionsDeflated),this.__generatedMappings=E,l(b,i.compareByOriginalPositions),this.__originalMappings=b},h.prototype._findMapping=function(e,t,n,r,i,s){if(e[n]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[n]);if(e[r]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[r]);return o.search(e,t,i,s)},h.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var t=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var n=this._generatedMappings[e+1];if(t.generatedLine===n.generatedLine){t.lastGeneratedColumn=n.generatedColumn-1;continue}}t.lastGeneratedColumn=1/0}},h.prototype.originalPositionFor=function(e){var t={generatedLine:i.getArg(e,"line"),generatedColumn:i.getArg(e,"column")},n=this._findMapping(t,this._generatedMappings,"generatedLine","generatedColumn",i.compareByGeneratedPositionsDeflated,i.getArg(e,"bias",u.GREATEST_LOWER_BOUND));if(n>=0){var r=this._generatedMappings[n];if(r.generatedLine===t.generatedLine){var s=i.getArg(r,"source",null);null!==s&&(s=this._sources.at(s),s=i.computeSourceURL(this.sourceRoot,s,this._sourceMapURL));var o=i.getArg(r,"name",null);return null!==o&&(o=this._names.at(o)),{source:s,line:i.getArg(r,"originalLine",null),column:i.getArg(r,"originalColumn",null),name:o}}}return{source:null,line:null,column:null,name:null}},h.prototype.hasContentsOfAllSources=function(){return!!this.sourcesContent&&(this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some((function(e){return null==e})))},h.prototype.sourceContentFor=function(e,t){if(!this.sourcesContent)return null;var n=this._findSourceIndex(e);if(n>=0)return this.sourcesContent[n];var r,s=e;if(null!=this.sourceRoot&&(s=i.relative(this.sourceRoot,s)),null!=this.sourceRoot&&(r=i.urlParse(this.sourceRoot))){var o=s.replace(/^file:\/\//,"");if("file"==r.scheme&&this._sources.has(o))return this.sourcesContent[this._sources.indexOf(o)];if((!r.path||"/"==r.path)&&this._sources.has("/"+s))return this.sourcesContent[this._sources.indexOf("/"+s)]}if(t)return null;throw new Error('"'+s+'" is not in the SourceMap.')},h.prototype.generatedPositionFor=function(e){var t=i.getArg(e,"source");if((t=this._findSourceIndex(t))<0)return{line:null,column:null,lastColumn:null};var n={source:t,originalLine:i.getArg(e,"line"),originalColumn:i.getArg(e,"column")},r=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",i.compareByOriginalPositions,i.getArg(e,"bias",u.GREATEST_LOWER_BOUND));if(r>=0){var s=this._originalMappings[r];if(s.source===n.source)return{line:i.getArg(s,"generatedLine",null),column:i.getArg(s,"generatedColumn",null),lastColumn:i.getArg(s,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},p.prototype=Object.create(u.prototype),p.prototype.constructor=u,p.prototype._version=3,Object.defineProperty(p.prototype,"sources",{get:function(){for(var e=[],t=0;t<this._sections.length;t++)for(var n=0;n<this._sections[t].consumer.sources.length;n++)e.push(this._sections[t].consumer.sources[n]);return e}}),p.prototype.originalPositionFor=function(e){var t={generatedLine:i.getArg(e,"line"),generatedColumn:i.getArg(e,"column")},n=o.search(t,this._sections,(function(e,t){var n=e.generatedLine-t.generatedOffset.generatedLine;return n||e.generatedColumn-t.generatedOffset.generatedColumn})),r=this._sections[n];return r?r.consumer.originalPositionFor({line:t.generatedLine-(r.generatedOffset.generatedLine-1),column:t.generatedColumn-(r.generatedOffset.generatedLine===t.generatedLine?r.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}},p.prototype.hasContentsOfAllSources=function(){return this._sections.every((function(e){return e.consumer.hasContentsOfAllSources()}))},p.prototype.sourceContentFor=function(e,t){for(var n=0;n<this._sections.length;n++){var r=this._sections[n].consumer.sourceContentFor(e,!0);if(r)return r}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},p.prototype.generatedPositionFor=function(e){for(var t=0;t<this._sections.length;t++){var n=this._sections[t];if(-1!==n.consumer._findSourceIndex(i.getArg(e,"source"))){var r=n.consumer.generatedPositionFor(e);if(r)return{line:r.line+(n.generatedOffset.generatedLine-1),column:r.column+(n.generatedOffset.generatedLine===r.line?n.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}},p.prototype._parseMappings=function(e,t){this.__generatedMappings=[],this.__originalMappings=[];for(var n=0;n<this._sections.length;n++)for(var r=this._sections[n],s=r.consumer._generatedMappings,o=0;o<s.length;o++){var a=s[o],c=r.consumer._sources.at(a.source);c=i.computeSourceURL(r.consumer.sourceRoot,c,this._sourceMapURL),this._sources.add(c),c=this._sources.indexOf(c);var u=null;a.name&&(u=r.consumer._names.at(a.name),this._names.add(u),u=this._names.indexOf(u));var h={source:c,generatedLine:a.generatedLine+(r.generatedOffset.generatedLine-1),generatedColumn:a.generatedColumn+(r.generatedOffset.generatedLine===a.generatedLine?r.generatedOffset.generatedColumn-1:0),originalLine:a.originalLine,originalColumn:a.originalColumn,name:u};this.__generatedMappings.push(h),"number"==typeof h.originalLine&&this.__originalMappings.push(h)}l(this.__generatedMappings,i.compareByGeneratedPositionsDeflated),l(this.__originalMappings,i.compareByOriginalPositions)}})),s.register("bTtvB",(function(t,n){var r,i,s;function o(e,t,n,r,s,a){var c=Math.floor((t-e)/2)+e,l=s(n,r[c],!0);return 0===l?c:l>0?t-c>1?o(c,t,n,r,s,a):a==i?t<r.length?t:-1:c:c-e>1?o(e,c,n,r,s,a):a==i?c:e<0?-1:e}e(t.exports,"GREATEST_LOWER_BOUND",(function(){return r}),(function(e){return r=e})),e(t.exports,"LEAST_UPPER_BOUND",(function(){return i}),(function(e){return i=e})),e(t.exports,"search",(function(){return s}),(function(e){return s=e})),r=1,i=2,s=function(e,t,n,i){if(0===t.length)return-1;var s=o(-1,t.length,e,t,n,i||r);if(s<0)return-1;for(;s-1>=0&&0===n(t[s],t[s-1],!0);)--s;return s}})),s.register("76ffZ",(function(t,n){var r;function i(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function s(e,t,n,r){if(n<r){var o=n-1;i(e,(u=n,h=r,Math.round(u+Math.random()*(h-u))),r);for(var a=e[r],c=n;c<r;c++)t(e[c],a)<=0&&i(e,o+=1,c);i(e,o+1,c);var l=o+1;s(e,t,n,l-1),s(e,t,l+1,r)}var u,h}e(t.exports,"quickSort",(function(){return r}),(function(e){return r=e})),r=function(e,t){s(e,t,0,e.length-1)}})),s.register("Tx9qF",(function(t,n){var r;e(t.exports,"SourceNode",(function(){return r}),(function(e){return r=e}));var i=s("ic7WM").SourceMapGenerator,o=s("dQK2c"),a=/(\r?\n)/;function c(e,t,n,r,i){this.children=[],this.sourceContents={},this.line=null==e?null:e,this.column=null==t?null:t,this.source=null==n?null:n,this.name=null==i?null:i,this.$$$isSourceNode$$$=!0,null!=r&&this.add(r)}c.fromStringWithSourceMap=function(e,t,n){var r=new c,i=e.split(a),s=0,l=function(){return e()+(e()||"");function e(){return s<i.length?i[s++]:void 0}},u=1,h=0,d=null;return t.eachMapping((function(e){if(null!==d){if(!(u<e.generatedLine)){var t=(n=i[s]||"").substr(0,e.generatedColumn-h);return i[s]=n.substr(e.generatedColumn-h),h=e.generatedColumn,p(d,t),void(d=e)}p(d,l()),u++,h=0}for(;u<e.generatedLine;)r.add(l()),u++;if(h<e.generatedColumn){var n=i[s]||"";r.add(n.substr(0,e.generatedColumn)),i[s]=n.substr(e.generatedColumn),h=e.generatedColumn}d=e}),this),s<i.length&&(d&&p(d,l()),r.add(i.splice(s).join(""))),t.sources.forEach((function(e){var i=t.sourceContentFor(e);null!=i&&(null!=n&&(e=o.join(n,e)),r.setSourceContent(e,i))})),r;function p(e,t){if(null===e||void 0===e.source)r.add(t);else{var i=n?o.join(n,e.source):e.source;r.add(new c(e.originalLine,e.originalColumn,i,t,e.name))}}},c.prototype.add=function(e){if(Array.isArray(e))e.forEach((function(e){this.add(e)}),this);else{if(!e.$$$isSourceNode$$$&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);e&&this.children.push(e)}return this},c.prototype.prepend=function(e){if(Array.isArray(e))for(var t=e.length-1;t>=0;t--)this.prepend(e[t]);else{if(!e.$$$isSourceNode$$$&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);this.children.unshift(e)}return this},c.prototype.walk=function(e){for(var t,n=0,r=this.children.length;n<r;n++)(t=this.children[n]).$$$isSourceNode$$$?t.walk(e):""!==t&&e(t,{source:this.source,line:this.line,column:this.column,name:this.name})},c.prototype.join=function(e){var t,n,r=this.children.length;if(r>0){for(t=[],n=0;n<r-1;n++)t.push(this.children[n]),t.push(e);t.push(this.children[n]),this.children=t}return this},c.prototype.replaceRight=function(e,t){var n=this.children[this.children.length-1];return n.$$$isSourceNode$$$?n.replaceRight(e,t):"string"==typeof n?this.children[this.children.length-1]=n.replace(e,t):this.children.push("".replace(e,t)),this},c.prototype.setSourceContent=function(e,t){this.sourceContents[o.toSetString(e)]=t},c.prototype.walkSourceContents=function(e){for(var t=0,n=this.children.length;t<n;t++)this.children[t].$$$isSourceNode$$$&&this.children[t].walkSourceContents(e);var r=Object.keys(this.sourceContents);for(t=0,n=r.length;t<n;t++)e(o.fromSetString(r[t]),this.sourceContents[r[t]])},c.prototype.toString=function(){var e="";return this.walk((function(t){e+=t})),e},c.prototype.toStringWithSourceMap=function(e){var t={code:"",line:1,column:0},n=new i(e),r=!1,s=null,o=null,a=null,c=null;return this.walk((function(e,i){t.code+=e,null!==i.source&&null!==i.line&&null!==i.column?(s===i.source&&o===i.line&&a===i.column&&c===i.name||n.addMapping({source:i.source,original:{line:i.line,column:i.column},generated:{line:t.line,column:t.column},name:i.name}),s=i.source,o=i.line,a=i.column,c=i.name,r=!0):r&&(n.addMapping({generated:{line:t.line,column:t.column}}),s=null,r=!1);for(var l=0,u=e.length;l<u;l++)10===e.charCodeAt(l)?(t.line++,t.column=0,l+1===u?(s=null,r=!1):r&&n.addMapping({source:i.source,original:{line:i.line,column:i.column},generated:{line:t.line,column:t.column},name:i.name})):t.column++})),this.walkSourceContents((function(e,t){n.setSourceContent(e,t)})),{code:t.code,map:n}},r=c})),s.register("5Io6y",(function(e,t){}));var o,a,c,l=o={};function u(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}function d(e){if(a===setTimeout)return setTimeout(e,0);if((a===u||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:u}catch(e){a=u}try{c="function"==typeof clearTimeout?clearTimeout:h}catch(e){c=h}}();var p,f=[],m=!1,g=-1;function v(){m&&p&&(m=!1,p.length?f=p.concat(f):g=-1,f.length&&y())}function y(){if(!m){var e=d(v);m=!0;for(var t=f.length;t;){for(p=f,f=[];++g<t;)p&&p[g].run();g=-1,t=f.length}p=null,m=!1,function(e){if(c===clearTimeout)return clearTimeout(e);if((c===h||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(e);try{c(e)}catch(t){try{return c.call(null,e)}catch(t){return c.call(this,e)}}}(e)}}function _(e,t){this.fun=e,this.array=t}function w(){}l.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new _(e,t)),1!==f.length||m||d(y)},_.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=w,l.addListener=w,l.once=w,l.off=w,l.removeListener=w,l.removeAllListeners=w,l.emit=w,l.prependListener=w,l.prependOnceListener=w,l.listeners=function(e){return[]},l.binding=function(e){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(e){throw new Error("process.chdir is not supported")},l.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const b=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},E={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=i>>2,u=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(b(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new S;const c=i<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const k=function(e){return function(e){const t=b(e);return E.encodeByteArray(t,!0)}(e).replace(/\./g,"")},I=function(e){try{return E.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const T=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,C=()=>{try{return T()||(()=>{if(void 0===o||void 0===o.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&I(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},A=e=>{var t,n;return null===(n=null===(t=C())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},L=e=>{const t=A(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},P=e=>{var t;return null===(t=C())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[k(JSON.stringify({alg:"none",type:"JWT"})),k(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function D(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function M(){const e=R();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function x(){try{return"object"==typeof indexedDB}catch(e){return!1}}class U extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,U.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,F.prototype.create)}}class F{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(V,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new U(r,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const V=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function j(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(H(n)&&H(s)){if(!j(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function H(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function G(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function K(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e,t){const n=new W(e,t);return n.subscribe.bind(n)}class W{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Q),void 0===r.error&&(r.error=Q),void 0===r.complete&&(r.complete=Q);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function Q(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(e){return e&&e._delegate?e._delegate:e}class X{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Y{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new O;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class Z{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Y(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=[];var te,ne;(ne=te||(te={}))[ne.DEBUG=0]="DEBUG",ne[ne.VERBOSE=1]="VERBOSE",ne[ne.INFO=2]="INFO",ne[ne.WARN=3]="WARN",ne[ne.ERROR=4]="ERROR",ne[ne.SILENT=5]="SILENT";const re={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},ie=te.INFO,se={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},oe=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=se[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class ae{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?re[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}constructor(e){this.name=e,this._logLevel=ie,this._logHandler=oe,this._userLogHandler=null,ee.push(this)}}let ce,le;const ue=new WeakMap,he=new WeakMap,de=new WeakMap,pe=new WeakMap,fe=new WeakMap;let me={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return he.get(e);if("objectStoreNames"===t)return e.objectStoreNames||de.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ye(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ge(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(le||(le=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(_e(this),t),ye(ue.get(this))}:function(...t){return ye(e.apply(_e(this),t))}:function(t,...n){const r=e.call(_e(this),t,...n);return de.set(r,t.sort?t.sort():[t]),ye(r)}}function ve(e){return"function"==typeof e?ge(e):(e instanceof IDBTransaction&&function(e){if(he.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));he.set(e,t)}(e),t=e,(ce||(ce=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,me):e);var t}function ye(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(ye(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&ue.set(t,e)})).catch((()=>{})),fe.set(t,e),t}(e);if(pe.has(e))return pe.get(e);const t=ve(e);return t!==e&&(pe.set(e,t),fe.set(t,e)),t}const _e=e=>fe.get(e);function we(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=ye(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(ye(o.result),e.oldVersion,e.newVersion,ye(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const be=["get","getKey","getAll","getAllKeys","count"],Ee=["put","add","delete","clear"],Se=new Map;function ke(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Se.get(t))return Se.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Ee.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!be.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return Se.set(t,s),s}me=(e=>({...e,get:(t,n,r)=>ke(t,n)||e.get(t,n,r),has:(t,n)=>!!ke(t,n)||e.has(t,n)}))(me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ie{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Te=new ae("@firebase/app"),Ce={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ae=new Map,Le=new Map;function Pe(e,t){try{e.container.addComponent(t)}catch(n){Te.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Oe(e){const t=e.name;if(Le.has(t))return Te.debug(`There were multiple attempts to register component ${t}.`),!1;Le.set(t,e);for(const t of Ae.values())Pe(t,e);return!0}function Ne(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Re=new F("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Re.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new X("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw Re.create("bad-app-name",{appName:String(i)});var s;if(n||(n=null===(s=C())||void 0===s?void 0:s.config),!n)throw Re.create("no-options");const o=Ae.get(i);if(o){if(j(n,o.options)&&j(r,o.config))return o;throw Re.create("duplicate-app",{appName:i})}const a=new Z(i);for(const e of Le.values())a.addComponent(e);const c=new De(n,r,a);return Ae.set(i,c),c}function xe(e="[DEFAULT]"){const t=Ae.get(e);if(!t&&"[DEFAULT]"===e)return Me();if(!t)throw Re.create("no-app",{appName:e});return t}function Ue(e,t,n){var r;let i=null!==(r=Ce[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Te.warn(e.join(" "))}Oe(new X(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}let Fe=null;function Ve(){return Fe||(Fe=we("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw Re.create("idb-open",{originalErrorMessage:e.message})}))),Fe}async function Be(e,t){try{const n=(await Ve()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");return await r.put(t,je(e)),n.done}catch(e){if(e instanceof U)Te.warn(e.message);else{const t=Re.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Te.warn(t.message)}}}function je(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=He();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=He(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Ge(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ge(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=k(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function He(){return(new Date).toISOString().substring(0,10)}class qe{async runIndexedDBEnvironmentCheck(){return!!x()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await Ve()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(je(e))}catch(e){if(e instanceof U)Te.warn(e.message);else{const t=Re.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Te.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Be(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Be(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Ge(e){return k(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke;Ke="",Oe(new X("platform-logger",(e=>new Ie(e)),"PRIVATE")),Oe(new X("heartbeat",(e=>new $e(e)),"PRIVATE")),Ue("@firebase/app","0.9.7",Ke),Ue("@firebase/app","0.9.7","esm2017"),Ue("fire-js","");function ze(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function We(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qe=We,Je=new F("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Xe=new ae("@firebase/auth");function Ye(e,...t){Xe.logLevel<=te.ERROR&&Xe.error(`Auth (9.19.1): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(e,...t){throw rt(e,...t)}function et(e,...t){return rt(e,...t)}function tt(e,t,n){const r=Object.assign(Object.assign({},Qe()),{[t]:n});return new F("auth","Firebase",r).create(t,{appName:e.name})}function nt(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&Ze(e,"argument-error"),tt(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function rt(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Je.create(e,...t)}function it(e,t,...n){if(!e)throw rt(t,...n)}function st(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ye(t),new Error(t)}function ot(e,t){e||st(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=new Map;function ct(e){ot(e instanceof Function,"Expected a class definition");let t=at.get(e);return t?(ot(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,at.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function ut(){return"http:"===ht()||"https:"===ht()}function ht(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(ut()||D()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{get(){return dt()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,ot(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(R())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(e,t){ot(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},vt=new pt(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function _t(e,t,n,r,i={}){return wt(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=q(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),mt.fetch()(Et(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function wt(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},gt),t);try{const t=new St(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw kt(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw kt(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw kt(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw kt(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw tt(e,a,o);Ze(e,a)}}catch(t){if(t instanceof U)throw t;Ze(e,"network-request-failed",{message:String(t)})}}async function bt(e,t,n,r,i={}){const s=await _t(e,t,n,r,i);return"mfaPendingCredential"in s&&Ze(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Et(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?ft(e.config,i):`${e.config.apiScheme}://${i}`}class St{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(et(this.auth,"network-request-failed"))),vt.get())}))}}function kt(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=et(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function It(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(e){return 1e3*Number(e)}function Ct(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Ye("JWT malformed, contained fewer than 3 sections"),null;try{const e=I(n);return e?JSON.parse(e):(Ye("Failed to decode base64 JWT payload"),null)}catch(e){return Ye("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function At(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof U&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Lt{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{_initializeTime(){this.lastSignInTime=It(this.lastLoginAt),this.creationTime=It(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(e){var t;const n=e.auth,r=await e.getIdToken(),i=await At(e,async function(e,t){return _t(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));it(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=ze(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Pt(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){it(e.idToken,"internal-error"),it(void 0!==e.idToken,"internal-error"),it(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Ct(e);return it(t,"internal-error"),it(void 0!==t.exp,"internal-error"),it(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return it(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await wt(e,{},(async()=>{const n=q({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Et(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",mt.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Nt;return n&&(it("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(it("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(it("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nt,this.toJSON())}_performRefresh(){return st("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(e,t){it("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Dt{async getIdToken(e){const t=await At(this,this.stsTokenManager.getToken(this.auth,e));return it(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=J(e),r=await n.getIdToken(t),i=Ct(r);it(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:It(Tt(i.auth_time)),issuedAtTime:It(Tt(i.iat)),expirationTime:It(Tt(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=J(e);await Ot(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(it(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Dt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){it(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ot(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await At(this,async function(e,t){return _t(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:_,isAnonymous:w,providerData:b,stsTokenManager:E}=t;it(y&&E,e,"internal-error");const S=Nt.fromJSON(this.name,E);it("string"==typeof y,e,"internal-error"),Rt(u,e.name),Rt(h,e.name),it("boolean"==typeof _,e,"internal-error"),it("boolean"==typeof w,e,"internal-error"),Rt(d,e.name),Rt(p,e.name),Rt(f,e.name),Rt(m,e.name),Rt(g,e.name),Rt(v,e.name);const k=new Dt({uid:y,auth:e,email:h,emailVerified:_,displayName:u,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:S,createdAt:g,lastLoginAt:v});return b&&Array.isArray(b)&&(k.providerData=b.map((e=>Object.assign({},e)))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new Nt;r.updateFromServerResponse(t);const i=new Dt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Ot(i),i}constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=ze(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Lt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Pt(i.createdAt||void 0,i.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Mt.type="NONE";const xt=Mt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e,t,n){return`firebase:${e}:${t}:${n}`}class Ft{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ft(ct(xt),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||ct(xt);const s=Ut(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=Dt._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new Ft(i,e,n)):new Ft(i,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Ut(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ut("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ht(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Bt(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Gt(t))return"Blackberry";if(Kt(t))return"Webos";if(jt(t))return"Safari";if((t.includes("chrome/")||$t(t))&&!t.includes("edge/"))return"Chrome";if(qt(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Bt(e=R()){return/firefox\//i.test(e)}function jt(e=R()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function $t(e=R()){return/crios\//i.test(e)}function Ht(e=R()){return/iemobile/i.test(e)}function qt(e=R()){return/android/i.test(e)}function Gt(e=R()){return/blackberry/i.test(e)}function Kt(e=R()){return/webos/i.test(e)}function zt(e=R()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Wt(){return M()&&10===document.documentMode}function Qt(e=R()){return zt(e)||qt(e)||Kt(e)||Gt(e)||/windows phone/i.test(e)||Ht(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jt(e,t=[]){let n;switch(e){case"Browser":n=Vt(R());break;case"Worker":n=`${Vt(R())}-${e}`;break;default:n=e}return`${n}/JsCore/9.19.1/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ct(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Ft.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return it(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ot(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?J(e):null;return t&&it(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&it(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ct(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new F("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ct(e)||this._popupRedirectResolver;it(t,this,"argument-error"),this.redirectPersistenceManager=await Ft.create(this,[ct(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return it(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return it(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new en(this),this.idTokenSubscription=new en(this),this.beforeStateQueue=new Xt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Je,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function Zt(e){return J(e)}class en{get next(){return it(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=z((e=>this.observer=e))}}function tn(e,t,n){const r=Zt(e);it(r._canInitEmulator,r,"emulator-config-failed"),it(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=nn(t),{host:o,port:a}=function(e){const t=nn(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:rn(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:rn(t)}}}(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function nn(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function rn(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class sn{toJSON(){return st("not implemented")}_getIdTokenResponse(e){return st("not implemented")}_linkToIdToken(e,t){return st("not implemented")}_getReauthenticationResolver(e){return st("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(e,t){return _t(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class an extends sn{static _fromEmailAndPassword(e,t){return new an(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new an(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return bt(e,"POST","/v1/accounts:signInWithPassword",yt(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return bt(e,"POST","/v1/accounts:signInWithEmailLink",yt(e,t))}(e,{email:this._email,oobCode:this._password});default:Ze(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return on(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return bt(e,"POST","/v1/accounts:signInWithEmailLink",yt(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(e,t){return bt(e,"POST","/v1/accounts:signInWithIdp",yt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends sn{static _fromParams(e){const t=new ln(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=ze(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new ln(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return cn(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,cn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,cn(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=q(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hn extends sn{static _fromVerification(e,t){return new hn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new hn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return bt(e,"POST","/v1/accounts:signInWithPhoneNumber",yt(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await bt(e,"POST","/v1/accounts:signInWithPhoneNumber",yt(e,t));if(n.temporaryProof)throw kt(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return bt(e,"POST","/v1/accounts:signInWithPhoneNumber",yt(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),un)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new hn({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{static parseLink(e){const t=function(e){const t=G(K(e)).link,n=t?G(K(t)).deep_link_id:null,r=G(K(e)).deep_link_id;return(r?G(K(r)).link:null)||r||n||t||e}(e);try{return new dn(t)}catch(e){return null}}constructor(e){var t,n,r,i,s,o;const a=G(K(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);it(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pn{static credential(e,t){return an._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=dn.parseLink(t);return it(n,"argument-error"),an._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=pn.PROVIDER_ID}}pn.PROVIDER_ID="password",pn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",pn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fn{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends fn{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gn extends mn{static credential(e){return ln._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com",gn.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vn extends mn{static credential(e,t){return ln._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return vn.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}vn.GOOGLE_SIGN_IN_METHOD="google.com",vn.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yn extends mn{static credential(e){return ln._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}yn.GITHUB_SIGN_IN_METHOD="github.com",yn.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _n extends mn{static credential(e,t){return ln._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return _n.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function wn(e,t){return bt(e,"POST","/v1/accounts:signUp",yt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_n.TWITTER_SIGN_IN_METHOD="twitter.com",_n.PROVIDER_ID="twitter.com";class bn{static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Dt._fromIdTokenResponse(e,n,r),s=En(n);return new bn({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=En(n);return new bn({user:e,providerId:r,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function En(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sn extends U{static _fromErrorAndOperation(e,t,n,r){return new Sn(e,t,n,r)}constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Sn.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function kn(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Sn._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(e,t,n=!1){const r=await At(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return bn._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Tn(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await At(e,kn(r,i,t,e),n);it(s.idToken,r,"internal-error");const o=Ct(s.idToken);it(o,r,"internal-error");const{sub:a}=o;return it(e.uid===a,r,"user-mismatch"),bn._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Ze(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cn(e,t,n=!1){const r="signIn",i=await kn(e,r,t),s=await bn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function An(e,t){return Cn(Zt(e),t)}async function Ln(e,t,n){const r=Zt(e),i=await wn(r,{returnSecureToken:!0,email:t,password:n}),s=await bn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Pn(e,t,n){return An(J(e),pn.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(e,t,n,r){return J(e).onAuthStateChanged(t,n,r)}function Nn(e){return J(e).signOut()}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rn{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Rn{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Wt()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=R();return jt(e)||zt(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Qt(),this._shouldAllowMigration=!0}}Dn.type="LOCAL";const Mn=Dn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Rn{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}xn.type="SESSION";const Un=xn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fn{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Fn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vn(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fn.receivers=[];class Bn{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Vn("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $n(){return void 0!==jn().WorkerGlobalScope&&"function"==typeof jn().importScripts}class Hn{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function qn(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Gn(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Hn(e).toPromise()}(),t(await Gn()))}))}))}async function Kn(e,t,n){const r=qn(e,!0).put({fbase_key:t,value:n});return new Hn(r).toPromise()}function zn(e,t){const n=qn(e,!0).delete(t);return new Hn(n).toPromise()}class Wn{async _openDb(){return this.db||(this.db=await Gn()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $n()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fn._getInstance($n()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Bn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gn();return await Kn(e,"__sak","1"),await zn(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Kn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=qn(e,!1).get(t),r=await new Hn(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>zn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=qn(e,!1).getAll();return new Hn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Wn.type="LOCAL";const Qn=Wn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(e){return new Promise(((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=et("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function Xn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Xn("rcb"),new pt(3e4,6e4);async function Yn(e,t,n){var r;const i=await n.verify();try{let s;if(it("string"==typeof i,e,"argument-error"),it("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){it("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return _t(e,"POST","/v2/accounts/mfaEnrollment:start",yt(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{it("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;it(n,e,"missing-multi-factor-info");const o=await function(e,t){return _t(e,"POST","/v2/accounts/mfaSignIn:start",yt(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return _t(e,"POST","/v1/accounts:sendVerificationCode",yt(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zn{verifyPhoneNumber(e,t){return Yn(this.auth,e,J(t))}static credential(e,t){return hn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Zn.credentialFromTaggedObject(t)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?hn._fromTokenResponse(t,n):null}constructor(e){this.providerId=Zn.PROVIDER_ID,this.auth=Zt(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function er(e,t){return t?ct(t):(it(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zn.PROVIDER_ID="phone",Zn.PHONE_SIGN_IN_METHOD="phone";class tr extends sn{_getIdTokenResponse(e){return cn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return cn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return cn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function nr(e){return Cn(e.auth,new tr(e),e.bypassAuthState)}function rr(e){const{auth:t,user:n}=e;return it(n,t,"internal-error"),Tn(n,new tr(e),e.bypassAuthState)}async function ir(e){const{auth:t,user:n}=e;return it(n,t,"internal-error"),In(n,new tr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nr;case"linkViaPopup":case"linkViaRedirect":return ir;case"reauthViaPopup":case"reauthViaRedirect":return rr;default:Ze(this.auth,"internal-error")}}resolve(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new pt(2e3,1e4);async function ar(e,t,n){const r=Zt(e);nt(e,t,fn);const i=er(r,n);return new cr(r,"signInViaPopup",t,i).executeNotNull()}class cr extends sr{async executeNotNull(){const e=await this.execute();return it(e,this.auth,"internal-error"),e}async onExecution(){ot(1===this.filter.length,"Popup operations only handle one event");const e=Vn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(et(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,or.get())};e()}constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,cr.currentPopupAction&&cr.currentPopupAction.cancel(),cr.currentPopupAction=this}}cr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lr=new Map;class ur extends sr{async execute(){let e=lr.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=fr(t),r=pr(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}lr.set(this.auth._key(),e)}return this.bypassAuthState||lr.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}async function hr(e,t){return pr(e)._set(fr(t),"true")}function dr(e,t){lr.set(e._key(),t)}function pr(e){return ct(e._redirectPersistence)}function fr(e){return Ut("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(e,t,n){return async function(e,t,n){const r=Zt(e);nt(e,t,fn),await r._initializationPromise;const i=er(r,n);return await hr(i,r),i._openRedirect(r,t,"signInViaRedirect")}(e,t,n)}async function gr(e,t){return await Zt(e)._initializationPromise,vr(e,t,!1)}async function vr(e,t,n=!1){const r=Zt(e),i=er(r,t),s=new ur(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class yr{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wr(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!wr(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(et(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(_r(e))}saveEventToCache(e){this.cachedEventUids.add(_r(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function _r(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function wr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const br=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Er=/^https?/;async function Sr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return _t(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(kr(e))return}catch(e){}Ze(e,"unauthorized-domain")}function kr(e){const t=lt(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Er.test(n))return!1;if(br.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new pt(3e4,6e4);function Tr(){const e=jn().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Cr=null;function Ar(e){return Cr=Cr||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){Tr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Tr(),n(et(e,"network-request-failed"))},timeout:Ir.get()})}if(null===(i=null===(r=jn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=jn().gapi)||void 0===s?void 0:s.load)){const t=Xn("iframefcb");return jn()[t]=()=>{gapi.load?o():n(et(e,"network-request-failed"))},Jn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Cr=null,e}))}(e),Cr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new pt(5e3,15e3),Pr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Or=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Nr(e){const t=e.config;it(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ft(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.19.1"},i=Or.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${q(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Dr{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Mr(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Rr),{width:r.toString(),height:i.toString(),top:s,left:o}),l=R().toLowerCase();n&&(a=$t(l)?"_blank":n),Bt(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=R()){var t;return zt(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Dr(null);const h=window.open(t||"",a,u);it(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Dr(h)}function xr(e,t,n,r,i,s){it(e.config.authDomain,e,"auth-domain-config-required"),it(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.19.1",eventId:i};if(t instanceof fn){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",B(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof mn){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?ft(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${q(a).slice(1)}`}const Ur=class{async _openPopup(e,t,n,r){var i;ot(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Mr(e,xr(e,t,n,lt(),r),Vn())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=xr(e,t,n,lt(),r),jn().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(ot(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Ar(e),n=jn().gapi;return it(n,e,"internal-error"),t.open({where:document.body,url:Nr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=et(e,"network-request-failed"),s=jn().setTimeout((()=>{r(i)}),Lr.get());function o(){jn().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new yr(e);return t.register("authEvent",(t=>{it(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Ze(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Sr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Qt()||jt()||zt()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Un,this._completeRedirectFn=vr,this._overrideRedirectResult=dr}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fr{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){it(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vr=P("authIdTokenMaxAge")||300;let Br=null;var jr;jr="Browser",Oe(new X("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((e,n)=>{it(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),it(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:jr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jt(jr)},o=new Yt(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ct);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Oe(new X("auth-internal",(e=>{const t=Zt(e.getProvider("auth").getImmediate());return new Fr(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Ue("@firebase/auth","0.22.0",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(jr)),Ue("@firebase/auth","0.22.0","esm2017");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ue("firebase","9.19.1","app");var $r,Hr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},qr={},Gr=Gr||{},Kr=Hr||self;function zr(){}function Wr(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function Qr(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var Jr="closure_uid_"+(1e9*Math.random()>>>0),Xr=0;function Yr(e,t,n){return e.call.apply(e.bind,arguments)}function Zr(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function ei(e,t,n){return(ei=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Yr:Zr).apply(null,arguments)}function ti(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function ni(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function ri(){this.s=this.s,this.o=this.o}ri.prototype.s=!1,ri.prototype.na=function(){var e;!this.s&&(this.s=!0,this.M(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,Jr)&&e[Jr]||(e[Jr]=++Xr))},ri.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ii=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function si(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function oi(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(Wr(n)){const t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function ai(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ai.prototype.h=function(){this.defaultPrevented=!0};var ci=function(){if(!Kr.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Kr.addEventListener("test",zr,t),Kr.removeEventListener("test",zr,t)}catch(e){}return e}();function li(e){return/^[\s\xa0]*$/.test(e)}var ui=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function hi(e,t){return e<t?-1:e>t?1:0}function di(){var e=Kr.navigator;return e&&(e=e.userAgent)?e:""}function pi(e){return-1!=di().indexOf(e)}function fi(e){return fi[" "](e),e}fi[" "]=zr;var mi,gi,vi=pi("Opera"),yi=pi("Trident")||pi("MSIE"),_i=pi("Edge"),wi=_i||yi,bi=pi("Gecko")&&!(-1!=di().toLowerCase().indexOf("webkit")&&!pi("Edge"))&&!(pi("Trident")||pi("MSIE"))&&!pi("Edge"),Ei=-1!=di().toLowerCase().indexOf("webkit")&&!pi("Edge");function Si(){var e=Kr.document;return e?e.documentMode:void 0}e:{var ki="",Ii=(gi=di(),bi?/rv:([^\);]+)(\)|;)/.exec(gi):_i?/Edge\/([\d\.]+)/.exec(gi):yi?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(gi):Ei?/WebKit\/(\S+)/.exec(gi):vi?/(?:Version)[ \/]?(\S+)/.exec(gi):void 0);if(Ii&&(ki=Ii?Ii[1]:""),yi){var Ti=Si();if(null!=Ti&&Ti>parseFloat(ki)){mi=String(Ti);break e}}mi=ki}var Ci,Ai={};function Li(){return function(e){var t=Ai;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=ui(String(mi)).split("."),n=ui("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=hi(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||hi(0==i[2].length,0==s[2].length)||hi(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(Kr.document&&yi){var Pi=Si();Ci=Pi||(parseInt(mi,10)||void 0)}else Ci=void 0;var Oi=Ci;function Ni(e,t){if(ai.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(bi){e:{try{fi(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Ri[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ni.X.h.call(this)}}ni(Ni,ai);var Ri={2:"touch",3:"pen",4:"mouse"};Ni.prototype.h=function(){Ni.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Di="closure_listenable_"+(1e6*Math.random()|0),Mi=0;function xi(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++Mi,this.ba=this.ea=!1}function Ui(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Fi(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Vi(e){const t={};for(const n in e)t[n]=e[n];return t}const Bi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ji(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<Bi.length;t++)n=Bi[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function $i(e){this.src=e,this.g={},this.h=0}function Hi(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=ii(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Ui(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function qi(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}$i.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=qi(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):((t=new xi(t,this.src,s,!!r,i)).ea=n,e.push(t)),t};var Gi="closure_lm_"+(1e6*Math.random()|0),Ki={};function zi(e,t,n,r,i){if(r&&r.once)return Qi(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)zi(e,t[s],n,r,i);return null}return n=ns(n),e&&e[Di]?e.N(t,n,Qr(r)?!!r.capture:!!r,i):Wi(e,t,n,!1,r,i)}function Wi(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Qr(i)?!!i.capture:!!i,a=es(e);if(a||(e[Gi]=a=new $i(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=Zi;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ci||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Yi(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Qi(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Qi(e,t[s],n,r,i);return null}return n=ns(n),e&&e[Di]?e.O(t,n,Qr(r)?!!r.capture:!!r,i):Wi(e,t,n,!0,r,i)}function Ji(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Ji(e,t[s],n,r,i);else r=Qr(r)?!!r.capture:!!r,n=ns(n),e&&e[Di]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=qi(s=e.g[t],n,r,i))&&(Ui(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=es(e))&&(t=e.g[t.toString()],e=-1,t&&(e=qi(t,n,r,i)),(n=-1<e?t[e]:null)&&Xi(n))}function Xi(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[Di])Hi(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Yi(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=es(t))?(Hi(n,e),0==n.h&&(n.src=null,t[Gi]=null)):Ui(e)}}}function Yi(e){return e in Ki?Ki[e]:Ki[e]="on"+e}function Zi(e,t){if(e.ba)e=!0;else{t=new Ni(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&Xi(e),e=n.call(r,t)}return e}function es(e){return(e=e[Gi])instanceof $i?e:null}var ts="__closure_events_fn_"+(1e9*Math.random()>>>0);function ns(e){return"function"==typeof e?e:(e[ts]||(e[ts]=function(t){return e.handleEvent(t)}),e[ts])}function rs(){ri.call(this),this.i=new $i(this),this.P=this,this.I=null}function is(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new ai(t,e);else if(t instanceof ai)t.target=t.target||e;else{var i=t;ji(t=new ai(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ss(o,r,!0,t)&&i}if(i=ss(o=t.g=e,r,!0,t)&&i,i=ss(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=ss(o=t.g=n[s],r,!1,t)&&i}function ss(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Hi(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}ni(rs,ri),rs.prototype[Di]=!0,rs.prototype.removeEventListener=function(e,t,n,r){Ji(this,e,t,n,r)},rs.prototype.M=function(){if(rs.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ui(n[r]);delete t.g[e],t.h--}}this.I=null},rs.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},rs.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var os=Kr.JSON.stringify;function as(){var e=fs;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var cs,ls=new class{get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}}((()=>new us),(e=>e.reset()));class us{set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function hs(e){Kr.setTimeout((()=>{throw e}),0)}function ds(e,t){cs||function(){var e=Kr.Promise.resolve(void 0);cs=function(){e.then(ms)}}(),ps||(cs(),ps=!0),fs.add(e,t)}var ps=!1,fs=new class{add(e,t){const n=ls.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function ms(){for(var e;e=as();){try{e.h.call(e.g)}catch(e){hs(e)}var t=ls;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ps=!1}function gs(e,t){rs.call(this),this.h=e||1,this.g=t||Kr,this.j=ei(this.lb,this),this.l=Date.now()}function vs(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function ys(e,t,n){if("function"==typeof e)n&&(e=ei(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=ei(e.handleEvent,e)}return 2147483647<Number(t)?-1:Kr.setTimeout(e,t||0)}function _s(e){e.g=ys((()=>{e.g=null,e.i&&(e.i=!1,_s(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}ni(gs,rs),($r=gs.prototype).ca=!1,$r.R=null,$r.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),is(this,"tick"),this.ca&&(vs(this),this.start()))}},$r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},$r.M=function(){gs.X.M.call(this),vs(this),delete this.g};class ws extends ri{l(e){this.h=arguments,this.g?this.i=!0:_s(this)}M(){super.M(),this.g&&(Kr.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}}function bs(e){ri.call(this),this.h=e,this.g={}}ni(bs,ri);var Es=[];function Ss(e,t,n,r){Array.isArray(n)||(n&&(Es[0]=n.toString()),n=Es);for(var i=0;i<n.length;i++){var s=zi(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function ks(e){Fi(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Xi(e)}),e),e.g={}}function Is(){this.g=!0}function Ts(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return os(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}bs.prototype.M=function(){bs.X.M.call(this),ks(this)},bs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Is.prototype.Aa=function(){this.g=!1},Is.prototype.info=function(){};var Cs={},As=null;function Ls(){return As=As||new rs}function Ps(e){ai.call(this,Cs.Pa,e)}function Os(e){const t=Ls();is(t,new Ps(t))}function Ns(e,t){ai.call(this,Cs.STAT_EVENT,e),this.stat=t}function Rs(e){const t=Ls();is(t,new Ns(t,e))}function Ds(e,t){ai.call(this,Cs.Qa,e),this.size=t}function Ms(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return Kr.setTimeout((function(){e()}),t)}Cs.Pa="serverreachability",ni(Ps,ai),Cs.STAT_EVENT="statevent",ni(Ns,ai),Cs.Qa="timingevent",ni(Ds,ai);var xs={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Us={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Fs(){}function Vs(e){return e.h||(e.h=e.i())}function Bs(){}Fs.prototype.h=null;var js,$s={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Hs(){ai.call(this,"d")}function qs(){ai.call(this,"c")}function Gs(){}function Ks(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new bs(this),this.O=Ws,e=wi?125:void 0,this.T=new gs(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new zs}function zs(){this.i=null,this.g="",this.h=!1}ni(Hs,ai),ni(qs,ai),ni(Gs,Fs),Gs.prototype.g=function(){return new XMLHttpRequest},Gs.prototype.i=function(){return{}},js=new Gs;var Ws=45e3,Qs={},Js={};function Xs(e,t,n){e.K=1,e.v=vo(ho(t)),e.s=n,e.P=!0,Ys(e,null)}function Ys(e,t){e.F=Date.now(),no(e),e.A=ho(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),Po(n.i,"t",r),e.C=0,n=e.l.H,e.h=new zs,e.g=La(e.l,n?t:null,!e.s),0<e.N&&(e.L=new ws(ei(e.La,e,e.g),e.N)),Ss(e.S,e.g,"readystatechange",e.ib),t=e.H?Vi(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Os(),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function Zs(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function eo(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=to(e,n),r==Js){4==t&&(e.o=4,Rs(14),i=!1),Ts(e.j,e.m,null,"[Incomplete Response]");break}if(r==Qs){e.o=4,Rs(15),Ts(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ts(e.j,e.m,r,null),ao(e,r)}Zs(e)&&r!=Js&&r!=Qs&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Rs(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ba(t),t.K=!0,Rs(11))):(Ts(e.j,e.m,n,"[Invalid Chunked Response]"),oo(e),so(e))}function to(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Js:(n=Number(t.substring(n,r)),isNaN(n)?Qs:(r+=1)+n>t.length?Js:(t=t.substr(r,n),e.C=r+n,t))}function no(e){e.V=Date.now()+e.O,ro(e,e.O)}function ro(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Ms(ei(e.gb,e),t)}function io(e){e.B&&(Kr.clearTimeout(e.B),e.B=null)}function so(e){0==e.l.G||e.I||ka(e.l,e)}function oo(e){io(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,vs(e.T),ks(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function ao(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||xo(n.h,e)))if(!e.J&&xo(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Sa(n),pa(n)}wa(n),Rs(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=Ms(ei(n.cb,n),6e3));if(1>=Mo(n.h)&&n.ja){try{n.ja()}catch(e){}n.ja=void 0}}else Ta(n,11)}else if((e.J||n.g==e)&&Sa(n),!li(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.T=l[0],l=l[1],2==n.G)if("c"==l[0]){n.I=l[1],n.ka=l[2];const t=l[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const i=l[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Uo(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,go(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=e;if((r=n).sa=Aa(r,r.H?r.ka:null,r.V),o.J){Fo(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(io(a),no(a)),r.g=o}else _a(r);0<n.i.length&&ma(n)}else"stop"!=l[0]&&"close"!=l[0]||Ta(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Ta(n,7):da(n):"noop"!=l[0]&&n.l&&n.l.wa(l),n.A=0)}Os()}catch(e){}}function co(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Wr(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(Wr(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(Wr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}($r=Ks.prototype).setTimeout=function(e){this.O=e},$r.ib=function(e){e=e.target;const t=this.L;t&&3==oa(e)?t.l():this.La(e)},$r.La=function(e){try{if(e==this.g)e:{const u=oa(this.g);var t=this.g.Ea();this.g.aa();if(!(3>u)&&(3!=u||wi||this.g&&(this.h.h||this.g.fa()||aa(this.g)))){this.I||4!=u||7==t||Os(),io(this);var n=this.g.aa();this.Y=n;t:if(Zs(this)){var r=aa(this.g);e="";var i=r.length,s=4==oa(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){oo(this),so(this);var o="";break t}this.h.i=new Kr.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!li(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,Rs(12),oo(this),so(this);break e}Ts(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ao(this,n)}this.P?(eo(this,u,o),wi&&this.i&&3==u&&(Ss(this.S,this.T,"tick",this.hb),this.T.start())):(Ts(this.j,this.m,o,null),ao(this,o)),4==u&&oo(this),this.i&&!this.I&&(4==u?ka(this.l,this):(this.i=!1,no(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Rs(12)):(this.o=0,Rs(13)),oo(this),so(this)}}}catch(e){}},$r.hb=function(){if(this.g){var e=oa(this.g),t=this.g.fa();this.C<t.length&&(io(this),eo(this,e,t),this.i&&4!=e&&no(this))}},$r.cancel=function(){this.I=!0,oo(this)},$r.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(Os(),Rs(17)),oo(this),this.o=2,so(this)):ro(this,this.V-e)};var lo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uo(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof uo){this.h=void 0!==t?t:e.h,po(this,e.j),this.s=e.s,this.g=e.g,fo(this,e.m),this.l=e.l,t=e.i;var n=new To;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),mo(this,n),this.o=e.o}else e&&(n=String(e).match(lo))?(this.h=!!t,po(this,n[1]||"",!0),this.s=yo(n[2]||""),this.g=yo(n[3]||"",!0),fo(this,n[4]),this.l=yo(n[5]||"",!0),mo(this,n[6]||"",!0),this.o=yo(n[7]||"")):(this.h=!!t,this.i=new To(null,this.h))}function ho(e){return new uo(e)}function po(e,t,n){e.j=n?yo(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function fo(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function mo(e,t,n){t instanceof To?(e.i=t,function(e,t){t&&!e.j&&(Co(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Ao(this,t),Po(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=_o(t,ko)),e.i=new To(t,e.h))}function go(e,t,n){e.i.set(t,n)}function vo(e){return go(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function yo(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function _o(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,wo),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function wo(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}uo.prototype.toString=function(){var e=[],t=this.j;t&&e.push(_o(t,bo,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(_o(t,bo,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(_o(n,"/"==n.charAt(0)?So:Eo,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",_o(n,Io)),e.join("")};var bo=/[#\/\?@]/g,Eo=/[#\?:]/g,So=/[#\?]/g,ko=/[#\?@]/g,Io=/#/g;function To(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Co(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Ao(e,t){Co(e),t=Oo(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Lo(e,t){return Co(e),t=Oo(e,t),e.g.has(t)}function Po(e,t,n){Ao(e,t),0<n.length&&(e.i=null,e.g.set(Oo(e,t),si(n)),e.h+=n.length)}function Oo(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}($r=To.prototype).add=function(e,t){Co(this),this.i=null,e=Oo(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},$r.forEach=function(e,t){Co(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},$r.oa=function(){Co(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},$r.W=function(e){Co(this);let t=[];if("string"==typeof e)Lo(this,e)&&(t=t.concat(this.g.get(Oo(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},$r.set=function(e,t){return Co(this),this.i=null,Lo(this,e=Oo(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},$r.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},$r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function No(e){this.l=e||Ro,Kr.PerformanceNavigationTiming?e=0<(e=Kr.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(Kr.g&&Kr.g.Ga&&Kr.g.Ga()&&Kr.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ro=10;function Do(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Mo(e){return e.h?1:e.g?e.g.size:0}function xo(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Uo(e,t){e.g?e.g.add(t):e.h=t}function Fo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Vo(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return si(e.i)}function Bo(){}function jo(){this.g=new Bo}function $o(e,t,n){const r=n||"";try{co(e,(function(e,n){let i=e;Qr(e)&&(i=os(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function Ho(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function qo(e){this.l=e.ac||null,this.j=e.jb||!1}function Go(e,t){rs.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ko,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}No.prototype.cancel=function(){if(this.i=Vo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Bo.prototype.stringify=function(e){return Kr.JSON.stringify(e,void 0)},Bo.prototype.parse=function(e){return Kr.JSON.parse(e,void 0)},ni(qo,Fs),qo.prototype.g=function(){return new Go(this.l,this.j)},qo.prototype.i=function(e){return function(){return e}}({}),ni(Go,rs);var Ko=0;function zo(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function Wo(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Qo(e)}function Qo(e){e.onreadystatechange&&e.onreadystatechange.call(e)}($r=Go.prototype).open=function(e,t){if(this.readyState!=Ko)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Qo(this)},$r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||Kr).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},$r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Wo(this)),this.readyState=Ko},$r.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Qo(this)),this.g&&(this.readyState=3,Qo(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==Kr.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;zo(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},$r.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Wo(this):Qo(this),3==this.readyState&&zo(this)}},$r.Va=function(e){this.g&&(this.response=this.responseText=e,Wo(this))},$r.Ua=function(e){this.g&&(this.response=e,Wo(this))},$r.ga=function(){this.g&&Wo(this)},$r.setRequestHeader=function(e,t){this.v.append(e,t)},$r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},$r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Go.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Jo=Kr.JSON.parse;function Xo(e){rs.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Yo,this.K=this.L=!1}ni(Xo,rs);var Yo="",Zo=/^https?$/i,ea=["POST","PUT"];function ta(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,na(e),ia(e)}function na(e){e.D||(e.D=!0,is(e,"complete"),is(e,"error"))}function ra(e){if(e.h&&void 0!==Gr&&(!e.C[1]||4!=oa(e)||2!=e.aa()))if(e.v&&4==oa(e))ys(e.Ha,0,e);else if(is(e,"readystatechange"),4==oa(e)){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.H).match(lo)[1]||null;if(!i&&Kr.self&&Kr.self.location){var s=Kr.self.location.protocol;i=s.substr(0,s.length-1)}r=!Zo.test(i?i.toLowerCase():"")}n=r}if(n)is(e,"complete"),is(e,"success");else{e.m=6;try{var o=2<oa(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.aa()+"]",na(e)}}finally{ia(e)}}}function ia(e,t){if(e.g){sa(e);const n=e.g,r=e.C[0]?zr:null;e.g=null,e.C=null,t||is(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function sa(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(Kr.clearTimeout(e.A),e.A=null)}function oa(e){return e.g?e.g.readyState:0}function aa(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Yo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ca(e){let t="";return Fi(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function la(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ca(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):go(e,t,n))}function ua(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ha(e){this.Ca=0,this.i=[],this.j=new Is,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ua("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ua("baseRetryDelayMs",5e3,e),this.bb=ua("retryDelaySeedMs",1e4,e),this.$a=ua("forwardChannelMaxRetries",2,e),this.ta=ua("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new No(e&&e.concurrentRequestLimit),this.Fa=new jo,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function da(e){if(fa(e),3==e.G){var t=e.U++,n=ho(e.F);go(n,"SID",e.I),go(n,"RID",t),go(n,"TYPE","terminate"),va(e,n),(t=new Ks(e,e.j,t,void 0)).K=2,t.v=vo(ho(n)),n=!1,Kr.navigator&&Kr.navigator.sendBeacon&&(n=Kr.navigator.sendBeacon(t.v.toString(),"")),!n&&Kr.Image&&((new Image).src=t.v,n=!0),n||(t.g=La(t.l,null),t.g.da(t.v)),t.F=Date.now(),no(t)}Ca(e)}function pa(e){e.g&&(ba(e),e.g.cancel(),e.g=null)}function fa(e){pa(e),e.u&&(Kr.clearTimeout(e.u),e.u=null),Sa(e),e.h.cancel(),e.m&&("number"==typeof e.m&&Kr.clearTimeout(e.m),e.m=null)}function ma(e){Do(e.h)||e.m||(e.m=!0,ds(e.Ja,e),e.C=0)}function ga(e,t){var n;n=t?t.m:e.U++;const r=ho(e.F);go(r,"SID",e.I),go(r,"RID",n),go(r,"AID",e.T),va(e,r),e.o&&e.s&&la(r,e.o,e.s),n=new Ks(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=ya(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Uo(e.h,n),Xs(n,r,t)}function va(e,t){e.ia&&Fi(e.ia,(function(e,n){go(t,n,e)})),e.l&&co({},(function(e,n){go(t,n,e)}))}function ya(e,t,n){n=Math.min(e.i.length,n);var r=e.l?ei(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{$o(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function _a(e){e.g||e.u||(e.Z=1,ds(e.Ia,e),e.A=0)}function wa(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=Ms(ei(e.Ia,e),Ia(e,e.A)),e.A++,!0)}function ba(e){null!=e.B&&(Kr.clearTimeout(e.B),e.B=null)}function Ea(e){e.g=new Ks(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=ho(e.sa);go(t,"RID","rpc"),go(t,"SID",e.I),go(t,"CI",e.L?"0":"1"),go(t,"AID",e.T),go(t,"TYPE","xmlhttp"),va(e,t),e.o&&e.s&&la(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=vo(ho(t)),n.s=null,n.P=!0,Ys(n,e)}function Sa(e){null!=e.v&&(Kr.clearTimeout(e.v),e.v=null)}function ka(e,t){var n=null;if(e.g==t){Sa(e),ba(e),e.g=null;var r=2}else{if(!xo(e.h,t))return;n=t.D,Fo(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;is(r=Ls(),new Ds(r,n)),ma(e)}else _a(e);else if(3==(i=t.o)||0==i&&0<e.pa||!(1==r&&function(e,t){return!(Mo(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.C>=(e.Za?0:e.$a)||(e.m=Ms(ei(e.Ja,e,t),Ia(e,e.C)),e.C++,0)))}(e,t)||2==r&&wa(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Ta(e,5);break;case 4:Ta(e,10);break;case 3:Ta(e,6);break;default:Ta(e,2)}}function Ia(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Ta(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=ei(e.kb,e);n||(n=new uo("//www.google.com/images/cleardot.gif"),Kr.location&&"http"==Kr.location.protocol||po(n,"https"),vo(n)),function(e,t){const n=new Is;if(Kr.Image){const r=new Image;r.onload=ti(Ho,n,r,"TestLoadImage: loaded",!0,t),r.onerror=ti(Ho,n,r,"TestLoadImage: error",!1,t),r.onabort=ti(Ho,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=ti(Ho,n,r,"TestLoadImage: timeout",!1,t),Kr.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else Rs(2);e.G=0,e.l&&e.l.va(t),Ca(e),fa(e)}function Ca(e){if(e.G=0,e.la=[],e.l){const t=Vo(e.h);0==t.length&&0==e.i.length||(oi(e.la,t),oi(e.la,e.i),e.h.i.length=0,si(e.i),e.i.length=0),e.l.ua()}}function Aa(e,t,n){var r=n instanceof uo?ho(n):new uo(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),fo(r,r.m);else{var i=Kr.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new uo(null,void 0);r&&po(s,r),t&&(s.g=t),i&&fo(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&go(r,n,t),go(r,"VER",e.ma),va(e,r),r}function La(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new Xo(new qo({jb:!0})):new Xo(e.ra)).Ka(e.H),t}function Pa(){}function Oa(){if(yi&&!(10<=Number(Oi)))throw Error("Environmental error: no available transport.")}function Na(e,t){rs.call(this),this.g=new ha(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!li(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!li(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Ma(this)}function Ra(e){Hs.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Da(){qs.call(this),this.status=1}function Ma(e){this.g=e}($r=Xo.prototype).Ka=function(e){this.L=e},$r.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():js.g(),this.C=this.u?Vs(this.u):Vs(js),this.g.onreadystatechange=ei(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void ta(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=Kr.FormData&&e instanceof Kr.FormData,!(0<=ii(ea,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{sa(this),0<this.B&&((this.K=function(e){return yi&&Li()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ei(this.qa,this)):this.A=ys(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){ta(this,e)}},$r.qa=function(){void 0!==Gr&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,is(this,"timeout"),this.abort(8))},$r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,is(this,"complete"),is(this,"abort"),ia(this))},$r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ia(this,!0)),Xo.X.M.call(this)},$r.Ha=function(){this.s||(this.F||this.v||this.l?ra(this):this.fb())},$r.fb=function(){ra(this)},$r.aa=function(){try{return 2<oa(this)?this.g.status:-1}catch(e){return-1}},$r.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},$r.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Jo(t)}},$r.Ea=function(){return this.m},$r.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},($r=ha.prototype).ma=8,$r.G=1,$r.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new Ks(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=Vi(s),ji(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=ya(this,i,t),go(n=ho(this.F),"RID",e),go(n,"CVER",22),this.D&&go(n,"X-HTTP-Session-Id",this.D),va(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(ca(s)))+"&"+t:this.o&&la(n,this.o,s)),Uo(this.h,i),this.Ya&&go(n,"TYPE","init"),this.O?(go(n,"$req",t),go(n,"SID","null"),i.Z=!0,Xs(i,n,null)):Xs(i,n,t),this.G=2}}else 3==this.G&&(e?ga(this,e):0==this.i.length||Do(this.h)||ga(this))},$r.Ia=function(){if(this.u=null,Ea(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Ms(ei(this.eb,this),e)}},$r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Rs(10),pa(this),Ea(this))},$r.cb=function(){null!=this.v&&(this.v=null,pa(this),wa(this),Rs(19))},$r.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Rs(2)):(this.j.info("Failed to ping google.com"),Rs(1))},($r=Pa.prototype).xa=function(){},$r.wa=function(){},$r.va=function(){},$r.ua=function(){},$r.Ra=function(){},Oa.prototype.g=function(e,t){return new Na(e,t)},ni(Na,rs),Na.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Rs(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Aa(e,null,e.V),ma(e)},Na.prototype.close=function(){da(this.g)},Na.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=os(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.ab++,e)),3==t.G&&ma(t)},Na.prototype.M=function(){this.g.l=null,delete this.j,da(this.g),delete this.g,Na.X.M.call(this)},ni(Ra,Hs),ni(Da,qs),ni(Ma,Pa),Ma.prototype.xa=function(){is(this.g,"a")},Ma.prototype.wa=function(e){is(this.g,new Ra(e))},Ma.prototype.va=function(e){is(this.g,new Da)},Ma.prototype.ua=function(){is(this.g,"b")},Oa.prototype.createWebChannel=Oa.prototype.g,Na.prototype.send=Na.prototype.u,Na.prototype.open=Na.prototype.m,Na.prototype.close=Na.prototype.close,xs.NO_ERROR=0,xs.TIMEOUT=8,xs.HTTP_ERROR=6,Us.COMPLETE="complete",Bs.EventType=$s,$s.OPEN="a",$s.CLOSE="b",$s.ERROR="c",$s.MESSAGE="d",rs.prototype.listen=rs.prototype.N,Xo.prototype.listenOnce=Xo.prototype.O,Xo.prototype.getLastError=Xo.prototype.Oa,Xo.prototype.getLastErrorCode=Xo.prototype.Ea,Xo.prototype.getStatus=Xo.prototype.aa,Xo.prototype.getResponseJson=Xo.prototype.Sa,Xo.prototype.getResponseText=Xo.prototype.fa,Xo.prototype.send=Xo.prototype.da,Xo.prototype.setWithCredentials=Xo.prototype.Ka;var xa=qr.createWebChannelTransport=function(){return new Oa},Ua=qr.getStatEventTarget=function(){return Ls()},Fa=qr.ErrorCode=xs,Va=qr.EventType=Us,Ba=qr.Event=Cs,ja=qr.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},$a=qr.FetchXmlHttpFactory=qo,Ha=qr.WebChannel=Bs,qa=qr.XhrIo=Xo;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ga{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}constructor(e){this.uid=e}}Ga.UNAUTHENTICATED=new Ga(null),Ga.GOOGLE_CREDENTIALS=new Ga("google-credentials-uid"),Ga.FIRST_PARTY=new Ga("first-party-uid"),Ga.MOCK_USER=new Ga("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ka="9.19.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=new ae("@firebase/firestore");function Wa(){return za.logLevel}function Qa(e,...t){if(za.logLevel<=te.DEBUG){const n=t.map(Ya);za.debug(`Firestore (${Ka}): ${e}`,...n)}}function Ja(e,...t){if(za.logLevel<=te.ERROR){const n=t.map(Ya);za.error(`Firestore (${Ka}): ${e}`,...n)}}function Xa(e,...t){if(za.logLevel<=te.WARN){const n=t.map(Ya);za.warn(`Firestore (${Ka}): ${e}`,...n)}}function Ya(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(e="Unexpected state"){const t=`FIRESTORE (${Ka}) INTERNAL ASSERTION FAILED: `+e;throw Ja(t),new Error(t)}function ec(e,t){e||Za()}function tc(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class rc extends U{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ga.UNAUTHENTICATED)))}shutdown(){}}class ac{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}constructor(e){this.token=e,this.changeListener=null}}class cc{start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new ic;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ic,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Qa("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Qa("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ic)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Qa("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(ec("string"==typeof t.accessToken),new sc(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ec(null===e||"string"==typeof e),new Ga(e)}constructor(e){this.t=e,this.currentUser=Ga.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class lc{p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=Ga.FIRST_PARTY,this.g=new Map}}class uc{getToken(){return Promise.resolve(new lc(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Ga.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(e,t,n){this.h=e,this.l=t,this.m=n}}class hc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dc{start(e,t){const n=e=>{null!=e.error&&Qa("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,Qa("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Qa("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?r(e):Qa("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(ec("string"==typeof e.token),this.T=e.token,new hc(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pc(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=pc(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function mc(e,t){return e<t?-1:e>t?1:0}function gc(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vc{static now(){return vc.fromMillis(Date.now())}static fromDate(e){return vc.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new vc(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?mc(this.nanoseconds,e.nanoseconds):mc(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new rc(nc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new rc(nc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new rc(nc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new rc(nc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{static fromTimestamp(e){return new yc(e)}static min(){return new yc(new vc(0,0))}static max(){return new yc(new vc(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(e){this.timestamp=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{get length(){return this.len}isEqual(e){return 0===_c.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof _c?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}constructor(e,t,n){void 0===t?t=0:t>e.length&&Za(),void 0===n?n=e.length-t:n>e.length-t&&Za(),this.segments=e,this.offset=t,this.len=n}}class wc extends _c{construct(e,t,n){return new wc(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new rc(nc.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new wc(t)}static emptyPath(){return new wc([])}}const bc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ec extends _c{construct(e,t,n){return new Ec(e,t,n)}static isValidIdentifier(e){return bc.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ec.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ec(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new rc(nc.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new rc(nc.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new rc(nc.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new rc(nc.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ec(t)}static emptyPath(){return new Ec([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{static fromPath(e){return new Sc(wc.fromString(e))}static fromName(e){return new Sc(wc.fromString(e).popFirst(5))}static empty(){return new Sc(wc.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===wc.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return wc.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Sc(new wc(e.slice()))}constructor(e){this.path=e}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}kc.UNKNOWN_ID=-1;function Ic(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=yc.fromTimestamp(1e9===r?new vc(n+1,0):new vc(n,r));return new Cc(i,Sc.empty(),t)}function Tc(e){return new Cc(e.readTime,e.key,-1)}class Cc{static min(){return new Cc(yc.min(),Sc.empty(),-1)}static max(){return new Cc(yc.max(),Sc.empty(),-1)}constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}}function Ac(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Sc.comparator(e.documentKey,t.documentKey),0!==n?n:mc(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pc{addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}constructor(){this.onCommittedListeners=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oc(e){if(e.code!==nc.FAILED_PRECONDITION||e.message!==Lc)throw e;Qa("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Za(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Nc(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Nc?t:Nc.resolve(t)}catch(e){return Nc.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Nc.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Nc.reject(t)}static resolve(e){return new Nc(((t,n)=>{t(e)}))}static reject(e){return new Nc(((t,n)=>{n(e)}))}static waitFor(e){return new Nc(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Nc.resolve(!1);for(const n of e)t=t.next((e=>e?Nc.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Nc(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Nc(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dc{ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}}function Mc(e){return null==e}function xc(e){return 0===e&&1/e==-1/0}function Uc(e){return"number"==typeof e&&Number.isInteger(e)&&!xc(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dc.ct=-1;const Fc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Vc=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Bc=Vc;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jc(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function $c(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Hc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{insert(e,t){return new qc(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Kc.BLACK,null,null))}remove(e){return new qc(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Kc.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gc(this.root,e,this.comparator,!0)}constructor(e,t){this.comparator=e,this.root=t||Kc.EMPTY}}class Gc{getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}}class Kc{copy(e,t,n,r,i){return new Kc(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Kc.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Kc.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Kc.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Kc.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Za();if(this.right.isRed())throw Za();const e=this.left.check();if(e!==this.right.check())throw Za();return e+(this.isRed()?0:1)}constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Kc.RED,this.left=null!=r?r:Kc.EMPTY,this.right=null!=i?i:Kc.EMPTY,this.size=this.left.size+1+this.right.size}}Kc.EMPTY=null,Kc.RED=!0,Kc.BLACK=!1,Kc.EMPTY=new class{get key(){throw Za()}get value(){throw Za()}get color(){throw Za()}get left(){throw Za()}get right(){throw Za()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Kc(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zc{has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Wc(this.data.getIterator())}getIteratorFrom(e){return new Wc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof zc))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new zc(this.comparator);return t.data=e,t}constructor(e){this.comparator=e,this.data=new qc(this.comparator)}}class Wc{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(e){this.iter=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qc{static empty(){return new Qc([])}unionWith(e){let t=new zc(Ec.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new Qc(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return gc(this.fields,e.fields,((e,t)=>e.isEqual(t)))}constructor(e){this.fields=e,e.sort(Ec.comparator)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xc=Symbol.iterator;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Jc("Invalid base64 string: "+e):e}}(e);return new Yc(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Yc(t)}[Xc](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return mc(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}constructor(e){this.binaryString=e}}Yc.EMPTY_BYTE_STRING=new Yc("");const Zc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function el(e){if(ec(!!e),"string"==typeof e){let t=0;const n=Zc.exec(e);if(ec(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:tl(e.seconds),nanos:tl(e.nanos)}}function tl(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function nl(e){return"string"==typeof e?Yc.fromBase64String(e):Yc.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function il(e){const t=el(e.mapValue.fields.__local_write_time__.timestampValue);return new vc(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class ol{static empty(){return new ol("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ol&&e.projectId===this.projectId&&e.database===this.database}constructor(e,t){this.projectId=e,this.database=t||"(default)"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function cl(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?rl(e)?4:_l(e)?9007199254740991:10:Za()}function ll(e,t){if(e===t)return!0;const n=cl(e);if(n!==cl(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return il(e).isEqual(il(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=el(e.timestampValue),r=el(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,nl(e.bytesValue).isEqual(nl(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return tl(e.geoPointValue.latitude)===tl(t.geoPointValue.latitude)&&tl(e.geoPointValue.longitude)===tl(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return tl(e.integerValue)===tl(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=tl(e.doubleValue),r=tl(t.doubleValue);return n===r?xc(n)===xc(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return gc(e.arrayValue.values||[],t.arrayValue.values||[],ll);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(jc(n)!==jc(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!ll(n[e],r[e])))return!1;return!0}(e,t);default:return Za()}var r}function ul(e,t){return void 0!==(e.values||[]).find((e=>ll(e,t)))}function hl(e,t){if(e===t)return 0;const n=cl(e),r=cl(t);if(n!==r)return mc(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return mc(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=tl(e.integerValue||e.doubleValue),r=tl(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return dl(e.timestampValue,t.timestampValue);case 4:return dl(il(e),il(t));case 5:return mc(e.stringValue,t.stringValue);case 6:return function(e,t){const n=nl(e),r=nl(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=mc(n[e],r[e]);if(0!==t)return t}return mc(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=mc(tl(e.latitude),tl(t.latitude));return 0!==n?n:mc(tl(e.longitude),tl(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=hl(n[e],r[e]);if(t)return t}return mc(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===al.mapValue&&t===al.mapValue)return 0;if(e===al.mapValue)return 1;if(t===al.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=mc(r[e],s[e]);if(0!==t)return t;const o=hl(n[r[e]],i[s[e]]);if(0!==o)return o}return mc(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Za()}}function dl(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return mc(e,t);const n=el(e),r=el(t),i=mc(n.seconds,r.seconds);return 0!==i?i:mc(n.nanos,r.nanos)}function pl(e){return fl(e)}function fl(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=el(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?nl(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Sc.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=fl(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${fl(e.fields[i])}`;return n+"}"}(e.mapValue):Za()}function ml(e){return!!e&&"integerValue"in e}function gl(e){return!!e&&"arrayValue"in e}function vl(e){return!!e&&"mapValue"in e}function yl(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return $c(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=yl(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=yl(e.arrayValue.values[n]);return t}return Object.assign({},e)}function _l(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wl{static empty(){return new wl({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!vl(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=yl(t)}setAll(e){let t=Ec.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=yl(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());vl(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ll(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];vl(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){$c(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new wl(yl(this.value))}constructor(e){this.value=e}}function bl(e){const t=[];return $c(e.fields,((e,n)=>{const r=new Ec([e]);if(vl(n)){const e=bl(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Qc(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class El{static newInvalidDocument(e){return new El(e,0,yc.min(),yc.min(),yc.min(),wl.empty(),0)}static newFoundDocument(e,t,n,r){return new El(e,1,t,yc.min(),n,r,0)}static newNoDocument(e,t){return new El(e,2,t,yc.min(),yc.min(),wl.empty(),0)}static newUnknownDocument(e,t){return new El(e,3,t,yc.min(),yc.min(),wl.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(yc.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wl.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wl.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=yc.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof El&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new El(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,t){this.position=e,this.inclusive=t}}function kl(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Sc.comparator(Sc.fromName(o.referenceValue),n.key):hl(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Il(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ll(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t="asc"){this.field=e,this.dir=t}}function Cl(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{}class Ll extends Al{static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Ul(e,t,n):"array-contains"===t?new jl(e,n):"in"===t?new $l(e,n):"not-in"===t?new Hl(e,n):"array-contains-any"===t?new ql(e,n):new Ll(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Fl(e,n):new Vl(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(hl(t,this.value)):null!==t&&cl(this.value)===cl(t)&&this.matchesComparison(hl(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Za()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}}class Pl extends Al{static create(e,t){return new Pl(e,t)}matches(e){return Ol(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}}function Ol(e){return"and"===e.op}function Nl(e){return Rl(e)&&Ol(e)}function Rl(e){for(const t of e.filters)if(t instanceof Pl)return!1;return!0}function Dl(e){if(e instanceof Ll)return e.field.canonicalString()+e.op.toString()+pl(e.value);if(Nl(e))return e.filters.map((e=>Dl(e))).join(",");{const t=e.filters.map((e=>Dl(e))).join(",");return`${e.op}(${t})`}}function Ml(e,t){return e instanceof Ll?(n=e,(r=t)instanceof Ll&&n.op===r.op&&n.field.isEqual(r.field)&&ll(n.value,r.value)):e instanceof Pl?function(e,t){return t instanceof Pl&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&Ml(n,t.filters[r])),!0)}(e,t):void Za();var n,r}function xl(e){return e instanceof Ll?`${(t=e).field.canonicalString()} ${t.op} ${pl(t.value)}`:e instanceof Pl?function(e){return e.op.toString()+" {"+e.getFilters().map(xl).join(" ,")+"}"}(e):"Filter";var t}class Ul extends Ll{matches(e){const t=Sc.comparator(e.key,this.key);return this.matchesComparison(t)}constructor(e,t,n){super(e,t,n),this.key=Sc.fromName(n.referenceValue)}}class Fl extends Ll{matches(e){return this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"in",t),this.keys=Bl("in",t)}}class Vl extends Ll{matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"not-in",t),this.keys=Bl("not-in",t)}}function Bl(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Sc.fromName(e.referenceValue)))}class jl extends Ll{matches(e){const t=e.data.field(this.field);return gl(t)&&ul(t.arrayValue,this.value)}constructor(e,t){super(e,"array-contains",t)}}class $l extends Ll{matches(e){const t=e.data.field(this.field);return null!==t&&ul(this.value.arrayValue,t)}constructor(e,t){super(e,"in",t)}}class Hl extends Ll{matches(e){if(ul(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ul(this.value.arrayValue,t)}constructor(e,t){super(e,"not-in",t)}}class ql extends Ll{matches(e){const t=e.data.field(this.field);return!(!gl(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>ul(this.value.arrayValue,e)))}constructor(e,t){super(e,"array-contains-any",t)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ft=null}}function Kl(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Gl(e,t,n,r,i,s,o)}function zl(e){const t=tc(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Dl(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),Mc(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>pl(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>pl(e))).join(",")),t.ft=e}return t.ft}function Wl(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Cl(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ml(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Il(e.startAt,t.startAt)&&Il(e.endAt,t.endAt)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ql{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Jl(e,t,n,r,i,s,o,a){return new Ql(e,t,n,r,i,s,o,a)}function Xl(e){return new Ql(e)}function Yl(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Zl(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function eu(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function tu(e){return null!==e.collectionGroup}function nu(e){const t=tc(e);if(null===t.dt){t.dt=[];const e=eu(t),n=Zl(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new Tl(e)),t.dt.push(new Tl(Ec.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Tl(Ec.keyField(),e))}}}return t.dt}function ru(e){const t=tc(e);if(!t.wt)if("F"===t.limitType)t.wt=Kl(t.path,t.collectionGroup,nu(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of nu(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Tl(n.field,t))}const n=t.endAt?new Sl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Sl(t.startAt.position,t.startAt.inclusive):null;t.wt=Kl(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.wt}function iu(e,t,n){return new Ql(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function su(e,t){return Wl(ru(e),ru(t))&&e.limitType===t.limitType}function ou(e){return`${zl(ru(e))}|lt:${e.limitType}`}function au(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>xl(e))).join(", ")}]`),Mc(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>pl(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>pl(e))).join(",")),`Target(${t})`}(ru(e))}; limitType=${e.limitType})`}function cu(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Sc.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of nu(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=kl(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,nu(n),r)||n.endAt&&!function(e,t,n){const r=kl(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,nu(n),r)));var n,r}function lu(e){return(t,n)=>{let r=!1;for(const i of nu(e)){const e=uu(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function uu(e,t,n){const r=e.field.isKeyField()?Sc.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?hl(r,i):Za()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Za()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){$c(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return Hc(this.inner)}size(){return this.innerSize}constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du=new qc(Sc.comparator);function pu(){return du}const fu=new qc(Sc.comparator);function mu(...e){let t=fu;for(const n of e)t=t.insert(n.key,n);return t}function gu(e){let t=fu;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function vu(){return _u()}function yu(){return _u()}function _u(){return new hu((e=>e.toString()),((e,t)=>e.isEqual(t)))}const wu=new qc(Sc.comparator),bu=new zc(Sc.comparator);function Eu(...e){let t=bu;for(const n of e)t=t.add(n);return t}const Su=new zc(mc);function ku(){return Su}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xc(t)?"-0":t}}function Tu(e){return{integerValue:""+e}}function Cu(e,t){return Uc(t)?Tu(t):Iu(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(){this._=void 0}}function Lu(e,t,n){return e instanceof Nu?Ru(e,t):e instanceof Du?Mu(e,t):n}function Pu(e,t){var n,r;return e instanceof xu?ml(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null}class Ou extends Au{}class Nu extends Au{constructor(e){super(),this.elements=e}}function Ru(e,t){const n=Fu(t);for(const t of e.elements)n.some((e=>ll(e,t)))||n.push(t);return{arrayValue:{values:n}}}class Du extends Au{constructor(e){super(),this.elements=e}}function Mu(e,t){let n=Fu(t);for(const t of e.elements)n=n.filter((e=>!ll(e,t)));return{arrayValue:{values:n}}}class xu extends Au{constructor(e,t){super(),this.serializer=e,this._t=t}}function Uu(e){return tl(e.integerValue||e.doubleValue)}function Fu(e){return gl(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,t){this.version=e,this.transformResults=t}}class Bu{static none(){return new Bu}static exists(e){return new Bu(void 0,e)}static updateTime(e){return new Bu(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}constructor(e,t){this.updateTime=e,this.exists=t}}function ju(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class $u{}function Hu(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Zu(e.key,Bu.none()):new Wu(e.key,e.data,Bu.none());{const n=e.data,r=wl.empty();let i=new zc(Ec.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Qu(e.key,r,new Qc(i.toArray()),Bu.none())}}function qu(e,t,n){var r;e instanceof Wu?function(e,t,n){const r=e.value.clone(),i=Xu(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Qu?function(e,t,n){if(!ju(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Xu(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Ju(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function Gu(e,t,n,r){return e instanceof Wu?function(e,t,n,r){if(!ju(e.precondition,t))return n;const i=e.value.clone(),s=Yu(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Qu?function(e,t,n,r){if(!ju(e.precondition,t))return n;const i=Yu(e.fieldTransforms,r,t),s=t.data;return s.setAll(Ju(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):(i=t,s=n,ju(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function Ku(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Pu(r.transform,e||null);null!=i&&(null===n&&(n=wl.empty()),n.set(r.field,i))}return n||null}function zu(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&gc(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof Nu&&r instanceof Nu||n instanceof Du&&r instanceof Du?gc(n.elements,r.elements,ll):n instanceof xu&&r instanceof xu?ll(n._t,r._t):n instanceof Ou&&r instanceof Ou);var n,r}(e,t)))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,r}class Wu extends $u{getFieldMask(){return null}constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Qu extends $u{getFieldMask(){return this.fieldMask}constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Ju(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Xu(e,t,n){const r=new Map;ec(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Lu(o,a,n[i]))}return r}function Yu(e,t,n){const r=new Map;for(const a of e){const e=a.transform,c=n.data.field(a.field);r.set(a.field,(s=c,o=t,(i=e)instanceof Ou?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(o,s):i instanceof Nu?Ru(i,s):i instanceof Du?Mu(i,s):function(e,t){const n=Pu(e,t),r=Uu(n)+Uu(e._t);return ml(n)&&ml(e._t)?Tu(r):Iu(e.serializer,r)}(i,s)))}var i,s,o;return r}class Zu extends $u{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class eh extends $u{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&qu(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Gu(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Gu(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=yu();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=Hu(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(yc.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Eu())}isEqual(e){return this.batchId===e.batchId&&gc(this.mutations,e.mutations,((e,t)=>zu(e,t)))&&gc(this.baseMutations,e.baseMutations,((e,t)=>zu(e,t)))}constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}}class nh{static from(e,t,n){ec(e.mutations.length===n.length);let r=wu;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new nh(e,t,n,r)}constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(e,t){this.largestBatchId=e,this.mutation=t}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ih,sh;function oh(e){switch(e){default:return Za();case nc.CANCELLED:case nc.UNKNOWN:case nc.DEADLINE_EXCEEDED:case nc.RESOURCE_EXHAUSTED:case nc.INTERNAL:case nc.UNAVAILABLE:case nc.UNAUTHENTICATED:return!1;case nc.INVALID_ARGUMENT:case nc.NOT_FOUND:case nc.ALREADY_EXISTS:case nc.PERMISSION_DENIED:case nc.FAILED_PRECONDITION:case nc.ABORTED:case nc.OUT_OF_RANGE:case nc.UNIMPLEMENTED:case nc.DATA_LOSS:return!0}}function ah(e){if(void 0===e)return Ja("GRPC error has no .code"),nc.UNKNOWN;switch(e){case ih.OK:return nc.OK;case ih.CANCELLED:return nc.CANCELLED;case ih.UNKNOWN:return nc.UNKNOWN;case ih.DEADLINE_EXCEEDED:return nc.DEADLINE_EXCEEDED;case ih.RESOURCE_EXHAUSTED:return nc.RESOURCE_EXHAUSTED;case ih.INTERNAL:return nc.INTERNAL;case ih.UNAVAILABLE:return nc.UNAVAILABLE;case ih.UNAUTHENTICATED:return nc.UNAUTHENTICATED;case ih.INVALID_ARGUMENT:return nc.INVALID_ARGUMENT;case ih.NOT_FOUND:return nc.NOT_FOUND;case ih.ALREADY_EXISTS:return nc.ALREADY_EXISTS;case ih.PERMISSION_DENIED:return nc.PERMISSION_DENIED;case ih.FAILED_PRECONDITION:return nc.FAILED_PRECONDITION;case ih.ABORTED:return nc.ABORTED;case ih.OUT_OF_RANGE:return nc.OUT_OF_RANGE;case ih.UNIMPLEMENTED:return nc.UNIMPLEMENTED;case ih.DATA_LOSS:return nc.DATA_LOSS;default:return Za()}}(sh=ih||(ih={}))[sh.OK=0]="OK",sh[sh.CANCELLED=1]="CANCELLED",sh[sh.UNKNOWN=2]="UNKNOWN",sh[sh.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",sh[sh.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",sh[sh.NOT_FOUND=5]="NOT_FOUND",sh[sh.ALREADY_EXISTS=6]="ALREADY_EXISTS",sh[sh.PERMISSION_DENIED=7]="PERMISSION_DENIED",sh[sh.UNAUTHENTICATED=16]="UNAUTHENTICATED",sh[sh.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",sh[sh.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",sh[sh.ABORTED=10]="ABORTED",sh[sh.OUT_OF_RANGE=11]="OUT_OF_RANGE",sh[sh.UNIMPLEMENTED=12]="UNIMPLEMENTED",sh[sh.INTERNAL=13]="INTERNAL",sh[sh.UNAVAILABLE=14]="UNAVAILABLE",sh[sh.DATA_LOSS=15]="DATA_LOSS";class ch{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function lh(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function uh(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function hh(e,t){return lh(e,t.toTimestamp())}function dh(e){return ec(!!e),yc.fromTimestamp(function(e){const t=el(e);return new vc(t.seconds,t.nanos)}(e))}function ph(e,t){return(n=e,new wc(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function fh(e){const t=wc.fromString(e);return ec(Ih(t)),t}function mh(e,t){return ph(e.databaseId,t.path)}function gh(e){const t=fh(e);return 4===t.length?wc.emptyPath():yh(t)}function vh(e){return new wc(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function yh(e){return ec(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function _h(e,t,n){return{name:mh(e,t),fields:n.value.mapValue.fields}}function wh(e,t){let n;if(t instanceof Wu)n={update:_h(e,t.key,t.value)};else if(t instanceof Zu)n={delete:mh(e,t.key)};else if(t instanceof Qu)n={update:_h(e,t.key,t.data),updateMask:kh(t.fieldMask)};else{if(!(t instanceof eh))return Za();n={verify:mh(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Ou)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Nu)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Du)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof xu)return{fieldPath:t.field.canonicalString(),increment:n._t};throw Za()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:hh(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:Za())),n;var r,i}function bh(e){let t=gh(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ec(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=Eh(e);return t instanceof Pl&&Nl(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new Tl(Sh((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Mc(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Sl(n,t)}(n.startAt));let l=null;return n.endAt&&(l=function(e){const t=!e.before,n=e.values||[];return new Sl(n,t)}(n.endAt)),Jl(t,i,o,s,a,"F",c,l)}function Eh(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Sh(e.unaryFilter.field);return Ll.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Sh(e.unaryFilter.field);return Ll.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Sh(e.unaryFilter.field);return Ll.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Sh(e.unaryFilter.field);return Ll.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Za()}}(e):void 0!==e.fieldFilter?(n=e,Ll.create(Sh(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Za()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==e.compositeFilter?(t=e,Pl.create(t.compositeFilter.filters.map((e=>Eh(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Za()}}(t.compositeFilter.op))):Za();var t,n}function Sh(e){return Ec.fromServerFormat(e.fieldPath)}function kh(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Ih(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e){this.se=e}}function Ch(e){const t=bh({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?iu(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{oe(e,t){this.ue(e,t),t.ce()}ue(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(tl(e.integerValue));else if("doubleValue"in e){const n=tl(e.doubleValue);isNaN(n)?this.ae(t,13):(this.ae(t,15),xc(n)?t.he(0):t.he(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ae(t,20),"string"==typeof n?t.le(n):(t.le(`${n.seconds||""}`),t.he(n.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(nl(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ae(t,45),t.he(n.latitude||0),t.he(n.longitude||0)}else"mapValue"in e?_l(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):Za()}fe(e,t){this.ae(t,25),this.ye(e,t)}ye(e,t){t.le(e)}me(e,t){const n=e.fields||{};this.ae(t,55);for(const e of Object.keys(n))this.fe(e,t),this.ue(n[e],t)}ge(e,t){const n=e.values||[];this.ae(t,50);for(const e of n)this.ue(e,t)}_e(e,t){this.ae(t,37),Sc.fromName(e).path.forEach((e=>{this.ae(t,60),this.ye(e,t)}))}ae(e,t){e.he(t)}de(e){e.he(2)}constructor(){}}Ah.pe=new Ah;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lh{addToCollectionParentIndex(e,t){return this.He.add(t),Nc.resolve()}getCollectionParents(e,t){return Nc.resolve(this.He.getEntries(t))}addFieldIndex(e,t){return Nc.resolve()}deleteFieldIndex(e,t){return Nc.resolve()}getDocumentsMatchingTarget(e,t){return Nc.resolve(null)}getIndexType(e,t){return Nc.resolve(0)}getFieldIndexes(e,t){return Nc.resolve([])}getNextCollectionGroupToUpdate(e){return Nc.resolve(null)}getMinOffset(e,t){return Nc.resolve(Cc.min())}getMinOffsetFromCollectionGroup(e,t){return Nc.resolve(Cc.min())}updateCollectionGroup(e,t,n){return Nc.resolve()}updateIndexEntries(e,t){return Nc.resolve()}constructor(){this.He=new Ph}}class Ph{add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new zc(wc.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new zc(wc.comparator)).toArray()}constructor(){this.index={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Oh{static withCacheSize(e){return new Oh(e,Oh.DEFAULT_COLLECTION_PERCENTILE,Oh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oh.DEFAULT_COLLECTION_PERCENTILE=10,Oh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Oh.DEFAULT=new Oh(41943040,Oh.DEFAULT_COLLECTION_PERCENTILE,Oh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Oh.DISABLED=new Oh(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nh{next(){return this.Rn+=2,this.Rn}static vn(){return new Nh(0)}static bn(){return new Nh(-1)}constructor(e){this.Rn=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rh{addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,El.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Nc.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}constructor(){this.changes=new hu((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dh{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Gu(n.mutation,e,Qc.empty(),vc.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Eu()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Eu()){const r=vu();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=mu();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=vu();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Eu())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=pu();const s=_u(),o=_u();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Qu)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),Gu(o.mutation,t,o.mutation.getFieldMask(),vc.now())):s.set(t.key,Qc.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Dh(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=_u();let r=new qc(((e,t)=>e-t)),i=Eu();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Qc.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Eu()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,l=yu();c.forEach((e=>{if(!i.has(e)){const r=Hu(t.get(e),n.get(e));null!==r&&l.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,l))}return Nc.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return r=t,Sc.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):tu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n);var r}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Nc.resolve(vu());let o=-1,a=i;return s.next((t=>Nc.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Nc.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Eu()))).next((e=>({batchId:o,changes:gu(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Sc(t)).next((e=>{let t=mu();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=mu();return this.indexManager.getCollectionParents(e,r).next((s=>Nc.forEach(s,(s=>{const o=(a=t,c=s.child(r),new Ql(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,El.newInvalidDocument(r)))}));let n=mu();return e.forEach(((e,i)=>{const s=r.get(e);void 0!==s&&Gu(s.mutation,i,Qc.empty(),vc.now()),cu(t,i)&&(n=n.insert(e,i))})),n}))}constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{getBundleMetadata(e,t){return Nc.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:dh(n.createTime)}),Nc.resolve()}getNamedQuery(e,t){return Nc.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,{name:(n=t).name,query:Ch(n.bundledQuery),readTime:dh(n.readTime)}),Nc.resolve();var n}constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{getOverlay(e,t){return Nc.resolve(this.overlays.get(t))}getOverlays(e,t){const n=vu();return Nc.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.re(e,t,r)})),Nc.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.ts.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.ts.delete(n)),Nc.resolve()}getOverlaysForCollection(e,t,n){const r=vu(),i=t.length+1,s=new Sc(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Nc.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new qc(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=vu(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=vu(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=r)););return Nc.resolve(o)}re(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.ts.get(r.largestBatchId).delete(n.key);this.ts.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new rh(t,n));let i=this.ts.get(t);void 0===i&&(i=Eu(),this.ts.set(t,i)),this.ts.set(t,i.add(n.key))}constructor(){this.overlays=new qc(Sc.comparator),this.ts=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{isEmpty(){return this.es.isEmpty()}addReference(e,t){const n=new Vh(e,t);this.es=this.es.add(n),this.ss=this.ss.add(n)}os(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.us(new Vh(e,t))}cs(e,t){e.forEach((e=>this.removeReference(e,t)))}hs(e){const t=new Sc(new wc([])),n=new Vh(t,e),r=new Vh(t,e+1),i=[];return this.ss.forEachInRange([n,r],(e=>{this.us(e),i.push(e.key)})),i}ls(){this.es.forEach((e=>this.us(e)))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const t=new Sc(new wc([])),n=new Vh(t,e),r=new Vh(t,e+1);let i=Eu();return this.ss.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Vh(e,0),n=this.es.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}constructor(){this.es=new zc(Vh.ns),this.ss=new zc(Vh.rs)}}class Vh{static ns(e,t){return Sc.comparator(e.key,t.key)||mc(e.ds,t.ds)}static rs(e,t){return mc(e.ds,t.ds)||Sc.comparator(e.key,t.key)}constructor(e,t){this.key=e,this.ds=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{checkEmpty(e){return Nc.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new th(i,t,n,r);this.mutationQueue.push(s);for(const t of r)this._s=this._s.add(new Vh(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return Nc.resolve(s)}lookupMutationBatch(e,t){return Nc.resolve(this.gs(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ys(n),i=r<0?0:r;return Nc.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Nc.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return Nc.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Vh(t,0),r=new Vh(t,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([n,r],(e=>{const t=this.gs(e.ds);i.push(t)})),Nc.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new zc(mc);return t.forEach((e=>{const t=new Vh(e,0),r=new Vh(e,Number.POSITIVE_INFINITY);this._s.forEachInRange([t,r],(e=>{n=n.add(e.ds)}))})),Nc.resolve(this.ps(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Sc.isDocumentKey(i)||(i=i.child(""));const s=new Vh(new Sc(i),0);let o=new zc(mc);return this._s.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.ds)),!0)}),s),Nc.resolve(this.ps(o))}ps(e){const t=[];return e.forEach((e=>{const n=this.gs(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){ec(0===this.Is(t.batchId,"removed")),this.mutationQueue.shift();let n=this._s;return Nc.forEach(t.mutations,(r=>{const i=new Vh(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this._s=n}))}En(e){}containsKey(e,t){const n=new Vh(t,0),r=this._s.firstAfterOrEqual(n);return Nc.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Nc.resolve()}Is(e,t){return this.ys(e)}ys(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}gs(e){const t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this._s=new zc(Vh.ns)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ts(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Nc.resolve(n?n.document.mutableCopy():El.newInvalidDocument(t))}getEntries(e,t){let n=pu();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():El.newInvalidDocument(e))})),Nc.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=pu();const s=t.path,o=new Sc(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Ac(Tc(o),n)<=0||(r.has(o.key)||cu(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Nc.resolve(i)}getAllFromCollectionGroup(e,t,n,r){Za()}Es(e,t){return Nc.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new $h(this)}getSize(e){return Nc.resolve(this.size)}constructor(e){this.Ts=e,this.docs=new qc(Sc.comparator),this.size=0}}class $h extends Rh{applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(n)})),Nc.waitFor(t)}getFromCache(e,t){return this.Jn.getEntry(e,t)}getAllFromCache(e,t){return this.Jn.getEntries(e,t)}constructor(e){super(),this.Jn=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{forEachTarget(e,t){return this.As.forEach(((e,n)=>t(n))),Nc.resolve()}getLastRemoteSnapshotVersion(e){return Nc.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Nc.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),Nc.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Rs&&(this.Rs=t),Nc.resolve()}Sn(e){this.As.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.bs=new Nh(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,t){return this.Sn(t),this.targetCount+=1,Nc.resolve()}updateTargetData(e,t){return this.Sn(t),Nc.resolve()}removeTargetData(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,Nc.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.As.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.As.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Nc.waitFor(i).next((()=>r))}getTargetCount(e){return Nc.resolve(this.targetCount)}getTargetData(e,t){const n=this.As.get(t)||null;return Nc.resolve(n)}addMatchingKeys(e,t,n){return this.vs.os(t,n),Nc.resolve()}removeMatchingKeys(e,t,n){this.vs.cs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Nc.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.vs.hs(t),Nc.resolve()}getMatchingKeysForTargetId(e,t){const n=this.vs.fs(t);return Nc.resolve(n)}containsKey(e,t){return Nc.resolve(this.vs.containsKey(t))}constructor(e){this.persistence=e,this.As=new hu((e=>zl(e)),Wl),this.lastRemoteSnapshotVersion=yc.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Fh,this.targetCount=0,this.bs=Nh.vn()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Uh,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ps[e.toKey()];return n||(n=new Bh(t,this.referenceDelegate),this.Ps[e.toKey()]=n),n}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,t,n){Qa("MemoryPersistence","Starting transaction:",e);const r=new Gh(this.Vs.next());return this.referenceDelegate.Ns(),n(r).next((e=>this.referenceDelegate.ks(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Os(e,t){return Nc.or(Object.values(this.Ps).map((n=>()=>n.containsKey(e,t))))}constructor(e,t){this.Ps={},this.overlays={},this.Vs=new Dc(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new Hh(this),this.indexManager=new Lh,this.remoteDocumentCache=new jh((e=>this.referenceDelegate.Cs(e))),this.serializer=new Th(t),this.xs=new xh(this.serializer)}}class Gh extends Pc{constructor(e){super(),this.currentSequenceNumber=e}}class Kh{static Fs(e){return new Kh(e)}get Bs(){if(this.Ms)return this.Ms;throw Za()}addReference(e,t,n){return this.$s.addReference(n,t),this.Bs.delete(n.toString()),Nc.resolve()}removeReference(e,t,n){return this.$s.removeReference(n,t),this.Bs.add(n.toString()),Nc.resolve()}markPotentiallyOrphaned(e,t){return this.Bs.add(t.toString()),Nc.resolve()}removeTarget(e,t){this.$s.hs(t.targetId).forEach((e=>this.Bs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Bs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ns(){this.Ms=new Set}ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Nc.forEach(this.Bs,(n=>{const r=Sc.fromPath(n);return this.Ls(e,r).next((e=>{e||t.removeEntry(r,yc.min())}))})).next((()=>(this.Ms=null,t.apply(e))))}updateLimboDocument(e,t){return this.Ls(e,t).next((e=>{e?this.Bs.delete(t.toString()):this.Bs.add(t.toString())}))}Cs(e){return 0}Ls(e,t){return Nc.or([()=>Nc.resolve(this.$s.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}constructor(e){this.persistence=e,this.$s=new Fh,this.Ms=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zh{static Di(e,t){let n=Eu(),r=Eu();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new zh(e,t.fromCache,n,r)}constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Vi=n,this.Si=r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{initialize(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ni(e,t).next((i=>i||this.ki(e,t,r,n))).next((n=>n||this.Oi(e,t)))}Ni(e,t){if(Yl(t))return Nc.resolve(null);let n=ru(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=iu(t,null,"F"),n=ru(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Eu(...r);return this.xi.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.$i(t,r);return this.Mi(t,s,i,n.readTime)?this.Ni(e,iu(t,null,"F")):this.Fi(e,s,t,n)}))))})))))}ki(e,t,n,r){return Yl(t)||r.isEqual(yc.min())?this.Oi(e,t):this.xi.getDocuments(e,n).next((i=>{const s=this.$i(t,i);return this.Mi(t,s,n,r)?this.Oi(e,t):(Wa()<=te.DEBUG&&Qa("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),au(t)),this.Fi(e,s,t,Ic(r,-1)))}))}$i(e,t){let n=new zc(lu(e));return t.forEach(((t,r)=>{cu(e,r)&&(n=n.add(r))})),n}Mi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,t){return Wa()<=te.DEBUG&&Qa("QueryEngine","Using full collection scan to execute query:",au(t)),this.xi.getDocumentsMatchingQuery(e,t,Cc.min())}Fi(e,t,n,r){return this.xi.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}constructor(){this.Ci=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Mh(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Li)))}constructor(e,t,n,r){this.persistence=e,this.Bi=t,this.serializer=r,this.Li=new qc(mc),this.qi=new hu((e=>zl(e)),Wl),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(n)}}function Jh(e,t,n,r){return new Qh(e,t,n,r)}async function Xh(e,t){const n=tc(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.Gi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=Eu();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Qi:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function Yh(e){const t=tc(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ds.getLastRemoteSnapshotVersion(e)))}function Zh(e,t){const n=tc(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}class ed{tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}constructor(){this.activeTargetIds=ku()}}class td{addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,t,n){this.Lr[e]=t}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new ed,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}constructor(){this.Br=new ed,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{qr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){Qa("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){Qa("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let id=null;function sd(){return null===id?id=268435456+Math.round(2147483648*Math.random()):id++,"0x"+id.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const od={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd extends class{get uo(){return!1}co(e,t,n,r,i){const s=sd(),o=this.ao(e,t);Qa("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={};return this.ho(a,r,i),this.lo(e,o,a,n).then((t=>(Qa("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw Xa("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}fo(e,t,n,r,i,s){return this.co(e,t,n,r,i)}ho(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ka,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ao(e,t){const n=od[e];return`${this.ro}/v1/${t}:${n}`}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.ro=t+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{lo(e,t,n,r){const i=sd();return new Promise(((s,o)=>{const a=new qa;a.setWithCredentials(!0),a.listenOnce(Va.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Fa.NO_ERROR:const t=a.getResponseJson();Qa("WebChannelConnection",`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case Fa.TIMEOUT:Qa("WebChannelConnection",`RPC '${e}' ${i} timed out`),o(new rc(nc.DEADLINE_EXCEEDED,"Request time out"));break;case Fa.HTTP_ERROR:const n=a.getStatus();if(Qa("WebChannelConnection",`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(nc).indexOf(t)>=0?t:nc.UNKNOWN}(t.status);o(new rc(e,t.message))}else o(new rc(nc.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new rc(nc.UNAVAILABLE,"Connection failed."));break;default:Za()}}finally{Qa("WebChannelConnection",`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);Qa("WebChannelConnection",`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}wo(e,t,n){const r=sd(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=xa(),o=Ua(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new $a({})),this.ho(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const c=i.join("");Qa("WebChannelConnection",`Creating RPC '${e}' stream ${r}: ${c}`,a);const l=s.createWebChannel(c,a);let u=!1,h=!1;const d=new ad({Wr:t=>{h?Qa("WebChannelConnection",`Not sending because RPC '${e}' stream ${r} is closed:`,t):(u||(Qa("WebChannelConnection",`Opening RPC '${e}' stream ${r} transport.`),l.open(),u=!0),Qa("WebChannelConnection",`RPC '${e}' stream ${r} sending:`,t),l.send(t))},Hr:()=>l.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(l,Ha.EventType.OPEN,(()=>{h||Qa("WebChannelConnection",`RPC '${e}' stream ${r} transport opened.`)})),p(l,Ha.EventType.CLOSE,(()=>{h||(h=!0,Qa("WebChannelConnection",`RPC '${e}' stream ${r} transport closed`),d.so())})),p(l,Ha.EventType.ERROR,(t=>{h||(h=!0,Xa("WebChannelConnection",`RPC '${e}' stream ${r} transport errored:`,t),d.so(new rc(nc.UNAVAILABLE,"The operation could not be completed")))})),p(l,Ha.EventType.MESSAGE,(t=>{var n;if(!h){const i=t.data[0];ec(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Qa("WebChannelConnection",`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=ih[e];if(void 0!==t)return ah(t)}(t),i=o.message;void 0===n&&(n=nc.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),h=!0,d.so(new rc(n,i)),l.close()}else Qa("WebChannelConnection",`RPC '${e}' stream ${r} received:`,i),d.io(i)}})),p(o,Ba.STAT_EVENT,(t=>{t.stat===ja.PROXY?Qa("WebChannelConnection",`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===ja.NOPROXY&&Qa("WebChannelConnection",`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{d.no()}),0),d}constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(e){return new ch(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),r=Math.max(0,t-n);r>0&&Qa("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,(()=>(this.To=Date.now(),e()))),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ws=e,this.timerId=t,this._o=n,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{xo(){return 1===this.state||5===this.state||this.No()}No(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,(()=>this.Mo())))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,t){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,4!==e?this.Co.reset():t&&t.code===nc.RESOURCE_EXHAUSTED?(Ja(t.toString()),Ja("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):t&&t.code===nc.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Vo===t&&this.Ko(e,n)}),(t=>{e((()=>{const e=new rc(nc.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Go(e)}))}))}Ko(e,t){const n=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr((()=>{n((()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,(()=>(this.No()&&(this.state=3),Promise.resolve()))),this.listener.Jr())))})),this.stream.Zr((e=>{n((()=>this.Go(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}ko(){this.state=5,this.Co.Ao((async()=>{this.state=0,this.start()}))}Go(e){return Qa("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Ws.enqueueAndForget((()=>this.Vo===e?t():(Qa("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(e,t,n,r,i,s,o,a){this.Ws=e,this.bo=n,this.Po=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new hd(e,t)}}class pd extends dd{get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(ec(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(ec(void 0!==n),t.map((e=>function(e,t){let n=e.updateTime?dh(e.updateTime):dh(t);return n.isEqual(yc.min())&&(n=dh(t)),new Vu(n,e.transformResults||[])}(e,n)))):[]),i=dh(e.commitTime);return this.listener.Zo(i,r)}var t,n;return ec(!e.writeResults||0===e.writeResults.length),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=vh(this.serializer),this.Fo(e)}Yo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>wh(this.serializer,e)))};this.Fo(t)}constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.Ho=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd extends class{}{nu(){if(this.eu)throw new rc(nc.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,n){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.co(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===nc.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new rc(nc.UNKNOWN,e.toString())}))}fo(e,t,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.fo(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===nc.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new rc(nc.UNKNOWN,e.toString())}))}terminate(){this.eu=!0}constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.eu=!1}}class md{ou(){0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve()))))}au(e){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,"Online"===e&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Ja(t),this.ru=!1):Qa("OnlineStateTracker",t)}hu(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr((e=>{n.enqueueAndForget((async()=>{_d(this)&&(Qa("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=tc(e);t.du.add(4),await yd(t),t.mu.set("Unknown"),t.du.delete(4),await vd(t)}(this))}))})),this.mu=new md(n,r)}}async function vd(e){if(_d(e))for(const t of e.wu)await t(!0)}async function yd(e){for(const t of e.wu)await t(!1)}function _d(e){return 0===tc(e).du.size}async function wd(e,t,n){if(!Rc(t))throw t;e.du.add(1),await yd(e),e.mu.set("Offline"),n||(n=()=>Yh(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Qa("RemoteStore","Retrying IndexedDB access"),await n(),e.du.delete(1),await vd(e)}))}function bd(e,t){return t().catch((n=>wd(e,n,t)))}async function Ed(e){const t=tc(e),n=Rd(t);let r=t.lu.length>0?t.lu[t.lu.length-1].batchId:-1;for(;Sd(t);)try{const e=await Zh(t.localStore,r);if(null===e){0===t.lu.length&&n.$o();break}r=e.batchId,kd(t,e)}catch(e){await wd(t,e)}Id(t)&&Td(t)}function Sd(e){return _d(e)&&e.lu.length<10}function kd(e,t){e.lu.push(t);const n=Rd(e);n.No()&&n.Jo&&n.Yo(t.mutations)}function Id(e){return _d(e)&&!Rd(e).xo()&&e.lu.length>0}function Td(e){Rd(e).start()}async function Cd(e){Rd(e).tu()}async function Ad(e){const t=Rd(e);for(const n of e.lu)t.Yo(n.mutations)}async function Ld(e,t,n){const r=e.lu.shift(),i=nh.from(r,t,n);await bd(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Ed(e)}async function Pd(e,t){t&&Rd(e).Jo&&await async function(e,t){if(oh(n=t.code)&&n!==nc.ABORTED){const n=e.lu.shift();Rd(e).Oo(),await bd(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Ed(e)}var n}(e,t),Id(e)&&Td(e)}async function Od(e,t){const n=tc(e);n.asyncQueue.verifyOperationInProgress(),Qa("RemoteStore","RemoteStore received new credentials");const r=_d(n);n.du.add(3),await yd(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.du.delete(3),await vd(n)}async function Nd(e,t){const n=tc(e);t?(n.du.delete(2),await vd(n)):t||(n.du.add(2),await yd(n),n.mu.set("Unknown"))}function Rd(e){return e.pu||(e.pu=function(e,t,n){const r=tc(e);return r.nu(),new pd(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Jr:Cd.bind(null,e),Zr:Pd.bind(null,e),Xo:Ad.bind(null,e),Zo:Ld.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Oo(),await Ed(e)):(await e.pu.stop(),e.lu.length>0&&(Qa("RemoteStore",`Stopping write stream with ${e.lu.length} pending writes`),e.lu=[]))}))),e.pu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Dd{static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Dd(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new rc(nc.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ic,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}}function Md(e,t){if(Ja("AsyncQueue",`${t}: ${e}`),Rc(e))return new rc(nc.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(){this.queries=new hu((e=>ou(e)),su),this.onlineState="Unknown",this.Au=new Set}}function Ud(e){e.Au.forEach((e=>{e.next()}))}class Fd{get isPrimaryClient(){return!0===this.fc}constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.nc={},this.sc=new hu((e=>ou(e)),su),this.ic=new Map,this.rc=new Set,this.oc=new qc(Sc.comparator),this.uc=new Map,this.cc=new Fh,this.ac={},this.hc=new Map,this.lc=Nh.bn(),this.onlineState="Unknown",this.fc=void 0}}function Vd(e,t,n){const r=tc(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.sc.forEach(((n,r)=>{const i=r.view.Ru(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=tc(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Ru(t)&&(r=!0)})),r&&Ud(n)}(r.eventManager,t),e.length&&r.nc.zo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Bd(e,t){const n=tc(e),r=t.batch.batchId;try{const e=await function(e,t){const n=tc(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Nc.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);ec(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Eu();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);Hd(n,r,null),$d(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qd(n,e)}catch(e){await Oc(e)}}async function jd(e,t,n){const r=tc(e);try{const e=await function(e,t){const n=tc(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(ec(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Hd(r,t,n),$d(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await qd(r,e)}catch(e){await Oc(e)}}function $d(e,t){(e.hc.get(t)||[]).forEach((e=>{e.resolve()})),e.hc.delete(t)}function Hd(e,t,n){const r=tc(e);let i=r.ac[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.ac[r.currentUser.toKey()]=i}}async function qd(e,t,n){const r=tc(e),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach(((e,a)=>{o.push(r.dc(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=zh.Di(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.nc.zo(i),await async function(e,t){const n=tc(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Nc.forEach(t,(t=>Nc.forEach(t.Vi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Nc.forEach(t.Si,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Rc(e))throw e;Qa("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Li.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Li=n.Li.insert(t,i)}}}(r.localStore,s))}async function Gd(e,t){const n=tc(e);if(!n.currentUser.isEqual(t)){Qa("SyncEngine","User change. New user:",t.toKey());const e=await Xh(n.localStore,t);n.currentUser=t,(r=n).hc.forEach((e=>{e.forEach((e=>{e.reject(new rc(nc.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.hc.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await qd(n,e.Qi)}var r}function Kd(e){const t=tc(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Bd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=jd.bind(null,t),t}class zd{async initialize(e){this.serializer=ud(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Jh(this.persistence,new Wh,e.initialUser,this.serializer)}createPersistence(e){return new qh(Kh.Fs,this.serializer)}createSharedClientState(e){return new td}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class Wd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Vd(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gd.bind(null,this.syncEngine),await Nd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new xd}createDatastore(e){const t=ud(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new cd(r));var r,i,s;return i=e.authCredentials,s=e.appCheckCredentials,new fd(i,s,n,t)}createRemoteStore(e){var t,n,r,i,s;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Vd(this.syncEngine,e,0),s=rd.D()?new rd:new nd,new gd(t,n,r,i,s)}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Fd(e,t,n,r,i,s);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=tc(e);Qa("RemoteStore","RemoteStore shutting down."),t.du.add(5),await yd(t),t._u.shutdown(),t.mu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qd{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new rc(nc.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ic;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Md(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Ga.UNAUTHENTICATED,this.clientId=fc.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Qa("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Qa("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}}async function Jd(e,t){e.asyncQueue.verifyOperationInProgress(),Qa("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Xh(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Xd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Zd(e);Qa("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Od(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Od(t.remoteStore,n))),e._onlineComponents=t}function Yd(e){return"FirebaseError"===e.name?e.code===nc.FAILED_PRECONDITION||e.code===nc.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Zd(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Qa("FirestoreClient","Using user provided OfflineComponentProvider");try{await Jd(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Yd(n))throw n;Xa("Error using user provided cache. Falling back to memory cache: "+n),await Jd(e,new zd)}}else Qa("FirestoreClient","Using default OfflineComponentProvider"),await Jd(e,new zd);return e._offlineComponents}async function ep(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Qa("FirestoreClient","Using user provided OnlineComponentProvider"),await Xd(e,e._uninitializedComponentsProvider._online)):(Qa("FirestoreClient","Using default OnlineComponentProvider"),await Xd(e,new Wd))),e._onlineComponents}function tp(e){return ep(e).then((e=>e.syncEngine))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const np=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(e,t,n){if(!n)throw new rc(nc.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ip(e){if(!Sc.isDocumentKey(e))throw new rc(nc.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function sp(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Za()}function op(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new rc(nc.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sp(e);throw new rc(nc.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ap{isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new rc(nc.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new rc(nc.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new rc(nc.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{get app(){if(!this._app)throw new rc(nc.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new rc(nc.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ap(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new oc;switch(e.type){case"firstParty":return new uc(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new rc(nc.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=np.get(e);t&&(Qa("ComponentProvider","Removing Datastore"),np.delete(e),t.terminate())}(this),Promise.resolve()}constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ap({}),this._settingsFrozen=!1}}function lp(e,t,n,r={}){var i;const s=(e=op(e,cp))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&Xa("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Ga.MOCK_USER;else{t=N(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new rc(nc.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ga(s)}e._authCredentials=new ac(new sc(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dp(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new up(this.firestore,e,this._key)}constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}}class hp{withConverter(e){return new hp(this.firestore,e,this._query)}constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}}class dp extends hp{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new up(this.firestore,null,new Sc(e))}withConverter(e){return new dp(this.firestore,e,this._path)}constructor(e,t,n){super(e,t,Xl(n)),this._path=n,this.type="collection"}}function pp(e,t,...n){if(e=J(e),1===arguments.length&&(t=fc.A()),rp("doc","path",t),e instanceof cp){const r=wc.fromString(t,...n);return ip(r),new up(e,null,new Sc(r))}{if(!(e instanceof up||e instanceof dp))throw new rc(nc.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(wc.fromString(t,...n));return ip(r),new up(e.firestore,e instanceof dp?e.converter:null,new Sc(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fp{get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const t=ld();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise((()=>{}));const t=new ic;return this.Kc((()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.kc.push(e),this.Gc())))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Rc(e))throw e;Qa("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao((()=>this.Gc()))}}Kc(e){const t=this.Nc.then((()=>(this.Fc=!0,e().catch((e=>{this.Mc=e,this.Fc=!1;throw Ja("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.Fc=!1,e))))));return this.Nc=t,t}enqueueAfterDelay(e,t,n){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);const r=Dd.createAndSchedule(this,e,t,n,(e=>this.Qc(e)));return this.$c.push(r),r}Uc(){this.Mc&&Za()}verifyOperationInProgress(){}async zc(){let e;do{e=this.Nc,await e}while(e!==this.Nc)}jc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then((()=>{this.$c.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.$c)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()}))}Hc(e){this.Lc.push(e)}Qc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new hd(this,"async_queue_retry"),this.qc=()=>{const e=ld();e&&Qa("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Co.vo()};const e=ld();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.qc)}}class mp extends cp{_terminate(){return this._firestoreClient||vp(this),this._firestoreClient.terminate()}constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new fp,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}}function gp(e){return e._firestoreClient||vp(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function vp(e){var t,n,r;const i=e._freezeSettings(),s=(o=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",c=e._persistenceKey,new sl(o,a,c,(l=i).host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams));var o,a,c,l;e._firestoreClient=new Qd(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yp{static fromBase64String(e){try{return new yp(Yc.fromBase64String(e))}catch(e){throw new rc(nc.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new yp(Yc.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}constructor(e){this._byteString=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{isEqual(e){return this._internalPath.isEqual(e._internalPath)}constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new rc(nc.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ec(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wp{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return mc(this._lat,e._lat)||mc(this._long,e._long)}constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new rc(nc.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new rc(nc.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=/^__.*__$/;class Sp{toMutation(e,t){return null!==this.fieldMask?new Qu(e,this.data,this.fieldMask,t,this.fieldTransforms):new Wu(e,this.data,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}function kp(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Za()}}class Ip{get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Ip(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Zc({path:n,ta:!1});return r.ea(e),r}na(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Zc({path:n,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return xp(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(0===e.length)throw this.ia("Document fields must not be empty");if(kp(this.Yc)&&Ep.test(e))throw this.ia('Document fields cannot begin and end with "__"')}constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}}class Tp{ua(e,t,n,r=!1){return new Ip({Yc:e,methodName:t,oa:n,path:Ec.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||ud(e)}}function Cp(e){const t=e._freezeSettings(),n=ud(e._databaseId);return new Tp(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Ap(e,t,n,r,i,s={}){const o=e.ua(s.merge||s.mergeFields?2:0,t,n,i);Np("Data must be an object, but it was:",o,r);const a=Pp(r,o);let c,l;if(s.merge)c=new Qc(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Rp(t,r,n);if(!o.contains(i))throw new rc(nc.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Up(e,i)||e.push(i)}c=new Qc(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new Sp(new wl(a),c,l)}function Lp(e,t){if(Op(e=J(e)))return Np("Unsupported field value:",t,e),Pp(e,t);if(e instanceof wp)return function(e,t){if(!kp(t.Yc))throw t.ia(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ia(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ta&&4!==t.Yc)throw t.ia("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Lp(i,t.sa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=J(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Cu(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=vc.fromDate(e);return{timestampValue:lh(t.serializer,n)}}if(e instanceof vc){const n=new vc(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:lh(t.serializer,n)}}if(e instanceof bp)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof yp)return{bytesValue:uh(t.serializer,e._byteString)};if(e instanceof up){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ph(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ia(`Unsupported field value: ${sp(e)}`)}(e,t)}function Pp(e,t){const n={};return Hc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):$c(e,((e,r)=>{const i=Lp(r,t.Xc(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Op(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof vc||e instanceof bp||e instanceof yp||e instanceof up||e instanceof wp)}function Np(e,t,n){if(!Op(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=sp(n);throw"an object"===r?t.ia(e+" a custom object"):t.ia(e+" "+r)}var r}function Rp(e,t,n){if((t=J(t))instanceof _p)return t._internalPath;if("string"==typeof t)return Mp(e,t);throw xp("Field path arguments must be of type string or ",e,!1,void 0,n)}const Dp=new RegExp("[~\\*/\\[\\]]");function Mp(e,t,n){if(t.search(Dp)>=0)throw xp(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new _p(...t.split("."))._internalPath}catch(r){throw xp(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function xp(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new rc(nc.INVALID_ARGUMENT,a+e+c)}function Up(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fp(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}function Vp(e,t,n){e=op(e,up);const r=op(e.firestore,mp),i=Fp(e.converter,t,n);return Bp(r,[Ap(Cp(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Bu.none())])}function Bp(e,t){return function(e,t){const n=new ic;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const r=Kd(e);try{const e=await function(e,t){const n=tc(e),r=vc.now(),i=t.reduce(((e,t)=>e.add(t.key)),Eu());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=pu(),c=Eu();return n.Ki.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=Ku(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new Qu(e.key,t,bl(t.value.mapValue),Bu.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:gu(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.ac[e.currentUser.toKey()];r||(r=new qc(mc)),r=r.insert(t,n),e.ac[e.currentUser.toKey()]=r}(r,e.batchId,n),await qd(r,e.changes),await Ed(r.remoteStore)}catch(e){const t=Md(e,"Failed to persist write");n.reject(t)}}(await tp(e),t,n))),n.promise}(gp(e),t)}!function(e,t=!0){Ka="9.19.1",Oe(new X("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new mp(new cc(e.getProvider("auth-internal")),new dc(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new rc(nc.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ol(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),Ue("@firebase/firestore","3.10.0",e),Ue("@firebase/firestore","3.10.0","esm2017")}();const jp=Me({apiKey:"AIzaSyAfz0zKTMfxu6wjOe8cEAMtCcpz5hitokc",authDomain:"filmoteka-599e8.firebaseapp.com",databaseURL:"https://filmoteka-599e8-default-rtdb.europe-west1.firebasedatabase.app",projectId:"filmoteka-599e8",storageBucket:"filmoteka-599e8.appspot.com",messagingSenderId:"448204349167",appId:"1:448204349167:web:ac77389e13cfaab0db051a",measurementId:"G-C80DY74WT0"}),$p=function(e,t){const n="string"==typeof e?e:t||"(default)",r=Ne("object"==typeof e?e:xe(),"firestore").getImmediate({identifier:n});if(!r._initialized){const e=L("firestore");e&&lp(r,...e)}return r}(jp),Hp=function(e=xe()){const t=Ne(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Ne(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(j(n.getOptions(),null!=t?t:{}))return e;Ze(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Ur,persistence:[Qn,Mn,Un]}),r=P("authTokenSyncURL");if(r){const e=(i=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Vr)return;const r=null==t?void 0:t.token;Br!==r&&(Br=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){J(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){J(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var i;const s=A("auth");return s&&tn(n,`http://${s}`),n}(jp),qp=new vn,Gp=new yn;function Kp(e,t){const n={error:{icon:'<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />\n                    </svg>',color:"#B22222"},success:{icon:'<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />\n                    </svg>',color:"#008000"}};$("#notification").css("background-color",n[e].color),$(".notification_icon").html(n[e].icon),$(".notification_text").html(t),$("#notification").animate({left:"10px",opacity:1},200,"swing"),setTimeout((()=>{$("#notification").animate({bottom:"-100px",opacity:0},{duration:200,easing:"swing",complete:()=>{$("#notification").removeAttr("style")}})}),4e3)}const zp=document.querySelector(".home"),Wp=document.querySelector(".library"),Qp=document.querySelectorAll("#home"),Jp=document.querySelectorAll("#library"),Xp=document.querySelector("#login"),Yp=document.querySelectorAll(".logout"),Zp=document.querySelector(".login"),ef=document.querySelector("#register"),tf=document.querySelector(".register"),nf=document.querySelector(".convenience-menu"),rf=(document.querySelector("body"),document.querySelector(".main")),sf=document.querySelector(".main-library");function of(){Nn(Hp).then((()=>{af(),Kp("success","You have successfully logged out.")}))}function af(){Wp.classList.add("invisible"),zp.classList.remove("invisible"),sf.classList.add("invisible"),rf.classList.remove("invisible"),tf.classList.add("invisible"),Zp.classList.add("invisible"),nf.classList.remove("invisible")}function cf(){Wp.classList.remove("invisible"),zp.classList.add("invisible"),sf.classList.remove("invisible"),rf.classList.add("invisible"),tf.classList.add("invisible"),Zp.classList.add("invisible"),nf.classList.remove("invisible")}window.addEventListener("load",(()=>{On(Hp,(e=>{null!==e?(Jp[0].parentNode.classList.remove("invisible"),Jp[1].parentNode.classList.remove("invisible"),Xp.classList.add("invisible"),Yp[0].classList.remove("invisible"),Yp[1].classList.remove("invisible")):(Jp[0].parentNode.classList.add("invisible"),Jp[1].parentNode.classList.add("invisible"),Xp.classList.remove("invisible"),Yp[0].classList.add("invisible"),Yp[1].classList.add("invisible"))}))})),Qp[0].addEventListener("click",af),Qp[1].addEventListener("click",af),Jp[0].addEventListener("click",cf),Jp[1].addEventListener("click",cf),Xp.addEventListener("click",(function(){Zp.classList.remove("invisible"),tf.classList.add("invisible"),rf.classList.add("invisible"),nf.classList.add("invisible")})),ef.addEventListener("click",(function(){tf.classList.remove("invisible"),Zp.classList.add("invisible"),rf.classList.add("invisible"),nf.classList.add("invisible")})),Yp[0].addEventListener("click",of),Yp[1].addEventListener("click",of);const lf=document.querySelector(".theme-switch__toggle"),uf=document.querySelector("body"),hf=document.getElementsByTagName("h2"),df=document.querySelector(".film_modal"),pf=localStorage.getItem("theme");function ff(e){if("dark"===e){uf.classList.add("dark_theme"),df.classList.add("dark_modal");for(let e=0;e<hf.length;e++){hf[e].classList.add("dark_theme_title")}lf.checked=!0}else if("light"===e){uf.classList.remove("dark_theme"),df.classList.remove("dark_modal");for(let e=0;e<hf.length;e++){hf[e].classList.remove("dark_theme_title")}lf.checked=!1}}lf.addEventListener("click",(function(){!0===lf.checked?(localStorage.setItem("theme","dark"),ff("dark")):!1===lf.checked&&(localStorage.setItem("theme","light"),ff("light"))})),ff(pf);let mf="",gf="",vf="",yf=[];var _f={fetchTrendFilms:async function(e){try{const t=await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=070151ea430b4e74dbca9bca592b262c&page=${e}`);return await t.json()}catch(e){}finally{yf.length=[],yf.push("trendFilms")}},fetchSearchFilms:async function(e){try{const t=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=070151ea430b4e74dbca9bca592b262c&query=${mf}&language=en-US&page=${e}&include_adult=false`);return await t.json()}catch(e){}finally{yf.length=[],yf.push("searchFilms")}},fetchFilmById:async function(e){try{const t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=070151ea430b4e74dbca9bca592b262c&language=$language=en-US`);return await t.json()}catch(e){}},fetchGenres:async function(){try{const e=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=070151ea430b4e74dbca9bca592b262c&language=en-US");return(await e.json()).genres}catch(e){}},fetchFilmsByGenre:async function(e,t){try{const n=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=070151ea430b4e74dbca9bca592b262c&with_genres=${e}&language=en-US&page=${t}`);return await n.json()}catch(e){}finally{yf.length=[],yf.push("byGenreFilms")}},fetchDiscover:async function(e,t){try{const n=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=070151ea430b4e74dbca9bca592b262c&language=en-US&page=${t}&sort_by=${e}`);return await n.json()}catch(e){}finally{yf.length=[],yf.push("discoverFilms")}},BASE_URL:"https://api.themoviedb.org",API_KEY:"070151ea430b4e74dbca9bca592b262c",page:1,fetchType:yf,searchQuery:e=>{mf=e},takeGenre:e=>{gf=e},sortByMethod:e=>{vf=e}};function wf(){const e=document.getElementsByClassName("film-card__release"),t=document.getElementsByClassName("film-card__genres"),n=document.getElementsByClassName("film-card__vote");for(let e=0;e<n.length;e++){let t=String(n[e].innerHTML.slice(0,3));n[e].innerHTML=t%1!=0?Number(t):Number(t)+".0"}for(let t=0;t<e.length;t++){let n=String(e[t].innerHTML).slice(0,4);e[t].innerHTML=Number(n)}_f.fetchGenres().then((e=>{for(let n=0;n<t.length;n++){const r=t[n].innerHTML.split(","),i=e.map((e=>e.id)),s=e.map((e=>e.name));r.forEach((function(e,o){for(let a=0;a<i.length;a++)e==i[a]&&(this[o]=" "+s[a]),t[n].innerHTML=r}),r)}}))}var bf,Ef={};function Sf(e){return e&&e.__esModule?e:{default:e}}Ef.__esModule=!0;var kf={};function If(e){return e&&e.__esModule?e:{default:e}}function Tf(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}kf.__esModule=!0;var Cf,Af,Lf,Pf,Of,Nf,Rf,Df,Mf,xf={};function Uf(e){return e&&e.__esModule?e:{default:e}}e(xf,"__esModule",(function(){return Cf}),(function(e){return Cf=e})),e(xf,"HandlebarsEnvironment",(function(){return Af}),(function(e){return Af=e})),e(xf,"VERSION",(function(){return Lf}),(function(e){return Lf=e})),e(xf,"COMPILER_REVISION",(function(){return Pf}),(function(e){return Pf=e})),e(xf,"LAST_COMPATIBLE_COMPILER_REVISION",(function(){return Of}),(function(e){return Of=e})),e(xf,"REVISION_CHANGES",(function(){return Nf}),(function(e){return Nf=e})),e(xf,"log",(function(){return Rf}),(function(e){return Rf=e})),e(xf,"createFrame",(function(){return Df}),(function(e){return Df=e})),e(xf,"logger",(function(){return Mf}),(function(e){return Mf=e})),Cf=!0,Af=Hm;var Ff,Vf,Bf,jf,$f,Hf,qf,Gf,Kf,zf,Wf,Qf={};e(Qf,"__esModule",(function(){return Ff}),(function(e){return Ff=e})),e(Qf,"extend",(function(){return Vf}),(function(e){return Vf=e})),e(Qf,"indexOf",(function(){return Bf}),(function(e){return Bf=e})),e(Qf,"escapeExpression",(function(){return jf}),(function(e){return jf=e})),e(Qf,"isEmpty",(function(){return $f}),(function(e){return $f=e})),e(Qf,"createFrame",(function(){return Hf}),(function(e){return Hf=e})),e(Qf,"blockParams",(function(){return qf}),(function(e){return qf=e})),e(Qf,"appendContextPath",(function(){return Gf}),(function(e){return Gf=e})),e(Qf,"toString",(function(){return Kf}),(function(e){return Kf=e})),e(Qf,"isFunction",(function(){return zf}),(function(e){return zf=e})),e(Qf,"isArray",(function(){return Wf}),(function(e){return Wf=e})),Ff=!0,Vf=em,Bf=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},jf=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return Yf.test(e)?e.replace(Xf,Zf):e},$f=function(e){return!e&&0!==e||!(!rm(e)||0!==e.length)},Hf=function(e){var t=em({},e);return t._parent=e,t},qf=function(e,t){return e.path=t,e},Gf=function(e,t){return(e?e+".":"")+t};var Jf={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},Xf=/[&<>"'`=]/g,Yf=/[&<>"'`=]/;function Zf(e){return Jf[e]}function em(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}var tm=Object.prototype.toString;Kf=tm;var nm=function(e){return"function"==typeof e};nm(/x/)&&(zf=nm=function(e){return"function"==typeof e&&"[object Function]"===tm.call(e)}),zf=nm;var rm=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===tm.call(e)};Wf=rm;var im={__esModule:!0},sm=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function om(e,t){var n=t&&t.loc,r=void 0,i=void 0,s=void 0,o=void 0;n&&(r=n.start.line,i=n.end.line,s=n.start.column,o=n.end.column,e+=" - "+r+":"+s);for(var a=Error.prototype.constructor.call(this,e),c=0;c<sm.length;c++)this[sm[c]]=a[sm[c]];Error.captureStackTrace&&Error.captureStackTrace(this,om);try{n&&(this.lineNumber=r,this.endLineNumber=i,Object.defineProperty?(Object.defineProperty(this,"column",{value:s,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:o,enumerable:!0})):(this.column=s,this.endColumn=o))}catch(e){}}om.prototype=new Error,im.default=om;var am,cm,lm=Uf(im=im.default);function um(e){return e&&e.__esModule?e:{default:e}}am=function(e){dm.default(e),gm.default(e),_m.default(e),Em.default(e),km.default(e),Tm.default(e),Pm.default(e)},cm=function(e,t,n){e.helpers[t]&&(e.hooks[t]=e.helpers[t],n||delete e.helpers[t])};var hm={__esModule:!0,default:function(e){e.registerHelper("blockHelperMissing",(function(t,n){var r=n.inverse,i=n.fn;if(!0===t)return i(this);if(!1===t||null==t)return r(this);if(Wf(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):r(this);if(n.data&&n.ids){var s=Hf(n.data);s.contextPath=Gf(n.data.contextPath,n.name),n={data:s}}return i(t,n)}))}},dm=um(hm=hm.default),pm={};pm.__esModule=!0;var fm,mm=(fm=im)&&fm.__esModule?fm:{default:fm};pm.default=function(e){e.registerHelper("each",(function(e,n){if(!n)throw new mm.default("Must pass iterator to #each");var r,i=n.fn,s=n.inverse,o=0,a="",c=void 0,l=void 0;function u(t,n,r){c&&(c.key=t,c.index=n,c.first=0===n,c.last=!!r,l&&(c.contextPath=l+t)),a+=i(e[t],{data:c,blockParams:qf([e[t],t],[l+t,null])})}if(n.data&&n.ids&&(l=Gf(n.data.contextPath,n.ids[0])+"."),zf(e)&&(e=e.call(this)),n.data&&(c=Hf(n.data)),e&&"object"==typeof e)if(Wf(e))for(var h=e.length;o<h;o++)o in e&&u(o,o,o===e.length-1);else if(t.Symbol&&e[t.Symbol.iterator]){for(var d=[],p=e[t.Symbol.iterator](),f=p.next();!f.done;f=p.next())d.push(f.value);for(h=(e=d).length;o<h;o++)u(o,o,o===e.length-1)}else r=void 0,Object.keys(e).forEach((function(e){void 0!==r&&u(r,o-1),r=e,o++})),void 0!==r&&u(r,o-1,!0);return 0===o&&(a=s(this)),a}))};var gm=um(pm=pm.default),vm={};vm.__esModule=!0;var ym=function(e){return e&&e.__esModule?e:{default:e}}(im);vm.default=function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new ym.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))};var _m=um(vm=vm.default),wm={};wm.__esModule=!0;var bm=function(e){return e&&e.__esModule?e:{default:e}}(im);wm.default=function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new bm.default("#if requires exactly one argument");return zf(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||$f(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,n){if(2!=arguments.length)throw new bm.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}))};var Em=um(wm=wm.default),Sm={__esModule:!0,default:function(e){e.registerHelper("log",(function(){for(var t=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)t.push(arguments[r]);var i=1;null!=n.hash.level?i=n.hash.level:n.data&&null!=n.data.level&&(i=n.data.level),t[0]=i,e.log.apply(e,t)}))}},km=um(Sm=Sm.default),Im={__esModule:!0,default:function(e){e.registerHelper("lookup",(function(e,t,n){return e?n.lookupProperty(e,t):e}))}},Tm=um(Im=Im.default),Cm={};Cm.__esModule=!0;var Am=function(e){return e&&e.__esModule?e:{default:e}}(im);Cm.default=function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new Am.default("#with requires exactly one argument");zf(e)&&(e=e.call(this));var n=t.fn;if($f(e))return t.inverse(this);var r=t.data;return t.data&&t.ids&&((r=Hf(t.data)).contextPath=Gf(t.data.contextPath,t.ids[0])),n(e,{data:r,blockParams:qf([e],[r&&r.contextPath])})}))};var Lm,Pm=um(Cm=Cm.default);Lm=function(e){Nm.default(e)};var Om={__esModule:!0,default:function(e){e.registerDecorator("inline",(function(e,t,n,r){var i=e;return t.partials||(t.partials={},i=function(r,i){var s=n.partials;n.partials=Vf({},s,t.partials);var o=e(r,i);return n.partials=s,o}),t.partials[r.args[0]]=r.fn,i}))}},Nm=function(e){return e&&e.__esModule?e:{default:e}}(Om=Om.default);var Rm={__esModule:!0},Dm={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=Bf(Dm.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=Dm.lookupLevel(e),"undefined"!=typeof console&&Dm.lookupLevel(Dm.level)<=e){var t=Dm.methodMap[e];console[t]||(t="log");for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];console[t].apply(console,r)}}};Rm.default=Dm;var Mm,xm,Um,Fm,Vm=Uf(Rm=Rm.default);Mm=function(e){var t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var n=Object.create(null);return n.__proto__=!1,{properties:{whitelist:Fm(n,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:Fm(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},xm=function(e,t,n){return $m("function"==typeof e?t.methods:t.properties,n)},Um=function(){Object.keys(jm).forEach((function(e){delete jm[e]}))},Fm=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return Vf.apply(void 0,[Object.create(null)].concat(t))};var Bm=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(Rm),jm=Object.create(null);function $m(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==jm[e]&&(jm[e]=!0,Bm.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}Lf="4.7.7";Pf=8;Of=7;Nf={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function Hm(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},am(this),Lm(this)}Hm.prototype={constructor:Hm,logger:Vm.default,log:Vm.default.log,registerHelper:function(e,t){if("[object Object]"===Kf.call(e)){if(t)throw new lm.default("Arg not supported with multiple helpers");Vf(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===Kf.call(e))Vf(this.partials,e);else{if(void 0===t)throw new lm.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===Kf.call(e)){if(t)throw new lm.default("Arg not supported with multiple decorators");Vf(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){Um()}};var qm=Vm.default.log;Rf=qm,Df=Hf,Mf=Vm.default;var Gm=Tf(xf),Km={};function zm(e){this.string=e}Km.__esModule=!0,zm.prototype.toString=zm.prototype.toHTML=function(){return""+this.string},Km.default=zm;var Wm,Qm,Jm,Xm,Ym,Zm,eg,tg=If(Km=Km.default),ng=If(im),rg=Tf(Qf),ig={};e(ig,"__esModule",(function(){return Wm}),(function(e){return Wm=e})),e(ig,"checkRevision",(function(){return Qm}),(function(e){return Qm=e})),e(ig,"template",(function(){return Jm}),(function(e){return Jm=e})),e(ig,"wrapProgram",(function(){return Xm}),(function(e){return Xm=e})),e(ig,"resolvePartial",(function(){return Ym}),(function(e){return Ym=e})),e(ig,"invokePartial",(function(){return Zm}),(function(e){return Zm=e})),e(ig,"noop",(function(){return eg}),(function(e){return eg=e})),Wm=!0,Qm=function(e){var t=e&&e[0]||1,n=Pf;if(t>=Of&&t<=Pf)return;if(t<Of){var r=Nf[n],i=Nf[t];throw new ag.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+i+").")}throw new ag.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")},Jm=function(e,t){if(!t)throw new ag.default("No environment passed to template");if(!e||!e.main)throw new ag.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var n=e.compiler&&7===e.compiler[0];var r={strict:function(e,t,n){if(!e||!(t in e))throw new ag.default('"'+t+'" not defined in '+e,{loc:n});return r.lookupProperty(e,t)},lookupProperty:function(e,t){var n=e[t];return null==n||Object.prototype.hasOwnProperty.call(e,t)||xm(n,r.protoAccessControl,t)?n:void 0},lookup:function(e,t){for(var n=e.length,i=0;i<n;i++){if(null!=(e[i]&&r.lookupProperty(e[i],t)))return e[i][t]}},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:og.escapeExpression,invokePartial:function(n,r,i){i.hash&&(r=og.extend({},r,i.hash),i.ids&&(i.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,r,i);var s=og.extend({},i,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),o=t.VM.invokePartial.call(this,n,r,s);if(null==o&&t.compile&&(i.partials[i.name]=t.compile(n,e.compilerOptions,t),o=i.partials[i.name](r,s)),null!=o){if(i.indent){for(var a=o.split("\n"),c=0,l=a.length;c<l&&(a[c]||c+1!==l);c++)a[c]=i.indent+a[c];o=a.join("\n")}return o}throw new ag.default("The partial "+i.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,i){var s=this.programs[e],o=this.fn(e);return t||i||r||n?s=cg(this,e,o,t,n,r,i):s||(s=this.programs[e]=cg(this,e,o)),s},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=og.extend({},t,e)),n},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function i(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=n.data;i._setup(n),!n.partial&&e.useData&&(s=ug(t,s));var o=void 0,a=e.useBlockParams?[]:void 0;function c(t){return""+e.main(r,t,r.helpers,r.partials,s,a,o)}return e.useDepths&&(o=n.depths?t!=n.depths[0]?[t].concat(n.depths):n.depths:[t]),(c=hg(e.main,c,r,n.depths||[],s,a))(t,n)}return i.isTop=!0,i._setup=function(i){if(i.partial)r.protoAccessControl=i.protoAccessControl,r.helpers=i.helpers,r.partials=i.partials,r.decorators=i.decorators,r.hooks=i.hooks;else{var s=og.extend({},t.helpers,i.helpers);!function(e,t){Object.keys(e).forEach((function(n){var r=e[n];e[n]=function(e,t){var n=t.lookupProperty;return sg(e,(function(e){return og.extend({lookupProperty:n},e)}))}(r,t)}))}(s,r),r.helpers=s,e.usePartial&&(r.partials=r.mergeIfNeeded(i.partials,t.partials)),(e.usePartial||e.useDecorators)&&(r.decorators=og.extend({},t.decorators,i.decorators)),r.hooks={},r.protoAccessControl=Mm(i);var o=i.allowCallsToHelperMissing||n;cm(r,"helperMissing",o),cm(r,"blockHelperMissing",o)}},i._child=function(t,n,i,s){if(e.useBlockParams&&!i)throw new ag.default("must pass block params");if(e.useDepths&&!s)throw new ag.default("must pass parent depths");return cg(r,t,e[t],n,0,i,s)},i},Xm=cg,Ym=function(e,t,n){e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return e},Zm=function(e,t,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var i=void 0;n.fn&&n.fn!==lg&&function(){n.data=Df(n.data);var e=n.fn;i=n.data["partial-block"]=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=Df(n.data),n.data["partial-block"]=r,e(t,n)},e.partials&&(n.partials=og.extend({},n.partials,e.partials))}();void 0===e&&i&&(e=i);if(void 0===e)throw new ag.default("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)},eg=lg;var sg,og=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(Qf),ag=function(e){return e&&e.__esModule?e:{default:e}}(im);function cg(e,t,n,r,i,s,o){function a(t){var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=o;return!o||t==o[0]||t===e.nullContext&&null===o[0]||(a=[t].concat(o)),n(e,t,e.helpers,e.partials,i.data||r,s&&[i.blockParams].concat(s),a)}return(a=hg(n,a,e,o,r,s)).program=t,a.depth=o?o.length:0,a.blockParams=i||0,a}function lg(){return""}function ug(e,t){return t&&"root"in t||((t=t?Df(t):{}).root=e),t}function hg(e,t,n,r,i,s){if(e.decorator){var o={};t=e.decorator(t,o,n,r&&r[0],i,s,r),og.extend(t,o)}return t}sg=function(e,t){if("function"!=typeof e)return e;return function(){return arguments[arguments.length-1]=t(arguments[arguments.length-1]),e.apply(this,arguments)}};var dg=Tf(ig),pg={__esModule:!0,default:function(e){var n=void 0!==t?t:window,r=n.Handlebars;e.noConflict=function(){return n.Handlebars===e&&(n.Handlebars=r),e}}},fg=If(pg=pg.default);function mg(){var e=new Gm.HandlebarsEnvironment;return rg.extend(e,Gm),e.SafeString=tg.default,e.Exception=ng.default,e.Utils=rg,e.escapeExpression=rg.escapeExpression,e.VM=dg,e.template=function(t){return dg.template(t,e)},e}var gg=mg();gg.create=mg,fg.default(gg),gg.default=gg,kf.default=gg;var vg=Sf(kf=kf.default),yg={__esModule:!0},_g={helpers:{helperExpression:function(e){return"SubExpression"===e.type||("MustacheStatement"===e.type||"BlockStatement"===e.type)&&!!(e.params&&e.params.length||e.hash)},scopedId:function(e){return/^\.|this\b/.test(e.original)},simpleId:function(e){return 1===e.parts.length&&!_g.helpers.scopedId(e)&&!e.depth}}};yg.default=_g;var wg,bg,Eg,Sg=Sf(yg=yg.default);function kg(e){return e&&e.__esModule?e:{default:e}}wg=av,bg=function(e,t){var n=av(e,t);return new Yg.default(t).accept(n)};var Ig={__esModule:!0},Tg=function(){var e={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(e,t,n,r,i,s,o){var a=s.length-1;switch(i){case 1:return s[a-1];case 2:this.$=r.prepareProgram(s[a]);break;case 3:case 4:case 5:case 6:case 7:case 8:case 20:case 27:case 28:case 33:case 34:case 40:case 41:this.$=s[a];break;case 9:this.$={type:"CommentStatement",value:r.stripComment(s[a]),strip:r.stripFlags(s[a],s[a]),loc:r.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:s[a],value:s[a],loc:r.locInfo(this._$)};break;case 11:this.$=r.prepareRawBlock(s[a-2],s[a-1],s[a],this._$);break;case 12:this.$={path:s[a-3],params:s[a-2],hash:s[a-1]};break;case 13:this.$=r.prepareBlock(s[a-3],s[a-2],s[a-1],s[a],!1,this._$);break;case 14:this.$=r.prepareBlock(s[a-3],s[a-2],s[a-1],s[a],!0,this._$);break;case 15:this.$={open:s[a-5],path:s[a-4],params:s[a-3],hash:s[a-2],blockParams:s[a-1],strip:r.stripFlags(s[a-5],s[a])};break;case 16:case 17:this.$={path:s[a-4],params:s[a-3],hash:s[a-2],blockParams:s[a-1],strip:r.stripFlags(s[a-5],s[a])};break;case 18:this.$={strip:r.stripFlags(s[a-1],s[a-1]),program:s[a]};break;case 19:var c=r.prepareBlock(s[a-2],s[a-1],s[a],s[a],!1,this._$),l=r.prepareProgram([c],s[a-1].loc);l.chained=!0,this.$={strip:s[a-2].strip,program:l,chain:!0};break;case 21:this.$={path:s[a-1],strip:r.stripFlags(s[a-2],s[a])};break;case 22:case 23:this.$=r.prepareMustache(s[a-3],s[a-2],s[a-1],s[a-4],r.stripFlags(s[a-4],s[a]),this._$);break;case 24:this.$={type:"PartialStatement",name:s[a-3],params:s[a-2],hash:s[a-1],indent:"",strip:r.stripFlags(s[a-4],s[a]),loc:r.locInfo(this._$)};break;case 25:this.$=r.preparePartialBlock(s[a-2],s[a-1],s[a],this._$);break;case 26:this.$={path:s[a-3],params:s[a-2],hash:s[a-1],strip:r.stripFlags(s[a-4],s[a])};break;case 29:this.$={type:"SubExpression",path:s[a-3],params:s[a-2],hash:s[a-1],loc:r.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:s[a],loc:r.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:r.id(s[a-2]),value:s[a],loc:r.locInfo(this._$)};break;case 32:this.$=r.id(s[a-1]);break;case 35:this.$={type:"StringLiteral",value:s[a],original:s[a],loc:r.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(s[a]),original:Number(s[a]),loc:r.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:"true"===s[a],original:"true"===s[a],loc:r.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:r.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:r.locInfo(this._$)};break;case 42:this.$=r.preparePath(!0,s[a],this._$);break;case 43:this.$=r.preparePath(!1,s[a],this._$);break;case 44:s[a-2].push({part:r.id(s[a]),original:s[a],separator:s[a-1]}),this.$=s[a-2];break;case 45:this.$=[{part:r.id(s[a]),original:s[a]}];break;case 46:case 48:case 50:case 58:case 64:case 70:case 78:case 82:case 86:case 90:case 94:this.$=[];break;case 47:case 49:case 51:case 59:case 65:case 71:case 79:case 83:case 87:case 91:case 95:case 99:case 101:s[a-1].push(s[a]);break;case 98:case 100:this.$=[s[a]]}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(e,t){throw new Error(e)},parse:function(e){var t=this,n=[0],r=[null],i=[],s=this.table,o="",a=0,c=0,l=0;this.lexer.setInput(e),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,void 0===this.lexer.yylloc&&(this.lexer.yylloc={});var u=this.lexer.yylloc;i.push(u);var h=this.lexer.options&&this.lexer.options.ranges;"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var d,p,f,m,g,v,y,_,w,b,E={};;){if(f=n[n.length-1],this.defaultActions[f]?m=this.defaultActions[f]:(null==d&&(b=void 0,"number"!=typeof(b=t.lexer.lex()||1)&&(b=t.symbols_[b]||b),d=b),m=s[f]&&s[f][d]),void 0===m||!m.length||!m[0]){var S="";if(!l){for(v in w=[],s[f])this.terminals_[v]&&v>2&&w.push("'"+this.terminals_[v]+"'");S=this.lexer.showPosition?"Parse error on line "+(a+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+w.join(", ")+", got '"+(this.terminals_[d]||d)+"'":"Parse error on line "+(a+1)+": Unexpected "+(1==d?"end of input":"'"+(this.terminals_[d]||d)+"'"),this.parseError(S,{text:this.lexer.match,token:this.terminals_[d]||d,line:this.lexer.yylineno,loc:u,expected:w})}}if(m[0]instanceof Array&&m.length>1)throw new Error("Parse Error: multiple actions possible at state: "+f+", token: "+d);switch(m[0]){case 1:n.push(d),r.push(this.lexer.yytext),i.push(this.lexer.yylloc),n.push(m[1]),d=null,p?(d=p,p=null):(c=this.lexer.yyleng,o=this.lexer.yytext,a=this.lexer.yylineno,u=this.lexer.yylloc,l>0&&l--);break;case 2:if(y=this.productions_[m[1]][1],E.$=r[r.length-y],E._$={first_line:i[i.length-(y||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(y||1)].first_column,last_column:i[i.length-1].last_column},h&&(E._$.range=[i[i.length-(y||1)].range[0],i[i.length-1].range[1]]),void 0!==(g=this.performAction.call(E,o,c,a,this.yy,m[1],r,i)))return g;y&&(n=n.slice(0,-1*y*2),r=r.slice(0,-1*y),i=i.slice(0,-1*y)),n.push(this.productions_[m[1]][0]),r.push(E.$),i.push(E._$),_=s[n[n.length-2]][n[n.length-1]],n.push(_);break;case 3:return!0}}return!0}},t={EOF:1,parseError:function(e,t){if(!this.yy.parser)throw new Error(e);this.yy.parser.parseError(e,t)},setInput:function(e){return this._input=e,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},unput:function(e){var t=e.length,n=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t-1),this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-t]),this},more:function(){return this._more=!0,this},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput(),t=new Array(e.length+1).join("-");return e+this.upcomingInput()+"\n"+t+"^"},next:function(){if(this.done)return this.EOF;var e,t,n,r,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),o=0;o<s.length&&(!(n=this._input.match(this.rules[s[o]]))||t&&!(n[0].length>t[0].length)||(t=n,r=o,this.options.flex));o++);return t?((i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],e=this.performAction.call(this,this.yy,this,s[r],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),e||void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var e=this.next();return void 0!==e?e:this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(e){this.begin(e)},options:{},performAction:function(e,t,n,r){function i(e,n){return t.yytext=t.yytext.substring(e,t.yyleng-n+e)}switch(n){case 0:if("\\\\"===t.yytext.slice(-2)?(i(0,1),this.begin("mu")):"\\"===t.yytext.slice(-1)?(i(0,1),this.begin("emu")):this.begin("mu"),t.yytext)return 15;break;case 1:case 5:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),"raw"===this.conditionStack[this.conditionStack.length-1]?15:(i(5,9),"END_RAW_BLOCK");case 6:case 22:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:case 23:return 48;case 21:this.unput(t.yytext),this.popState(),this.begin("com");break;case 24:return 73;case 25:case 26:case 41:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return t.yytext=i(1,2).replace(/\\"/g,'"'),80;case 32:return t.yytext=i(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 42:return t.yytext=t.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},rules:[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],conditions:{mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}}};function n(){this.yy={}}return e.lexer=t,n.prototype=e,e.Parser=n,new n}();Ig.default=Tg;var Cg=kg(Ig=Ig.default),Ag={};Ag.__esModule=!0;var Lg={};Lg.__esModule=!0;var Pg=function(e){return e&&e.__esModule?e:{default:e}}(im);function Og(){this.parents=[]}function Ng(e){this.acceptRequired(e,"path"),this.acceptArray(e.params),this.acceptKey(e,"hash")}function Rg(e){Ng.call(this,e),this.acceptKey(e,"program"),this.acceptKey(e,"inverse")}function Dg(e){this.acceptRequired(e,"name"),this.acceptArray(e.params),this.acceptKey(e,"hash")}Og.prototype={constructor:Og,mutating:!1,acceptKey:function(e,t){var n=this.accept(e[t]);if(this.mutating){if(n&&!Og.prototype[n.type])throw new Pg.default('Unexpected node type "'+n.type+'" found when accepting '+t+" on "+e.type);e[t]=n}},acceptRequired:function(e,t){if(this.acceptKey(e,t),!e[t])throw new Pg.default(e.type+" requires "+t)},acceptArray:function(e){for(var t=0,n=e.length;t<n;t++)this.acceptKey(e,t),e[t]||(e.splice(t,1),t--,n--)},accept:function(e){if(e){if(!this[e.type])throw new Pg.default("Unknown type: "+e.type,e);this.current&&this.parents.unshift(this.current),this.current=e;var t=this[e.type](e);return this.current=this.parents.shift(),!this.mutating||t?t:!1!==t?e:void 0}},Program:function(e){this.acceptArray(e.body)},MustacheStatement:Ng,Decorator:Ng,BlockStatement:Rg,DecoratorBlock:Rg,PartialStatement:Dg,PartialBlockStatement:function(e){Dg.call(this,e),this.acceptKey(e,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:Ng,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(e){this.acceptArray(e.pairs)},HashPair:function(e){this.acceptRequired(e,"value")}},Lg.default=Og;var Mg=function(e){return e&&e.__esModule?e:{default:e}}(Lg=Lg.default);function xg(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.options=e}function Ug(e,t,n){void 0===t&&(t=e.length);var r=e[t-1],i=e[t-2];return r?"ContentStatement"===r.type?(i||!n?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(r.original):void 0:n}function Fg(e,t,n){void 0===t&&(t=-1);var r=e[t+1],i=e[t+2];return r?"ContentStatement"===r.type?(i||!n?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(r.original):void 0:n}function Vg(e,t,n){var r=e[null==t?0:t+1];if(r&&"ContentStatement"===r.type&&(n||!r.rightStripped)){var i=r.value;r.value=r.value.replace(n?/^\s+/:/^[ \t]*\r?\n?/,""),r.rightStripped=r.value!==i}}function Bg(e,t,n){var r=e[null==t?e.length-1:t-1];if(r&&"ContentStatement"===r.type&&(n||!r.leftStripped)){var i=r.value;return r.value=r.value.replace(n?/\s+$/:/[ \t]+$/,""),r.leftStripped=r.value!==i,r.leftStripped}}xg.prototype=new Mg.default,xg.prototype.Program=function(e){var t=!this.options.ignoreStandalone,n=!this.isRootSeen;this.isRootSeen=!0;for(var r=e.body,i=0,s=r.length;i<s;i++){var o=r[i],a=this.accept(o);if(a){var c=Ug(r,i,n),l=Fg(r,i,n),u=a.openStandalone&&c,h=a.closeStandalone&&l,d=a.inlineStandalone&&c&&l;a.close&&Vg(r,i,!0),a.open&&Bg(r,i,!0),t&&d&&(Vg(r,i),Bg(r,i)&&"PartialStatement"===o.type&&(o.indent=/([ \t]+$)/.exec(r[i-1].original)[1])),t&&u&&(Vg((o.program||o.inverse).body),Bg(r,i)),t&&h&&(Vg(r,i),Bg((o.inverse||o.program).body))}}return e},xg.prototype.BlockStatement=xg.prototype.DecoratorBlock=xg.prototype.PartialBlockStatement=function(e){this.accept(e.program),this.accept(e.inverse);var t=e.program||e.inverse,n=e.program&&e.inverse,r=n,i=n;if(n&&n.chained)for(r=n.body[0].program;i.chained;)i=i.body[i.body.length-1].program;var s={open:e.openStrip.open,close:e.closeStrip.close,openStandalone:Fg(t.body),closeStandalone:Ug((r||t).body)};if(e.openStrip.close&&Vg(t.body,null,!0),n){var o=e.inverseStrip;o.open&&Bg(t.body,null,!0),o.close&&Vg(r.body,null,!0),e.closeStrip.open&&Bg(i.body,null,!0),!this.options.ignoreStandalone&&Ug(t.body)&&Fg(r.body)&&(Bg(t.body),Vg(r.body))}else e.closeStrip.open&&Bg(t.body,null,!0);return s},xg.prototype.Decorator=xg.prototype.MustacheStatement=function(e){return e.strip},xg.prototype.PartialStatement=xg.prototype.CommentStatement=function(e){var t=e.strip||{};return{inlineStandalone:!0,open:t.open,close:t.close}},Ag.default=xg;var jg,$g,Hg,qg,Gg,Kg,zg,Wg,Qg,Jg,Xg,Yg=kg(Ag=Ag.default),Zg={};e(Zg,"__esModule",(function(){return jg}),(function(e){return jg=e})),e(Zg,"SourceLocation",(function(){return $g}),(function(e){return $g=e})),e(Zg,"id",(function(){return Hg}),(function(e){return Hg=e})),e(Zg,"stripFlags",(function(){return qg}),(function(e){return qg=e})),e(Zg,"stripComment",(function(){return Gg}),(function(e){return Gg=e})),e(Zg,"preparePath",(function(){return Kg}),(function(e){return Kg=e})),e(Zg,"prepareMustache",(function(){return zg}),(function(e){return zg=e})),e(Zg,"prepareRawBlock",(function(){return Wg}),(function(e){return Wg=e})),e(Zg,"prepareBlock",(function(){return Qg}),(function(e){return Qg=e})),e(Zg,"prepareProgram",(function(){return Jg}),(function(e){return Jg=e})),e(Zg,"preparePartialBlock",(function(){return Xg}),(function(e){return Xg=e})),jg=!0,$g=function(e,t){this.source=e,this.start={line:t.first_line,column:t.first_column},this.end={line:t.last_line,column:t.last_column}},Hg=function(e){return/^\[.*\]$/.test(e)?e.substring(1,e.length-1):e},qg=function(e,t){return{open:"~"===e.charAt(2),close:"~"===t.charAt(t.length-3)}},Gg=function(e){return e.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")},Kg=function(e,t,n){n=this.locInfo(n);for(var r=e?"@":"",i=[],s=0,o=0,a=t.length;o<a;o++){var c=t[o].part,l=t[o].original!==c;if(r+=(t[o].separator||"")+c,l||".."!==c&&"."!==c&&"this"!==c)i.push(c);else{if(i.length>0)throw new ev.default("Invalid path: "+r,{loc:n});".."===c&&s++}}return{type:"PathExpression",data:e,depth:s,parts:i,original:r,loc:n}},zg=function(e,t,n,r,i,s){var o=r.charAt(3)||r.charAt(2),a="{"!==o&&"&"!==o;return{type:/\*/.test(r)?"Decorator":"MustacheStatement",path:e,params:t,hash:n,escaped:a,strip:i,loc:this.locInfo(s)}},Wg=function(e,t,n,r){tv(e,n),r=this.locInfo(r);var i={type:"Program",body:t,strip:{},loc:r};return{type:"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:i,openStrip:{},inverseStrip:{},closeStrip:{},loc:r}},Qg=function(e,t,n,r,i,s){r&&r.path&&tv(e,r);var o=/\*/.test(e.open);t.blockParams=e.blockParams;var a=void 0,c=void 0;if(n){if(o)throw new ev.default("Unexpected inverse block on decorator",n);n.chain&&(n.program.body[0].closeStrip=r.strip),c=n.strip,a=n.program}i&&(i=a,a=t,t=i);return{type:o?"DecoratorBlock":"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:t,inverse:a,openStrip:e.strip,inverseStrip:c,closeStrip:r&&r.strip,loc:this.locInfo(s)}},Jg=function(e,t){if(!t&&e.length){var n=e[0].loc,r=e[e.length-1].loc;n&&r&&(t={source:n.source,start:{line:n.start.line,column:n.start.column},end:{line:r.end.line,column:r.end.column}})}return{type:"Program",body:e,strip:{},loc:t}},Xg=function(e,t,n,r){return tv(e,n),{type:"PartialBlockStatement",name:e.path,params:e.params,hash:e.hash,program:t,openStrip:e.strip,closeStrip:n&&n.strip,loc:this.locInfo(r)}};var ev=function(e){return e&&e.__esModule?e:{default:e}}(im);function tv(e,t){if(t=t.path?t.path.original:t,e.path.original!==t){var n={loc:e.path.loc};throw new ev.default(e.path.original+" doesn't match "+t,n)}}var nv=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(Zg);Eg=Cg.default;var rv,iv,sv,ov={};function av(e,t){return"Program"===e.type?e:(Cg.default.yy=ov,ov.locInfo=function(e){return new ov.SourceLocation(t&&t.srcName,e)},Cg.default.parse(e))}function cv(e){return e&&e.__esModule?e:{default:e}}Vf(ov,nv),rv=dv,iv=function(e,t,n){if(null==e||"string"!=typeof e&&"Program"!==e.type)throw new lv.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+e);"data"in(t=t||{})||(t.data=!0);t.compat&&(t.useDepths=!0);var r=n.parse(e,t),i=(new n.Compiler).compile(r,t);return(new n.JavaScriptCompiler).compile(i,t)},sv=function(e,t,n){void 0===t&&(t={});if(null==e||"string"!=typeof e&&"Program"!==e.type)throw new lv.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+e);"data"in(t=Vf({},t))||(t.data=!0);t.compat&&(t.useDepths=!0);var r=void 0;function i(){var r=n.parse(e,t),i=(new n.Compiler).compile(r,t),s=(new n.JavaScriptCompiler).compile(i,t,void 0,!0);return n.template(s)}function s(e,t){return r||(r=i()),r.call(this,e,t)}return s._setup=function(e){return r||(r=i()),r._setup(e)},s._child=function(e,t,n,s){return r||(r=i()),r._child(e,t,n,s)},s};var lv=cv(im),uv=cv(yg),hv=[].slice;function dv(){}function pv(e,t){if(e===t)return!0;if(Wf(e)&&Wf(t)&&e.length===t.length){for(var n=0;n<e.length;n++)if(!pv(e[n],t[n]))return!1;return!0}}function fv(e){if(!e.path.parts){var t=e.path;e.path={type:"PathExpression",data:!1,depth:0,parts:[t.original+""],original:t.original+"",loc:t.loc}}}dv.prototype={compiler:dv,equals:function(e){var t=this.opcodes.length;if(e.opcodes.length!==t)return!1;for(var n=0;n<t;n++){var r=this.opcodes[n],i=e.opcodes[n];if(r.opcode!==i.opcode||!pv(r.args,i.args))return!1}t=this.children.length;for(n=0;n<t;n++)if(!this.children[n].equals(e.children[n]))return!1;return!0},guid:0,compile:function(e,t){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=t,this.stringParams=t.stringParams,this.trackIds=t.trackIds,t.blockParams=t.blockParams||[],t.knownHelpers=Vf(Object.create(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},t.knownHelpers),this.accept(e)},compileProgram:function(e){var t=(new this.compiler).compile(e,this.options),n=this.guid++;return this.usePartial=this.usePartial||t.usePartial,this.children[n]=t,this.useDepths=this.useDepths||t.useDepths,n},accept:function(e){if(!this[e.type])throw new lv.default("Unknown type: "+e.type,e);this.sourceNode.unshift(e);var t=this[e.type](e);return this.sourceNode.shift(),t},Program:function(e){this.options.blockParams.unshift(e.blockParams);for(var t=e.body,n=t.length,r=0;r<n;r++)this.accept(t[r]);return this.options.blockParams.shift(),this.isSimple=1===n,this.blockParams=e.blockParams?e.blockParams.length:0,this},BlockStatement:function(e){fv(e);var t=e.program,n=e.inverse;t=t&&this.compileProgram(t),n=n&&this.compileProgram(n);var r=this.classifySexpr(e);"helper"===r?this.helperSexpr(e,t,n):"simple"===r?(this.simpleSexpr(e),this.opcode("pushProgram",t),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("blockValue",e.path.original)):(this.ambiguousSexpr(e,t,n),this.opcode("pushProgram",t),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(e){var t=e.program&&this.compileProgram(e.program),n=this.setupFullMustacheParams(e,t,void 0),r=e.path;this.useDecorators=!0,this.opcode("registerDecorator",n.length,r.original)},PartialStatement:function(e){this.usePartial=!0;var t=e.program;t&&(t=this.compileProgram(e.program));var n=e.params;if(n.length>1)throw new lv.default("Unsupported number of partial arguments: "+n.length,e);n.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):n.push({type:"PathExpression",parts:[],depth:0}));var r=e.name.original,i="SubExpression"===e.name.type;i&&this.accept(e.name),this.setupFullMustacheParams(e,t,void 0,!0);var s=e.indent||"";this.options.preventIndent&&s&&(this.opcode("appendContent",s),s=""),this.opcode("invokePartial",i,r,s),this.opcode("append")},PartialBlockStatement:function(e){this.PartialStatement(e)},MustacheStatement:function(e){this.SubExpression(e),e.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(e){this.DecoratorBlock(e)},ContentStatement:function(e){e.value&&this.opcode("appendContent",e.value)},CommentStatement:function(){},SubExpression:function(e){fv(e);var t=this.classifySexpr(e);"simple"===t?this.simpleSexpr(e):"helper"===t?this.helperSexpr(e):this.ambiguousSexpr(e)},ambiguousSexpr:function(e,t,n){var r=e.path,i=r.parts[0],s=null!=t||null!=n;this.opcode("getContext",r.depth),this.opcode("pushProgram",t),this.opcode("pushProgram",n),r.strict=!0,this.accept(r),this.opcode("invokeAmbiguous",i,s)},simpleSexpr:function(e){var t=e.path;t.strict=!0,this.accept(t),this.opcode("resolvePossibleLambda")},helperSexpr:function(e,t,n){var r=this.setupFullMustacheParams(e,t,n),i=e.path,s=i.parts[0];if(this.options.knownHelpers[s])this.opcode("invokeKnownHelper",r.length,s);else{if(this.options.knownHelpersOnly)throw new lv.default("You specified knownHelpersOnly, but used the unknown helper "+s,e);i.strict=!0,i.falsy=!0,this.accept(i),this.opcode("invokeHelper",r.length,i.original,uv.default.helpers.simpleId(i))}},PathExpression:function(e){this.addDepth(e.depth),this.opcode("getContext",e.depth);var t=e.parts[0],n=uv.default.helpers.scopedId(e),r=!e.depth&&!n&&this.blockParamIndex(t);r?this.opcode("lookupBlockParam",r,e.parts):t?e.data?(this.options.data=!0,this.opcode("lookupData",e.depth,e.parts,e.strict)):this.opcode("lookupOnContext",e.parts,e.falsy,e.strict,n):this.opcode("pushContext")},StringLiteral:function(e){this.opcode("pushString",e.value)},NumberLiteral:function(e){this.opcode("pushLiteral",e.value)},BooleanLiteral:function(e){this.opcode("pushLiteral",e.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(e){var t=e.pairs,n=0,r=t.length;for(this.opcode("pushHash");n<r;n++)this.pushParam(t[n].value);for(;n--;)this.opcode("assignToHash",t[n].key);this.opcode("popHash")},opcode:function(e){this.opcodes.push({opcode:e,args:hv.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(e){e&&(this.useDepths=!0)},classifySexpr:function(e){var t=uv.default.helpers.simpleId(e.path),n=t&&!!this.blockParamIndex(e.path.parts[0]),r=!n&&uv.default.helpers.helperExpression(e),i=!n&&(r||t);if(i&&!r){var s=e.path.parts[0],o=this.options;o.knownHelpers[s]?r=!0:o.knownHelpersOnly&&(i=!1)}return r?"helper":i?"ambiguous":"simple"},pushParams:function(e){for(var t=0,n=e.length;t<n;t++)this.pushParam(e[t])},pushParam:function(e){var t=null!=e.value?e.value:e.original||"";if(this.stringParams)t.replace&&(t=t.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),e.depth&&this.addDepth(e.depth),this.opcode("getContext",e.depth||0),this.opcode("pushStringParam",t,e.type),"SubExpression"===e.type&&this.accept(e);else{if(this.trackIds){var n=void 0;if(!e.parts||uv.default.helpers.scopedId(e)||e.depth||(n=this.blockParamIndex(e.parts[0])),n){var r=e.parts.slice(1).join(".");this.opcode("pushId","BlockParam",n,r)}else(t=e.original||t).replace&&(t=t.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",e.type,t)}this.accept(e)}},setupFullMustacheParams:function(e,t,n,r){var i=e.params;return this.pushParams(i),this.opcode("pushProgram",t),this.opcode("pushProgram",n),e.hash?this.accept(e.hash):this.opcode("emptyHash",r),i},blockParamIndex:function(e){for(var t=0,n=this.options.blockParams.length;t<n;t++){var r=this.options.blockParams[t],i=r&&Bf(r,e);if(r&&i>=0)return[t,i]}}};var mv={};function gv(e){return e&&e.__esModule?e:{default:e}}mv.__esModule=!0;var vv=gv(im),yv={__esModule:!0},_v=void 0;try{if("function"!=typeof define||!define.amd){var wv=s("9QQ9J");_v=wv.SourceNode}}catch(e){}function bv(e,t,n){if(Wf(e)){for(var r=[],i=0,s=e.length;i<s;i++)r.push(t.wrap(e[i],n));return r}return"boolean"==typeof e||"number"==typeof e?e+"":e}function Ev(e){this.srcFile=e,this.source=[]}_v||((_v=function(e,t,n,r){this.src="",r&&this.add(r)}).prototype={add:function(e){Wf(e)&&(e=e.join("")),this.src+=e},prepend:function(e){Wf(e)&&(e=e.join("")),this.src=e+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),Ev.prototype={isEmpty:function(){return!this.source.length},prepend:function(e,t){this.source.unshift(this.wrap(e,t))},push:function(e,t){this.source.push(this.wrap(e,t))},merge:function(){var e=this.empty();return this.each((function(t){e.add(["  ",t,"\n"])})),e},each:function(e){for(var t=0,n=this.source.length;t<n;t++)e(this.source[t])},empty:function(){var e=this.currentLocation||{start:{}};return new _v(e.start.line,e.start.column,this.srcFile)},wrap:function(e){var t=arguments.length<=1||void 0===arguments[1]?this.currentLocation||{start:{}}:arguments[1];return e instanceof _v?e:(e=bv(e,this,t),new _v(t.start.line,t.start.column,this.srcFile,e))},functionCall:function(e,t,n){return n=this.generateList(n),this.wrap([e,t?"."+t+"(":"(",n,")"])},quotedString:function(e){return'"'+(e+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(e){var t=this,n=[];Object.keys(e).forEach((function(r){var i=bv(e[r],t);"undefined"!==i&&n.push([t.quotedString(r),":",i])}));var r=this.generateList(n);return r.prepend("{"),r.add("}"),r},generateList:function(e){for(var t=this.empty(),n=0,r=e.length;n<r;n++)n&&t.add(","),t.add(bv(e[n],this));return t},generateArray:function(e){var t=this.generateList(e);return t.prepend("["),t.add("]"),t}},yv.default=Ev;var Sv=gv(yv=yv.default);function kv(e){this.value=e}function Iv(){}Iv.prototype={nameLookup:function(e,t){return this.internalNameLookup(e,t)},depthedLookup:function(e){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(e),")"]},compilerInfo:function(){return[Pf,Nf[Pf]]},appendToBuffer:function(e,t,n){return Wf(e)||(e=[e]),e=this.source.wrap(e,t),this.environment.isSimple?["return ",e,";"]:n?["buffer += ",e,";"]:(e.appendToBuffer=!0,e)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(e,t){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",e,",",JSON.stringify(t),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(e,t,n,r){this.environment=e,this.options=t,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!r,this.name=this.environment.name,this.isChild=!!n,this.context=n||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(e,t),this.useDepths=this.useDepths||e.useDepths||e.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||e.useBlockParams;var i=e.opcodes,s=void 0,o=void 0,a=void 0,c=void 0;for(a=0,c=i.length;a<c;a++)s=i[a],this.source.currentLocation=s.loc,o=o||s.loc,this[s.opcode].apply(this,s.args);if(this.source.currentLocation=o,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new vv.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),";\n"]),this.decorators.push("return fn;"),r?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"),this.decorators.push("}\n"),this.decorators=this.decorators.merge()));var l=this.createFunctionContext(r);if(this.isChild)return l;var u={compiler:this.compilerInfo(),main:l};this.decorators&&(u.main_d=this.decorators,u.useDecorators=!0);var h=this.context,d=h.programs,p=h.decorators;for(a=0,c=d.length;a<c;a++)d[a]&&(u[a]=d[a],p[a]&&(u[a+"_d"]=p[a],u.useDecorators=!0));return this.environment.usePartial&&(u.usePartial=!0),this.options.data&&(u.useData=!0),this.useDepths&&(u.useDepths=!0),this.useBlockParams&&(u.useBlockParams=!0),this.options.compat&&(u.compat=!0),r?u.compilerOptions=this.options:(u.compiler=JSON.stringify(u.compiler),this.source.currentLocation={start:{line:1,column:0}},u=this.objectLiteral(u),t.srcName?(u=u.toStringWithSourceMap({file:t.destName})).map=u.map&&u.map.toString():u=u.toString()),u},preamble:function(){this.lastContext=0,this.source=new Sv.default(this.options.srcName),this.decorators=new Sv.default(this.options.srcName)},createFunctionContext:function(e){var t=this,n="",r=this.stackVars.concat(this.registers.list);r.length>0&&(n+=", "+r.join(", "));var i=0;Object.keys(this.aliases).forEach((function(e){var r=t.aliases[e];r.children&&r.referenceCount>1&&(n+=", alias"+ ++i+"="+e,r.children[0]="alias"+i)})),this.lookupPropertyFunctionIsUsed&&(n+=", "+this.lookupPropertyFunctionVarDeclaration());var s=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&s.push("blockParams"),this.useDepths&&s.push("depths");var o=this.mergeSource(n);return e?(s.push(o),Function.apply(this,s)):this.source.wrap(["function(",s.join(","),") {\n  ",o,"}"])},mergeSource:function(e){var t=this.environment.isSimple,n=!this.forceBuffer,r=void 0,i=void 0,s=void 0,o=void 0;return this.source.each((function(e){e.appendToBuffer?(s?e.prepend("  + "):s=e,o=e):(s&&(i?s.prepend("buffer += "):r=!0,o.add(";"),s=o=void 0),i=!0,t||(n=!1))})),n?s?(s.prepend("return "),o.add(";")):i||this.source.push('return "";'):(e+=", buffer = "+(r?"":this.initializeBuffer()),s?(s.prepend("return buffer + "),o.add(";")):this.source.push("return buffer;")),e&&this.source.prepend("var "+e.substring(2)+(r?"":";\n")),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return"\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    ".trim()},blockValue:function(e){var t=this.aliasable("container.hooks.blockHelperMissing"),n=[this.contextName(0)];this.setupHelperArgs(e,0,n);var r=this.popStack();n.splice(1,0,r),this.push(this.source.functionCall(t,"call",n))},ambiguousBlockValue:function(){var e=this.aliasable("container.hooks.blockHelperMissing"),t=[this.contextName(0)];this.setupHelperArgs("",0,t,!0),this.flushInline();var n=this.topStack();t.splice(1,0,n),this.pushSource(["if (!",this.lastHelper,") { ",n," = ",this.source.functionCall(e,"call",t),"}"])},appendContent:function(e){this.pendingContent?e=this.pendingContent+e:this.pendingLocation=this.source.currentLocation,this.pendingContent=e},append:function(){if(this.isInline())this.replaceStack((function(e){return[" != null ? ",e,' : ""']})),this.pushSource(this.appendToBuffer(this.popStack()));else{var e=this.popStack();this.pushSource(["if (",e," != null) { ",this.appendToBuffer(e,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(e){this.lastContext=e},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(e,t,n,r){var i=0;r||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(e[i++])),this.resolvePath("context",e,i,t,n)},lookupBlockParam:function(e,t){this.useBlockParams=!0,this.push(["blockParams[",e[0],"][",e[1],"]"]),this.resolvePath("context",t,1)},lookupData:function(e,t,n){e?this.pushStackLiteral("container.data(data, "+e+")"):this.pushStackLiteral("data"),this.resolvePath("data",t,0,!0,n)},resolvePath:function(e,t,n,r,i){var s=this;if(this.options.strict||this.options.assumeObjects)this.push(function(e,t,n,r){var i=t.popStack(),s=0,o=n.length;e&&o--;for(;s<o;s++)i=t.nameLookup(i,n[s],r);return e?[t.aliasable("container.strict"),"(",i,", ",t.quotedString(n[s]),", ",JSON.stringify(t.source.currentLocation)," )"]:i}(this.options.strict&&i,this,t,e));else for(var o=t.length;n<o;n++)this.replaceStack((function(i){var o=s.nameLookup(i,t[n],e);return r?[" && ",o]:[" != null ? ",o," : ",i]}))},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(e,t){this.pushContext(),this.pushString(t),"SubExpression"!==t&&("string"==typeof e?this.pushString(e):this.pushStackLiteral(e))},emptyHash:function(e){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(e?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var e=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(e.ids)),this.stringParams&&(this.push(this.objectLiteral(e.contexts)),this.push(this.objectLiteral(e.types))),this.push(this.objectLiteral(e.values))},pushString:function(e){this.pushStackLiteral(this.quotedString(e))},pushLiteral:function(e){this.pushStackLiteral(e)},pushProgram:function(e){null!=e?this.pushStackLiteral(this.programExpression(e)):this.pushStackLiteral(null)},registerDecorator:function(e,t){var n=this.nameLookup("decorators",t,"decorator"),r=this.setupHelperArgs(t,e);this.decorators.push(["fn = ",this.decorators.functionCall(n,"",["fn","props","container",r])," || fn;"])},invokeHelper:function(e,t,n){var r=this.popStack(),i=this.setupHelper(e,t),s=[];n&&s.push(i.name),s.push(r),this.options.strict||s.push(this.aliasable("container.hooks.helperMissing"));var o=["(",this.itemsSeparatedBy(s,"||"),")"],a=this.source.functionCall(o,"call",i.callParams);this.push(a)},itemsSeparatedBy:function(e,t){var n=[];n.push(e[0]);for(var r=1;r<e.length;r++)n.push(t,e[r]);return n},invokeKnownHelper:function(e,t){var n=this.setupHelper(e,t);this.push(this.source.functionCall(n.name,"call",n.callParams))},invokeAmbiguous:function(e,t){this.useRegister("helper");var n=this.popStack();this.emptyHash();var r=this.setupHelper(0,e,t),i=["(","(helper = ",this.lastHelper=this.nameLookup("helpers",e,"helper")," || ",n,")"];this.options.strict||(i[0]="(helper = ",i.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",i,r.paramsInit?["),(",r.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",r.callParams)," : helper))"])},invokePartial:function(e,t,n){var r=[],i=this.setupParams(t,1,r);e&&(t=this.popStack(),delete i.name),n&&(i.indent=JSON.stringify(n)),i.helpers="helpers",i.partials="partials",i.decorators="container.decorators",e?r.unshift(t):r.unshift(this.nameLookup("partials",t,"partial")),this.options.compat&&(i.depths="depths"),i=this.objectLiteral(i),r.push(i),this.push(this.source.functionCall("container.invokePartial","",r))},assignToHash:function(e){var t=this.popStack(),n=void 0,r=void 0,i=void 0;this.trackIds&&(i=this.popStack()),this.stringParams&&(r=this.popStack(),n=this.popStack());var s=this.hash;n&&(s.contexts[e]=n),r&&(s.types[e]=r),i&&(s.ids[e]=i),s.values[e]=t},pushId:function(e,t,n){"BlockParam"===e?this.pushStackLiteral("blockParams["+t[0]+"].path["+t[1]+"]"+(n?" + "+JSON.stringify("."+n):"")):"PathExpression"===e?this.pushString(t):"SubExpression"===e?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:Iv,compileChildren:function(e,t){for(var n=e.children,r=void 0,i=void 0,s=0,o=n.length;s<o;s++){r=n[s],i=new this.compiler;var a=this.matchExistingProgram(r);if(null==a){this.context.programs.push("");var c=this.context.programs.length;r.index=c,r.name="program"+c,this.context.programs[c]=i.compile(r,t,this.context,!this.precompile),this.context.decorators[c]=i.decorators,this.context.environments[c]=r,this.useDepths=this.useDepths||i.useDepths,this.useBlockParams=this.useBlockParams||i.useBlockParams,r.useDepths=this.useDepths,r.useBlockParams=this.useBlockParams}else r.index=a.index,r.name="program"+a.index,this.useDepths=this.useDepths||a.useDepths,this.useBlockParams=this.useBlockParams||a.useBlockParams}},matchExistingProgram:function(e){for(var t=0,n=this.context.environments.length;t<n;t++){var r=this.context.environments[t];if(r&&r.equals(e))return r}},programExpression:function(e){var t=this.environment.children[e],n=[t.index,"data",t.blockParams];return(this.useBlockParams||this.useDepths)&&n.push("blockParams"),this.useDepths&&n.push("depths"),"container.program("+n.join(", ")+")"},useRegister:function(e){this.registers[e]||(this.registers[e]=!0,this.registers.list.push(e))},push:function(e){return e instanceof kv||(e=this.source.wrap(e)),this.inlineStack.push(e),e},pushStackLiteral:function(e){this.push(new kv(e))},pushSource:function(e){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),e&&this.source.push(e)},replaceStack:function(e){var t=["("],n=void 0,r=void 0,i=void 0;if(!this.isInline())throw new vv.default("replaceStack on non-inline");var s=this.popStack(!0);if(s instanceof kv)t=["(",n=[s.value]],i=!0;else{r=!0;var o=this.incrStack();t=["((",this.push(o)," = ",s,")"],n=this.topStack()}var a=e.call(this,n);i||this.popStack(),r&&this.stackSlot--,this.push(t.concat(a,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var e=this.inlineStack;this.inlineStack=[];for(var t=0,n=e.length;t<n;t++){var r=e[t];if(r instanceof kv)this.compileStack.push(r);else{var i=this.incrStack();this.pushSource([i," = ",r,";"]),this.compileStack.push(i)}}},isInline:function(){return this.inlineStack.length},popStack:function(e){var t=this.isInline(),n=(t?this.inlineStack:this.compileStack).pop();if(!e&&n instanceof kv)return n.value;if(!t){if(!this.stackSlot)throw new vv.default("Invalid stack pop");this.stackSlot--}return n},topStack:function(){var e=this.isInline()?this.inlineStack:this.compileStack,t=e[e.length-1];return t instanceof kv?t.value:t},contextName:function(e){return this.useDepths&&e?"depths["+e+"]":"depth"+e},quotedString:function(e){return this.source.quotedString(e)},objectLiteral:function(e){return this.source.objectLiteral(e)},aliasable:function(e){var t=this.aliases[e];return t?(t.referenceCount++,t):((t=this.aliases[e]=this.source.wrap(e)).aliasable=!0,t.referenceCount=1,t)},setupHelper:function(e,t,n){var r=[];return{params:r,paramsInit:this.setupHelperArgs(t,e,r,n),name:this.nameLookup("helpers",t,"helper"),callParams:[this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})")].concat(r)}},setupParams:function(e,t,n){var r={},i=[],s=[],o=[],a=!n,c=void 0;a&&(n=[]),r.name=this.quotedString(e),r.hash=this.popStack(),this.trackIds&&(r.hashIds=this.popStack()),this.stringParams&&(r.hashTypes=this.popStack(),r.hashContexts=this.popStack());var l=this.popStack(),u=this.popStack();(u||l)&&(r.fn=u||"container.noop",r.inverse=l||"container.noop");for(var h=t;h--;)c=this.popStack(),n[h]=c,this.trackIds&&(o[h]=this.popStack()),this.stringParams&&(s[h]=this.popStack(),i[h]=this.popStack());return a&&(r.args=this.source.generateArray(n)),this.trackIds&&(r.ids=this.source.generateArray(o)),this.stringParams&&(r.types=this.source.generateArray(s),r.contexts=this.source.generateArray(i)),this.options.data&&(r.data="data"),this.useBlockParams&&(r.blockParams="blockParams"),r},setupHelperArgs:function(e,t,n,r){var i=this.setupParams(e,t,n);return i.loc=JSON.stringify(this.source.currentLocation),i=this.objectLiteral(i),r?(this.useRegister("options"),n.push("options"),["options=",i]):n?(n.push(i),""):i}},function(){for(var e="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),t=Iv.RESERVED_WORDS={},n=0,r=e.length;n<r;n++)t[e[n]]=!0}(),Iv.isValidJavaScriptVariableName=function(e){return!Iv.RESERVED_WORDS[e]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)},mv.default=Iv;var Tv=Sf(mv=mv.default),Cv=Sf(Lg),Av=Sf(pg),Lv=vg.default.create;function Pv(){var e=Lv();return e.compile=function(t,n){return sv(t,n,e)},e.precompile=function(t,n){return iv(t,n,e)},e.AST=Sg.default,e.Compiler=rv,e.JavaScriptCompiler=Tv.default,e.Parser=Eg,e.parse=bg,e.parseWithoutProcessing=wg,e}var Ov=Pv();Ov.create=Pv,Av.default(Ov),Ov.Visitor=Cv.default,Ov.default=Ov,Ef.default=Ov;var Nv,Rv,Dv=(Ef=Ef.default).default;Nv=function(e){return(new xv).accept(e)},Rv=xv;var Mv=function(e){return e&&e.__esModule?e:{default:e}}(Lg);function xv(){this.padding=0}xv.prototype=new Mv.default,xv.prototype.pad=function(e){for(var t="",n=0,r=this.padding;n<r;n++)t+="  ";return t+=e+"\n"},xv.prototype.Program=function(e){var t="",n=e.body,r=void 0,i=void 0;if(e.blockParams){var s="BLOCK PARAMS: [";for(r=0,i=e.blockParams.length;r<i;r++)s+=" "+e.blockParams[r];s+=" ]",t+=this.pad(s)}for(r=0,i=n.length;r<i;r++)t+=this.accept(n[r]);return this.padding--,t},xv.prototype.MustacheStatement=function(e){return this.pad("{{ "+this.SubExpression(e)+" }}")},xv.prototype.Decorator=function(e){return this.pad("{{ DIRECTIVE "+this.SubExpression(e)+" }}")},xv.prototype.BlockStatement=xv.prototype.DecoratorBlock=function(e){var t="";return t+=this.pad(("DecoratorBlock"===e.type?"DIRECTIVE ":"")+"BLOCK:"),this.padding++,t+=this.pad(this.SubExpression(e)),e.program&&(t+=this.pad("PROGRAM:"),this.padding++,t+=this.accept(e.program),this.padding--),e.inverse&&(e.program&&this.padding++,t+=this.pad("{{^}}"),this.padding++,t+=this.accept(e.inverse),this.padding--,e.program&&this.padding--),this.padding--,t},xv.prototype.PartialStatement=function(e){var t="PARTIAL:"+e.name.original;return e.params[0]&&(t+=" "+this.accept(e.params[0])),e.hash&&(t+=" "+this.accept(e.hash)),this.pad("{{> "+t+" }}")},xv.prototype.PartialBlockStatement=function(e){var t="PARTIAL BLOCK:"+e.name.original;return e.params[0]&&(t+=" "+this.accept(e.params[0])),e.hash&&(t+=" "+this.accept(e.hash)),t+=" "+this.pad("PROGRAM:"),this.padding++,t+=this.accept(e.program),this.padding--,this.pad("{{> "+t+" }}")},xv.prototype.ContentStatement=function(e){return this.pad("CONTENT[ '"+e.value+"' ]")},xv.prototype.CommentStatement=function(e){return this.pad("{{! '"+e.value+"' }}")},xv.prototype.SubExpression=function(e){for(var t,n=e.params,r=[],i=0,s=n.length;i<s;i++)r.push(this.accept(n[i]));return n="["+r.join(", ")+"]",t=e.hash?" "+this.accept(e.hash):"",this.accept(e.path)+" "+n+t},xv.prototype.PathExpression=function(e){var t=e.parts.join("/");return(e.data?"@":"")+"PATH:"+t},xv.prototype.StringLiteral=function(e){return'"'+e.value+'"'},xv.prototype.NumberLiteral=function(e){return"NUMBER{"+e.value+"}"},xv.prototype.BooleanLiteral=function(e){return"BOOLEAN{"+e.value+"}"},xv.prototype.UndefinedLiteral=function(){return"UNDEFINED"},xv.prototype.NullLiteral=function(){return"NULL"},xv.prototype.Hash=function(e){for(var t=e.pairs,n=[],r=0,i=t.length;r<i;r++)n.push(this.accept(t[r]));return"HASH{"+n.join(", ")+"}"},xv.prototype.HashPair=function(e){return e.key+"="+this.accept(e.value)},Dv.PrintVisitor=Rv,Dv.print=Nv;var Uv=n(bf=Dv).template({1:function(e,t,n,r,i){var s,o=null!=t?t:e.nullContext||{},a=e.hooks.helperMissing,c="function",l=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"  <li\n    class='film-card'\n    data-overview='"+l(typeof(s=null!=(s=u(n,"overview")||(null!=t?u(t,"overview"):t))?s:a)===c?s.call(o,{name:"overview",hash:{},data:i,loc:{start:{line:4,column:19},end:{line:4,column:31}}}):s)+"'\n    data-title='"+l(typeof(s=null!=(s=u(n,"title")||(null!=t?u(t,"title"):t))?s:a)===c?s.call(o,{name:"title",hash:{},data:i,loc:{start:{line:5,column:16},end:{line:5,column:25}}}):s)+"'\n    data-name='"+l(typeof(s=null!=(s=u(n,"name")||(null!=t?u(t,"name"):t))?s:a)===c?s.call(o,{name:"name",hash:{},data:i,loc:{start:{line:6,column:15},end:{line:6,column:23}}}):s)+"'\n    data-vote='"+l(typeof(s=null!=(s=u(n,"vote_average")||(null!=t?u(t,"vote_average"):t))?s:a)===c?s.call(o,{name:"vote_average",hash:{},data:i,loc:{start:{line:7,column:15},end:{line:7,column:31}}}):s)+"'\n    data-popularity='"+l(typeof(s=null!=(s=u(n,"popularity")||(null!=t?u(t,"popularity"):t))?s:a)===c?s.call(o,{name:"popularity",hash:{},data:i,loc:{start:{line:8,column:21},end:{line:8,column:35}}}):s)+"'\n    data-genre='"+l(typeof(s=null!=(s=u(n,"genre_ids")||(null!=t?u(t,"genre_ids"):t))?s:a)===c?s.call(o,{name:"genre_ids",hash:{},data:i,loc:{start:{line:9,column:16},end:{line:9,column:29}}}):s)+"'\n    data-src='https://image.tmdb.org/t/p/w500"+l(typeof(s=null!=(s=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?s:a)===c?s.call(o,{name:"poster_path",hash:{},data:i,loc:{start:{line:10,column:45},end:{line:10,column:60}}}):s)+"'\n    data-votes='"+l(typeof(s=null!=(s=u(n,"vote_count")||(null!=t?u(t,"vote_count"):t))?s:a)===c?s.call(o,{name:"vote_count",hash:{},data:i,loc:{start:{line:11,column:16},end:{line:11,column:30}}}):s)+"'\n    data-id='"+l(typeof(s=null!=(s=u(n,"id")||(null!=t?u(t,"id"):t))?s:a)===c?s.call(o,{name:"id",hash:{},data:i,loc:{start:{line:12,column:13},end:{line:12,column:19}}}):s)+"'\n    data-released="+l(typeof(s=null!=(s=u(n,"release_date")||(null!=t?u(t,"release_date"):t))?s:a)===c?s.call(o,{name:"release_date",hash:{},data:i,loc:{start:{line:13,column:18},end:{line:13,column:34}}}):s)+"\n  >\n    <div>\n      <div class='film-card__img_container'>\n        <img\n          class='film-card__img'\n          src='https://image.tmdb.org/t/p/w500"+l(typeof(s=null!=(s=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?s:a)===c?s.call(o,{name:"poster_path",hash:{},data:i,loc:{start:{line:19,column:46},end:{line:19,column:61}}}):s)+"'\n          alt='"+l(typeof(s=null!=(s=u(n,"backdrop_path")||(null!=t?u(t,"backdrop_path"):t))?s:a)===c?s.call(o,{name:"backdrop_path",hash:{},data:i,loc:{start:{line:20,column:15},end:{line:20,column:32}}}):s)+"'\n          width='100%'\n          data-id='"+l(typeof(s=null!=(s=u(n,"id")||(null!=t?u(t,"id"):t))?s:a)===c?s.call(o,{name:"id",hash:{},data:i,loc:{start:{line:22,column:19},end:{line:22,column:25}}}):s)+"'\n        />\n        <span class='film-card__vote'>"+l(typeof(s=null!=(s=u(n,"vote_average")||(null!=t?u(t,"vote_average"):t))?s:a)===c?s.call(o,{name:"vote_average",hash:{},data:i,loc:{start:{line:24,column:38},end:{line:24,column:54}}}):s)+"</span>\n        <span class='film-card__vote-count'>Vote Count: "+l(typeof(s=null!=(s=u(n,"vote_count")||(null!=t?u(t,"vote_count"):t))?s:a)===c?s.call(o,{name:"vote_count",hash:{},data:i,loc:{start:{line:25,column:56},end:{line:25,column:70}}}):s)+"</span>\n      </div>\n      <h2 class='film-card__title'>"+l(typeof(s=null!=(s=u(n,"title")||(null!=t?u(t,"title"):t))?s:a)===c?s.call(o,{name:"title",hash:{},data:i,loc:{start:{line:27,column:35},end:{line:27,column:44}}}):s)+" "+l(typeof(s=null!=(s=u(n,"name")||(null!=t?u(t,"name"):t))?s:a)===c?s.call(o,{name:"name",hash:{},data:i,loc:{start:{line:27,column:45},end:{line:27,column:53}}}):s)+"</h2>\n      <p class='film-card__text'>\n        <span class='film-card__genres'>"+l(typeof(s=null!=(s=u(n,"genre_ids")||(null!=t?u(t,"genre_ids"):t))?s:a)===c?s.call(o,{name:"genre_ids",hash:{},data:i,loc:{start:{line:29,column:40},end:{line:29,column:53}}}):s)+"</span>\n        |\n        <span\n          class='film-card__release'\n        >"+l(typeof(s=null!=(s=u(n,"release_date")||(null!=t?u(t,"release_date"):t))?s:a)===c?s.call(o,{name:"release_date",hash:{},data:i,loc:{start:{line:33,column:9},end:{line:33,column:25}}}):s)+l(typeof(s=null!=(s=u(n,"first_air_date")||(null!=t?u(t,"first_air_date"):t))?s:a)===c?s.call(o,{name:"first_air_date",hash:{},data:i,loc:{start:{line:33,column:25},end:{line:33,column:43}}}):s)+"</span>\n      </p>\n    </div>\n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,i){var s,o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return null!=(s=o(n,"each").call(null!=t?t:e.nullContext||{},null!=t?o(t,"results"):t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:1,column:0},end:{line:37,column:9}}}))?s:""},useData:!0});const Fv=document.querySelector(".collection");function Vv(e){Fv.innerHTML="",_f.fetchTrendFilms(e).then((e=>{var t;t=e,Fv.insertAdjacentHTML("beforeend",Uv(t)),wf(),oy(e.total_pages)}))}Vv(_f.page);var Bv=Vv;const jv=document.querySelector("body"),$v=document.querySelector(".input-genre"),Hv=document.querySelector(".genres-list"),qv=document.querySelector(".collection"),Gv=document.querySelector(".apply-filter"),Kv=document.querySelector(".reset-filter");let zv=[],Wv=[];function Qv(e){qv.innerHTML="";let t=zv.join(",");console.log(zv),_f.fetchFilmsByGenre(t,e).then((e=>{var t;t=e,qv.insertAdjacentHTML("beforeend",Uv(t)),wf(),Hv.style.display="none",oy(e.total_pages)}))}_f.fetchGenres().then((e=>e.map((e=>Hv.insertAdjacentHTML("beforeend",`<li class="genres-item" id="${e.id}">${e.name}</li>`)))));function Jv(e){for(let e=0;e<Hv.children.length;e++)Hv.children[e].classList.contains("genres-item_active")&&Hv.children[e].classList.remove("genres-item_active");$v.value="",zv=[],Wv=[]}jv.addEventListener("click",(function(e){e.target!==Hv&&e.target!==$v&&(Hv.style.display="none")})),$v.addEventListener("click",(function(e){e.target===$v&&(Hv.style.display="block")})),Hv.addEventListener("click",(e=>{if(e.target.classList.contains("genres-item_active")){e.target.classList.remove("genres-item_active");let t=Wv.indexOf(e.target.innerHTML);Wv.splice(t,1),$v.value=Wv}else e.target.classList.add("genres-item_active"),zv.push(e.target.id),Wv.push(e.target.innerHTML),$v.value=Wv;return zv})),Gv.addEventListener("click",(function(){Qv(_f.page=1)})),Kv.addEventListener("click",Jv);var Xv={applyFilterSubmit:Qv,deleteGenres:Jv};const Yv=document.querySelector(".search-input"),Zv=document.querySelector(".collection"),ey=document.querySelector(".search_icon");function ty(){_f.searchQuery(Yv.value),_f.page=1,ny(1),Yv.value="",Xv.deleteGenres()}function ny(e){Zv.innerHTML="",_f.fetchSearchFilms(e).then((e=>{var t;t=e,Zv.insertAdjacentHTML("beforeend",Uv(t)),wf(),Zv.hasChildNodes()?document.querySelector("#search_error").innerHTML="":document.querySelector("#search_error").innerHTML="Search result not successful. Enter the correct movie!",oy(e.total_pages)}))}Yv.addEventListener("keypress",(function(e){"Enter"===e.key&&ty()})),ey.addEventListener("click",ty);var ry=ny;function iy(e){switch(e[0].toString()){case"trendFilms":Bv(_f.page);break;case"searchFilms":ry(_f.page);break;case"byGenreFilms":Xv(_f.page);break;case"discoverFilms":_f.fetchDiscover()}}function sy(e){e.preventDefault(),document.querySelector(".collection").innerHTML="",iy(_f.fetchType);let t=Number(this.getAttribute("data-num"));_f.page=t,console.log(_f.page)}document.querySelector("#next-page").addEventListener("click",(function(e){e.preventDefault(),_f.page++,iy(_f.fetchType)})),document.querySelector("#prev-page").addEventListener("click",(function(e){e.preventDefault(),_f.page--,iy(_f.fetchType)}));var oy=function(e){console.log(e);let t=e;document.querySelector(".pagination").classList.contains("created")||function(e){const t=document.querySelector("#page_numbers");let n=document.createElement("li"),r=document.createElement("li");n.classList.add("page-item"),r.classList.add("page-item"),n.innerHTML='<a class="page-link page_num" href="#" data-num="1">1</a>',r.innerHTML='<a class="page-link start_ellipsis">...</a>',t.appendChild(n),t.appendChild(r),console.log(e);for(let n=2;n<e;n++){let e=document.createElement("li");e.classList.add("page-item");let r=`<a class="page-link page_num" href="#" data-num="${n}">${n}</a>`;e.innerHTML=r,t.appendChild(e)}let i=document.createElement("li"),s=document.createElement("li");i.classList.add("page-item"),s.classList.add("page-item"),i.innerHTML='<a class="page-link end_ellipsis">...</a>',s.innerHTML=`<a class="page-link page_num" href="#" data-num="${e}">${e}</a>`,t.appendChild(i),t.appendChild(s),document.querySelector(".pagination").classList.add("created")}(t),function(e,t){const n=document.querySelectorAll(".page_num"),r=document.querySelector(".start_ellipsis"),i=document.querySelector(".end_ellipsis");for(let e=0;e<n.length;e++)n[e].style.display="none",n[e].classList.remove("active_page"),n[e].addEventListener("click",sy);function s(){if(window.innerWidth>400){n[e].style.display="unset",n[t-1].style.display="unset";for(let e=0;e<3;e++){_f.page>=t-3?(i.style.display="none",r.style.display="unset"):_f.page<=3?(r.style.display="none",i.style.display="unset"):(r.style.display="unset",i.style.display="unset");try{n[_f.page-1-e].style.display="unset"}catch(e){}try{n[_f.page-1+e].style.display="unset"}catch(e){}}}if(window.innerWidth<=400){r.style.display="none",i.style.display="none",n[t-1].style.display="none",n[e].style.display="none";for(let e=0;e<3;e++){try{n[_f.page-1-e].style.display="unset"}catch(e){}try{n[_f.page-1+e].style.display="unset"}catch(e){}}}}n[_f.page-1].style.display="unset",n[_f.page-1].classList.add("active_page"),window.addEventListener("load",s())}(0,t)};const ay=document.querySelector(".descending"),cy=document.querySelector(".ascending"),ly=document.querySelector(".sort-title"),uy=document.querySelector(".sort-votes"),hy=document.querySelector(".sort-popularuty"),dy=document.querySelector(".sort-votes-count"),py=document.querySelector(".sort-release"),fy=document.querySelector(".sort-input"),my=document.querySelector(".sort-list"),gy=document.querySelector(".collection"),vy=document.querySelector("body");let yy="desc";function _y(e){"ascending"===e.target.classList.value&&(yy="asc",cy.style.backgroundColor="orangered",ay.style.backgroundColor=""),"descending"===e.target.classList.value&&(yy="desc",ay.style.backgroundColor="orangered",cy.style.backgroundColor="")}fy.addEventListener("click",(function(e){e.target===fy&&(my.style.display="block")})),vy.addEventListener("click",(function(e){e.target!==my&&e.target!==fy&&(my.style.display="none")})),cy.addEventListener("click",_y),ay.addEventListener("click",_y),ly.addEventListener("click",(function(){_f.fetchDiscover(`original_title.${yy}`,_f.page).then((e=>{gy.innerHTML="",gy.insertAdjacentHTML("beforeend",Uv(e)),oy(e.total_pages)})),wf()})),uy.addEventListener("click",(function(){console.log(yy),_f.fetchDiscover(`vote_average.${yy}`).then((e=>{gy.innerHTML="",gy.insertAdjacentHTML("beforeend",Uv(e)),oy(e.total_pages)})),wf()})),hy.addEventListener("click",(function(){_f.fetchDiscover(`popularity.${yy}`).then((e=>{gy.innerHTML="",gy.insertAdjacentHTML("beforeend",Uv(e)),oy(e.total_pages)})),wf()})),dy.addEventListener("click",(function(){_f.fetchDiscover(`vote_count.${yy}`).then((e=>{gy.innerHTML="",gy.insertAdjacentHTML("beforeend",Uv(e)),oy(e.total_pages)})),wf()})),py.addEventListener("click",(function(){_f.fetchDiscover(`release_date.${yy}`).then((e=>{gy.innerHTML="",gy.insertAdjacentHTML("beforeend",Uv(e)),oy(e.total_pages)})),wf()}));var wy=n(bf).template({1:function(e,t,n,r,i){var s,o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return e.escapeExpression("function"==typeof(s=null!=(s=o(n,"name")||(null!=t?o(t,"name"):t))?s:e.hooks.helperMissing)?s.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:i,loc:{start:{line:18,column:48},end:{line:18,column:56}}}):s)+", "},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,i){var s,o,a=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,l="function",u=e.escapeExpression,h=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"<div class='img-container'>\n  <img src='https://image.tmdb.org/t/p/w500"+u(typeof(o=null!=(o=h(n,"poster_path")||(null!=t?h(t,"poster_path"):t))?o:c)===l?o.call(a,{name:"poster_path",hash:{},data:i,loc:{start:{line:2,column:43},end:{line:2,column:58}}}):o)+"' />\n</div>\n<div class='text-container'>\n  <h2 class='film-header'>"+u(typeof(o=null!=(o=h(n,"title")||(null!=t?h(t,"title"):t))?o:c)===l?o.call(a,{name:"title",hash:{},data:i,loc:{start:{line:5,column:26},end:{line:5,column:35}}}):o)+" "+u(typeof(o=null!=(o=h(n,"name")||(null!=t?h(t,"name"):t))?o:c)===l?o.call(a,{name:"name",hash:{},data:i,loc:{start:{line:5,column:36},end:{line:5,column:44}}}):o)+"</h2>\n  <div class='film_info'>\n    <div class='film__left_info'>\n      <span>Vote / Votes</span>\n      <span>Popularity</span>\n      <span>Original Title</span>\n      <span>Genre</span>\n    </div>\n    <div class='film__right_info'>\n      <p class='vote'><span class='vote-average'>"+u(typeof(o=null!=(o=h(n,"vote_average")||(null!=t?h(t,"vote_average"):t))?o:c)===l?o.call(a,{name:"vote_average",hash:{},data:i,loc:{start:{line:14,column:49},end:{line:14,column:65}}}):o)+"</span>/\n        "+u(typeof(o=null!=(o=h(n,"vote_count")||(null!=t?h(t,"vote_count"):t))?o:c)===l?o.call(a,{name:"vote_count",hash:{},data:i,loc:{start:{line:15,column:8},end:{line:15,column:22}}}):o)+"</p>\n      <span class='popularity'>"+u(typeof(o=null!=(o=h(n,"popularity")||(null!=t?h(t,"popularity"):t))?o:c)===l?o.call(a,{name:"popularity",hash:{},data:i,loc:{start:{line:16,column:31},end:{line:16,column:45}}}):o)+"</span>\n      <span>"+u(typeof(o=null!=(o=h(n,"original_title")||(null!=t?h(t,"original_title"):t))?o:c)===l?o.call(a,{name:"original_title",hash:{},data:i,loc:{start:{line:17,column:12},end:{line:17,column:30}}}):o)+"</span>\n      <span class='modal-genre'>"+(null!=(s=h(n,"each").call(a,null!=t?h(t,"genres"):t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:18,column:32},end:{line:18,column:67}}}))?s:"")+"</span>\n    </div>\n  </div>\n  <p class='about'>About</p>\n  <p class='about-info'>"+u(typeof(o=null!=(o=h(n,"overview")||(null!=t?h(t,"overview"):t))?o:c)===l?o.call(a,{name:"overview",hash:{},data:i,loc:{start:{line:22,column:24},end:{line:22,column:36}}}):o)+"</p>\n  <div class='buttons'>\n    <button type='button' class='button-watched'><p>add to watched</p></button>\n    <button type='button' class='button-queue'><p>add to queue</p></button>\n  </div>\n</div>"},useData:!0});function by(){const e=document.getElementsByClassName("vote-average"),t=document.querySelector(".popularity"),n=document.querySelector(".modal-genre"),r=document.querySelector(".vote");n.innerHTML=n.innerHTML.replace(/,\s*$/,""),t.innerHTML=Math.trunc(10*t.innerHTML)/10;for(let t=0;t<e.length;t++){let n=String(e[t].innerHTML.slice(0,3));"0"===n?(r.style.color="red",r.innerHTML="Sorry, this movie has no ratings yet"):e[t].innerHTML=n%1!=0?Number(n):Number(n)+".0"}}function Ey(e){return function(...t){var n=t.pop();return e.call(this,t,n)}}var Sy="function"==typeof queueMicrotask&&queueMicrotask,ky="function"==typeof setImmediate&&setImmediate,Iy="object"==typeof o&&"function"==typeof o.nextTick;function Ty(e){setTimeout(e,0)}function Cy(e){return(t,...n)=>e((()=>t(...n)))}var Ay=Cy(Sy?queueMicrotask:ky?setImmediate:Iy?o.nextTick:Ty);function Ly(e){return Ny(e)?function(...t){const n=t.pop();return Py(e.apply(this,t),n)}:Ey((function(t,n){var r;try{r=e.apply(this,t)}catch(e){return n(e)}if(r&&"function"==typeof r.then)return Py(r,n);n(null,r)}))}function Py(e,t){return e.then((e=>{Oy(t,null,e)}),(e=>{Oy(t,e&&e.message?e:new Error(e))}))}function Oy(e,t,n){try{e(t,n)}catch(e){Ay((e=>{throw e}),e)}}function Ny(e){return"AsyncFunction"===e[Symbol.toStringTag]}function Ry(e){if("function"!=typeof e)throw new Error("expected a function");return Ny(e)?Ly(e):e}function Dy(e,t=e.length){if(!t)throw new Error("arity is undefined");return function(...n){return"function"==typeof n[t-1]?e.apply(this,n):new Promise(((r,i)=>{n[t-1]=(e,...t)=>{if(e)return i(e);r(t.length>1?t:t[0])},e.apply(this,n)}))}}function My(e){return function(t,...n){const r=Dy((function(r){var i=this;return e(t,((e,t)=>{Ry(e).apply(i,n.concat(t))}),r)}));return r}}function xy(e,t,n,r){t=t||[];var i=[],s=0,o=Ry(n);return e(t,((e,t,n)=>{var r=s++;o(e,((e,t)=>{i[r]=t,n(e)}))}),(e=>{r(e,i)}))}function Uy(e){return e&&"number"==typeof e.length&&e.length>=0&&e.length%1==0}const Fy={};function Vy(e){function t(...t){if(null!==e){var n=e;e=null,n.apply(this,t)}}return Object.assign(t,e),t}function By(e){if(Uy(e))return function(e){var t=-1,n=e.length;return function(){return++t<n?{value:e[t],key:t}:null}}(e);var t=function(e){return e[Symbol.iterator]&&e[Symbol.iterator]()}(e);return t?function(e){var t=-1;return function(){var n=e.next();return n.done?null:(t++,{value:n.value,key:t})}}(t):function(e){var t=e?Object.keys(e):[],n=-1,r=t.length;return function i(){var s=t[++n];return"__proto__"===s?i():n<r?{value:e[s],key:s}:null}}(e)}function jy(e){return function(...t){if(null===e)throw new Error("Callback was already called.");var n=e;e=null,n.apply(this,t)}}function $y(e,t,n,r){let i=!1,s=!1,o=!1,a=0,c=0;function l(){a>=t||o||i||(o=!0,e.next().then((({value:e,done:t})=>{if(!s&&!i){if(o=!1,t)return i=!0,void(a<=0&&r(null));a++,n(e,c,u),c++,l()}})).catch(h))}function u(e,t){if(a-=1,!s)return e?h(e):!1===e?(i=!0,void(s=!0)):t===Fy||i&&a<=0?(i=!0,r(null)):void l()}function h(e){s||(o=!1,i=!0,r(e))}l()}var Hy=e=>(t,n,r)=>{if(r=Vy(r),e<=0)throw new RangeError("concurrency limit cannot be less than 1");if(!t)return r(null);if("AsyncGenerator"===t[Symbol.toStringTag])return $y(t,e,n,r);if(function(e){return"function"==typeof e[Symbol.asyncIterator]}(t))return $y(t[Symbol.asyncIterator](),e,n,r);var i=By(t),s=!1,o=!1,a=0,c=!1;function l(e,t){if(!o)if(a-=1,e)s=!0,r(e);else if(!1===e)s=!0,o=!0;else{if(t===Fy||s&&a<=0)return s=!0,r(null);c||u()}}function u(){for(c=!0;a<e&&!s;){var t=i();if(null===t)return s=!0,void(a<=0&&r(null));a+=1,n(t.value,t.key,jy(l))}c=!1}u()};var qy=Dy((function(e,t,n,r){return Hy(t)(e,Ry(n),r)}),4);function Gy(e,t,n){n=Vy(n);var r=0,i=0,{length:s}=e,o=!1;function a(e,t){!1===e&&(o=!0),!0!==o&&(e?n(e):++i!==s&&t!==Fy||n(null))}for(0===s&&n(null);r<s;r++)t(e[r],r,jy(a))}function Ky(e,t,n){return qy(e,1/0,t,n)}var zy=Dy((function(e,t,n){return(Uy(e)?Gy:Ky)(e,Ry(t),n)}),3);var Wy=Dy((function(e,t,n){return xy(zy,e,t,n)}),3);My(Wy);var Qy=Dy((function(e,t,n){return qy(e,1,t,n)}),3);var Jy=Dy((function(e,t,n){return xy(Qy,e,t,n)}),3);My(Jy);Symbol("promiseCallback");Symbol.iterator;Dy((function(e,t,n,r){r=Vy(r);var i=Ry(n);return Qy(e,((e,n,r)=>{i(t,e,((e,n)=>{t=n,r(e)}))}),(e=>r(e,t)))}),4);var Xy=Dy((function(e,t,n,r){return xy(Hy(t),e,n,r)}),4);var Yy=Dy((function(e,t,n,r){var i=Ry(n);return Xy(e,t,((e,t)=>{i(e,((e,...n)=>e?t(e):t(e,n)))}),((e,t)=>{for(var n=[],i=0;i<t.length;i++)t[i]&&(n=n.concat(...t[i]));return r(e,n)}))}),4);Dy((function(e,t,n){return Yy(e,1/0,t,n)}),3);Dy((function(e,t,n){return Yy(e,1,t,n)}),3);function Zy(e,t){return(n,r,i,s)=>{var o,a=!1;const c=Ry(i);n(r,((n,r,i)=>{c(n,((r,s)=>r||!1===r?i(r):e(s)&&!o?(a=!0,o=t(!0,n),i(null,Fy)):void i()))}),(e=>{if(e)return s(e);s(null,a?o:t(!1))}))}}Dy((function(e,t,n){return Zy((e=>e),((e,t)=>t))(zy,e,t,n)}),3);Dy((function(e,t,n,r){return Zy((e=>e),((e,t)=>t))(Hy(t),e,n,r)}),4);Dy((function(e,t,n){return Zy((e=>e),((e,t)=>t))(Hy(1),e,t,n)}),3);function e_(e){return(t,...n)=>Ry(t)(...n,((t,...n)=>{"object"==typeof console&&(t?console.error&&console.error(t):console[e]&&n.forEach((t=>console[e](t))))}))}e_("dir");Dy((function(e,t,n){n=jy(n);var r,i=Ry(e),s=Ry(t);function o(e,...t){if(e)return n(e);!1!==e&&(r=t,s(...t,a))}function a(e,t){return e?n(e):!1!==e?t?void i(o):n(null,...r):void 0}return a(null,!0)}),3);function t_(e){return(t,n,r)=>e(t,r)}Dy((function(e,t,n){return zy(e,t_(Ry(t)),n)}),3);var n_=Dy((function(e,t,n,r){return Hy(t)(e,t_(Ry(n)),r)}),4);var r_=Dy((function(e,t,n){return n_(e,1,t,n)}),3);function i_(e){return Ny(e)?e:function(...t){var n=t.pop(),r=!0;t.push(((...e)=>{r?Ay((()=>n(...e))):n(...e)})),e.apply(this,t),r=!1}}Dy((function(e,t,n){return Zy((e=>!e),(e=>!e))(zy,e,t,n)}),3);Dy((function(e,t,n,r){return Zy((e=>!e),(e=>!e))(Hy(t),e,n,r)}),4);Dy((function(e,t,n){return Zy((e=>!e),(e=>!e))(Qy,e,t,n)}),3);function s_(e,t,n,r){var i=new Array(t.length);e(t,((e,t,r)=>{n(e,((e,n)=>{i[t]=!!n,r(e)}))}),(e=>{if(e)return r(e);for(var n=[],s=0;s<t.length;s++)i[s]&&n.push(t[s]);r(null,n)}))}function o_(e,t,n,r){var i=[];e(t,((e,t,r)=>{n(e,((n,s)=>{if(n)return r(n);s&&i.push({index:t,value:e}),r(n)}))}),(e=>{if(e)return r(e);r(null,i.sort(((e,t)=>e.index-t.index)).map((e=>e.value)))}))}function a_(e,t,n,r){return(Uy(t)?s_:o_)(e,t,Ry(n),r)}Dy((function(e,t,n){return a_(zy,e,t,n)}),3);Dy((function(e,t,n,r){return a_(Hy(t),e,n,r)}),4);Dy((function(e,t,n){return a_(Qy,e,t,n)}),3);Dy((function(e,t){var n=jy(t),r=Ry(i_(e));return function e(t){if(t)return n(t);!1!==t&&r(e)}()}),2);Dy((function(e,t,n,r){var i=Ry(n);return Xy(e,t,((e,t)=>{i(e,((n,r)=>n?t(n):t(n,{key:r,val:e})))}),((e,t)=>{for(var n={},{hasOwnProperty:i}=Object.prototype,s=0;s<t.length;s++)if(t[s]){var{key:o}=t[s],{val:a}=t[s];i.call(n,o)?n[o].push(a):n[o]=[a]}return r(e,n)}))}),4);e_("log");Dy((function(e,t,n,r){r=Vy(r);var i={},s=Ry(n);return Hy(t)(e,((e,t,n)=>{s(e,t,((e,r)=>{if(e)return n(e);i[t]=r,n(e)}))}),(e=>r(e,i)))}),4);Cy(Iy?o.nextTick:ky?setImmediate:Ty),Dy(((e,t,n)=>{var r=Uy(t)?[]:{};e(t,((e,t,n)=>{Ry(e)(((e,...i)=>{i.length<2&&([i]=i),r[t]=i,n(e)}))}),(e=>n(e,r)))}),3);Symbol.iterator;Dy((function(e,t){if(t=Vy(t),!Array.isArray(e))return t(new TypeError("First argument to race must be an array of functions"));if(!e.length)return t();for(var n=0,r=e.length;n<r;n++)Ry(e[n])(t)}),2);function c_(e,t,n,r){const i=Ry(n);return a_(e,t,((e,t)=>{i(e,((e,n)=>{t(e,!n)}))}),r)}Dy((function(e,t,n){return c_(zy,e,t,n)}),3);Dy((function(e,t,n,r){return c_(Hy(t),e,n,r)}),4);Dy((function(e,t,n){return c_(Qy,e,t,n)}),3);Dy((function(e,t,n){return Zy(Boolean,(e=>e))(zy,e,t,n)}),3);Dy((function(e,t,n,r){return Zy(Boolean,(e=>e))(Hy(t),e,n,r)}),4);Dy((function(e,t,n){return Zy(Boolean,(e=>e))(Qy,e,t,n)}),3);Dy((function(e,t,n){var r=Ry(t);return Wy(e,((e,t)=>{r(e,((n,r)=>{if(n)return t(n);t(n,{value:e,criteria:r})}))}),((e,t)=>{if(e)return n(e);n(null,t.sort(i).map((e=>e.value)))}));function i(e,t){var n=e.criteria,r=t.criteria;return n<r?-1:n>r?1:0}}),3);Dy((function(e,t){var n,r=null;return r_(e,((e,t)=>{Ry(e)(((e,...i)=>{if(!1===e)return t(e);i.length<2?[n]=i:n=i,r=e,t(e?null:{})}))}),(()=>t(r,n)))}));Dy((function(e,t,n){n=jy(n);var r=Ry(t),i=Ry(e),s=[];function o(e,...t){if(e)return n(e);s=t,!1!==e&&i(a)}function a(e,t){return e?n(e):!1!==e?t?void r(o):n(null,...s):void 0}return i(a)}),3);Dy((function(e,t){if(t=Vy(t),!Array.isArray(e))return t(new Error("First argument to waterfall must be an array of functions"));if(!e.length)return t();var n=0;function r(t){Ry(e[n++])(...t,jy(i))}function i(i,...s){if(!1!==i)return i||n===e.length?t(i,...s):void r(s)}r([])}));document.querySelector(".main");const l_=document.querySelector(".collection"),u_=document.querySelector(".backdrop"),h_=document.querySelector(".modal__content"),d_=document.querySelector(".film_modal"),p_=document.querySelector(".close-svg"),f_=document.querySelector("#blackscreen");function m_(e){h_.insertAdjacentHTML("beforeend",wy(e)),by()}function g_(e){u_.classList.add("is-hidden"),f_.classList.remove("active"),h_.innerHTML=""}document.addEventListener("keydown",(e=>{"Escape"===e.key&&g_()})),d_.addEventListener("click",(function(e){(e.target.contains(p_)||e.target.contains(p_.children[0]))&&g_()})),f_.addEventListener("click",(function(e){u_!==e.target&&g_()})),l_.addEventListener("click",(async function(e){if(e.preventDefault(),e.target.classList.contains("film-card__img")){u_.classList.remove("is-hidden"),f_.classList.add("active");const n=e.target.dataset.id;await _f.fetchFilmById(n).then(m_);const r=document.querySelector(".button-queue"),i=document.querySelector(".button-watched");async function t(e){let t=null;await On(Hp,(e=>{null!=e&&(t=e)}));const r=t.uid.substring(0,8)+"."+n;Vp(pp($p,`${e}`,r),{filmId:n,userId:t.uid}).then((()=>{Kp("success",`Film was successfully added to ${e}!`)})).catch((e=>{Kp("error",e.message)}))}r.addEventListener("click",(async e=>{e.preventDefault(),t("queue")})),i.addEventListener("click",(async e=>{e.preventDefault(),t("watched")}))}}));const v_=document.querySelector("#spinner"),y_=document.querySelector("#blackscreen");var __=function(){v_.classList.add("active"),y_.classList.add("active")},w_=function(){v_.classList.remove("active"),y_.classList.remove("active")};const b_=document.querySelector("#registerForm");b_.addEventListener("submit",(e=>{e.preventDefault();document.querySelector("#registerUsername").value;const t=document.querySelector("#registerEmail").value,n=document.querySelector("#registerPassword").value,r=document.querySelector("#registerRepeatPassword").value,i=document.querySelector("#registerError");n!==r?(i.style.display="block",i.innerHTML="Your password and confirmation password do not match."):Ln(Hp,t,n).then((e=>{Nn(Hp),document.querySelector("#login").click(),b_.reset(),i.removeAttribute("style")})).catch((e=>{i.style.display="block",i.innerHTML=e.message}))}));const E_=document.querySelector("#loginForm"),S_=document.querySelector("#loginError");E_.addEventListener("submit",(e=>{e.preventDefault();const t=document.querySelector("#loginEmail").value,n=document.querySelector("#loginPassword").value;Pn(Hp,t,n).then((e=>{document.querySelector("#home").click(),Kp("success","You have successfully logged in."),b_.reset(),S_.removeAttribute("style")})).catch((e=>{S_.style.display="block",S_.innerHTML=e.message,Kp("error","An error occurred while logging in.")}))}));document.querySelector("#googleLogin").addEventListener("click",(async()=>{await __(),await mr(Hp,qp),gr(Hp).then((e=>{Kp("success","You have successfully logged in."),e.user||Hp.currentUser?(w_(),S_.removeAttribute("style"),E_.reset()):(w_(),Kp("error","An error occurred while logging in."),document.querySelector("#login").click())})).catch((e=>{document.querySelector("#login").click(),S_.style.display="block",S_.innerHTML=e.message}))}));document.querySelector("#githubLogin").addEventListener("click",(e=>{e.preventDefault(),__(),ar(Hp,Gp).then((e=>{w_(),Kp("success","You have successfully logged in."),document.querySelector("#home").click(),S_.removeAttribute("style"),E_.reset()})).catch((e=>{w_(),Kp("error","An error occurred while logging in."),S_.style.display="block","auth/account-exists-with-different-credential"===e.code?S_.innerHTML="This email is already in use. Try to sign in with a different method.":"auth/popup-closed-by-user"===e.code?S_.removeAttribute("style"):S_.innerHTML=e.message}))}));
//# sourceMappingURL=index.692bff51.js.map
