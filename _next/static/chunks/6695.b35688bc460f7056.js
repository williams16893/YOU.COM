"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6695, 2523], {
        2523: function(n, t, e) {
            e.r(t), e.d(t, {
                YouChatHistory: function() {
                    return m
                }
            });
            var r = e(29815),
                o = e(85893),
                i = e(31052),
                a = e(10646),
                c = e(5152),
                u = e.n(c),
                s = e(3546),
                l = e(53766),
                d = e(26042),
                f = e(77139),
                h = e(331),
                p = u()((function() {
                    return e.e(4013).then(e.bind(e, 44013)).then((function(n) {
                        return n.YouChatHistoryButtonElement
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [44013]
                        }
                    }
                }),
                g = function(n) {
                    var t = n.hiddenElements,
                        e = void 0 === t ? [] : t,
                        r = (0, f.B)({
                            hiddenElements: e
                        }).menuItems;
                    return (0, o.jsx)(h.ny, {
                        children: r.map((function(n) {
                            return (0, o.jsx)(h.q2, {
                                isButtonPanel: !0,
                                onClick: n.onClick,
                                "data-eventactiontitle": n.text,
                                "data-eventactionname": n.actionName,
                                children: (0, o.jsx)(p, (0, d.Z)({}, n))
                            }, n.testId)
                        }))
                    })
                },
                v = e(88974),
                b = u()((function() {
                    return e.e(9251).then(e.bind(e, 49251)).then((function(n) {
                        return n.YouChatHistoryList
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [49251]
                        }
                    }
                }),
                m = function(n) {
                    var t = n.hiddenElements,
                        e = void 0 === t ? [] : t,
                        c = (0, i.j)(),
                        u = c.isLargeDevice,
                        d = c.isXLargeDevice,
                        f = (0, s.E)().isSignedInToYDC,
                        p = (0, a.Vb)(),
                        m = p.usePermChatHistory,
                        y = p.useChatHistoryCache,
                        w = "treatment" === m && "treatment" === y,
                        x = f && w && !(u || d);
                    return (0, o.jsxs)(h.W2, {
                        "data-testid": l.RGg,
                        children: [x && (0, o.jsx)(b, {}), (0, o.jsx)(g, {
                            hiddenElements: w ? e : [v.G.History].concat((0, r.Z)(e))
                        })]
                    })
                }
        },
        331: function(n, t, e) {
            e.d(t, {
                JD: function() {
                    return k
                },
                W2: function() {
                    return y
                },
                WV: function() {
                    return C
                },
                ke: function() {
                    return I
                },
                ny: function() {
                    return w
                },
                q2: function() {
                    return x
                },
                qM: function() {
                    return Z
                }
            });
            var r = e(7297),
                o = e(23376),
                i = e(57698),
                a = e(23552),
                c = e(9346),
                u = e(52015);

            function s() {
                var n = (0, r.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ", ";\n  margin: 0 ", ";\n"]);
                return s = function() {
                    return n
                }, n
            }

            function l() {
                var n = (0, r.Z)(["\n  display: flex;\n  flex-direction: column;\n  list-style-type: none;\n  margin: 0;\n  padding: ", " 0 0;\n"]);
                return l = function() {
                    return n
                }, n
            }

            function d() {
                var n = (0, r.Z)(["\n      height: 38px;\n      border-bottom: 1px solid transparent !important;\n    "]);
                return d = function() {
                    return n
                }, n
            }

            function f() {
                var n = (0, r.Z)(["\n  align-items: center;\n  display: flex;\n  gap: ", ";\n  height: 44px;\n  overflow: visible;\n  padding: 0 ", ";\n  cursor: pointer !important;\n\n  svg {\n    min-width: ", ";\n  }\n\n  ", ";\n"]);
                return f = function() {
                    return n
                }, n
            }

            function h() {
                var n = (0, r.Z)(["\n  display: none;\n  background-color: ", ";\n  opacity: 0.5;\n  margin-left: calc(", " + ", ");\n  height: 1px;\n  width: 100%;\n\n  ", " {\n    display: block;\n  }\n"]);
                return h = function() {
                    return n
                }, n
            }

            function p() {
                var n = (0, r.Z)(["\n      color: ", ";\n    "]);
                return p = function() {
                    return n
                }, n
            }

            function g() {
                var n = (0, r.Z)(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  letter-spacing: -0.15px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  ", ";\n"]);
                return g = function() {
                    return n
                }, n
            }

            function v() {
                var n = (0, r.Z)(["\n  position: relative;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  &:hover {\n    background-color: ", ";\n  }\n  white-space: nowrap;\n\n  ", " {\n    &::after {\n      left: 1px;\n    }\n  }\n"]);
                return v = function() {
                    return n
                }, n
            }

            function b() {
                var n = (0, r.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]);
                return b = function() {
                    return n
                }, n
            }
            var m = "19px",
                y = u.ZP.div.withConfig({
                    componentId: "sc-6ceaf034-0"
                })(s(), o.W0.md, o.W0.xs),
                w = u.ZP.ul.withConfig({
                    componentId: "sc-6ceaf034-1"
                })(l(), o.W0.md),
                x = u.ZP.li.withConfig({
                    componentId: "sc-6ceaf034-2"
                })(f(), o.W0.xs, o.W0.xs, m, (function(n) {
                    return n.isButtonPanel && (0, u.iv)(d())
                })),
                k = u.ZP.div.withConfig({
                    componentId: "sc-6ceaf034-3"
                })(h(), o.$_.grayscale_20, m, "16px", i.BC.small),
                C = u.ZP.span.withConfig({
                    componentId: "sc-6ceaf034-4"
                })(g(), o.$_.grayscale_50, o.JB.body, o.Ue.semiBold, (function(n) {
                    var t = n.isActive,
                        e = n.theme;
                    return t && (0, u.iv)(p(), e.primary)
                })),
                Z = (0, u.ZP)(a.u).withConfig({
                    componentId: "sc-6ceaf034-5"
                })(v(), (function(n) {
                    return n.theme.alphaBlack_07
                }), a.u.BaseTooltip),
                I = (0, u.ZP)(c.Z).withConfig({
                    componentId: "sc-6ceaf034-6"
                })(b())
        },
        88974: function(n, t, e) {
            var r;
            e.d(t, {
                    G: function() {
                        return r
                    }
                }),
                function(n) {
                    n.NewChat = "new_chat", n.History = "history", n.Share = "share", n.Feedback = "feedback"
                }(r || (r = {}))
        },
        77139: function(n, t, e) {
            e.d(t, {
                B: function() {
                    return b
                }
            });
            var r = e(14924),
                o = e(10253),
                i = e(75403),
                a = e(23376),
                c = e(11163),
                u = e(46327),
                s = e(88329),
                l = e(53766),
                d = e(47568),
                f = e(97582),
                h = e(23747),
                p = e(15985),
                g = e(97592),
                v = e(88974),
                b = function(n) {
                    var t, e = n.hiddenElements,
                        b = (0, c.useRouter)().push,
                        m = function() {
                            var n = (0, h.Z)().sendEvent,
                                t = function() {
                                    var t = (0, d.Z)((function(t) {
                                        var e, r;
                                        return (0, f.__generator)(this, (function(o) {
                                            switch (o.label) {
                                                case 0:
                                                    return e = t.actionTitle, r = t.actionName, [4, n(p.j.UserClickInNonApp, {
                                                        appname: g.Gv,
                                                        actionTitle: e,
                                                        actionName: r
                                                    })];
                                                case 1:
                                                    return o.sent(), [2]
                                            }
                                        }))
                                    }));
                                    return function(n) {
                                        return t.apply(this, arguments)
                                    }
                                }();
                            return {
                                handleRecordEvent: t,
                                recordEventOnShareClick: function() {
                                    t({
                                        actionTitle: "share",
                                        actionName: "share_button"
                                    })
                                }
                            }
                        }(),
                        y = m.handleRecordEvent,
                        w = m.recordEventOnShareClick,
                        x = (0, u.S)(w).handleShareClicked,
                        k = (t = {}, (0, r.Z)(t, v.G.NewChat, {
                            testId: l.UpV,
                            actionName: "new_chat_button",
                            text: "New chat thread",
                            iconProps: {
                                type: i.Y.plusWithCircleOutline,
                                width: "20",
                                height: "20",
                                color: a.$_.grayscale_50
                            },
                            onClick: function() {
                                var n = {
                                    actionTitle: k[v.G.NewChat].text,
                                    actionName: "new_chat_button"
                                };
                                y(n), b({
                                    pathname: "/chat"
                                })
                            }
                        }), (0, r.Z)(t, v.G.History, {
                            testId: l.y4,
                            actionName: "history_button",
                            text: "Chat history",
                            iconProps: {
                                type: i.Y.history,
                                width: "19",
                                height: "21",
                                color: a.$_.grayscale_50
                            },
                            onClick: function() {
                                var n = {
                                    actionTitle: k[v.G.History].text,
                                    actionName: "history_button"
                                };
                                y(n), b({
                                    pathname: "/profile/youchat"
                                })
                            }
                        }), (0, r.Z)(t, v.G.Share, {
                            testId: l.ZEO,
                            actionName: "share_button",
                            text: "Share entire thread",
                            iconProps: {
                                type: i.Y.share3,
                                width: "18",
                                height: "21",
                                color: a.$_.grayscale_50
                            },
                            onClick: x
                        }), (0, r.Z)(t, v.G.Feedback, {
                            testId: l.nOj,
                            actionName: "feedback",
                            text: "Give feedback",
                            iconProps: {
                                type: i.Y.feedbackOutline,
                                width: "18",
                                height: "21",
                                color: a.$_.grayscale_50
                            },
                            onClick: function() {
                                var n = {
                                    actionTitle: k[v.G.Feedback].text,
                                    actionName: "feedback"
                                };
                                y(n), window.open(s.JQ, "_blank", "noopener,noreferrer")
                            }
                        }), t),
                        C = Object.entries(k).filter((function(n) {
                            var t = (0, o.Z)(n, 1)[0];
                            return !e.includes(t)
                        })).map((function(n) {
                            return (0, o.Z)(n, 2)[1]
                        }));
                    return {
                        menuItems: C
                    }
                }
        },
        8993: function(n, t, e) {
            e.d(t, {
                D: function() {
                    return y
                }
            });
            var r = e(85893),
                o = e(70189),
                i = e(52015),
                a = e(2507),
                c = e(53766),
                u = e(31052),
                s = e(67294),
                l = [a.ID.youStudy, a.ID.social],
                d = e(7297),
                f = e(25675),
                h = e.n(f);

            function p() {
                var n = (0, d.Z)(["\n  position: absolute;\n  width: 100%;\n  height: 153px;\n  opacity: 0.54;\n  top: 0;\n  left: 0;\n  z-index: -1;\n\n  mask-image: linear-gradient(\n    180deg,\n    rgba(0, 0, 0, 1) 70%,\n    rgba(255, 255, 255, 0) 99%\n  );\n\n  pointer-events: none;\n"]);
                return p = function() {
                    return n
                }, n
            }

            function g() {
                var n = (0, d.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n"]);
                return g = function() {
                    return n
                }, n
            }
            var v = i.ZP.div.withConfig({
                    componentId: "sc-f0ebac34-0"
                })(p()),
                b = (0, i.ZP)(h()).withConfig({
                    componentId: "sc-f0ebac34-1"
                })(g()),
                m = function(n) {
                    var t = n.type,
                        e = n.keepDark,
                        d = n.className,
                        f = n.baseHeight,
                        h = n.opacity,
                        p = function(n, t) {
                            var e = (0, s.useState)(document.documentElement.clientWidth),
                                r = e[0],
                                o = e[1],
                                i = (0, u.j)().isSmallDevice,
                                a = l.includes(n) ? .22569 * r : i ? t.mobile : t.desktop,
                                c = function() {
                                    return o(document.documentElement.clientWidth)
                                };
                            return (0, s.useEffect)((function() {
                                return c(), window.addEventListener("resize", c),
                                    function() {
                                        return window.removeEventListener("resize", c)
                                    }
                            }), []), {
                                height: a,
                                width: r
                            }
                        }(t, f),
                        g = p.height,
                        m = p.width,
                        y = function(n, t) {
                            var e = t ? "dark" : "light";
                            switch (n) {
                                case a.ID.youCode:
                                    return {
                                        src: "/shared/landing-page/background-youcode-".concat(e, ".png"),
                                        alt: "Code Background"
                                    };
                                case a.ID.youStudy:
                                    return {
                                        src: "/shared/landing-page/background-youstudy-".concat(e, ".png"),
                                        alt: "Study Background"
                                    };
                                case a.ID.social:
                                    return {
                                        src: "/shared/landing-page/background-social-".concat(e, ".png"),
                                        alt: "Social Background"
                                    };
                                default:
                                    return {
                                        src: "/shared/landing-page/background-default-".concat(e, ".png"),
                                        alt: "Gradient Background"
                                    }
                            }
                        }(t, (0, i.Fg)().darkMode || e),
                        w = y.src,
                        x = y.alt;
                    return 0 === m || 0 === g ? null : (0, r.jsx)(v, {
                        className: d,
                        "data-testid": "".concat(c.j6N).concat(t),
                        children: (0, r.jsx)(b, {
                            height: g,
                            width: m,
                            src: "".concat(o.qn).concat(w),
                            priority: !0,
                            alt: x,
                            style: {
                                opacity: h
                            }
                        })
                    })
                },
                y = function(n) {
                    var t = n.type,
                        e = n.baseHeight,
                        o = n.keepDark,
                        i = n.className,
                        c = n.opacity;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(m, {
                            className: i,
                            keepDark: o,
                            type: a.ID.default,
                            baseHeight: e,
                            opacity: c
                        }), (t === a.ID.youStudy || t === a.ID.youCode || t === a.ID.social) && (0, r.jsx)(m, {
                            className: i,
                            keepDark: o,
                            type: t,
                            baseHeight: e
                        })]
                    })
                }
        },
        58827: function(n, t, e) {
            e.r(t), e.d(t, {
                MobileMenus: function() {
                    return f
                }
            });
            var r = e(85893),
                o = e(63062),
                i = e(5152),
                a = e.n(i),
                c = e(88974),
                u = e(2523),
                s = e(87192),
                l = e(67273),
                d = a()((function() {
                    return Promise.all([e.e(6572), e.e(9100), e.e(1659)]).then(e.bind(e, 38475)).then((function(n) {
                        return n.MobileUserDropdown
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [38475]
                        }
                    }
                }),
                f = function(n) {
                    var t = n.toggleMobileMenu,
                        e = n.isMobileMenuVisible,
                        i = n.toggleMobileChatHistory,
                        a = n.isMobileChatHistoryVisible;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(d, {
                            shouldOpen: e,
                            toggle: t
                        }), (0, r.jsxs)(s.n, {
                            isOpen: a,
                            toggle: i,
                            children: [(0, r.jsx)(l.hc, {
                                children: "Activity"
                            }), (0, r.jsx)(u.YouChatHistory, {
                                hiddenElements: [c.G.Feedback]
                            })]
                        }), e && (0, r.jsx)(o.Z, {
                            children: (0, r.jsx)(l.ip, {
                                isMobileMenuOpen: !0,
                                onClick: t
                            })
                        })]
                    })
                }
        },
        87192: function(n, t, e) {
            e.d(t, {
                n: function() {
                    return k
                }
            });
            var r = e(85893),
                o = e(81265),
                i = e(67294),
                a = e(6917),
                c = e(8993),
                u = e(7297),
                s = e(23376),
                l = e(52015),
                d = e(12475);

            function f() {
                var n = (0, u.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: ", ";\n  z-index: ", ";\n  cursor: pointer;\n"]);
                return f = function() {
                    return n
                }, n
            }

            function h() {
                var n = (0, u.Z)(["\n          right: ", ";\n          ", ";\n        "]);
                return h = function() {
                    return n
                }, n
            }

            function p() {
                var n = (0, u.Z)(["\n          left: ", ";\n        "]);
                return p = function() {
                    return n
                }, n
            }

            function g() {
                var n = (0, u.Z)(["\n      background-color: rgba(36, 37, 38, 1);\n    "]);
                return g = function() {
                    return n
                }, n
            }

            function v() {
                var n = (0, u.Z)(["\n  position: fixed;\n  top: 0;\n  width: ", "px;\n  height: 100%;\n  overflow-y: auto;\n  z-index: ", ";\n  backface-visibility: hidden;\n  background: ", ";\n  color: ", ";\n  border: 1px solid rgba(0, 0, 0, 0.1);\n\n  transition: left 0.5s ease, right 0.5s ease, width 0.35s ease;\n\n  ", "\n\n  ", "\n"]);
                return v = function() {
                    return n
                }, n
            }

            function b() {
                var n = (0, u.Z)(["\n  width: 100%;\n  padding: ", ";\n"]);
                return b = function() {
                    return n
                }, n
            }

            function m() {
                var n = (0, u.Z)(["\n  padding: ", " ", " 0 0;\n  display: flex;\n  justify-content: flex-end;\n"]);
                return m = function() {
                    return n
                }, n
            }
            var y = l.ZP.div.withConfig({
                    componentId: "sc-5ba0d06c-0"
                })(f(), (function(n) {
                    return n.theme.alphaBlack_50
                }), s.W5.topmost - 1),
                w = l.ZP.div.withConfig({
                    componentId: "sc-5ba0d06c-1"
                })(v(), d.m, s.W5.topmost, (function(n) {
                    return n.theme.white
                }), (function(n) {
                    return n.theme.text.primary
                }), (function(n) {
                    var t = n.isOpen;
                    return n.shouldOpenFromRight ? (0, l.iv)(h(), t ? 0 : "-100%", !t && "width: 0") : (0, l.iv)(p(), t ? 0 : "-100%")
                }), (function(n) {
                    return n.$isIncognito && (0, l.iv)(g())
                })),
                x = (l.ZP.ul.withConfig({
                    componentId: "sc-5ba0d06c-2"
                })(b(), s.W0.xs), l.ZP.div.withConfig({
                    componentId: "sc-5ba0d06c-3"
                })(m(), s.W0.sm, s.W0.sm)),
                k = function(n) {
                    var t = n.isOpen,
                        e = n.toggle,
                        u = n.children,
                        s = n.hasGradient,
                        l = n.shouldOpenFromRight,
                        d = void 0 !== l && l,
                        f = (0, a.t)();
                    return (0, i.useEffect)((function() {
                        return document.body.style.overflow = t ? "auto" : "hidden",
                            function() {
                                document.body.style.overflow = "auto"
                            }
                    }), [t]), (0, r.jsxs)(r.Fragment, {
                        children: [t && (0, r.jsx)(y, {
                            onClick: e
                        }), (0, r.jsxs)(w, {
                            isOpen: t,
                            $isIncognito: f,
                            "data-testid": "Mobile-Menu",
                            shouldOpenFromRight: d,
                            children: [s && (0, r.jsx)(c.D, {
                                baseHeight: {
                                    desktop: 150,
                                    mobile: 150
                                }
                            }), (0, r.jsx)(x, {
                                children: (0, r.jsx)(o.P, {
                                    onClick: e,
                                    "data-eventactionname": "toggle_mobile_menu",
                                    style: {
                                        backgroundColor: "#E7E7EB"
                                    }
                                })
                            }), u]
                        })]
                    })
                }
        },
        46327: function(n, t, e) {
            e.d(t, {
                S: function() {
                    return d
                }
            });
            var r = e(68120),
                o = e(4480),
                i = e(29087),
                a = e(14675),
                c = e(74426),
                u = e(49804),
                s = e(69825),
                l = e(3546),
                d = function(n) {
                    var t = (0, s.z)(u.YG.YouChat),
                        e = (0, r.O)(),
                        d = e.isVisible,
                        f = e.toggle,
                        h = (0, l.E)(),
                        p = h.isSignedInToYDC,
                        g = h.signInToYDC,
                        v = (0, o.Zl)(a.G),
                        b = (0, o.Zl)(c.yT),
                        m = (0, o.sJ)(i.Hk),
                        y = (0, o.sJ)(c.qm),
                        w = (0, o.sJ)(c.Gy),
                        x = (0, o.sJ)(i.RO);
                    return {
                        handleShareClicked: function() {
                            null === n || void 0 === n || n(), !t || p ? function() {
                                var n, t = y || m,
                                    e = (null === w || void 0 === w || null === (n = w[(null === w || void 0 === w ? void 0 : w.length) - 1]) || void 0 === n ? void 0 : n.question) || x;
                                b({
                                    chatId: t,
                                    query: e
                                }), v(!0)
                            }() : g()
                        },
                        isSignUpModalVisible: d,
                        toggleSignUpModal: f
                    }
                }
        },
        57190: function(n, t, e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = e(94941).Z;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function(n) {
                var t = n.rootRef,
                    e = n.rootMargin,
                    s = n.disabled || !a,
                    l = r(o.useState(!1), 2),
                    d = l[0],
                    f = l[1],
                    h = r(o.useState(null), 2),
                    p = h[0],
                    g = h[1];
                o.useEffect((function() {
                    if (a) {
                        if (s || d) return;
                        if (p && p.tagName) {
                            var n = function(n, t, e) {
                                var r = function(n) {
                                        var t, e = {
                                                root: n.root || null,
                                                margin: n.rootMargin || ""
                                            },
                                            r = u.find((function(n) {
                                                return n.root === e.root && n.margin === e.margin
                                            }));
                                        if (r && (t = c.get(r))) return t;
                                        var o = new Map,
                                            i = new IntersectionObserver((function(n) {
                                                n.forEach((function(n) {
                                                    var t = o.get(n.target),
                                                        e = n.isIntersecting || n.intersectionRatio > 0;
                                                    t && e && t(e)
                                                }))
                                            }), n);
                                        return t = {
                                            id: e,
                                            observer: i,
                                            elements: o
                                        }, u.push(e), c.set(e, t), t
                                    }(e),
                                    o = r.id,
                                    i = r.observer,
                                    a = r.elements;
                                return a.set(n, t), i.observe(n),
                                    function() {
                                        if (a.delete(n), i.unobserve(n), 0 === a.size) {
                                            i.disconnect(), c.delete(o);
                                            var t = u.findIndex((function(n) {
                                                return n.root === o.root && n.margin === o.margin
                                            }));
                                            t > -1 && u.splice(t, 1)
                                        }
                                    }
                            }(p, (function(n) {
                                return n && f(n)
                            }), {
                                root: null == t ? void 0 : t.current,
                                rootMargin: e
                            });
                            return n
                        }
                    } else if (!d) {
                        var r = i.requestIdleCallback((function() {
                            return f(!0)
                        }));
                        return function() {
                            return i.cancelIdleCallback(r)
                        }
                    }
                }), [p, s, e, t, d]);
                var v = o.useCallback((function() {
                    f(!1)
                }), []);
                return [g, d, v]
            };
            var o = e(67294),
                i = e(9311),
                a = "function" === typeof IntersectionObserver,
                c = new Map,
                u = [];
            ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), n.exports = t.default)
        },
        14675: function(n, t, e) {
            e.d(t, {
                G: function() {
                    return i
                }
            });
            var r = e(4480),
                o = e(29769),
                i = (0, r.cn)({
                    key: o.v.ShareModalOpen,
                    default: !1
                })
        },
        23552: function(n, t, e) {
            e.d(t, {
                u: function() {
                    return E
                }
            });
            var r = e(14924),
                o = e(26042),
                i = e(69396),
                a = e(99534),
                c = e(85893),
                u = e(67294),
                s = e(28703),
                l = e(7297),
                d = e(52015),
                f = e(23376);

            function h() {
                var n = (0, l.Z)(["\n  font-size: ", ";\n  position: absolute;\n  background: ", ";\n  color: ", ";\n  padding: ", ";\n  border-radius: ", ";\n  z-index: ", ';\n\n  &::after {\n    content: "";\n    position: absolute;\n    display: block;\n    width: 0px;\n    border: 10px solid transparent;\n  }\n']);
                return h = function() {
                    return n
                }, n
            }

            function p() {
                var n = (0, l.Z)(["\n        ", " {\n          display: ", ";\n        }\n      "]);
                return p = function() {
                    return n
                }, n
            }

            function g() {
                var n = (0, l.Z)(["\n          @media (hover: hover) and (pointer: fine) {\n            &:hover ", " {\n              display: block;\n            }\n          }\n        "]);
                return g = function() {
                    return n
                }, n
            }

            function v() {
                var n = (0, l.Z)(["\n        ", " {\n          display: none;\n        }\n\n        ", "\n      "]);
                return v = function() {
                    return n
                }, n
            }

            function b() {
                var n = (0, l.Z)(["\n  width: 100%;\n  position: relative;\n\n  ", ";\n"]);
                return b = function() {
                    return n
                }, n
            }

            function m() {
                var n = (0, l.Z)(["\n  bottom: calc(100% + 10px);\n  &::after {\n    left: 50%;\n    bottom: 0;\n    transform: translate(-50%, 100%);\n    border-bottom: 0;\n    border-top: 10px solid ", ";\n  }\n"]);
                return m = function() {
                    return n
                }, n
            }

            function y() {
                var n = (0, l.Z)(["\n  top: 50%;\n  left: calc(100% + 15px);\n  transform: translateY(-50%);\n  &::after {\n    left: 0;\n    top: 50%;\n    transform: translate(-100%, -50%);\n    border-left: 0;\n    border-right: 10px solid\n      ", ";\n  }\n"]);
                return y = function() {
                    return n
                }, n
            }

            function w() {
                var n = (0, l.Z)(["\n  top: calc(100% + 10px);\n  &::after {\n    left: 50%;\n    top: 0;\n    transform: translate(-50%, -100%);\n    border-top: 0;\n    border-bottom: 10px solid\n      ", ";\n  }\n"]);
                return w = function() {
                    return n
                }, n
            }

            function x() {
                var n = (0, l.Z)(["\n  right: calc(100% + 15px);\n  top: 50%;\n  transform: translateY(-50%);\n  &::after {\n    transform: translate(100%, -50%);\n    right: 0;\n    top: 50%;\n    border-right: 0;\n    border-left: 10px solid ", ";\n  }\n"]);
                return x = function() {
                    return n
                }, n
            }

            function k() {
                var n = (0, l.Z)(["\n  width: 100%;\n  overflow: hidden;\n  overflow-wrap: break-word;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-break: break-all;\n"]);
                return k = function() {
                    return n
                }, n
            }
            var C = d.ZP.div.withConfig({
                    componentId: "sc-d43764f4-0"
                })(h(), f.JB.caption, (function(n) {
                    return n.$bgColor || f.$_.alphaBlack_75
                }), f.$_.white, f.W0.xxs, f.E0.xxs, f.W5.topmost),
                Z = d.ZP.div.withConfig({
                    componentId: "sc-d43764f4-1"
                })(b(), (function(n) {
                    var t = n.$isVisible,
                        e = n.shouldShowOnHover;
                    return "boolean" === typeof t ? (0, d.iv)(p(), C, t ? "block" : "none") : (0, d.iv)(v(), C, e && (0, d.iv)(g(), C))
                })),
                I = (0, d.ZP)(C).withConfig({
                    componentId: "sc-d43764f4-2"
                })(m(), (function(n) {
                    return n.$bgColor || f.$_.alphaBlack_75
                })),
                _ = (0, d.ZP)(C).withConfig({
                    componentId: "sc-d43764f4-3"
                })(y(), (function(n) {
                    return n.$bgColor || f.$_.alphaBlack_75
                })),
                j = (0, d.ZP)(C).withConfig({
                    componentId: "sc-d43764f4-4"
                })(w(), (function(n) {
                    return n.$bgColor || f.$_.alphaBlack_75
                })),
                O = (0, d.ZP)(C).withConfig({
                    componentId: "sc-d43764f4-5"
                })(x(), (function(n) {
                    return n.$bgColor || f.$_.alphaBlack_75
                })),
                P = d.ZP.div.withConfig({
                    componentId: "sc-d43764f4-6"
                })(k()),
                E = function(n) {
                    var t, e = n.children,
                        l = n.placement,
                        d = void 0 === l ? s.iQ.BOTTOM : l,
                        f = n.tooltipContent,
                        h = void 0 === f ? "" : f,
                        p = n.isEllipsis,
                        g = void 0 !== p && p,
                        v = n.isVisible,
                        b = n.bgColor,
                        m = (0, a.Z)(n, ["children", "placement", "tooltipContent", "isEllipsis", "isVisible", "bgColor"]),
                        y = (0, u.useState)(!1),
                        w = y[0],
                        x = y[1],
                        k = (t = {}, (0, r.Z)(t, s.iQ.TOP, I), (0, r.Z)(t, s.iQ.RIGHT, _), (0, r.Z)(t, s.iQ.BOTTOM, j), (0, r.Z)(t, s.iQ.LEFT, O), t)[d];
                    return (0, c.jsxs)(Z, (0, i.Z)((0, o.Z)({
                        shouldShowOnHover: (!g || w) && "boolean" !== typeof v,
                        $isVisible: v
                    }, m), {
                        children: [(0, c.jsx)(k, {
                            $bgColor: b,
                            children: h
                        }), g ? (0, c.jsx)(P, {
                            onMouseOver: function(n) {
                                var t = n.target,
                                    e = t.scrollWidth > t.clientWidth;
                                x(e)
                            },
                            children: e
                        }) : e]
                    }))
                };
            E.BaseTooltip = C
        }
    }
]);