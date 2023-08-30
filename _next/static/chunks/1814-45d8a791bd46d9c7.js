"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1814], {
        8993: function(n, e, t) {
            t.d(e, {
                D: function() {
                    return w
                }
            });
            var r = t(85893),
                i = t(70189),
                o = t(52015),
                a = t(2507),
                c = t(53766),
                s = t(31052),
                u = t(67294),
                l = [a.ID.youStudy, a.ID.social],
                d = t(7297),
                h = t(25675),
                f = t.n(h);

            function g() {
                var n = (0, d.Z)(["\n  position: absolute;\n  width: 100%;\n  height: 153px;\n  opacity: 0.54;\n  top: 0;\n  left: 0;\n  z-index: -1;\n\n  mask-image: linear-gradient(\n    180deg,\n    rgba(0, 0, 0, 1) 70%,\n    rgba(255, 255, 255, 0) 99%\n  );\n\n  pointer-events: none;\n"]);
                return g = function() {
                    return n
                }, n
            }

            function p() {
                var n = (0, d.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n"]);
                return p = function() {
                    return n
                }, n
            }
            var m = o.ZP.div.withConfig({
                    componentId: "sc-f0ebac34-0"
                })(g()),
                v = (0, o.ZP)(f()).withConfig({
                    componentId: "sc-f0ebac34-1"
                })(p()),
                x = function(n) {
                    var e = n.type,
                        t = n.keepDark,
                        d = n.className,
                        h = n.baseHeight,
                        f = n.opacity,
                        g = function(n, e) {
                            var t = (0, u.useState)(document.documentElement.clientWidth),
                                r = t[0],
                                i = t[1],
                                o = (0, s.j)().isSmallDevice,
                                a = l.includes(n) ? .22569 * r : o ? e.mobile : e.desktop,
                                c = function() {
                                    return i(document.documentElement.clientWidth)
                                };
                            return (0, u.useEffect)((function() {
                                return c(), window.addEventListener("resize", c),
                                    function() {
                                        return window.removeEventListener("resize", c)
                                    }
                            }), []), {
                                height: a,
                                width: r
                            }
                        }(e, h),
                        p = g.height,
                        x = g.width,
                        w = function(n, e) {
                            var t = e ? "dark" : "light";
                            switch (n) {
                                case a.ID.youCode:
                                    return {
                                        src: "/shared/landing-page/background-youcode-".concat(t, ".png"),
                                        alt: "Code Background"
                                    };
                                case a.ID.youStudy:
                                    return {
                                        src: "/shared/landing-page/background-youstudy-".concat(t, ".png"),
                                        alt: "Study Background"
                                    };
                                case a.ID.social:
                                    return {
                                        src: "/shared/landing-page/background-social-".concat(t, ".png"),
                                        alt: "Social Background"
                                    };
                                default:
                                    return {
                                        src: "/shared/landing-page/background-default-".concat(t, ".png"),
                                        alt: "Gradient Background"
                                    }
                            }
                        }(e, (0, o.Fg)().darkMode || t),
                        y = w.src,
                        b = w.alt;
                    return 0 === x || 0 === p ? null : (0, r.jsx)(m, {
                        className: d,
                        "data-testid": "".concat(c.j6N).concat(e),
                        children: (0, r.jsx)(v, {
                            height: p,
                            width: x,
                            src: "".concat(i.qn).concat(y),
                            priority: !0,
                            alt: b,
                            style: {
                                opacity: f
                            }
                        })
                    })
                },
                w = function(n) {
                    var e = n.type,
                        t = n.baseHeight,
                        i = n.keepDark,
                        o = n.className,
                        c = n.opacity;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(x, {
                            className: o,
                            keepDark: i,
                            type: a.ID.default,
                            baseHeight: t,
                            opacity: c
                        }), (e === a.ID.youStudy || e === a.ID.youCode || e === a.ID.social) && (0, r.jsx)(x, {
                            className: o,
                            keepDark: i,
                            type: e,
                            baseHeight: t
                        })]
                    })
                }
        },
        75932: function(n, e, t) {
            t.d(e, {
                n: function() {
                    return h
                }
            });
            var r = t(85893),
                i = t(9008),
                o = t.n(i),
                a = t(32008),
                c = t(70545),
                s = t(15985),
                u = t(2507),
                l = t(67294),
                d = t(19251),
                h = function(n) {
                    var e = n.content,
                        t = n.pageType,
                        i = void 0 === t ? u.ID.default : t,
                        h = (0, u.LM)({
                            pageType: i
                        }),
                        f = h.title,
                        g = h.description,
                        p = h.image,
                        m = h.url;
                    return (0, l.useEffect)((function() {
                        (0, d.s)()
                    }), []), (0, c.I)({
                        eventName: s.j.UserLandingPage
                    }), (0, a.N)(), (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(o(), {
                            children: [(0, r.jsx)("title", {
                                children: f
                            }), (0, r.jsx)("meta", {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1, maximum-scale=1"
                            }), (0, r.jsx)("meta", {
                                name: "description",
                                content: g
                            }, "description"), (0, r.jsx)("meta", {
                                name: "twitter:card",
                                content: "summary"
                            }, "twitter:card"), (0, r.jsx)("meta", {
                                property: "og:url",
                                content: m
                            }, "og:url"), (0, r.jsx)("meta", {
                                property: "og:title",
                                content: f
                            }, "og:title"), (0, r.jsx)("meta", {
                                property: "og:description",
                                content: g
                            }, "og:description"), (0, r.jsx)("meta", {
                                property: "og:image",
                                content: p
                            }, "og:image")]
                        }), (0, r.jsx)(e, {})]
                    })
                }
        },
        70416: function(n, e, t) {
            t.d(e, {
                V: function() {
                    return ot
                }
            });
            var r, i = t(85893),
                o = t(31052),
                a = t(24622),
                c = t(10646),
                s = t(5152),
                u = t.n(s),
                l = t(67294),
                d = t(4480),
                h = t(7297),
                f = t(8740),
                g = t(23376),
                p = t(57698),
                m = t(52015),
                v = t(19696);

            function x() {
                return x = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, x.apply(this, arguments)
            }
            var w = function(n) {
                return l.createElement("svg", x({
                    viewBox: "0 0 72 19",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), r || (r = l.createElement("path", {
                    d: "m1.571 5.256 30.793 12.3c.569.239 1.167.463 1.796.673.658.21 1.271.314 1.84.314.569 0 1.167-.105 1.795-.314.659-.21 1.287-.434 1.886-.674L70.429 5.256c.509-.21.898-.509 1.167-.898.27-.389.404-.793.404-1.212 0-.718-.24-1.316-.718-1.795-.479-.509-1.093-.763-1.84-.763-.36 0-.764.075-1.213.224-.448.15-.823.285-1.122.404L34.34 14.28h3.322L4.893 1.216c-.33-.12-.718-.254-1.167-.404A3.597 3.597 0 0 0 2.514.588c-.718 0-1.317.254-1.796.763C.24 1.83 0 2.428 0 3.146c0 .42.135.823.404 1.212.27.39.658.689 1.167.898Z",
                    fill: "#AEAEB2"
                })))
            };

            function y() {
                var n = (0, h.Z)(["\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  padding-top: 90px;\n"]);
                return y = function() {
                    return n
                }, n
            }

            function b() {
                var n = (0, h.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: ", ";\n"]);
                return b = function() {
                    return n
                }, n
            }

            function j() {
                var n = (0, h.Z)(["\n  display: none;\n\n  ", " {\n    display: block;\n  }\n"]);
                return j = function() {
                    return n
                }, n
            }

            function Z() {
                var n = (0, h.Z)(["\n  width: 100%;\n"]);
                return Z = function() {
                    return n
                }, n
            }

            function C() {
                var n = (0, h.Z)(["\n  width: 100%;\n\n  margin-bottom: ", ";\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  & > * {\n    width: 100%;\n  }\n"]);
                return C = function() {
                    return n
                }, n
            }

            function I() {
                var n = (0, h.Z)(["\n  text-align: center;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 28px;\n  letter-spacing: -0.36px;\n\n  margin-bottom: ", ";\n\n  ", " {\n    font-size: ", ";\n    line-height: ", ";\n    letter-spacing: -0.28px;\n  }\n\n  color: ", ";\n"]);
                return I = function() {
                    return n
                }, n
            }

            function k() {
                var n = (0, h.Z)(["\n  margin-bottom: ", ";\n  height: 82px;\n  width: 240px;\n\n  ", " {\n    height: 44px;\n    width: 130px;\n  }\n"]);
                return k = function() {
                    return n
                }, n
            }

            function P() {
                var n = (0, h.Z)(["\n  text-align: center;\n  font-weight: 400;\n  font-size: ", ";\n  line-height: 28px;\n  letter-spacing: -0.36px;\n\n  margin-bottom: ", ";\n\n  ", " {\n    font-size: ", ";\n    line-height: ", ";\n    letter-spacing: -0.28px;\n  }\n"]);
                return P = function() {
                    return n
                }, n
            }

            function E() {
                var n = (0, h.Z)(["\n  align-items: center;\n\n  max-width: 800px;\n  margin: auto auto ", ";\n  padding: 0 ", ";\n\n  ", " {\n    padding: 0;\n    flex-direction: column;\n  }\n"]);
                return E = function() {
                    return n
                }, n
            }

            function B() {
                var n = (0, h.Z)(["\n  font-weight: 600;\n  font-size: ", ";\n  line-height: ", ";\n  letter-spacing: -0.5px;\n  margin: 0;\n"]);
                return B = function() {
                    return n
                }, n
            }

            function S() {
                var n = (0, h.Z)(["\n  ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  text-align: center;\n  color: ", ";\n  margin-top: ", ";\n\n  @media (max-height: ", ") {\n    margin-top: ", ";\n  }\n\n  @media (max-height: ", ") {\n    margin-top: 0;\n  }\n"]);
                return S = function() {
                    return n
                }, n
            }

            function A() {
                var n = (0, h.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n\n  margin-top: 30px;\n"]);
                return A = function() {
                    return n
                }, n
            }

            function O() {
                var n = (0, h.Z)(["\n  margin: ", " 0 ", " 0;\n  cursor: pointer;\n"]);
                return O = function() {
                    return n
                }, n
            }

            function W() {
                var n = (0, h.Z)(["\n  padding: 72px 0;\n\n  ", " {\n    padding-bottom: 52px;\n  }\n"]);
                return W = function() {
                    return n
                }, n
            }

            function L() {
                var n = (0, h.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);
                return L = function() {
                    return n
                }, n
            }

            function D() {
                var n = (0, h.Z)(["\n  display: flex;\n  justify-content: center;\n"]);
                return D = function() {
                    return n
                }, n
            }

            function N() {
                var n = (0, h.Z)(["\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  text-transform: capitalize;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5.5px;\n  min-width: 4.375rem;\n  padding: 5px 9px;\n  border-radius: ", ";\n  background: linear-gradient(222.25deg, #b200cf 13.23%, #2e5cff 84.65%);\n  cursor: pointer;\n\n  && {\n    color: ", ";\n  }\n  &&:visited,\n  &&:hover,\n  &&:visited:hover {\n    color: ", ";\n  }\n"]);
                return N = function() {
                    return n
                }, n
            }
            var z = m.ZP.div.withConfig({
                    componentId: "sc-582d0a3f-0"
                })(y()),
                M = m.ZP.div.withConfig({
                    componentId: "sc-582d0a3f-1"
                })(b(), g.W0.xxs),
                F = m.ZP.div.withConfig({
                    componentId: "sc-582d0a3f-2"
                })(j(), p.BC.xmedium),
                _ = m.ZP.div.withConfig({
                    componentId: "sc-582d0a3f-3"
                })(Z()),
                Y = m.ZP.div.withConfig({
                    componentId: "sc-582d0a3f-4"
                })(C(), g.W0.md),
                q = m.ZP.div.withConfig({
                    componentId: "sc-582d0a3f-5"
                })(I(), g.W0.lg, p.BC.small, g.JB.displayXL, g.Nv.lg, (function(n) {
                    return n.theme.alphaBlack_50
                })),
                J = (0, m.ZP)(f.A).withConfig({
                    componentId: "sc-582d0a3f-6"
                })(k(), g.W0.lg, p.BC.small),
                V = m.ZP.div.withConfig({
                    componentId: "sc-582d0a3f-7"
                })(P(), g.JB.displayXXL, g.W0.xl, p.BC.small, g.JB.displayXL, g.Nv.lg),
                T = m.ZP.div.withConfig({
                    componentId: "sc-582d0a3f-8"
                })(E(), g.W0.lg, g.W0.lg, p.BC.small),
                U = (m.ZP.span.withConfig({
                    componentId: "sc-582d0a3f-9"
                })(B(), g.JB.body, g.Nv.ml), m.ZP.div.withConfig({
                    componentId: "sc-582d0a3f-10"
                })(S(), (function(n) {
                    return !n.isVisible && "display: none !important;"
                }), (function(n) {
                    return n.theme.text.tertiary
                }), g.W0.xxl, p.eq.xmedium, g.W0.md, p.eq.tablet)),
                X = m.ZP.div.withConfig({
                    componentId: "sc-582d0a3f-11"
                })(A()),
                H = (0, m.ZP)(w).withConfig({
                    componentId: "sc-582d0a3f-12"
                })(O(), g.W0.md, g.W0.lg),
                R = m.ZP.section.withConfig({
                    componentId: "sc-582d0a3f-13"
                })(W(), p.BC.small),
                G = m.ZP.section.withConfig({
                    componentId: "sc-582d0a3f-14"
                })(L()),
                $ = m.ZP.div.withConfig({
                    componentId: "sc-582d0a3f-15"
                })(D()),
                K = (0, m.ZP)(v.e).withConfig({
                    componentId: "sc-582d0a3f-16"
                })(N(), g.Ue.bold, g.JB.caption, g.Nv.md, g.E0.xl, g.$_.grayscale_10, g.$_.grayscale_10),
                Q = t(57407),
                nn = t(6721),
                en = t(8993),
                tn = t(92154),
                rn = t(34033),
                on = t(2507),
                an = t(49804),
                cn = t(52380),
                sn = t(88329),
                un = t(53766),
                ln = t(17962),
                dn = t(69537),
                hn = t(10831),
                fn = t(44463),
                gn = function() {
                    var n = (0, o.j)().isMobileDevice,
                        e = (0, c.Vb)().enableWhatsAppQrLandingPage,
                        t = (0, m.Fg)().darkMode;
                    return {
                        src: n ? "/landing-page/whatsapp-button.png" : "/landing-page/wa-qr-code-".concat(t ? "dark" : "light", "-2.png"),
                        link: "https://wa.me/15854968266",
                        isEnabled: e
                    }
                },
                pn = function() {
                    var n = gn(),
                        e = n.link,
                        t = n.src;
                    return n.isEnabled ? (0, i.jsx)("a", {
                        href: e,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "data-testid": un.t94,
                        children: (0, i.jsx)(a.l, {
                            src: t,
                            width: 120,
                            alt: "whatsapp-button"
                        })
                    }) : null
                },
                mn = t(23552);

            function vn() {
                var n = (0, h.Z)(["\n  width: ", ";\n  margin-top: ", ";\n  border-radius: ", ";\n"]);
                return vn = function() {
                    return n
                }, n
            }

            function xn() {
                var n = (0, h.Z)(["\n  width: 100%;\n  height: 100%;\n  border-radius: ", ";\n"]);
                return xn = function() {
                    return n
                }, n
            }

            function wn() {
                var n = (0, h.Z)(["\n  text-align: center;\n"]);
                return wn = function() {
                    return n
                }, n
            }
            var yn, bn = m.ZP.div.withConfig({
                    componentId: "sc-11dd3680-0"
                })(vn(), "175px", g.W0.xxxl, g.E0.md),
                jn = (0, m.ZP)(a.l).withConfig({
                    componentId: "sc-11dd3680-1"
                })(xn(), g.E0.md),
                Zn = (0, m.ZP)(mn.u).withConfig({
                    componentId: "sc-11dd3680-2"
                })(wn()),
                Cn = function() {
                    var n = gn(),
                        e = n.src,
                        t = n.link;
                    return n.isEnabled ? (0, i.jsx)(bn, {
                        "data-testid": un.t94,
                        children: (0, i.jsx)("a", {
                            href: t,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0, i.jsx)(Zn, {
                                tooltipContent: "Chat with You.com on WhatsApp",
                                placement: "top",
                                children: (0, i.jsx)(jn, {
                                    src: e,
                                    alt: "whatsapp-qr-code"
                                })
                            })
                        })
                    }) : null
                },
                In = t(51484);

            function kn() {
                return kn = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, kn.apply(this, arguments)
            }
            var Pn = function(n) {
                return l.createElement("svg", kn({
                    viewBox: "0 0 16 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), yn || (yn = l.createElement("path", {
                    d: "M16 6.543a.844.844 0 0 0-.271-.624L10.072.27C9.873.081 9.674 0 9.457 0c-.462 0-.814.335-.814.796 0 .227.081.435.235.58l1.918 1.954 2.743 2.507-2.037-.127H.824c-.48 0-.824.344-.824.833 0 .48.344.824.824.824h10.678l2.045-.127-2.75 2.507-1.92 1.954a.82.82 0 0 0-.234.58c0 .461.352.796.814.796.217 0 .407-.082.597-.254l5.675-5.665A.839.839 0 0 0 16 6.543Z",
                    fill: "currentColor"
                })))
            };

            function En() {
                var n = (0, h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);
                return En = function() {
                    return n
                }, n
            }

            function Bn() {
                var n = (0, h.Z)(["\n  margin-right: ", ";\n"]);
                return Bn = function() {
                    return n
                }, n
            }

            function Sn() {
                var n = (0, h.Z)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  position: relative;\n\n  padding: ", " ", " ", " ", ";\n\n  border: 1px solid\n    ", ";\n  border-radius: ", ";\n\n  font-weight: 500;\n  font-size: ", ";\n  line-height: 20px;\n  letter-spacing: -0.15px;\n\n  color: ", ";\n"]);
                return Sn = function() {
                    return n
                }, n
            }

            function An() {
                var n = (0, h.Z)(["\n  position: absolute;\n  width: 8px;\n  height: 6.5px;\n  right: 3px;\n  top: 4px;\n\n  transform: rotate(-45deg);\n\n  color: ", ";\n"]);
                return An = function() {
                    return n
                }, n
            }
            var On = m.ZP.div.withConfig({
                    componentId: "sc-95af3542-0"
                })(En()),
                Wn = m.ZP.div.withConfig({
                    componentId: "sc-95af3542-1"
                })(Bn(), g.W0.sm),
                Ln = m.ZP.div.withConfig({
                    componentId: "sc-95af3542-2"
                })(Sn(), g.W0.xxs, g.W0.md, g.W0.xxs, g.W0.sm, (function(n) {
                    var e = n.theme;
                    return e.darkMode ? e.grayscale_60 : e.grayscale_30
                }), g.E0.xs, g.JB.small, (function(n) {
                    return n.theme.text.primary
                })),
                Dn = (0, m.ZP)(Pn).withConfig({
                    componentId: "sc-95af3542-3"
                })(An(), (function(n) {
                    return n.theme.text.primary
                })),
                Nn = function(n) {
                    var e = n.exampleQueries,
                        t = n.tbm;
                    return e.length ? (0, i.jsx)(On, {
                        "data-testid": un.v8e,
                        children: e.map((function(n) {
                            return (0, i.jsx)(Wn, {
                                children: (0, i.jsx)(v.e, {
                                    href: (0, In.b)({
                                        query: n,
                                        fromSearchBar: !0,
                                        tbm: t
                                    }),
                                    isInternal: !1,
                                    children: (0, i.jsxs)(Ln, {
                                        children: [n, (0, i.jsx)(Dn, {})]
                                    })
                                })
                            }, n)
                        }))
                    }) : null
                },
                zn = t(26042),
                Mn = t(69396),
                Fn = t(52118),
                _n = function(n) {
                    var e = n + "_count",
                        t = (0, l.useState)(Number(localStorage.getItem(e) || 0)),
                        r = t[0],
                        i = t[1];
                    return {
                        count: r,
                        increaseCount: function() {
                            var n;
                            i(r + 1), n = r + 1, localStorage.setItem(e, "".concat(n))
                        }
                    }
                },
                Yn = t(31798),
                qn = t(50210),
                Jn = t(6917),
                Vn = t(88829),
                Tn = t(15985),
                Un = function(n) {
                    var e = (0, Jn.t)(),
                        t = (0, d.sJ)(Vn.F),
                        r = (0, Fn.P)().extensionUrl;
                    return (0, i.jsx)(v.e, {
                        href: r,
                        invokeActionOnClick: function() {
                            return function(n, e) {
                                (0, dn.qP)(Tn.j.ClickMakeDefault, {}, e, n)
                            }(e, t)
                        },
                        children: n.children
                    })
                },
                Xn = {
                    main: {
                        title: "Get AI answers instantly",
                        imageSrc: "/images/nudge-customize-search.png",
                        description: "Search, chat, and create with AI.",
                        descriptionLine2: "Set You.com as your URL bar default."
                    }
                },
                Hn = t(47568),
                Rn = t(10253),
                Gn = t(97582),
                $n = t(89947),
                Kn = t(85586),
                Qn = t(79468),
                ne = function() {
                    var n = (0, Hn.Z)((function() {
                        var n, e, t;
                        return (0, Gn.__generator)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, Promise.all([(0, Qn.YJ)(), (0, Qn.LB)()])];
                                case 1:
                                    return n = Rn.Z.apply(void 0, [r.sent(), 2]), e = n[0], t = n[1], [2, !(!t && !e.isMobile && (e.isChromium || e.isFirefox || e.isIEedge))];
                                case 2:
                                    return r.sent(), [2, !1];
                                case 3:
                                    return [2]
                            }
                        }))
                    }));
                    return function() {
                        return n.apply(this, arguments)
                    }
                }(),
                ee = u()((function() {
                    return t.e(9407).then(t.bind(t, 49407)).then((function(n) {
                        return n.Nudge
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [49407]
                        }
                    }
                }),
                te = function() {
                    var n = _n(Yn.oU),
                        e = n.count,
                        t = n.increaseCount,
                        r = (0, Fn.P)().browserName,
                        o = function() {
                            var n = (0, $n.x)(),
                                e = (0, l.useMemo)((function() {
                                    return ne()
                                }), []);
                            return (0, Kn.g)({
                                localStorageKey: Yn.Ks,
                                autoMarkAsAlreadySeen: e,
                                nudgeLimiter: n
                            })
                        }(),
                        a = 3 === e,
                        s = function(n) {
                            var e = n.flagKey,
                                t = n.variants,
                                r = n.defaultVariantType,
                                i = (0, c.Vb)()[e];
                            return t[Object.keys(t).includes(i) ? i : r]
                        }({
                            flagKey: "abNudgesChromeMakeDefault",
                            variants: Xn,
                            defaultVariantType: "main"
                        });
                    if ((0, l.useEffect)((function() {
                            t()
                        }), []), !o.isNudgeReady) return null;
                    var u = o.isNudgeVisible,
                        d = o.nudgeProps;
                    return u && a ? (0, i.jsx)(ee, (0, zn.Z)((0, Mn.Z)((0, zn.Z)({}, s), {
                        ctaButton: (0, i.jsx)(Un, {
                            children: (0, i.jsx)(qn.d, {
                                onCtaButtonClicked: d.onCtaButtonClicked,
                                children: "Add to ".concat(r, " \u2013 it\u2019s free")
                            })
                        }),
                        nudgeIdentifier: "Add to ".concat(r, " Nudge")
                    }), d)) : null
                },
                re = t(55628);

            function ie() {
                var n = (0, h.Z)(["\n  top: calc(2 * ", ");\n  right: ", ";\n\n  ", " {\n    ", "\n  }\n"]);
                return ie = function() {
                    return n
                }, n
            }
            var oe = (0, m.ZP)(re.n7).withConfig({
                    componentId: "sc-cdfcad2f-0"
                })(ie(), g.W0.xxl, g.W0.xl, re.Eu, re.Lm),
                ae = function() {
                    return (0, i.jsx)(oe, {
                        children: (0, i.jsx)(te, {})
                    })
                };

            function ce() {
                var n = (0, h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  padding: ", " ", " ", " ", ";\n\n  background: transparent;\n\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  border-radius: ", ";\n\n  font-weight: 600;\n  font-size: ", ";\n  line-height: 20px;\n  letter-spacing: -0.15px;\n\n  color: ", ";\n"]);
                return ce = function() {
                    return n
                }, n
            }
            var se, ue, le = m.ZP.div.withConfig({
                    componentId: "sc-ec907ac7-0"
                })(ce(), g.W0.xxs, g.W0.xl, g.W0.xxs, g.W0.xl, (function(n) {
                    return n.theme.black
                }), g.E0.xs, g.JB.body, (function(n) {
                    return n.theme.black
                })),
                de = function() {
                    var n = (0, Jn.t)(),
                        e = (0, d.sJ)(Vn.F);
                    return (0, i.jsx)(v.e, {
                        href: "https://you.com/",
                        invokeActionOnClick: function() {
                            return function(n, e) {
                                (0, dn.qP)(Tn.j.ClickMakeDefault, {}, e, n)
                            }(n, e)
                        },
                        "data-eventactionname": "switch_to_you",
                        children: (0, i.jsx)(le, {
                            children: "Switch to You.com"
                        })
                    })
                },
                he = t(14924);

            function fe() {
                return fe = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, fe.apply(this, arguments)
            }
            var ge, pe, me = function(n) {
                return l.createElement("svg", fe({
                    width: 32,
                    height: 32,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), se || (se = l.createElement("path", {
                    d: "M16 2.667C8.646 2.667 2.665 8.646 2.665 16c0 7.352 5.981 13.333 13.333 13.333S29.333 23.352 29.333 16 23.35 2.666 15.999 2.666Zm0 24C10.117 26.666 5.332 21.88 5.332 16c0-5.882 4.785-10.667 10.666-10.667 5.882 0 10.667 4.785 10.667 10.667 0 5.881-4.785 10.666-10.667 10.666Z",
                    fill: "currentColor"
                })), ue || (ue = l.createElement("path", {
                    d: "M17.333 9.334h-2.667v7.218l4.39 4.39 1.886-1.884-3.61-3.61V9.334Z",
                    fill: "currentColor"
                })))
            };

            function ve() {
                return ve = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, ve.apply(this, arguments)
            }
            var xe, we = function(n) {
                return l.createElement("svg", ve({
                    width: 32,
                    height: 32,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), ge || (ge = l.createElement("path", {
                    d: "M26.666 4H5.334a2.67 2.67 0 0 0-2.667 2.667v18.666A2.67 2.67 0 0 0 5.333 28h21.334a2.67 2.67 0 0 0 2.666-2.667V6.667A2.67 2.67 0 0 0 26.667 4ZM5.334 25.333v-16h21.334l.002 16H5.333Z",
                    fill: "#8B8E8F"
                })), pe || (pe = l.createElement("path", {
                    d: "m12.39 12.39-4.942 4.943 4.943 4.943 1.885-1.885-3.057-3.058 3.057-3.057-1.885-1.885Zm7.22 0-1.886 1.886 3.058 3.057-3.058 3.058 1.886 1.885 4.942-4.943-4.942-4.942Z",
                    fill: "#8B8E8F"
                })))
            };

            function ye() {
                return ye = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, ye.apply(this, arguments)
            }
            var be, je, Ze = function(n) {
                return l.createElement("svg", ye({
                    width: 32,
                    height: 32,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), xe || (xe = l.createElement("path", {
                    d: "M15.317 29.006c.392.209.884.207 1.276-.002 10.683-5.739 11.441-16.95 11.432-20.139a1.317 1.317 0 0 0-.795-1.204L16.497 2.907a1.34 1.34 0 0 0-1.084.001L4.754 7.663a1.32 1.32 0 0 0-.79 1.19c-.044 3.171.594 14.407 11.353 20.152Zm-3.752-15.282 3.057 3.058 5.724-5.725 1.886 1.886-7.61 7.61-4.942-4.944 1.885-1.885Z",
                    fill: "currentColor"
                })))
            };

            function Ce() {
                return Ce = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, Ce.apply(this, arguments)
            }
            var Ie, ke = function(n) {
                return l.createElement("svg", Ce({
                    width: 38,
                    height: 32,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), be || (be = l.createElement("path", {
                    d: "m.5 10.488 17.32-6.323a2.717 2.717 0 0 1 1.863 0l17.32 6.323c.665.245.665 1.187 0 1.43l-17.32 6.324c-.602.22-1.262.22-1.864 0L3.28 12.934v6.258a1.395 1.395 0 0 1 .124 2.555l.503 2.673a1.143 1.143 0 0 1-2 .94 1.143 1.143 0 0 1-.243-.94l.504-2.674a1.394 1.394 0 0 1 .125-2.554v-6.619L.5 11.92c-.665-.245-.665-1.188 0-1.431Z",
                    fill: "#8B8E8F"
                })), je || (je = l.createElement("path", {
                    d: "m28.977 16.22-8.852 3.231a4.01 4.01 0 0 1-2.749 0l-8.436-3.08c-.661 1.138-1.384 3.026-1.537 5.957a1.194 1.194 0 0 0 1.02 1.24c2.815.408 6.804 2.154 9.14 3.942a2.365 2.365 0 0 0 2.882 0c2.335-1.787 6.323-3.534 9.139-3.942a1.193 1.193 0 0 0 1.02-1.24c-.16-3.065-.944-4.988-1.627-6.108Z",
                    fill: "#8B8E8F"
                })))
            };

            function Pe() {
                return Pe = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, Pe.apply(this, arguments)
            }
            var Ee, Be = function(n) {
                return l.createElement("svg", Pe({
                    width: 32,
                    height: 32,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), Ie || (Ie = l.createElement("path", {
                    d: "M4.172 20.262c0 1.232.23 2.352.691 3.36.469 1.002 1.1 1.804 1.895 2.408a4.404 4.404 0 0 0 2.717.905h2.002c-1.049-.818-1.827-1.81-2.336-2.979-.508-1.168-.75-2.435-.727-3.801.008-.977.115-1.867.322-2.67a11.363 11.363 0 0 1 1.87-3.92H9.023c-.914 0-1.736.298-2.467.894-.73.588-1.31 1.39-1.74 2.407-.429 1.017-.643 2.149-.643 3.396Zm5.946-.083c-.024 1.12.175 2.16.596 3.122a7.192 7.192 0 0 0 1.86 2.49c.81.707 1.783 1.26 2.919 1.657 1.136.397 2.403.6 3.801.608l1.633.012c.77.008 1.442-.012 2.014-.06a8.987 8.987 0 0 0 1.382-.203c.516-.135.969-.373 1.358-.715.39-.333.584-.79.584-1.37a1.94 1.94 0 0 0-.262-1.037c-.08-.143-.06-.238.06-.286.389-.174.71-.437.965-.786.262-.35.393-.763.393-1.24 0-.532-.135-.985-.405-1.358-.111-.151-.08-.278.095-.381a1.9 1.9 0 0 0 .656-.751 2.37 2.37 0 0 0 .25-1.096c0-.279-.044-.553-.131-.823a1.555 1.555 0 0 0-.346-.643c-.127-.127-.119-.254.024-.381.199-.167.35-.39.453-.668.103-.278.155-.584.155-.917a2.14 2.14 0 0 0-.644-1.573c-.42-.437-.945-.656-1.573-.656h-4.23c-.5 0-.902-.119-1.204-.357a1.153 1.153 0 0 1-.452-.954c0-.397.103-.862.31-1.394.206-.54.44-1.116.702-1.728.263-.612.493-1.223.692-1.835.206-.612.31-1.184.31-1.716 0-.596-.171-1.06-.513-1.394-.334-.342-.759-.513-1.275-.513-.437 0-.794.14-1.073.417-.27.27-.532.652-.786 1.144a31.801 31.801 0 0 1-2.967 4.743c-1.089 1.422-2.09 2.733-3.003 3.933a15.35 15.35 0 0 0-1.311 2.073 9.277 9.277 0 0 0-.775 2.121 12.041 12.041 0 0 0-.262 2.515Z",
                    fill: "#8B8E8F"
                })))
            };

            function Se() {
                return Se = Object.assign ? Object.assign.bind() : function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }, Se.apply(this, arguments)
            }
            var Ae = function(n) {
                return l.createElement("svg", Se({
                    width: 32,
                    height: 32,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, n), Ee || (Ee = l.createElement("path", {
                    d: "M5.333 14.667h8a1.333 1.333 0 0 0 1.334-1.334v-8A1.333 1.333 0 0 0 13.333 4h-8A1.333 1.333 0 0 0 4 5.333v8a1.333 1.333 0 0 0 1.333 1.334Zm13.334 0h8A1.333 1.333 0 0 0 28 13.333v-8A1.334 1.334 0 0 0 26.667 4h-8a1.333 1.333 0 0 0-1.334 1.333v8a1.333 1.333 0 0 0 1.334 1.334ZM5.333 28h8a1.333 1.333 0 0 0 1.334-1.333v-8a1.333 1.333 0 0 0-1.334-1.334h-8A1.333 1.333 0 0 0 4 18.667v8A1.333 1.333 0 0 0 5.333 28Zm13.334 0h8A1.334 1.334 0 0 0 28 26.667v-8a1.333 1.333 0 0 0-1.333-1.334h-8a1.333 1.333 0 0 0-1.334 1.334v8A1.333 1.333 0 0 0 18.667 28Z",
                    fill: "currentColor"
                })))
            };

            function Oe() {
                var n = (0, h.Z)(["\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: 2.5rem;\n  letter-spacing: -0.48px;\n  text-align: center;\n\n  margin-bottom: 1.75rem;\n\n  color: ", ";\n\n  @media screen and (max-width: ", ") {\n    font-size: ", ";\n    line-height: 1.75rem;\n    letter-spacing: -0.36px;\n  }\n"]);
                return Oe = function() {
                    return n
                }, n
            }

            function We() {
                var n = (0, h.Z)(["\n  display: flex;\n  justify-content: center;\n\n  @media screen and (max-width: ", ") {\n    flex-direction: column;\n    align-items: initial;\n  }\n"]);
                return We = function() {
                    return n
                }, n
            }

            function Le() {
                var n = (0, h.Z)(['\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n\n  // According to Figma, darkMode should have "Grayscale/ Gray 90",\n  // however current ui-kit implementation has "#eeeeee" instead of "#1C1C1E"\n  background: ', ";\n  border: ", ";\n  border-radius: ", ";\n  overflow: hidden;\n\n  text-align: center;\n\n  @media screen and (min-width: ", ") {\n    width: 30%;\n\n    margin: 0 ", ";\n  }\n\n  @media screen and (max-width: ", ") {\n    width: 100%;\n\n    margin-bottom: ", ";\n  }\n"]);
                return Le = function() {
                    return n
                }, n
            }

            function De() {
                var n = (0, h.Z)(["\n  @media screen and (min-width: ", ") {\n    padding: ", ";\n  }\n\n  @media screen and (max-width: ", ") {\n    padding: ", ";\n  }\n"]);
                return De = function() {
                    return n
                }, n
            }

            function Ne() {
                var n = (0, h.Z)(["\n  margin-bottom: ", ";\n\n  svg {\n    color: ", ";\n  }\n\n  @media screen and (max-width: ", ") {\n    margin-bottom: ", ";\n  }\n"]);
                return Ne = function() {
                    return n
                }, n
            }

            function ze() {
                var n = (0, h.Z)(["\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: 1.75rem;\n  letter-spacing: -0.36px;\n  margin-bottom: 0.375rem;\n\n  @media screen and (max-width: ", ") {\n    font-weight: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    letter-spacing: -0.28px;\n    margin-bottom: ", ";\n  }\n\n  color: ", ";\n"]);
                return ze = function() {
                    return n
                }, n
            }

            function Me() {
                var n = (0, h.Z)(["\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  letter-spacing: -0.28px;\n\n  color: ", ";\n\n  @media screen and (max-width: ", ") {\n    font-weight: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    letter-spacing: -0.15px;\n  }\n"]);
                return Me = function() {
                    return n
                }, n
            }

            function Fe() {
                var n = (0, h.Z)(["\n  width: 100%;\n"]);
                return Fe = function() {
                    return n
                }, n
            }
            var _e, Ye = m.ZP.div.withConfig({
                    componentId: "sc-b51eb8cc-0"
                })(Oe(), g.Ue.semiBold, g.JB.displayXXXL, (function(n) {
                    return n.theme.black
                }), p.eq.small, g.JB.displayXXL),
                qe = m.ZP.div.withConfig({
                    componentId: "sc-b51eb8cc-1"
                })(We(), p.eq.small),
                Je = m.ZP.div.withConfig({
                    componentId: "sc-b51eb8cc-2"
                })(Le(), (function(n) {
                    return n.theme.darkMode ? "#1C1C1E" : g.$_.white
                }), (function(n) {
                    return n.theme.darkMode ? "" : "1px solid rgba(22, 22, 117, 0.15)"
                }), g.E0.md, p.eq.small, g.W0.s, p.eq.small, g.W0.ml),
                Ve = m.ZP.div.withConfig({
                    componentId: "sc-b51eb8cc-3"
                })(De(), p.eq.small, g.W0.lg, p.eq.small, g.W0.ml),
                Te = m.ZP.div.withConfig({
                    componentId: "sc-b51eb8cc-4"
                })(Ne(), g.W0.md, (function(n) {
                    return n.theme.text.tertiary
                }), p.eq.small, g.W0.xs),
                Ue = m.ZP.div.withConfig({
                    componentId: "sc-b51eb8cc-5"
                })(ze(), g.Ue.semiBold, g.JB.displayXXL, p.eq.small, g.Ue.semiBold, g.JB.displayXL, g.Nv.lg, g.W0.xxs, (function(n) {
                    return n.theme.black
                })),
                Xe = m.ZP.div.withConfig({
                    componentId: "sc-b51eb8cc-6"
                })(Me(), g.Ue.semiBold, g.JB.bodyLarge, g.Nv.ml, (function(n) {
                    return n.theme.text.secondary
                }), p.eq.small, g.Ue.semiBold, g.JB.body, g.Nv.ml),
                He = (0, m.ZP)(a.l).withConfig({
                    componentId: "sc-b51eb8cc-7"
                })(Fe()),
                Re = [{
                    IconComponent: me,
                    header: "Your Time",
                    content: "The multi-dimensional interface with horizontal and vertical scrolling lets you discover more in less time.",
                    image: "/shared/landing-page/why-you-1-light.png"
                }, {
                    IconComponent: Ae,
                    header: "Your Sources",
                    content: "Personalize your search with 150+ apps like StackOverflow, Medium, and Twitter.",
                    image: "/shared/landing-page/why-you-2-light.png"
                }, {
                    IconComponent: Ze,
                    header: "Your Privacy",
                    content: "Protect your data while you browse the web. A search engine free of tracking and invasive ads.",
                    image: "/shared/landing-page/why-you-privacy-light.png"
                }],
                Ge = [{
                    IconComponent: we,
                    header: "Code. Complete.",
                    content: "Search through your favorite sources and use AI to write code, faster. For free.",
                    image: "/shared/landing-page/why-you-code-1-dark.png"
                }, {
                    IconComponent: Ae,
                    header: "Search less, code more.",
                    content: "Customize your search with 150+ apps like StackOverflow, Medium, and Twitter.",
                    image: "/shared/landing-page/why-you-code-2-dark.png"
                }, {
                    IconComponent: Ze,
                    header: "Your Privacy",
                    content: "Protect your data while you browse the web. A search engine free of tracking and invasive ads.",
                    image: "/shared/landing-page/why-you-privacy-dark.png"
                }],
                $e = [{
                    IconComponent: ke,
                    header: "Student Apps",
                    content: "Search through your favorite sources and apps in one place to find the right answer faster.",
                    image: "/shared/landing-page/why-you-study-1-light.png"
                }, {
                    IconComponent: Ae,
                    header: "Learn with You.com",
                    content: "Find trustworthy answers to your questions to reach your goals and improve your grades.",
                    image: "/shared/landing-page/why-you-study-2-light.png"
                }, {
                    IconComponent: Ze,
                    header: "Your Privacy",
                    content: "Protect your data while you browse the web. A search engine free of tracking and invasive ads.",
                    image: "/shared/landing-page/why-you-privacy-light.png"
                }],
                Ke = [{
                    IconComponent: Be,
                    header: "Social Media Apps",
                    content: "Search your favorite social media apps in one place and find anything you\u2019re looking for faster.",
                    image: "/shared/landing-page/why-social-1-light.png"
                }, {
                    IconComponent: Ae,
                    header: "Content For You",
                    content: "See what people are saying on social networks everywhere, right in your browser. No need to install anything.",
                    image: "/shared/landing-page/why-social-2-light.png"
                }, {
                    IconComponent: Ze,
                    header: "Your Privacy",
                    content: "Protect your data while you browse the web. A search engine free of tracking and invasive ads.",
                    image: "/shared/landing-page/why-you-privacy-light.png"
                }],
                Qe = (_e = {}, (0, he.Z)(_e, on.ID.default, Re), (0, he.Z)(_e, on.ID.youCode, Ge), (0, he.Z)(_e, on.ID.youStudy, $e), (0, he.Z)(_e, on.ID.social, Ke), _e),
                nt = function(n) {
                    switch (n) {
                        case on.ID.youStudy:
                            return "Why YouStudy?";
                        case on.ID.social:
                            return "Why YouSocial?";
                        default:
                            return "Why You.com?"
                    }
                },
                et = function(n) {
                    var e = n.type,
                        t = Qe[e];
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(Ye, {
                            children: nt(e)
                        }), (0, i.jsx)(qe, {
                            children: t.map((function(n) {
                                return (0, i.jsxs)(Je, {
                                    children: [(0, i.jsxs)(Ve, {
                                        children: [(0, i.jsx)(Te, {
                                            children: (0, i.jsx)(n.IconComponent, {})
                                        }), (0, i.jsx)(Ue, {
                                            children: n.header
                                        }), (0, i.jsx)(Xe, {
                                            children: n.content
                                        })]
                                    }), (0, i.jsx)(He, {
                                        src: n.image,
                                        alt: n.header,
                                        loading: "lazy"
                                    })]
                                }, n.header)
                            }))
                        })]
                    })
                },
                tt = "Go Pro",
                rt = u()((function() {
                    return t.e(9707).then(t.bind(t, 19707))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [19707]
                        }
                    }
                }),
                it = function(n) {
                    switch (n) {
                        case an.YG.YouStudy:
                            return "The search engine for students";
                        case an.YG.Social:
                            return "The search engine for social media";
                        default:
                            return on.Pq
                    }
                },
                ot = function(n) {
                    var e = n.isExamplesSectionEnabled,
                        t = n.exampleQueries,
                        r = n.homePageType,
                        s = void 0 === r ? on.ID.default : r,
                        u = n.isAddBrowserExtensionSectionEnabled,
                        h = n.tbm,
                        f = (0, o.j)().isMobileDevice,
                        g = (0, tn.O)(),
                        p = g.isYouProSubscriber,
                        m = g.isLoading,
                        v = (0, dn.lv)().initializeABTest,
                        x = (0, d.Zl)(rn.K),
                        w = (0, d.Zl)(rn.b),
                        y = (0, c.Vb)(),
                        b = y.abYouPay,
                        j = y.abYouProButtonRedirectionVersion2,
                        Z = "soft" === b,
                        C = Z && !p && !m,
                        I = "treatment" === j ? sn.Ng : cn.y4,
                        k = s === on.ID.youCode,
                        P = s === on.ID.youStudy,
                        E = s === on.ID.social,
                        B = (0, l.useRef)(null);
                    return (0, l.useEffect)((function() {
                        x(null), w(null)
                    }), [x, w]), (0, i.jsxs)(nn.Z, {
                        hideTopBar: !0,
                        hideAppButtons: P || E,
                        shouldShowSignUpForFree: P || E,
                        "data-testid": un.uhf,
                        isLandingPage: !0,
                        children: [(0, i.jsx)(en.D, {
                            baseHeight: {
                                desktop: 150,
                                mobile: 150
                            },
                            type: s
                        }), (0, i.jsx)(ae, {}), (0, i.jsxs)(z, {
                            "data-testid": un.bMf,
                            children: [(0, i.jsx)("div", {}), (0, i.jsxs)(_, {
                                children: [k && (0, i.jsx)(q, {
                                    children: "// code mode //"
                                }), (0, i.jsxs)(Y, {
                                    children: [(0, i.jsx)(J, {}), (0, i.jsx)(V, {
                                        children: it(s)
                                    }), (0, i.jsx)(T, {
                                        children: (0, i.jsx)(fn.Z, {
                                            initialFocus: !0,
                                            isOpenBelow: !0,
                                            disableRouter: !0,
                                            homePageType: s,
                                            shouldUseSearchIcon: !0,
                                            placeholder: "Start typing to search..."
                                        })
                                    }), C && (0, i.jsx)($, {
                                        children: (0, i.jsxs)(K, {
                                            onClick: function() {
                                                "string" === typeof j && v({
                                                    abYouProButtonRedirectionVersion2: j
                                                })
                                            },
                                            href: I,
                                            "data-eventtiletitle": (0, ln.X)(tt),
                                            isInternal: !0,
                                            children: [(0, i.jsx)("span", {
                                                translate: "no",
                                                children: tt
                                            }), (0, i.jsx)(a.l, {
                                                src: "/shared/Icon-lightning.svg",
                                                height: "16px",
                                                width: "7px"
                                            })]
                                        })
                                    }), p && Z && (0, i.jsx)(G, {
                                        children: (0, i.jsx)(rt, {})
                                    }), !f && (0, i.jsx)(Cn, {}), (0, i.jsx)(U, {
                                        isVisible: e,
                                        children: (0, i.jsx)(Nn, {
                                            exampleQueries: t,
                                            tbm: h
                                        })
                                    }), s !== on.ID.default && (0, i.jsx)(X, {
                                        children: (0, i.jsx)(de, {})
                                    })]
                                })]
                            }), (0, i.jsxs)(M, {
                                children: [f && (0, i.jsx)(pn, {}), (0, i.jsx)(F, {
                                    children: (0, i.jsx)(hn.c, {
                                        buttonLocation: Q.oj.LandingPage,
                                        isAddBrowserExtensionSectionEnabled: u
                                    })
                                })]
                            }), (0, i.jsx)(H, {
                                "data-testid": un.Y5b,
                                height: "19px",
                                width: "72px",
                                onClick: function() {
                                    var n;
                                    null === B || void 0 === B || null === (n = B.current) || void 0 === n || n.scrollIntoView({
                                        behavior: "smooth"
                                    })
                                }
                            })]
                        }), (0, i.jsx)(R, {
                            "data-testid": un.HQe,
                            ref: B,
                            children: (0, i.jsx)(et, {
                                type: s
                            })
                        })]
                    })
                }
        },
        70545: function(n, e, t) {
            t.d(e, {
                I: function() {
                    return u
                }
            });
            var r = t(67294),
                i = t(4480),
                o = t(6917),
                a = t(88829),
                c = t(69537),
                s = t(45894),
                u = function(n) {
                    var e = n.eventName,
                        t = (0, o.t)(),
                        u = (0, i.sJ)(a.F);
                    (0, r.useEffect)((function() {
                        if (null !== t) {
                            var n = (0, s.Ln)(window.location.href),
                                r = document.referrer;
                            (0, c.qP)(e, {
                                utmCodes: n,
                                referrer: r
                            }, u, t)
                        }
                    }), [t])
                }
        },
        45894: function(n, e, t) {
            t.d(e, {
                Ln: function() {
                    return d
                },
                Qw: function() {
                    return u
                },
                S$: function() {
                    return c
                },
                Um: function() {
                    return l
                },
                V2: function() {
                    return h
                },
                hr: function() {
                    return a
                },
                vV: function() {
                    return o
                },
                z8: function() {
                    return s
                }
            });
            var r = t(10253),
                i = (t(80129), t(98723), new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)),
                o = function(n) {
                    return i.test(n)
                },
                a = function(n) {
                    return n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
                },
                c = function(n, e, t) {
                    return n.slice(0, e > 0 ? e : n.length).map(t)
                },
                s = function(n) {
                    return n < 1e3 ? n : n >= 1e3 && n < 1e6 ? Number((n / 1e3).toFixed(1)) + "K" : n >= 1e6 && n < 1e9 ? Number((n / 1e6).toFixed(1)) + "M" : n >= 1e9 && n < 1e12 ? Number((n / 1e9).toFixed(1)) + "B" : n >= 1e12 ? Number((n / 1e12).toFixed(1)) + "T" : void 0
                },
                u = function(n, e, t, r) {
                    var i = Array.isArray(n) ? n : [];
                    if (t) {
                        var o = null === i || void 0 === i ? void 0 : i.map((function(n) {
                            return r ? r(n[t]) : n[t]
                        }));
                        i = i.concat(null === e || void 0 === e ? void 0 : e.filter((function(n) {
                            return !o.includes(r ? r(n[t]) : n[t])
                        })))
                    } else i = i.concat(e);
                    return i
                },
                l = function(n, e, t) {
                    return t.current[e] = n
                },
                d = function(n) {
                    var e = ["utm_campaign", "utm_source", "utm_medium", "utm_content", "utm_term"],
                        t = new URLSearchParams(n.split("?")[1]),
                        i = Object.fromEntries(t.entries());
                    return Object.fromEntries(Object.entries(i).filter((function(n) {
                        var t = (0, r.Z)(n, 1)[0];
                        return e.includes(t)
                    })))
                },
                h = function(n) {
                    return {
                        data: n,
                        isLoading: !1,
                        hasResults: (null === n || void 0 === n ? void 0 : n.length) > 0
                    }
                }
        },
        51484: function(n, e, t) {
            t.d(e, {
                b: function() {
                    return r
                }
            });
            var r = function(n) {
                var e = n.query,
                    t = n.fromSearchBar,
                    r = n.tbm;
                return function(n, e) {
                    var t = e ? function(n) {
                        return n.filter((function(n) {
                            return n
                        })).join("&")
                    }(e) : void 0;
                    return t ? "".concat(n, "?").concat(t) : n
                }("/search", [e ? "q=".concat(encodeURIComponent(e)) : void 0, t ? "fromSearchBar=true" : void 0, r ? "tbm=".concat(r) : void 0])
            }
        }
    }
]);