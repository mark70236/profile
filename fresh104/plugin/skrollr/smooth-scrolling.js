!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length"in e && e.length
          , n = oe.type(e);
        return "function" !== n && !oe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function i(e, t, n) {
        if (oe.isFunction(t))
            return oe.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
        if (t.nodeType)
            return oe.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (me.test(t))
                return oe.filter(t, e, n);
            t = oe.filter(t, e)
        }
        return oe.grep(e, function(e) {
            return Z.call(t, e) > -1 !== n
        })
    }
    function r(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function o(e) {
        var t = {};
        return oe.each(e.match(we) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    function s() {
        G.removeEventListener("DOMContentLoaded", s),
        e.removeEventListener("load", s),
        oe.ready()
    }
    function a() {
        this.expando = oe.expando + a.uid++
    }
    function l(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(De, "-$&").toLowerCase(),
            n = e.getAttribute(i),
            "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : je.test(n) ? oe.parseJSON(n) : n)
                } catch (r) {}
                Se.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function u(e, t, n, i) {
        var r, o = 1, s = 20, a = i ? function() {
            return i.cur()
        }
        : function() {
            return oe.css(e, t, "")
        }
        , l = a(), u = n && n[3] || (oe.cssNumber[t] ? "" : "px"), c = (oe.cssNumber[t] || "px" !== u && +l) && Ne.exec(oe.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3],
            n = n || [],
            c = +l || 1;
            do
                o = o || ".5",
                c /= o,
                oe.style(e, t, c + u);
            while (o !== (o = a() / l) && 1 !== o && --s)
        }
        return n && (c = +c || +l || 0,
        r = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = u,
        i.start = c,
        i.end = r)),
        r
    }
    function c(e, t) {
        var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], n) : n
    }
    function f(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            Ee.set(e[n], "globalEval", !t || Ee.get(t[n], "globalEval"))
    }
    function p(e, t, n, i, r) {
        for (var o, s, a, l, u, p, d = t.createDocumentFragment(), h = [], m = 0, g = e.length; m < g; m++)
            if (o = e[m],
            o || 0 === o)
                if ("object" === oe.type(o))
                    oe.merge(h, o.nodeType ? [o] : o);
                else if (Ie.test(o)) {
                    for (s = s || d.appendChild(t.createElement("div")),
                    a = (Oe.exec(o) || ["", ""])[1].toLowerCase(),
                    l = He[a] || He._default,
                    s.innerHTML = l[1] + oe.htmlPrefilter(o) + l[2],
                    p = l[0]; p--; )
                        s = s.lastChild;
                    oe.merge(h, s.childNodes),
                    s = d.firstChild,
                    s.textContent = ""
                } else
                    h.push(t.createTextNode(o));
        for (d.textContent = "",
        m = 0; o = h[m++]; )
            if (i && oe.inArray(o, i) > -1)
                r && r.push(o);
            else if (u = oe.contains(o.ownerDocument, o),
            s = c(d.appendChild(o), "script"),
            u && f(s),
            n)
                for (p = 0; o = s[p++]; )
                    Fe.test(o.type || "") && n.push(o);
        return d
    }
    function d() {
        return !0
    }
    function h() {
        return !1
    }
    function m() {
        try {
            return G.activeElement
        } catch (e) {}
    }
    function g(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n,
            n = void 0);
            for (a in t)
                g(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n,
        i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
        i = void 0) : (r = i,
        i = n,
        n = void 0)),
        r === !1)
            r = h;
        else if (!r)
            return e;
        return 1 === o && (s = r,
        r = function(e) {
            return oe().off(e),
            s.apply(this, arguments)
        }
        ,
        r.guid = s.guid || (s.guid = oe.guid++)),
        e.each(function() {
            oe.event.add(this, t, r, i, n)
        })
    }
    function v(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function b(e) {
        var t = We.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function x(e, t) {
        var n, i, r, o, s, a, l, u;
        if (1 === t.nodeType) {
            if (Ee.hasData(e) && (o = Ee.access(e),
            s = Ee.set(t, o),
            u = o.events)) {
                delete s.handle,
                s.events = {};
                for (r in u)
                    for (n = 0,
                    i = u[r].length; n < i; n++)
                        oe.event.add(t, r, u[r][n])
            }
            Se.hasData(e) && (a = Se.access(e),
            l = oe.extend({}, a),
            Se.set(t, l))
        }
    }
    function w(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Le.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function T(e, t, n, i) {
        t = J.apply([], t);
        var r, o, s, a, l, u, f = 0, d = e.length, h = d - 1, m = t[0], g = oe.isFunction(m);
        if (g || d > 1 && "string" == typeof m && !ie.checkClone && _e.test(m))
            return e.each(function(r) {
                var o = e.eq(r);
                g && (t[0] = m.call(this, r, o.html())),
                T(o, t, n, i)
            });
        if (d && (r = p(t, e[0].ownerDocument, !1, e, i),
        o = r.firstChild,
        1 === r.childNodes.length && (r = o),
        o || i)) {
            for (s = oe.map(c(r, "script"), y),
            a = s.length; f < d; f++)
                l = r,
                f !== h && (l = oe.clone(l, !0, !0),
                a && oe.merge(s, c(l, "script"))),
                n.call(e[f], l, f);
            if (a)
                for (u = s[s.length - 1].ownerDocument,
                oe.map(s, b),
                f = 0; f < a; f++)
                    l = s[f],
                    Fe.test(l.type || "") && !Ee.access(l, "globalEval") && oe.contains(u, l) && (l.src ? oe._evalUrl && oe._evalUrl(l.src) : oe.globalEval(l.textContent.replace(Ye, "")))
        }
        return e
    }
    function C(e, t, n) {
        for (var i, r = t ? oe.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
            n || 1 !== i.nodeType || oe.cleanData(c(i)),
            i.parentNode && (n && oe.contains(i.ownerDocument, i) && f(c(i, "script")),
            i.parentNode.removeChild(i));
        return e
    }
    function k(e, t) {
        var n = oe(t.createElement(e)).appendTo(t.body)
          , i = oe.css(n[0], "display");
        return n.detach(),
        i
    }
    function E(e) {
        var t = G
          , n = Ve[e];
        return n || (n = k(e, t),
        "none" !== n && n || (ze = (ze || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
        t = ze[0].contentDocument,
        t.write(),
        t.close(),
        n = k(e, t),
        ze.detach()),
        Ve[e] = n),
        n
    }
    function S(e, t, n) {
        var i, r, o, s, a = e.style;
        return n = n || Qe(e),
        s = n ? n.getPropertyValue(t) || n[t] : void 0,
        "" !== s && void 0 !== s || oe.contains(e.ownerDocument, e) || (s = oe.style(e, t)),
        n && !ie.pixelMarginRight() && Ge.test(s) && Ue.test(t) && (i = a.width,
        r = a.minWidth,
        o = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = i,
        a.minWidth = r,
        a.maxWidth = o),
        void 0 !== s ? s + "" : s
    }
    function j(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function D(e) {
        if (e in it)
            return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--; )
            if (e = nt[n] + t,
            e in it)
                return e
    }
    function A(e, t, n) {
        var i = Ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }
    function N(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2)
            "margin" === n && (s += oe.css(e, n + $e[o], !0, r)),
            i ? ("content" === n && (s -= oe.css(e, "padding" + $e[o], !0, r)),
            "margin" !== n && (s -= oe.css(e, "border" + $e[o] + "Width", !0, r))) : (s += oe.css(e, "padding" + $e[o], !0, r),
            "padding" !== n && (s += oe.css(e, "border" + $e[o] + "Width", !0, r)));
        return s
    }
    function $(e, t, n) {
        var i = !0
          , r = "width" === t ? e.offsetWidth : e.offsetHeight
          , o = Qe(e)
          , s = "border-box" === oe.css(e, "boxSizing", !1, o);
        if (r <= 0 || null == r) {
            if (r = S(e, t, o),
            (r < 0 || null == r) && (r = e.style[t]),
            Ge.test(r))
                return r;
            i = s && (ie.boxSizingReliable() || r === e.style[t]),
            r = parseFloat(r) || 0
        }
        return r + N(e, t, n || (s ? "border" : "content"), i, o) + "px"
    }
    function q(e, t) {
        for (var n, i, r, o = [], s = 0, a = e.length; s < a; s++)
            i = e[s],
            i.style && (o[s] = Ee.get(i, "olddisplay"),
            n = i.style.display,
            t ? (o[s] || "none" !== n || (i.style.display = ""),
            "" === i.style.display && qe(i) && (o[s] = Ee.access(i, "olddisplay", E(i.nodeName)))) : (r = qe(i),
            "none" === n && r || Ee.set(i, "olddisplay", r ? n : oe.css(i, "display"))));
        for (s = 0; s < a; s++)
            i = e[s],
            i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
        return e
    }
    function L(e, t, n, i, r) {
        return new L.prototype.init(e,t,n,i,r)
    }
    function O() {
        return e.setTimeout(function() {
            rt = void 0
        }),
        rt = oe.now()
    }
    function F(e, t) {
        var n, i = 0, r = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            n = $e[i],
            r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function H(e, t, n) {
        for (var i, r = (P.tweeners[t] || []).concat(P.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e))
                return i
    }
    function I(e, t, n) {
        var i, r, o, s, a, l, u, c, f = this, p = {}, d = e.style, h = e.nodeType && qe(e), m = Ee.get(e, "fxshow");
        n.queue || (a = oe._queueHooks(e, "fx"),
        null == a.unqueued && (a.unqueued = 0,
        l = a.empty.fire,
        a.empty.fire = function() {
            a.unqueued || l()
        }
        ),
        a.unqueued++,
        f.always(function() {
            f.always(function() {
                a.unqueued--,
                oe.queue(e, "fx").length || a.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
        u = oe.css(e, "display"),
        c = "none" === u ? Ee.get(e, "olddisplay") || E(e.nodeName) : u,
        "inline" === c && "none" === oe.css(e, "float") && (d.display = "inline-block")),
        n.overflow && (d.overflow = "hidden",
        f.always(function() {
            d.overflow = n.overflow[0],
            d.overflowX = n.overflow[1],
            d.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i],
            st.exec(r)) {
                if (delete t[i],
                o = o || "toggle" === r,
                r === (h ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i])
                        continue;
                    h = !0
                }
                p[i] = m && m[i] || oe.style(e, i)
            } else
                u = void 0;
        if (oe.isEmptyObject(p))
            "inline" === ("none" === u ? E(e.nodeName) : u) && (d.display = u);
        else {
            m ? "hidden"in m && (h = m.hidden) : m = Ee.access(e, "fxshow", {}),
            o && (m.hidden = !h),
            h ? oe(e).show() : f.done(function() {
                oe(e).hide()
            }),
            f.done(function() {
                var t;
                Ee.remove(e, "fxshow");
                for (t in p)
                    oe.style(e, t, p[t])
            });
            for (i in p)
                s = H(h ? m[i] : 0, i, f),
                i in m || (m[i] = s.start,
                h && (s.end = s.start,
                s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function M(e, t) {
        var n, i, r, o, s;
        for (n in e)
            if (i = oe.camelCase(n),
            r = t[i],
            o = e[n],
            oe.isArray(o) && (r = o[1],
            o = e[n] = o[0]),
            n !== i && (e[i] = o,
            delete e[n]),
            s = oe.cssHooks[i],
            s && "expand"in s) {
                o = s.expand(o),
                delete e[i];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = r)
            } else
                t[i] = r
    }
    function P(e, t, n) {
        var i, r, o = 0, s = P.prefilters.length, a = oe.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (r)
                return !1;
            for (var t = rt || O(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; s < l; s++)
                u.tweens[s].run(o);
            return a.notifyWith(e, [u, o, n]),
            o < 1 && l ? n : (a.resolveWith(e, [u]),
            !1)
        }, u = a.promise({
            elem: e,
            props: oe.extend({}, t),
            opts: oe.extend(!0, {
                specialEasing: {},
                easing: oe.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: rt || O(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = oe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(i),
                i
            },
            stop: function(t) {
                var n = 0
                  , i = t ? u.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; n < i; n++)
                    u.tweens[n].run(1);
                return t ? (a.notifyWith(e, [u, 1, 0]),
                a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]),
                this
            }
        }), c = u.props;
        for (M(c, u.opts.specialEasing); o < s; o++)
            if (i = P.prefilters[o].call(u, e, c, u.opts))
                return oe.isFunction(i.stop) && (oe._queueHooks(u.elem, u.opts.queue).stop = oe.proxy(i.stop, i)),
                i;
        return oe.map(c, H, u),
        oe.isFunction(u.opts.start) && u.opts.start.call(e, u),
        oe.fx.timer(oe.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function R(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function B(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var i, r = 0, o = t.toLowerCase().match(we) || [];
            if (oe.isFunction(n))
                for (; i = o[r++]; )
                    "+" === i[0] ? (i = i.slice(1) || "*",
                    (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }
    function X(e, t, n, i) {
        function r(a) {
            var l;
            return o[a] = !0,
            oe.each(e[a] || [], function(e, a) {
                var u = a(t, n, i);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u),
                r(u),
                !1)
            }),
            l
        }
        var o = {}
          , s = e === St;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }
    function _(e, t) {
        var n, i, r = oe.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && oe.extend(!0, e, i),
        e
    }
    function W(e, t, n) {
        for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
            l.shift(),
            void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    l.unshift(r);
                    break
                }
        if (l[0]in n)
            o = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        if (o)
            return o !== l[0] && l.unshift(o),
            n[o]
    }
    function Y(e, t, n, i) {
        var r, o, s, a, l, u = {}, c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters)
                u[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            l = o,
            o = c.shift())
                if ("*" === o)
                    o = l;
                else if ("*" !== l && l !== o) {
                    if (s = u[l + " " + o] || u["* " + o],
                    !s)
                        for (r in u)
                            if (a = r.split(" "),
                            a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0],
                                c.unshift(a[1]));
                                break
                            }
                    if (s !== !0)
                        if (s && e["throws"])
                            t = s(t);
                        else
                            try {
                                t = s(t)
                            } catch (f) {
                                return {
                                    state: "parsererror",
                                    error: s ? f : "No conversion from " + l + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function z(e, t, n, i) {
        var r;
        if (oe.isArray(t))
            oe.each(t, function(t, r) {
                n || Nt.test(e) ? i(e, r) : z(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
            });
        else if (n || "object" !== oe.type(t))
            i(e, t);
        else
            for (r in t)
                z(e + "[" + r + "]", t[r], n, i)
    }
    function V(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var U = []
      , G = e.document
      , Q = U.slice
      , J = U.concat
      , K = U.push
      , Z = U.indexOf
      , ee = {}
      , te = ee.toString
      , ne = ee.hasOwnProperty
      , ie = {}
      , re = "2.2.4"
      , oe = function(e, t) {
        return new oe.fn.init(e,t)
    }
      , se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , ae = /^-ms-/
      , le = /-([\da-z])/gi
      , ue = function(e, t) {
        return t.toUpperCase()
    };
    oe.fn = oe.prototype = {
        jquery: re,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function() {
            return Q.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : Q.call(this)
        },
        pushStack: function(e) {
            var t = oe.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e) {
            return oe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(oe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(Q.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: K,
        sort: U.sort,
        splice: U.splice
    },
    oe.extend = oe.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof s && (u = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || oe.isFunction(s) || (s = {}),
        a === l && (s = this,
        a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    n = s[t],
                    i = e[t],
                    s !== i && (u && i && (oe.isPlainObject(i) || (r = oe.isArray(i))) ? (r ? (r = !1,
                    o = n && oe.isArray(n) ? n : []) : o = n && oe.isPlainObject(n) ? n : {},
                    s[t] = oe.extend(u, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }
    ,
    oe.extend({
        expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === oe.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !oe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== oe.type(e) || e.nodeType || oe.isWindow(e))
                return !1;
            if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf"))
                return !1;
            for (t in e)
                ;
            return void 0 === t || ne.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = oe.trim(e),
            e && (1 === e.indexOf("use strict") ? (t = G.createElement("script"),
            t.text = e,
            G.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(ae, "ms-").replace(le, ue)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var i, r = 0;
            if (n(e))
                for (i = e.length; r < i && t.call(e[r], r, e[r]) !== !1; r++)
                    ;
            else
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1)
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(se, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? oe.merge(i, "string" == typeof e ? [e] : e) : K.call(i, e)),
            i
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : Z.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                e[r++] = t[i];
            return e.length = r,
            e
        },
        grep: function(e, t, n) {
            for (var i, r = [], o = 0, s = e.length, a = !n; o < s; o++)
                i = !t(e[o], o),
                i !== a && r.push(e[o]);
            return r
        },
        map: function(e, t, i) {
            var r, o, s = 0, a = [];
            if (n(e))
                for (r = e.length; s < r; s++)
                    o = t(e[s], s, i),
                    null != o && a.push(o);
            else
                for (s in e)
                    o = t(e[s], s, i),
                    null != o && a.push(o);
            return J.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            if ("string" == typeof t && (n = e[t],
            t = e,
            e = n),
            oe.isFunction(e))
                return i = Q.call(arguments, 2),
                r = function() {
                    return e.apply(t || this, i.concat(Q.call(arguments)))
                }
                ,
                r.guid = e.guid = e.guid || oe.guid++,
                r
        },
        now: Date.now,
        support: ie
    }),
    "function" == typeof Symbol && (oe.fn[Symbol.iterator] = U[Symbol.iterator]),
    oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    });
    var ce = function(e) {
        function t(e, t, n, i) {
            var r, o, s, a, l, u, f, d, h = t && t.ownerDocument, m = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m)
                return n;
            if (!i && ((t ? t.ownerDocument || t : R) !== q && $(t),
            t = t || q,
            O)) {
                if (11 !== m && (u = ve.exec(e)))
                    if (r = u[1]) {
                        if (9 === m) {
                            if (!(s = t.getElementById(r)))
                                return n;
                            if (s.id === r)
                                return n.push(s),
                                n
                        } else if (h && (s = h.getElementById(r)) && M(t, s) && s.id === r)
                            return n.push(s),
                            n
                    } else {
                        if (u[2])
                            return K.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((r = u[3]) && w.getElementsByClassName && t.getElementsByClassName)
                            return K.apply(n, t.getElementsByClassName(r)),
                            n
                    }
                if (w.qsa && !Y[e + " "] && (!F || !F.test(e))) {
                    if (1 !== m)
                        h = t,
                        d = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(be, "\\$&") : t.setAttribute("id", a = P),
                        f = E(e),
                        o = f.length,
                        l = pe.test(a) ? "#" + a : "[id='" + a + "']"; o--; )
                            f[o] = l + " " + p(f[o]);
                        d = f.join(","),
                        h = ye.test(e) && c(t.parentNode) || t
                    }
                    if (d)
                        try {
                            return K.apply(n, h.querySelectorAll(d)),
                            n
                        } catch (g) {} finally {
                            a === P && t.removeAttribute("id")
                        }
                }
            }
            return j(e.replace(ae, "$1"), t, n, i)
        }
        function n() {
            function e(n, i) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()],
                e[n + " "] = i
            }
            var t = [];
            return e
        }
        function i(e) {
            return e[P] = !0,
            e
        }
        function r(e) {
            var t = q.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
                T.attrHandle[n[i]] = t
        }
        function s(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function u(e) {
            return i(function(t) {
                return t = +t,
                i(function(n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--; )
                        n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }
        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function f() {}
        function p(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function d(e, t, n) {
            var i = t.dir
              , r = n && "parentNode" === i
              , o = X++;
            return t.first ? function(t, n, o) {
                for (; t = t[i]; )
                    if (1 === t.nodeType || r)
                        return e(t, n, o)
            }
            : function(t, n, s) {
                var a, l, u, c = [B, o];
                if (s) {
                    for (; t = t[i]; )
                        if ((1 === t.nodeType || r) && e(t, n, s))
                            return !0
                } else
                    for (; t = t[i]; )
                        if (1 === t.nodeType || r) {
                            if (u = t[P] || (t[P] = {}),
                            l = u[t.uniqueID] || (u[t.uniqueID] = {}),
                            (a = l[i]) && a[0] === B && a[1] === o)
                                return c[2] = a[2];
                            if (l[i] = c,
                            c[2] = e(t, n, s))
                                return !0
                        }
            }
        }
        function h(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--; )
                    if (!e[r](t, n, i))
                        return !1;
                return !0
            }
            : e[0]
        }
        function m(e, n, i) {
            for (var r = 0, o = n.length; r < o; r++)
                t(e, n[r], i);
            return i
        }
        function g(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)
                (o = e[a]) && (n && !n(o, i, r) || (s.push(o),
                u && t.push(a)));
            return s
        }
        function v(e, t, n, r, o, s) {
            return r && !r[P] && (r = v(r)),
            o && !o[P] && (o = v(o, s)),
            i(function(i, s, a, l) {
                var u, c, f, p = [], d = [], h = s.length, v = i || m(t || "*", a.nodeType ? [a] : a, []), y = !e || !i && t ? v : g(v, p, e, a, l), b = n ? o || (i ? e : h || r) ? [] : s : y;
                if (n && n(y, b, a, l),
                r)
                    for (u = g(b, d),
                    r(u, [], a, l),
                    c = u.length; c--; )
                        (f = u[c]) && (b[d[c]] = !(y[d[c]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (u = [],
                            c = b.length; c--; )
                                (f = b[c]) && u.push(y[c] = f);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--; )
                            (f = b[c]) && (u = o ? ee(i, f) : p[c]) > -1 && (i[u] = !(s[u] = f))
                    }
                } else
                    b = g(b === s ? b.splice(h, b.length) : b),
                    o ? o(null, s, b, l) : K.apply(s, b)
            })
        }
        function y(e) {
            for (var t, n, i, r = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, l = d(function(e) {
                return e === t
            }, s, !0), u = d(function(e) {
                return ee(t, e) > -1
            }, s, !0), c = [function(e, n, i) {
                var r = !o && (i || n !== D) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                return t = null,
                r
            }
            ]; a < r; a++)
                if (n = T.relative[e[a].type])
                    c = [d(h(c), n)];
                else {
                    if (n = T.filter[e[a].type].apply(null, e[a].matches),
                    n[P]) {
                        for (i = ++a; i < r && !T.relative[e[i].type]; i++)
                            ;
                        return v(a > 1 && h(c), a > 1 && p(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ae, "$1"), n, a < i && y(e.slice(a, i)), i < r && y(e = e.slice(i)), i < r && p(e))
                    }
                    c.push(n)
                }
            return h(c)
        }
        function b(e, n) {
            var r = n.length > 0
              , o = e.length > 0
              , s = function(i, s, a, l, u) {
                var c, f, p, d = 0, h = "0", m = i && [], v = [], y = D, b = i || o && T.find.TAG("*", u), x = B += null == y ? 1 : Math.random() || .1, w = b.length;
                for (u && (D = s === q || s || u); h !== w && null != (c = b[h]); h++) {
                    if (o && c) {
                        for (f = 0,
                        s || c.ownerDocument === q || ($(c),
                        a = !O); p = e[f++]; )
                            if (p(c, s || q, a)) {
                                l.push(c);
                                break
                            }
                        u && (B = x)
                    }
                    r && ((c = !p && c) && d--,
                    i && m.push(c))
                }
                if (d += h,
                r && h !== d) {
                    for (f = 0; p = n[f++]; )
                        p(m, v, s, a);
                    if (i) {
                        if (d > 0)
                            for (; h--; )
                                m[h] || v[h] || (v[h] = Q.call(l));
                        v = g(v)
                    }
                    K.apply(l, v),
                    u && !i && v.length > 0 && d + n.length > 1 && t.uniqueSort(l)
                }
                return u && (B = x,
                D = y),
                m
            };
            return r ? i(s) : s
        }
        var x, w, T, C, k, E, S, j, D, A, N, $, q, L, O, F, H, I, M, P = "sizzle" + 1 * new Date, R = e.document, B = 0, X = 0, _ = n(), W = n(), Y = n(), z = function(e, t) {
            return e === t && (N = !0),
            0
        }, V = 1 << 31, U = {}.hasOwnProperty, G = [], Q = G.pop, J = G.push, K = G.push, Z = G.slice, ee = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]", oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)", se = new RegExp(ne + "+","g"), ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$","g"), le = new RegExp("^" + ne + "*," + ne + "*"), ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]","g"), fe = new RegExp(oe), pe = new RegExp("^" + ie + "$"), de = {
            ID: new RegExp("^#(" + ie + ")"),
            CLASS: new RegExp("^\\.(" + ie + ")"),
            TAG: new RegExp("^(" + ie + "|[*])"),
            ATTR: new RegExp("^" + re),
            PSEUDO: new RegExp("^" + oe),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)","i"),
            bool: new RegExp("^(?:" + te + ")$","i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)","i")
        }, he = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ge = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)","ig"), we = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, Te = function() {
            $()
        };
        try {
            K.apply(G = Z.call(R.childNodes), R.childNodes),
            G[R.childNodes.length].nodeType
        } catch (Ce) {
            K = {
                apply: G.length ? function(e, t) {
                    J.apply(e, Z.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        w = t.support = {},
        k = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        $ = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : R;
            return i !== q && 9 === i.nodeType && i.documentElement ? (q = i,
            L = q.documentElement,
            O = !k(q),
            (n = q.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)),
            w.attributes = r(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            w.getElementsByTagName = r(function(e) {
                return e.appendChild(q.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            w.getElementsByClassName = ge.test(q.getElementsByClassName),
            w.getById = r(function(e) {
                return L.appendChild(e).id = P,
                !q.getElementsByName || !q.getElementsByName(P).length
            }),
            w.getById ? (T.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && O) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ,
            T.filter.ID = function(e) {
                var t = e.replace(xe, we);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete T.find.ID,
            T.filter.ID = function(e) {
                var t = e.replace(xe, we);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            T.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }
            ,
            T.find.CLASS = w.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && O)
                    return t.getElementsByClassName(e)
            }
            ,
            H = [],
            F = [],
            (w.qsa = ge.test(q.querySelectorAll)) && (r(function(e) {
                L.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"),
                e.querySelectorAll("[id~=" + P + "-]").length || F.push("~="),
                e.querySelectorAll(":checked").length || F.push(":checked"),
                e.querySelectorAll("a#" + P + "+*").length || F.push(".#.+[+~]")
            }),
            r(function(e) {
                var t = q.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                F.push(",.*:")
            })),
            (w.matchesSelector = ge.test(I = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function(e) {
                w.disconnectedMatch = I.call(e, "div"),
                I.call(e, "[s!='']:x"),
                H.push("!=", oe)
            }),
            F = F.length && new RegExp(F.join("|")),
            H = H.length && new RegExp(H.join("|")),
            t = ge.test(L.compareDocumentPosition),
            M = t || ge.test(L.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            z = t ? function(e, t) {
                if (e === t)
                    return N = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === q || e.ownerDocument === R && M(R, e) ? -1 : t === q || t.ownerDocument === R && M(R, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return N = !0,
                    0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, a = [e], l = [t];
                if (!r || !o)
                    return e === q ? -1 : t === q ? 1 : r ? -1 : o ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                if (r === o)
                    return s(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    l.unshift(n);
                for (; a[i] === l[i]; )
                    i++;
                return i ? s(a[i], l[i]) : a[i] === R ? -1 : l[i] === R ? 1 : 0
            }
            ,
            q) : q
        }
        ,
        t.matches = function(e, n) {
            return t(e, null, null, n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== q && $(e),
            n = n.replace(ce, "='$1']"),
            w.matchesSelector && O && !Y[n + " "] && (!H || !H.test(n)) && (!F || !F.test(n)))
                try {
                    var i = I.call(e, n);
                    if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return i
                } catch (r) {}
            return t(n, q, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== q && $(e),
            M(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== q && $(e);
            var n = T.attrHandle[t.toLowerCase()]
              , i = n && U.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== i ? i : w.attributes || !O ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], i = 0, r = 0;
            if (N = !w.detectDuplicates,
            A = !w.sortStable && e.slice(0),
            e.sort(z),
            N) {
                for (; t = e[r++]; )
                    t === e[r] && (i = n.push(r));
                for (; i--; )
                    e.splice(n[i], 1)
            }
            return A = null,
            e
        }
        ,
        C = t.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += C(e)
                } else if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += C(t);
            return n
        }
        ,
        T = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: de,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xe, we),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xe, we).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = _[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && _(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : !n || (o += "",
                        "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3)
                      , s = "last" !== e.slice(-4)
                      , a = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var u, c, f, p, d, h, m = o !== s ? "nextSibling" : "previousSibling", g = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
                        if (g) {
                            if (o) {
                                for (; m; ) {
                                    for (p = t; p = p[m]; )
                                        if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)
                                            return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? g.firstChild : g.lastChild],
                            s && y) {
                                for (p = g,
                                f = p[P] || (p[P] = {}),
                                c = f[p.uniqueID] || (f[p.uniqueID] = {}),
                                u = c[e] || [],
                                d = u[0] === B && u[1],
                                b = d && u[2],
                                p = d && g.childNodes[d]; p = ++d && p && p[m] || (b = d = 0) || h.pop(); )
                                    if (1 === p.nodeType && ++b && p === t) {
                                        c[e] = [B, d, b];
                                        break
                                    }
                            } else if (y && (p = t,
                            f = p[P] || (p[P] = {}),
                            c = f[p.uniqueID] || (f[p.uniqueID] = {}),
                            u = c[e] || [],
                            d = u[0] === B && u[1],
                            b = d),
                            b === !1)
                                for (; (p = ++d && p && p[m] || (b = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && (f = p[P] || (p[P] = {}),
                                c = f[p.uniqueID] || (f[p.uniqueID] = {}),
                                c[e] = [B, b]),
                                p !== t)); )
                                    ;
                            return b -= r,
                            b === i || b % i === 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[P] ? o(n) : o.length > 1 ? (r = [e, e, "", n],
                    T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = o(e, n), s = r.length; s--; )
                            i = ee(e, r[s]),
                            e[i] = !(t[i] = r[s])
                    }) : function(e) {
                        return o(e, 0, r)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = []
                      , n = []
                      , r = S(e.replace(ae, "$1"));
                    return r[P] ? i(function(e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--; )
                            (o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(xe, we),
                    function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(xe, we).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === L
                },
                focus: function(e) {
                    return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0; )
                        e.push(i);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                })
            }
        },
        T.pseudos.nth = T.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            T.pseudos[x] = a(x);
        for (x in {
            submit: !0,
            reset: !0
        })
            T.pseudos[x] = l(x);
        return f.prototype = T.filters = T.pseudos,
        T.setFilters = new f,
        E = t.tokenize = function(e, n) {
            var i, r, o, s, a, l, u, c = W[e + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (a = e,
            l = [],
            u = T.preFilter; a; ) {
                i && !(r = le.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                l.push(o = [])),
                i = !1,
                (r = ue.exec(a)) && (i = r.shift(),
                o.push({
                    value: i,
                    type: r[0].replace(ae, " ")
                }),
                a = a.slice(i.length));
                for (s in T.filter)
                    !(r = de[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(),
                    o.push({
                        value: i,
                        type: s,
                        matches: r
                    }),
                    a = a.slice(i.length));
                if (!i)
                    break
            }
            return n ? a.length : a ? t.error(e) : W(e, l).slice(0)
        }
        ,
        S = t.compile = function(e, t) {
            var n, i = [], r = [], o = Y[e + " "];
            if (!o) {
                for (t || (t = E(e)),
                n = t.length; n--; )
                    o = y(t[n]),
                    o[P] ? i.push(o) : r.push(o);
                o = Y(e, b(r, i)),
                o.selector = e
            }
            return o
        }
        ,
        j = t.select = function(e, t, n, i) {
            var r, o, s, a, l, u = "function" == typeof e && e, f = !i && E(e = u.selector || e);
            if (n = n || [],
            1 === f.length) {
                if (o = f[0] = f[0].slice(0),
                o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && O && T.relative[o[1].type]) {
                    if (t = (T.find.ID(s.matches[0].replace(xe, we), t) || [])[0],
                    !t)
                        return n;
                    u && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (r = de.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r],
                !T.relative[a = s.type]); )
                    if ((l = T.find[a]) && (i = l(s.matches[0].replace(xe, we), ye.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(r, 1),
                        e = i.length && p(o),
                        !e)
                            return K.apply(n, i),
                            n;
                        break
                    }
            }
            return (u || S(e, f))(i, t, !O, n, !t || ye.test(e) && c(t.parentNode) || t),
            n
        }
        ,
        w.sortStable = P.split("").sort(z).join("") === P,
        w.detectDuplicates = !!N,
        $(),
        w.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(q.createElement("div"))
        }),
        r(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        w.attributes && r(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        r(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function(e, t, n) {
            var i;
            if (!n)
                return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
        t
    }(e);
    oe.find = ce,
    oe.expr = ce.selectors,
    oe.expr[":"] = oe.expr.pseudos,
    oe.uniqueSort = oe.unique = ce.uniqueSort,
    oe.text = ce.getText,
    oe.isXMLDoc = ce.isXML,
    oe.contains = ce.contains;
    var fe = function(e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (r && oe(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
      , pe = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , de = oe.expr.match.needsContext
      , he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , me = /^.[^:#\[\.,]*$/;
    oe.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? oe.find.matchesSelector(i, e) ? [i] : [] : oe.find.matches(e, oe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    oe.fn.extend({
        find: function(e) {
            var t, n = this.length, i = [], r = this;
            if ("string" != typeof e)
                return this.pushStack(oe(e).filter(function() {
                    for (t = 0; t < n; t++)
                        if (oe.contains(r[t], this))
                            return !0
                }));
            for (t = 0; t < n; t++)
                oe.find(e, r[t], i);
            return i = this.pushStack(n > 1 ? oe.unique(i) : i),
            i.selector = this.selector ? this.selector + " " + e : e,
            i
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && de.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var ge, ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ye = oe.fn.init = function(e, t, n) {
        var i, r;
        if (!e)
            return this;
        if (n = n || ge,
        "string" == typeof e) {
            if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ve.exec(e),
            !i || !i[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof oe ? t[0] : t,
                oe.merge(this, oe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : G, !0)),
                he.test(i[1]) && oe.isPlainObject(t))
                    for (i in t)
                        oe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return r = G.getElementById(i[2]),
            r && r.parentNode && (this.length = 1,
            this[0] = r),
            this.context = G,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : oe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector,
        this.context = e.context),
        oe.makeArray(e, this))
    }
    ;
    ye.prototype = oe.fn,
    ge = oe(G);
    var be = /^(?:parents|prev(?:Until|All))/
      , xe = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    oe.fn.extend({
        has: function(e) {
            var t = oe(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (oe.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, o = [], s = de.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; i < r; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? oe.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? Z.call(oe(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    oe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return fe(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return fe(e, "parentNode", n)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return fe(e, "nextSibling")
        },
        prevAll: function(e) {
            return fe(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return fe(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return fe(e, "previousSibling", n)
        },
        siblings: function(e) {
            return pe((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return pe(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || oe.merge([], e.childNodes)
        }
    }, function(e, t) {
        oe.fn[e] = function(n, i) {
            var r = oe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (r = oe.filter(i, r)),
            this.length > 1 && (xe[e] || oe.uniqueSort(r),
            be.test(e) && r.reverse()),
            this.pushStack(r)
        }
    });
    var we = /\S+/g;
    oe.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : oe.extend({}, e);
        var t, n, i, r, s = [], a = [], l = -1, u = function() {
            for (r = e.once,
            i = t = !0; a.length; l = -1)
                for (n = a.shift(); ++l < s.length; )
                    s[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = s.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            r && (s = n ? [] : "")
        }, c = {
            add: function() {
                return s && (n && !t && (l = s.length - 1,
                a.push(n)),
                function i(t) {
                    oe.each(t, function(t, n) {
                        oe.isFunction(n) ? e.unique && c.has(n) || s.push(n) : n && n.length && "string" !== oe.type(n) && i(n)
                    })
                }(arguments),
                n && !t && u()),
                this
            },
            remove: function() {
                return oe.each(arguments, function(e, t) {
                    for (var n; (n = oe.inArray(t, s, n)) > -1; )
                        s.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? oe.inArray(e, s) > -1 : s.length > 0
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return r = a = [],
                s = n = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return r = a = [],
                n || (s = n = ""),
                this
            },
            locked: function() {
                return !!r
            },
            fireWith: function(e, n) {
                return r || (n = n || [],
                n = [e, n.slice ? n.slice() : n],
                a.push(n),
                t || u()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return c
    }
    ,
    oe.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", oe.Callbacks("once memory"), "resolved"], ["reject", "fail", oe.Callbacks("once memory"), "rejected"], ["notify", "progress", oe.Callbacks("memory")]]
              , n = "pending"
              , i = {
                state: function() {
                    return n
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return oe.Deferred(function(n) {
                        oe.each(t, function(t, o) {
                            var s = oe.isFunction(e[t]) && e[t];
                            r[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && oe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? oe.extend(e, i) : i
                }
            }
              , r = {};
            return i.pipe = i.then,
            oe.each(t, function(e, o) {
                var s = o[2]
                  , a = o[3];
                i[o[1]] = s.add,
                a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock),
                r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments),
                    this
                }
                ,
                r[o[0] + "With"] = s.fireWith
            }),
            i.promise(r),
            e && e.call(r, r),
            r
        },
        when: function(e) {
            var t, n, i, r = 0, o = Q.call(arguments), s = o.length, a = 1 !== s || e && oe.isFunction(e.promise) ? s : 0, l = 1 === a ? e : oe.Deferred(), u = function(e, n, i) {
                return function(r) {
                    n[e] = this,
                    i[e] = arguments.length > 1 ? Q.call(arguments) : r,
                    i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                }
            };
            if (s > 1)
                for (t = new Array(s),
                n = new Array(s),
                i = new Array(s); r < s; r++)
                    o[r] && oe.isFunction(o[r].promise) ? o[r].promise().progress(u(r, n, t)).done(u(r, i, o)).fail(l.reject) : --a;
            return a || l.resolveWith(i, o),
            l.promise()
        }
    });
    var Te;
    oe.fn.ready = function(e) {
        return oe.ready.promise().done(e),
        this
    }
    ,
    oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --oe.readyWait : oe.isReady) || (oe.isReady = !0,
            e !== !0 && --oe.readyWait > 0 || (Te.resolveWith(G, [oe]),
            oe.fn.triggerHandler && (oe(G).triggerHandler("ready"),
            oe(G).off("ready"))))
        }
    }),
    oe.ready.promise = function(t) {
        return Te || (Te = oe.Deferred(),
        "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? e.setTimeout(oe.ready) : (G.addEventListener("DOMContentLoaded", s),
        e.addEventListener("load", s))),
        Te.promise(t)
    }
    ,
    oe.ready.promise();
    var Ce = function(e, t, n, i, r, o, s) {
        var a = 0
          , l = e.length
          , u = null == n;
        if ("object" === oe.type(n)) {
            r = !0;
            for (a in n)
                Ce(e, t, a, n[a], !0, o, s)
        } else if (void 0 !== i && (r = !0,
        oe.isFunction(i) || (s = !0),
        u && (s ? (t.call(e, i),
        t = null) : (u = t,
        t = function(e, t, n) {
            return u.call(oe(e), n)
        }
        )),
        t))
            for (; a < l; a++)
                t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
    }
      , ke = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    a.uid = 1,
    a.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }),
            e[this.expando]
        },
        cache: function(e) {
            if (!ke(e))
                return {};
            var t = e[this.expando];
            return t || (t = {},
            ke(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t)
                r[t] = n;
            else
                for (i in t)
                    r[i] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t),
            void 0 !== i ? i : this.get(e, oe.camelCase(t))) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i, r, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t)
                    this.register(e);
                else {
                    oe.isArray(t) ? i = t.concat(t.map(oe.camelCase)) : (r = oe.camelCase(t),
                    t in o ? i = [t, r] : (i = r,
                    i = i in o ? [i] : i.match(we) || [])),
                    n = i.length;
                    for (; n--; )
                        delete o[i[n]]
                }
                (void 0 === t || oe.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !oe.isEmptyObject(t)
        }
    };
    var Ee = new a
      , Se = new a
      , je = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , De = /[A-Z]/g;
    oe.extend({
        hasData: function(e) {
            return Se.hasData(e) || Ee.hasData(e)
        },
        data: function(e, t, n) {
            return Se.access(e, t, n)
        },
        removeData: function(e, t) {
            Se.remove(e, t)
        },
        _data: function(e, t, n) {
            return Ee.access(e, t, n)
        },
        _removeData: function(e, t) {
            Ee.remove(e, t)
        }
    }),
    oe.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0], s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = Se.get(o),
                1 === o.nodeType && !Ee.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--; )
                        s[n] && (i = s[n].name,
                        0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)),
                        l(o, i, r[i])));
                    Ee.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                Se.set(this, e)
            }) : Ce(this, function(t) {
                var n, i;
                if (o && void 0 === t) {
                    if (n = Se.get(o, e) || Se.get(o, e.replace(De, "-$&").toLowerCase()),
                    void 0 !== n)
                        return n;
                    if (i = oe.camelCase(e),
                    n = Se.get(o, i),
                    void 0 !== n)
                        return n;
                    if (n = l(o, i, void 0),
                    void 0 !== n)
                        return n
                } else
                    i = oe.camelCase(e),
                    this.each(function() {
                        var n = Se.get(this, i);
                        Se.set(this, i, t),
                        e.indexOf("-") > -1 && void 0 !== n && Se.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Se.remove(this, e)
            })
        }
    }),
    oe.extend({
        queue: function(e, t, n) {
            var i;
            if (e)
                return t = (t || "fx") + "queue",
                i = Ee.get(e, t),
                n && (!i || oe.isArray(n) ? i = Ee.access(e, t, oe.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = oe.queue(e, t)
              , i = n.length
              , r = n.shift()
              , o = oe._queueHooks(e, t)
              , s = function() {
                oe.dequeue(e, t)
            };
            "inprogress" === r && (r = n.shift(),
            i--),
            r && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(e, s, o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Ee.get(e, n) || Ee.access(e, n, {
                empty: oe.Callbacks("once memory").add(function() {
                    Ee.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    oe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = oe.queue(this, e, t);
                oe._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                oe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1, r = oe.Deferred(), o = this, s = this.length, a = function() {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                n = Ee.get(o[s], e + "queueHooks"),
                n && n.empty && (i++,
                n.empty.add(a));
            return a(),
            r.promise(t)
        }
    });
    var Ae = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Ne = new RegExp("^(?:([+-])=|)(" + Ae + ")([a-z%]*)$","i")
      , $e = ["Top", "Right", "Bottom", "Left"]
      , qe = function(e, t) {
        return e = t || e,
        "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
    }
      , Le = /^(?:checkbox|radio)$/i
      , Oe = /<([\w:-]+)/
      , Fe = /^$|\/(?:java|ecma)script/i
      , He = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    He.optgroup = He.option,
    He.tbody = He.tfoot = He.colgroup = He.caption = He.thead,
    He.th = He.td;
    var Ie = /<|&#?\w+;/;
    !function() {
        var e = G.createDocumentFragment()
          , t = e.appendChild(G.createElement("div"))
          , n = G.createElement("input");
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.innerHTML = "<textarea>x</textarea>",
        ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Me = /^key/
      , Pe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Re = /^([^.]*)(?:\.(.+)|)/;
    oe.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, l, u, c, f, p, d, h, m, g = Ee.get(e);
            if (g)
                for (n.handler && (o = n,
                n = o.handler,
                r = o.selector),
                n.guid || (n.guid = oe.guid++),
                (l = g.events) || (l = g.events = {}),
                (s = g.handle) || (s = g.handle = function(t) {
                    return "undefined" != typeof oe && oe.event.triggered !== t.type ? oe.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                t = (t || "").match(we) || [""],
                u = t.length; u--; )
                    a = Re.exec(t[u]) || [],
                    d = m = a[1],
                    h = (a[2] || "").split(".").sort(),
                    d && (f = oe.event.special[d] || {},
                    d = (r ? f.delegateType : f.bindType) || d,
                    f = oe.event.special[d] || {},
                    c = oe.extend({
                        type: d,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && oe.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, o),
                    (p = l[d]) || (p = l[d] = [],
                    p.delegateCount = 0,
                    f.setup && f.setup.call(e, i, h, s) !== !1 || e.addEventListener && e.addEventListener(d, s)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    r ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    oe.event.global[d] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, u, c, f, p, d, h, m, g = Ee.hasData(e) && Ee.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match(we) || [""],
                u = t.length; u--; )
                    if (a = Re.exec(t[u]) || [],
                    d = m = a[1],
                    h = (a[2] || "").split(".").sort(),
                    d) {
                        for (f = oe.event.special[d] || {},
                        d = (i ? f.delegateType : f.bindType) || d,
                        p = l[d] || [],
                        a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = o = p.length; o--; )
                            c = p[o],
                            !r && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        s && !p.length && (f.teardown && f.teardown.call(e, h, g.handle) !== !1 || oe.removeEvent(e, d, g.handle),
                        delete l[d])
                    } else
                        for (d in l)
                            oe.event.remove(e, d + t[u], n, i, !0);
                oe.isEmptyObject(l) && Ee.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = oe.event.fix(e);
            var t, n, i, r, o, s = [], a = Q.call(arguments), l = (Ee.get(this, "events") || {})[e.type] || [], u = oe.event.special[e.type] || {};
            if (a[0] = e,
            e.delegateTarget = this,
            !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (s = oe.event.handlers.call(this, e, l),
                t = 0; (r = s[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = r.elem,
                    n = 0; (o = r.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                        e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o,
                        e.data = o.data,
                        i = ((oe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a),
                        void 0 !== i && (e.result = i) === !1 && (e.preventDefault(),
                        e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s = [], a = t.delegateCount, l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (i = [],
                        n = 0; n < a; n++)
                            o = t[n],
                            r = o.selector + " ",
                            void 0 === i[r] && (i[r] = o.needsContext ? oe(r, this).index(l) > -1 : oe.find(r, this, null, [l]).length),
                            i[r] && i.push(o);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }),
            s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || G,
                i = n.documentElement,
                r = n.body,
                e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0),
                e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)),
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[oe.expando])
                return e;
            var t, n, i, r = e.type, o = e, s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Pe.test(r) ? this.mouseHooks : Me.test(r) ? this.keyHooks : {}),
            i = s.props ? this.props.concat(s.props) : this.props,
            e = new oe.Event(o),
            t = i.length; t--; )
                n = i[t],
                e[n] = o[n];
            return e.target || (e.target = G),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== m() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === m() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && oe.nodeName(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return oe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    oe.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    oe.Event = function(e, t) {
        return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? d : h) : this.type = e,
        t && oe.extend(this, t),
        this.timeStamp = e && e.timeStamp || oe.now(),
        void (this[oe.expando] = !0)) : new oe.Event(e,t)
    }
    ,
    oe.Event.prototype = {
        constructor: oe.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = d,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = d,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = d,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        oe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this, r = e.relatedTarget, o = e.handleObj;
                return r && (r === i || oe.contains(i, r)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    oe.fn.extend({
        on: function(e, t, n, i) {
            return g(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return g(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                oe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof e) {
                for (r in e)
                    this.off(r, t, e[r]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t,
            t = void 0),
            n === !1 && (n = h),
            this.each(function() {
                oe.event.remove(this, e, n, t)
            })
        }
    });
    var Be = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , Xe = /<script|<style|<link/i
      , _e = /checked\s*(?:[^=]|=\s*.checked.)/i
      , We = /^true\/(.*)/
      , Ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    oe.extend({
        htmlPrefilter: function(e) {
            return e.replace(Be, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, s, a = e.cloneNode(!0), l = oe.contains(e.ownerDocument, e);
            if (!(ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                for (s = c(a),
                o = c(e),
                i = 0,
                r = o.length; i < r; i++)
                    w(o[i], s[i]);
            if (t)
                if (n)
                    for (o = o || c(e),
                    s = s || c(a),
                    i = 0,
                    r = o.length; i < r; i++)
                        x(o[i], s[i]);
                else
                    x(e, a);
            return s = c(a, "script"),
            s.length > 0 && f(s, !l && c(e, "script")),
            a
        },
        cleanData: function(e) {
            for (var t, n, i, r = oe.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (ke(n)) {
                    if (t = n[Ee.expando]) {
                        if (t.events)
                            for (i in t.events)
                                r[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, t.handle);
                        n[Ee.expando] = void 0
                    }
                    n[Se.expando] && (n[Se.expando] = void 0)
                }
        }
    }),
    oe.fn.extend({
        domManip: T,
        detach: function(e) {
            return C(this, e, !0)
        },
        remove: function(e) {
            return C(this, e)
        },
        text: function(e) {
            return Ce(this, function(e) {
                return void 0 === e ? oe.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return T(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return T(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return T(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return T(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (oe.cleanData(c(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return oe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ce(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Xe.test(e) && !He[(Oe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = oe.htmlPrefilter(e);
                    try {
                        for (; n < i; n++)
                            t = this[n] || {},
                            1 === t.nodeType && (oe.cleanData(c(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return T(this, arguments, function(t) {
                var n = this.parentNode;
                oe.inArray(this, e) < 0 && (oe.cleanData(c(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        oe.fn[e] = function(e) {
            for (var n, i = [], r = oe(e), o = r.length - 1, s = 0; s <= o; s++)
                n = s === o ? this : this.clone(!0),
                oe(r[s])[t](n),
                K.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var ze, Ve = {
        HTML: "block",
        BODY: "block"
    }, Ue = /^margin/, Ge = new RegExp("^(" + Ae + ")(?!px)[a-z%]+$","i"), Qe = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }, Je = function(e, t, n, i) {
        var r, o, s = {};
        for (o in t)
            s[o] = e.style[o],
            e.style[o] = t[o];
        r = n.apply(e, i || []);
        for (o in t)
            e.style[o] = s[o];
        return r
    }, Ke = G.documentElement;
    !function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            a.innerHTML = "",
            Ke.appendChild(s);
            var t = e.getComputedStyle(a);
            n = "1%" !== t.top,
            o = "2px" === t.marginLeft,
            i = "4px" === t.width,
            a.style.marginRight = "50%",
            r = "4px" === t.marginRight,
            Ke.removeChild(s)
        }
        var n, i, r, o, s = G.createElement("div"), a = G.createElement("div");
        a.style && (a.style.backgroundClip = "content-box",
        a.cloneNode(!0).style.backgroundClip = "",
        ie.clearCloneStyle = "content-box" === a.style.backgroundClip,
        s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        s.appendChild(a),
        oe.extend(ie, {
            pixelPosition: function() {
                return t(),
                n
            },
            boxSizingReliable: function() {
                return null == i && t(),
                i
            },
            pixelMarginRight: function() {
                return null == i && t(),
                r
            },
            reliableMarginLeft: function() {
                return null == i && t(),
                o
            },
            reliableMarginRight: function() {
                var t, n = a.appendChild(G.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                n.style.marginRight = n.style.width = "0",
                a.style.width = "1px",
                Ke.appendChild(s),
                t = !parseFloat(e.getComputedStyle(n).marginRight),
                Ke.removeChild(s),
                a.removeChild(n),
                t
            }
        }))
    }();
    var Ze = /^(none|table(?!-c[ea]).+)/
      , et = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , tt = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , nt = ["Webkit", "O", "Moz", "ms"]
      , it = G.createElement("div").style;
    oe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = S(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = oe.camelCase(t), l = e.style;
                return t = oe.cssProps[a] || (oe.cssProps[a] = D(a) || a),
                s = oe.cssHooks[t] || oe.cssHooks[a],
                void 0 === n ? s && "get"in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t] : (o = typeof n,
                "string" === o && (r = Ne.exec(n)) && r[1] && (n = u(e, t, r),
                o = "number"),
                null != n && n === n && ("number" === o && (n += r && r[3] || (oe.cssNumber[a] ? "" : "px")),
                ie.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n)),
                void 0)
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = oe.camelCase(t);
            return t = oe.cssProps[a] || (oe.cssProps[a] = D(a) || a),
            s = oe.cssHooks[t] || oe.cssHooks[a],
            s && "get"in s && (r = s.get(e, !0, n)),
            void 0 === r && (r = S(e, t, i)),
            "normal" === r && t in tt && (r = tt[t]),
            "" === n || n ? (o = parseFloat(r),
            n === !0 || isFinite(o) ? o || 0 : r) : r
        }
    }),
    oe.each(["height", "width"], function(e, t) {
        oe.cssHooks[t] = {
            get: function(e, n, i) {
                if (n)
                    return Ze.test(oe.css(e, "display")) && 0 === e.offsetWidth ? Je(e, et, function() {
                        return $(e, t, i)
                    }) : $(e, t, i)
            },
            set: function(e, n, i) {
                var r, o = i && Qe(e), s = i && N(e, t, i, "border-box" === oe.css(e, "boxSizing", !1, o), o);
                return s && (r = Ne.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n,
                n = oe.css(e, t)),
                A(e, n, s)
            }
        }
    }),
    oe.cssHooks.marginLeft = j(ie.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(S(e, "marginLeft")) || e.getBoundingClientRect().left - Je(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    oe.cssHooks.marginRight = j(ie.reliableMarginRight, function(e, t) {
        if (t)
            return Je(e, {
                display: "inline-block"
            }, S, [e, "marginRight"])
    }),
    oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        oe.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                    r[e + $e[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        },
        Ue.test(e) || (oe.cssHooks[e + t].set = A)
    }),
    oe.fn.extend({
        css: function(e, t) {
            return Ce(this, function(e, t, n) {
                var i, r, o = {}, s = 0;
                if (oe.isArray(t)) {
                    for (i = Qe(e),
                    r = t.length; s < r; s++)
                        o[t[s]] = oe.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return q(this, !0)
        },
        hide: function() {
            return q(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                qe(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }),
    oe.Tween = L,
    L.prototype = {
        constructor: L,
        init: function(e, t, n, i, r, o) {
            this.elem = e,
            this.prop = n,
            this.easing = r || oe.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = o || (oe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = L.propHooks[this.prop];
            return e && e.get ? e.get(this) : L.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = L.propHooks[this.prop];
            return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : L.propHooks._default.set(this),
            this
        }
    },
    L.prototype.init.prototype = L.prototype,
    L.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = oe.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[oe.cssProps[e.prop]] && !oe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : oe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    L.propHooks.scrollTop = L.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    oe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    oe.fx = L.prototype.init,
    oe.fx.step = {};
    var rt, ot, st = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
    oe.Animation = oe.extend(P, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return u(n.elem, e, Ne.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            oe.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.match(we);
            for (var n, i = 0, r = e.length; i < r; i++)
                n = e[i],
                P.tweeners[n] = P.tweeners[n] || [],
                P.tweeners[n].unshift(t)
        },
        prefilters: [I],
        prefilter: function(e, t) {
            t ? P.prefilters.unshift(e) : P.prefilters.push(e)
        }
    }),
    oe.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? oe.extend({}, e) : {
            complete: n || !n && t || oe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !oe.isFunction(t) && t
        };
        return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default,
        null != i.queue && i.queue !== !0 || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            oe.isFunction(i.old) && i.old.call(this),
            i.queue && oe.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    oe.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(qe).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var r = oe.isEmptyObject(e)
              , o = oe.speed(t, n, i)
              , s = function() {
                var t = P(this, oe.extend({}, e), o);
                (r || Ee.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s,
            r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , r = null != e && e + "queueHooks"
                  , o = oe.timers
                  , s = Ee.get(this);
                if (r)
                    s[r] && s[r].stop && i(s[r]);
                else
                    for (r in s)
                        s[r] && s[r].stop && at.test(r) && i(s[r]);
                for (r = o.length; r--; )
                    o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n),
                    t = !1,
                    o.splice(r, 1));
                !t && n || oe.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = Ee.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = oe.timers, s = i ? i.length : 0;
                for (n.finish = !0,
                oe.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; t < s; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    oe.each(["toggle", "show", "hide"], function(e, t) {
        var n = oe.fn[t];
        oe.fn[t] = function(e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, i, r)
        }
    }),
    oe.each({
        slideDown: F("show"),
        slideUp: F("hide"),
        slideToggle: F("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        oe.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }),
    oe.timers = [],
    oe.fx.tick = function() {
        var e, t = 0, n = oe.timers;
        for (rt = oe.now(); t < n.length; t++)
            e = n[t],
            e() || n[t] !== e || n.splice(t--, 1);
        n.length || oe.fx.stop(),
        rt = void 0
    }
    ,
    oe.fx.timer = function(e) {
        oe.timers.push(e),
        e() ? oe.fx.start() : oe.timers.pop()
    }
    ,
    oe.fx.interval = 13,
    oe.fx.start = function() {
        ot || (ot = e.setInterval(oe.fx.tick, oe.fx.interval))
    }
    ,
    oe.fx.stop = function() {
        e.clearInterval(ot),
        ot = null
    }
    ,
    oe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    oe.fn.delay = function(t, n) {
        return t = oe.fx ? oe.fx.speeds[t] || t : t,
        n = n || "fx",
        this.queue(n, function(n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(r)
            }
        })
    }
    ,
    function() {
        var e = G.createElement("input")
          , t = G.createElement("select")
          , n = t.appendChild(G.createElement("option"));
        e.type = "checkbox",
        ie.checkOn = "" !== e.value,
        ie.optSelected = n.selected,
        t.disabled = !0,
        ie.optDisabled = !n.disabled,
        e = G.createElement("input"),
        e.value = "t",
        e.type = "radio",
        ie.radioValue = "t" === e.value
    }();
    var lt, ut = oe.expr.attrHandle;
    oe.fn.extend({
        attr: function(e, t) {
            return Ce(this, oe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                oe.removeAttr(this, e)
            })
        }
    }),
    oe.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? oe.prop(e, t, n) : (1 === o && oe.isXMLDoc(e) || (t = t.toLowerCase(),
                r = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? lt : void 0)),
                void 0 !== n ? null === n ? void oe.removeAttr(e, t) : r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : r && "get"in r && null !== (i = r.get(e, t)) ? i : (i = oe.find.attr(e, t),
                null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ie.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i, r = 0, o = t && t.match(we);
            if (o && 1 === e.nodeType)
                for (; n = o[r++]; )
                    i = oe.propFix[n] || n,
                    oe.expr.match.bool.test(n) && (e[i] = !1),
                    e.removeAttribute(n)
        }
    }),
    lt = {
        set: function(e, t, n) {
            return t === !1 ? oe.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ut[t] || oe.find.attr;
        ut[t] = function(e, t, i) {
            var r, o;
            return i || (o = ut[t],
            ut[t] = r,
            r = null != n(e, t, i) ? t.toLowerCase() : null,
            ut[t] = o),
            r
        }
    });
    var ct = /^(?:input|select|textarea|button)$/i
      , ft = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function(e, t) {
            return Ce(this, oe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[oe.propFix[e] || e]
            })
        }
    }),
    oe.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && oe.isXMLDoc(e) || (t = oe.propFix[t] || t,
                r = oe.propHooks[t]),
                void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ct.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    ie.optSelected || (oe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        oe.propFix[this.toLowerCase()] = this
    });
    var pt = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (oe.isFunction(e))
                return this.each(function(t) {
                    oe(this).addClass(e.call(this, t, R(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match(we) || []; n = this[l++]; )
                    if (r = R(n),
                    i = 1 === n.nodeType && (" " + r + " ").replace(pt, " ")) {
                        for (s = 0; o = t[s++]; )
                            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        a = oe.trim(i),
                        r !== a && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (oe.isFunction(e))
                return this.each(function(t) {
                    oe(this).removeClass(e.call(this, t, R(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(we) || []; n = this[l++]; )
                    if (r = R(n),
                    i = 1 === n.nodeType && (" " + r + " ").replace(pt, " ")) {
                        for (s = 0; o = t[s++]; )
                            for (; i.indexOf(" " + o + " ") > -1; )
                                i = i.replace(" " + o + " ", " ");
                        a = oe.trim(i),
                        r !== a && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function(n) {
                oe(this).toggleClass(e.call(this, n, R(this), t), t)
            }) : this.each(function() {
                var t, i, r, o;
                if ("string" === n)
                    for (i = 0,
                    r = oe(this),
                    o = e.match(we) || []; t = o[i++]; )
                        r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || (t = R(this),
                    t && Ee.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Ee.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; )
                if (1 === n.nodeType && (" " + R(n) + " ").replace(pt, " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var dt = /\r/g
      , ht = /[\x20\t\r\n\f]+/g;
    oe.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            {
                if (arguments.length)
                    return i = oe.isFunction(e),
                    this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = i ? e.call(this, n, oe(this).val()) : e,
                        null == r ? r = "" : "number" == typeof r ? r += "" : oe.isArray(r) && (r = oe.map(r, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()],
                        t && "set"in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    });
                if (r)
                    return t = oe.valHooks[r.type] || oe.valHooks[r.nodeName.toLowerCase()],
                    t && "get"in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value,
                    "string" == typeof n ? n.replace(dt, "") : null == n ? "" : n)
            }
        }
    }),
    oe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = oe.find.attr(e, "value");
                    return null != t ? t : oe.trim(oe.text(e)).replace(ht, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, s = o ? null : [], a = o ? r + 1 : i.length, l = r < 0 ? a : o ? r : 0; l < a; l++)
                        if (n = i[l],
                        (n.selected || l === r) && (ie.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = oe(n).val(),
                            o)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = oe.makeArray(t), s = r.length; s--; )
                        i = r[s],
                        (i.selected = oe.inArray(oe.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    oe.each(["radio", "checkbox"], function() {
        oe.valHooks[this] = {
            set: function(e, t) {
                if (oe.isArray(t))
                    return e.checked = oe.inArray(oe(e).val(), t) > -1
            }
        },
        ie.checkOn || (oe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var mt = /^(?:focusinfocus|focusoutblur)$/;
    oe.extend(oe.event, {
        trigger: function(t, n, i, r) {
            var o, s, a, l, u, c, f, p = [i || G], d = ne.call(t, "type") ? t.type : t, h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || G,
            3 !== i.nodeType && 8 !== i.nodeType && !mt.test(d + oe.event.triggered) && (d.indexOf(".") > -1 && (h = d.split("."),
            d = h.shift(),
            h.sort()),
            u = d.indexOf(":") < 0 && "on" + d,
            t = t[oe.expando] ? t : new oe.Event(d,"object" == typeof t && t),
            t.isTrigger = r ? 2 : 3,
            t.namespace = h.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = i),
            n = null == n ? [t] : oe.makeArray(n, [t]),
            f = oe.event.special[d] || {},
            r || !f.trigger || f.trigger.apply(i, n) !== !1)) {
                if (!r && !f.noBubble && !oe.isWindow(i)) {
                    for (l = f.delegateType || d,
                    mt.test(l + d) || (s = s.parentNode); s; s = s.parentNode)
                        p.push(s),
                        a = s;
                    a === (i.ownerDocument || G) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0; (s = p[o++]) && !t.isPropagationStopped(); )
                    t.type = o > 1 ? l : f.bindType || d,
                    c = (Ee.get(s, "events") || {})[t.type] && Ee.get(s, "handle"),
                    c && c.apply(s, n),
                    c = u && s[u],
                    c && c.apply && ke(s) && (t.result = c.apply(s, n),
                    t.result === !1 && t.preventDefault());
                return t.type = d,
                r || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !ke(i) || u && oe.isFunction(i[d]) && !oe.isWindow(i) && (a = i[u],
                a && (i[u] = null),
                oe.event.triggered = d,
                i[d](),
                oe.event.triggered = void 0,
                a && (i[u] = a)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var i = oe.extend(new oe.Event, n, {
                type: e,
                isSimulated: !0
            });
            oe.event.trigger(i, null, t)
        }
    }),
    oe.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                oe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return oe.event.trigger(e, t, n, !0)
        }
    }),
    oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        oe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    oe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    ie.focusin = "onfocusin"in e,
    ie.focusin || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            oe.event.simulate(t, e.target, oe.event.fix(e))
        };
        oe.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this
                  , r = Ee.access(i, t);
                r || i.addEventListener(e, n, !0),
                Ee.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                  , r = Ee.access(i, t) - 1;
                r ? Ee.access(i, t, r) : (i.removeEventListener(e, n, !0),
                Ee.remove(i, t))
            }
        }
    });
    var gt = e.location
      , vt = oe.now()
      , yt = /\?/;
    oe.parseJSON = function(e) {
        return JSON.parse(e + "")
    }
    ,
    oe.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (i) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t),
        n
    }
    ;
    var bt = /#.*$/
      , xt = /([?&])_=[^&]*/
      , wt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Tt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Ct = /^(?:GET|HEAD)$/
      , kt = /^\/\//
      , Et = {}
      , St = {}
      , jt = "*/".concat("*")
      , Dt = G.createElement("a");
    Dt.href = gt.href,
    oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gt.href,
            type: "GET",
            isLocal: Tt.test(gt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": jt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? _(_(e, oe.ajaxSettings), t) : _(oe.ajaxSettings, e)
        },
        ajaxPrefilter: B(Et),
        ajaxTransport: B(St),
        ajax: function(t, n) {
            function i(t, n, i, a) {
                var u, f, y, b, w, C = n;
                2 !== x && (x = 2,
                l && e.clearTimeout(l),
                r = void 0,
                s = a || "",
                T.readyState = t > 0 ? 4 : 0,
                u = t >= 200 && t < 300 || 304 === t,
                i && (b = W(p, T, i)),
                b = Y(p, b, T, u),
                u ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"),
                w && (oe.lastModified[o] = w),
                w = T.getResponseHeader("etag"),
                w && (oe.etag[o] = w)),
                204 === t || "HEAD" === p.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state,
                f = b.data,
                y = b.error,
                u = !y)) : (y = C,
                !t && C || (C = "error",
                t < 0 && (t = 0))),
                T.status = t,
                T.statusText = (n || C) + "",
                u ? m.resolveWith(d, [f, C, T]) : m.rejectWith(d, [T, C, y]),
                T.statusCode(v),
                v = void 0,
                c && h.trigger(u ? "ajaxSuccess" : "ajaxError", [T, p, u ? f : y]),
                g.fireWith(d, [T, C]),
                c && (h.trigger("ajaxComplete", [T, p]),
                --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var r, o, s, a, l, u, c, f, p = oe.ajaxSetup({}, n), d = p.context || p, h = p.context && (d.nodeType || d.jquery) ? oe(d) : oe.event, m = oe.Deferred(), g = oe.Callbacks("once memory"), v = p.statusCode || {}, y = {}, b = {}, x = 0, w = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!a)
                            for (a = {}; t = wt.exec(s); )
                                a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? s : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = b[n] = b[n] || e,
                    y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return x || (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (x < 2)
                            for (t in e)
                                v[t] = [v[t], e[t]];
                        else
                            T.always(e[T.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return r && r.abort(t),
                    i(0, t),
                    this
                }
            };
            if (m.promise(T).complete = g.add,
            T.success = T.done,
            T.error = T.fail,
            p.url = ((t || p.url || gt.href) + "").replace(bt, "").replace(kt, gt.protocol + "//"),
            p.type = n.method || n.type || p.method || p.type,
            p.dataTypes = oe.trim(p.dataType || "*").toLowerCase().match(we) || [""],
            null == p.crossDomain) {
                u = G.createElement("a");
                try {
                    u.href = p.url,
                    u.href = u.href,
                    p.crossDomain = Dt.protocol + "//" + Dt.host != u.protocol + "//" + u.host
                } catch (C) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = oe.param(p.data, p.traditional)),
            X(Et, p, n, T),
            2 === x)
                return T;
            c = oe.event && p.global,
            c && 0 === oe.active++ && oe.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !Ct.test(p.type),
            o = p.url,
            p.hasContent || (p.data && (o = p.url += (yt.test(o) ? "&" : "?") + p.data,
            delete p.data),
            p.cache === !1 && (p.url = xt.test(o) ? o.replace(xt, "$1_=" + vt++) : o + (yt.test(o) ? "&" : "?") + "_=" + vt++)),
            p.ifModified && (oe.lastModified[o] && T.setRequestHeader("If-Modified-Since", oe.lastModified[o]),
            oe.etag[o] && T.setRequestHeader("If-None-Match", oe.etag[o])),
            (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType),
            T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + jt + "; q=0.01" : "") : p.accepts["*"]);
            for (f in p.headers)
                T.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (p.beforeSend.call(d, T, p) === !1 || 2 === x))
                return T.abort();
            w = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            })
                T[f](p[f]);
            if (r = X(St, p, n, T)) {
                if (T.readyState = 1,
                c && h.trigger("ajaxSend", [T, p]),
                2 === x)
                    return T;
                p.async && p.timeout > 0 && (l = e.setTimeout(function() {
                    T.abort("timeout")
                }, p.timeout));
                try {
                    x = 1,
                    r.send(y, i)
                } catch (C) {
                    if (!(x < 2))
                        throw C;
                    i(-1, C)
                }
            } else
                i(-1, "No Transport");
            return T
        },
        getJSON: function(e, t, n) {
            return oe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return oe.get(e, void 0, t, "script")
        }
    }),
    oe.each(["get", "post"], function(e, t) {
        oe[t] = function(e, n, i, r) {
            return oe.isFunction(n) && (r = r || i,
            i = n,
            n = void 0),
            oe.ajax(oe.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, oe.isPlainObject(e) && e))
        }
    }),
    oe._evalUrl = function(e) {
        return oe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    oe.fn.extend({
        wrapAll: function(e) {
            var t;
            return oe.isFunction(e) ? this.each(function(t) {
                oe(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = oe(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this)
        },
        wrapInner: function(e) {
            return oe.isFunction(e) ? this.each(function(t) {
                oe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = oe(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = oe.isFunction(e);
            return this.each(function(n) {
                oe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    oe.expr.filters.hidden = function(e) {
        return !oe.expr.filters.visible(e)
    }
    ,
    oe.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    }
    ;
    var At = /%20/g
      , Nt = /\[\]$/
      , $t = /\r?\n/g
      , qt = /^(?:submit|button|image|reset|file)$/i
      , Lt = /^(?:input|select|textarea|keygen)/i;
    oe.param = function(e, t) {
        var n, i = [], r = function(e, t) {
            t = oe.isFunction(t) ? t() : null == t ? "" : t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional),
        oe.isArray(e) || e.jquery && !oe.isPlainObject(e))
            oe.each(e, function() {
                r(this.name, this.value)
            });
        else
            for (n in e)
                z(n, e[n], t, r);
        return i.join("&").replace(At, "+")
    }
    ,
    oe.fn.extend({
        serialize: function() {
            return oe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && Lt.test(this.nodeName) && !qt.test(e) && (this.checked || !Le.test(e))
            }).map(function(e, t) {
                var n = oe(this).val();
                return null == n ? null : oe.isArray(n) ? oe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace($t, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace($t, "\r\n")
                }
            }).get()
        }
    }),
    oe.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    ;
    var Ot = {
        0: 200,
        1223: 204
    }
      , Ft = oe.ajaxSettings.xhr();
    ie.cors = !!Ft && "withCredentials"in Ft,
    ie.ajax = Ft = !!Ft,
    oe.ajaxTransport(function(t) {
        var n, i;
        if (ie.cors || Ft && !t.crossDomain)
            return {
                send: function(r, o) {
                    var s, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (s in t.xhrFields)
                            a[s] = t.xhrFields[s];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                    t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (s in r)
                        a.setRequestHeader(s, r[s]);
                    n = function(e) {
                        return function() {
                            n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null,
                            "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ot[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }
                    ,
                    a.onload = n(),
                    i = a.onerror = n("error"),
                    void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                        4 === a.readyState && e.setTimeout(function() {
                            n && i()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (l) {
                        if (n)
                            throw l
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return oe.globalEval(e),
                e
            }
        }
    }),
    oe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    oe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, r) {
                    t = oe("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && r("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    G.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Ht = []
      , It = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ht.pop() || oe.expando + "_" + vt++;
            return this[e] = !0,
            e
        }
    }),
    oe.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, s, a = t.jsonp !== !1 && (It.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && It.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0])
            return r = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            a ? t[a] = t[a].replace(It, "$1" + r) : t.jsonp !== !1 && (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
            t.converters["script json"] = function() {
                return s || oe.error(r + " was not called"),
                s[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = e[r],
            e[r] = function() {
                s = arguments
            }
            ,
            i.always(function() {
                void 0 === o ? oe(e).removeProp(r) : e[r] = o,
                t[r] && (t.jsonpCallback = n.jsonpCallback,
                Ht.push(r)),
                s && oe.isFunction(o) && o(s[0]),
                s = o = void 0
            }),
            "script"
    }),
    oe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || G;
        var i = he.exec(e)
          , r = !n && [];
        return i ? [t.createElement(i[1])] : (i = p([e], t, r),
        r && r.length && oe(r).remove(),
        oe.merge([], i.childNodes))
    }
    ;
    var Mt = oe.fn.load;
    oe.fn.load = function(e, t, n) {
        if ("string" != typeof e && Mt)
            return Mt.apply(this, arguments);
        var i, r, o, s = this, a = e.indexOf(" ");
        return a > -1 && (i = oe.trim(e.slice(a)),
        e = e.slice(0, a)),
        oe.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (r = "POST"),
        s.length > 0 && oe.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            s.html(i ? oe("<div>").append(oe.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        oe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    oe.expr.filters.animated = function(e) {
        return oe.grep(oe.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    oe.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, u, c = oe.css(e, "position"), f = oe(e), p = {};
            "static" === c && (e.style.position = "relative"),
            a = f.offset(),
            o = oe.css(e, "top"),
            l = oe.css(e, "left"),
            u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1,
            u ? (i = f.position(),
            s = i.top,
            r = i.left) : (s = parseFloat(o) || 0,
            r = parseFloat(l) || 0),
            oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, a))),
            null != t.top && (p.top = t.top - a.top + s),
            null != t.left && (p.left = t.left - a.left + r),
            "using"in t ? t.using.call(e, p) : f.css(p)
        }
    },
    oe.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    oe.offset.setOffset(this, e, t)
                });
            var t, n, i = this[0], r = {
                top: 0,
                left: 0
            }, o = i && i.ownerDocument;
            if (o)
                return t = o.documentElement,
                oe.contains(t, i) ? (r = i.getBoundingClientRect(),
                n = V(o),
                {
                    top: r.top + n.pageYOffset - t.clientTop,
                    left: r.left + n.pageXOffset - t.clientLeft
                }) : r
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], i = {
                    top: 0,
                    left: 0
                };
                return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                oe.nodeName(e[0], "html") || (i = e.offset()),
                i.top += oe.css(e[0], "borderTopWidth", !0),
                i.left += oe.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - i.top - oe.css(n, "marginTop", !0),
                    left: t.left - i.left - oe.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === oe.css(e, "position"); )
                    e = e.offsetParent;
                return e || Ke
            })
        }
    }),
    oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        oe.fn[e] = function(i) {
            return Ce(this, function(e, i, r) {
                var o = V(e);
                return void 0 === r ? o ? o[t] : e[i] : void (o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r)
            }, e, i, arguments.length)
        }
    }),
    oe.each(["top", "left"], function(e, t) {
        oe.cssHooks[t] = j(ie.pixelPosition, function(e, n) {
            if (n)
                return n = S(e, t),
                Ge.test(n) ? oe(e).position()[t] + "px" : n
        })
    }),
    oe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        oe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            oe.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i)
                  , s = n || (i === !0 || r === !0 ? "margin" : "border");
                return Ce(this, function(t, n, i) {
                    var r;
                    return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement,
                    Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? oe.css(t, n, s) : oe.style(t, n, i, s)
                }, t, o ? i : void 0, o, null)
            }
        })
    }),
    oe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }),
    oe.fn.andSelf = oe.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return oe
    });
    var Pt = e.jQuery
      , Rt = e.$;
    return oe.noConflict = function(t) {
        return e.$ === oe && (e.$ = Rt),
        t && e.jQuery === oe && (e.jQuery = Pt),
        oe
    }
    ,
    t || (e.jQuery = e.$ = oe),
    oe
}),
!function(e, t, n) {
    "use strict";
    function i(n) {
        if (r = t.documentElement,
        o = t.body,
        Y(),
        ae = this,
        n = n || {},
        pe = n.constants || {},
        n.easing)
            for (var i in n.easing)
                U[i] = n.easing[i];
        be = n.edgeStrategy || "set",
        ce = {
            beforerender: n.beforerender,
            render: n.render,
            keyframe: n.keyframe
        },
        fe = n.forceHeight !== !1,
        fe && (He = n.scale || 1),
        de = n.mobileDeceleration || k,
        me = n.smoothScrolling !== !1,
        ge = n.smoothScrollingDuration || S,
        ve = {
            targetTop: ae.getScrollTop()
        },
        We = (n.mobileCheck || function() {
            return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || e.opera)
        }
        )(),
        We ? (ue = t.getElementById(n.skrollrBody || E),
        ue && se(),
        G(),
        Ne(r, [y, w], [b])) : Ne(r, [y, x], [b]),
        ae.refresh(),
        Te(e, "resize orientationchange", function() {
            var e = r.clientWidth
              , t = r.clientHeight;
            (t !== Be || e !== Re) && (Be = t,
            Re = e,
            Xe = !0)
        });
        var s = z();
        return function a() {
            K(),
            we = s(a)
        }(),
        ae
    }
    var r, o, s = {
        get: function() {
            return ae
        },
        init: function(e) {
            return ae || new i(e)
        },
        VERSION: "0.6.29"
    }, a = Object.prototype.hasOwnProperty, l = e.Math, u = e.getComputedStyle, c = "touchstart", f = "touchmove", p = "touchcancel", d = "touchend", h = "skrollable", m = h + "-before", g = h + "-between", v = h + "-after", y = "skrollr", b = "no-" + y, x = y + "-desktop", w = y + "-mobile", T = "linear", C = 1e3, k = .004, E = "skrollr-body", S = 200, j = "start", D = "end", A = "center", N = "bottom", $ = "___skrollable_id", q = /^(?:input|textarea|button|select)$/i, L = /^\s+|\s+$/g, O = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/, F = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi, H = /^(@?[a-z\-]+)\[(\w+)\]$/, I = /-([a-z0-9_])/g, M = function(e, t) {
        return t.toUpperCase()
    }, P = /[\-+]?[\d]*\.?[\d]+/g, R = /\{\?\}/g, B = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g, X = /[a-z\-]+-gradient/g, _ = "", W = "", Y = function() {
        var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
        if (u) {
            var t = u(o, null);
            for (var n in t)
                if (_ = n.match(e) || +n == n && t[n].match(e))
                    break;
            if (!_)
                return void (_ = W = "");
            _ = _[0],
            "-" === _.slice(0, 1) ? (W = _,
            _ = {
                "-webkit-": "webkit",
                "-moz-": "Moz",
                "-ms-": "ms",
                "-o-": "O"
            }[_]) : W = "-" + _.toLowerCase() + "-"
        }
    }, z = function() {
        var t = e.requestAnimationFrame || e[_.toLowerCase() + "RequestAnimationFrame"]
          , n = Le();
        return (We || !t) && (t = function(t) {
            var i = Le() - n
              , r = l.max(0, 1e3 / 60 - i);
            return e.setTimeout(function() {
                n = Le(),
                t()
            }, r)
        }
        ),
        t
    }, V = function() {
        var t = e.cancelAnimationFrame || e[_.toLowerCase() + "CancelAnimationFrame"];
        return (We || !t) && (t = function(t) {
            return e.clearTimeout(t)
        }
        ),
        t
    }, U = {
        begin: function() {
            return 0
        },
        end: function() {
            return 1
        },
        linear: function(e) {
            return e
        },
        quadratic: function(e) {
            return e * e
        },
        cubic: function(e) {
            return e * e * e
        },
        swing: function(e) {
            return -l.cos(e * l.PI) / 2 + .5
        },
        sqrt: function(e) {
            return l.sqrt(e)
        },
        outCubic: function(e) {
            return l.pow(e - 1, 3) + 1
        },
        bounce: function(e) {
            var t;
            if (.5083 >= e)
                t = 3;
            else if (.8489 >= e)
                t = 9;
            else if (.96208 >= e)
                t = 27;
            else {
                if (!(.99981 >= e))
                    return 1;
                t = 91
            }
            return 1 - l.abs(3 * l.cos(e * t * 1.028) / t)
        }
    };
    i.prototype.refresh = function(e) {
        var i, r, o = !1;
        for (e === n ? (o = !0,
        le = [],
        _e = 0,
        e = t.getElementsByTagName("*")) : e.length === n && (e = [e]),
        i = 0,
        r = e.length; r > i; i++) {
            var s = e[i]
              , a = s
              , l = []
              , u = me
              , c = be
              , f = !1;
            if (o && $in s && delete s[$],
            s.attributes) {
                for (var p = 0, d = s.attributes.length; d > p; p++) {
                    var m = s.attributes[p];
                    if ("data-anchor-target" !== m.name)
                        if ("data-smooth-scrolling" !== m.name)
                            if ("data-edge-strategy" !== m.name)
                                if ("data-emit-events" !== m.name) {
                                    var g = m.name.match(O);
                                    if (null !== g) {
                                        var v = {
                                            props: m.value,
                                            element: s,
                                            eventType: m.name.replace(I, M)
                                        };
                                        l.push(v);
                                        var y = g[1];
                                        y && (v.constant = y.substr(1));
                                        var b = g[2];
                                        /p$/.test(b) ? (v.isPercentage = !0,
                                        v.offset = (0 | b.slice(0, -1)) / 100) : v.offset = 0 | b;
                                        var x = g[3]
                                          , w = g[4] || x;
                                        x && x !== j && x !== D ? (v.mode = "relative",
                                        v.anchors = [x, w]) : (v.mode = "absolute",
                                        x === D ? v.isEnd = !0 : v.isPercentage || (v.offset = v.offset * He))
                                    }
                                } else
                                    f = !0;
                            else
                                c = m.value;
                        else
                            u = "off" !== m.value;
                    else if (a = t.querySelector(m.value),
                    null === a)
                        throw 'Unable to find anchor target "' + m.value + '"'
                }
                if (l.length) {
                    var T, C, k;
                    !o && $in s ? (k = s[$],
                    T = le[k].styleAttr,
                    C = le[k].classAttr) : (k = s[$] = _e++,
                    T = s.style.cssText,
                    C = Ae(s)),
                    le[k] = {
                        element: s,
                        styleAttr: T,
                        classAttr: C,
                        anchorTarget: a,
                        keyFrames: l,
                        smoothScrolling: u,
                        edgeStrategy: c,
                        emitEvents: f,
                        lastFrameIndex: -1
                    },
                    Ne(s, [h], [])
                }
            }
        }
        for (Se(),
        i = 0,
        r = e.length; r > i; i++) {
            var E = le[e[i][$]];
            E !== n && (Z(E),
            te(E))
        }
        return ae
    }
    ,
    i.prototype.relativeToAbsolute = function(e, t, n) {
        var i = r.clientHeight
          , o = e.getBoundingClientRect()
          , s = o.top
          , a = o.bottom - o.top;
        return t === N ? s -= i : t === A && (s -= i / 2),
        n === N ? s += a : n === A && (s += a / 2),
        s += ae.getScrollTop(),
        s + .5 | 0
    }
    ,
    i.prototype.animateTo = function(e, t) {
        t = t || {};
        var i = Le()
          , r = ae.getScrollTop()
          , o = t.duration === n ? C : t.duration;
        return he = {
            startTop: r,
            topDiff: e - r,
            targetTop: e,
            duration: o,
            startTime: i,
            endTime: i + o,
            easing: U[t.easing || T],
            done: t.done
        },
        he.topDiff || (he.done && he.done.call(ae, !1),
        he = n),
        ae
    }
    ,
    i.prototype.stopAnimateTo = function() {
        he && he.done && he.done.call(ae, !0),
        he = n
    }
    ,
    i.prototype.isAnimatingTo = function() {
        return !!he
    }
    ,
    i.prototype.isMobile = function() {
        return We
    }
    ,
    i.prototype.setScrollTop = function(t, n) {
        return ye = n === !0,
        We ? Ye = l.min(l.max(t, 0), Fe) : e.scrollTo(0, t),
        ae
    }
    ,
    i.prototype.getScrollTop = function() {
        return We ? Ye : e.pageYOffset || r.scrollTop || o.scrollTop || 0
    }
    ,
    i.prototype.getMaxScrollTop = function() {
        return Fe
    }
    ,
    i.prototype.on = function(e, t) {
        return ce[e] = t,
        ae
    }
    ,
    i.prototype.off = function(e) {
        return delete ce[e],
        ae
    }
    ,
    i.prototype.destroy = function() {
        var e = V();
        e(we),
        ke(),
        Ne(r, [b], [y, x, w]);
        for (var t = 0, i = le.length; i > t; t++)
            oe(le[t].element);
        r.style.overflow = o.style.overflow = "",
        r.style.height = o.style.height = "",
        ue && s.setStyle(ue, "transform", "none"),
        ae = n,
        ue = n,
        ce = n,
        fe = n,
        Fe = 0,
        He = 1,
        pe = n,
        de = n,
        Ie = "down",
        Me = -1,
        Re = 0,
        Be = 0,
        Xe = !1,
        he = n,
        me = n,
        ge = n,
        ve = n,
        ye = n,
        _e = 0,
        be = n,
        We = !1,
        Ye = 0,
        xe = n
    }
    ;
    var G = function() {
        var i, s, a, u, h, m, g, v, y, b, x, w;
        Te(r, [c, f, p, d].join(" "), function(e) {
            var r = e.changedTouches[0];
            for (u = e.target; 3 === u.nodeType; )
                u = u.parentNode;
            switch (h = r.clientY,
            m = r.clientX,
            b = e.timeStamp,
            q.test(u.tagName) || e.preventDefault(),
            e.type) {
            case c:
                i && i.blur(),
                ae.stopAnimateTo(),
                i = u,
                s = g = h,
                a = m,
                y = b;
                break;
            case f:
                q.test(u.tagName) && t.activeElement !== u && e.preventDefault(),
                v = h - g,
                w = b - x,
                ae.setScrollTop(Ye - v, !0),
                g = h,
                x = b;
                break;
            default:
            case p:
            case d:
                var o = s - h
                  , T = a - m
                  , C = T * T + o * o;
                if (49 > C) {
                    if (!q.test(i.tagName)) {
                        i.focus();
                        var k = t.createEvent("MouseEvents");
                        k.initMouseEvent("click", !0, !0, e.view, 1, r.screenX, r.screenY, r.clientX, r.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null),
                        i.dispatchEvent(k)
                    }
                    return
                }
                i = n;
                var E = v / w;
                E = l.max(l.min(E, 3), -3);
                var S = l.abs(E / de)
                  , j = E * S + .5 * de * S * S
                  , D = ae.getScrollTop() - j
                  , A = 0;
                D > Fe ? (A = (Fe - D) / j,
                D = Fe) : 0 > D && (A = -D / j,
                D = 0),
                S *= 1 - A,
                ae.animateTo(D + .5 | 0, {
                    easing: "outCubic",
                    duration: S
                })
            }
        }),
        e.scrollTo(0, 0),
        r.style.overflow = o.style.overflow = "hidden"
    }
      , Q = function() {
        var e, t, n, i, o, s, a, u, c, f, p, d = r.clientHeight, h = je();
        for (u = 0,
        c = le.length; c > u; u++)
            for (e = le[u],
            t = e.element,
            n = e.anchorTarget,
            i = e.keyFrames,
            o = 0,
            s = i.length; s > o; o++)
                a = i[o],
                f = a.offset,
                p = h[a.constant] || 0,
                a.frame = f,
                a.isPercentage && (f *= d,
                a.frame = f),
                "relative" === a.mode && (oe(t),
                a.frame = ae.relativeToAbsolute(n, a.anchors[0], a.anchors[1]) - f,
                oe(t, !0)),
                a.frame += p,
                fe && !a.isEnd && a.frame > Fe && (Fe = a.frame);
        for (Fe = l.max(Fe, De()),
        u = 0,
        c = le.length; c > u; u++) {
            for (e = le[u],
            i = e.keyFrames,
            o = 0,
            s = i.length; s > o; o++)
                a = i[o],
                p = h[a.constant] || 0,
                a.isEnd && (a.frame = Fe - a.offset + p);
            e.keyFrames.sort(Oe)
        }
    }
      , J = function(e, t) {
        for (var n = 0, i = le.length; i > n; n++) {
            var r, o, l = le[n], u = l.element, c = l.smoothScrolling ? e : t, f = l.keyFrames, p = f.length, d = f[0], y = f[f.length - 1], b = c < d.frame, x = c > y.frame, w = b ? d : y, T = l.emitEvents, C = l.lastFrameIndex;
            if (b || x) {
                if (b && -1 === l.edge || x && 1 === l.edge)
                    continue;
                switch (b ? (Ne(u, [m], [v, g]),
                T && C > -1 && (Ee(u, d.eventType, Ie),
                l.lastFrameIndex = -1)) : (Ne(u, [v], [m, g]),
                T && p > C && (Ee(u, y.eventType, Ie),
                l.lastFrameIndex = p)),
                l.edge = b ? -1 : 1,
                l.edgeStrategy) {
                case "reset":
                    oe(u);
                    continue;
                case "ease":
                    c = w.frame;
                    break;
                default:
                case "set":
                    var k = w.props;
                    for (r in k)
                        a.call(k, r) && (o = re(k[r].value),
                        0 === r.indexOf("@") ? u.setAttribute(r.substr(1), o) : s.setStyle(u, r, o));
                    continue
                }
            } else
                0 !== l.edge && (Ne(u, [h, g], [m, v]),
                l.edge = 0);
            for (var E = 0; p - 1 > E; E++)
                if (c >= f[E].frame && c <= f[E + 1].frame) {
                    var S = f[E]
                      , j = f[E + 1];
                    for (r in S.props)
                        if (a.call(S.props, r)) {
                            var D = (c - S.frame) / (j.frame - S.frame);
                            D = S.props[r].easing(D),
                            o = ie(S.props[r].value, j.props[r].value, D),
                            o = re(o),
                            0 === r.indexOf("@") ? u.setAttribute(r.substr(1), o) : s.setStyle(u, r, o)
                        }
                    T && C !== E && ("down" === Ie ? Ee(u, S.eventType, Ie) : Ee(u, j.eventType, Ie),
                    l.lastFrameIndex = E);
                    break
                }
        }
    }
      , K = function() {
        Xe && (Xe = !1,
        Se());
        var e, t, i = ae.getScrollTop(), r = Le();
        if (he)
            r >= he.endTime ? (i = he.targetTop,
            e = he.done,
            he = n) : (t = he.easing((r - he.startTime) / he.duration),
            i = he.startTop + t * he.topDiff | 0),
            ae.setScrollTop(i, !0);
        else if (!ye) {
            var o = ve.targetTop - i;
            o && (ve = {
                startTop: Me,
                topDiff: i - Me,
                targetTop: i,
                startTime: Pe,
                endTime: Pe + ge
            }),
            r <= ve.endTime && (t = U.sqrt((r - ve.startTime) / ge),
            i = ve.startTop + t * ve.topDiff | 0)
        }
        if (ye || Me !== i) {
            Ie = i > Me ? "down" : Me > i ? "up" : Ie,
            ye = !1;
            var a = {
                curTop: i,
                lastTop: Me,
                maxTop: Fe,
                direction: Ie
            }
              , l = ce.beforerender && ce.beforerender.call(ae, a);
            l !== !1 && (J(i, ae.getScrollTop()),
            We && ue && s.setStyle(ue, "transform", "translate(0, " + -Ye + "px) " + xe),
            Me = i,
            ce.render && ce.render.call(ae, a)),
            e && e.call(ae, !1)
        }
        Pe = r
    }
      , Z = function(e) {
        for (var t = 0, n = e.keyFrames.length; n > t; t++) {
            for (var i, r, o, s, a = e.keyFrames[t], l = {}; null !== (s = F.exec(a.props)); )
                o = s[1],
                r = s[2],
                i = o.match(H),
                null !== i ? (o = i[1],
                i = i[2]) : i = T,
                r = r.indexOf("!") ? ee(r) : [r.slice(1)],
                l[o] = {
                    value: r,
                    easing: U[i]
                };
            a.props = l
        }
    }
      , ee = function(e) {
        var t = [];
        return B.lastIndex = 0,
        e = e.replace(B, function(e) {
            return e.replace(P, function(e) {
                return e / 255 * 100 + "%"
            })
        }),
        W && (X.lastIndex = 0,
        e = e.replace(X, function(e) {
            return W + e
        })),
        e = e.replace(P, function(e) {
            return t.push(+e),
            "{?}"
        }),
        t.unshift(e),
        t
    }
      , te = function(e) {
        var t, n, i = {};
        for (t = 0,
        n = e.keyFrames.length; n > t; t++)
            ne(e.keyFrames[t], i);
        for (i = {},
        t = e.keyFrames.length - 1; t >= 0; t--)
            ne(e.keyFrames[t], i)
    }
      , ne = function(e, t) {
        var n;
        for (n in t)
            a.call(e.props, n) || (e.props[n] = t[n]);
        for (n in e.props)
            t[n] = e.props[n]
    }
      , ie = function(e, t, n) {
        var i, r = e.length;
        if (r !== t.length)
            throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"';
        var o = [e[0]];
        for (i = 1; r > i; i++)
            o[i] = e[i] + (t[i] - e[i]) * n;
        return o
    }
      , re = function(e) {
        var t = 1;
        return R.lastIndex = 0,
        e[0].replace(R, function() {
            return e[t++]
        })
    }
      , oe = function(e, t) {
        e = [].concat(e);
        for (var n, i, r = 0, o = e.length; o > r; r++)
            i = e[r],
            n = le[i[$]],
            n && (t ? (i.style.cssText = n.dirtyStyleAttr,
            Ne(i, n.dirtyClassAttr)) : (n.dirtyStyleAttr = i.style.cssText,
            n.dirtyClassAttr = Ae(i),
            i.style.cssText = n.styleAttr,
            Ne(i, n.classAttr)))
    }
      , se = function() {
        xe = "translateZ(0)",
        s.setStyle(ue, "transform", xe);
        var e = u(ue)
          , t = e.getPropertyValue("transform")
          , n = e.getPropertyValue(W + "transform")
          , i = t && "none" !== t || n && "none" !== n;
        i || (xe = "")
    };
    s.setStyle = function(e, t, n) {
        var i = e.style;
        if (t = t.replace(I, M).replace("-", ""),
        "zIndex" === t)
            isNaN(n) ? i[t] = n : i[t] = "" + (0 | n);
        else if ("float" === t)
            i.styleFloat = i.cssFloat = n;
        else
            try {
                _ && (i[_ + t.slice(0, 1).toUpperCase() + t.slice(1)] = n),
                i[t] = n
            } catch (r) {}
    }
    ;
    var ae, le, ue, ce, fe, pe, de, he, me, ge, ve, ye, be, xe, we, Te = s.addEvent = function(t, n, i) {
        var r = function(t) {
            return t = t || e.event,
            t.target || (t.target = t.srcElement),
            t.preventDefault || (t.preventDefault = function() {
                t.returnValue = !1,
                t.defaultPrevented = !0
            }
            ),
            i.call(this, t)
        };
        n = n.split(" ");
        for (var o, s = 0, a = n.length; a > s; s++)
            o = n[s],
            t.addEventListener ? t.addEventListener(o, i, !1) : t.attachEvent("on" + o, r),
            ze.push({
                element: t,
                name: o,
                listener: i
            })
    }
    , Ce = s.removeEvent = function(e, t, n) {
        t = t.split(" ");
        for (var i = 0, r = t.length; r > i; i++)
            e.removeEventListener ? e.removeEventListener(t[i], n, !1) : e.detachEvent("on" + t[i], n)
    }
    , ke = function() {
        for (var e, t = 0, n = ze.length; n > t; t++)
            e = ze[t],
            Ce(e.element, e.name, e.listener);
        ze = []
    }, Ee = function(e, t, n) {
        ce.keyframe && ce.keyframe.call(ae, e, t, n)
    }, Se = function() {
        var e = ae.getScrollTop();
        Fe = 0,
        fe && !We && (o.style.height = ""),
        Q(),
        fe && !We && (o.style.height = Fe + r.clientHeight + "px"),
        We ? ae.setScrollTop(l.min(ae.getScrollTop(), Fe)) : ae.setScrollTop(e, !0),
        ye = !0
    }, je = function() {
        var e, t, n = r.clientHeight, i = {};
        for (e in pe)
            t = pe[e],
            "function" == typeof t ? t = t.call(ae) : /p$/.test(t) && (t = t.slice(0, -1) / 100 * n),
            i[e] = t;
        return i
    }, De = function() {
        var e, t = 0;
        return ue && (t = l.max(ue.offsetHeight, ue.scrollHeight)),
        e = l.max(t, o.scrollHeight, o.offsetHeight, r.scrollHeight, r.offsetHeight, r.clientHeight),
        e - r.clientHeight
    }, Ae = function(t) {
        var n = "className";
        return e.SVGElement && t instanceof e.SVGElement && (t = t[n],
        n = "baseVal"),
        t[n]
    }, Ne = function(t, i, r) {
        var o = "className";
        if (e.SVGElement && t instanceof e.SVGElement && (t = t[o],
        o = "baseVal"),
        r === n)
            return void (t[o] = i);
        for (var s = t[o], a = 0, l = r.length; l > a; a++)
            s = qe(s).replace(qe(r[a]), " ");
        s = $e(s);
        for (var u = 0, c = i.length; c > u; u++)
            -1 === qe(s).indexOf(qe(i[u])) && (s += " " + i[u]);
        t[o] = $e(s)
    }, $e = function(e) {
        return e.replace(L, "")
    }, qe = function(e) {
        return " " + e + " "
    }, Le = Date.now || function() {
        return +new Date
    }
    , Oe = function(e, t) {
        return e.frame - t.frame
    }, Fe = 0, He = 1, Ie = "down", Me = -1, Pe = Le(), Re = 0, Be = 0, Xe = !1, _e = 0, We = !1, Ye = 0, ze = [];
    "function" == typeof define && define.amd ? define([], function() {
        return s
    }) : "undefined" != typeof module && module.exports ? module.exports = s : e.skrollr = s
}(window, document),
!function(e, t, n) {
    "use strict";
    function i(e, t) {
        this.element = e,
        this.layers = e.getElementsByClassName("layer");
        var n = {
            calibrateX: this.data(this.element, "calibrate-x"),
            calibrateY: this.data(this.element, "calibrate-y"),
            invertX: this.data(this.element, "invert-x"),
            invertY: this.data(this.element, "invert-y"),
            limitX: this.data(this.element, "limit-x"),
            limitY: this.data(this.element, "limit-y"),
            scalarX: this.data(this.element, "scalar-x"),
            scalarY: this.data(this.element, "scalar-y"),
            frictionX: this.data(this.element, "friction-x"),
            frictionY: this.data(this.element, "friction-y"),
            originX: this.data(this.element, "origin-x"),
            originY: this.data(this.element, "origin-y")
        };
        for (var i in n)
            null === n[i] && delete n[i];
        this.extend(this, s, t, n),
        this.calibrationTimer = null,
        this.calibrationFlag = !0,
        this.enabled = !1,
        this.depths = [],
        this.raf = null,
        this.bounds = null,
        this.ex = 0,
        this.ey = 0,
        this.ew = 0,
        this.eh = 0,
        this.ecx = 0,
        this.ecy = 0,
        this.erx = 0,
        this.ery = 0,
        this.cx = 0,
        this.cy = 0,
        this.ix = 0,
        this.iy = 0,
        this.mx = 0,
        this.my = 0,
        this.vx = 0,
        this.vy = 0,
        this.onMouseMove = this.onMouseMove.bind(this),
        this.onDeviceOrientation = this.onDeviceOrientation.bind(this),
        this.onOrientationTimer = this.onOrientationTimer.bind(this),
        this.onCalibrationTimer = this.onCalibrationTimer.bind(this),
        this.onAnimationFrame = this.onAnimationFrame.bind(this),
        this.onWindowResize = this.onWindowResize.bind(this),
        this.initialise()
    }
    var r = "Parallax"
      , o = 30
      , s = {
        relativeInput: !1,
        clipRelativeInput: !1,
        calibrationThreshold: 100,
        calibrationDelay: 500,
        supportDelay: 500,
        calibrateX: !1,
        calibrateY: !0,
        invertX: !0,
        invertY: !0,
        limitX: !1,
        limitY: !1,
        scalarX: 10,
        scalarY: 10,
        frictionX: .1,
        frictionY: .1,
        originX: .5,
        originY: .5
    };
    i.prototype.extend = function() {
        if (arguments.length > 1)
            for (var e = arguments[0], t = 1, n = arguments.length; n > t; t++) {
                var i = arguments[t];
                for (var r in i)
                    e[r] = i[r]
            }
    }
    ,
    i.prototype.data = function(e, t) {
        return this.deserialize(e.getAttribute("data-" + t))
    }
    ,
    i.prototype.deserialize = function(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : !isNaN(parseFloat(e)) && isFinite(e) ? parseFloat(e) : e)
    }
    ,
    i.prototype.camelCase = function(e) {
        return e.replace(/-+(.)?/g, function(e, t) {
            return t ? t.toUpperCase() : ""
        })
    }
    ,
    i.prototype.transformSupport = function(i) {
        for (var r = t.createElement("div"), o = !1, s = null, a = !1, l = null, u = null, c = 0, f = this.vendors.length; f > c; c++)
            if (null !== this.vendors[c] ? (l = this.vendors[c][0] + "transform",
            u = this.vendors[c][1] + "Transform") : (l = "transform",
            u = "transform"),
            r.style[u] !== n) {
                o = !0;
                break
            }
        switch (i) {
        case "2D":
            a = o;
            break;
        case "3D":
            if (o) {
                var p = t.body || t.createElement("body")
                  , d = t.documentElement
                  , h = d.style.overflow;
                t.body || (d.style.overflow = "hidden",
                d.appendChild(p),
                p.style.overflow = "hidden",
                p.style.background = ""),
                p.appendChild(r),
                r.style[u] = "translate3d(1px,1px,1px)",
                s = e.getComputedStyle(r).getPropertyValue(l),
                a = s !== n && s.length > 0 && "none" !== s,
                d.style.overflow = h,
                p.removeChild(r)
            }
        }
        return a
    }
    ,
    i.prototype.ww = null,
    i.prototype.wh = null,
    i.prototype.wcx = null,
    i.prototype.wcy = null,
    i.prototype.wrx = null,
    i.prototype.wry = null,
    i.prototype.portrait = null,
    i.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),
    i.prototype.vendors = [null, ["-webkit-", "webkit"], ["-moz-", "Moz"], ["-o-", "O"], ["-ms-", "ms"]],
    i.prototype.motionSupport = !!e.DeviceMotionEvent,
    i.prototype.orientationSupport = !!e.DeviceOrientationEvent,
    i.prototype.orientationStatus = 0,
    i.prototype.transform2DSupport = i.prototype.transformSupport("2D"),
    i.prototype.transform3DSupport = i.prototype.transformSupport("3D"),
    i.prototype.propertyCache = {},
    i.prototype.initialise = function() {
        this.transform3DSupport && this.accelerate(this.element);
        var t = e.getComputedStyle(this.element);
        "static" === t.getPropertyValue("position") && (this.element.style.position = "relative"),
        this.updateLayers(),
        this.updateDimensions(),
        this.enable(),
        this.queueCalibration(this.calibrationDelay)
    }
    ,
    i.prototype.updateLayers = function() {
        this.layers = this.element.getElementsByClassName("layer"),
        this.depths = [];
        for (var e = 0, t = this.layers.length; t > e; e++) {
            var n = this.layers[e];
            this.transform3DSupport && this.accelerate(n),
            n.style.position = e ? "absolute" : "relative",
            n.style.display = "block",
            n.style.left = 0,
            n.style.top = 0,
            this.depths.push(this.data(n, "depth") || 0)
        }
    }
    ,
    i.prototype.updateDimensions = function() {
        this.ww = e.innerWidth,
        this.wh = e.innerHeight,
        this.wcx = this.ww * this.originX,
        this.wcy = this.wh * this.originY,
        this.wrx = Math.max(this.wcx, this.ww - this.wcx),
        this.wry = Math.max(this.wcy, this.wh - this.wcy)
    }
    ,
    i.prototype.updateBounds = function() {
        this.bounds = this.element.getBoundingClientRect(),
        this.ex = this.bounds.left,
        this.ey = this.bounds.top,
        this.ew = this.bounds.width,
        this.eh = this.bounds.height,
        this.ecx = this.ew * this.originX,
        this.ecy = this.eh * this.originY,
        this.erx = Math.max(this.ecx, this.ew - this.ecx),
        this.ery = Math.max(this.ecy, this.eh - this.ecy)
    }
    ,
    i.prototype.queueCalibration = function(e) {
        clearTimeout(this.calibrationTimer),
        this.calibrationTimer = setTimeout(this.onCalibrationTimer, e)
    }
    ,
    i.prototype.enable = function() {
        this.enabled || (this.enabled = !0,
        this.orientationSupport ? (this.portrait = null,
        e.addEventListener("deviceorientation", this.onDeviceOrientation),
        setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0,
        this.cy = 0,
        this.portrait = !1,
        e.addEventListener("mousemove", this.onMouseMove)),
        e.addEventListener("resize", this.onWindowResize),
        this.raf = requestAnimationFrame(this.onAnimationFrame))
    }
    ,
    i.prototype.disable = function() {
        this.enabled && (this.enabled = !1,
        this.orientationSupport ? e.removeEventListener("deviceorientation", this.onDeviceOrientation) : e.removeEventListener("mousemove", this.onMouseMove),
        e.removeEventListener("resize", this.onWindowResize),
        cancelAnimationFrame(this.raf))
    }
    ,
    i.prototype.calibrate = function(e, t) {
        this.calibrateX = e === n ? this.calibrateX : e,
        this.calibrateY = t === n ? this.calibrateY : t
    }
    ,
    i.prototype.invert = function(e, t) {
        this.invertX = e === n ? this.invertX : e,
        this.invertY = t === n ? this.invertY : t
    }
    ,
    i.prototype.friction = function(e, t) {
        this.frictionX = e === n ? this.frictionX : e,
        this.frictionY = t === n ? this.frictionY : t
    }
    ,
    i.prototype.scalar = function(e, t) {
        this.scalarX = e === n ? this.scalarX : e,
        this.scalarY = t === n ? this.scalarY : t
    }
    ,
    i.prototype.limit = function(e, t) {
        this.limitX = e === n ? this.limitX : e,
        this.limitY = t === n ? this.limitY : t
    }
    ,
    i.prototype.origin = function(e, t) {
        this.originX = e === n ? this.originX : e,
        this.originY = t === n ? this.originY : t
    }
    ,
    i.prototype.clamp = function(e, t, n) {
        return e = Math.max(e, t),
        e = Math.min(e, n)
    }
    ,
    i.prototype.css = function(e, t, i) {
        var r = this.propertyCache[t];
        if (!r)
            for (var o = 0, s = this.vendors.length; s > o; o++)
                if (r = null !== this.vendors[o] ? this.camelCase(this.vendors[o][1] + "-" + t) : t,
                e.style[r] !== n) {
                    this.propertyCache[t] = r;
                    break
                }
        e.style[r] = i
    }
    ,
    i.prototype.accelerate = function(e) {
        this.css(e, "transform", "translate3d(0,0,0)"),
        this.css(e, "transform-style", "preserve-3d"),
        this.css(e, "backface-visibility", "hidden")
    }
    ,
    i.prototype.setPosition = function(e, t, n) {
        t += "px",
        n += "px",
        this.transform3DSupport ? this.css(e, "transform", "translate3d(" + t + "," + n + ",0)") : this.transform2DSupport ? this.css(e, "transform", "translate(" + t + "," + n + ")") : (e.style.left = t,
        e.style.top = n)
    }
    ,
    i.prototype.onOrientationTimer = function() {
        this.orientationSupport && 0 === this.orientationStatus && (this.disable(),
        this.orientationSupport = !1,
        this.enable())
    }
    ,
    i.prototype.onCalibrationTimer = function() {
        this.calibrationFlag = !0
    }
    ,
    i.prototype.onWindowResize = function() {
        this.updateDimensions()
    }
    ,
    i.prototype.onAnimationFrame = function() {
        this.updateBounds();
        var e = this.ix - this.cx
          , t = this.iy - this.cy;
        (Math.abs(e) > this.calibrationThreshold || Math.abs(t) > this.calibrationThreshold) && this.queueCalibration(0),
        this.portrait ? (this.mx = this.calibrateX ? t : this.iy,
        this.my = this.calibrateY ? e : this.ix) : (this.mx = this.calibrateX ? e : this.ix,
        this.my = this.calibrateY ? t : this.iy),
        this.mx *= this.ew * (this.scalarX / 100),
        this.my *= this.eh * (this.scalarY / 100),
        isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)),
        isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)),
        this.vx += (this.mx - this.vx) * this.frictionX,
        this.vy += (this.my - this.vy) * this.frictionY;
        for (var n = 0, i = this.layers.length; i > n; n++) {
            var r = this.layers[n]
              , o = this.depths[n]
              , s = this.vx * o * (this.invertX ? -1 : 1)
              , a = this.vy * o * (this.invertY ? -1 : 1);
            this.setPosition(r, s, a)
        }
        this.raf = requestAnimationFrame(this.onAnimationFrame)
    }
    ,
    i.prototype.onDeviceOrientation = function(e) {
        if (!this.desktop && null !== e.beta && null !== e.gamma) {
            this.orientationStatus = 1;
            var t = (e.beta || 0) / o
              , n = (e.gamma || 0) / o
              , i = this.wh > this.ww;
            this.portrait !== i && (this.portrait = i,
            this.calibrationFlag = !0),
            this.calibrationFlag && (this.calibrationFlag = !1,
            this.cx = t,
            this.cy = n),
            this.ix = t,
            this.iy = n
        }
    }
    ,
    i.prototype.onMouseMove = function(e) {
        var t = e.clientX
          , n = e.clientY;
        !this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (t = Math.max(t, this.ex),
        t = Math.min(t, this.ex + this.ew),
        n = Math.max(n, this.ey),
        n = Math.min(n, this.ey + this.eh)),
        this.ix = (t - this.ex - this.ecx) / this.erx,
        this.iy = (n - this.ey - this.ecy) / this.ery) : (this.ix = (t - this.wcx) / this.wrx,
        this.iy = (n - this.wcy) / this.wry)
    }
    ,
    e[r] = i
}(window, document),
function() {
    for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n)
        window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"],
        window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(t) {
        var n = (new Date).getTime()
          , i = Math.max(0, 16 - (n - e))
          , r = window.setTimeout(function() {
            t(n + i)
        }, i);
        return e = n + i,
        r
    }
    ),
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
        clearTimeout(e)
    }
    )
}(),
!function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}(this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var n = this._events = this._events || {}
              , i = n[e] = n[e] || [];
            return -1 == i.indexOf(t) && i.push(t),
            this
        }
    }
    ,
    t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var n = this._onceEvents = this._onceEvents || {}
              , i = n[e] = n[e] || [];
            return i[t] = !0,
            this
        }
    }
    ,
    t.off = function(e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            var i = n.indexOf(t);
            return -1 != i && n.splice(i, 1),
            this
        }
    }
    ,
    t.emitEvent = function(e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            var i = 0
              , r = n[i];
            t = t || [];
            for (var o = this._onceEvents && this._onceEvents[e]; r; ) {
                var s = o && o[r];
                s && (this.off(e, r),
                delete o[r]),
                r.apply(this, t),
                i += s ? 0 : 1,
                r = n[i]
            }
            return this
        }
    }
    ,
    e
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(n) {
        return t(e, n)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}(window, function(e, t) {
    function n(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }
    function i(e) {
        var t = [];
        if (Array.isArray(e))
            t = e;
        else if ("number" == typeof e.length)
            for (var n = 0; n < e.length; n++)
                t.push(e[n]);
        else
            t.push(e);
        return t
    }
    function r(e, t, o) {
        return this instanceof r ? ("string" == typeof e && (e = document.querySelectorAll(e)),
        this.elements = i(e),
        this.options = n({}, this.options),
        "function" == typeof t ? o = t : n(this.options, t),
        o && this.on("always", o),
        this.getImages(),
        a && (this.jqDeferred = new a.Deferred),
        void setTimeout(function() {
            this.check()
        }
        .bind(this))) : new r(e,t,o)
    }
    function o(e) {
        this.img = e
    }
    function s(e, t) {
        this.url = e,
        this.element = t,
        this.img = new Image
    }
    var a = e.jQuery
      , l = e.console;
    r.prototype = Object.create(t.prototype),
    r.prototype.options = {},
    r.prototype.getImages = function() {
        this.images = [],
        this.elements.forEach(this.addElementImages, this)
    }
    ,
    r.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e),
        this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
            for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
                var r = n[i];
                this.addImage(r)
            }
            if ("string" == typeof this.options.background) {
                var o = e.querySelectorAll(this.options.background);
                for (i = 0; i < o.length; i++) {
                    var s = o[i];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    }
    ;
    var u = {
        1: !0,
        9: !0,
        11: !0
    };
    return r.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(t.backgroundImage); null !== i; ) {
                var r = i && i[2];
                r && this.addBackground(r, e),
                i = n.exec(t.backgroundImage)
            }
    }
    ,
    r.prototype.addImage = function(e) {
        var t = new o(e);
        this.images.push(t)
    }
    ,
    r.prototype.addBackground = function(e, t) {
        var n = new s(e,t);
        this.images.push(n)
    }
    ,
    r.prototype.check = function() {
        function e(e, n, i) {
            setTimeout(function() {
                t.progress(e, n, i)
            })
        }
        var t = this;
        return this.progressedCount = 0,
        this.hasAnyBroken = !1,
        this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", e),
            t.check()
        }) : void this.complete()
    }
    ,
    r.prototype.progress = function(e, t, n) {
        this.progressedCount++,
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded,
        this.emitEvent("progress", [this, e, t]),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e),
        this.progressedCount == this.images.length && this.complete(),
        this.options.debug && l && l.log("progress: " + n, e, t)
    }
    ,
    r.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0,
        this.emitEvent(e, [this]),
        this.emitEvent("always", [this]),
        this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }
    ,
    o.prototype = Object.create(t.prototype),
    o.prototype.check = function() {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
        this.proxyImage.addEventListener("load", this),
        this.proxyImage.addEventListener("error", this),
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        void (this.proxyImage.src = this.img.src))
    }
    ,
    o.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }
    ,
    o.prototype.confirm = function(e, t) {
        this.isLoaded = e,
        this.emitEvent("progress", [this, this.img, t])
    }
    ,
    o.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }
    ,
    o.prototype.onload = function() {
        this.confirm(!0, "onload"),
        this.unbindEvents()
    }
    ,
    o.prototype.onerror = function() {
        this.confirm(!1, "onerror"),
        this.unbindEvents()
    }
    ,
    o.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    s.prototype = Object.create(o.prototype),
    s.prototype.check = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        this.unbindEvents())
    }
    ,
    s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    s.prototype.confirm = function(e, t) {
        this.isLoaded = e,
        this.emitEvent("progress", [this, this.element, t])
    }
    ,
    r.makeJQueryPlugin = function(t) {
        t = t || e.jQuery,
        t && (a = t,
        a.fn.imagesLoaded = function(e, t) {
            var n = new r(this,e,t);
            return n.jqDeferred.promise(a(this))
        }
        )
    }
    ,
    r.makeJQueryPlugin(),
    r
}),
function(e) {
    function t() {
        o = !1;
        for (var t = 0, n = i.length; t < n; t++) {
            var r = e(i[t]).filter(function() {
                return e(this).is(":appeared")
            });
            if (r.trigger("appear", [r]),
            l[t]) {
                var s = l[t].not(r);
                s.trigger("disappear", [s])
            }
            l[t] = r
        }
    }
    function n(e) {
        i.push(e),
        l.push()
    }
    var i = []
      , r = !1
      , o = !1
      , s = {
        interval: 250,
        force_process: !1
    }
      , a = e(window)
      , l = [];
    e.expr[":"].appeared = function(t) {
        var n = e(t);
        if (!n.is(":visible"))
            return !1;
        var i = a.scrollLeft()
          , r = a.scrollTop()
          , o = n.offset()
          , s = o.left
          , l = o.top;
        return l + n.height() >= r && l - (n.data("appear-top-offset") || 0) <= r + a.height() && s + n.width() >= i && s - (n.data("appear-left-offset") || 0) <= i + a.width()
    }
    ,
    e.fn.extend({
        appear: function(i) {
            var a = e.extend({}, s, i || {})
              , l = this.selector || this;
            if (!r) {
                var u = function() {
                    o || (o = !0,
                    setTimeout(t, a.interval))
                };
                e(window).scroll(u).resize(u),
                r = !0
            }
            return a.force_process && setTimeout(t, a.interval),
            n(l),
            e(l)
        }
    }),
    e.extend({
        force_appear: function() {
            return !!r && (t(),
            !0)
        }
    })
}(function() {
    return "undefined" != typeof module ? require("jquery") : jQuery
}()),
window.addEventListener("DOMContentLoaded", function() {
    "use strict";
    function e() {
        return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || window.opera)
    }
    function t() {
        var e = document.getElementById("js-intro-scene")
          , t = new Parallax(e,{
            calibrateX: !1,
            calibrateY: !0,
            invertX: !1,
            invertY: !0,
            limitX: !1,
            limitY: !1,
            scalarX: 2,
            scalarY: 2,
            frictionX: .2,
            frictionY: .2,
            originX: .5,
            originY: .5
        });
        t.disable(),
        $(e).appear(),
        $(document.body).on("appear", "#js-intro-scene", function(e, n) {
            t.enable()
        }).on("disappear", "#js-intro-scene", function(e, n) {
            t.disable()
        })
    }
    function n() {
        var e = $(".js-loading-overlay");
        e.addClass("state-done"),
        setTimeout(function() {
            e.remove(),
            t()
        }, 3800)
    }
    console.log("Hello stranger!"),
    console.log("I see, you know something about the Browser Console, great!"),
    console.log("We need a couple of awesome JS guys."),
    console.log("Check our the global window object: I've added a secret method to it..."),
    window["Boom!"] = function() {
        console.log("Please drop your CV here: hello@ui-market.com"),
        console.log("Good luck!")
    }
    ,
    function() {
        e() ? $("body").addClass("body--mobile") : $("body").addClass("body--desktop")
    }();
    var i = function() {
        var e = $(".js-scroll-fullscreen")
          , t = function() {
            $("html,body").animate({
                scrollTop: window.innerHeight + window.scrollY
            }, 700)
        }
          , n = function() {
            e.on("click", function(e) {
                e.preventDefault(),
                t()
            })
        };
        return {
            bindScrollFullscreen: n
        }
    }()
      , r = function() {
        var e = $(".js-round-chart")
          , t = function() {
            for (var t = parseInt(e.find("circle").attr("r"), 10), n = 2 * t * Math.PI, i = e.length, r = 0; r < i; r++) {
                var o = parseInt(e.eq(r).attr("data-chart-value"), 10)
                  , s = n * (1 - o / 100);
                e.eq(r).css("stroke-dashoffset", s)
            }
        };
        return {
            init: t
        }
    }()
      , o = function() {
        var e = $(".js-content-trigger")
          , t = $(".js-round-chart circle")
          , n = function() {
            e.on("click", function(n) {
                n.preventDefault();
                var i = $(this).attr("data-content-index");
                e.removeClass("state-active"),
                $(this).addClass("state-active"),
                t.attr("stroke", i)
            })
        };
        return {
            bind: n
        }
    }()
      , s = function() {
        var e = function() {
            var e = $(".js-numbers-cards-box");
            e.appear();
            var t = function() {
                var t = .2
                  , n = e.innerHeight() * t;
                e.attr("data-appear-top-offset", "-" + n)
            };
            t(),
            $(document.body).on("appear", ".js-numbers-cards-box", function(t, n) {
                e.addClass("state-visible"),
                e.removeClass("state-just-gone")
            }).on("disappear", ".js-numbers-cards-box", function(t, n) {
                e.removeClass("state-visible"),
                e.addClass("state-just-gone")
            })
        };
        return {
            bind: e
        }
    }()
      , a = function() {
        var e = function() {
            var e = $("#js-intro-scene")
              , t = $(".js-jumbotron");
            t.appear();
            var n = function() {
                var e = .05
                  , n = t.innerHeight() * e;
                t.attr("data-appear-top-offset", "-" + n)
            };
            n(),
            $(document.body).on("appear", ".js-jumbotron", function(t, n) {
                e.addClass("state-visible"),
                e.removeClass("state-just-gone")
            }).on("disappear", ".js-jumbotron", function(t, n) {
                e.removeClass("state-visible"),
                e.addClass("state-just-gone")
            })
        };
        return {
            bind: e
        }
    }()
      , l = function() {
        var e = function() {
            skrollr.init({
                smoothScrolling: !0,
                smoothScrollingDuration: 2e3,
                easing: "linear"
            })
        };
        return {
            bind: e
        }
    }()
      , u = function() {
        var e = function() {
            var e = $(".js-categories-img");
            e.appear();
            var t = function() {
                e.attr("data-appear-top-offset", "-" + .3 * window.outerHeight)
            };
            t(),
            $(document.body).on("appear", ".js-categories-img", function(e, t) {
                $(this).addClass("state-visible"),
                $(this).removeClass("state-just-gone")
            }).on("disappear", ".js-categories-img", function(e, t) {
                $(this).removeClass("state-visible"),
                $(this).addClass("state-just-gone")
            })
        };
        return {
            bind: e
        }
    }()
      , c = function() {
        var e = function() {
            var e = $(".js-samples-item");
            e.appear();
            $(document.body).on("appear", ".js-samples-item", function(e, t) {
                $(this).addClass("state-visible"),
                $(this).removeClass("state-just-gone")
            }).on("disappear", ".js-samples-item", function(e, t) {
                $(this).removeClass("state-visible"),
                $(this).addClass("state-just-gone")
            })
        };
        return {
            bind: e
        }
    }()
      , f = function() {
        var e = function() {
            var e = $(".js-steps-row");
            e.appear();
            var t = function() {
                var t = -.5
                  , n = e.eq(0).innerHeight();
                e.attr("data-appear-top-offset", n * t)
            };
            t(),
            $(document.body).on("appear", ".js-steps-row", function(e, t) {
                $(this).addClass("state-visible")
            }).on("disappear", ".js-steps-row", function(e, t) {})
        };
        return {
            bind: e
        }
    }()
      , p = function() {
        var e = function() {
            var e = $(".js-footer-price");
            e.appear();
            var t = function() {
                var t = -.5
                  , n = e.eq(0).innerHeight();
                e.attr("data-appear-top-offset", n * t)
            };
            t(),
            $(document.body).on("appear", ".js-footer-price", function(e, t) {
                $(this).addClass("state-visible")
            }).on("disappear", ".js-footer-price", function(e, t) {
                $(this).removeClass("state-visible")
            })
        };
        return {
            bind: e
        }
    }()
      , d = function() {
        var e = function() {
            var e = $(".js-share-list");
            e.appear();
            var t = function() {
                var t = -3
                  , n = e.eq(0).innerHeight();
                e.attr("data-appear-top-offset", n * t)
            };
            t(),
            $(document.body).on("appear", ".js-share-list", function(e, t) {
                $(this).addClass("state-visible")
            }).on("disappear", ".js-share-list", function(e, t) {
                $(this).removeClass("state-visible")
            })
        };
        return {
            bind: e
        }
    }()
      , h = function() {
        var e = function() {
            var e = $(".js-content");
            e.appear();
            var t = function() {
                var t = -.7
                  , n = e.eq(0).innerHeight();
                e.attr("data-appear-top-offset", n * t)
            };
            t(),
            $(document.body).on("appear", ".js-content", function(e, t) {
                $(this).addClass("state-visible-content"),
                $(this).removeClass("state-just-gone-content")
            }).on("disappear", ".js-content", function(e, t) {
                $(this).removeClass("state-visible-content"),
                $(this).addClass("state-just-gone-content")
            })
        };
        return {
            bind: e
        }
    }()
      , p = function() {
        var e = function() {
            var e = $(".js-price-item");
            e.appear();
            $(document.body).on("appear", ".js-price-item", function(e, t) {
                $(this).addClass("state-visible"),
                $(this).removeClass("state-just-gone")
            }).on("disappear", ".js-price-item", function(e, t) {
                $(this).removeClass("state-visible"),
                $(this).addClass("state-just-gone")
            })
        };
        return {
            bind: e
        }
    }()
      , m = {
        DOM: {
            $intro: $(".js-intro-section"),
            $cards: $(".js-intro-card")
        },
        setHeight: function() {
            this.DOM.$intro.css("height", $(window).outerHeight())
        },
        bind: function() {
            window.addEventListener("orientationchange", function() {
                window.location.reload()
            })
        },
        init: function() {
            this.bind()
        }
    }
      , g = {
        OPENING_DURATION: 300,
        DOM: {
            $popups: $(".popup"),
            $openers: $(".js-open-popup"),
            $ovelay: $(".js-overlay"),
            $closers: $(".js-close-all-popups"),
            $body: $("body")
        },
        toggleOverlay: function() {
            this.DOM.$ovelay.toggleClass("state-visible")
        },
        toggleBodyFix: function() {
            this.DOM.$body.toggleClass("state-fixed-body")
        },
        open: function(e) {
            $('[data-popup-name="' + e + '"]').fadeIn(this.OPENING_DURATION).addClass("state-visible"),
            console.log(e),
            this.toggleOverlay(),
            this.toggleBodyFix(),
            history.pushState(null, null, "?purchase_popup")
        },
        closeOpened: function() {
            var e = this;
            e.DOM.$popups.fadeOut(e.OPENING_DURATION),
            setTimeout(function() {
                e.DOM.$popups.removeClass("state-visible")
            }, e.OPENING_DURATION),
            this.toggleOverlay(),
            this.toggleBodyFix(),
            history.pushState(null, null, " ")
        },
        bindOverlay: function() {
            var e = this;
            e.DOM.$ovelay.on("click", function(t) {
                t.preventDefault(),
                e.closeOpened()
            })
        },
        bindOpeners: function(e) {
            var t = this
              , n = e ? e : t.DOM.$openers;
            n.on("click", function(e) {
                e.preventDefault();
                var n = $(this).attr("data-popup-target");
                t.open(n)
            })
        },
        bindClosers: function() {
            var e = this;
            e.DOM.$closers.on("click", function(t) {
                t.preventDefault(),
                e.closeOpened()
            })
        },
        init: function() {
            this.bindOverlay(),
            this.bindOpeners(),
            this.bindClosers()
        }
    }
      , v = (function() {
        function e(e) {
            $.ajax({
                url: "http://ui-market.com/phoenix-startup/send_mail.php",
                type: "POST",
                data: $(".js-saving-form").serialize()
            }).done(function(e) {
                console.log(e),
                $(".js-popup__title--success").slideToggle(400),
                $(".js-popup__title--initial").slideToggle(400),
                setTimeout(function() {
                    $(".js-popup__title--success").slideToggle(400),
                    $(".js-popup__title--initial").slideToggle(400)
                }, 8e3)
            }).fail(function(e) {
                console.log("error"),
                alert("Sending error. Please, try sending a direct email: hello@ui-market.com")
            }).always(function(e) {
                console.log("complete")
            })
        }
        var t = {
            savingForm: "js-saving-form",
            urlInput: "js-url-input",
            itemsTitlesInput: "js-items-titles-input",
            itemsTextsInput: "js-items-texts-input",
            draggableMenuItemsHolder: "js-draggable-menu-items-holder"
        }
          , n = {
            draggableMenuItemsHolder: document.querySelector("." + t.draggableMenuItemsHolder),
            urlInput: document.querySelector("." + t.urlInput),
            itemsTitlesInput: document.querySelector("." + t.itemsTitlesInput),
            itemsTextsInput: document.querySelector("." + t.itemsTextsInput),
            savingForm: document.querySelector("." + t.savingForm)
        };
        return {
            bind: function() {
                n.savingForm.addEventListener("submit", function(t) {
                    t.preventDefault(),
                    e(n.savingForm)
                })
            }
        }
    }(),
    $(".js-intro-image"));
    v.length,
    $(".js-percentage-item-start"),
    $(".js-loader-logo");
    $(".js-intro-section").imagesLoaded().always(function(e) {}).done(function(e) {
        n()
    }).fail(function() {
        console.log("all images loaded, at least one is broken"),
        n()
    }).progress(function(e, t) {}),
    window.addEventListener("load", function() {});
    var y = function() {
        var e = {
            cat: !1,
            welcome: !1
        }
          , t = function() {
            window.location.search.indexOf("?ref=producthunt") !== -1 && (e.cat = !0),
            window.location.search.indexOf("?ref=market_demo") !== -1 && (e.marketDemo = !0),
            localStorage.visitedBefore && (e.welcome = !0),
            localStorage.visitedBefore = !0,
            !e.cat && e.welcome && !e.marketDemo,
            e.marketDemo && $("body").addClass("body--commercial-hidden")
        };
        return {
            init: t
        }
    }()
      , b = function() {
        function e(e, t, n) {
            try {
                ga("send", "event", e, t, n)
            } catch (i) {
                console.log("Google Analytics event sending error. Details: "),
                console.log(i)
            }
        }
        var t = function() {
            var t = $("body");
            t.on("click", ".js-ga-click", function(t) {
                e($(this).attr("data-ga-category"), "Click", $(this).attr("data-ga-label"))
            }),
            t.on("mouseenter", ".js-ga-hover", function(t) {
                e($(this).attr("data-ga-category"), "Hover", $(this).attr("data-ga-label"))
            }),
            $(".js-ga-scroll-to").appear(),
            $(document.body).on("appear", ".js-ga-scroll-to", function() {
                "done" !== $(this).attr("data-send-info") && (e($(this).attr("data-ga-category"), "Scroll", $(this).attr("data-ga-label")),
                $(this).attr("data-send-info", "done"))
            });
            for (var n = $(".ya-share2__link"), i = n.length, r = 0; r < i; r++) {
                n.eq(r).addClass("js-ga-click");
                var o = n.eq(r).attr("title");
                n.eq(r).attr("data-ga-category", "Social"),
                n.eq(r).attr("data-ga-label", o)
            }
        };
        return {
            bind: t
        }
    }()
      , x = function() {
        var e = function() {
            $(".js-go-away-link").on("click", function(e) {
                e.preventDefault();
                var t = $(this).attr("href");
                $("body").animate({
                    opacity: "0"
                }, 400),
                setTimeout(function() {
                    window.location.href = t
                }, 400)
            })
        };
        return {
            init: e
        }
    }();
    !function() {
        var e = $(".js-version");
        e.on("mouseleave", function(t) {
            t.preventDefault(),
            e.removeClass("state-hidden")
        }),
        e.on("mouseenter", function(t) {
            t.preventDefault(),
            e.removeClass("state-hidden"),
            $(this).siblings().addClass("state-hidden")
        })
    }(),
    history.pushState(null, null, " "),
    window.addEventListener("popstate", function() {
        $(".popup--versions").hasClass("state-visible") && (g.closeOpened(),
        history.pushState(null, null, " "))
    });
    (function() {
        function e() {
            $(window).scroll(function(e) {
                var t = $(".js-header");
                $(this).scrollTop() > 50 && t.removeClass("state-hidden"),
                $(this).scrollTop() <= 50 && t.addClass("state-hidden")
            })
        }
        return {
            init: e
        }
    }
    )();
    b.bind(),
    y.init(),
    x.init(),
    r.init(),
    e() || l.bind(),
    e() && (p.bind(),
    m.setHeight(),
    m.init()),
    g.init(),
    i.bindScrollFullscreen(),
    o.bind(),
    s.bind(),
    f.bind(),
    u.bind(),
    c.bind(),
    d.bind(),
    a.bind(),
    h.bind()
});
