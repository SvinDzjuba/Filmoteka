function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},s=n.parcelRequired7c6;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},n.parcelRequired7c6=s),s.register("9QQ9J",(function(t,n){var r,i,o;e(t.exports,"SourceMapGenerator",(function(){return r}),(function(e){return r=e})),e(t.exports,"SourceMapConsumer",(function(){return i}),(function(e){return i=e})),e(t.exports,"SourceNode",(function(){return o}),(function(e){return o=e})),r=s("ic7WM").SourceMapGenerator,i=s("lbXUp").SourceMapConsumer,o=s("Tx9qF").SourceNode})),s.register("ic7WM",(function(t,n){var r;e(t.exports,"SourceMapGenerator",(function(){return r}),(function(e){return r=e}));var i=s("duvZU"),o=s("dQK2c"),a=s("lSTHk").ArraySet,l=s("2EyUB").MappingList;function c(e){e||(e={}),this._file=o.getArg(e,"file",null),this._sourceRoot=o.getArg(e,"sourceRoot",null),this._skipValidation=o.getArg(e,"skipValidation",!1),this._sources=new a,this._names=new a,this._mappings=new l,this._sourcesContents=null}c.prototype._version=3,c.fromSourceMap=function(e){var t=e.sourceRoot,n=new c({file:e.file,sourceRoot:t});return e.eachMapping((function(e){var r={generated:{line:e.generatedLine,column:e.generatedColumn}};null!=e.source&&(r.source=e.source,null!=t&&(r.source=o.relative(t,r.source)),r.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(r.name=e.name)),n.addMapping(r)})),e.sources.forEach((function(r){var i=r;null!==t&&(i=o.relative(t,r)),n._sources.has(i)||n._sources.add(i);var s=e.sourceContentFor(r);null!=s&&n.setSourceContent(r,s)})),n},c.prototype.addMapping=function(e){var t=o.getArg(e,"generated"),n=o.getArg(e,"original",null),r=o.getArg(e,"source",null),i=o.getArg(e,"name",null);this._skipValidation||this._validateMapping(t,n,r,i),null!=r&&(r=String(r),this._sources.has(r)||this._sources.add(r)),null!=i&&(i=String(i),this._names.has(i)||this._names.add(i)),this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:null!=n&&n.line,originalColumn:null!=n&&n.column,source:r,name:i})},c.prototype.setSourceContent=function(e,t){var n=e;null!=this._sourceRoot&&(n=o.relative(this._sourceRoot,n)),null!=t?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[o.toSetString(n)]=t):this._sourcesContents&&(delete this._sourcesContents[o.toSetString(n)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},c.prototype.applySourceMap=function(e,t,n){var r=t;if(null==t){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');r=e.file}var i=this._sourceRoot;null!=i&&(r=o.relative(i,r));var s=new a,l=new a;this._mappings.unsortedForEach((function(t){if(t.source===r&&null!=t.originalLine){var a=e.originalPositionFor({line:t.originalLine,column:t.originalColumn});null!=a.source&&(t.source=a.source,null!=n&&(t.source=o.join(n,t.source)),null!=i&&(t.source=o.relative(i,t.source)),t.originalLine=a.line,t.originalColumn=a.column,null!=a.name&&(t.name=a.name))}var c=t.source;null==c||s.has(c)||s.add(c);var u=t.name;null==u||l.has(u)||l.add(u)}),this),this._sources=s,this._names=l,e.sources.forEach((function(t){var r=e.sourceContentFor(t);null!=r&&(null!=n&&(t=o.join(n,t)),null!=i&&(t=o.relative(i,t)),this.setSourceContent(t,r))}),this)},c.prototype._validateMapping=function(e,t,n,r){if(t&&"number"!=typeof t.line&&"number"!=typeof t.column)throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||t||n||r)&&!(e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&n))throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:n,original:t,name:r}))},c.prototype._serializeMappings=function(){for(var e,t,n,r,s=0,a=1,l=0,c=0,u=0,h=0,p="",d=this._mappings.toArray(),f=0,g=d.length;f<g;f++){if(e="",(t=d[f]).generatedLine!==a)for(s=0;t.generatedLine!==a;)e+=";",a++;else if(f>0){if(!o.compareByGeneratedPositionsInflated(t,d[f-1]))continue;e+=","}e+=i.encode(t.generatedColumn-s),s=t.generatedColumn,null!=t.source&&(r=this._sources.indexOf(t.source),e+=i.encode(r-h),h=r,e+=i.encode(t.originalLine-1-c),c=t.originalLine-1,e+=i.encode(t.originalColumn-l),l=t.originalColumn,null!=t.name&&(n=this._names.indexOf(t.name),e+=i.encode(n-u),u=n)),p+=e}return p},c.prototype._generateSourcesContent=function(e,t){return e.map((function(e){if(!this._sourcesContents)return null;null!=t&&(e=o.relative(t,e));var n=o.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null}),this)},c.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},c.prototype.toString=function(){return JSON.stringify(this.toJSON())},r=c})),s.register("duvZU",(function(t,n){var r,i;e(t.exports,"encode",(function(){return r}),(function(e){return r=e})),e(t.exports,"decode",(function(){return i}),(function(e){return i=e}));var o=s("iJ1ZV");r=function(e){var t,n="",r=function(e){return e<0?1+(-e<<1):0+(e<<1)}(e);do{t=31&r,(r>>>=5)>0&&(t|=32),n+=o.encode(t)}while(r>0);return n},i=function(e,t,n){var r,i,s,a,l=e.length,c=0,u=0;do{if(t>=l)throw new Error("Expected more digits in base 64 VLQ value.");if(-1===(i=o.decode(e.charCodeAt(t++))))throw new Error("Invalid base64 digit: "+e.charAt(t-1));r=!!(32&i),c+=(i&=31)<<u,u+=5}while(r);n.value=(a=(s=c)>>1,1==(1&s)?-a:a),n.rest=t}})),s.register("iJ1ZV",(function(t,n){var r,i;e(t.exports,"encode",(function(){return r}),(function(e){return r=e})),e(t.exports,"decode",(function(){return i}),(function(e){return i=e}));var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");r=function(e){if(0<=e&&e<s.length)return s[e];throw new TypeError("Must be between 0 and 63: "+e)},i=function(e){return 65<=e&&e<=90?e-65:97<=e&&e<=122?e-97+26:48<=e&&e<=57?e-48+52:43==e?62:47==e?63:-1}})),s.register("dQK2c",(function(t,n){var r,i,s,o,a,l,c,u,h,p,d,f,g;e(t.exports,"getArg",(function(){return r}),(function(e){return r=e})),e(t.exports,"urlParse",(function(){return i}),(function(e){return i=e})),e(t.exports,"isAbsolute",(function(){return a}),(function(e){return a=e})),e(t.exports,"normalize",(function(){return s}),(function(e){return s=e})),e(t.exports,"join",(function(){return o}),(function(e){return o=e})),e(t.exports,"relative",(function(){return l}),(function(e){return l=e})),e(t.exports,"toSetString",(function(){return c}),(function(e){return c=e})),e(t.exports,"fromSetString",(function(){return u}),(function(e){return u=e})),e(t.exports,"compareByOriginalPositions",(function(){return h}),(function(e){return h=e})),e(t.exports,"compareByGeneratedPositionsDeflated",(function(){return p}),(function(e){return p=e})),e(t.exports,"compareByGeneratedPositionsInflated",(function(){return d}),(function(e){return d=e})),e(t.exports,"parseSourceMapInput",(function(){return f}),(function(e){return f=e})),e(t.exports,"computeSourceURL",(function(){return g}),(function(e){return g=e})),r=function(e,t,n){if(t in e)return e[t];if(3===arguments.length)return n;throw new Error('"'+t+'" is a required argument.')};var m=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,v=/^data:.+\,.+$/;function y(e){var t=e.match(m);return t?{scheme:t[1],auth:t[2],host:t[3],port:t[4],path:t[5]}:null}function _(e){var t="";return e.scheme&&(t+=e.scheme+":"),t+="//",e.auth&&(t+=e.auth+"@"),e.host&&(t+=e.host),e.port&&(t+=":"+e.port),e.path&&(t+=e.path),t}function b(e){var t=e,n=y(e);if(n){if(!n.path)return e;t=n.path}for(var r,i=a(t),s=t.split(/\/+/),o=0,l=s.length-1;l>=0;l--)"."===(r=s[l])?s.splice(l,1):".."===r?o++:o>0&&(""===r?(s.splice(l+1,o),o=0):(s.splice(l,2),o--));return""===(t=s.join("/"))&&(t=i?"/":"."),n?(n.path=t,_(n)):t}function w(e,t){""===e&&(e="."),""===t&&(t=".");var n=y(t),r=y(e);if(r&&(e=r.path||"/"),n&&!n.scheme)return r&&(n.scheme=r.scheme),_(n);if(n||t.match(v))return t;if(r&&!r.host&&!r.path)return r.host=t,_(r);var i="/"===t.charAt(0)?t:b(e.replace(/\/+$/,"")+"/"+t);return r?(r.path=i,_(r)):i}i=y,s=b,o=w,a=function(e){return"/"===e.charAt(0)||m.test(e)},l=function(e,t){""===e&&(e="."),e=e.replace(/\/$/,"");for(var n=0;0!==t.indexOf(e+"/");){var r=e.lastIndexOf("/");if(r<0)return t;if((e=e.slice(0,r)).match(/^([^\/]+:\/)?\/*$/))return t;++n}return Array(n+1).join("../")+t.substr(e.length+1)};var S=!("__proto__"in Object.create(null));function k(e){return e}function E(e){if(!e)return!1;var t=e.length;if(t<9)return!1;if(95!==e.charCodeAt(t-1)||95!==e.charCodeAt(t-2)||111!==e.charCodeAt(t-3)||116!==e.charCodeAt(t-4)||111!==e.charCodeAt(t-5)||114!==e.charCodeAt(t-6)||112!==e.charCodeAt(t-7)||95!==e.charCodeAt(t-8)||95!==e.charCodeAt(t-9))return!1;for(var n=t-10;n>=0;n--)if(36!==e.charCodeAt(n))return!1;return!0}function I(e,t){return e===t?0:null===e?1:null===t?-1:e>t?1:-1}c=S?k:function(e){return E(e)?"$"+e:e},u=S?k:function(e){return E(e)?e.slice(1):e},h=function(e,t,n){var r=I(e.source,t.source);return 0!==r||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)||n||0!==(r=e.generatedColumn-t.generatedColumn)||0!==(r=e.generatedLine-t.generatedLine)?r:I(e.name,t.name)},p=function(e,t,n){var r=e.generatedLine-t.generatedLine;return 0!==r||0!==(r=e.generatedColumn-t.generatedColumn)||n||0!==(r=I(e.source,t.source))||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)?r:I(e.name,t.name)},d=function(e,t){var n=e.generatedLine-t.generatedLine;return 0!==n||0!==(n=e.generatedColumn-t.generatedColumn)||0!==(n=I(e.source,t.source))||0!==(n=e.originalLine-t.originalLine)||0!==(n=e.originalColumn-t.originalColumn)?n:I(e.name,t.name)},f=function(e){return JSON.parse(e.replace(/^\)]}'[^\n]*\n/,""))},g=function(e,t,n){if(t=t||"",e&&("/"!==e[e.length-1]&&"/"!==t[0]&&(e+="/"),t=e+t),n){var r=y(n);if(!r)throw new Error("sourceMapURL could not be parsed");if(r.path){var i=r.path.lastIndexOf("/");i>=0&&(r.path=r.path.substring(0,i+1))}t=w(_(r),t)}return b(t)}})),s.register("lSTHk",(function(t,n){var r;e(t.exports,"ArraySet",(function(){return r}),(function(e){return r=e}));var i=s("dQK2c"),o=Object.prototype.hasOwnProperty,a="undefined"!=typeof Map;function l(){this._array=[],this._set=a?new Map:Object.create(null)}l.fromArray=function(e,t){for(var n=new l,r=0,i=e.length;r<i;r++)n.add(e[r],t);return n},l.prototype.size=function(){return a?this._set.size:Object.getOwnPropertyNames(this._set).length},l.prototype.add=function(e,t){var n=a?e:i.toSetString(e),r=a?this.has(e):o.call(this._set,n),s=this._array.length;r&&!t||this._array.push(e),r||(a?this._set.set(e,s):this._set[n]=s)},l.prototype.has=function(e){if(a)return this._set.has(e);var t=i.toSetString(e);return o.call(this._set,t)},l.prototype.indexOf=function(e){if(a){var t=this._set.get(e);if(t>=0)return t}else{var n=i.toSetString(e);if(o.call(this._set,n))return this._set[n]}throw new Error('"'+e+'" is not in the set.')},l.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)},l.prototype.toArray=function(){return this._array.slice()},r=l})),s.register("2EyUB",(function(t,n){var r;e(t.exports,"MappingList",(function(){return r}),(function(e){return r=e}));var i=s("dQK2c");function o(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}o.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t)},o.prototype.add=function(e){var t,n,r,s,o,a;t=this._last,n=e,r=t.generatedLine,s=n.generatedLine,o=t.generatedColumn,a=n.generatedColumn,s>r||s==r&&a>=o||i.compareByGeneratedPositionsInflated(t,n)<=0?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e))},o.prototype.toArray=function(){return this._sorted||(this._array.sort(i.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},r=o})),s.register("lbXUp",(function(t,n){var r;e(t.exports,"SourceMapConsumer",(function(){return r}),(function(e){return r=e}));var i=s("dQK2c"),o=s("bTtvB"),a=s("lSTHk").ArraySet,l=s("duvZU"),c=s("76ffZ").quickSort;function u(e,t){var n=e;return"string"==typeof e&&(n=i.parseSourceMapInput(e)),null!=n.sections?new d(n,t):new h(n,t)}function h(e,t){var n=e;"string"==typeof e&&(n=i.parseSourceMapInput(e));var r=i.getArg(n,"version"),s=i.getArg(n,"sources"),o=i.getArg(n,"names",[]),l=i.getArg(n,"sourceRoot",null),c=i.getArg(n,"sourcesContent",null),u=i.getArg(n,"mappings"),h=i.getArg(n,"file",null);if(r!=this._version)throw new Error("Unsupported version: "+r);l&&(l=i.normalize(l)),s=s.map(String).map(i.normalize).map((function(e){return l&&i.isAbsolute(l)&&i.isAbsolute(e)?i.relative(l,e):e})),this._names=a.fromArray(o.map(String),!0),this._sources=a.fromArray(s,!0),this._absoluteSources=this._sources.toArray().map((function(e){return i.computeSourceURL(l,e,t)})),this.sourceRoot=l,this.sourcesContent=c,this._mappings=u,this._sourceMapURL=t,this.file=h}function p(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}function d(e,t){var n=e;"string"==typeof e&&(n=i.parseSourceMapInput(e));var r=i.getArg(n,"version"),s=i.getArg(n,"sections");if(r!=this._version)throw new Error("Unsupported version: "+r);this._sources=new a,this._names=new a;var o={line:-1,column:0};this._sections=s.map((function(e){if(e.url)throw new Error("Support for url field in sections not implemented.");var n=i.getArg(e,"offset"),r=i.getArg(n,"line"),s=i.getArg(n,"column");if(r<o.line||r===o.line&&s<o.column)throw new Error("Section offsets must be ordered and non-overlapping.");return o=n,{generatedOffset:{generatedLine:r+1,generatedColumn:s+1},consumer:new u(i.getArg(e,"map"),t)}}))}u.fromSourceMap=function(e,t){return h.fromSourceMap(e,t)},u.prototype._version=3,u.prototype.__generatedMappings=null,Object.defineProperty(u.prototype,"_generatedMappings",{configurable:!0,enumerable:!0,get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),u.prototype.__originalMappings=null,Object.defineProperty(u.prototype,"_originalMappings",{configurable:!0,enumerable:!0,get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),u.prototype._charIsMappingSeparator=function(e,t){var n=e.charAt(t);return";"===n||","===n},u.prototype._parseMappings=function(e,t){throw new Error("Subclasses must implement _parseMappings")},u.GENERATED_ORDER=1,u.ORIGINAL_ORDER=2,u.GREATEST_LOWER_BOUND=1,u.LEAST_UPPER_BOUND=2,u.prototype.eachMapping=function(e,t,n){var r,s=t||null;switch(n||u.GENERATED_ORDER){case u.GENERATED_ORDER:r=this._generatedMappings;break;case u.ORIGINAL_ORDER:r=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var o=this.sourceRoot;r.map((function(e){var t=null===e.source?null:this._sources.at(e.source);return{source:t=i.computeSourceURL(o,t,this._sourceMapURL),generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:null===e.name?null:this._names.at(e.name)}}),this).forEach(e,s)},u.prototype.allGeneratedPositionsFor=function(e){var t=i.getArg(e,"line"),n={source:i.getArg(e,"source"),originalLine:t,originalColumn:i.getArg(e,"column",0)};if(n.source=this._findSourceIndex(n.source),n.source<0)return[];var r=[],s=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",i.compareByOriginalPositions,o.LEAST_UPPER_BOUND);if(s>=0){var a=this._originalMappings[s];if(void 0===e.column)for(var l=a.originalLine;a&&a.originalLine===l;)r.push({line:i.getArg(a,"generatedLine",null),column:i.getArg(a,"generatedColumn",null),lastColumn:i.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++s];else for(var c=a.originalColumn;a&&a.originalLine===t&&a.originalColumn==c;)r.push({line:i.getArg(a,"generatedLine",null),column:i.getArg(a,"generatedColumn",null),lastColumn:i.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++s]}return r},r=u,h.prototype=Object.create(u.prototype),h.prototype.consumer=u,h.prototype._findSourceIndex=function(e){var t,n=e;if(null!=this.sourceRoot&&(n=i.relative(this.sourceRoot,n)),this._sources.has(n))return this._sources.indexOf(n);for(t=0;t<this._absoluteSources.length;++t)if(this._absoluteSources[t]==e)return t;return-1},h.fromSourceMap=function(e,t){var n=Object.create(h.prototype),r=n._names=a.fromArray(e._names.toArray(),!0),s=n._sources=a.fromArray(e._sources.toArray(),!0);n.sourceRoot=e._sourceRoot,n.sourcesContent=e._generateSourcesContent(n._sources.toArray(),n.sourceRoot),n.file=e._file,n._sourceMapURL=t,n._absoluteSources=n._sources.toArray().map((function(e){return i.computeSourceURL(n.sourceRoot,e,t)}));for(var o=e._mappings.toArray().slice(),l=n.__generatedMappings=[],u=n.__originalMappings=[],d=0,f=o.length;d<f;d++){var g=o[d],m=new p;m.generatedLine=g.generatedLine,m.generatedColumn=g.generatedColumn,g.source&&(m.source=s.indexOf(g.source),m.originalLine=g.originalLine,m.originalColumn=g.originalColumn,g.name&&(m.name=r.indexOf(g.name)),u.push(m)),l.push(m)}return c(n.__originalMappings,i.compareByOriginalPositions),n},h.prototype._version=3,Object.defineProperty(h.prototype,"sources",{get:function(){return this._absoluteSources.slice()}}),h.prototype._parseMappings=function(e,t){for(var n,r,s,o,a,u=1,h=0,d=0,f=0,g=0,m=0,v=e.length,y=0,_={},b={},w=[],S=[];y<v;)if(";"===e.charAt(y))u++,y++,h=0;else if(","===e.charAt(y))y++;else{for((n=new p).generatedLine=u,o=y;o<v&&!this._charIsMappingSeparator(e,o);o++);if(s=_[r=e.slice(y,o)])y+=r.length;else{for(s=[];y<o;)l.decode(e,y,b),a=b.value,y=b.rest,s.push(a);if(2===s.length)throw new Error("Found a source, but no line and column");if(3===s.length)throw new Error("Found a source and line, but no column");_[r]=s}n.generatedColumn=h+s[0],h=n.generatedColumn,s.length>1&&(n.source=g+s[1],g+=s[1],n.originalLine=d+s[2],d=n.originalLine,n.originalLine+=1,n.originalColumn=f+s[3],f=n.originalColumn,s.length>4&&(n.name=m+s[4],m+=s[4])),S.push(n),"number"==typeof n.originalLine&&w.push(n)}c(S,i.compareByGeneratedPositionsDeflated),this.__generatedMappings=S,c(w,i.compareByOriginalPositions),this.__originalMappings=w},h.prototype._findMapping=function(e,t,n,r,i,s){if(e[n]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[n]);if(e[r]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[r]);return o.search(e,t,i,s)},h.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var t=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var n=this._generatedMappings[e+1];if(t.generatedLine===n.generatedLine){t.lastGeneratedColumn=n.generatedColumn-1;continue}}t.lastGeneratedColumn=1/0}},h.prototype.originalPositionFor=function(e){var t={generatedLine:i.getArg(e,"line"),generatedColumn:i.getArg(e,"column")},n=this._findMapping(t,this._generatedMappings,"generatedLine","generatedColumn",i.compareByGeneratedPositionsDeflated,i.getArg(e,"bias",u.GREATEST_LOWER_BOUND));if(n>=0){var r=this._generatedMappings[n];if(r.generatedLine===t.generatedLine){var s=i.getArg(r,"source",null);null!==s&&(s=this._sources.at(s),s=i.computeSourceURL(this.sourceRoot,s,this._sourceMapURL));var o=i.getArg(r,"name",null);return null!==o&&(o=this._names.at(o)),{source:s,line:i.getArg(r,"originalLine",null),column:i.getArg(r,"originalColumn",null),name:o}}}return{source:null,line:null,column:null,name:null}},h.prototype.hasContentsOfAllSources=function(){return!!this.sourcesContent&&(this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some((function(e){return null==e})))},h.prototype.sourceContentFor=function(e,t){if(!this.sourcesContent)return null;var n=this._findSourceIndex(e);if(n>=0)return this.sourcesContent[n];var r,s=e;if(null!=this.sourceRoot&&(s=i.relative(this.sourceRoot,s)),null!=this.sourceRoot&&(r=i.urlParse(this.sourceRoot))){var o=s.replace(/^file:\/\//,"");if("file"==r.scheme&&this._sources.has(o))return this.sourcesContent[this._sources.indexOf(o)];if((!r.path||"/"==r.path)&&this._sources.has("/"+s))return this.sourcesContent[this._sources.indexOf("/"+s)]}if(t)return null;throw new Error('"'+s+'" is not in the SourceMap.')},h.prototype.generatedPositionFor=function(e){var t=i.getArg(e,"source");if((t=this._findSourceIndex(t))<0)return{line:null,column:null,lastColumn:null};var n={source:t,originalLine:i.getArg(e,"line"),originalColumn:i.getArg(e,"column")},r=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",i.compareByOriginalPositions,i.getArg(e,"bias",u.GREATEST_LOWER_BOUND));if(r>=0){var s=this._originalMappings[r];if(s.source===n.source)return{line:i.getArg(s,"generatedLine",null),column:i.getArg(s,"generatedColumn",null),lastColumn:i.getArg(s,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},d.prototype=Object.create(u.prototype),d.prototype.constructor=u,d.prototype._version=3,Object.defineProperty(d.prototype,"sources",{get:function(){for(var e=[],t=0;t<this._sections.length;t++)for(var n=0;n<this._sections[t].consumer.sources.length;n++)e.push(this._sections[t].consumer.sources[n]);return e}}),d.prototype.originalPositionFor=function(e){var t={generatedLine:i.getArg(e,"line"),generatedColumn:i.getArg(e,"column")},n=o.search(t,this._sections,(function(e,t){var n=e.generatedLine-t.generatedOffset.generatedLine;return n||e.generatedColumn-t.generatedOffset.generatedColumn})),r=this._sections[n];return r?r.consumer.originalPositionFor({line:t.generatedLine-(r.generatedOffset.generatedLine-1),column:t.generatedColumn-(r.generatedOffset.generatedLine===t.generatedLine?r.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}},d.prototype.hasContentsOfAllSources=function(){return this._sections.every((function(e){return e.consumer.hasContentsOfAllSources()}))},d.prototype.sourceContentFor=function(e,t){for(var n=0;n<this._sections.length;n++){var r=this._sections[n].consumer.sourceContentFor(e,!0);if(r)return r}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},d.prototype.generatedPositionFor=function(e){for(var t=0;t<this._sections.length;t++){var n=this._sections[t];if(-1!==n.consumer._findSourceIndex(i.getArg(e,"source"))){var r=n.consumer.generatedPositionFor(e);if(r)return{line:r.line+(n.generatedOffset.generatedLine-1),column:r.column+(n.generatedOffset.generatedLine===r.line?n.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}},d.prototype._parseMappings=function(e,t){this.__generatedMappings=[],this.__originalMappings=[];for(var n=0;n<this._sections.length;n++)for(var r=this._sections[n],s=r.consumer._generatedMappings,o=0;o<s.length;o++){var a=s[o],l=r.consumer._sources.at(a.source);l=i.computeSourceURL(r.consumer.sourceRoot,l,this._sourceMapURL),this._sources.add(l),l=this._sources.indexOf(l);var u=null;a.name&&(u=r.consumer._names.at(a.name),this._names.add(u),u=this._names.indexOf(u));var h={source:l,generatedLine:a.generatedLine+(r.generatedOffset.generatedLine-1),generatedColumn:a.generatedColumn+(r.generatedOffset.generatedLine===a.generatedLine?r.generatedOffset.generatedColumn-1:0),originalLine:a.originalLine,originalColumn:a.originalColumn,name:u};this.__generatedMappings.push(h),"number"==typeof h.originalLine&&this.__originalMappings.push(h)}c(this.__generatedMappings,i.compareByGeneratedPositionsDeflated),c(this.__originalMappings,i.compareByOriginalPositions)}})),s.register("bTtvB",(function(t,n){var r,i,s;function o(e,t,n,r,s,a){var l=Math.floor((t-e)/2)+e,c=s(n,r[l],!0);return 0===c?l:c>0?t-l>1?o(l,t,n,r,s,a):a==i?t<r.length?t:-1:l:l-e>1?o(e,l,n,r,s,a):a==i?l:e<0?-1:e}e(t.exports,"GREATEST_LOWER_BOUND",(function(){return r}),(function(e){return r=e})),e(t.exports,"LEAST_UPPER_BOUND",(function(){return i}),(function(e){return i=e})),e(t.exports,"search",(function(){return s}),(function(e){return s=e})),r=1,i=2,s=function(e,t,n,i){if(0===t.length)return-1;var s=o(-1,t.length,e,t,n,i||r);if(s<0)return-1;for(;s-1>=0&&0===n(t[s],t[s-1],!0);)--s;return s}})),s.register("76ffZ",(function(t,n){var r;function i(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function s(e,t,n,r){if(n<r){var o=n-1;i(e,(u=n,h=r,Math.round(u+Math.random()*(h-u))),r);for(var a=e[r],l=n;l<r;l++)t(e[l],a)<=0&&i(e,o+=1,l);i(e,o+1,l);var c=o+1;s(e,t,n,c-1),s(e,t,c+1,r)}var u,h}e(t.exports,"quickSort",(function(){return r}),(function(e){return r=e})),r=function(e,t){s(e,t,0,e.length-1)}})),s.register("Tx9qF",(function(t,n){var r;e(t.exports,"SourceNode",(function(){return r}),(function(e){return r=e}));var i=s("ic7WM").SourceMapGenerator,o=s("dQK2c"),a=/(\r?\n)/;function l(e,t,n,r,i){this.children=[],this.sourceContents={},this.line=null==e?null:e,this.column=null==t?null:t,this.source=null==n?null:n,this.name=null==i?null:i,this.$$$isSourceNode$$$=!0,null!=r&&this.add(r)}l.fromStringWithSourceMap=function(e,t,n){var r=new l,i=e.split(a),s=0,c=function(){return e()+(e()||"");function e(){return s<i.length?i[s++]:void 0}},u=1,h=0,p=null;return t.eachMapping((function(e){if(null!==p){if(!(u<e.generatedLine)){var t=(n=i[s]||"").substr(0,e.generatedColumn-h);return i[s]=n.substr(e.generatedColumn-h),h=e.generatedColumn,d(p,t),void(p=e)}d(p,c()),u++,h=0}for(;u<e.generatedLine;)r.add(c()),u++;if(h<e.generatedColumn){var n=i[s]||"";r.add(n.substr(0,e.generatedColumn)),i[s]=n.substr(e.generatedColumn),h=e.generatedColumn}p=e}),this),s<i.length&&(p&&d(p,c()),r.add(i.splice(s).join(""))),t.sources.forEach((function(e){var i=t.sourceContentFor(e);null!=i&&(null!=n&&(e=o.join(n,e)),r.setSourceContent(e,i))})),r;function d(e,t){if(null===e||void 0===e.source)r.add(t);else{var i=n?o.join(n,e.source):e.source;r.add(new l(e.originalLine,e.originalColumn,i,t,e.name))}}},l.prototype.add=function(e){if(Array.isArray(e))e.forEach((function(e){this.add(e)}),this);else{if(!e.$$$isSourceNode$$$&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);e&&this.children.push(e)}return this},l.prototype.prepend=function(e){if(Array.isArray(e))for(var t=e.length-1;t>=0;t--)this.prepend(e[t]);else{if(!e.$$$isSourceNode$$$&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);this.children.unshift(e)}return this},l.prototype.walk=function(e){for(var t,n=0,r=this.children.length;n<r;n++)(t=this.children[n]).$$$isSourceNode$$$?t.walk(e):""!==t&&e(t,{source:this.source,line:this.line,column:this.column,name:this.name})},l.prototype.join=function(e){var t,n,r=this.children.length;if(r>0){for(t=[],n=0;n<r-1;n++)t.push(this.children[n]),t.push(e);t.push(this.children[n]),this.children=t}return this},l.prototype.replaceRight=function(e,t){var n=this.children[this.children.length-1];return n.$$$isSourceNode$$$?n.replaceRight(e,t):"string"==typeof n?this.children[this.children.length-1]=n.replace(e,t):this.children.push("".replace(e,t)),this},l.prototype.setSourceContent=function(e,t){this.sourceContents[o.toSetString(e)]=t},l.prototype.walkSourceContents=function(e){for(var t=0,n=this.children.length;t<n;t++)this.children[t].$$$isSourceNode$$$&&this.children[t].walkSourceContents(e);var r=Object.keys(this.sourceContents);for(t=0,n=r.length;t<n;t++)e(o.fromSetString(r[t]),this.sourceContents[r[t]])},l.prototype.toString=function(){var e="";return this.walk((function(t){e+=t})),e},l.prototype.toStringWithSourceMap=function(e){var t={code:"",line:1,column:0},n=new i(e),r=!1,s=null,o=null,a=null,l=null;return this.walk((function(e,i){t.code+=e,null!==i.source&&null!==i.line&&null!==i.column?(s===i.source&&o===i.line&&a===i.column&&l===i.name||n.addMapping({source:i.source,original:{line:i.line,column:i.column},generated:{line:t.line,column:t.column},name:i.name}),s=i.source,o=i.line,a=i.column,l=i.name,r=!0):r&&(n.addMapping({generated:{line:t.line,column:t.column}}),s=null,r=!1);for(var c=0,u=e.length;c<u;c++)10===e.charCodeAt(c)?(t.line++,t.column=0,c+1===u?(s=null,r=!1):r&&n.addMapping({source:i.source,original:{line:i.line,column:i.column},generated:{line:t.line,column:t.column},name:i.name})):t.column++})),this.walkSourceContents((function(e,t){n.setSourceContent(e,t)})),{code:t.code,map:n}},r=l})),s.register("5Io6y",(function(e,t){}));const o=document.querySelector(".home"),a=document.querySelector(".library"),l=document.querySelectorAll("#home"),c=document.querySelectorAll("#library"),u=document.querySelector("#login"),h=document.querySelector(".login"),p=document.querySelector("#register"),d=document.querySelector(".register"),f=document.querySelector(".convenience-menu"),g=(document.querySelector("body"),document.querySelector(".main")),m=document.querySelector(".main-library");function v(e){a.classList.add("invisable"),o.classList.remove("invisable"),m.classList.add("invisable"),g.classList.remove("invisable"),d.classList.add("invisable"),h.classList.add("invisable"),f.classList.remove("invisable")}function y(e){a.classList.remove("invisable"),o.classList.add("invisable"),m.classList.remove("invisable"),g.classList.add("invisable"),d.classList.add("invisable"),h.classList.add("invisable"),f.classList.remove("invisable")}l[0].addEventListener("click",v),c[0].addEventListener("click",y),l[1].addEventListener("click",v),c[1].addEventListener("click",y),u.addEventListener("click",(function(e){h.classList.remove("invisable"),d.classList.add("invisable"),g.classList.add("invisable"),f.classList.add("invisable")})),p.addEventListener("click",(function(e){d.classList.remove("invisable"),h.classList.add("invisable"),g.classList.add("invisable"),f.classList.add("invisable")}));const _=document.querySelector(".theme-switch__toggle"),b=document.querySelector("body"),w=document.getElementsByTagName("h2"),S=document.querySelector(".film_modal"),k=localStorage.getItem("theme");function E(e){if("dark"===e){b.classList.add("dark_theme"),S.classList.add("dark_modal");for(let e=0;e<w.length;e++){w[e].classList.add("dark_theme_title")}_.checked=!0}else if("light"===e){b.classList.remove("dark_theme"),S.classList.remove("dark_modal");for(let e=0;e<w.length;e++){w[e].classList.remove("dark_theme_title")}_.checked=!1}}_.addEventListener("click",(function(){!0===_.checked?(localStorage.setItem("theme","dark"),E("dark")):!1===_.checked&&(localStorage.setItem("theme","light"),E("light"))})),E(k);let I="",T="",C="",L=[];var A={fetchTrendFilms:async function(e){try{const t=await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=070151ea430b4e74dbca9bca592b262c&page=${e}`);return await t.json()}catch(e){}finally{L.length=[],L.push("trendFilms")}},fetchSearchFilms:async function(e){try{const t=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=070151ea430b4e74dbca9bca592b262c&query=${I}&language=en-US&page=${e}&include_adult=false`);return await t.json()}catch(e){}finally{L.length=[],L.push("searchFilms")}},fetchFilmById:async function(e){try{const t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=070151ea430b4e74dbca9bca592b262c&language=$language=en-US`);return await t.json()}catch(e){}},fetchGenres:async function(){try{const e=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=070151ea430b4e74dbca9bca592b262c&language=en-US");return(await e.json()).genres}catch(e){}},fetchFilmsByGenre:async function(e,t){try{const n=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=070151ea430b4e74dbca9bca592b262c&with_genres=${e}&language=en-US&page=${t}`);return await n.json()}catch(e){}finally{L.length=[],L.push("byGenreFilms")}},fetchDiscover:async function(e,t){try{const n=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=070151ea430b4e74dbca9bca592b262c&language=en-US&page=${t}&sort_by=${e}`);return await n.json()}catch(e){}finally{L.length=[],L.push("discoverFilms")}},BASE_URL:"https://api.themoviedb.org",API_KEY:"070151ea430b4e74dbca9bca592b262c",page:1,fetchType:L,searchQuery:e=>{I=e},takeGenre:e=>{T=e},sortByMethod:e=>{C=e}};function P(){const e=document.getElementsByClassName("film-card__release"),t=document.getElementsByClassName("film-card__genres"),n=document.getElementsByClassName("film-card__vote");for(let e=0;e<n.length;e++){let t=String(n[e].innerHTML.slice(0,3));n[e].innerHTML=t%1!=0?Number(t):Number(t)+".0"}for(let t=0;t<e.length;t++){let n=String(e[t].innerHTML).slice(0,4);e[t].innerHTML=Number(n)}A.fetchGenres().then((e=>{for(let n=0;n<t.length;n++){const r=t[n].innerHTML.split(","),i=e.map((e=>e.id)),s=e.map((e=>e.name));r.forEach((function(e,o){for(let a=0;a<i.length;a++)e==i[a]&&(this[o]=" "+s[a]),t[n].innerHTML=r}),r)}}))}var O,R={};function N(e){return e&&e.__esModule?e:{default:e}}R.__esModule=!0;var M={};function D(e){return e&&e.__esModule?e:{default:e}}function x(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}M.__esModule=!0;var U,j,F,B,H,$,V,q,z,G={};function K(e){return e&&e.__esModule?e:{default:e}}e(G,"__esModule",(function(){return U}),(function(e){return U=e})),e(G,"HandlebarsEnvironment",(function(){return j}),(function(e){return j=e})),e(G,"VERSION",(function(){return F}),(function(e){return F=e})),e(G,"COMPILER_REVISION",(function(){return B}),(function(e){return B=e})),e(G,"LAST_COMPATIBLE_COMPILER_REVISION",(function(){return H}),(function(e){return H=e})),e(G,"REVISION_CHANGES",(function(){return $}),(function(e){return $=e})),e(G,"log",(function(){return V}),(function(e){return V=e})),e(G,"createFrame",(function(){return q}),(function(e){return q=e})),e(G,"logger",(function(){return z}),(function(e){return z=e})),U=!0,j=Ze;var W,J,X,Y,Q,Z,ee,te,ne,re,ie,se={};e(se,"__esModule",(function(){return W}),(function(e){return W=e})),e(se,"extend",(function(){return J}),(function(e){return J=e})),e(se,"indexOf",(function(){return X}),(function(e){return X=e})),e(se,"escapeExpression",(function(){return Y}),(function(e){return Y=e})),e(se,"isEmpty",(function(){return Q}),(function(e){return Q=e})),e(se,"createFrame",(function(){return Z}),(function(e){return Z=e})),e(se,"blockParams",(function(){return ee}),(function(e){return ee=e})),e(se,"appendContextPath",(function(){return te}),(function(e){return te=e})),e(se,"toString",(function(){return ne}),(function(e){return ne=e})),e(se,"isFunction",(function(){return re}),(function(e){return re=e})),e(se,"isArray",(function(){return ie}),(function(e){return ie=e})),W=!0,J=ue,X=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},Y=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return le.test(e)?e.replace(ae,ce):e},Q=function(e){return!e&&0!==e||!(!de(e)||0!==e.length)},Z=function(e){var t=ue({},e);return t._parent=e,t},ee=function(e,t){return e.path=t,e},te=function(e,t){return(e?e+".":"")+t};var oe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},ae=/[&<>"'`=]/g,le=/[&<>"'`=]/;function ce(e){return oe[e]}function ue(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}var he=Object.prototype.toString;ne=he;var pe=function(e){return"function"==typeof e};pe(/x/)&&(re=pe=function(e){return"function"==typeof e&&"[object Function]"===he.call(e)}),re=pe;var de=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===he.call(e)};ie=de;var fe={__esModule:!0},ge=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function me(e,t){var n=t&&t.loc,r=void 0,i=void 0,s=void 0,o=void 0;n&&(r=n.start.line,i=n.end.line,s=n.start.column,o=n.end.column,e+=" - "+r+":"+s);for(var a=Error.prototype.constructor.call(this,e),l=0;l<ge.length;l++)this[ge[l]]=a[ge[l]];Error.captureStackTrace&&Error.captureStackTrace(this,me);try{n&&(this.lineNumber=r,this.endLineNumber=i,Object.defineProperty?(Object.defineProperty(this,"column",{value:s,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:o,enumerable:!0})):(this.column=s,this.endColumn=o))}catch(e){}}me.prototype=new Error,fe.default=me;var ve,ye,_e=K(fe=fe.default);function be(e){return e&&e.__esModule?e:{default:e}}ve=function(e){Se.default(e),Te.default(e),Ae.default(e),Re.default(e),Me.default(e),xe.default(e),Be.default(e)},ye=function(e,t,n){e.helpers[t]&&(e.hooks[t]=e.helpers[t],n||delete e.helpers[t])};var we={__esModule:!0,default:function(e){e.registerHelper("blockHelperMissing",(function(t,n){var r=n.inverse,i=n.fn;if(!0===t)return i(this);if(!1===t||null==t)return r(this);if(ie(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):r(this);if(n.data&&n.ids){var s=Z(n.data);s.contextPath=te(n.data.contextPath,n.name),n={data:s}}return i(t,n)}))}},Se=be(we=we.default),ke={};ke.__esModule=!0;var Ee,Ie=(Ee=fe)&&Ee.__esModule?Ee:{default:Ee};ke.default=function(e){e.registerHelper("each",(function(e,t){if(!t)throw new Ie.default("Must pass iterator to #each");var r,i=t.fn,s=t.inverse,o=0,a="",l=void 0,c=void 0;function u(t,n,r){l&&(l.key=t,l.index=n,l.first=0===n,l.last=!!r,c&&(l.contextPath=c+t)),a+=i(e[t],{data:l,blockParams:ee([e[t],t],[c+t,null])})}if(t.data&&t.ids&&(c=te(t.data.contextPath,t.ids[0])+"."),re(e)&&(e=e.call(this)),t.data&&(l=Z(t.data)),e&&"object"==typeof e)if(ie(e))for(var h=e.length;o<h;o++)o in e&&u(o,o,o===e.length-1);else if(n.Symbol&&e[n.Symbol.iterator]){for(var p=[],d=e[n.Symbol.iterator](),f=d.next();!f.done;f=d.next())p.push(f.value);for(h=(e=p).length;o<h;o++)u(o,o,o===e.length-1)}else r=void 0,Object.keys(e).forEach((function(e){void 0!==r&&u(r,o-1),r=e,o++})),void 0!==r&&u(r,o-1,!0);return 0===o&&(a=s(this)),a}))};var Te=be(ke=ke.default),Ce={};Ce.__esModule=!0;var Le=function(e){return e&&e.__esModule?e:{default:e}}(fe);Ce.default=function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new Le.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))};var Ae=be(Ce=Ce.default),Pe={};Pe.__esModule=!0;var Oe=function(e){return e&&e.__esModule?e:{default:e}}(fe);Pe.default=function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new Oe.default("#if requires exactly one argument");return re(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||Q(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,n){if(2!=arguments.length)throw new Oe.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}))};var Re=be(Pe=Pe.default),Ne={__esModule:!0,default:function(e){e.registerHelper("log",(function(){for(var t=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)t.push(arguments[r]);var i=1;null!=n.hash.level?i=n.hash.level:n.data&&null!=n.data.level&&(i=n.data.level),t[0]=i,e.log.apply(e,t)}))}},Me=be(Ne=Ne.default),De={__esModule:!0,default:function(e){e.registerHelper("lookup",(function(e,t,n){return e?n.lookupProperty(e,t):e}))}},xe=be(De=De.default),Ue={};Ue.__esModule=!0;var je=function(e){return e&&e.__esModule?e:{default:e}}(fe);Ue.default=function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new je.default("#with requires exactly one argument");re(e)&&(e=e.call(this));var n=t.fn;if(Q(e))return t.inverse(this);var r=t.data;return t.data&&t.ids&&((r=Z(t.data)).contextPath=te(t.data.contextPath,t.ids[0])),n(e,{data:r,blockParams:ee([e],[r&&r.contextPath])})}))};var Fe,Be=be(Ue=Ue.default);Fe=function(e){$e.default(e)};var He={__esModule:!0,default:function(e){e.registerDecorator("inline",(function(e,t,n,r){var i=e;return t.partials||(t.partials={},i=function(r,i){var s=n.partials;n.partials=J({},s,t.partials);var o=e(r,i);return n.partials=s,o}),t.partials[r.args[0]]=r.fn,i}))}},$e=function(e){return e&&e.__esModule?e:{default:e}}(He=He.default);var Ve={__esModule:!0},qe={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=X(qe.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=qe.lookupLevel(e),"undefined"!=typeof console&&qe.lookupLevel(qe.level)<=e){var t=qe.methodMap[e];console[t]||(t="log");for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];console[t].apply(console,r)}}};Ve.default=qe;var ze,Ge,Ke,We,Je=K(Ve=Ve.default);ze=function(e){var t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var n=Object.create(null);return n.__proto__=!1,{properties:{whitelist:We(n,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:We(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},Ge=function(e,t,n){return Qe("function"==typeof e?t.methods:t.properties,n)},Ke=function(){Object.keys(Ye).forEach((function(e){delete Ye[e]}))},We=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return J.apply(void 0,[Object.create(null)].concat(t))};var Xe=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(Ve),Ye=Object.create(null);function Qe(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==Ye[e]&&(Ye[e]=!0,Xe.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}F="4.7.7";B=8;H=7;$={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function Ze(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},ve(this),Fe(this)}Ze.prototype={constructor:Ze,logger:Je.default,log:Je.default.log,registerHelper:function(e,t){if("[object Object]"===ne.call(e)){if(t)throw new _e.default("Arg not supported with multiple helpers");J(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===ne.call(e))J(this.partials,e);else{if(void 0===t)throw new _e.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===ne.call(e)){if(t)throw new _e.default("Arg not supported with multiple decorators");J(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){Ke()}};var et=Je.default.log;V=et,q=Z,z=Je.default;var tt=x(G),nt={};function rt(e){this.string=e}nt.__esModule=!0,rt.prototype.toString=rt.prototype.toHTML=function(){return""+this.string},nt.default=rt;var it,st,ot,at,lt,ct,ut,ht=D(nt=nt.default),pt=D(fe),dt=x(se),ft={};e(ft,"__esModule",(function(){return it}),(function(e){return it=e})),e(ft,"checkRevision",(function(){return st}),(function(e){return st=e})),e(ft,"template",(function(){return ot}),(function(e){return ot=e})),e(ft,"wrapProgram",(function(){return at}),(function(e){return at=e})),e(ft,"resolvePartial",(function(){return lt}),(function(e){return lt=e})),e(ft,"invokePartial",(function(){return ct}),(function(e){return ct=e})),e(ft,"noop",(function(){return ut}),(function(e){return ut=e})),it=!0,st=function(e){var t=e&&e[0]||1,n=B;if(t>=H&&t<=B)return;if(t<H){var r=$[n],i=$[t];throw new vt.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+i+").")}throw new vt.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")},ot=function(e,t){if(!t)throw new vt.default("No environment passed to template");if(!e||!e.main)throw new vt.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var n=e.compiler&&7===e.compiler[0];var r={strict:function(e,t,n){if(!e||!(t in e))throw new vt.default('"'+t+'" not defined in '+e,{loc:n});return r.lookupProperty(e,t)},lookupProperty:function(e,t){var n=e[t];return null==n||Object.prototype.hasOwnProperty.call(e,t)||Ge(n,r.protoAccessControl,t)?n:void 0},lookup:function(e,t){for(var n=e.length,i=0;i<n;i++){if(null!=(e[i]&&r.lookupProperty(e[i],t)))return e[i][t]}},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:mt.escapeExpression,invokePartial:function(n,r,i){i.hash&&(r=mt.extend({},r,i.hash),i.ids&&(i.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,r,i);var s=mt.extend({},i,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),o=t.VM.invokePartial.call(this,n,r,s);if(null==o&&t.compile&&(i.partials[i.name]=t.compile(n,e.compilerOptions,t),o=i.partials[i.name](r,s)),null!=o){if(i.indent){for(var a=o.split("\n"),l=0,c=a.length;l<c&&(a[l]||l+1!==c);l++)a[l]=i.indent+a[l];o=a.join("\n")}return o}throw new vt.default("The partial "+i.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,i){var s=this.programs[e],o=this.fn(e);return t||i||r||n?s=yt(this,e,o,t,n,r,i):s||(s=this.programs[e]=yt(this,e,o)),s},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=mt.extend({},t,e)),n},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function i(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=n.data;i._setup(n),!n.partial&&e.useData&&(s=bt(t,s));var o=void 0,a=e.useBlockParams?[]:void 0;function l(t){return""+e.main(r,t,r.helpers,r.partials,s,a,o)}return e.useDepths&&(o=n.depths?t!=n.depths[0]?[t].concat(n.depths):n.depths:[t]),(l=wt(e.main,l,r,n.depths||[],s,a))(t,n)}return i.isTop=!0,i._setup=function(i){if(i.partial)r.protoAccessControl=i.protoAccessControl,r.helpers=i.helpers,r.partials=i.partials,r.decorators=i.decorators,r.hooks=i.hooks;else{var s=mt.extend({},t.helpers,i.helpers);!function(e,t){Object.keys(e).forEach((function(n){var r=e[n];e[n]=function(e,t){var n=t.lookupProperty;return gt(e,(function(e){return mt.extend({lookupProperty:n},e)}))}(r,t)}))}(s,r),r.helpers=s,e.usePartial&&(r.partials=r.mergeIfNeeded(i.partials,t.partials)),(e.usePartial||e.useDecorators)&&(r.decorators=mt.extend({},t.decorators,i.decorators)),r.hooks={},r.protoAccessControl=ze(i);var o=i.allowCallsToHelperMissing||n;ye(r,"helperMissing",o),ye(r,"blockHelperMissing",o)}},i._child=function(t,n,i,s){if(e.useBlockParams&&!i)throw new vt.default("must pass block params");if(e.useDepths&&!s)throw new vt.default("must pass parent depths");return yt(r,t,e[t],n,0,i,s)},i},at=yt,lt=function(e,t,n){e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return e},ct=function(e,t,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var i=void 0;n.fn&&n.fn!==_t&&function(){n.data=q(n.data);var e=n.fn;i=n.data["partial-block"]=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=q(n.data),n.data["partial-block"]=r,e(t,n)},e.partials&&(n.partials=mt.extend({},n.partials,e.partials))}();void 0===e&&i&&(e=i);if(void 0===e)throw new vt.default("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)},ut=_t;var gt,mt=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(se),vt=function(e){return e&&e.__esModule?e:{default:e}}(fe);function yt(e,t,n,r,i,s,o){function a(t){var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=o;return!o||t==o[0]||t===e.nullContext&&null===o[0]||(a=[t].concat(o)),n(e,t,e.helpers,e.partials,i.data||r,s&&[i.blockParams].concat(s),a)}return(a=wt(n,a,e,o,r,s)).program=t,a.depth=o?o.length:0,a.blockParams=i||0,a}function _t(){return""}function bt(e,t){return t&&"root"in t||((t=t?q(t):{}).root=e),t}function wt(e,t,n,r,i,s){if(e.decorator){var o={};t=e.decorator(t,o,n,r&&r[0],i,s,r),mt.extend(t,o)}return t}gt=function(e,t){if("function"!=typeof e)return e;return function(){return arguments[arguments.length-1]=t(arguments[arguments.length-1]),e.apply(this,arguments)}};var St=x(ft),kt={__esModule:!0,default:function(e){var t=void 0!==n?n:window,r=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=r),e}}},Et=D(kt=kt.default);function It(){var e=new tt.HandlebarsEnvironment;return dt.extend(e,tt),e.SafeString=ht.default,e.Exception=pt.default,e.Utils=dt,e.escapeExpression=dt.escapeExpression,e.VM=St,e.template=function(t){return St.template(t,e)},e}var Tt=It();Tt.create=It,Et.default(Tt),Tt.default=Tt,M.default=Tt;var Ct=N(M=M.default),Lt={__esModule:!0},At={helpers:{helperExpression:function(e){return"SubExpression"===e.type||("MustacheStatement"===e.type||"BlockStatement"===e.type)&&!!(e.params&&e.params.length||e.hash)},scopedId:function(e){return/^\.|this\b/.test(e.original)},simpleId:function(e){return 1===e.parts.length&&!At.helpers.scopedId(e)&&!e.depth}}};Lt.default=At;var Pt,Ot,Rt,Nt=N(Lt=Lt.default);function Mt(e){return e&&e.__esModule?e:{default:e}}Pt=yn,Ot=function(e,t){var n=yn(e,t);return new cn.default(t).accept(n)};var Dt={__esModule:!0},xt=function(){var e={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(e,t,n,r,i,s,o){var a=s.length-1;switch(i){case 1:return s[a-1];case 2:this.$=r.prepareProgram(s[a]);break;case 3:case 4:case 5:case 6:case 7:case 8:case 20:case 27:case 28:case 33:case 34:case 40:case 41:this.$=s[a];break;case 9:this.$={type:"CommentStatement",value:r.stripComment(s[a]),strip:r.stripFlags(s[a],s[a]),loc:r.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:s[a],value:s[a],loc:r.locInfo(this._$)};break;case 11:this.$=r.prepareRawBlock(s[a-2],s[a-1],s[a],this._$);break;case 12:this.$={path:s[a-3],params:s[a-2],hash:s[a-1]};break;case 13:this.$=r.prepareBlock(s[a-3],s[a-2],s[a-1],s[a],!1,this._$);break;case 14:this.$=r.prepareBlock(s[a-3],s[a-2],s[a-1],s[a],!0,this._$);break;case 15:this.$={open:s[a-5],path:s[a-4],params:s[a-3],hash:s[a-2],blockParams:s[a-1],strip:r.stripFlags(s[a-5],s[a])};break;case 16:case 17:this.$={path:s[a-4],params:s[a-3],hash:s[a-2],blockParams:s[a-1],strip:r.stripFlags(s[a-5],s[a])};break;case 18:this.$={strip:r.stripFlags(s[a-1],s[a-1]),program:s[a]};break;case 19:var l=r.prepareBlock(s[a-2],s[a-1],s[a],s[a],!1,this._$),c=r.prepareProgram([l],s[a-1].loc);c.chained=!0,this.$={strip:s[a-2].strip,program:c,chain:!0};break;case 21:this.$={path:s[a-1],strip:r.stripFlags(s[a-2],s[a])};break;case 22:case 23:this.$=r.prepareMustache(s[a-3],s[a-2],s[a-1],s[a-4],r.stripFlags(s[a-4],s[a]),this._$);break;case 24:this.$={type:"PartialStatement",name:s[a-3],params:s[a-2],hash:s[a-1],indent:"",strip:r.stripFlags(s[a-4],s[a]),loc:r.locInfo(this._$)};break;case 25:this.$=r.preparePartialBlock(s[a-2],s[a-1],s[a],this._$);break;case 26:this.$={path:s[a-3],params:s[a-2],hash:s[a-1],strip:r.stripFlags(s[a-4],s[a])};break;case 29:this.$={type:"SubExpression",path:s[a-3],params:s[a-2],hash:s[a-1],loc:r.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:s[a],loc:r.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:r.id(s[a-2]),value:s[a],loc:r.locInfo(this._$)};break;case 32:this.$=r.id(s[a-1]);break;case 35:this.$={type:"StringLiteral",value:s[a],original:s[a],loc:r.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(s[a]),original:Number(s[a]),loc:r.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:"true"===s[a],original:"true"===s[a],loc:r.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:r.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:r.locInfo(this._$)};break;case 42:this.$=r.preparePath(!0,s[a],this._$);break;case 43:this.$=r.preparePath(!1,s[a],this._$);break;case 44:s[a-2].push({part:r.id(s[a]),original:s[a],separator:s[a-1]}),this.$=s[a-2];break;case 45:this.$=[{part:r.id(s[a]),original:s[a]}];break;case 46:case 48:case 50:case 58:case 64:case 70:case 78:case 82:case 86:case 90:case 94:this.$=[];break;case 47:case 49:case 51:case 59:case 65:case 71:case 79:case 83:case 87:case 91:case 95:case 99:case 101:s[a-1].push(s[a]);break;case 98:case 100:this.$=[s[a]]}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(e,t){throw new Error(e)},parse:function(e){var t=this,n=[0],r=[null],i=[],s=this.table,o="",a=0,l=0,c=0;this.lexer.setInput(e),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,void 0===this.lexer.yylloc&&(this.lexer.yylloc={});var u=this.lexer.yylloc;i.push(u);var h=this.lexer.options&&this.lexer.options.ranges;"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var p,d,f,g,m,v,y,_,b,w,S={};;){if(f=n[n.length-1],this.defaultActions[f]?g=this.defaultActions[f]:(null==p&&(w=void 0,"number"!=typeof(w=t.lexer.lex()||1)&&(w=t.symbols_[w]||w),p=w),g=s[f]&&s[f][p]),void 0===g||!g.length||!g[0]){var k="";if(!c){for(v in b=[],s[f])this.terminals_[v]&&v>2&&b.push("'"+this.terminals_[v]+"'");k=this.lexer.showPosition?"Parse error on line "+(a+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+b.join(", ")+", got '"+(this.terminals_[p]||p)+"'":"Parse error on line "+(a+1)+": Unexpected "+(1==p?"end of input":"'"+(this.terminals_[p]||p)+"'"),this.parseError(k,{text:this.lexer.match,token:this.terminals_[p]||p,line:this.lexer.yylineno,loc:u,expected:b})}}if(g[0]instanceof Array&&g.length>1)throw new Error("Parse Error: multiple actions possible at state: "+f+", token: "+p);switch(g[0]){case 1:n.push(p),r.push(this.lexer.yytext),i.push(this.lexer.yylloc),n.push(g[1]),p=null,d?(p=d,d=null):(l=this.lexer.yyleng,o=this.lexer.yytext,a=this.lexer.yylineno,u=this.lexer.yylloc,c>0&&c--);break;case 2:if(y=this.productions_[g[1]][1],S.$=r[r.length-y],S._$={first_line:i[i.length-(y||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(y||1)].first_column,last_column:i[i.length-1].last_column},h&&(S._$.range=[i[i.length-(y||1)].range[0],i[i.length-1].range[1]]),void 0!==(m=this.performAction.call(S,o,l,a,this.yy,g[1],r,i)))return m;y&&(n=n.slice(0,-1*y*2),r=r.slice(0,-1*y),i=i.slice(0,-1*y)),n.push(this.productions_[g[1]][0]),r.push(S.$),i.push(S._$),_=s[n[n.length-2]][n[n.length-1]],n.push(_);break;case 3:return!0}}return!0}},t={EOF:1,parseError:function(e,t){if(!this.yy.parser)throw new Error(e);this.yy.parser.parseError(e,t)},setInput:function(e){return this._input=e,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},unput:function(e){var t=e.length,n=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t-1),this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-t]),this},more:function(){return this._more=!0,this},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput(),t=new Array(e.length+1).join("-");return e+this.upcomingInput()+"\n"+t+"^"},next:function(){if(this.done)return this.EOF;var e,t,n,r,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),o=0;o<s.length&&(!(n=this._input.match(this.rules[s[o]]))||t&&!(n[0].length>t[0].length)||(t=n,r=o,this.options.flex));o++);return t?((i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],e=this.performAction.call(this,this.yy,this,s[r],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),e||void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var e=this.next();return void 0!==e?e:this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(e){this.begin(e)},options:{},performAction:function(e,t,n,r){function i(e,n){return t.yytext=t.yytext.substring(e,t.yyleng-n+e)}switch(n){case 0:if("\\\\"===t.yytext.slice(-2)?(i(0,1),this.begin("mu")):"\\"===t.yytext.slice(-1)?(i(0,1),this.begin("emu")):this.begin("mu"),t.yytext)return 15;break;case 1:case 5:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),"raw"===this.conditionStack[this.conditionStack.length-1]?15:(i(5,9),"END_RAW_BLOCK");case 6:case 22:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:case 23:return 48;case 21:this.unput(t.yytext),this.popState(),this.begin("com");break;case 24:return 73;case 25:case 26:case 41:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return t.yytext=i(1,2).replace(/\\"/g,'"'),80;case 32:return t.yytext=i(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 42:return t.yytext=t.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},rules:[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],conditions:{mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}}};function n(){this.yy={}}return e.lexer=t,n.prototype=e,e.Parser=n,new n}();Dt.default=xt;var Ut=Mt(Dt=Dt.default),jt={};jt.__esModule=!0;var Ft={};Ft.__esModule=!0;var Bt=function(e){return e&&e.__esModule?e:{default:e}}(fe);function Ht(){this.parents=[]}function $t(e){this.acceptRequired(e,"path"),this.acceptArray(e.params),this.acceptKey(e,"hash")}function Vt(e){$t.call(this,e),this.acceptKey(e,"program"),this.acceptKey(e,"inverse")}function qt(e){this.acceptRequired(e,"name"),this.acceptArray(e.params),this.acceptKey(e,"hash")}Ht.prototype={constructor:Ht,mutating:!1,acceptKey:function(e,t){var n=this.accept(e[t]);if(this.mutating){if(n&&!Ht.prototype[n.type])throw new Bt.default('Unexpected node type "'+n.type+'" found when accepting '+t+" on "+e.type);e[t]=n}},acceptRequired:function(e,t){if(this.acceptKey(e,t),!e[t])throw new Bt.default(e.type+" requires "+t)},acceptArray:function(e){for(var t=0,n=e.length;t<n;t++)this.acceptKey(e,t),e[t]||(e.splice(t,1),t--,n--)},accept:function(e){if(e){if(!this[e.type])throw new Bt.default("Unknown type: "+e.type,e);this.current&&this.parents.unshift(this.current),this.current=e;var t=this[e.type](e);return this.current=this.parents.shift(),!this.mutating||t?t:!1!==t?e:void 0}},Program:function(e){this.acceptArray(e.body)},MustacheStatement:$t,Decorator:$t,BlockStatement:Vt,DecoratorBlock:Vt,PartialStatement:qt,PartialBlockStatement:function(e){qt.call(this,e),this.acceptKey(e,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:$t,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(e){this.acceptArray(e.pairs)},HashPair:function(e){this.acceptRequired(e,"value")}},Ft.default=Ht;var zt=function(e){return e&&e.__esModule?e:{default:e}}(Ft=Ft.default);function Gt(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.options=e}function Kt(e,t,n){void 0===t&&(t=e.length);var r=e[t-1],i=e[t-2];return r?"ContentStatement"===r.type?(i||!n?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(r.original):void 0:n}function Wt(e,t,n){void 0===t&&(t=-1);var r=e[t+1],i=e[t+2];return r?"ContentStatement"===r.type?(i||!n?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(r.original):void 0:n}function Jt(e,t,n){var r=e[null==t?0:t+1];if(r&&"ContentStatement"===r.type&&(n||!r.rightStripped)){var i=r.value;r.value=r.value.replace(n?/^\s+/:/^[ \t]*\r?\n?/,""),r.rightStripped=r.value!==i}}function Xt(e,t,n){var r=e[null==t?e.length-1:t-1];if(r&&"ContentStatement"===r.type&&(n||!r.leftStripped)){var i=r.value;return r.value=r.value.replace(n?/\s+$/:/[ \t]+$/,""),r.leftStripped=r.value!==i,r.leftStripped}}Gt.prototype=new zt.default,Gt.prototype.Program=function(e){var t=!this.options.ignoreStandalone,n=!this.isRootSeen;this.isRootSeen=!0;for(var r=e.body,i=0,s=r.length;i<s;i++){var o=r[i],a=this.accept(o);if(a){var l=Kt(r,i,n),c=Wt(r,i,n),u=a.openStandalone&&l,h=a.closeStandalone&&c,p=a.inlineStandalone&&l&&c;a.close&&Jt(r,i,!0),a.open&&Xt(r,i,!0),t&&p&&(Jt(r,i),Xt(r,i)&&"PartialStatement"===o.type&&(o.indent=/([ \t]+$)/.exec(r[i-1].original)[1])),t&&u&&(Jt((o.program||o.inverse).body),Xt(r,i)),t&&h&&(Jt(r,i),Xt((o.inverse||o.program).body))}}return e},Gt.prototype.BlockStatement=Gt.prototype.DecoratorBlock=Gt.prototype.PartialBlockStatement=function(e){this.accept(e.program),this.accept(e.inverse);var t=e.program||e.inverse,n=e.program&&e.inverse,r=n,i=n;if(n&&n.chained)for(r=n.body[0].program;i.chained;)i=i.body[i.body.length-1].program;var s={open:e.openStrip.open,close:e.closeStrip.close,openStandalone:Wt(t.body),closeStandalone:Kt((r||t).body)};if(e.openStrip.close&&Jt(t.body,null,!0),n){var o=e.inverseStrip;o.open&&Xt(t.body,null,!0),o.close&&Jt(r.body,null,!0),e.closeStrip.open&&Xt(i.body,null,!0),!this.options.ignoreStandalone&&Kt(t.body)&&Wt(r.body)&&(Xt(t.body),Jt(r.body))}else e.closeStrip.open&&Xt(t.body,null,!0);return s},Gt.prototype.Decorator=Gt.prototype.MustacheStatement=function(e){return e.strip},Gt.prototype.PartialStatement=Gt.prototype.CommentStatement=function(e){var t=e.strip||{};return{inlineStandalone:!0,open:t.open,close:t.close}},jt.default=Gt;var Yt,Qt,Zt,en,tn,nn,rn,sn,on,an,ln,cn=Mt(jt=jt.default),un={};e(un,"__esModule",(function(){return Yt}),(function(e){return Yt=e})),e(un,"SourceLocation",(function(){return Qt}),(function(e){return Qt=e})),e(un,"id",(function(){return Zt}),(function(e){return Zt=e})),e(un,"stripFlags",(function(){return en}),(function(e){return en=e})),e(un,"stripComment",(function(){return tn}),(function(e){return tn=e})),e(un,"preparePath",(function(){return nn}),(function(e){return nn=e})),e(un,"prepareMustache",(function(){return rn}),(function(e){return rn=e})),e(un,"prepareRawBlock",(function(){return sn}),(function(e){return sn=e})),e(un,"prepareBlock",(function(){return on}),(function(e){return on=e})),e(un,"prepareProgram",(function(){return an}),(function(e){return an=e})),e(un,"preparePartialBlock",(function(){return ln}),(function(e){return ln=e})),Yt=!0,Qt=function(e,t){this.source=e,this.start={line:t.first_line,column:t.first_column},this.end={line:t.last_line,column:t.last_column}},Zt=function(e){return/^\[.*\]$/.test(e)?e.substring(1,e.length-1):e},en=function(e,t){return{open:"~"===e.charAt(2),close:"~"===t.charAt(t.length-3)}},tn=function(e){return e.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")},nn=function(e,t,n){n=this.locInfo(n);for(var r=e?"@":"",i=[],s=0,o=0,a=t.length;o<a;o++){var l=t[o].part,c=t[o].original!==l;if(r+=(t[o].separator||"")+l,c||".."!==l&&"."!==l&&"this"!==l)i.push(l);else{if(i.length>0)throw new hn.default("Invalid path: "+r,{loc:n});".."===l&&s++}}return{type:"PathExpression",data:e,depth:s,parts:i,original:r,loc:n}},rn=function(e,t,n,r,i,s){var o=r.charAt(3)||r.charAt(2),a="{"!==o&&"&"!==o;return{type:/\*/.test(r)?"Decorator":"MustacheStatement",path:e,params:t,hash:n,escaped:a,strip:i,loc:this.locInfo(s)}},sn=function(e,t,n,r){pn(e,n),r=this.locInfo(r);var i={type:"Program",body:t,strip:{},loc:r};return{type:"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:i,openStrip:{},inverseStrip:{},closeStrip:{},loc:r}},on=function(e,t,n,r,i,s){r&&r.path&&pn(e,r);var o=/\*/.test(e.open);t.blockParams=e.blockParams;var a=void 0,l=void 0;if(n){if(o)throw new hn.default("Unexpected inverse block on decorator",n);n.chain&&(n.program.body[0].closeStrip=r.strip),l=n.strip,a=n.program}i&&(i=a,a=t,t=i);return{type:o?"DecoratorBlock":"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:t,inverse:a,openStrip:e.strip,inverseStrip:l,closeStrip:r&&r.strip,loc:this.locInfo(s)}},an=function(e,t){if(!t&&e.length){var n=e[0].loc,r=e[e.length-1].loc;n&&r&&(t={source:n.source,start:{line:n.start.line,column:n.start.column},end:{line:r.end.line,column:r.end.column}})}return{type:"Program",body:e,strip:{},loc:t}},ln=function(e,t,n,r){return pn(e,n),{type:"PartialBlockStatement",name:e.path,params:e.params,hash:e.hash,program:t,openStrip:e.strip,closeStrip:n&&n.strip,loc:this.locInfo(r)}};var hn=function(e){return e&&e.__esModule?e:{default:e}}(fe);function pn(e,t){if(t=t.path?t.path.original:t,e.path.original!==t){var n={loc:e.path.loc};throw new hn.default(e.path.original+" doesn't match "+t,n)}}var dn=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(un);Rt=Ut.default;var fn,gn,mn,vn={};function yn(e,t){return"Program"===e.type?e:(Ut.default.yy=vn,vn.locInfo=function(e){return new vn.SourceLocation(t&&t.srcName,e)},Ut.default.parse(e))}function _n(e){return e&&e.__esModule?e:{default:e}}J(vn,dn),fn=kn,gn=function(e,t,n){if(null==e||"string"!=typeof e&&"Program"!==e.type)throw new bn.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+e);"data"in(t=t||{})||(t.data=!0);t.compat&&(t.useDepths=!0);var r=n.parse(e,t),i=(new n.Compiler).compile(r,t);return(new n.JavaScriptCompiler).compile(i,t)},mn=function(e,t,n){void 0===t&&(t={});if(null==e||"string"!=typeof e&&"Program"!==e.type)throw new bn.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+e);"data"in(t=J({},t))||(t.data=!0);t.compat&&(t.useDepths=!0);var r=void 0;function i(){var r=n.parse(e,t),i=(new n.Compiler).compile(r,t),s=(new n.JavaScriptCompiler).compile(i,t,void 0,!0);return n.template(s)}function s(e,t){return r||(r=i()),r.call(this,e,t)}return s._setup=function(e){return r||(r=i()),r._setup(e)},s._child=function(e,t,n,s){return r||(r=i()),r._child(e,t,n,s)},s};var bn=_n(fe),wn=_n(Lt),Sn=[].slice;function kn(){}function En(e,t){if(e===t)return!0;if(ie(e)&&ie(t)&&e.length===t.length){for(var n=0;n<e.length;n++)if(!En(e[n],t[n]))return!1;return!0}}function In(e){if(!e.path.parts){var t=e.path;e.path={type:"PathExpression",data:!1,depth:0,parts:[t.original+""],original:t.original+"",loc:t.loc}}}kn.prototype={compiler:kn,equals:function(e){var t=this.opcodes.length;if(e.opcodes.length!==t)return!1;for(var n=0;n<t;n++){var r=this.opcodes[n],i=e.opcodes[n];if(r.opcode!==i.opcode||!En(r.args,i.args))return!1}t=this.children.length;for(n=0;n<t;n++)if(!this.children[n].equals(e.children[n]))return!1;return!0},guid:0,compile:function(e,t){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=t,this.stringParams=t.stringParams,this.trackIds=t.trackIds,t.blockParams=t.blockParams||[],t.knownHelpers=J(Object.create(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},t.knownHelpers),this.accept(e)},compileProgram:function(e){var t=(new this.compiler).compile(e,this.options),n=this.guid++;return this.usePartial=this.usePartial||t.usePartial,this.children[n]=t,this.useDepths=this.useDepths||t.useDepths,n},accept:function(e){if(!this[e.type])throw new bn.default("Unknown type: "+e.type,e);this.sourceNode.unshift(e);var t=this[e.type](e);return this.sourceNode.shift(),t},Program:function(e){this.options.blockParams.unshift(e.blockParams);for(var t=e.body,n=t.length,r=0;r<n;r++)this.accept(t[r]);return this.options.blockParams.shift(),this.isSimple=1===n,this.blockParams=e.blockParams?e.blockParams.length:0,this},BlockStatement:function(e){In(e);var t=e.program,n=e.inverse;t=t&&this.compileProgram(t),n=n&&this.compileProgram(n);var r=this.classifySexpr(e);"helper"===r?this.helperSexpr(e,t,n):"simple"===r?(this.simpleSexpr(e),this.opcode("pushProgram",t),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("blockValue",e.path.original)):(this.ambiguousSexpr(e,t,n),this.opcode("pushProgram",t),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(e){var t=e.program&&this.compileProgram(e.program),n=this.setupFullMustacheParams(e,t,void 0),r=e.path;this.useDecorators=!0,this.opcode("registerDecorator",n.length,r.original)},PartialStatement:function(e){this.usePartial=!0;var t=e.program;t&&(t=this.compileProgram(e.program));var n=e.params;if(n.length>1)throw new bn.default("Unsupported number of partial arguments: "+n.length,e);n.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):n.push({type:"PathExpression",parts:[],depth:0}));var r=e.name.original,i="SubExpression"===e.name.type;i&&this.accept(e.name),this.setupFullMustacheParams(e,t,void 0,!0);var s=e.indent||"";this.options.preventIndent&&s&&(this.opcode("appendContent",s),s=""),this.opcode("invokePartial",i,r,s),this.opcode("append")},PartialBlockStatement:function(e){this.PartialStatement(e)},MustacheStatement:function(e){this.SubExpression(e),e.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(e){this.DecoratorBlock(e)},ContentStatement:function(e){e.value&&this.opcode("appendContent",e.value)},CommentStatement:function(){},SubExpression:function(e){In(e);var t=this.classifySexpr(e);"simple"===t?this.simpleSexpr(e):"helper"===t?this.helperSexpr(e):this.ambiguousSexpr(e)},ambiguousSexpr:function(e,t,n){var r=e.path,i=r.parts[0],s=null!=t||null!=n;this.opcode("getContext",r.depth),this.opcode("pushProgram",t),this.opcode("pushProgram",n),r.strict=!0,this.accept(r),this.opcode("invokeAmbiguous",i,s)},simpleSexpr:function(e){var t=e.path;t.strict=!0,this.accept(t),this.opcode("resolvePossibleLambda")},helperSexpr:function(e,t,n){var r=this.setupFullMustacheParams(e,t,n),i=e.path,s=i.parts[0];if(this.options.knownHelpers[s])this.opcode("invokeKnownHelper",r.length,s);else{if(this.options.knownHelpersOnly)throw new bn.default("You specified knownHelpersOnly, but used the unknown helper "+s,e);i.strict=!0,i.falsy=!0,this.accept(i),this.opcode("invokeHelper",r.length,i.original,wn.default.helpers.simpleId(i))}},PathExpression:function(e){this.addDepth(e.depth),this.opcode("getContext",e.depth);var t=e.parts[0],n=wn.default.helpers.scopedId(e),r=!e.depth&&!n&&this.blockParamIndex(t);r?this.opcode("lookupBlockParam",r,e.parts):t?e.data?(this.options.data=!0,this.opcode("lookupData",e.depth,e.parts,e.strict)):this.opcode("lookupOnContext",e.parts,e.falsy,e.strict,n):this.opcode("pushContext")},StringLiteral:function(e){this.opcode("pushString",e.value)},NumberLiteral:function(e){this.opcode("pushLiteral",e.value)},BooleanLiteral:function(e){this.opcode("pushLiteral",e.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(e){var t=e.pairs,n=0,r=t.length;for(this.opcode("pushHash");n<r;n++)this.pushParam(t[n].value);for(;n--;)this.opcode("assignToHash",t[n].key);this.opcode("popHash")},opcode:function(e){this.opcodes.push({opcode:e,args:Sn.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(e){e&&(this.useDepths=!0)},classifySexpr:function(e){var t=wn.default.helpers.simpleId(e.path),n=t&&!!this.blockParamIndex(e.path.parts[0]),r=!n&&wn.default.helpers.helperExpression(e),i=!n&&(r||t);if(i&&!r){var s=e.path.parts[0],o=this.options;o.knownHelpers[s]?r=!0:o.knownHelpersOnly&&(i=!1)}return r?"helper":i?"ambiguous":"simple"},pushParams:function(e){for(var t=0,n=e.length;t<n;t++)this.pushParam(e[t])},pushParam:function(e){var t=null!=e.value?e.value:e.original||"";if(this.stringParams)t.replace&&(t=t.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),e.depth&&this.addDepth(e.depth),this.opcode("getContext",e.depth||0),this.opcode("pushStringParam",t,e.type),"SubExpression"===e.type&&this.accept(e);else{if(this.trackIds){var n=void 0;if(!e.parts||wn.default.helpers.scopedId(e)||e.depth||(n=this.blockParamIndex(e.parts[0])),n){var r=e.parts.slice(1).join(".");this.opcode("pushId","BlockParam",n,r)}else(t=e.original||t).replace&&(t=t.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",e.type,t)}this.accept(e)}},setupFullMustacheParams:function(e,t,n,r){var i=e.params;return this.pushParams(i),this.opcode("pushProgram",t),this.opcode("pushProgram",n),e.hash?this.accept(e.hash):this.opcode("emptyHash",r),i},blockParamIndex:function(e){for(var t=0,n=this.options.blockParams.length;t<n;t++){var r=this.options.blockParams[t],i=r&&X(r,e);if(r&&i>=0)return[t,i]}}};var Tn={};function Cn(e){return e&&e.__esModule?e:{default:e}}Tn.__esModule=!0;var Ln=Cn(fe),An={__esModule:!0},Pn=void 0;try{if("function"!=typeof define||!define.amd){var On=s("9QQ9J");Pn=On.SourceNode}}catch(e){}function Rn(e,t,n){if(ie(e)){for(var r=[],i=0,s=e.length;i<s;i++)r.push(t.wrap(e[i],n));return r}return"boolean"==typeof e||"number"==typeof e?e+"":e}function Nn(e){this.srcFile=e,this.source=[]}Pn||((Pn=function(e,t,n,r){this.src="",r&&this.add(r)}).prototype={add:function(e){ie(e)&&(e=e.join("")),this.src+=e},prepend:function(e){ie(e)&&(e=e.join("")),this.src=e+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),Nn.prototype={isEmpty:function(){return!this.source.length},prepend:function(e,t){this.source.unshift(this.wrap(e,t))},push:function(e,t){this.source.push(this.wrap(e,t))},merge:function(){var e=this.empty();return this.each((function(t){e.add(["  ",t,"\n"])})),e},each:function(e){for(var t=0,n=this.source.length;t<n;t++)e(this.source[t])},empty:function(){var e=this.currentLocation||{start:{}};return new Pn(e.start.line,e.start.column,this.srcFile)},wrap:function(e){var t=arguments.length<=1||void 0===arguments[1]?this.currentLocation||{start:{}}:arguments[1];return e instanceof Pn?e:(e=Rn(e,this,t),new Pn(t.start.line,t.start.column,this.srcFile,e))},functionCall:function(e,t,n){return n=this.generateList(n),this.wrap([e,t?"."+t+"(":"(",n,")"])},quotedString:function(e){return'"'+(e+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(e){var t=this,n=[];Object.keys(e).forEach((function(r){var i=Rn(e[r],t);"undefined"!==i&&n.push([t.quotedString(r),":",i])}));var r=this.generateList(n);return r.prepend("{"),r.add("}"),r},generateList:function(e){for(var t=this.empty(),n=0,r=e.length;n<r;n++)n&&t.add(","),t.add(Rn(e[n],this));return t},generateArray:function(e){var t=this.generateList(e);return t.prepend("["),t.add("]"),t}},An.default=Nn;var Mn=Cn(An=An.default);function Dn(e){this.value=e}function xn(){}xn.prototype={nameLookup:function(e,t){return this.internalNameLookup(e,t)},depthedLookup:function(e){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(e),")"]},compilerInfo:function(){return[B,$[B]]},appendToBuffer:function(e,t,n){return ie(e)||(e=[e]),e=this.source.wrap(e,t),this.environment.isSimple?["return ",e,";"]:n?["buffer += ",e,";"]:(e.appendToBuffer=!0,e)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(e,t){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",e,",",JSON.stringify(t),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(e,t,n,r){this.environment=e,this.options=t,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!r,this.name=this.environment.name,this.isChild=!!n,this.context=n||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(e,t),this.useDepths=this.useDepths||e.useDepths||e.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||e.useBlockParams;var i=e.opcodes,s=void 0,o=void 0,a=void 0,l=void 0;for(a=0,l=i.length;a<l;a++)s=i[a],this.source.currentLocation=s.loc,o=o||s.loc,this[s.opcode].apply(this,s.args);if(this.source.currentLocation=o,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new Ln.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),";\n"]),this.decorators.push("return fn;"),r?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"),this.decorators.push("}\n"),this.decorators=this.decorators.merge()));var c=this.createFunctionContext(r);if(this.isChild)return c;var u={compiler:this.compilerInfo(),main:c};this.decorators&&(u.main_d=this.decorators,u.useDecorators=!0);var h=this.context,p=h.programs,d=h.decorators;for(a=0,l=p.length;a<l;a++)p[a]&&(u[a]=p[a],d[a]&&(u[a+"_d"]=d[a],u.useDecorators=!0));return this.environment.usePartial&&(u.usePartial=!0),this.options.data&&(u.useData=!0),this.useDepths&&(u.useDepths=!0),this.useBlockParams&&(u.useBlockParams=!0),this.options.compat&&(u.compat=!0),r?u.compilerOptions=this.options:(u.compiler=JSON.stringify(u.compiler),this.source.currentLocation={start:{line:1,column:0}},u=this.objectLiteral(u),t.srcName?(u=u.toStringWithSourceMap({file:t.destName})).map=u.map&&u.map.toString():u=u.toString()),u},preamble:function(){this.lastContext=0,this.source=new Mn.default(this.options.srcName),this.decorators=new Mn.default(this.options.srcName)},createFunctionContext:function(e){var t=this,n="",r=this.stackVars.concat(this.registers.list);r.length>0&&(n+=", "+r.join(", "));var i=0;Object.keys(this.aliases).forEach((function(e){var r=t.aliases[e];r.children&&r.referenceCount>1&&(n+=", alias"+ ++i+"="+e,r.children[0]="alias"+i)})),this.lookupPropertyFunctionIsUsed&&(n+=", "+this.lookupPropertyFunctionVarDeclaration());var s=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&s.push("blockParams"),this.useDepths&&s.push("depths");var o=this.mergeSource(n);return e?(s.push(o),Function.apply(this,s)):this.source.wrap(["function(",s.join(","),") {\n  ",o,"}"])},mergeSource:function(e){var t=this.environment.isSimple,n=!this.forceBuffer,r=void 0,i=void 0,s=void 0,o=void 0;return this.source.each((function(e){e.appendToBuffer?(s?e.prepend("  + "):s=e,o=e):(s&&(i?s.prepend("buffer += "):r=!0,o.add(";"),s=o=void 0),i=!0,t||(n=!1))})),n?s?(s.prepend("return "),o.add(";")):i||this.source.push('return "";'):(e+=", buffer = "+(r?"":this.initializeBuffer()),s?(s.prepend("return buffer + "),o.add(";")):this.source.push("return buffer;")),e&&this.source.prepend("var "+e.substring(2)+(r?"":";\n")),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return"\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    ".trim()},blockValue:function(e){var t=this.aliasable("container.hooks.blockHelperMissing"),n=[this.contextName(0)];this.setupHelperArgs(e,0,n);var r=this.popStack();n.splice(1,0,r),this.push(this.source.functionCall(t,"call",n))},ambiguousBlockValue:function(){var e=this.aliasable("container.hooks.blockHelperMissing"),t=[this.contextName(0)];this.setupHelperArgs("",0,t,!0),this.flushInline();var n=this.topStack();t.splice(1,0,n),this.pushSource(["if (!",this.lastHelper,") { ",n," = ",this.source.functionCall(e,"call",t),"}"])},appendContent:function(e){this.pendingContent?e=this.pendingContent+e:this.pendingLocation=this.source.currentLocation,this.pendingContent=e},append:function(){if(this.isInline())this.replaceStack((function(e){return[" != null ? ",e,' : ""']})),this.pushSource(this.appendToBuffer(this.popStack()));else{var e=this.popStack();this.pushSource(["if (",e," != null) { ",this.appendToBuffer(e,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(e){this.lastContext=e},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(e,t,n,r){var i=0;r||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(e[i++])),this.resolvePath("context",e,i,t,n)},lookupBlockParam:function(e,t){this.useBlockParams=!0,this.push(["blockParams[",e[0],"][",e[1],"]"]),this.resolvePath("context",t,1)},lookupData:function(e,t,n){e?this.pushStackLiteral("container.data(data, "+e+")"):this.pushStackLiteral("data"),this.resolvePath("data",t,0,!0,n)},resolvePath:function(e,t,n,r,i){var s=this;if(this.options.strict||this.options.assumeObjects)this.push(function(e,t,n,r){var i=t.popStack(),s=0,o=n.length;e&&o--;for(;s<o;s++)i=t.nameLookup(i,n[s],r);return e?[t.aliasable("container.strict"),"(",i,", ",t.quotedString(n[s]),", ",JSON.stringify(t.source.currentLocation)," )"]:i}(this.options.strict&&i,this,t,e));else for(var o=t.length;n<o;n++)this.replaceStack((function(i){var o=s.nameLookup(i,t[n],e);return r?[" && ",o]:[" != null ? ",o," : ",i]}))},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(e,t){this.pushContext(),this.pushString(t),"SubExpression"!==t&&("string"==typeof e?this.pushString(e):this.pushStackLiteral(e))},emptyHash:function(e){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(e?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var e=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(e.ids)),this.stringParams&&(this.push(this.objectLiteral(e.contexts)),this.push(this.objectLiteral(e.types))),this.push(this.objectLiteral(e.values))},pushString:function(e){this.pushStackLiteral(this.quotedString(e))},pushLiteral:function(e){this.pushStackLiteral(e)},pushProgram:function(e){null!=e?this.pushStackLiteral(this.programExpression(e)):this.pushStackLiteral(null)},registerDecorator:function(e,t){var n=this.nameLookup("decorators",t,"decorator"),r=this.setupHelperArgs(t,e);this.decorators.push(["fn = ",this.decorators.functionCall(n,"",["fn","props","container",r])," || fn;"])},invokeHelper:function(e,t,n){var r=this.popStack(),i=this.setupHelper(e,t),s=[];n&&s.push(i.name),s.push(r),this.options.strict||s.push(this.aliasable("container.hooks.helperMissing"));var o=["(",this.itemsSeparatedBy(s,"||"),")"],a=this.source.functionCall(o,"call",i.callParams);this.push(a)},itemsSeparatedBy:function(e,t){var n=[];n.push(e[0]);for(var r=1;r<e.length;r++)n.push(t,e[r]);return n},invokeKnownHelper:function(e,t){var n=this.setupHelper(e,t);this.push(this.source.functionCall(n.name,"call",n.callParams))},invokeAmbiguous:function(e,t){this.useRegister("helper");var n=this.popStack();this.emptyHash();var r=this.setupHelper(0,e,t),i=["(","(helper = ",this.lastHelper=this.nameLookup("helpers",e,"helper")," || ",n,")"];this.options.strict||(i[0]="(helper = ",i.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",i,r.paramsInit?["),(",r.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",r.callParams)," : helper))"])},invokePartial:function(e,t,n){var r=[],i=this.setupParams(t,1,r);e&&(t=this.popStack(),delete i.name),n&&(i.indent=JSON.stringify(n)),i.helpers="helpers",i.partials="partials",i.decorators="container.decorators",e?r.unshift(t):r.unshift(this.nameLookup("partials",t,"partial")),this.options.compat&&(i.depths="depths"),i=this.objectLiteral(i),r.push(i),this.push(this.source.functionCall("container.invokePartial","",r))},assignToHash:function(e){var t=this.popStack(),n=void 0,r=void 0,i=void 0;this.trackIds&&(i=this.popStack()),this.stringParams&&(r=this.popStack(),n=this.popStack());var s=this.hash;n&&(s.contexts[e]=n),r&&(s.types[e]=r),i&&(s.ids[e]=i),s.values[e]=t},pushId:function(e,t,n){"BlockParam"===e?this.pushStackLiteral("blockParams["+t[0]+"].path["+t[1]+"]"+(n?" + "+JSON.stringify("."+n):"")):"PathExpression"===e?this.pushString(t):"SubExpression"===e?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:xn,compileChildren:function(e,t){for(var n=e.children,r=void 0,i=void 0,s=0,o=n.length;s<o;s++){r=n[s],i=new this.compiler;var a=this.matchExistingProgram(r);if(null==a){this.context.programs.push("");var l=this.context.programs.length;r.index=l,r.name="program"+l,this.context.programs[l]=i.compile(r,t,this.context,!this.precompile),this.context.decorators[l]=i.decorators,this.context.environments[l]=r,this.useDepths=this.useDepths||i.useDepths,this.useBlockParams=this.useBlockParams||i.useBlockParams,r.useDepths=this.useDepths,r.useBlockParams=this.useBlockParams}else r.index=a.index,r.name="program"+a.index,this.useDepths=this.useDepths||a.useDepths,this.useBlockParams=this.useBlockParams||a.useBlockParams}},matchExistingProgram:function(e){for(var t=0,n=this.context.environments.length;t<n;t++){var r=this.context.environments[t];if(r&&r.equals(e))return r}},programExpression:function(e){var t=this.environment.children[e],n=[t.index,"data",t.blockParams];return(this.useBlockParams||this.useDepths)&&n.push("blockParams"),this.useDepths&&n.push("depths"),"container.program("+n.join(", ")+")"},useRegister:function(e){this.registers[e]||(this.registers[e]=!0,this.registers.list.push(e))},push:function(e){return e instanceof Dn||(e=this.source.wrap(e)),this.inlineStack.push(e),e},pushStackLiteral:function(e){this.push(new Dn(e))},pushSource:function(e){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),e&&this.source.push(e)},replaceStack:function(e){var t=["("],n=void 0,r=void 0,i=void 0;if(!this.isInline())throw new Ln.default("replaceStack on non-inline");var s=this.popStack(!0);if(s instanceof Dn)t=["(",n=[s.value]],i=!0;else{r=!0;var o=this.incrStack();t=["((",this.push(o)," = ",s,")"],n=this.topStack()}var a=e.call(this,n);i||this.popStack(),r&&this.stackSlot--,this.push(t.concat(a,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var e=this.inlineStack;this.inlineStack=[];for(var t=0,n=e.length;t<n;t++){var r=e[t];if(r instanceof Dn)this.compileStack.push(r);else{var i=this.incrStack();this.pushSource([i," = ",r,";"]),this.compileStack.push(i)}}},isInline:function(){return this.inlineStack.length},popStack:function(e){var t=this.isInline(),n=(t?this.inlineStack:this.compileStack).pop();if(!e&&n instanceof Dn)return n.value;if(!t){if(!this.stackSlot)throw new Ln.default("Invalid stack pop");this.stackSlot--}return n},topStack:function(){var e=this.isInline()?this.inlineStack:this.compileStack,t=e[e.length-1];return t instanceof Dn?t.value:t},contextName:function(e){return this.useDepths&&e?"depths["+e+"]":"depth"+e},quotedString:function(e){return this.source.quotedString(e)},objectLiteral:function(e){return this.source.objectLiteral(e)},aliasable:function(e){var t=this.aliases[e];return t?(t.referenceCount++,t):((t=this.aliases[e]=this.source.wrap(e)).aliasable=!0,t.referenceCount=1,t)},setupHelper:function(e,t,n){var r=[];return{params:r,paramsInit:this.setupHelperArgs(t,e,r,n),name:this.nameLookup("helpers",t,"helper"),callParams:[this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})")].concat(r)}},setupParams:function(e,t,n){var r={},i=[],s=[],o=[],a=!n,l=void 0;a&&(n=[]),r.name=this.quotedString(e),r.hash=this.popStack(),this.trackIds&&(r.hashIds=this.popStack()),this.stringParams&&(r.hashTypes=this.popStack(),r.hashContexts=this.popStack());var c=this.popStack(),u=this.popStack();(u||c)&&(r.fn=u||"container.noop",r.inverse=c||"container.noop");for(var h=t;h--;)l=this.popStack(),n[h]=l,this.trackIds&&(o[h]=this.popStack()),this.stringParams&&(s[h]=this.popStack(),i[h]=this.popStack());return a&&(r.args=this.source.generateArray(n)),this.trackIds&&(r.ids=this.source.generateArray(o)),this.stringParams&&(r.types=this.source.generateArray(s),r.contexts=this.source.generateArray(i)),this.options.data&&(r.data="data"),this.useBlockParams&&(r.blockParams="blockParams"),r},setupHelperArgs:function(e,t,n,r){var i=this.setupParams(e,t,n);return i.loc=JSON.stringify(this.source.currentLocation),i=this.objectLiteral(i),r?(this.useRegister("options"),n.push("options"),["options=",i]):n?(n.push(i),""):i}},function(){for(var e="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),t=xn.RESERVED_WORDS={},n=0,r=e.length;n<r;n++)t[e[n]]=!0}(),xn.isValidJavaScriptVariableName=function(e){return!xn.RESERVED_WORDS[e]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)},Tn.default=xn;var Un=N(Tn=Tn.default),jn=N(Ft),Fn=N(kt),Bn=Ct.default.create;function Hn(){var e=Bn();return e.compile=function(t,n){return mn(t,n,e)},e.precompile=function(t,n){return gn(t,n,e)},e.AST=Nt.default,e.Compiler=fn,e.JavaScriptCompiler=Un.default,e.Parser=Rt,e.parse=Ot,e.parseWithoutProcessing=Pt,e}var $n=Hn();$n.create=Hn,Fn.default($n),$n.Visitor=jn.default,$n.default=$n,R.default=$n;var Vn,qn,zn=(R=R.default).default;Vn=function(e){return(new Kn).accept(e)},qn=Kn;var Gn=function(e){return e&&e.__esModule?e:{default:e}}(Ft);function Kn(){this.padding=0}Kn.prototype=new Gn.default,Kn.prototype.pad=function(e){for(var t="",n=0,r=this.padding;n<r;n++)t+="  ";return t+=e+"\n"},Kn.prototype.Program=function(e){var t="",n=e.body,r=void 0,i=void 0;if(e.blockParams){var s="BLOCK PARAMS: [";for(r=0,i=e.blockParams.length;r<i;r++)s+=" "+e.blockParams[r];s+=" ]",t+=this.pad(s)}for(r=0,i=n.length;r<i;r++)t+=this.accept(n[r]);return this.padding--,t},Kn.prototype.MustacheStatement=function(e){return this.pad("{{ "+this.SubExpression(e)+" }}")},Kn.prototype.Decorator=function(e){return this.pad("{{ DIRECTIVE "+this.SubExpression(e)+" }}")},Kn.prototype.BlockStatement=Kn.prototype.DecoratorBlock=function(e){var t="";return t+=this.pad(("DecoratorBlock"===e.type?"DIRECTIVE ":"")+"BLOCK:"),this.padding++,t+=this.pad(this.SubExpression(e)),e.program&&(t+=this.pad("PROGRAM:"),this.padding++,t+=this.accept(e.program),this.padding--),e.inverse&&(e.program&&this.padding++,t+=this.pad("{{^}}"),this.padding++,t+=this.accept(e.inverse),this.padding--,e.program&&this.padding--),this.padding--,t},Kn.prototype.PartialStatement=function(e){var t="PARTIAL:"+e.name.original;return e.params[0]&&(t+=" "+this.accept(e.params[0])),e.hash&&(t+=" "+this.accept(e.hash)),this.pad("{{> "+t+" }}")},Kn.prototype.PartialBlockStatement=function(e){var t="PARTIAL BLOCK:"+e.name.original;return e.params[0]&&(t+=" "+this.accept(e.params[0])),e.hash&&(t+=" "+this.accept(e.hash)),t+=" "+this.pad("PROGRAM:"),this.padding++,t+=this.accept(e.program),this.padding--,this.pad("{{> "+t+" }}")},Kn.prototype.ContentStatement=function(e){return this.pad("CONTENT[ '"+e.value+"' ]")},Kn.prototype.CommentStatement=function(e){return this.pad("{{! '"+e.value+"' }}")},Kn.prototype.SubExpression=function(e){for(var t,n=e.params,r=[],i=0,s=n.length;i<s;i++)r.push(this.accept(n[i]));return n="["+r.join(", ")+"]",t=e.hash?" "+this.accept(e.hash):"",this.accept(e.path)+" "+n+t},Kn.prototype.PathExpression=function(e){var t=e.parts.join("/");return(e.data?"@":"")+"PATH:"+t},Kn.prototype.StringLiteral=function(e){return'"'+e.value+'"'},Kn.prototype.NumberLiteral=function(e){return"NUMBER{"+e.value+"}"},Kn.prototype.BooleanLiteral=function(e){return"BOOLEAN{"+e.value+"}"},Kn.prototype.UndefinedLiteral=function(){return"UNDEFINED"},Kn.prototype.NullLiteral=function(){return"NULL"},Kn.prototype.Hash=function(e){for(var t=e.pairs,n=[],r=0,i=t.length;r<i;r++)n.push(this.accept(t[r]));return"HASH{"+n.join(", ")+"}"},Kn.prototype.HashPair=function(e){return e.key+"="+this.accept(e.value)},zn.PrintVisitor=qn,zn.print=Vn;var Wn=t(O=zn).template({1:function(e,t,n,r,i){var s,o=null!=t?t:e.nullContext||{},a=e.hooks.helperMissing,l="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="film-card" \n  data-overview=\''+c(typeof(s=null!=(s=u(n,"overview")||(null!=t?u(t,"overview"):t))?s:a)===l?s.call(o,{name:"overview",hash:{},data:i,loc:{start:{line:3,column:17},end:{line:3,column:29}}}):s)+"'\n  data-title='"+c(typeof(s=null!=(s=u(n,"title")||(null!=t?u(t,"title"):t))?s:a)===l?s.call(o,{name:"title",hash:{},data:i,loc:{start:{line:4,column:14},end:{line:4,column:23}}}):s)+"'\n  data-name='"+c(typeof(s=null!=(s=u(n,"name")||(null!=t?u(t,"name"):t))?s:a)===l?s.call(o,{name:"name",hash:{},data:i,loc:{start:{line:5,column:13},end:{line:5,column:21}}}):s)+"'\n  data-vote='"+c(typeof(s=null!=(s=u(n,"vote_average")||(null!=t?u(t,"vote_average"):t))?s:a)===l?s.call(o,{name:"vote_average",hash:{},data:i,loc:{start:{line:6,column:13},end:{line:6,column:29}}}):s)+"'\n  data-popularity='"+c(typeof(s=null!=(s=u(n,"popularity")||(null!=t?u(t,"popularity"):t))?s:a)===l?s.call(o,{name:"popularity",hash:{},data:i,loc:{start:{line:7,column:19},end:{line:7,column:33}}}):s)+"'\n  data-genre='"+c(typeof(s=null!=(s=u(n,"genre_ids")||(null!=t?u(t,"genre_ids"):t))?s:a)===l?s.call(o,{name:"genre_ids",hash:{},data:i,loc:{start:{line:8,column:14},end:{line:8,column:27}}}):s)+"'\n  data-src='https://image.tmdb.org/t/p/w500"+c(typeof(s=null!=(s=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?s:a)===l?s.call(o,{name:"poster_path",hash:{},data:i,loc:{start:{line:9,column:43},end:{line:9,column:58}}}):s)+"'\n  data-votes ='"+c(typeof(s=null!=(s=u(n,"vote_count")||(null!=t?u(t,"vote_count"):t))?s:a)===l?s.call(o,{name:"vote_count",hash:{},data:i,loc:{start:{line:10,column:15},end:{line:10,column:29}}}):s)+"'\n  data-id='"+c(typeof(s=null!=(s=u(n,"id")||(null!=t?u(t,"id"):t))?s:a)===l?s.call(o,{name:"id",hash:{},data:i,loc:{start:{line:11,column:11},end:{line:11,column:17}}}):s)+"'\n  data-released="+c(typeof(s=null!=(s=u(n,"release_date")||(null!=t?u(t,"release_date"):t))?s:a)===l?s.call(o,{name:"release_date",hash:{},data:i,loc:{start:{line:12,column:16},end:{line:12,column:32}}}):s)+'>\n      <div>\n      <div class="film-card__img_container">\n        <img class="film-card__img" src="https://image.tmdb.org/t/p/w500'+c(typeof(s=null!=(s=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?s:a)===l?s.call(o,{name:"poster_path",hash:{},data:i,loc:{start:{line:15,column:72},end:{line:15,column:87}}}):s)+'" alt="'+c(typeof(s=null!=(s=u(n,"backdrop_path")||(null!=t?u(t,"backdrop_path"):t))?s:a)===l?s.call(o,{name:"backdrop_path",hash:{},data:i,loc:{start:{line:15,column:94},end:{line:15,column:111}}}):s)+'" width="100%" data-id="'+c(typeof(s=null!=(s=u(n,"id")||(null!=t?u(t,"id"):t))?s:a)===l?s.call(o,{name:"id",hash:{},data:i,loc:{start:{line:15,column:135},end:{line:15,column:141}}}):s)+'" />\n        <span class="film-card__vote">'+c(typeof(s=null!=(s=u(n,"vote_average")||(null!=t?u(t,"vote_average"):t))?s:a)===l?s.call(o,{name:"vote_average",hash:{},data:i,loc:{start:{line:16,column:38},end:{line:16,column:54}}}):s)+'</span>\n        <span class="film-card__vote-count">Vote Count: '+c(typeof(s=null!=(s=u(n,"vote_count")||(null!=t?u(t,"vote_count"):t))?s:a)===l?s.call(o,{name:"vote_count",hash:{},data:i,loc:{start:{line:17,column:56},end:{line:17,column:70}}}):s)+'</span>\n      </div>\n      <h2 class="film-card__title">'+c(typeof(s=null!=(s=u(n,"title")||(null!=t?u(t,"title"):t))?s:a)===l?s.call(o,{name:"title",hash:{},data:i,loc:{start:{line:19,column:35},end:{line:19,column:44}}}):s)+" "+c(typeof(s=null!=(s=u(n,"name")||(null!=t?u(t,"name"):t))?s:a)===l?s.call(o,{name:"name",hash:{},data:i,loc:{start:{line:19,column:45},end:{line:19,column:53}}}):s)+'</h2>\n      <p class="film-card__text">\n        <span class="film-card__genres">'+c(typeof(s=null!=(s=u(n,"genre_ids")||(null!=t?u(t,"genre_ids"):t))?s:a)===l?s.call(o,{name:"genre_ids",hash:{},data:i,loc:{start:{line:21,column:40},end:{line:21,column:53}}}):s)+'</span> \n        | \n        <span class="film-card__release">'+c(typeof(s=null!=(s=u(n,"release_date")||(null!=t?u(t,"release_date"):t))?s:a)===l?s.call(o,{name:"release_date",hash:{},data:i,loc:{start:{line:23,column:41},end:{line:23,column:57}}}):s)+c(typeof(s=null!=(s=u(n,"first_air_date")||(null!=t?u(t,"first_air_date"):t))?s:a)===l?s.call(o,{name:"first_air_date",hash:{},data:i,loc:{start:{line:23,column:57},end:{line:23,column:75}}}):s)+"</span>\n      </p>\n    </div>\n</li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,i){var s,o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return null!=(s=o(n,"each").call(null!=t?t:e.nullContext||{},null!=t?o(t,"results"):t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:1,column:0},end:{line:27,column:9}}}))?s:""},useData:!0});const Jn=document.querySelector(".collection");function Xn(e){Jn.innerHTML="",A.fetchTrendFilms(e).then((e=>{var t;t=e,Jn.insertAdjacentHTML("beforeend",Wn(t)),P(),vr(e.total_pages)}))}Xn(A.page);var Yn=Xn;const Qn=document.querySelector("body"),Zn=document.querySelector(".input-genre"),er=document.querySelector(".genres-list"),tr=document.querySelector(".collection"),nr=document.querySelector(".apply-filter"),rr=document.querySelector(".reset-filter");let ir=[],sr=[];function or(e){tr.innerHTML="";let t=ir.join(",");console.log(ir),A.fetchFilmsByGenre(t,e).then((e=>{var t;t=e,tr.insertAdjacentHTML("beforeend",Wn(t)),P(),er.style.display="none",vr(e.total_pages)}))}A.fetchGenres().then((e=>e.map((e=>er.insertAdjacentHTML("beforeend",`<li class="genres-item" id="${e.id}">${e.name}</li>`)))));function ar(e){for(let e=0;e<er.children.length;e++)er.children[e].classList.contains("genres-item_active")&&er.children[e].classList.remove("genres-item_active");Zn.value="",ir=[],sr=[]}Qn.addEventListener("click",(function(e){e.target!==er&&e.target!==Zn&&(er.style.display="none")})),Zn.addEventListener("click",(function(e){e.target===Zn&&(er.style.display="block")})),er.addEventListener("click",(e=>{if(e.target.classList.contains("genres-item_active")){e.target.classList.remove("genres-item_active");let t=sr.indexOf(e.target.innerHTML);sr.splice(t,1),Zn.value=sr}else e.target.classList.add("genres-item_active"),ir.push(e.target.id),sr.push(e.target.innerHTML),Zn.value=sr;return ir})),nr.addEventListener("click",(function(){or(A.page=1)})),rr.addEventListener("click",ar);var lr={applyFilterSubmit:or,deleteGenres:ar};const cr=document.querySelector(".search-input"),ur=document.querySelector(".collection"),hr=document.querySelector(".search_icon");function pr(){A.searchQuery(cr.value),A.page=1,dr(1),cr.value="",lr.deleteGenres()}function dr(e){ur.innerHTML="",A.fetchSearchFilms(e).then((e=>{var t;t=e,ur.insertAdjacentHTML("beforeend",Wn(t)),P(),ur.hasChildNodes()?document.querySelector("#search_error").innerHTML="":document.querySelector("#search_error").innerHTML="Search result not successful. Enter the correct movie!",vr(e.total_pages)}))}cr.addEventListener("keypress",(function(e){"Enter"===e.key&&pr()})),hr.addEventListener("click",pr);var fr=dr;function gr(e){switch(e[0].toString()){case"trendFilms":Yn(A.page);break;case"searchFilms":fr(A.page);break;case"byGenreFilms":lr(A.page);break;case"discoverFilms":A.fetchDiscover()}}function mr(e){e.preventDefault(),document.querySelector(".collection").innerHTML="",gr(A.fetchType);let t=Number(this.getAttribute("data-num"));A.page=t,console.log(A.page)}document.querySelector("#next-page").addEventListener("click",(function(e){e.preventDefault(),A.page++,gr(A.fetchType)})),document.querySelector("#prev-page").addEventListener("click",(function(e){e.preventDefault(),A.page--,gr(A.fetchType)}));var vr=function(e){console.log(e);let t=e;document.querySelector(".pagination").classList.contains("created")||function(e){const t=document.querySelector("#page_numbers");let n=document.createElement("li"),r=document.createElement("li");n.classList.add("page-item"),r.classList.add("page-item"),n.innerHTML='<a class="page-link page_num" href="#" data-num="1">1</a>',r.innerHTML='<a class="page-link start_ellipsis">...</a>',t.appendChild(n),t.appendChild(r),console.log(e);for(let n=2;n<e;n++){let e=document.createElement("li");e.classList.add("page-item");let r=`<a class="page-link page_num" href="#" data-num="${n}">${n}</a>`;e.innerHTML=r,t.appendChild(e)}let i=document.createElement("li"),s=document.createElement("li");i.classList.add("page-item"),s.classList.add("page-item"),i.innerHTML='<a class="page-link end_ellipsis">...</a>',s.innerHTML=`<a class="page-link page_num" href="#" data-num="${e}">${e}</a>`,t.appendChild(i),t.appendChild(s),document.querySelector(".pagination").classList.add("created")}(t),function(e,t){const n=document.querySelectorAll(".page_num"),r=document.querySelector(".start_ellipsis"),i=document.querySelector(".end_ellipsis");console.log(n);for(let e=0;e<n.length;e++)n[e].style.display="none",n[e].classList.remove("active_page"),n[e].addEventListener("click",mr);function s(){if(window.innerWidth>400){n[e].style.display="unset",n[t-1].style.display="unset";for(let e=0;e<3;e++){A.page>=t-3?(i.style.display="none",r.style.display="unset"):A.page<=3?(r.style.display="none",i.style.display="unset"):(r.style.display="unset",i.style.display="unset");try{n[A.page-1-e].style.display="unset"}catch(e){}try{n[A.page-1+e].style.display="unset"}catch(e){}}}if(window.innerWidth<=400){r.style.display="none",i.style.display="none",n[t-1].style.display="none",n[e].style.display="none";for(let e=0;e<3;e++){try{n[A.page-1-e].style.display="unset"}catch(e){}try{n[A.page-1+e].style.display="unset"}catch(e){}}}}n[A.page-1].style.display="unset",n[A.page-1].classList.add("active_page"),window.addEventListener("load",s())}(0,t)};const yr=document.querySelector(".descending"),_r=document.querySelector(".ascending"),br=document.querySelector(".sort-title"),wr=document.querySelector(".sort-votes"),Sr=document.querySelector(".sort-popularuty"),kr=document.querySelector(".sort-votes-count"),Er=document.querySelector(".sort-release"),Ir=document.querySelector(".sort-input"),Tr=document.querySelector(".sort-list"),Cr=document.querySelector(".collection"),Lr=document.querySelector("body");let Ar="desc";function Pr(e){"ascending"===e.target.classList.value&&(Ar="asc",_r.style.backgroundColor="orangered",yr.style.backgroundColor=""),"descending"===e.target.classList.value&&(Ar="desc",yr.style.backgroundColor="orangered",_r.style.backgroundColor="")}Ir.addEventListener("click",(function(e){e.target===Ir&&(Tr.style.display="block")})),Lr.addEventListener("click",(function(e){e.target!==Tr&&e.target!==Ir&&(Tr.style.display="none")})),_r.addEventListener("click",Pr),yr.addEventListener("click",Pr),br.addEventListener("click",(function(){A.fetchDiscover(`original_title.${Ar}`,A.page).then((e=>{Cr.innerHTML="",Cr.insertAdjacentHTML("beforeend",Wn(e)),vr(e.total_pages)})),P()})),wr.addEventListener("click",(function(){console.log(Ar),A.fetchDiscover(`vote_average.${Ar}`).then((e=>{Cr.innerHTML="",Cr.insertAdjacentHTML("beforeend",Wn(e)),vr(e.total_pages)})),P()})),Sr.addEventListener("click",(function(){A.fetchDiscover(`popularity.${Ar}`).then((e=>{Cr.innerHTML="",Cr.insertAdjacentHTML("beforeend",Wn(e)),vr(e.total_pages)})),P()})),kr.addEventListener("click",(function(){A.fetchDiscover(`vote_count.${Ar}`).then((e=>{Cr.innerHTML="",Cr.insertAdjacentHTML("beforeend",Wn(e)),vr(e.total_pages)})),P()})),Er.addEventListener("click",(function(){A.fetchDiscover(`release_date.${Ar}`).then((e=>{Cr.innerHTML="",Cr.insertAdjacentHTML("beforeend",Wn(e)),vr(e.total_pages)})),P()}));var Or=t(O).template({1:function(e,t,n,r,i){var s,o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return e.escapeExpression("function"==typeof(s=null!=(s=o(n,"name")||(null!=t?o(t,"name"):t))?s:e.hooks.helperMissing)?s.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:i,loc:{start:{line:16,column:54},end:{line:16,column:62}}}):s)+", "},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,i){var s,o,a=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,c="function",u=e.escapeExpression,h=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\n    <img src="https://image.tmdb.org/t/p/w500'+u(typeof(o=null!=(o=h(n,"poster_path")||(null!=t?h(t,"poster_path"):t))?o:l)===c?o.call(a,{name:"poster_path",hash:{},data:i,loc:{start:{line:2,column:45},end:{line:2,column:60}}}):o)+'">\n<div class="text-container">\n    <h2 class="film-header">'+u(typeof(o=null!=(o=h(n,"title")||(null!=t?h(t,"title"):t))?o:l)===c?o.call(a,{name:"title",hash:{},data:i,loc:{start:{line:4,column:28},end:{line:4,column:37}}}):o)+" "+u(typeof(o=null!=(o=h(n,"name")||(null!=t?h(t,"name"):t))?o:l)===c?o.call(a,{name:"name",hash:{},data:i,loc:{start:{line:4,column:38},end:{line:4,column:46}}}):o)+'</h2>\n<div class="film_info">\n    <div class="film__left_info">\n        <span>Vote / Votes</span>\n        <span>Popularity</span>\n        <span>Original Title</span>\n        <span>Genre</span>\n    </div>\n        <div class="film__right_info">\n            <p class="vote"><span class="vote-average">'+u(typeof(o=null!=(o=h(n,"vote_average")||(null!=t?h(t,"vote_average"):t))?o:l)===c?o.call(a,{name:"vote_average",hash:{},data:i,loc:{start:{line:13,column:55},end:{line:13,column:71}}}):o)+"</span>/ "+u(typeof(o=null!=(o=h(n,"vote_count")||(null!=t?h(t,"vote_count"):t))?o:l)===c?o.call(a,{name:"vote_count",hash:{},data:i,loc:{start:{line:13,column:80},end:{line:13,column:94}}}):o)+'</p>\n            <span class="popularity">'+u(typeof(o=null!=(o=h(n,"popularity")||(null!=t?h(t,"popularity"):t))?o:l)===c?o.call(a,{name:"popularity",hash:{},data:i,loc:{start:{line:14,column:37},end:{line:14,column:51}}}):o)+"</span>\n            <span>"+u(typeof(o=null!=(o=h(n,"original_title")||(null!=t?h(t,"original_title"):t))?o:l)===c?o.call(a,{name:"original_title",hash:{},data:i,loc:{start:{line:15,column:18},end:{line:15,column:36}}}):o)+'</span>\n            <span class="modal-genre">'+(null!=(s=h(n,"each").call(a,null!=t?h(t,"genres"):t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:16,column:38},end:{line:16,column:73}}}))?s:"")+'</span>\n        </div>\n</div>\n<p class="about">About</p>\n<p class="about-info">'+u(typeof(o=null!=(o=h(n,"overview")||(null!=t?h(t,"overview"):t))?o:l)===c?o.call(a,{name:"overview",hash:{},data:i,loc:{start:{line:20,column:22},end:{line:20,column:34}}}):o)+'</p>\n<div class="buttons">\n      <button type="button" class="button-wached"><p>add to Watched</p></button>\n      <button type="button" class="button-queue"><p>add to queue</p></button>\n    </div>\n</div>'},useData:!0});function Rr(){const e=document.getElementsByClassName("vote-average"),t=document.querySelector(".popularity"),n=document.querySelector(".modal-genre"),r=document.querySelector(".vote");n.innerHTML=n.innerHTML.replace(/,\s*$/,""),t.innerHTML=Math.trunc(10*t.innerHTML)/10;for(let t=0;t<e.length;t++){let n=String(e[t].innerHTML.slice(0,3));"0"===n?(r.style.color="red",r.innerHTML="Sorry, this movie has no ratings yet"):e[t].innerHTML=n%1!=0?Number(n):Number(n)+".0"}}document.querySelector(".main");const Nr=document.querySelector(".collection"),Mr=document.querySelector(".backdrop"),Dr=document.querySelector(".modal__content"),xr=document.querySelector(".film_modal"),Ur=document.querySelector(".close-svg");function jr(e){Dr.insertAdjacentHTML("beforeend",Or(e)),Rr()}function Fr(e){Mr.classList.add("is-hidden"),Dr.innerHTML=""}document.addEventListener("keydown",(e=>{"Escape"===e.key&&Fr()})),xr.addEventListener("click",(function(e){(e.target.contains(Ur)||e.target.contains(Ur.children[0]))&&Fr()})),Mr.addEventListener("click",(function(e){Mr===e.target&&Fr()})),Nr.addEventListener("click",(function(e){e.preventDefault(),e.target.classList.contains("film-card__img")&&(Mr.classList.remove("is-hidden"),A.fetchFilmById(e.target.dataset.id).then(jr))}));var Br,Hr,$r,Vr=Br={};function qr(){throw new Error("setTimeout has not been defined")}function zr(){throw new Error("clearTimeout has not been defined")}function Gr(e){if(Hr===setTimeout)return setTimeout(e,0);if((Hr===qr||!Hr)&&setTimeout)return Hr=setTimeout,setTimeout(e,0);try{return Hr(e,0)}catch(t){try{return Hr.call(null,e,0)}catch(t){return Hr.call(this,e,0)}}}!function(){try{Hr="function"==typeof setTimeout?setTimeout:qr}catch(e){Hr=qr}try{$r="function"==typeof clearTimeout?clearTimeout:zr}catch(e){$r=zr}}();var Kr,Wr=[],Jr=!1,Xr=-1;function Yr(){Jr&&Kr&&(Jr=!1,Kr.length?Wr=Kr.concat(Wr):Xr=-1,Wr.length&&Qr())}function Qr(){if(!Jr){var e=Gr(Yr);Jr=!0;for(var t=Wr.length;t;){for(Kr=Wr,Wr=[];++Xr<t;)Kr&&Kr[Xr].run();Xr=-1,t=Wr.length}Kr=null,Jr=!1,function(e){if($r===clearTimeout)return clearTimeout(e);if(($r===zr||!$r)&&clearTimeout)return $r=clearTimeout,clearTimeout(e);try{$r(e)}catch(t){try{return $r.call(null,e)}catch(t){return $r.call(this,e)}}}(e)}}function Zr(e,t){this.fun=e,this.array=t}function ei(){}Vr.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Wr.push(new Zr(e,t)),1!==Wr.length||Jr||Gr(Qr)},Zr.prototype.run=function(){this.fun.apply(null,this.array)},Vr.title="browser",Vr.browser=!0,Vr.env={},Vr.argv=[],Vr.version="",Vr.versions={},Vr.on=ei,Vr.addListener=ei,Vr.once=ei,Vr.off=ei,Vr.removeListener=ei,Vr.removeAllListeners=ei,Vr.emit=ei,Vr.prependListener=ei,Vr.prependOnceListener=ei,Vr.listeners=function(e){return[]},Vr.binding=function(e){throw new Error("process.binding is not supported")},Vr.cwd=function(){return"/"},Vr.chdir=function(e){throw new Error("process.chdir is not supported")},Vr.umask=function(){return 0};
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
const ti=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},ni={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=i>>2,u=(3&i)<<4|o>>4;let h=(15&o)<<2|l>>6,p=63&l;a||(p=64,s||(h=64)),r.push(n[c],n[u],n[h],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ti(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new ri;const l=i<<2|s>>4;if(r.push(l),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class ri extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ii=function(e){return function(e){const t=ti(e);return ni.encodeByteArray(t,!0)}(e).replace(/\./g,"")},si=function(e){try{return ni.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
const oi=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,ai=()=>{try{return oi()||(()=>{if(void 0===Br||void 0===Br.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&si(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},li=e=>{var t,n;return null===(n=null===(t=ai())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},ci=e=>{const t=li(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},ui=e=>{var t;return null===(t=ai())||void 0===t?void 0:t[`_${e}`]};
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
class hi{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */function pi(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ii(JSON.stringify({alg:"none",type:"JWT"})),ii(JSON.stringify(s)),""].join(".")}
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
 */function di(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function fi(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function gi(){const e=di();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function mi(){try{return"object"==typeof indexedDB}catch(e){return!1}}class vi extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,vi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yi.prototype.create)}}class yi{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(_i,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new vi(r,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const _i=/\{\$([^}]+)}/g;
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
 */function bi(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function wi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(Si(n)&&Si(s)){if(!wi(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function Si(e){return null!==e&&"object"==typeof e}
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
function ki(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ei(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function Ii(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function Ti(e,t){const n=new Ci(e,t);return n.subscribe.bind(n)}class Ci{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Li),void 0===r.error&&(r.error=Li),void 0===r.complete&&(r.complete=Li);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function Li(){}
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
function Ai(e){return e&&e._delegate?e._delegate:e}class Pi{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
class Oi{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new hi;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class Ri{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Oi(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
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
 */const Ni=[];var Mi,Di;(Di=Mi||(Mi={}))[Di.DEBUG=0]="DEBUG",Di[Di.VERBOSE=1]="VERBOSE",Di[Di.INFO=2]="INFO",Di[Di.WARN=3]="WARN",Di[Di.ERROR=4]="ERROR",Di[Di.SILENT=5]="SILENT";const xi={debug:Mi.DEBUG,verbose:Mi.VERBOSE,info:Mi.INFO,warn:Mi.WARN,error:Mi.ERROR,silent:Mi.SILENT},Ui=Mi.INFO,ji={[Mi.DEBUG]:"log",[Mi.VERBOSE]:"log",[Mi.INFO]:"info",[Mi.WARN]:"warn",[Mi.ERROR]:"error"},Fi=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=ji[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Bi{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Mi))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?xi[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Mi.DEBUG,...e),this._logHandler(this,Mi.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Mi.VERBOSE,...e),this._logHandler(this,Mi.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Mi.INFO,...e),this._logHandler(this,Mi.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Mi.WARN,...e),this._logHandler(this,Mi.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Mi.ERROR,...e),this._logHandler(this,Mi.ERROR,...e)}constructor(e){this.name=e,this._logLevel=Ui,this._logHandler=Fi,this._userLogHandler=null,Ni.push(this)}}let Hi,$i;const Vi=new WeakMap,qi=new WeakMap,zi=new WeakMap,Gi=new WeakMap,Ki=new WeakMap;let Wi={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return qi.get(e);if("objectStoreNames"===t)return e.objectStoreNames||zi.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yi(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ji(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?($i||($i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Qi(this),t),Yi(Vi.get(this))}:function(...t){return Yi(e.apply(Qi(this),t))}:function(t,...n){const r=e.call(Qi(this),t,...n);return zi.set(r,t.sort?t.sort():[t]),Yi(r)}}function Xi(e){return"function"==typeof e?Ji(e):(e instanceof IDBTransaction&&function(e){if(qi.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));qi.set(e,t)}(e),t=e,(Hi||(Hi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Wi):e);var t}function Yi(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Yi(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Vi.set(t,e)})).catch((()=>{})),Ki.set(t,e),t}(e);if(Gi.has(e))return Gi.get(e);const t=Xi(e);return t!==e&&(Gi.set(e,t),Ki.set(t,e)),t}const Qi=e=>Ki.get(e);function Zi(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Yi(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Yi(o.result),e.oldVersion,e.newVersion,Yi(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const es=["get","getKey","getAll","getAllKeys","count"],ts=["put","add","delete","clear"],ns=new Map;function rs(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(ns.get(t))return ns.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=ts.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!es.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return ns.set(t,s),s}Wi=(e=>({...e,get:(t,n,r)=>rs(t,n)||e.get(t,n,r),has:(t,n)=>!!rs(t,n)||e.has(t,n)}))(Wi);
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
class is{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const ss=new Bi("@firebase/app"),os={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},as=new Map,ls=new Map;function cs(e,t){try{e.container.addComponent(t)}catch(n){ss.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function us(e){const t=e.name;if(ls.has(t))return ss.debug(`There were multiple attempts to register component ${t}.`),!1;ls.set(t,e);for(const t of as.values())cs(t,e);return!0}function hs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const ps=new yi("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class ds{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ps.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Pi("app",(()=>this),"PUBLIC"))}}
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
 */function fs(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw ps.create("bad-app-name",{appName:String(i)});var s;if(n||(n=null===(s=ai())||void 0===s?void 0:s.config),!n)throw ps.create("no-options");const o=as.get(i);if(o){if(wi(n,o.options)&&wi(r,o.config))return o;throw ps.create("duplicate-app",{appName:i})}const a=new Ri(i);for(const e of ls.values())a.addComponent(e);const l=new ds(n,r,a);return as.set(i,l),l}function gs(e="[DEFAULT]"){const t=as.get(e);if(!t&&"[DEFAULT]"===e)return fs();if(!t)throw ps.create("no-app",{appName:e});return t}function ms(e,t,n){var r;let i=null!==(r=os[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void ss.warn(e.join(" "))}us(new Pi(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}let vs=null;function ys(){return vs||(vs=Zi("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw ps.create("idb-open",{originalErrorMessage:e.message})}))),vs}async function _s(e,t){try{const n=(await ys()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");return await r.put(t,bs(e)),n.done}catch(e){if(e instanceof vi)ss.warn(e.message);else{const t=ps.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});ss.warn(t.message)}}}function bs(e){return`${e.name}!${e.options.appId}`}
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
 */class ws{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Ss();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ss(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Es(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Es(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=ii(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ks(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function Ss(){return(new Date).toISOString().substring(0,10)}class ks{async runIndexedDBEnvironmentCheck(){return!!mi()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await ys()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(bs(e))}catch(e){if(e instanceof vi)ss.warn(e.message);else{const t=ps.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});ss.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return _s(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return _s(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Es(e){return ii(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var Is;Is="",us(new Pi("platform-logger",(e=>new is(e)),"PRIVATE")),us(new Pi("heartbeat",(e=>new ws(e)),"PRIVATE")),ms("@firebase/app","0.9.7",Is),ms("@firebase/app","0.9.7","esm2017"),ms("fire-js","");function Ts(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function Cs(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ls=Cs,As=new yi("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Ps=new Bi("@firebase/auth");function Os(e,...t){Ps.logLevel<=Mi.ERROR&&Ps.error(`Auth (9.19.1): ${e}`,...t)}
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
 */function Rs(e,...t){throw xs(e,...t)}function Ns(e,...t){return xs(e,...t)}function Ms(e,t,n){const r=Object.assign(Object.assign({},Ls()),{[t]:n});return new yi("auth","Firebase",r).create(t,{appName:e.name})}function Ds(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&Rs(e,"argument-error"),Ms(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xs(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return As.create(e,...t)}function Us(e,t,...n){if(!e)throw xs(t,...n)}function js(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Os(t),new Error(t)}function Fs(e,t){e||js(t)}
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
 */const Bs=new Map;function Hs(e){Fs(e instanceof Function,"Expected a class definition");let t=Bs.get(e);return t?(Fs(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Bs.set(e,t),t)}
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
function $s(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Vs(){return"http:"===qs()||"https:"===qs()}function qs(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function zs(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Vs()||fi()||"connection"in navigator))||navigator.onLine}
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
class Gs{get(){return zs()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,Fs(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(di())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
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
 */function Ks(e,t){Fs(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class Ws{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void js("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void js("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void js("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Js={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Xs=new Gs(3e4,6e4);
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
 */function Ys(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Qs(e,t,n,r,i={}){return Zs(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=ki(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Ws.fetch()(to(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Zs(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Js),t);try{const t=new no(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw ro(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ro(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw ro(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw ro(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Ms(e,a,o);Rs(e,a)}}catch(t){if(t instanceof vi)throw t;Rs(e,"network-request-failed",{message:String(t)})}}async function eo(e,t,n,r,i={}){const s=await Qs(e,t,n,r,i);return"mfaPendingCredential"in s&&Rs(e,"multi-factor-auth-required",{_serverResponse:s}),s}function to(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Ks(e.config,i):`${e.config.apiScheme}://${i}`}class no{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Ns(this.auth,"network-request-failed"))),Xs.get())}))}}function ro(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ns(e,t,r);return i.customData._tokenResponse=n,i}
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
function io(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function so(e){return 1e3*Number(e)}function oo(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Os("JWT malformed, contained fewer than 3 sections"),null;try{const e=si(n);return e?JSON.parse(e):(Os("Failed to decode base64 JWT payload"),null)}catch(e){return Os("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
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
async function ao(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof vi&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class lo{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class co{_initializeTime(){this.lastSignInTime=io(this.lastLoginAt),this.creationTime=io(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
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
 */async function uo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ao(e,async function(e,t){return Qs(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Us(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Ts(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),p=!!u&&h,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new co(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(e,d)}
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
class ho{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Us(e.idToken,"internal-error"),Us(void 0!==e.idToken,"internal-error"),Us(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=oo(e);return Us(t,"internal-error"),Us(void 0!==t.exp,"internal-error"),Us(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Us(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
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
async function(e,t){const n=await Zs(e,{},(async()=>{const n=ki({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=to(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Ws.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ho;return n&&(Us("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Us("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Us("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ho,this.toJSON())}_performRefresh(){return js("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function po(e,t){Us("string"==typeof e||void 0===e,"internal-error",{appName:t})}class fo{async getIdToken(e){const t=await ao(this,this.stsTokenManager.getToken(this.auth,e));return Us(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Ai(e),r=await n.getIdToken(t),i=oo(r);Us(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:io(so(i.auth_time)),issuedAtTime:io(so(i.iat)),expirationTime:io(so(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Ai(e);await uo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Us(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new fo(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Us(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await uo(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ao(this,async function(e,t){return Qs(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,p=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,d=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:_,isAnonymous:b,providerData:w,stsTokenManager:S}=t;Us(y&&S,e,"internal-error");const k=ho.fromJSON(this.name,S);Us("string"==typeof y,e,"internal-error"),po(u,e.name),po(h,e.name),Us("boolean"==typeof _,e,"internal-error"),Us("boolean"==typeof b,e,"internal-error"),po(p,e.name),po(d,e.name),po(f,e.name),po(g,e.name),po(m,e.name),po(v,e.name);const E=new fo({uid:y,auth:e,email:h,emailVerified:_,displayName:u,isAnonymous:b,photoURL:d,phoneNumber:p,tenantId:f,stsTokenManager:k,createdAt:m,lastLoginAt:v});return w&&Array.isArray(w)&&(E.providerData=w.map((e=>Object.assign({},e)))),g&&(E._redirectEventId=g),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new ho;r.updateFromServerResponse(t);const i=new fo({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await uo(i),i}constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Ts(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new co(i.createdAt||void 0,i.lastLoginAt||void 0)}}
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
 */class go{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}go.type="NONE";const mo=go;
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
 */function vo(e,t,n){return`firebase:${e}:${t}:${n}`}class yo{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fo._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new yo(Hs(mo),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Hs(mo);const s=vo(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=fo._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new yo(i,e,n)):new yo(i,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=vo(this.userKey,r.apiKey,i),this.fullPersistenceKey=vo("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function _o(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ko(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(bo(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Io(t))return"Blackberry";if(To(t))return"Webos";if(wo(t))return"Safari";if((t.includes("chrome/")||So(t))&&!t.includes("edge/"))return"Chrome";if(Eo(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function bo(e=di()){return/firefox\//i.test(e)}function wo(e=di()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function So(e=di()){return/crios\//i.test(e)}function ko(e=di()){return/iemobile/i.test(e)}function Eo(e=di()){return/android/i.test(e)}function Io(e=di()){return/blackberry/i.test(e)}function To(e=di()){return/webos/i.test(e)}function Co(e=di()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Lo(){return gi()&&10===document.documentMode}function Ao(e=di()){return Co(e)||Eo(e)||To(e)||Io(e)||/windows phone/i.test(e)||ko(e)}
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
function Po(e,t=[]){let n;switch(e){case"Browser":n=_o(di());break;case"Worker":n=`${_o(di())}-${e}`;break;default:n=e}return`${n}/JsCore/9.19.1/${t.length?t.join(","):"FirebaseCore-web"}`}
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
 */class Oo{pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
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
 */class Ro{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Hs(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await yo.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Us(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await uo(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ai(e):null;return t&&Us(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Us(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Hs(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yi("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Hs(e)||this._popupRedirectResolver;Us(t,this,"argument-error"),this.redirectPersistenceManager=await yo.create(this,[Hs(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Us(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Us(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Po(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mo(this),this.idTokenSubscription=new Mo(this),this.beforeStateQueue=new Oo(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=As,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function No(e){return Ai(e)}class Mo{get next(){return Us(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=Ti((e=>this.observer=e))}}function Do(e,t,n){const r=No(e);Us(r._canInitEmulator,r,"emulator-config-failed"),Us(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=xo(t),{host:o,port:a}=function(e){const t=xo(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Uo(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Uo(t)}}}(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function xo(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Uo(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class jo{toJSON(){return js("not implemented")}_getIdTokenResponse(e){return js("not implemented")}_linkToIdToken(e,t){return js("not implemented")}_getReauthenticationResolver(e){return js("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
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
 */async function Fo(e,t){return Qs(e,"POST","/v1/accounts:update",t)}
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
class Bo extends jo{static _fromEmailAndPassword(e,t){return new Bo(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Bo(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return eo(e,"POST","/v1/accounts:signInWithPassword",Ys(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(e,t){return eo(e,"POST","/v1/accounts:signInWithEmailLink",Ys(e,t))}(e,{email:this._email,oobCode:this._password});default:Rs(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Fo(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return eo(e,"POST","/v1/accounts:signInWithEmailLink",Ys(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Rs(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}}
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
 */async function Ho(e,t){return eo(e,"POST","/v1/accounts:signInWithIdp",Ys(e,t))}
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
 */class $o extends jo{static _fromParams(e){const t=new $o(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Rs("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Ts(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new $o(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return Ho(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ho(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ho(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ki(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
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
 */const Vo={USER_NOT_FOUND:"user-not-found"};
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
class qo extends jo{static _fromVerification(e,t){return new qo({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new qo({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return eo(e,"POST","/v1/accounts:signInWithPhoneNumber",Ys(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await eo(e,"POST","/v1/accounts:signInWithPhoneNumber",Ys(e,t));if(n.temporaryProof)throw ro(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return eo(e,"POST","/v1/accounts:signInWithPhoneNumber",Ys(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Vo)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new qo({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
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
 */class zo{static parseLink(e){const t=function(e){const t=Ei(Ii(e)).link,n=t?Ei(Ii(t)).deep_link_id:null,r=Ei(Ii(e)).deep_link_id;return(r?Ei(Ii(r)).link:null)||r||n||t||e}(e);try{return new zo(t)}catch(e){return null}}constructor(e){var t,n,r,i,s,o;const a=Ei(Ii(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);Us(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
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
class Go{static credential(e,t){return Bo._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=zo.parseLink(t);return Us(n,"argument-error"),Bo._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=Go.PROVIDER_ID}}Go.PROVIDER_ID="password",Go.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Go.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Ko{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class Wo extends Ko{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}class Jo extends Wo{static credentialFromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return Us("providerId"in t&&"signInMethod"in t,"argument-error"),$o._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return Us(e.idToken||e.accessToken,"argument-error"),$o._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Jo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Jo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!(n||r||t||i))return null;if(!o)return null;try{return new Jo(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(e){return null}}}
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
 */class Xo extends Wo{static credential(e){return $o._fromParams({providerId:Xo.PROVIDER_ID,signInMethod:Xo.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xo.credentialFromTaggedObject(e)}static credentialFromError(e){return Xo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Xo.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Xo.FACEBOOK_SIGN_IN_METHOD="facebook.com",Xo.PROVIDER_ID="facebook.com";
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
class Yo extends Wo{static credential(e,t){return $o._fromParams({providerId:Yo.PROVIDER_ID,signInMethod:Yo.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Yo.credentialFromTaggedObject(e)}static credentialFromError(e){return Yo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Yo.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Yo.GOOGLE_SIGN_IN_METHOD="google.com",Yo.PROVIDER_ID="google.com";
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
class Qo extends Wo{static credential(e){return $o._fromParams({providerId:Qo.PROVIDER_ID,signInMethod:Qo.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qo.credentialFromTaggedObject(e)}static credentialFromError(e){return Qo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Qo.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Qo.GITHUB_SIGN_IN_METHOD="github.com",Qo.PROVIDER_ID="github.com";
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
class Zo extends Wo{static credential(e,t){return $o._fromParams({providerId:Zo.PROVIDER_ID,signInMethod:Zo.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Zo.credentialFromTaggedObject(e)}static credentialFromError(e){return Zo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Zo.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
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
async function ea(e,t){return eo(e,"POST","/v1/accounts:signUp",Ys(e,t))}
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
 */Zo.TWITTER_SIGN_IN_METHOD="twitter.com",Zo.PROVIDER_ID="twitter.com";class ta{static async _fromIdTokenResponse(e,t,n,r=!1){const i=await fo._fromIdTokenResponse(e,n,r),s=na(n);return new ta({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=na(n);return new ta({user:e,providerId:r,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function na(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class ra extends vi{static _fromErrorAndOperation(e,t,n,r){return new ra(e,t,n,r)}constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ra.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function ia(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ra._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */async function sa(e,t,n=!1){const r=await ao(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ta._forOperation(e,"link",r)}
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
async function oa(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await ao(e,ia(r,i,t,e),n);Us(s.idToken,r,"internal-error");const o=oo(s.idToken);Us(o,r,"internal-error");const{sub:a}=o;return Us(e.uid===a,r,"user-mismatch"),ta._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Rs(r,"user-mismatch"),e}}
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
 */async function aa(e,t,n=!1){const r="signIn",i=await ia(e,r,t),s=await ta._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function la(e,t){return aa(No(e),t)}async function ca(e,t,n){const r=No(e),i=await ea(r,{returnSecureToken:!0,email:t,password:n}),s=await ta._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function ua(e,t,n){return la(Ai(e),Go.credential(t,n))}
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
 */new WeakMap;
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
class ha{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
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
 */class pa extends ha{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Lo()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=di();return wo(e)||Co(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Ao(),this._shouldAllowMigration=!0}}pa.type="LOCAL";const da=pa;
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
 */class fa extends ha{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}fa.type="SESSION";const ga=fa;
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
class ma{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new ma(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
function va(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */ma.receivers=[];class ya{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=va("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
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
 */function _a(){return window}
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
function ba(){return void 0!==_a().WorkerGlobalScope&&"function"==typeof _a().importScripts}class wa{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Sa(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function ka(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new wa(e).toPromise()}(),t(await ka()))}))}))}async function Ea(e,t,n){const r=Sa(e,!0).put({fbase_key:t,value:n});return new wa(r).toPromise()}function Ia(e,t){const n=Sa(e,!0).delete(t);return new wa(n).toPromise()}class Ta{async _openDb(){return this.db||(this.db=await ka()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ba()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ma._getInstance(ba()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new ya(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ka();return await Ea(e,"__sak","1"),await Ia(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ea(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Sa(e,!1).get(t),r=await new wa(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Ia(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Sa(e,!1).getAll();return new wa(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Ta.type="LOCAL";const Ca=Ta;
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
 */function La(e){return new Promise(((t,n)=>{const r=document.createElement("script");
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
var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Ns("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function Aa(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
Aa("rcb"),new Gs(3e4,6e4);async function Pa(e,t,n){var r;const i=await n.verify();try{let s;if(Us("string"==typeof i,e,"argument-error"),Us("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Us("enroll"===t.type,e,"internal-error");const n=await
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
function(e,t){return Qs(e,"POST","/v2/accounts/mfaEnrollment:start",Ys(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{Us("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;Us(n,e,"missing-multi-factor-info");const o=await function(e,t){return Qs(e,"POST","/v2/accounts/mfaSignIn:start",Ys(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Qs(e,"POST","/v1/accounts:sendVerificationCode",Ys(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
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
class Oa{verifyPhoneNumber(e,t){return Pa(this.auth,e,Ai(t))}static credential(e,t){return qo._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Oa.credentialFromTaggedObject(t)}static credentialFromError(e){return Oa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?qo._fromTokenResponse(t,n):null}constructor(e){this.providerId=Oa.PROVIDER_ID,this.auth=No(e)}}
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
function Ra(e,t){return t?Hs(t):(Us(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Oa.PROVIDER_ID="phone",Oa.PHONE_SIGN_IN_METHOD="phone";class Na extends jo{_getIdTokenResponse(e){return Ho(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ho(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ho(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Ma(e){return aa(e.auth,new Na(e),e.bypassAuthState)}function Da(e){const{auth:t,user:n}=e;return Us(n,t,"internal-error"),oa(n,new Na(e),e.bypassAuthState)}async function xa(e){const{auth:t,user:n}=e;return Us(n,t,"internal-error"),sa(n,new Na(e),e.bypassAuthState)}
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
 */class Ua{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ma;case"linkViaPopup":case"linkViaRedirect":return xa;case"reauthViaPopup":case"reauthViaRedirect":return Da;default:Rs(this.auth,"internal-error")}}resolve(e){Fs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
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
 */const ja=new Gs(2e3,1e4);class Fa extends Ua{async executeNotNull(){const e=await this.execute();return Us(e,this.auth,"internal-error"),e}async onExecution(){Fs(1===this.filter.length,"Popup operations only handle one event");const e=va();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Ns(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Ns(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fa.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Ns(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,ja.get())};e()}constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Fa.currentPopupAction&&Fa.currentPopupAction.cancel(),Fa.currentPopupAction=this}}Fa.currentPopupAction=null;
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
const Ba=new Map;class Ha extends Ua{async execute(){let e=Ba.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=za(t),r=qa(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Ba.set(this.auth._key(),e)}return this.bypassAuthState||Ba.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}async function $a(e,t){return qa(e)._set(za(t),"true")}function Va(e,t){Ba.set(e._key(),t)}function qa(e){return Hs(e._redirectPersistence)}function za(e){return vo("pendingRedirect",e.config.apiKey,e.name)}
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
 */function Ga(e,t,n){return async function(e,t,n){const r=No(e);Ds(e,t,Ko),await r._initializationPromise;const i=Ra(r,n);return await $a(i,r),i._openRedirect(r,t,"signInViaRedirect")}(e,t,n)}async function Ka(e,t){return await No(e)._initializationPromise,Wa(e,t,!1)}async function Wa(e,t,n=!1){const r=No(e),i=Ra(r,t),s=new Ha(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class Ja{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ya(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ya(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ns(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xa(e))}saveEventToCache(e){this.cachedEventUids.add(Xa(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Xa(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ya({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const Qa=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Za=/^https?/;async function el(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Qs(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(tl(e))return}catch(e){}Rs(e,"unauthorized-domain")}function tl(e){const t=$s(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Za.test(n))return!1;if(Qa.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const nl=new Gs(3e4,6e4);function rl(){const e=_a().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let il=null;function sl(e){return il=il||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){rl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{rl(),n(Ns(e,"network-request-failed"))},timeout:nl.get()})}if(null===(i=null===(r=_a().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=_a().gapi)||void 0===s?void 0:s.load)){const t=Aa("iframefcb");return _a()[t]=()=>{gapi.load?o():n(Ns(e,"network-request-failed"))},La(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw il=null,e}))}(e),il}
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
 */const ol=new Gs(5e3,15e3),al={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ll=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cl(e){const t=e.config;Us(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ks(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.19.1"},i=ll.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ki(r).slice(1)}`}
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
const ul={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class hl{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function pl(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ul),{width:r.toString(),height:i.toString(),top:s,left:o}),c=di().toLowerCase();n&&(a=So(c)?"_blank":n),bo(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=di()){var t;return Co(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",a),new hl(null);const h=window.open(t||"",a,u);Us(h,e,"popup-blocked");try{h.focus()}catch(e){}return new hl(h)}function dl(e,t,n,r,i,s){Us(e.config.authDomain,e,"auth-domain-config-required"),Us(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.19.1",eventId:i};if(t instanceof Ko){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",bi(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Wo){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?Ks(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
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
 */(e)}?${ki(a).slice(1)}`}const fl=class{async _openPopup(e,t,n,r){var i;Fs(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return pl(e,dl(e,t,n,$s(),r),va())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=dl(e,t,n,$s(),r),_a().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Fs(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await sl(e),n=_a().gapi;return Us(n,e,"internal-error"),t.open({where:document.body,url:cl(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:al,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Ns(e,"network-request-failed"),s=_a().setTimeout((()=>{r(i)}),ol.get());function o(){_a().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new Ja(e);return t.register("authEvent",(t=>{Us(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Rs(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=el(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ao()||wo()||Co()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ga,this._completeRedirectFn=Wa,this._overrideRedirectResult=Va}};
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
class gl{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Us(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
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
const ml=ui("authIdTokenMaxAge")||300;let vl=null;var yl;yl="Browser",us(new Pi("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((e,n)=>{Us(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),Us(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:yl,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Po(yl)},o=new Ro(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Hs);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),us(new Pi("auth-internal",(e=>{const t=No(e.getProvider("auth").getImmediate());return new gl(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),ms("@firebase/auth","0.22.0",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(yl)),ms("@firebase/auth","0.22.0","esm2017");
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
ms("firebase","9.19.1","app");var _l,bl="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},wl={},Sl=Sl||{},kl=bl||self;function El(){}function Il(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function Tl(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var Cl="closure_uid_"+(1e9*Math.random()>>>0),Ll=0;function Al(e,t,n){return e.call.apply(e.bind,arguments)}function Pl(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Ol(e,t,n){return(Ol=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Al:Pl).apply(null,arguments)}function Rl(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Nl(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function Ml(){this.s=this.s,this.o=this.o}Ml.prototype.s=!1,Ml.prototype.na=function(){var e;!this.s&&(this.s=!0,this.M(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,Cl)&&e[Cl]||(e[Cl]=++Ll))},Ml.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Dl=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function xl(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Ul(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(Il(n)){const t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function jl(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}jl.prototype.h=function(){this.defaultPrevented=!0};var Fl=function(){if(!kl.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{kl.addEventListener("test",El,t),kl.removeEventListener("test",El,t)}catch(e){}return e}();function Bl(e){return/^[\s\xa0]*$/.test(e)}var Hl=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function $l(e,t){return e<t?-1:e>t?1:0}function Vl(){var e=kl.navigator;return e&&(e=e.userAgent)?e:""}function ql(e){return-1!=Vl().indexOf(e)}function zl(e){return zl[" "](e),e}zl[" "]=El;var Gl,Kl,Wl=ql("Opera"),Jl=ql("Trident")||ql("MSIE"),Xl=ql("Edge"),Yl=Xl||Jl,Ql=ql("Gecko")&&!(-1!=Vl().toLowerCase().indexOf("webkit")&&!ql("Edge"))&&!(ql("Trident")||ql("MSIE"))&&!ql("Edge"),Zl=-1!=Vl().toLowerCase().indexOf("webkit")&&!ql("Edge");function ec(){var e=kl.document;return e?e.documentMode:void 0}e:{var tc="",nc=(Kl=Vl(),Ql?/rv:([^\);]+)(\)|;)/.exec(Kl):Xl?/Edge\/([\d\.]+)/.exec(Kl):Jl?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Kl):Zl?/WebKit\/(\S+)/.exec(Kl):Wl?/(?:Version)[ \/]?(\S+)/.exec(Kl):void 0);if(nc&&(tc=nc?nc[1]:""),Jl){var rc=ec();if(null!=rc&&rc>parseFloat(tc)){Gl=String(rc);break e}}Gl=tc}var ic,sc={};function oc(){return function(e){var t=sc;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=Hl(String(Gl)).split("."),n=Hl("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=$l(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||$l(0==i[2].length,0==s[2].length)||$l(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(kl.document&&Jl){var ac=ec();ic=ac||(parseInt(Gl,10)||void 0)}else ic=void 0;var lc=ic;function cc(e,t){if(jl.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ql){e:{try{zl(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:uc[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&cc.X.h.call(this)}}Nl(cc,jl);var uc={2:"touch",3:"pen",4:"mouse"};cc.prototype.h=function(){cc.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var hc="closure_listenable_"+(1e6*Math.random()|0),pc=0;function dc(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++pc,this.ba=this.ea=!1}function fc(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function gc(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function mc(e){const t={};for(const n in e)t[n]=e[n];return t}const vc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yc(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<vc.length;t++)n=vc[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function _c(e){this.src=e,this.g={},this.h=0}function bc(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Dl(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(fc(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function wc(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}_c.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=wc(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):((t=new dc(t,this.src,s,!!r,i)).ea=n,e.push(t)),t};var Sc="closure_lm_"+(1e6*Math.random()|0),kc={};function Ec(e,t,n,r,i){if(r&&r.once)return Tc(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Ec(e,t[s],n,r,i);return null}return n=Nc(n),e&&e[hc]?e.N(t,n,Tl(r)?!!r.capture:!!r,i):Ic(e,t,n,!1,r,i)}function Ic(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Tl(i)?!!i.capture:!!i,a=Oc(e);if(a||(e[Sc]=a=new _c(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=Pc;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Fl||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Ac(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Tc(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Tc(e,t[s],n,r,i);return null}return n=Nc(n),e&&e[hc]?e.O(t,n,Tl(r)?!!r.capture:!!r,i):Ic(e,t,n,!0,r,i)}function Cc(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Cc(e,t[s],n,r,i);else r=Tl(r)?!!r.capture:!!r,n=Nc(n),e&&e[hc]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=wc(s=e.g[t],n,r,i))&&(fc(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Oc(e))&&(t=e.g[t.toString()],e=-1,t&&(e=wc(t,n,r,i)),(n=-1<e?t[e]:null)&&Lc(n))}function Lc(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[hc])bc(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Ac(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Oc(t))?(bc(n,e),0==n.h&&(n.src=null,t[Sc]=null)):fc(e)}}}function Ac(e){return e in kc?kc[e]:kc[e]="on"+e}function Pc(e,t){if(e.ba)e=!0;else{t=new cc(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&Lc(e),e=n.call(r,t)}return e}function Oc(e){return(e=e[Sc])instanceof _c?e:null}var Rc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nc(e){return"function"==typeof e?e:(e[Rc]||(e[Rc]=function(t){return e.handleEvent(t)}),e[Rc])}function Mc(){Ml.call(this),this.i=new _c(this),this.P=this,this.I=null}function Dc(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new jl(t,e);else if(t instanceof jl)t.target=t.target||e;else{var i=t;yc(t=new jl(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=xc(o,r,!0,t)&&i}if(i=xc(o=t.g=e,r,!0,t)&&i,i=xc(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=xc(o=t.g=n[s],r,!1,t)&&i}function xc(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&bc(e.i,o),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}Nl(Mc,Ml),Mc.prototype[hc]=!0,Mc.prototype.removeEventListener=function(e,t,n,r){Cc(this,e,t,n,r)},Mc.prototype.M=function(){if(Mc.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)fc(n[r]);delete t.g[e],t.h--}}this.I=null},Mc.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Mc.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Uc=kl.JSON.stringify;function jc(){var e=zc;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Fc,Bc=new class{get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}}((()=>new Hc),(e=>e.reset()));class Hc{set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function $c(e){kl.setTimeout((()=>{throw e}),0)}function Vc(e,t){Fc||function(){var e=kl.Promise.resolve(void 0);Fc=function(){e.then(Gc)}}(),qc||(Fc(),qc=!0),zc.add(e,t)}var qc=!1,zc=new class{add(e,t){const n=Bc.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function Gc(){for(var e;e=jc();){try{e.h.call(e.g)}catch(e){$c(e)}var t=Bc;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}qc=!1}function Kc(e,t){Mc.call(this),this.h=e||1,this.g=t||kl,this.j=Ol(this.lb,this),this.l=Date.now()}function Wc(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function Jc(e,t,n){if("function"==typeof e)n&&(e=Ol(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Ol(e.handleEvent,e)}return 2147483647<Number(t)?-1:kl.setTimeout(e,t||0)}function Xc(e){e.g=Jc((()=>{e.g=null,e.i&&(e.i=!1,Xc(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}Nl(Kc,Mc),(_l=Kc.prototype).ca=!1,_l.R=null,_l.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Dc(this,"tick"),this.ca&&(Wc(this),this.start()))}},_l.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},_l.M=function(){Kc.X.M.call(this),Wc(this),delete this.g};class Yc extends Ml{l(e){this.h=arguments,this.g?this.i=!0:Xc(this)}M(){super.M(),this.g&&(kl.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}}function Qc(e){Ml.call(this),this.h=e,this.g={}}Nl(Qc,Ml);var Zc=[];function eu(e,t,n,r){Array.isArray(n)||(n&&(Zc[0]=n.toString()),n=Zc);for(var i=0;i<n.length;i++){var s=Ec(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function tu(e){gc(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Lc(e)}),e),e.g={}}function nu(){this.g=!0}function ru(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Uc(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Qc.prototype.M=function(){Qc.X.M.call(this),tu(this)},Qc.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},nu.prototype.Aa=function(){this.g=!1},nu.prototype.info=function(){};var iu={},su=null;function ou(){return su=su||new Mc}function au(e){jl.call(this,iu.Pa,e)}function lu(e){const t=ou();Dc(t,new au(t))}function cu(e,t){jl.call(this,iu.STAT_EVENT,e),this.stat=t}function uu(e){const t=ou();Dc(t,new cu(t,e))}function hu(e,t){jl.call(this,iu.Qa,e),this.size=t}function pu(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return kl.setTimeout((function(){e()}),t)}iu.Pa="serverreachability",Nl(au,jl),iu.STAT_EVENT="statevent",Nl(cu,jl),iu.Qa="timingevent",Nl(hu,jl);var du={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},fu={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function gu(){}function mu(e){return e.h||(e.h=e.i())}function vu(){}gu.prototype.h=null;var yu,_u={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function bu(){jl.call(this,"d")}function wu(){jl.call(this,"c")}function Su(){}function ku(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new Qc(this),this.O=Iu,e=Yl?125:void 0,this.T=new Kc(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Eu}function Eu(){this.i=null,this.g="",this.h=!1}Nl(bu,jl),Nl(wu,jl),Nl(Su,gu),Su.prototype.g=function(){return new XMLHttpRequest},Su.prototype.i=function(){return{}},yu=new Su;var Iu=45e3,Tu={},Cu={};function Lu(e,t,n){e.K=1,e.v=Ku($u(t)),e.s=n,e.P=!0,Au(e,null)}function Au(e,t){e.F=Date.now(),Nu(e),e.A=$u(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),oh(n.i,"t",r),e.C=0,n=e.l.H,e.h=new Eu,e.g=sp(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Yc(Ol(e.La,e,e.g),e.N)),eu(e.S,e.g,"readystatechange",e.ib),t=e.H?mc(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),lu(),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function Pu(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function Ou(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=Ru(e,n),r==Cu){4==t&&(e.o=4,uu(14),i=!1),ru(e.j,e.m,null,"[Incomplete Response]");break}if(r==Tu){e.o=4,uu(15),ru(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}ru(e.j,e.m,r,null),ju(e,r)}Pu(e)&&r!=Cu&&r!=Tu&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,uu(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Yh(t),t.K=!0,uu(11))):(ru(e.j,e.m,n,"[Invalid Chunked Response]"),Uu(e),xu(e))}function Ru(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Cu:(n=Number(t.substring(n,r)),isNaN(n)?Tu:(r+=1)+n>t.length?Cu:(t=t.substr(r,n),e.C=r+n,t))}function Nu(e){e.V=Date.now()+e.O,Mu(e,e.O)}function Mu(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=pu(Ol(e.gb,e),t)}function Du(e){e.B&&(kl.clearTimeout(e.B),e.B=null)}function xu(e){0==e.l.G||e.I||ep(e.l,e)}function Uu(e){Du(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Wc(e.T),tu(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function ju(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||ph(n.h,e)))if(!e.J&&ph(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Zh(n),Vh(n)}Xh(n),uu(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=pu(Ol(n.cb,n),6e3));if(1>=hh(n.h)&&n.ja){try{n.ja()}catch(e){}n.ja=void 0}}else np(n,11)}else if((e.J||n.g==e)&&Zh(n),!Bl(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.I=c[1],n.ka=c[2];const t=c[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const i=c[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(dh(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,Gu(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=e;if((r=n).sa=ip(r,r.H?r.ka:null,r.V),o.J){fh(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Du(a),Nu(a)),r.g=o}else Jh(r);0<n.i.length&&zh(n)}else"stop"!=c[0]&&"close"!=c[0]||np(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?np(n,7):$h(n):"noop"!=c[0]&&n.l&&n.l.wa(c),n.A=0)}lu()}catch(e){}}function Fu(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Il(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(Il(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(Il(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(_l=ku.prototype).setTimeout=function(e){this.O=e},_l.ib=function(e){e=e.target;const t=this.L;t&&3==xh(e)?t.l():this.La(e)},_l.La=function(e){try{if(e==this.g)e:{const u=xh(this.g);var t=this.g.Ea();this.g.aa();if(!(3>u)&&(3!=u||Yl||this.g&&(this.h.h||this.g.fa()||Uh(this.g)))){this.I||4!=u||7==t||lu(),Du(this);var n=this.g.aa();this.Y=n;t:if(Pu(this)){var r=Uh(this.g);e="";var i=r.length,s=4==xh(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Uu(this),xu(this);var o="";break t}this.h.i=new kl.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Bl(a)){var c=a;break t}}c=null}if(!(n=c)){this.i=!1,this.o=3,uu(12),Uu(this),xu(this);break e}ru(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ju(this,n)}this.P?(Ou(this,u,o),Yl&&this.i&&3==u&&(eu(this.S,this.T,"tick",this.hb),this.T.start())):(ru(this.j,this.m,o,null),ju(this,o)),4==u&&Uu(this),this.i&&!this.I&&(4==u?ep(this.l,this):(this.i=!1,Nu(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,uu(12)):(this.o=0,uu(13)),Uu(this),xu(this)}}}catch(e){}},_l.hb=function(){if(this.g){var e=xh(this.g),t=this.g.fa();this.C<t.length&&(Du(this),Ou(this,e,t),this.i&&4!=e&&Nu(this))}},_l.cancel=function(){this.I=!0,Uu(this)},_l.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(lu(),uu(17)),Uu(this),this.o=2,xu(this)):Mu(this,this.V-e)};var Bu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hu(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Hu){this.h=void 0!==t?t:e.h,Vu(this,e.j),this.s=e.s,this.g=e.g,qu(this,e.m),this.l=e.l,t=e.i;var n=new nh;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),zu(this,n),this.o=e.o}else e&&(n=String(e).match(Bu))?(this.h=!!t,Vu(this,n[1]||"",!0),this.s=Wu(n[2]||""),this.g=Wu(n[3]||"",!0),qu(this,n[4]),this.l=Wu(n[5]||"",!0),zu(this,n[6]||"",!0),this.o=Wu(n[7]||"")):(this.h=!!t,this.i=new nh(null,this.h))}function $u(e){return new Hu(e)}function Vu(e,t,n){e.j=n?Wu(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function qu(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function zu(e,t,n){t instanceof nh?(e.i=t,function(e,t){t&&!e.j&&(rh(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(ih(this,t),oh(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Ju(t,eh)),e.i=new nh(t,e.h))}function Gu(e,t,n){e.i.set(t,n)}function Ku(e){return Gu(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Wu(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ju(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Xu),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Xu(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Hu.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ju(t,Yu,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Ju(t,Yu,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Ju(n,"/"==n.charAt(0)?Zu:Qu,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ju(n,th)),e.join("")};var Yu=/[#\/\?@]/g,Qu=/[#\?:]/g,Zu=/[#\?]/g,eh=/[#\?@]/g,th=/#/g;function nh(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function rh(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function ih(e,t){rh(e),t=ah(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function sh(e,t){return rh(e),t=ah(e,t),e.g.has(t)}function oh(e,t,n){ih(e,t),0<n.length&&(e.i=null,e.g.set(ah(e,t),xl(n)),e.h+=n.length)}function ah(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(_l=nh.prototype).add=function(e,t){rh(this),this.i=null,e=ah(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},_l.forEach=function(e,t){rh(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},_l.oa=function(){rh(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},_l.W=function(e){rh(this);let t=[];if("string"==typeof e)sh(this,e)&&(t=t.concat(this.g.get(ah(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},_l.set=function(e,t){return rh(this),this.i=null,sh(this,e=ah(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},_l.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},_l.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function lh(e){this.l=e||ch,kl.PerformanceNavigationTiming?e=0<(e=kl.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(kl.g&&kl.g.Ga&&kl.g.Ga()&&kl.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ch=10;function uh(e){return!!e.h||!!e.g&&e.g.size>=e.j}function hh(e){return e.h?1:e.g?e.g.size:0}function ph(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function dh(e,t){e.g?e.g.add(t):e.h=t}function fh(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function gh(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return xl(e.i)}function mh(){}function vh(){this.g=new mh}function yh(e,t,n){const r=n||"";try{Fu(e,(function(e,n){let i=e;Tl(e)&&(i=Uc(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function _h(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function bh(e){this.l=e.ac||null,this.j=e.jb||!1}function wh(e,t){Mc.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Sh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}lh.prototype.cancel=function(){if(this.i=gh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},mh.prototype.stringify=function(e){return kl.JSON.stringify(e,void 0)},mh.prototype.parse=function(e){return kl.JSON.parse(e,void 0)},Nl(bh,gu),bh.prototype.g=function(){return new wh(this.l,this.j)},bh.prototype.i=function(e){return function(){return e}}({}),Nl(wh,Mc);var Sh=0;function kh(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function Eh(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ih(e)}function Ih(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(_l=wh.prototype).open=function(e,t){if(this.readyState!=Sh)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ih(this)},_l.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||kl).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},_l.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Eh(this)),this.readyState=Sh},_l.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ih(this)),this.g&&(this.readyState=3,Ih(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==kl.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;kh(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},_l.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Eh(this):Ih(this),3==this.readyState&&kh(this)}},_l.Va=function(e){this.g&&(this.response=this.responseText=e,Eh(this))},_l.Ua=function(e){this.g&&(this.response=e,Eh(this))},_l.ga=function(){this.g&&Eh(this)},_l.setRequestHeader=function(e,t){this.v.append(e,t)},_l.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},_l.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(wh.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Th=kl.JSON.parse;function Ch(e){Mc.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Lh,this.K=this.L=!1}Nl(Ch,Mc);var Lh="",Ah=/^https?$/i,Ph=["POST","PUT"];function Oh(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Rh(e),Mh(e)}function Rh(e){e.D||(e.D=!0,Dc(e,"complete"),Dc(e,"error"))}function Nh(e){if(e.h&&void 0!==Sl&&(!e.C[1]||4!=xh(e)||2!=e.aa()))if(e.v&&4==xh(e))Jc(e.Ha,0,e);else if(Dc(e,"readystatechange"),4==xh(e)){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.H).match(Bu)[1]||null;if(!i&&kl.self&&kl.self.location){var s=kl.self.location.protocol;i=s.substr(0,s.length-1)}r=!Ah.test(i?i.toLowerCase():"")}n=r}if(n)Dc(e,"complete"),Dc(e,"success");else{e.m=6;try{var o=2<xh(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.aa()+"]",Rh(e)}}finally{Mh(e)}}}function Mh(e,t){if(e.g){Dh(e);const n=e.g,r=e.C[0]?El:null;e.g=null,e.C=null,t||Dc(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function Dh(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(kl.clearTimeout(e.A),e.A=null)}function xh(e){return e.g?e.g.readyState:0}function Uh(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Lh:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function jh(e){let t="";return gc(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Fh(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=jh(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Gu(e,t,n))}function Bh(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Hh(e){this.Ca=0,this.i=[],this.j=new nu,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Bh("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Bh("baseRetryDelayMs",5e3,e),this.bb=Bh("retryDelaySeedMs",1e4,e),this.$a=Bh("forwardChannelMaxRetries",2,e),this.ta=Bh("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new lh(e&&e.concurrentRequestLimit),this.Fa=new vh,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function $h(e){if(qh(e),3==e.G){var t=e.U++,n=$u(e.F);Gu(n,"SID",e.I),Gu(n,"RID",t),Gu(n,"TYPE","terminate"),Kh(e,n),(t=new ku(e,e.j,t,void 0)).K=2,t.v=Ku($u(n)),n=!1,kl.navigator&&kl.navigator.sendBeacon&&(n=kl.navigator.sendBeacon(t.v.toString(),"")),!n&&kl.Image&&((new Image).src=t.v,n=!0),n||(t.g=sp(t.l,null),t.g.da(t.v)),t.F=Date.now(),Nu(t)}rp(e)}function Vh(e){e.g&&(Yh(e),e.g.cancel(),e.g=null)}function qh(e){Vh(e),e.u&&(kl.clearTimeout(e.u),e.u=null),Zh(e),e.h.cancel(),e.m&&("number"==typeof e.m&&kl.clearTimeout(e.m),e.m=null)}function zh(e){uh(e.h)||e.m||(e.m=!0,Vc(e.Ja,e),e.C=0)}function Gh(e,t){var n;n=t?t.m:e.U++;const r=$u(e.F);Gu(r,"SID",e.I),Gu(r,"RID",n),Gu(r,"AID",e.T),Kh(e,r),e.o&&e.s&&Fh(r,e.o,e.s),n=new ku(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Wh(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),dh(e.h,n),Lu(n,r,t)}function Kh(e,t){e.ia&&gc(e.ia,(function(e,n){Gu(t,n,e)})),e.l&&Fu({},(function(e,n){Gu(t,n,e)}))}function Wh(e,t,n){n=Math.min(e.i.length,n);var r=e.l?Ol(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{yh(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function Jh(e){e.g||e.u||(e.Z=1,Vc(e.Ia,e),e.A=0)}function Xh(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=pu(Ol(e.Ia,e),tp(e,e.A)),e.A++,!0)}function Yh(e){null!=e.B&&(kl.clearTimeout(e.B),e.B=null)}function Qh(e){e.g=new ku(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=$u(e.sa);Gu(t,"RID","rpc"),Gu(t,"SID",e.I),Gu(t,"CI",e.L?"0":"1"),Gu(t,"AID",e.T),Gu(t,"TYPE","xmlhttp"),Kh(e,t),e.o&&e.s&&Fh(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Ku($u(t)),n.s=null,n.P=!0,Au(n,e)}function Zh(e){null!=e.v&&(kl.clearTimeout(e.v),e.v=null)}function ep(e,t){var n=null;if(e.g==t){Zh(e),Yh(e),e.g=null;var r=2}else{if(!ph(e.h,t))return;n=t.D,fh(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;Dc(r=ou(),new hu(r,n)),zh(e)}else Jh(e);else if(3==(i=t.o)||0==i&&0<e.pa||!(1==r&&function(e,t){return!(hh(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.C>=(e.Za?0:e.$a)||(e.m=pu(Ol(e.Ja,e,t),tp(e,e.C)),e.C++,0)))}(e,t)||2==r&&Xh(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:np(e,5);break;case 4:np(e,10);break;case 3:np(e,6);break;default:np(e,2)}}function tp(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function np(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=Ol(e.kb,e);n||(n=new Hu("//www.google.com/images/cleardot.gif"),kl.location&&"http"==kl.location.protocol||Vu(n,"https"),Ku(n)),function(e,t){const n=new nu;if(kl.Image){const r=new Image;r.onload=Rl(_h,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Rl(_h,n,r,"TestLoadImage: error",!1,t),r.onabort=Rl(_h,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Rl(_h,n,r,"TestLoadImage: timeout",!1,t),kl.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else uu(2);e.G=0,e.l&&e.l.va(t),rp(e),qh(e)}function rp(e){if(e.G=0,e.la=[],e.l){const t=gh(e.h);0==t.length&&0==e.i.length||(Ul(e.la,t),Ul(e.la,e.i),e.h.i.length=0,xl(e.i),e.i.length=0),e.l.ua()}}function ip(e,t,n){var r=n instanceof Hu?$u(n):new Hu(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),qu(r,r.m);else{var i=kl.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Hu(null,void 0);r&&Vu(s,r),t&&(s.g=t),i&&qu(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&Gu(r,n,t),Gu(r,"VER",e.ma),Kh(e,r),r}function sp(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new Ch(new bh({jb:!0})):new Ch(e.ra)).Ka(e.H),t}function op(){}function ap(){if(Jl&&!(10<=Number(lc)))throw Error("Environmental error: no available transport.")}function lp(e,t){Mc.call(this),this.g=new Hh(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Bl(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Bl(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new hp(this)}function cp(e){bu.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function up(){wu.call(this),this.status=1}function hp(e){this.g=e}(_l=Ch.prototype).Ka=function(e){this.L=e},_l.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():yu.g(),this.C=this.u?mu(this.u):mu(yu),this.g.onreadystatechange=Ol(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void Oh(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=kl.FormData&&e instanceof kl.FormData,!(0<=Dl(Ph,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Dh(this),0<this.B&&((this.K=function(e){return Jl&&oc()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ol(this.qa,this)):this.A=Jc(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){Oh(this,e)}},_l.qa=function(){void 0!==Sl&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Dc(this,"timeout"),this.abort(8))},_l.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Dc(this,"complete"),Dc(this,"abort"),Mh(this))},_l.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mh(this,!0)),Ch.X.M.call(this)},_l.Ha=function(){this.s||(this.F||this.v||this.l?Nh(this):this.fb())},_l.fb=function(){Nh(this)},_l.aa=function(){try{return 2<xh(this)?this.g.status:-1}catch(e){return-1}},_l.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},_l.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Th(t)}},_l.Ea=function(){return this.m},_l.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(_l=Hh.prototype).ma=8,_l.G=1,_l.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new ku(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=mc(s),yc(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Wh(this,i,t),Gu(n=$u(this.F),"RID",e),Gu(n,"CVER",22),this.D&&Gu(n,"X-HTTP-Session-Id",this.D),Kh(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(jh(s)))+"&"+t:this.o&&Fh(n,this.o,s)),dh(this.h,i),this.Ya&&Gu(n,"TYPE","init"),this.O?(Gu(n,"$req",t),Gu(n,"SID","null"),i.Z=!0,Lu(i,n,null)):Lu(i,n,t),this.G=2}}else 3==this.G&&(e?Gh(this,e):0==this.i.length||uh(this.h)||Gh(this))},_l.Ia=function(){if(this.u=null,Qh(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=pu(Ol(this.eb,this),e)}},_l.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,uu(10),Vh(this),Qh(this))},_l.cb=function(){null!=this.v&&(this.v=null,Vh(this),Xh(this),uu(19))},_l.kb=function(e){e?(this.j.info("Successfully pinged google.com"),uu(2)):(this.j.info("Failed to ping google.com"),uu(1))},(_l=op.prototype).xa=function(){},_l.wa=function(){},_l.va=function(){},_l.ua=function(){},_l.Ra=function(){},ap.prototype.g=function(e,t){return new lp(e,t)},Nl(lp,Mc),lp.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;uu(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=ip(e,null,e.V),zh(e)},lp.prototype.close=function(){$h(this.g)},lp.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=Uc(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.ab++,e)),3==t.G&&zh(t)},lp.prototype.M=function(){this.g.l=null,delete this.j,$h(this.g),delete this.g,lp.X.M.call(this)},Nl(cp,bu),Nl(up,wu),Nl(hp,op),hp.prototype.xa=function(){Dc(this.g,"a")},hp.prototype.wa=function(e){Dc(this.g,new cp(e))},hp.prototype.va=function(e){Dc(this.g,new up)},hp.prototype.ua=function(){Dc(this.g,"b")},ap.prototype.createWebChannel=ap.prototype.g,lp.prototype.send=lp.prototype.u,lp.prototype.open=lp.prototype.m,lp.prototype.close=lp.prototype.close,du.NO_ERROR=0,du.TIMEOUT=8,du.HTTP_ERROR=6,fu.COMPLETE="complete",vu.EventType=_u,_u.OPEN="a",_u.CLOSE="b",_u.ERROR="c",_u.MESSAGE="d",Mc.prototype.listen=Mc.prototype.N,Ch.prototype.listenOnce=Ch.prototype.O,Ch.prototype.getLastError=Ch.prototype.Oa,Ch.prototype.getLastErrorCode=Ch.prototype.Ea,Ch.prototype.getStatus=Ch.prototype.aa,Ch.prototype.getResponseJson=Ch.prototype.Sa,Ch.prototype.getResponseText=Ch.prototype.fa,Ch.prototype.send=Ch.prototype.da,Ch.prototype.setWithCredentials=Ch.prototype.Ka;wl.createWebChannelTransport=function(){return new ap},wl.getStatEventTarget=function(){return ou()},wl.ErrorCode=du,wl.EventType=fu,wl.Event=iu,wl.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},wl.FetchXmlHttpFactory=bh,wl.WebChannel=vu,wl.XhrIo=Ch;
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
class pp{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}constructor(e){this.uid=e}}pp.UNAUTHENTICATED=new pp(null),pp.GOOGLE_CREDENTIALS=new pp("google-credentials-uid"),pp.FIRST_PARTY=new pp("first-party-uid"),pp.MOCK_USER=new pp("mock-user");
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
let dp="9.19.0";
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
 */const fp=new Bi("@firebase/firestore");function gp(e,...t){if(fp.logLevel<=Mi.DEBUG){const n=t.map(yp);fp.debug(`Firestore (${dp}): ${e}`,...n)}}function mp(e,...t){if(fp.logLevel<=Mi.ERROR){const n=t.map(yp);fp.error(`Firestore (${dp}): ${e}`,...n)}}function vp(e,...t){if(fp.logLevel<=Mi.WARN){const n=t.map(yp);fp.warn(`Firestore (${dp}): ${e}`,...n)}}function yp(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */function _p(e="Unexpected state"){const t=`FIRESTORE (${dp}) INTERNAL ASSERTION FAILED: `+e;throw mp(t),new Error(t)}function bp(e,t){e||_p()}
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
const wp={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Sp extends vi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class kp{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class Ep{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ip{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(pp.UNAUTHENTICATED)))}shutdown(){}}class Tp{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}constructor(e){this.token=e,this.changeListener=null}}class Cp{start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new kp;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new kp,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{gp("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(gp("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new kp)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(gp("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(bp("string"==typeof t.accessToken),new Ep(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return bp(null===e||"string"==typeof e),new pp(e)}constructor(e){this.t=e,this.currentUser=pp.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class Lp{p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=pp.FIRST_PARTY,this.g=new Map}}class Ap{getToken(){return Promise.resolve(new Lp(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(pp.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(e,t,n){this.h=e,this.l=t,this.m=n}}class Pp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Op{start(e,t){const n=e=>{null!=e.error&&gp("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,gp("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{gp("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?r(e):gp("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(bp("string"==typeof e.token),this.T=e.token,new Pp(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}}
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
function Rp(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
 */class Np{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Rp(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Mp(e,t){return e<t?-1:e>t?1:0}
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
class Dp{get length(){return this.len}isEqual(e){return 0===Dp.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Dp?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}constructor(e,t,n){void 0===t?t=0:t>e.length&&_p(),void 0===n?n=e.length-t:n>e.length-t&&_p(),this.segments=e,this.offset=t,this.len=n}}class xp extends Dp{construct(e,t,n){return new xp(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Sp(wp.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new xp(t)}static emptyPath(){return new xp([])}}
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
class Up{static fromPath(e){return new Up(xp.fromString(e))}static fromName(e){return new Up(xp.fromString(e).popFirst(5))}static empty(){return new Up(xp.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===xp.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return xp.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Up(new xp(e.slice()))}constructor(e){this.path=e}}
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
 */class jp{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}jp.UNKNOWN_ID=-1;function Fp(e){return"IndexedDbTransactionError"===e.name}
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
class Bp{ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}}function Hp(e){return 0===e&&1/e==-1/0}Bp.ct=-1;const $p=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Vp=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],qp=Vp;
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
class zp{insert(e,t){return new zp(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Kp.BLACK,null,null))}remove(e){return new zp(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Kp.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gp(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gp(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gp(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gp(this.root,e,this.comparator,!0)}constructor(e,t){this.comparator=e,this.root=t||Kp.EMPTY}}class Gp{getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}}class Kp{copy(e,t,n,r,i){return new Kp(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Kp.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Kp.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Kp.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Kp.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _p();if(this.right.isRed())throw _p();const e=this.left.check();if(e!==this.right.check())throw _p();return e+(this.isRed()?0:1)}constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Kp.RED,this.left=null!=r?r:Kp.EMPTY,this.right=null!=i?i:Kp.EMPTY,this.size=this.left.size+1+this.right.size}}Kp.EMPTY=null,Kp.RED=!0,Kp.BLACK=!1,Kp.EMPTY=new class{get key(){throw _p()}get value(){throw _p()}get color(){throw _p()}get left(){throw _p()}get right(){throw _p()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Kp(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
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
class Wp{has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Jp(this.data.getIterator())}getIteratorFrom(e){return new Jp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Wp))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Wp(this.comparator);return t.data=e,t}constructor(e){this.comparator=e,this.data=new zp(this.comparator)}}class Jp{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(e){this.iter=e}}
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
 */
class Xp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
 */let Yp=Symbol.iterator;
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
 */class Qp{static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Xp("Invalid base64 string: "+e):e}}(e);return new Qp(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Qp(t)}[Yp](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Mp(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}constructor(e){this.binaryString=e}}Qp.EMPTY_BYTE_STRING=new Qp("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zp(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ed(e){return"string"==typeof e?Qp.fromBase64String(e):Qp.fromUint8Array(e)}
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
class td{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class nd{static empty(){return new nd("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof nd&&e.projectId===this.projectId&&e.database===this.database}constructor(e,t){this.projectId=e,this.database=t||"(default)"}}
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
 */function rd(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
new zp(Up.comparator);new zp(Up.comparator);new zp(Up.comparator),new Wp(Up.comparator);new Wp(Mp);
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
var id,sd;(sd=id||(id={}))[sd.OK=0]="OK",sd[sd.CANCELLED=1]="CANCELLED",sd[sd.UNKNOWN=2]="UNKNOWN",sd[sd.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",sd[sd.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",sd[sd.NOT_FOUND=5]="NOT_FOUND",sd[sd.ALREADY_EXISTS=6]="ALREADY_EXISTS",sd[sd.PERMISSION_DENIED=7]="PERMISSION_DENIED",sd[sd.UNAUTHENTICATED=16]="UNAUTHENTICATED",sd[sd.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",sd[sd.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",sd[sd.ABORTED=10]="ABORTED",sd[sd.OUT_OF_RANGE=11]="OUT_OF_RANGE",sd[sd.UNIMPLEMENTED=12]="UNIMPLEMENTED",sd[sd.INTERNAL=13]="INTERNAL",sd[sd.UNAVAILABLE=14]="UNAVAILABLE",sd[sd.DATA_LOSS=15]="DATA_LOSS";
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
 */class od{oe(e,t){this.ue(e,t),t.ce()}ue(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(Zp(e.integerValue));else if("doubleValue"in e){const n=Zp(e.doubleValue);isNaN(n)?this.ae(t,13):(this.ae(t,15),Hp(n)?t.he(0):t.he(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ae(t,20),"string"==typeof n?t.le(n):(t.le(`${n.seconds||""}`),t.he(n.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(ed(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ae(t,45),t.he(n.latitude||0),t.he(n.longitude||0)}else"mapValue"in e?rd(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):_p()}fe(e,t){this.ae(t,25),this.ye(e,t)}ye(e,t){t.le(e)}me(e,t){const n=e.fields||{};this.ae(t,55);for(const e of Object.keys(n))this.fe(e,t),this.ue(n[e],t)}ge(e,t){const n=e.values||[];this.ae(t,50);for(const e of n)this.ue(e,t)}_e(e,t){this.ae(t,37),Up.fromName(e).path.forEach((e=>{this.ae(t,60),this.ye(e,t)}))}ae(e,t){e.he(t)}de(e){e.he(2)}constructor(){}}od.pe=new od;
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
new Uint8Array(0);class ad{static withCacheSize(e){return new ad(e,ad.DEFAULT_COLLECTION_PERCENTILE,ad.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
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
 */ad.DEFAULT_COLLECTION_PERCENTILE=10,ad.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ad.DEFAULT=new ad(41943040,ad.DEFAULT_COLLECTION_PERCENTILE,ad.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ad.DISABLED=new ad(-1,0,0);function ld(){return"undefined"!=typeof document?document:null}
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
class cd{reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),r=Math.max(0,t-n);r>0&&gp("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,(()=>(this.To=Date.now(),e()))),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ws=e,this.timerId=t,this._o=n,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}}
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
class ud{static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new ud(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Sp(wp.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new kp,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}}function hd(e,t){if(mp("AsyncQueue",`${t}: ${e}`),Fp(e))return new Sp(wp.UNAVAILABLE,`${t}: ${e}`);throw e}
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
class pd{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Sp(wp.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kp;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=hd(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=pp.UNAUTHENTICATED,this.clientId=Np.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{gp("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(gp("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}}
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
const dd=new Map;
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
 */function fd(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":_p()}function gd(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Sp(wp.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fd(e);throw new Sp(wp.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
class md{isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Sp(wp.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Sp(wp.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new Sp(wp.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}}
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
 */class vd{get app(){if(!this._app)throw new Sp(wp.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Sp(wp.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new md(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Ip;switch(e.type){case"firstParty":return new Ap(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Sp(wp.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=dd.get(e);t&&(gp("ComponentProvider","Removing Datastore"),dd.delete(e),t.terminate())}(this),Promise.resolve()}constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new md({}),this._settingsFrozen=!1}}function yd(e,t,n,r={}){var i;const s=(e=gd(e,vd))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&vp("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=pp.MOCK_USER;else{t=pi(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new Sp(wp.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new pp(s)}e._authCredentials=new Tp(new Ep(t,n))}}
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
class _d{get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const t=ld();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise((()=>{}));const t=new kp;return this.Kc((()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.kc.push(e),this.Gc())))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Fp(e))throw e;gp("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao((()=>this.Gc()))}}Kc(e){const t=this.Nc.then((()=>(this.Fc=!0,e().catch((e=>{this.Mc=e,this.Fc=!1;throw mp("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.Fc=!1,e))))));return this.Nc=t,t}enqueueAfterDelay(e,t,n){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);const r=ud.createAndSchedule(this,e,t,n,(e=>this.Qc(e)));return this.$c.push(r),r}Uc(){this.Mc&&_p()}verifyOperationInProgress(){}async zc(){let e;do{e=this.Nc,await e}while(e!==this.Nc)}jc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then((()=>{this.$c.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.$c)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()}))}Hc(e){this.Lc.push(e)}Qc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new cd(this,"async_queue_retry"),this.qc=()=>{const e=ld();e&&gp("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Co.vo()};const e=ld();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.qc)}}class bd extends vd{_terminate(){return this._firestoreClient||wd(this),this._firestoreClient.terminate()}constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new _d,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}}function wd(e){var t,n,r;const i=e._freezeSettings(),s=(o=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",l=e._persistenceKey,new td(o,a,l,(c=i).host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams));var o,a,l,c;e._firestoreClient=new pd(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}new RegExp("[~\\*/\\[\\]]");!function(e,t=!0){dp="9.19.1",us(new Pi("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new bd(new Cp(e.getProvider("auth-internal")),new Op(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Sp(wp.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nd(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),ms("@firebase/firestore","3.10.0",e),ms("@firebase/firestore","3.10.0","esm2017")}();const Sd=fs({apiKey:"AIzaSyAfz0zKTMfxu6wjOe8cEAMtCcpz5hitokc",authDomain:"filmoteka-599e8.firebaseapp.com",databaseURL:"https://filmoteka-599e8-default-rtdb.europe-west1.firebasedatabase.app",projectId:"filmoteka-599e8",storageBucket:"filmoteka-599e8.appspot.com",messagingSenderId:"448204349167",appId:"1:448204349167:web:ac77389e13cfaab0db051a",measurementId:"G-C80DY74WT0"}),kd=(function(e,t){const n="string"==typeof e?e:t||"(default)",r=hs("object"==typeof e?e:gs(),"firestore").getImmediate({identifier:n});if(!r._initialized){const e=ci("firestore");e&&yd(r,...e)}}(Sd),function(e=gs()){const t=hs(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=hs(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(wi(n.getOptions(),null!=t?t:{}))return e;Rs(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:fl,persistence:[Ca,da,ga]}),r=ui("authTokenSyncURL");if(r){const e=(i=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>ml)return;const r=null==t?void 0:t.token;vl!==r&&(vl=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){Ai(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){Ai(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var i;const s=li("auth");return s&&Do(n,`http://${s}`),n}(Sd)),Ed=new Yo,Id=new Qo,Td=new Jo("microsoft.com"),Cd=document.querySelector("#registerForm");Cd.addEventListener("submit",(e=>{e.preventDefault();document.querySelector("#registerUsername").value;const t=document.querySelector("#registerEmail").value,n=document.querySelector("#registerPassword").value,r=document.querySelector("#registerRepeatPassword").value,i=document.querySelector("#registerError");n!==r?(i.style.display="block",i.innerHTML="Your password and confirmation password do not match."):ca(kd,t,n).then((e=>{Ai(kd).signOut(),document.querySelector("#login").click(),Cd.reset(),i.removeAttribute("style")})).catch((e=>{i.style.display="block",i.innerHTML=e.message}))}));const Ld=document.querySelector("#loginForm"),Ad=document.querySelector("#loginError");Ld.addEventListener("submit",(e=>{e.preventDefault();const t=document.querySelector("#loginEmail").value,n=document.querySelector("#loginPassword").value;ua(kd,t,n).then((e=>{document.querySelector("#home").click(),Cd.reset(),Ad.removeAttribute("style")})).catch((e=>{Ad.style.display="block",Ad.innerHTML=e.message}))}));document.querySelector("#googleLogin").addEventListener("click",(e=>{e.preventDefault(),Pd(Ed,Yo)}));document.querySelector("#githubLogin").addEventListener("click",(e=>{e.preventDefault(),Pd(Id,Qo)}));async function Pd(e,t){await Ga(kd,e),Ka(kd).then((e=>{const n=t.credentialFromResult(e).accessToken;e.user;console.log(n),document.querySelector("#home").click(),Ad.removeAttribute("style"),Ld.reset()})).catch((e=>{Ad.style.display="block",Ad.innerHTML=e.message}))}document.querySelector("#microsoftLogin").addEventListener("click",(e=>{e.preventDefault(),Pd(Td,Jo)}));
//# sourceMappingURL=index.ba563a02.js.map
