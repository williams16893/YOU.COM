"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1659], {
        33747: function(n, t, e) {
            e.d(t, {
                B3: function() {
                    return h
                },
                IV: function() {
                    return w
                },
                Kc: function() {
                    return p
                },
                aS: function() {
                    return g
                },
                hf: function() {
                    return v
                },
                zU: function() {
                    return m
                }
            });
            var i = e(7297),
                r = e(23376),
                o = e(57698),
                c = e(52015),
                a = e(21426);

            function u() {
                var n = (0, i.Z)(["\n  padding-left: ", ";\n  padding-right: ", ";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  ", " {\n    padding: ", ";\n    cursor: pointer;\n  }\n\n  path {\n    fill: ", ";\n  }\n"]);
                return u = function() {
                    return n
                }, n
            }

            function f() {
                var n = (0, i.Z)(["\n  font-weight: 500;\n  font-size: ", ";\n  line-height: ", ";\n  letter-spacing: -0.15px;\n  margin: 0 0 0 ", ";\n  color: ", ";\n"]);
                return f = function() {
                    return n
                }, n
            }

            function l() {
                var n = (0, i.Z)(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  letter-spacing: -0.08px;\n  margin: 0;\n  padding-left: ", ";\n\n  ", " {\n    margin-left: ", ";\n  }\n"]);
                return l = function() {
                    return n
                }, n
            }

            function d() {
                var n = (0, i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);
                return d = function() {
                    return n
                }, n
            }

            function s() {
                var n = (0, i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 24px;\n  color: ", ";\n"]);
                return s = function() {
                    return n
                }, n
            }
            var p = c.ZP.div.withConfig({
                    componentId: "sc-e89f678d-0"
                })(u(), r.W0.xs, r.W0.xs, o.BC.small, r.W0.xxs, (function(n) {
                    var t = n.theme;
                    return h(!1, !1, t)
                })),
                h = function(n, t, e) {
                    return e ? t ? e.grayscale_40 : e.text.primary : r.$_.text.primary
                },
                v = c.ZP.p.withConfig({
                    componentId: "sc-e89f678d-1"
                })(f(), r.JB.body, r.Nv.lg, r.W0.xs, (function(n) {
                    var t = n.disabled,
                        e = n.$isIncognito,
                        i = n.theme;
                    return h(e, t, i)
                })),
                g = (0, c.ZP)(v).withConfig({
                    componentId: "sc-e89f678d-2"
                })(l(), r.$_.text.tertiary, r.JB.caption, r.Ue.semiBold, r.W0.xs, (0, a.q)(), r.W0.xs),
                m = c.ZP.div.withConfig({
                    componentId: "sc-e89f678d-3"
                })(d()),
                w = c.ZP.div.withConfig({
                    componentId: "sc-e89f678d-4"
                })(s(), (function(n) {
                    return n.theme.text.primary
                }))
        },
        19696: function(n, t, e) {
            e.d(t, {
                e: function() {
                    return w
                }
            });
            var i = e(26042),
                r = e(69396),
                o = e(99534),
                c = e(85893),
                a = e(41664),
                u = e.n(a),
                f = e(64027),
                l = e(47837),
                d = e(7297),
                s = e(66970),
                p = e(52015);

            function h() {
                var n = (0, d.Z)(["\n      width: auto;\n    "]);
                return h = function() {
                    return n
                }, n
            }

            function v() {
                var n = (0, d.Z)(["\n  width: fit-content;\n  width: -moz-fit-content;\n\n  ", "\n"]);
                return v = function() {
                    return n
                }, n
            }
            var g = (0, p.ZP)(s.P).withConfig({
                    componentId: "sc-a64c1f04-0"
                })(v(), (function(n) {
                    return n.$fillAvailableWidth && (0, p.iv)(h())
                })),
                m = (0, l.a)(),
                w = function(n) {
                    var t = n.href,
                        e = n.isInternal,
                        a = void 0 !== e && e,
                        l = n.children,
                        d = n.invokeActionOnClick,
                        s = n.fillAvailableWidth,
                        p = n.shouldOpenInNewTab,
                        h = (0, o.Z)(n, ["href", "isInternal", "children", "invokeActionOnClick", "fillAvailableWidth", "shouldOpenInNewTab"]);
                    if (!m && a) {
                        var v = "string" === typeof l && f.k.includes(l);
                        return (0, c.jsx)(u(), {
                            href: t,
                            prefetch: !1,
                            passHref: !0,
                            children: (0, c.jsx)("a", (0, r.Z)((0, i.Z)({}, h), {
                                translate: v ? "no" : void 0,
                                children: l
                            }))
                        })
                    }
                    return (0, c.jsx)(g, (0, r.Z)((0, i.Z)({
                        href: t,
                        invokeActionOnClick: d,
                        $fillAvailableWidth: s,
                        shouldForceOpenInNewTab: m || p
                    }, h), {
                        children: l
                    }))
                };
            w.displayName = "YDCLink"
        },
        38475: function(n, t, e) {
            e.r(t), e.d(t, {
                MobileUserDropdown: function() {
                    return Z
                }
            });
            var i = e(85893),
                r = e(47044),
                o = e.n(r),
                c = e(67294),
                a = e(9100),
                u = e(15985),
                f = e(69537),
                l = e(51753),
                d = e(87192),
                s = e(7297),
                p = e(23376),
                h = e(52015);

            function v() {
                var n = (0, s.Z)(["\n  width: 100%;\n  padding: ", ";\n"]);
                return v = function() {
                    return n
                }, n
            }

            function g() {
                var n = (0, s.Z)(["\n      &:not(:last-child):not(:first-child) {\n        border-bottom: solid 1px #e7e7eb;\n      }\n    "]);
                return g = function() {
                    return n
                }, n
            }

            function m() {
                var n = (0, s.Z)(["\n  ", ";\n"]);
                return m = function() {
                    return n
                }, n
            }
            var w = h.ZP.div.withConfig({
                    componentId: "sc-574036bd-0"
                })(v(), p.W0.xs),
                x = h.ZP.div.withConfig({
                    componentId: "sc-574036bd-1"
                })(m(), (function(n) {
                    return n.hasSeparator && (0, h.iv)(g())
                })),
                Z = function(n) {
                    var t = n.shouldOpen,
                        e = n.toggle,
                        r = (0, a.u)({
                            isMobile: !0,
                            toggle: e
                        }),
                        s = r.dropdownItems,
                        p = r.isLoading,
                        h = r.isSafeSearchToggled,
                        v = r.setIsSafeSearchToggled,
                        g = r.isIncognito,
                        m = r.handleOnItemClick,
                        Z = r.eventContext,
                        b = (0, c.useState)(!1),
                        I = b[0],
                        C = b[1];
                    if ((0, c.useEffect)((function() {
                            C(t)
                        }), [t]), (0, c.useEffect)((function() {
                            if (!I && h && v(l.L.SafeSearch), I) {
                                var n = "Open Dropdown Mobile";
                                (0, f.qP)(u.j.UserClickInNonApp, {
                                    appname: u.j.UserDropdownApp,
                                    actionTitle: n,
                                    actionName: o()(n)
                                }, Z, g)
                            }
                        }), [I]), p) return null;
                    return (0, i.jsx)(d.n, {
                        isOpen: I,
                        "data-testid": "Mobile-Menu",
                        toggle: e,
                        hasGradient: !0,
                        shouldOpenFromRight: !0,
                        children: (0, i.jsx)(w, {
                            "data-eventappname": u.j.UserDropdownApp,
                            children: s.filter((function(n) {
                                return Boolean(null === n || void 0 === n ? void 0 : n.component)
                            })).map((function(n, t) {
                                var e = n.component,
                                    r = n.hasSeparator,
                                    o = null === e || void 0 === e ? void 0 : e.key;
                                return e && (0, i.jsx)(x, {
                                    onClick: function() {
                                        return m({
                                            key: o
                                        })
                                    },
                                    hasSeparator: r,
                                    children: e
                                }, t)
                            }))
                        })
                    })
                }
        }
    }
]);