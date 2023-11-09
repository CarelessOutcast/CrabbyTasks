import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/jsvectormap/dist/js/jsvectormap.min.js
var require_jsvectormap_min = __commonJS({
  "node_modules/jsvectormap/dist/js/jsvectormap.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).jsVectorMap = e();
    }(exports, function() {
      "use strict";
      function t(t2, i2) {
        t2.prototype = Object.create(i2.prototype), t2.prototype.constructor = t2, e(t2, i2);
      }
      function e(t2, i2) {
        return e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e2) {
          return t3.__proto__ = e2, t3;
        }, e(t2, i2);
      }
      function i(t2) {
        if (void 0 === t2)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t2;
      }
      function s(t2) {
        throw new TypeError('"' + t2 + '" is read-only');
      }
      function a(t2, e2) {
        (null == e2 || e2 > t2.length) && (e2 = t2.length);
        for (var i2 = 0, s2 = new Array(e2); i2 < e2; i2++)
          s2[i2] = t2[i2];
        return s2;
      }
      function n(t2, e2) {
        var i2 = "undefined" != typeof Symbol && t2[Symbol.iterator] || t2["@@iterator"];
        if (i2)
          return (i2 = i2.call(t2)).next.bind(i2);
        if (Array.isArray(t2) || (i2 = function(t3, e3) {
          if (t3) {
            if ("string" == typeof t3)
              return a(t3, e3);
            var i3 = Object.prototype.toString.call(t3).slice(8, -1);
            return "Object" === i3 && t3.constructor && (i3 = t3.constructor.name), "Map" === i3 || "Set" === i3 ? Array.from(t3) : "Arguments" === i3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i3) ? a(t3, e3) : void 0;
          }
        }(t2)) || e2 && t2 && "number" == typeof t2.length) {
          i2 && (t2 = i2);
          var s2 = 0;
          return function() {
            return s2 >= t2.length ? { done: true } : { done: false, value: t2[s2++] };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(t2) {
        for (var e2 = (this.document || this.ownerDocument).querySelectorAll(t2), i2 = e2.length; s("i") >= 0 && e2.item(i2) !== this; )
          ;
        return i2 > -1;
      }), Object.assign || Object.defineProperty(Object, "assign", { enumerable: false, configurable: true, writable: true, value: function(t2) {
        if (null == t2)
          throw new TypeError("Cannot convert first argument to object");
        for (var e2 = Object(t2), i2 = 1; i2 < arguments.length; i2++) {
          var s2 = arguments[i2];
          if (null != s2) {
            s2 = Object(s2);
            for (var a2 = Object.keys(Object(s2)), n2 = 0, r2 = a2.length; n2 < r2; n2++) {
              var o2 = a2[n2], h2 = Object.getOwnPropertyDescriptor(s2, o2);
              void 0 !== h2 && h2.enumerable && (e2[o2] = s2[o2]);
            }
          }
        }
        return e2;
      } });
      var r = function(t2) {
        return function(t3) {
          return !!t3 && "object" == typeof t3;
        }(t2) && !function(t3) {
          var e2 = Object.prototype.toString.call(t3);
          return "[object RegExp]" === e2 || "[object Date]" === e2 || function(t4) {
            return t4 instanceof Node;
          }(t3) || function(t4) {
            return t4.$$typeof === o;
          }(t3);
        }(t2);
      };
      var o = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
      function h(t2, e2) {
        return false !== e2.clone && e2.isMergeableObject(t2) ? d((i2 = t2, Array.isArray(i2) ? [] : {}), t2, e2) : t2;
        var i2;
      }
      function l(t2, e2, i2) {
        return t2.concat(e2).map(function(t3) {
          return h(t3, i2);
        });
      }
      function c(t2) {
        return Object.keys(t2).concat(function(t3) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t3).filter(function(e2) {
            return t3.propertyIsEnumerable(e2);
          }) : [];
        }(t2));
      }
      function u(t2, e2) {
        try {
          return e2 in t2;
        } catch (t3) {
          return false;
        }
      }
      function p(t2, e2, i2) {
        var s2 = {};
        return i2.isMergeableObject(t2) && c(t2).forEach(function(e3) {
          s2[e3] = h(t2[e3], i2);
        }), c(e2).forEach(function(a2) {
          (function(t3, e3) {
            return u(t3, e3) && !(Object.hasOwnProperty.call(t3, e3) && Object.propertyIsEnumerable.call(t3, e3));
          })(t2, a2) || (u(t2, a2) && i2.isMergeableObject(e2[a2]) ? s2[a2] = function(t3, e3) {
            if (!e3.customMerge)
              return d;
            var i3 = e3.customMerge(t3);
            return "function" == typeof i3 ? i3 : d;
          }(a2, i2)(t2[a2], e2[a2], i2) : s2[a2] = h(e2[a2], i2));
        }), s2;
      }
      var d = function(t2, e2, i2) {
        (i2 = i2 || {}).arrayMerge = i2.arrayMerge || l, i2.isMergeableObject = i2.isMergeableObject || r, i2.cloneUnlessOtherwiseSpecified = h;
        var s2 = Array.isArray(e2);
        return s2 === Array.isArray(t2) ? s2 ? i2.arrayMerge(t2, e2, i2) : p(t2, e2, i2) : h(e2, i2);
      }, f = function(t2) {
        return "object" == typeof t2 && void 0 !== t2.nodeType ? t2 : "string" == typeof t2 ? document.querySelector(t2) : null;
      }, m = function(t2, e2, i2, s2) {
        void 0 === s2 && (s2 = false);
        var a2 = document.createElement(t2);
        return i2 && (a2[s2 ? "innerHTML" : "textContent"] = i2), e2 && (a2.className = e2), a2;
      }, g = function(t2) {
        t2.parentNode.removeChild(t2);
      }, v = function(t2, e2, i2) {
        return void 0 === i2 && (i2 = false), i2 ? d(t2, e2) : Object.assign(t2, e2);
      }, _ = function(t2, e2) {
        return t2.toLowerCase() + ":to:" + e2.toLowerCase();
      }, y = function(t2, e2) {
        Object.assign(t2.prototype, e2);
      }, b = {}, w = 1, S = { on: function(t2, e2, i2, s2) {
        void 0 === s2 && (s2 = {});
        var a2 = "jvm:" + e2 + "::" + w++;
        b[a2] = { selector: t2, handler: i2 }, i2._uid = a2, t2.addEventListener(e2, i2, s2);
      }, delegate: function(t2, e2, i2, s2) {
        (e2 = e2.split(" ")).forEach(function(e3) {
          S.on(t2, e3, function(t3) {
            var e4 = t3.target;
            e4.matches(i2) && s2.call(e4, t3);
          });
        });
      }, off: function(t2, e2, i2) {
        var s2 = e2.split(":")[1];
        t2.removeEventListener(s2, i2), delete b[i2._uid];
      }, flush: function() {
        Object.keys(b).forEach(function(t2) {
          S.off(b[t2].selector, t2, b[t2].handler);
        });
      }, getEventRegistry: function() {
        return b;
      } };
      var k = { onLoaded: "map:loaded", onViewportChange: "viewport:changed", onRegionClick: "region:clicked", onMarkerClick: "marker:clicked", onRegionSelected: "region:selected", onMarkerSelected: "marker:selected", onRegionTooltipShow: "region.tooltip:show", onMarkerTooltipShow: "marker.tooltip:show", onDestroyed: "map:destroyed" }, M = function(t2, e2, i2) {
        var s2 = f(e2), a2 = -1 === s2.getAttribute("class").indexOf("jvm-region") ? "marker" : "region", n2 = "region" === a2, r2 = n2 ? s2.getAttribute("data-code") : s2.getAttribute("data-index"), o2 = n2 ? k.onRegionSelected : k.onMarkerSelected;
        return i2 && (o2 = n2 ? k.onRegionTooltipShow : k.onMarkerTooltipShow), { type: a2, code: r2, event: o2, element: n2 ? t2.regions[r2].element : t2._markers[r2].element, tooltipText: n2 ? t2._mapData.paths[r2].name || "" : t2._markers[r2].config.name || "" };
      };
      var x = function() {
        function t2() {
        }
        return t2.prototype.dispose = function() {
          this._tooltip ? g(this._tooltip) : this.shape.remove();
          for (var t3, e2 = n(Object.getOwnPropertyNames(this)); !(t3 = e2()).done; ) {
            this[t3.value] = null;
          }
        }, t2;
      }(), j = { getLabelText: function(t2, e2) {
        if (e2) {
          if ("function" == typeof e2.render) {
            var i2 = [];
            return this.config && this.config.marker && i2.push(this.config.marker), i2.push(t2), e2.render.apply(this, i2);
          }
          return t2;
        }
      }, getLabelOffsets: function(t2, e2) {
        return "function" == typeof e2.offsets ? e2.offsets(t2) : Array.isArray(e2.offsets) ? e2.offsets[t2] : [0, 0];
      }, setStyle: function(t2, e2) {
        this.shape.setStyle(t2, e2);
      }, remove: function() {
        this.shape.remove(), this.label && this.label.remove();
      }, hover: function(t2) {
        this._setStatus("isHovered", t2);
      }, select: function(t2) {
        this._setStatus("isSelected", t2);
      }, _setStatus: function(t2, e2) {
        this.shape[t2] = e2, this.shape.updateStyle(), this[t2] = e2, this.label && (this.label[t2] = e2, this.label.updateStyle());
      } }, C = function(e2) {
        function i2(t2) {
          var i3, s3 = t2.map, a2 = t2.code, n2 = t2.path, r2 = t2.style, o2 = t2.label, h2 = t2.labelStyle, l2 = t2.labelsGroup;
          (i3 = e2.call(this) || this)._map = s3, i3.shape = i3._createRegion(n2, a2, r2);
          var c2 = i3.getLabelText(a2, o2);
          if (o2 && c2) {
            var u2 = i3.shape.getBBox(), p2 = i3.getLabelOffsets(a2, o2);
            i3.labelX = u2.x + u2.width / 2 + p2[0], i3.labelY = u2.y + u2.height / 2 + p2[1], i3.label = i3._map.canvas.createText({ text: c2, textAnchor: "middle", alignmentBaseline: "central", dataCode: a2, x: i3.labelX, y: i3.labelY }, h2, l2), i3.label.addClass("jvm-region jvm-element");
          }
          return i3;
        }
        t(i2, e2);
        var s2 = i2.prototype;
        return s2._createRegion = function(t2, e3, i3) {
          return (t2 = this._map.canvas.createPath({ d: t2, dataCode: e3 }, i3)).addClass("jvm-region jvm-element"), t2;
        }, s2.updateLabelPosition = function() {
          this.label && this.label.set({ x: this.labelX * this._map.scale + this._map.transX * this._map.scale, y: this.labelY * this._map.scale + this._map.transY * this._map.scale });
        }, i2;
      }(x);
      y(C, j);
      var L = function(e2) {
        function i2(t2) {
          var i3, s2 = t2.index, a2 = t2.map, n2 = t2.style, r2 = t2.x1, o2 = t2.y1, h2 = t2.x2, l2 = t2.y2, c2 = t2.group, u2 = t2.config;
          return (i3 = e2.call(this) || this).config = u2, i3.shape = a2.canvas.createLine({ x1: r2, y1: o2, x2: h2, y2: l2, dataIndex: s2 }, n2, c2), i3.shape.addClass("jvm-line"), i3;
        }
        return t(i2, e2), i2.prototype.setStyle = function(t2, e3) {
          this.shape.setStyle(t2, e3);
        }, i2;
      }(x);
      var O = function(e2) {
        function i2(t2) {
          var i3, s3 = t2.index, a2 = t2.style, n2 = t2.label, r2 = t2.cx, o2 = t2.cy, h2 = t2.map, l2 = t2.group;
          return (i3 = e2.call(this) || this)._map = h2, i3._isImage = !!a2.initial.image, i3.config = arguments[0], i3.shape = h2.canvas[i3._isImage ? "createImage" : "createCircle"]({ dataIndex: s3, cx: r2, cy: o2 }, a2, l2), i3.shape.addClass("jvm-marker jvm-element"), i3._isImage && i3.updateLabelPosition(), n2 && i3._createLabel(i3.config), i3;
        }
        t(i2, e2);
        var s2 = i2.prototype;
        return s2.updateLabelPosition = function() {
          this.label && this.label.set({ x: this._labelX * this._map.scale + this._offsets[0] + this._map.transX * this._map.scale + 5 + (this._isImage ? (this.shape.width || 0) / 2 : this.shape.node.r.baseVal.value), y: this._labelY * this._map.scale + this._map.transY * this._map.scale + this._offsets[1] });
        }, s2._createLabel = function(t2) {
          var e3 = t2.index, i3 = t2.map, s3 = t2.label, a2 = t2.labelsGroup, n2 = t2.cx, r2 = t2.cy, o2 = t2.marker, h2 = t2.isRecentlyCreated, l2 = this.getLabelText(e3, s3);
          this._labelX = n2 / i3.scale - i3.transX, this._labelY = r2 / i3.scale - i3.transY, this._offsets = h2 && o2.offsets ? o2.offsets : this.getLabelOffsets(e3, s3), this.label = i3.canvas.createText({ text: l2, dataIndex: e3, x: this._labelX, y: this._labelY, dy: "0.6ex" }, i3.params.markerLabelStyle, a2), this.label.addClass("jvm-marker jvm-element"), h2 && this.updateLabelPosition();
        }, i2;
      }(x);
      y(O, j);
      var A = function() {
        function t2(t3) {
          void 0 === t3 && (t3 = {}), this._options = t3, this._map = this._options.map, this._series = this._options.series, this._body = m("div", "jvm-legend"), this._options.cssClass && this._body.setAttribute("class", this._options.cssClass), t3.vertical ? this._map.legendVertical.appendChild(this._body) : this._map.legendHorizontal.appendChild(this._body), this.render();
        }
        return t2.prototype.render = function() {
          var t3, e2 = this._series.scale.getTicks(), i2 = m("div", "jvm-legend-inner");
          if (this._body.innderHTML = "", this._options.title) {
            var s2 = m("div", "jvm-legend-title", this._options.title);
            this._body.appendChild(s2);
          }
          this._body.appendChild(i2);
          for (var a2 = 0; a2 < e2.length; a2++) {
            var n2 = m("div", "jvm-legend-tick"), r2 = m("div", "jvm-legend-tick-sample");
            switch (this._series.config.attribute) {
              case "fill":
                t3 = e2[a2].value, /\.(jpg|gif|png)$/.test(t3) ? r2.style.background = "url(" + e2[a2].value + ")" : r2.style.background = e2[a2].value;
                break;
              case "stroke":
                r2.style.background = e2[a2].value;
                break;
              case "image":
                r2.style.background = "url(" + ("object" == typeof e2[a2].value ? e2[a2].value.url : e2[a2].value) + ") no-repeat center center", r2.style.backgroundSize = "cover";
            }
            n2.appendChild(r2);
            var o2 = e2[a2].label;
            this._options.labelRender && (o2 = this._options.labelRender(o2));
            var h2 = m("div", "jvm-legend-tick-text", o2);
            n2.appendChild(h2), i2.appendChild(n2);
          }
        }, t2;
      }(), X = function() {
        function t2(t3) {
          this._scale = t3;
        }
        var e2 = t2.prototype;
        return e2.getValue = function(t3) {
          return this._scale[t3];
        }, e2.getTicks = function() {
          var t3 = [];
          for (var e3 in this._scale)
            t3.push({ label: e3, value: this._scale[e3] });
          return t3;
        }, t2;
      }(), Y = function() {
        function t2(t3, e3, i2) {
          void 0 === t3 && (t3 = {}), this._map = i2, this._elements = e3, this._values = t3.values || {}, this.config = t3, this.config.attribute = t3.attribute || "fill", t3.attributes && this.setAttributes(t3.attributes), "object" == typeof t3.scale && (this.scale = new X(t3.scale)), this.config.legend && (this.legend = new A(v({ map: this._map, series: this }, this.config.legend))), this.setValues(this._values);
        }
        var e2 = t2.prototype;
        return e2.setValues = function(t3) {
          var e3 = {};
          for (var i2 in t3)
            t3[i2] && (e3[i2] = this.scale.getValue(t3[i2]));
          this.setAttributes(e3);
        }, e2.setAttributes = function(t3) {
          for (var e3 in t3)
            this._elements[e3] && this._elements[e3].element.setStyle(this.config.attribute, t3[e3]);
        }, e2.clear = function() {
          var t3, e3 = {};
          for (t3 in this._values)
            this._elements[t3] && (e3[t3] = this._elements[t3].element.shape.style.initial[this.config.attribute]);
          this.setAttributes(e3), this._values = {};
        }, t2;
      }();
      var E = { mill: function(t2, e2, i2) {
        return { x: this.radius * (e2 - i2) * this.radDeg, y: -this.radius * Math.log(Math.tan((45 + 0.4 * t2) * this.radDeg)) / 0.8 };
      }, merc: function(t2, e2, i2) {
        return { x: this.radius * (e2 - i2) * this.radDeg, y: -this.radius * Math.log(Math.tan(Math.PI / 4 + t2 * Math.PI / 360)) };
      }, aea: function(t2, e2, i2) {
        var s2 = i2 * this.radDeg, a2 = 29.5 * this.radDeg, n2 = 45.5 * this.radDeg, r2 = t2 * this.radDeg, o2 = e2 * this.radDeg, h2 = (Math.sin(a2) + Math.sin(n2)) / 2, l2 = Math.cos(a2) * Math.cos(a2) + 2 * h2 * Math.sin(a2), c2 = h2 * (o2 - s2), u2 = Math.sqrt(l2 - 2 * h2 * Math.sin(r2)) / h2, p2 = Math.sqrt(l2 - 2 * h2 * Math.sin(0)) / h2;
        return { x: u2 * Math.sin(c2) * this.radius, y: -(p2 - u2 * Math.cos(c2)) * this.radius };
      }, lcc: function(t2, e2, i2) {
        var s2 = i2 * this.radDeg, a2 = e2 * this.radDeg, n2 = 33 * this.radDeg, r2 = 45 * this.radDeg, o2 = t2 * this.radDeg, h2 = Math.log(Math.cos(n2) * (1 / Math.cos(r2))) / Math.log(Math.tan(Math.PI / 4 + r2 / 2) * (1 / Math.tan(Math.PI / 4 + n2 / 2))), l2 = Math.cos(n2) * Math.pow(Math.tan(Math.PI / 4 + n2 / 2), h2) / h2, c2 = l2 * Math.pow(1 / Math.tan(Math.PI / 4 + o2 / 2), h2), u2 = l2 * Math.pow(1 / Math.tan(Math.PI / 4 + 0), h2);
        return { x: c2 * Math.sin(h2 * (a2 - s2)) * this.radius, y: -(u2 - c2 * Math.cos(h2 * (a2 - s2))) * this.radius };
      } };
      E.degRad = 180 / Math.PI, E.radDeg = Math.PI / 180, E.radius = 6381372;
      var T = { _setupContainerEvents: function() {
        var t2, e2, i2 = this, s2 = this, a2 = false;
        this.params.draggable && (S.on(this.container, "mousemove", function(i3) {
          if (!a2)
            return false;
          s2.transX -= (t2 - i3.pageX) / s2.scale, s2.transY -= (e2 - i3.pageY) / s2.scale, s2._applyTransform(), t2 = i3.pageX, e2 = i3.pageY;
        }), S.on(this.container, "mousedown", function(i3) {
          return a2 = true, t2 = i3.pageX, e2 = i3.pageY, false;
        }), S.on(document.body, "mouseup", function() {
          a2 = false;
        })), this.params.zoomOnScroll && S.on(this.container, "wheel", function(t3) {
          var e3 = 75 * ((t3.deltaY || -t3.wheelDelta || t3.detail) >> 10 || 1), a3 = i2.container.getBoundingClientRect(), n2 = t3.pageX - a3.left - window.pageXOffset, r2 = t3.pageY - a3.top - window.pageYOffset, o2 = Math.pow(1 + s2.params.zoomOnScrollSpeed / 1e3, -1.5 * e3);
          s2.tooltip && s2._tooltip.hide(), s2._setScale(s2.scale * o2, n2, r2), t3.preventDefault();
        });
      }, _setupElementEvents: function() {
        var t2, e2, i2, s2 = this, a2 = this.container;
        S.on(a2, "mousemove", function(s3) {
          Math.abs(t2 - s3.pageX) + Math.abs(e2 - s3.pageY) > 2 && (i2 = true);
        }), S.delegate(a2, "mousedown", ".jvm-element", function(s3) {
          t2 = s3.pageX, e2 = s3.pageY, i2 = false;
        }), S.delegate(a2, "mouseover mouseout", ".jvm-element", function(t3) {
          var e3 = M(s2, this, true), i3 = s2.params.showTooltip;
          "mouseover" === t3.type ? (e3.element.hover(true), i3 && (s2._tooltip.text(e3.tooltipText), s2._tooltip.show(), s2._emit(e3.event, [t3, s2._tooltip, e3.code]))) : (e3.element.hover(false), i3 && s2._tooltip.hide());
        }), S.delegate(a2, "mouseup", ".jvm-element", function(t3) {
          var e3 = M(s2, this);
          if (!i2 && ("region" === e3.type && s2.params.regionsSelectable || "marker" === e3.type && s2.params.markersSelectable)) {
            var a3 = e3.element;
            s2.params[e3.type + "sSelectableOne"] && s2._clearSelected(e3.type + "s"), e3.element.isSelected ? a3.select(false) : a3.select(true), s2._emit(e3.event, [e3.code, a3.isSelected, s2._getSelected(e3.type + "s")]);
          }
        }), S.delegate(a2, "click", ".jvm-element", function(t3) {
          var e3 = M(s2, this), i3 = e3.type, a3 = e3.code;
          s2._emit("region" === i3 ? k.onRegionClick : k.onMarkerClick, [t3, a3]);
        });
      }, _setupZoomButtons: function() {
        var t2 = this, e2 = m("div", "jvm-zoom-btn jvm-zoomin", "&#43;", true), i2 = m("div", "jvm-zoom-btn jvm-zoomout", "&#x2212", true);
        this.container.appendChild(e2), this.container.appendChild(i2);
        var s2 = function(e3) {
          return void 0 === e3 && (e3 = true), function() {
            return t2._setScale(e3 ? t2.scale * t2.params.zoomStep : t2.scale / t2.params.zoomStep, t2._width / 2, t2._height / 2, false, t2.params.zoomAnimate);
          };
        };
        S.on(e2, "click", s2()), S.on(i2, "click", s2(false));
      }, _setupContainerTouchEvents: function() {
        var t2, e2, i2, s2, a2, n2, r2, o2 = this, h2 = function(h3) {
          var l2, c2, u2, p2, d2 = h3.touches;
          if ("touchstart" == h3.type && (r2 = 0), 1 == d2.length)
            1 == r2 && (u2 = o2.transX, p2 = o2.transY, o2.transX -= (i2 - d2[0].pageX) / o2.scale, o2.transY -= (s2 - d2[0].pageY) / o2.scale, o2._tooltip.hide(), o2._applyTransform(), u2 == o2.transX && p2 == o2.transY || h3.preventDefault()), i2 = d2[0].pageX, s2 = d2[0].pageY;
          else if (2 == d2.length)
            if (2 == r2)
              c2 = Math.sqrt(Math.pow(d2[0].pageX - d2[1].pageX, 2) + Math.pow(d2[0].pageY - d2[1].pageY, 2)) / e2, o2._setScale(t2 * c2, a2, n2), o2._tooltip.hide(), h3.preventDefault();
            else {
              var f2 = o2.container.getBoundingClientRect();
              l2 = { top: f2.top + window.scrollY, left: f2.left + window.scrollX }, a2 = d2[0].pageX > d2[1].pageX ? d2[1].pageX + (d2[0].pageX - d2[1].pageX) / 2 : d2[0].pageX + (d2[1].pageX - d2[0].pageX) / 2, n2 = d2[0].pageY > d2[1].pageY ? d2[1].pageY + (d2[0].pageY - d2[1].pageY) / 2 : d2[0].pageY + (d2[1].pageY - d2[0].pageY) / 2, a2 -= l2.left, n2 -= l2.top, t2 = o2.scale, e2 = Math.sqrt(Math.pow(d2[0].pageX - d2[1].pageX, 2) + Math.pow(d2[0].pageY - d2[1].pageY, 2));
            }
          r2 = d2.length;
        };
        S.on(o2.container, "touchstart", h2), S.on(o2.container, "touchmove", h2);
      }, _createRegions: function() {
        for (var t2 in this._regionLabelsGroup = this._regionLabelsGroup || this.canvas.createGroup("jvm-regions-labels-group"), this._mapData.paths) {
          var e2 = new C({ map: this, code: t2, path: this._mapData.paths[t2].path, style: v({}, this.params.regionStyle), labelStyle: this.params.regionLabelStyle, labelsGroup: this._regionLabelsGroup, label: this.params.labels && this.params.labels.regions });
          this.regions[t2] = { config: this._mapData.paths[t2], element: e2 };
        }
      }, _createLines: function(t2, e2, i2) {
        void 0 === i2 && (i2 = false);
        var s2 = false, a2 = false;
        for (var n2 in this.linesGroup = this.linesGroup || this.canvas.createGroup("jvm-lines-group"), t2) {
          var r2 = t2[n2];
          for (var o2 in e2) {
            var h2 = i2 ? e2[o2].config : e2[o2];
            h2.name === r2.from && (s2 = this.getMarkerPosition(h2)), h2.name === r2.to && (a2 = this.getMarkerPosition(h2));
          }
          false !== s2 && false !== a2 && (this._lines[_(r2.from, r2.to)] = new L({ index: n2, map: this, style: v({ initial: this.params.lineStyle }, { initial: r2.style || {} }, true), x1: s2.x, y1: s2.y, x2: a2.x, y2: a2.y, group: this.linesGroup, config: r2 }));
        }
      }, _createMarkers: function(t2, e2) {
        var i2 = this;
        void 0 === t2 && (t2 = {}), void 0 === e2 && (e2 = false), this._markersGroup = this._markersGroup || this.canvas.createGroup("jvm-markers-group"), this._markerLabelsGroup = this._markerLabelsGroup || this.canvas.createGroup("jvm-markers-labels-group");
        var s2 = function() {
          var s3 = t2[a2], n2 = i2.getMarkerPosition(s3), r2 = s3.coords.join(":");
          if (!n2)
            return "continue";
          if (e2) {
            if (Object.keys(i2._markers).filter(function(t3) {
              return i2._markers[t3]._uid === r2;
            }).length)
              return "continue";
            a2 = Object.keys(i2._markers).length;
          }
          var o2 = new O({ index: a2, map: i2, style: v(i2.params.markerStyle, { initial: s3.style || {} }, true), label: i2.params.labels && i2.params.labels.markers, labelsGroup: i2._markerLabelsGroup, cx: n2.x, cy: n2.y, group: i2._markersGroup, marker: s3, isRecentlyCreated: e2 });
          i2._markers[a2] && i2.removeMarkers([a2]), i2._markers[a2] = { _uid: r2, config: s3, element: o2 };
        };
        for (var a2 in t2)
          s2();
      }, _createSeries: function() {
        for (var t2 in this.series = { markers: [], regions: [] }, this.params.series)
          for (var e2 = 0; e2 < this.params.series[t2].length; e2++)
            this.series[t2][e2] = new Y(this.params.series[t2][e2], "markers" === t2 ? this._markers : this.regions, this);
      }, _applyTransform: function() {
        var t2, e2, i2, s2;
        this._defaultWidth * this.scale <= this._width ? (t2 = (this._width - this._defaultWidth * this.scale) / (2 * this.scale), i2 = (this._width - this._defaultWidth * this.scale) / (2 * this.scale)) : (t2 = 0, i2 = (this._width - this._defaultWidth * this.scale) / this.scale), this._defaultHeight * this.scale <= this._height ? (e2 = (this._height - this._defaultHeight * this.scale) / (2 * this.scale), s2 = (this._height - this._defaultHeight * this.scale) / (2 * this.scale)) : (e2 = 0, s2 = (this._height - this._defaultHeight * this.scale) / this.scale), this.transY > e2 ? this.transY = e2 : this.transY < s2 && (this.transY = s2), this.transX > t2 ? this.transX = t2 : this.transX < i2 && (this.transX = i2), this.canvas.applyTransformParams(this.scale, this.transX, this.transY), this._markers && this._repositionMarkers(), this._lines && this._repositionLines(), this._repositionLabels();
      }, _resize: function() {
        var t2 = this._baseScale;
        this._width / this._height > this._defaultWidth / this._defaultHeight ? (this._baseScale = this._height / this._defaultHeight, this._baseTransX = Math.abs(this._width - this._defaultWidth * this._baseScale) / (2 * this._baseScale)) : (this._baseScale = this._width / this._defaultWidth, this._baseTransY = Math.abs(this._height - this._defaultHeight * this._baseScale) / (2 * this._baseScale)), this.scale *= this._baseScale / t2, this.transX *= this._baseScale / t2, this.transY *= this._baseScale / t2;
      }, _setScale: function(t2, e2, i2, s2, a2) {
        var n2, r2, o2, h2, l2, c2, u2, p2, d2, f2, m2 = this, g2 = 0, v2 = Math.abs(Math.round(60 * (t2 - this.scale) / Math.max(t2, this.scale)));
        t2 > this.params.zoomMax * this._baseScale ? t2 = this.params.zoomMax * this._baseScale : t2 < this.params.zoomMin * this._baseScale && (t2 = this.params.zoomMin * this._baseScale), void 0 !== e2 && void 0 !== i2 && (n2 = t2 / this.scale, s2 ? (d2 = e2 + this._defaultWidth * (this._width / (this._defaultWidth * t2)) / 2, f2 = i2 + this._defaultHeight * (this._height / (this._defaultHeight * t2)) / 2) : (d2 = this.transX - (n2 - 1) / t2 * e2, f2 = this.transY - (n2 - 1) / t2 * i2)), a2 && v2 > 0 ? (o2 = this.scale, h2 = (t2 - o2) / v2, l2 = this.transX * this.scale, u2 = this.transY * this.scale, c2 = (d2 * t2 - l2) / v2, p2 = (f2 * t2 - u2) / v2, r2 = setInterval(function() {
          g2 += 1, m2.scale = o2 + h2 * g2, m2.transX = (l2 + c2 * g2) / m2.scale, m2.transY = (u2 + p2 * g2) / m2.scale, m2._applyTransform(), g2 == v2 && (clearInterval(r2), m2._emit(k.onViewportChange, [m2.scale, m2.transX, m2.transY]));
        }, 10)) : (this.transX = d2, this.transY = f2, this.scale = t2, this._applyTransform(), this._emit(k.onViewportChange, [this.scale, this.transX, this.transY]));
      }, setFocus: function(t2) {
        var e2 = this;
        void 0 === t2 && (t2 = {});
        var i2, s2 = [];
        if (t2.region ? s2.push(t2.region) : t2.regions && (s2 = t2.regions), s2.length)
          return s2.forEach(function(t3) {
            if (e2.regions[t3]) {
              var s3 = e2.regions[t3].element.shape.getBBox();
              s3 && (i2 = void 0 === i2 ? s3 : { x: Math.min(i2.x, s3.x), y: Math.min(i2.y, s3.y), width: Math.max(i2.x + i2.width, s3.x + s3.width) - Math.min(i2.x, s3.x), height: Math.max(i2.y + i2.height, s3.y + s3.height) - Math.min(i2.y, s3.y) });
            }
          }), this._setScale(Math.min(this._width / i2.width, this._height / i2.height), -(i2.x + i2.width / 2), -(i2.y + i2.height / 2), true, t2.animate);
        if (t2.coords) {
          var a2 = this.coordsToPoint(t2.coords[0], t2.coords[1]), n2 = this.transX - a2.x / this.scale, r2 = this.transY - a2.y / this.scale;
          return this._setScale(t2.scale * this._baseScale, n2, r2, true, t2.animate);
        }
      }, updateSize: function() {
        this._width = this.container.offsetWidth, this._height = this.container.offsetHeight, this._resize(), this.canvas.setSize(this._width, this._height), this._applyTransform();
      }, coordsToPoint: function(t2, e2) {
        var i2 = G.maps[this.params.map].projection, s2 = E[i2.type](t2, e2, i2.centralMeridian), a2 = s2.x, n2 = s2.y, r2 = this.getInsetForPoint(a2, n2);
        if (!r2)
          return false;
        var o2 = r2.bbox;
        return a2 = (a2 - o2[0].x) / (o2[1].x - o2[0].x) * r2.width * this.scale, n2 = (n2 - o2[0].y) / (o2[1].y - o2[0].y) * r2.height * this.scale, { x: a2 + this.transX * this.scale + r2.left * this.scale, y: n2 + this.transY * this.scale + r2.top * this.scale };
      }, getInsetForPoint: function(t2, e2) {
        for (var i2 = G.maps[this.params.map].insets, s2 = 0; s2 < i2.length; s2++) {
          var a2 = i2[s2].bbox, n2 = a2[0], r2 = a2[1];
          if (t2 > n2.x && t2 < r2.x && e2 > n2.y && e2 < r2.y)
            return i2[s2];
        }
      }, getMarkerPosition: function(t2) {
        var e2 = t2.coords;
        return G.maps[this.params.map].projection ? this.coordsToPoint.apply(this, e2) : { x: e2[0] * this.scale + this.transX * this.scale, y: e2[1] * this.scale + this.transY * this.scale };
      }, _repositionLines: function() {
        var t2 = false, e2 = false;
        for (var i2 in this._lines) {
          for (var s2 in this._markers) {
            var a2 = this._markers[s2];
            a2.config.name === this._lines[i2].config.from && (t2 = this.getMarkerPosition(a2.config)), a2.config.name === this._lines[i2].config.to && (e2 = this.getMarkerPosition(a2.config));
          }
          false !== t2 && false !== e2 && this._lines[i2].setStyle({ x1: t2.x, y1: t2.y, x2: e2.x, y2: e2.y });
        }
      }, _repositionMarkers: function() {
        for (var t2 in this._markers) {
          var e2 = this.getMarkerPosition(this._markers[t2].config);
          false !== e2 && this._markers[t2].element.setStyle({ cx: e2.x, cy: e2.y });
        }
      }, _repositionLabels: function() {
        var t2 = this.params.labels;
        if (t2) {
          if (t2.regions)
            for (var e2 in this.regions)
              this.regions[e2].element.updateLabelPosition();
          if (t2.markers)
            for (var i2 in this._markers)
              this._markers[i2].element.updateLabelPosition();
        }
      } }, z = function() {
        function t2(t3, e3) {
          this.node = this._createElement(t3), e3 && this.set(e3);
        }
        var e2 = t2.prototype;
        return e2._createElement = function(t3) {
          return document.createElementNS("http://www.w3.org/2000/svg", t3);
        }, e2.addClass = function(t3) {
          this.node.setAttribute("class", t3);
        }, e2.getBBox = function() {
          return this.node.getBBox();
        }, e2.set = function(t3, e3) {
          if ("object" == typeof t3)
            for (var i2 in t3)
              this.applyAttr(i2, t3[i2]);
          else
            this.applyAttr(t3, e3);
        }, e2.get = function(t3) {
          return this.style.initial[t3];
        }, e2.applyAttr = function(t3, e3) {
          this.node.setAttribute(t3.replace(/[\w]([A-Z])/g, function(t4) {
            return t4[0] + "-" + t4[1];
          }).toLowerCase(), e3);
        }, e2.remove = function() {
          g(this.node);
        }, t2;
      }(), P = function(e2) {
        function i2(t2, i3, s3) {
          var a2;
          return void 0 === s3 && (s3 = {}), (a2 = e2.call(this, t2, i3) || this).isHovered = false, a2.isSelected = false, a2.style = s3, a2.style.current = {}, a2.updateStyle(), a2;
        }
        t(i2, e2);
        var s2 = i2.prototype;
        return s2.setStyle = function(t2, e3) {
          var i3;
          "object" == typeof t2 ? v(this.style.current, t2) : v(this.style.current, ((i3 = {})[t2] = e3, i3));
          this.updateStyle();
        }, s2.updateStyle = function() {
          var t2 = {};
          v(t2, this.style.initial), v(t2, this.style.current), this.isHovered && v(t2, this.style.hover), this.isSelected && (v(t2, this.style.selected), this.isHovered && v(t2, this.style.selectedHover)), this.set(t2);
        }, i2;
      }(z), D = function(e2) {
        function i2(t2, i3) {
          return e2.call(this, "text", t2, i3) || this;
        }
        return t(i2, e2), i2.prototype.applyAttr = function(t2, i3) {
          "text" === t2 ? this.node.textContent = i3 : e2.prototype.applyAttr.call(this, t2, i3);
        }, i2;
      }(P), I = function(e2) {
        function i2(t2, i3) {
          return e2.call(this, "image", t2, i3) || this;
        }
        return t(i2, e2), i2.prototype.applyAttr = function(t2, i3) {
          var s2;
          "image" === t2 ? ("object" == typeof i3 ? (s2 = i3.url, this.offset = i3.offset || [0, 0]) : (s2 = i3, this.offset = [0, 0]), this.node.setAttributeNS("http://www.w3.org/1999/xlink", "href", s2), this.width = 23, this.height = 23, this.applyAttr("width", this.width), this.applyAttr("height", this.height), this.applyAttr("x", this.cx - this.width / 2 + this.offset[0]), this.applyAttr("y", this.cy - this.height / 2 + this.offset[1])) : "cx" == t2 ? (this.cx = i3, this.width && this.applyAttr("x", i3 - this.width / 2 + this.offset[0])) : "cy" == t2 ? (this.cy = i3, this.height && this.applyAttr("y", i3 - this.height / 2 + this.offset[1])) : e2.prototype.applyAttr.apply(this, arguments);
        }, i2;
      }(P), R = function(e2) {
        function i2(t2) {
          var i3;
          return (i3 = e2.call(this, "svg") || this)._container = t2, i3._defsElement = new z("defs"), i3._rootElement = new z("g", { id: "jvm-regions-group" }), i3.node.appendChild(i3._defsElement.node), i3.node.appendChild(i3._rootElement.node), i3._container.appendChild(i3.node), i3;
        }
        t(i2, e2);
        var s2 = i2.prototype;
        return s2.setSize = function(t2, e3) {
          this.node.setAttribute("width", t2), this.node.setAttribute("height", e3);
        }, s2.applyTransformParams = function(t2, e3, i3) {
          this._rootElement.node.setAttribute("transform", "scale(" + t2 + ") translate(" + e3 + ", " + i3 + ")");
        }, s2.createPath = function(t2, e3) {
          var i3 = new P("path", t2, e3);
          return i3.node.setAttribute("fill-rule", "evenodd"), this._add(i3);
        }, s2.createCircle = function(t2, e3, i3) {
          var s3 = new P("circle", t2, e3);
          return this._add(s3, i3);
        }, s2.createLine = function(t2, e3, i3) {
          var s3 = new P("line", t2, e3);
          return this._add(s3, i3);
        }, s2.createText = function(t2, e3, i3) {
          var s3 = new D(t2, e3);
          return this._add(s3, i3);
        }, s2.createImage = function(t2, e3, i3) {
          var s3 = new I(t2, e3);
          return this._add(s3, i3);
        }, s2.createGroup = function(t2) {
          var e3 = new z("g");
          return this.node.appendChild(e3.node), t2 && (e3.node.id = t2), e3.canvas = this, e3;
        }, s2._add = function(t2, e3) {
          return (e3 = e3 || this._rootElement).node.appendChild(t2.node), t2;
        }, i2;
      }(z), H = function(e2) {
        function s2(t2) {
          var s3;
          s3 = e2.call(this) || this;
          var a3 = m("div", "jvm-tooltip");
          return s3._map = t2, s3._tooltip = document.body.appendChild(a3), s3._bindEventListeners(), i(s3) || i(s3);
        }
        t(s2, e2);
        var a2 = s2.prototype;
        return a2._bindEventListeners = function() {
          var t2 = this;
          S.on(this._map.container, "mousemove", function(e3) {
            if (t2._tooltip.classList.contains("active")) {
              var i2, s3, a3 = (i2 = t2._map.container, s3 = "#jvm-regions-group", Element.prototype.querySelector.call(i2, s3)).getBoundingClientRect(), n2 = t2._tooltip.getBoundingClientRect(), r2 = n2.height, o2 = n2.width, h2 = e3.clientY <= a3.top + r2 + 5, l2 = e3.pageY - r2 - 5, c2 = e3.pageX - o2 - 5;
              h2 && (l2 += r2 + 5, c2 -= 10), e3.clientX < a3.left + o2 + 5 && (c2 = e3.pageX + 5 + 2, h2 && (c2 += 10)), t2.css({ top: l2 + "px", left: c2 + "px" });
            }
          });
        }, a2.getElement = function() {
          return this._tooltip;
        }, a2.show = function() {
          this._tooltip.classList.add("active");
        }, a2.hide = function() {
          this._tooltip.classList.remove("active");
        }, a2.text = function(t2, e3) {
          void 0 === e3 && (e3 = false);
          var i2 = e3 ? "innerHTML" : "textContent";
          if (!t2)
            return this._tooltip[i2];
          this._tooltip[i2] = t2;
        }, a2.css = function(t2) {
          for (var e3 in t2)
            this._tooltip.style[e3] = t2[e3];
          return this;
        }, s2;
      }(x), V = function() {
        function t2(t3, e3) {
          var i2 = t3.scale, s2 = t3.values;
          this._scale = i2, this._values = s2, this._fromColor = this.hexToRgb(i2[0]), this._toColor = this.hexToRgb(i2[1]), this._map = e3, this.setMinMaxValues(s2), this.visualize();
        }
        var e2 = t2.prototype;
        return e2.setMinMaxValues = function(t3) {
          for (var e3 in this.min = Number.MAX_VALUE, this.max = 0, t3)
            (e3 = parseFloat(t3[e3])) > this.max && (this.max = e3), e3 < this.min && (this.min = e3);
        }, e2.visualize = function() {
          var t3, e3 = {};
          for (var i2 in this._values)
            t3 = parseFloat(this._values[i2]), isNaN(t3) || (e3[i2] = this.getValue(t3));
          this.setAttributes(e3);
        }, e2.setAttributes = function(t3) {
          for (var e3 in t3)
            this._map.regions[e3] && this._map.regions[e3].element.setStyle("fill", t3[e3]);
        }, e2.getValue = function(t3) {
          for (var e3, i2 = "#", s2 = 0; s2 < 3; s2++)
            i2 += (1 === (e3 = Math.round(this._fromColor[s2] + (this._toColor[s2] - this._fromColor[s2]) * ((t3 - this.min) / (this.max - this.min))).toString(16)).length ? "0" : "") + e3;
          return i2;
        }, e2.hexToRgb = function(t3) {
          var e3 = 0, i2 = 0, s2 = 0;
          return 4 == t3.length ? (e3 = "0x" + t3[1] + t3[1], i2 = "0x" + t3[2] + t3[2], s2 = "0x" + t3[3] + t3[3]) : 7 == t3.length && (e3 = "0x" + t3[1] + t3[2], i2 = "0x" + t3[3] + t3[4], s2 = "0x" + t3[5] + t3[6]), [parseInt(e3), parseInt(i2), parseInt(s2)];
        }, t2;
      }(), G = function() {
        function t2(e3) {
          var i2 = this;
          if (void 0 === e3 && (e3 = {}), this.params = v(t2.defaults, e3, true), !t2.maps[this.params.map])
            throw new Error("Attempt to use map which was not loaded: " + e3.map);
          this.regions = {}, this.scale = 1, this.transX = 0, this.transY = 0, this._mapData = t2.maps[this.params.map], this._markers = {}, this._lines = {}, this._defaultWidth = this._mapData.width, this._defaultHeight = this._mapData.height, this._height = 0, this._width = 0, this._baseScale = 1, this._baseTransX = 0, this._baseTransY = 0, "loading" !== document.readyState ? this._init() : window.addEventListener("DOMContentLoaded", function() {
            return i2._init();
          });
        }
        var e2 = t2.prototype;
        return e2._init = function() {
          var t3 = this.params;
          this.container = f(t3.selector), this.container.classList.add("jvm-container"), this.canvas = new R(this.container), this.setBackgroundColor(t3.backgroundColor), this._createRegions(), this.updateSize(), this._createLines(t3.lines || {}, t3.markers || {}), this._createMarkers(t3.markers), this._repositionLabels(), this._setupContainerEvents(), this._setupElementEvents(), t3.zoomButtons && this._setupZoomButtons(), t3.showTooltip && (this._tooltip = new H(this)), t3.selectedRegions && this._setSelected("regions", t3.selectedRegions), t3.selectedMarkers && this._setSelected("_markers", t3.selectedMarkers), t3.focusOn && this.setFocus(t3.focusOn), t3.visualizeData && (this.dataVisualization = new V(t3.visualizeData, this)), t3.bindTouchEvents && ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) && this._setupContainerTouchEvents(), t3.series && (this.container.appendChild(this.legendHorizontal = m("div", "jvm-series-container jvm-series-h")), this.container.appendChild(this.legendVertical = m("div", "jvm-series-container jvm-series-v")), this._createSeries()), this._emit(k.onLoaded, [this]);
        }, e2.setBackgroundColor = function(t3) {
          this.container.style.backgroundColor = t3;
        }, e2.getSelectedRegions = function() {
          return this._getSelected("regions");
        }, e2.clearSelectedRegions = function() {
          this._clearSelected("regions");
        }, e2.getSelectedMarkers = function() {
          return this._getSelected("_markers");
        }, e2.clearSelectedMarkers = function() {
          this._clearSelected("_markers");
        }, e2.addMarkers = function(t3) {
          if (Array.isArray(t3))
            return this._createMarkers(t3, true);
          this._createMarkers([t3], true);
        }, e2.removeMarkers = function(t3) {
          var e3 = this;
          t3 || (t3 = Object.keys(this._markers)), t3.forEach(function(t4) {
            e3._markers[t4].element.remove(), delete e3._markers[t4];
          });
        }, e2.addLine = function(t3, e3, i2) {
          void 0 === i2 && (i2 = {}), console.warn("`addLine` method is deprecated, please use `addLines` instead."), this._createLines([{ from: t3, to: e3, style: i2 }], this._markers, true);
        }, e2.addLines = function(t3) {
          var e3 = this._getLinesAsUids();
          Array.isArray(t3) || (t3 = [t3]), this._createLines(t3.filter(function(t4) {
            return !(e3.indexOf(_(t4.from, t4.to)) > -1);
          }), this._markers, true);
        }, e2.removeLines = function(t3) {
          var e3 = this;
          (t3 = Array.isArray(t3) ? t3.map(function(t4) {
            return _(t4.from, t4.to);
          }) : this._getLinesAsUids()).forEach(function(t4) {
            e3._lines[t4].dispose(), delete e3._lines[t4];
          });
        }, e2.removeLine = function(t3, e3) {
          console.warn("`removeLine` method is deprecated, please use `removeLines` instead.");
          var i2 = _(t3, e3);
          this._lines.hasOwnProperty(i2) && (this._lines[i2].element.remove(), delete this._lines[i2]);
        }, e2.reset = function() {
          for (var t3 in this.series)
            for (var e3 = 0; e3 < this.series[t3].length; e3++)
              this.series[t3][e3].clear();
          this.legendHorizontal && (g(this.legendHorizontal), this.legendHorizontal = null), this.legendVertical && (g(this.legendVertical), this.legendVertical = null), this.scale = this._baseScale, this.transX = this._baseTransX, this.transY = this._baseTransY, this._applyTransform(), this.clearSelectedMarkers(), this.clearSelectedRegions(), this.removeMarkers();
        }, e2.destroy = function(t3) {
          var e3 = this;
          void 0 === t3 && (t3 = true), S.flush(), this._tooltip.dispose(), this._emit(k.onDestroyed), t3 && Object.keys(this).forEach(function(t4) {
            try {
              delete e3[t4];
            } catch (t5) {
            }
          });
        }, e2.extend = function(e3, i2) {
          if ("function" == typeof this[e3])
            throw new Error("The method [" + e3 + "] does already exist, please use another name.");
          t2.prototype[e3] = i2;
        }, e2._emit = function(t3, e3) {
          for (var i2 in k)
            k[i2] === t3 && "function" == typeof this.params[i2] && this.params[i2].apply(this, e3);
        }, e2._getSelected = function(t3) {
          var e3 = [];
          for (var i2 in this[t3])
            this[t3][i2].element.isSelected && e3.push(i2);
          return e3;
        }, e2._setSelected = function(t3, e3) {
          var i2 = this;
          e3.forEach(function(e4) {
            i2[t3][e4] && i2[t3][e4].element.select(true);
          });
        }, e2._clearSelected = function(t3) {
          var e3 = this;
          this._getSelected(t3).forEach(function(i2) {
            e3[t3][i2].element.select(false);
          });
        }, e2._getLinesAsUids = function() {
          return Object.keys(this._lines);
        }, t2;
      }();
      G.maps = {}, G.defaults = { map: "world", backgroundColor: "transparent", draggable: true, zoomButtons: true, zoomOnScroll: true, zoomOnScrollSpeed: 3, zoomMax: 12, zoomMin: 1, zoomAnimate: true, showTooltip: true, zoomStep: 1.5, bindTouchEvents: true, lineStyle: { stroke: "#808080", strokeWidth: 1, strokeLinecap: "round" }, markersSelectable: false, markersSelectableOne: false, markerStyle: { initial: { r: 7, fill: "#374151", fillOpacity: 1, stroke: "#FFF", strokeWidth: 5, strokeOpacity: 0.5 }, hover: { fill: "#3cc0ff", cursor: "pointer" }, selected: { fill: "blue" }, selectedHover: {} }, markerLabelStyle: { initial: { fontFamily: "Verdana", fontSize: 12, fontWeight: 500, cursor: "default", fill: "#374151" }, hover: { cursor: "pointer" }, selected: {}, selectedHover: {} }, regionsSelectable: false, regionsSelectableOne: false, regionStyle: { initial: { fill: "#dee2e8", fillOpacity: 1, stroke: "none", strokeWidth: 0 }, hover: { fillOpacity: 0.7, cursor: "pointer" }, selected: { fill: "#9ca3af" }, selectedHover: {} }, regionLabelStyle: { initial: { fontFamily: "Verdana", fontSize: "12", fontWeight: "bold", cursor: "default", fill: "#35373e" }, hover: { cursor: "pointer" } } }, Object.assign(G.prototype, T);
      var B = function() {
        function t2(t3) {
          if (void 0 === t3 && (t3 = {}), !t3.selector)
            throw new Error("Selector is not given.");
          return new G(t3);
        }
        return t2.addMap = function(t3, e2) {
          G.maps[t3] = e2;
        }, t2;
      }();
      return window.jsVectorMap = B;
    });
  }
});
export default require_jsvectormap_min();
//# sourceMappingURL=jsvectormap.js.map
