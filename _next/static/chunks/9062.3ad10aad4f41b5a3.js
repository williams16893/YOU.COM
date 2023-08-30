"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9062], {
        79062: function(o, e, n) {
            n.r(e);
            var i = n(85893),
                s = n(67294),
                t = function(o) {
                    var e = o.height,
                        n = o.width,
                        s = o.color,
                        t = void 0 === s ? "#8B8E8F" : s,
                        r = o.backgroundColor,
                        c = void 0 === r ? "none" : r,
                        h = o.className,
                        l = o.onClick;
                    return (0, i.jsx)("svg", {
                        width: n,
                        height: e,
                        fill: c,
                        className: h,
                        onClick: l,
                        viewBox: "0 0 22 23",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.jsx)("path", {
                            d: "M11 7.65869V15.6587M7 11.6587H15M21 11.6587C21 17.1815 16.5228 21.6587 11 21.6587C5.47715 21.6587 1 17.1815 1 11.6587C1 6.13584 5.47715 1.65869 11 1.65869C16.5228 1.65869 21 6.13584 21 11.6587Z",
                            stroke: t,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                };
            e.default = (0, s.memo)(t)
        }
    }
]);