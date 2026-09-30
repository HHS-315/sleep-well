/* @ds-bundle: {"format":4,"namespace":"SleepWellDesignSystem_52d586","components":[{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"QuantityStepper","sourcePath":"components/commerce/QuantityStepper.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"SectionHeader","sourcePath":"components/core/SectionHeader.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Dialog","sourcePath":"components/surfaces/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/surfaces/Tooltip.jsx"}],"sourceHashes":{"components/commerce/ProductCard.jsx":"141197a8b9bd","components/commerce/QuantityStepper.jsx":"22ae11abe419","components/core/Button.jsx":"ebdb3ca046c0","components/core/Eyebrow.jsx":"4c55058e16c2","components/core/IconButton.jsx":"709554fc4b49","components/core/SectionHeader.jsx":"2f33a9959476","components/core/Tag.jsx":"782d774243b6","components/feedback/Toast.jsx":"96b6133ac931","components/forms/Checkbox.jsx":"232b8f2d371a","components/forms/Input.jsx":"b31161a71978","components/forms/Radio.jsx":"1c7ebec4c75f","components/forms/Select.jsx":"0a4c9e56cea0","components/forms/Switch.jsx":"e18b03e86134","components/navigation/Tabs.jsx":"971c46a66a8c","components/surfaces/Card.jsx":"82d35254705c","components/surfaces/Dialog.jsx":"e3f4417ba2f4","components/surfaces/Tooltip.jsx":"e3cab6834312","ui_kits/website/Chapters.jsx":"2d618b7d08fe","ui_kits/website/Footer.jsx":"7ab871c51553","ui_kits/website/Header.jsx":"e0262e22f574","ui_kits/website/Hero.jsx":"678608fee095","ui_kits/website/Icon.jsx":"409a286965b1","ui_kits/website/Shop.jsx":"893cb52a80d0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SleepWellDesignSystem_52d586 = window.SleepWellDesignSystem_52d586 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/QuantityStepper.jsx
try { (() => {
function QuantityStepper({
  value,
  defaultValue = 1,
  min = 1,
  max = 10,
  onChange,
  style
}) {
  const [v, setV] = React.useState(defaultValue);
  const cur = value ?? v;
  const set = n => {
    n = Math.max(min, Math.min(max, n));
    setV(n);
    onChange && onChange(n);
  };
  const b = {
    width: 40,
    height: 40,
    borderRadius: '50%',
    border: 'none',
    background: 'transparent',
    color: 'var(--blue-700)',
    fontSize: 20,
    lineHeight: 1,
    cursor: 'pointer',
    fontFamily: 'var(--font-body)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 46,
      padding: '0 3px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--blue-700)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\uAC10\uC18C",
    style: {
      ...b,
      opacity: cur <= min ? .35 : 1
    },
    onClick: () => set(cur - 1)
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 30,
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--blue-700)'
    }
  }, cur), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\uC99D\uAC00",
    style: {
      ...b,
      opacity: cur >= max ? .35 : 1
    },
    onClick: () => set(cur + 1)
  }, "+"));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const V = {
  primary: {
    bg: 'var(--blue-700)',
    hbg: 'var(--navy-800)',
    fg: 'var(--cream-100)',
    bd: 'transparent'
  },
  secondary: {
    bg: 'var(--blue-400)',
    hbg: 'var(--blue-400-hover)',
    fg: 'var(--cream-100)',
    bd: 'transparent'
  },
  deep: {
    bg: 'var(--navy-900)',
    hbg: 'var(--navy-900-hover)',
    fg: 'var(--cream-100)',
    bd: 'transparent'
  },
  cream: {
    bg: 'var(--cream-100)',
    hbg: 'var(--white)',
    fg: 'var(--blue-700)',
    bd: 'transparent'
  },
  outline: {
    bg: 'transparent',
    hbg: 'var(--blue-700)',
    fg: 'var(--blue-700)',
    hfg: 'var(--cream-100)',
    bd: 'var(--blue-700)'
  },
  'outline-night': {
    bg: 'transparent',
    hbg: 'var(--cream-100)',
    fg: 'var(--cream-100)',
    hfg: 'var(--blue-700)',
    bd: 'var(--cream-100)'
  }
};
const S = {
  sm: {
    h: 36,
    px: 18,
    fs: 12
  },
  md: {
    h: 46,
    px: 26,
    fs: 14
  },
  lg: {
    h: 58,
    px: 35,
    fs: 16
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  children,
  onClick,
  type = 'button',
  style
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const v = V[variant] || V.primary;
  const s = S[size] || S.md;
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      height: s.h,
      padding: '0 ' + s.px + 'px',
      width: fullWidth ? '100%' : 'auto',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + v.bd,
      background: h && !disabled ? v.hbg : v.bg,
      color: h && !disabled && v.hfg ? v.hfg : v.fg,
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: s.fs,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      lineHeight: 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transform: p && !disabled ? 'scale(var(--press-scale))' : 'scale(1)',
      transition: 'background-color var(--dur-3) var(--ease-out), color var(--dur-3) var(--ease-out), transform var(--dur-3) var(--ease-out)',
      ...style
    }
  }, iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  tone = 'night',
  dots = true,
  style
}) {
  const fg = tone === 'night' ? 'var(--cream-100)' : 'var(--blue-700)';
  const dot = /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: '50%',
      background: 'var(--blue-400)',
      display: 'inline-block'
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      color: fg,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      lineHeight: 1,
      ...style
    }
  }, dots && dot, /*#__PURE__*/React.createElement("span", null, children), dots && dot);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const V = {
  cream: {
    bg: 'var(--cream-100)',
    hbg: 'var(--white)',
    fg: 'var(--blue-700)',
    bd: 'transparent'
  },
  blue: {
    bg: 'var(--blue-700)',
    hbg: 'var(--navy-800)',
    fg: 'var(--cream-100)',
    bd: 'transparent'
  },
  outline: {
    bg: 'transparent',
    hbg: 'rgba(254,241,208,.12)',
    fg: 'var(--cream-100)',
    bd: 'var(--cream-100)'
  },
  'outline-blue': {
    bg: 'transparent',
    hbg: 'rgba(0,66,175,.08)',
    fg: 'var(--blue-700)',
    bd: 'var(--blue-700)'
  }
};
function IconButton({
  variant = 'cream',
  size = 46,
  label,
  disabled = false,
  onClick,
  children,
  style
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const v = V[variant] || V.cream;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      border: '1px solid ' + v.bd,
      background: h && !disabled ? v.hbg : v.bg,
      color: v.fg,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      transform: p ? 'scale(var(--press-scale))' : 'scale(1)',
      transition: 'background-color var(--dur-3) var(--ease-out), transform var(--dur-3) var(--ease-out)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeader.jsx
try { (() => {
function SectionHeader({
  number,
  kicker,
  title,
  subtitle,
  tone = 'day',
  align = 'left',
  style
}) {
  const fg = tone === 'night' ? 'var(--cream-100)' : 'var(--blue-700)';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      color: fg,
      ...style
    }
  }, (number || kicker) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'baseline',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase'
    }
  }, number && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blue-400)'
    }
  }, number), kicker && /*#__PURE__*/React.createElement("span", null, kicker)), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--fs-display-m)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--tracking-tight)',
      textWrap: 'balance'
    }
  }, title, subtitle && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      opacity: 1
    }
  }, subtitle))));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
const V = {
  outline: {
    bg: 'transparent',
    fg: 'var(--blue-700)',
    bd: 'var(--blue-400)'
  },
  solid: {
    bg: 'var(--blue-700)',
    fg: 'var(--cream-100)',
    bd: 'var(--blue-700)'
  },
  night: {
    bg: 'transparent',
    fg: 'var(--cream-100)',
    bd: 'var(--cream-100)'
  },
  cream: {
    bg: 'var(--cream-100)',
    fg: 'var(--blue-700)',
    bd: 'var(--cream-100)'
  }
};
function Tag({
  variant = 'outline',
  children,
  style
}) {
  const v = V[variant] || V.outline;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 26,
      padding: '0 13px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + v.bd,
      background: v.bg,
      color: v.fg,
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function ProductCard({
  image,
  name,
  description,
  price,
  originalPrice,
  tags = [],
  cta = '장바구니 담기',
  onAdd,
  tone = 'day',
  style
}) {
  const night = tone === 'night';
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 'var(--radius-card)',
      border: '2px solid ' + (night ? 'var(--blue-600)' : 'var(--blue-700)'),
      background: night ? 'var(--navy-900)' : 'var(--cream-100)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1/1',
      background: 'var(--blue-700)',
      overflow: 'hidden'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: 25
    }
  }, tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t,
    variant: night ? 'night' : 'outline'
  }, t))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 32,
      lineHeight: 1.05,
      color: night ? 'var(--cream-100)' : 'var(--blue-700)'
    }
  }, name), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.4,
      color: night ? 'var(--cream-100)' : 'var(--text-body)'
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 13,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      fontFamily: 'var(--font-body)',
      color: night ? 'var(--cream-100)' : 'var(--blue-700)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, price), originalPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      textDecoration: 'line-through',
      opacity: .55
    }
  }, originalPrice)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: night ? 'cream' : 'primary',
    onClick: onAdd
  }, cta))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  children,
  action,
  onAction,
  tone = 'night',
  style
}) {
  const night = tone === 'night';
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 20,
      padding: '13px 13px 13px 25px',
      borderRadius: 'var(--radius-pill)',
      background: night ? 'var(--navy-900)' : 'var(--cream-100)',
      color: night ? 'var(--cream-100)' : 'var(--blue-700)',
      border: night ? '1px solid var(--blue-600)' : '1px solid var(--blue-700)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      animation: 'floatFade 0.8s var(--ease)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--blue-400)',
      animation: 'flash 2s infinite'
    }
  }), /*#__PURE__*/React.createElement("span", null, children), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      height: 32,
      padding: '0 14px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: night ? 'var(--cream-100)' : 'var(--blue-700)',
      color: night ? 'var(--blue-700)' : 'var(--cream-100)',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, action));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  style
}) {
  const [c, setC] = React.useState(defaultChecked);
  const on = checked ?? c;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 13,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      setC(e.target.checked);
      onChange && onChange(e.target.checked);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 5,
      border: '1px solid var(--blue-700)',
      background: on ? 'var(--blue-700)' : 'transparent',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color var(--dur-2) var(--ease-out)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "9",
    viewBox: "0 0 11 9"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 4.5L4 7.5 10 1",
    stroke: "var(--cream-100)",
    strokeWidth: "1.6",
    fill: "none"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  hint,
  error,
  value,
  defaultValue,
  placeholder,
  type = 'text',
  disabled = false,
  onChange,
  style
}) {
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--blue-700)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      ...{
        height: 50,
        padding: '0 20px',
        borderRadius: 'var(--radius-pill)',
        border: '1px solid var(--blue-400)',
        background: 'transparent',
        color: 'var(--text-body)',
        fontFamily: 'var(--font-body)',
        fontSize: 16,
        outline: 'none',
        transition: 'border-color var(--dur-3) var(--ease-out)'
      },
      borderColor: error ? '#b3261e' : f ? 'var(--blue-700)' : 'var(--blue-400)',
      borderWidth: f ? 2 : 1,
      opacity: disabled ? .5 : 1
    }
  }), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontFamily: 'var(--font-body)',
      color: error ? '#b3261e' : 'var(--blue-400)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  direction = 'column',
  style
}) {
  const [v, setV] = React.useState(defaultValue);
  const cur = value ?? v;
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: 14,
      ...style
    }
  }, options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    const on = cur === val;
    return /*#__PURE__*/React.createElement("label", {
      key: val,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 13,
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 16,
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: val,
      checked: on,
      onChange: () => {
        setV(val);
        onChange && onChange(val);
      },
      style: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        borderRadius: '50%',
        border: '1px solid var(--blue-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: 'var(--blue-700)'
      }
    })), lab);
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  defaultValue,
  onChange,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--blue-700)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    style: {
      ...{
        height: 50,
        padding: '0 20px',
        borderRadius: 'var(--radius-pill)',
        border: '1px solid var(--blue-400)',
        background: 'transparent',
        color: 'var(--text-body)',
        fontFamily: 'var(--font-body)',
        fontSize: 16,
        outline: 'none',
        transition: 'border-color var(--dur-3) var(--ease-out)'
      },
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      paddingRight: 44,
      cursor: 'pointer',
      opacity: disabled ? .5 : 1
    }
  }, options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "8",
    viewBox: "0 0 12 8",
    style: {
      position: 'absolute',
      right: 20,
      top: 21,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l5 5 5-5",
    stroke: "var(--blue-700)",
    strokeWidth: "1.5",
    fill: "none"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  style
}) {
  const [c, setC] = React.useState(defaultChecked);
  const on = checked ?? c;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 13,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: on,
    disabled: disabled,
    onChange: e => {
      setC(e.target.checked);
      onChange && onChange(e.target.checked);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--blue-700)',
      background: on ? 'var(--blue-700)' : 'transparent',
      position: 'relative',
      transition: 'background-color var(--dur-3) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 23 : 3,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: on ? 'var(--cream-100)' : 'var(--blue-700)',
      transition: 'left var(--dur-3) var(--ease-in-out)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = 'pill',
  tone = 'day',
  style
}) {
  const [v, setV] = React.useState(defaultValue ?? (items[0] && (items[0].value ?? items[0])));
  const cur = value ?? v;
  const fg = tone === 'night' ? 'var(--cream-100)' : 'var(--blue-700)';
  const on = tone === 'night' ? 'var(--cream-100)' : 'var(--blue-700)';
  const onFg = tone === 'night' ? 'var(--blue-700)' : 'var(--cream-100)';
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: variant === 'dots' ? 11 : 6,
      flexWrap: 'wrap',
      ...style
    }
  }, items.map(it => {
    const val = it.value ?? it;
    const lab = it.label ?? it;
    const a = cur === val;
    const base = variant === 'dots' ? {
      width: 36,
      height: 36,
      padding: 0,
      borderRadius: '50%'
    } : {
      height: 40,
      padding: '0 20px',
      borderRadius: 'var(--radius-pill)'
    };
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      role: "tab",
      "aria-selected": a,
      type: "button",
      onClick: () => {
        setV(val);
        onChange && onChange(val);
      },
      style: {
        ...base,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid ' + fg,
        background: a ? on : 'transparent',
        color: a ? onFg : fg,
        fontFamily: 'var(--font-body)',
        fontSize: variant === 'dots' ? 14 : 13,
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'background-color var(--dur-3) var(--ease-out), color var(--dur-3) var(--ease-out)'
      }
    }, lab);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
const T = {
  day: {
    bg: 'var(--cream-100)',
    fg: 'var(--text-body)',
    bd: 'var(--blue-700)'
  },
  night: {
    bg: 'var(--navy-900)',
    fg: 'var(--cream-100)',
    bd: 'var(--blue-600)'
  },
  blue: {
    bg: 'var(--blue-700)',
    fg: 'var(--cream-100)',
    bd: 'var(--blue-700)'
  }
};
function Card({
  tone = 'day',
  image,
  imageAlt = '',
  kicker,
  title,
  children,
  footer,
  padding = 30,
  style
}) {
  const t = T[tone] || T.day;
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 'var(--radius-card)',
      border: '2px solid ' + t.bd,
      background: t.bg,
      color: t.fg,
      overflow: 'hidden',
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      display: 'block',
      width: '100%',
      aspectRatio: '4/3',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding
    }
  }, kicker && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: tone === 'day' ? 'var(--blue-400)' : 'var(--blue-400)'
    }
  }, kicker), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 34,
      lineHeight: 1.05,
      color: tone === 'day' ? 'var(--blue-700)' : 'var(--cream-100)'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 'var(--lh-body)'
    }
  }, children), footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  kicker,
  onClose,
  children,
  width = 560,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      background: 'rgba(1,13,110,.55)',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
      animation: 'floatFade var(--dur-5) var(--ease)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: width,
      maxHeight: '90vh',
      overflow: 'auto',
      background: 'var(--cream-100)',
      color: 'var(--text-body)',
      borderRadius: 'var(--radius-card)',
      border: '2px solid var(--blue-700)',
      padding: '45px 35px 35px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 14,
      right: 14,
      height: 32,
      padding: '0 14px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--blue-700)',
      background: 'transparent',
      color: 'var(--blue-700)',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, "Close"), kicker && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--blue-400)',
      marginBottom: 13
    }
  }, kicker), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 20px',
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 44,
      lineHeight: 1,
      color: 'var(--blue-700)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 'var(--lh-body)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  children,
  placement = 'top'
}) {
  const [o, setO] = React.useState(false);
  const top = placement === 'top';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setO(true),
    onMouseLeave: () => setO(false),
    onFocus: () => setO(true),
    onBlur: () => setO(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      [top ? 'bottom' : 'top']: 'calc(100% + 10px)',
      transform: 'translateX(-50%) translateY(' + (o ? 0 : top ? 4 : -4) + 'px)',
      opacity: o ? 1 : 0,
      pointerEvents: 'none',
      whiteSpace: 'nowrap',
      padding: '8px 13px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--navy-900)',
      color: 'var(--cream-100)',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      transition: 'opacity var(--dur-2) var(--ease), transform var(--dur-2) var(--ease)'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chapters.jsx
try { (() => {
function Chapter01() {
  const {
    SectionHeader,
    Tag
  } = window.SleepWellDesignSystem_52d586;
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "01 Maintenance",
    style: {
      padding: '120px 30px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 60,
      alignItems: 'center',
      maxWidth: 1240,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 30
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    number: "01",
    kicker: "Sleep isn\u2019t a luxury",
    title: "Rebooting",
    subtitle: "The system."
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 20,
      lineHeight: 1.4,
      maxWidth: 460
    }
  }, "\uB9E4\uC77C \uBC24, \uB1CC\uB294 \uC870\uC6A9\uD55C \uC5C5\uB370\uC774\uD2B8\uB97C \uC2E4\uD589\uD569\uB2C8\uB2E4. \uCE90\uC2DC\uB97C \uBE44\uC6B0\uACE0, \uC5F0\uACB0\uC744 \uB2E4\uC2DC \uC787\uACE0, \uAE30\uC5B5\uC744 \uC815\uB9AC\uD558\uC8E0. \uB514\uC790\uC774\uB108\uAC00 \uB808\uC774\uC5B4\uB97C \uC815\uB3C8\uD558\uB4EF\uC774."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "00.00"), /*#__PURE__*/React.createElement(Tag, null, "06.57"), /*#__PURE__*/React.createElement(Tag, {
    variant: "solid"
  }, "8:00H")), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 34,
      color: 'var(--blue-700)'
    }
  }, "\u201CSleep isn\u2019t rest. It\u2019s maintenance.\u201D")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/textures/tunnel_texture.webp",
    alt: "",
    style: {
      width: '100%',
      aspectRatio: '1/1',
      objectFit: 'cover',
      borderRadius: 650
    }
  }));
}
function Insights() {
  const {
    Tabs,
    SectionHeader
  } = window.SleepWellDesignSystem_52d586;
  const data = [['Sleep isn’t rest.', 'It’s maintenance.'], ['High rate', '= low rest.'], ['We overclock our machines.', 'Then wonder why they overheat.'], ['The secret is rhythm', 'and not intensity.'], ['You can’t dream', 'in daylight.'], ['If creativity has roots,', 'this is where they grow.']];
  const [i, setI] = React.useState('1');
  const d = data[+i - 1];
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Insights",
    style: {
      background: 'var(--navy-900)',
      color: 'var(--cream-100)',
      padding: '120px 30px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 45,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 60,
      lineHeight: 1
    }
  }, "0", i, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22
    }
  }, " / 06")), /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'clamp(36px,5vw,69px)',
      lineHeight: 1,
      animation: 'floatFade .8s ease-in-out'
    }
  }, "\u201C", d[0], /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", null, d[1]), "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: 'var(--blue-400)'
    }
  }, "Find the sleeping Insights"), /*#__PURE__*/React.createElement(Tabs, {
    variant: "dots",
    tone: "night",
    items: ['1', '2', '3', '4', '5', '6'],
    value: i,
    onChange: setI
  }));
}
function Tips() {
  const {
    Card,
    SectionHeader
  } = window.SleepWellDesignSystem_52d586;
  const tips = [['01 - First tip', 'Set a bedtime ritual.', '일관된 루틴으로 천천히 내려오세요. 뇌는 패턴을 좋아합니다.', 'day'], ['02 - Second tip', 'Dim the lights.', '몸이 밤을 느끼게 두세요.', 'night'], ['03 - Third tip', 'Design your space.', '시원하고, 어둡고, 조용하게. 미니멀한 인터페이스처럼.', 'blue'], ['04 - Fourth tip', 'Watch your inputs', '카페인, 늦은 식사, 늦은 스트레스는 시스템을 멈추게 합니다.', 'day'], ['05 - Fifth tip', 'Move daily.', '낮의 움직임이 밤의 잠을 만듭니다.', 'night'], ['06 - Sixth tip', 'Mindful buffer.', '명상, 스트레칭, 독서 — 생각에 부드러운 착지를.', 'blue']];
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "07 Tips",
    style: {
      padding: '120px 30px',
      maxWidth: 1240,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 60
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    number: "07",
    kicker: "It\u2019s time to learn :",
    title: "How to redesign",
    subtitle: "for a better sleep."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))',
      gap: 20
    }
  }, tips.map(t => /*#__PURE__*/React.createElement(Card, {
    key: t[0],
    kicker: t[0],
    title: t[1],
    tone: t[3]
  }, t[2]))));
}
Object.assign(window, {
  Chapter01,
  Insights,
  Tips
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chapters.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function SiteFooter() {
  const {
    Input,
    Button
  } = window.SleepWellDesignSystem_52d586;
  const a = {
    color: 'var(--cream-100)',
    fontSize: 14,
    letterSpacing: '.04em',
    textTransform: 'uppercase'
  };
  return /*#__PURE__*/React.createElement("footer", {
    "data-screen-label": "Footer",
    style: {
      background: 'var(--blue-700)',
      color: 'var(--cream-100)',
      padding: '90px 30px 30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 60,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream-100)',
      borderRadius: 15,
      padding: '30px 35px',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup.avif",
    alt: "Sleep Well",
    style: {
      height: 90
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 20,
      lineHeight: 1.4,
      fontWeight: 300
    }
  }, "\uB354 \uC798 \uC26C\uACE0, \uB354 \uAE4A\uC774 \uC790\uAE30 \uC704\uD55C \uC791\uC740 \uD504\uB85C\uC81D\uD2B8. \uADE0\uD615\uACFC \uC9D1\uC911, \uADF8\uB9AC\uACE0 \uD6A8\uC728\uC801\uC778 \uC7A0\uC744 \uCC3E\uB294 \uC0AC\uB78C\uB4E4\uC744 \uC704\uD574 \uB9CC\uB4E4\uC5C8\uC2B5\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 30,
      flexWrap: 'wrap',
      alignItems: 'center',
      borderTop: '1px solid var(--cream-100)',
      paddingTop: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 30
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: a
  }, "Instagram"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: a
  }, "Kakao"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: a
  }, "Journal")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: '.04em'
    }
  }, "\xA9 ALL RIGHTS RESERVED | 2026"))));
}
Object.assign(window, {
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
function SiteHeader({
  onNote,
  onCart,
  cartCount,
  onNav,
  page
}) {
  const {
    IconButton
  } = window.SleepWellDesignSystem_52d586;
  const link = (id, label) => /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav(id),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: page === id ? 'var(--cream-100)' : 'var(--blue-400)',
      transition: 'color .3s ease-out'
    }
  }, label);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      padding: '20px 30px',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 30,
      pointerEvents: 'auto'
    }
  }, link('home', 'Guide'), link('product', 'Shop')), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('home'),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      pointerEvents: 'auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.svg",
    alt: "Sleep Well",
    style: {
      height: 66,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      justifyContent: 'flex-end',
      pointerEvents: 'auto'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onNote,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--blue-400)'
    }
  }, "The Note"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "\uC7A5\uBC14\uAD6C\uB2C8",
    onClick: onCart
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ShoppingBag"
  })), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -4,
      right: -4,
      minWidth: 20,
      height: 20,
      borderRadius: 650,
      background: 'var(--blue-400)',
      color: 'var(--cream-100)',
      fontSize: 11,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, cartCount)), /*#__PURE__*/React.createElement(IconButton, {
    label: "\uBA54\uB274"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Grip"
  }))));
}
Object.assign(window, {
  SiteHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Stars({
  n = 40
}) {
  const s = React.useMemo(() => Array.from({
    length: n
  }, (_, i) => ({
    l: i * 37.3 % 100,
    t: i * 53.7 % 70,
    r: i % 5 === 0 ? 4 : 2,
    b: i % 7 === 0
  })), [n]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, s.map((x, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      left: x.l + '%',
      top: x.t + '%',
      width: x.r,
      height: x.r,
      borderRadius: '50%',
      background: x.b ? 'var(--blue-400)' : 'var(--star)',
      animation: 'flash ' + (2 + i % 3) + 's infinite ' + i % 4 * .4 + 's'
    }
  })));
}
function Hero({
  onShop
}) {
  const {
    Eyebrow,
    Button
  } = window.SleepWellDesignSystem_52d586;
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Hero",
    style: {
      position: 'relative',
      height: '100vh',
      minHeight: 720,
      overflow: 'hidden',
      background: 'var(--gradient-night)'
    }
  }, /*#__PURE__*/React.createElement(Stars, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '24%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 28,
      textAlign: 'center',
      animation: 'floatFade .8s ease-in-out',
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The guide for a better resting"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'clamp(44px,7vw,87px)',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-display-wide)',
      color: 'var(--cream-100)'
    }
  }, "SLEEP WELL"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 480,
      fontSize: 18,
      lineHeight: 1.4,
      color: 'var(--cream-100)',
      fontWeight: 300
    }
  }, "\uAE4A\uC740 \uC7A0\uC744 \uC704\uD55C \uC800\uB141\uC758 \uC601\uC591\uC81C. \uC624\uB298 \uBC24, \uBAB8\uC758 \uC2DC\uC2A4\uD15C\uC744 \uCC9C\uCC9C\uD788 \uC7AC\uBD80\uD305\uD558\uC138\uC694."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 13
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "cream",
    onClick: onShop
  }, "Shop Deep Night"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-night"
  }, "Play insight"))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/textures/floor_lamp_texture.webp",
    alt: "",
    style: {
      position: 'absolute',
      left: '-5%',
      right: '-5%',
      bottom: '-38%',
      width: '110%',
      height: '60%',
      objectFit: 'cover',
      borderRadius: '50% 50% 0 0/30% 30% 0 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      fontSize: 12,
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: 'var(--cream-100)',
      animation: 'flash 2s infinite'
    }
  }, "Scroll to Explore"));
}
Object.assign(window, {
  Hero,
  Stars
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icon.jsx
try { (() => {
function Icon({
  name,
  size = 18,
  stroke = 1.5,
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const L = window.lucide;
    if (!L || !ref.current) return;
    const node = L.icons[name];
    if (!node) return;
    const el = L.createElement(node);
    el.setAttribute('width', size);
    el.setAttribute('height', size);
    el.setAttribute('stroke-width', stroke);
    ref.current.innerHTML = '';
    ref.current.appendChild(el);
  }, [name, size, stroke]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      ...style
    }
  });
}
Object.assign(window, {
  Icon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shop.jsx
try { (() => {
const SW_PRODUCTS = [{
  id: 'deep',
  name: 'Deep Night',
  desc: '마그네슘 · L-테아닌 · 타트체리. 잠드는 리듬을 되찾는 저녁 루틴.',
  price: 39000,
  orig: 46000,
  img: '../../assets/textures/tunnel_texture.webp',
  tags: ['30일분', '비건']
}, {
  id: 'slow',
  name: 'Slow Wave',
  desc: '깊은 서파수면을 위한 글리신 포뮬러.',
  price: 42000,
  img: '../../assets/textures/floor_texture.webp',
  tags: ['60정']
}, {
  id: 'dream',
  name: 'Dream Space',
  desc: '카모마일 · 레몬밤. 꿈의 공간으로 가는 허브 블렌드.',
  price: 28000,
  img: '../../assets/textures/texture4.webp',
  tags: ['티백 20']
}];
const won = n => '₩' + n.toLocaleString('ko-KR');
function ShopGrid({
  onOpen,
  onAdd
}) {
  const {
    ProductCard,
    SectionHeader
  } = window.SleepWellDesignSystem_52d586;
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Shop",
    style: {
      padding: '120px 30px',
      maxWidth: 1240,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 60
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    number: "08",
    kicker: "Now it\u2019s time to apply",
    title: "Tonight\u2019s",
    subtitle: "formula."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
      gap: 20
    }
  }, SW_PRODUCTS.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => onOpen(p.id),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(ProductCard, {
    tone: i === 1 ? 'night' : 'day',
    image: p.img,
    name: p.name,
    description: p.desc,
    price: won(p.price),
    originalPrice: p.orig && won(p.orig),
    tags: p.tags,
    onAdd: e => {
      e && e.stopPropagation && e.stopPropagation();
      onAdd(p.id, 1);
    }
  })))));
}
function ProductPage({
  id,
  onAdd
}) {
  const {
    Button,
    Tag,
    Radio,
    QuantityStepper,
    Eyebrow
  } = window.SleepWellDesignSystem_52d586;
  const p = SW_PRODUCTS.find(x => x.id === id) || SW_PRODUCTS[0];
  const [q, setQ] = React.useState(1);
  const [plan, setPlan] = React.useState('sub');
  const price = plan === 'sub' ? Math.round(p.price * .85 / 100) * 100 : p.price;
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Product",
    style: {
      minHeight: '100vh',
      paddingTop: 130,
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '0 30px 120px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,1fr)',
      gap: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gradient-night)',
      borderRadius: 15,
      aspectRatio: '1/1',
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Stars, {
    n: 20
  }), /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: "",
    style: {
      position: 'absolute',
      inset: '18%',
      width: '64%',
      height: '64%',
      objectFit: 'cover',
      borderRadius: 650,
      border: '2px solid var(--cream-100)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "day"
  }, "Deep sleep formula"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 87,
      lineHeight: .95,
      color: 'var(--blue-700)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 20,
      lineHeight: 1.4
    }
  }, p.desc, " \uC7A0\uB4E4\uAE30 30\uBD84 \uC804, \uB450 \uC54C. \uC54C\uB78C \uB300\uC2E0 \uB9AC\uB4EC\uC73C\uB85C \uAE68\uC5B4\uB098\uC138\uC694."), /*#__PURE__*/React.createElement(Radio, {
    name: "plan",
    value: plan,
    onChange: setPlan,
    options: [{
      value: 'once',
      label: '1회 구매 · ' + won(p.price)
    }, {
      value: 'sub',
      label: '정기 구독 · ' + won(Math.round(p.price * .85 / 100) * 100) + ' (15% 할인)'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 13,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: q,
    onChange: setQ
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onAdd(p.id, q),
    style: {
      flex: 1
    }
  }, "\uC7A5\uBC14\uAD6C\uB2C8 \uB2F4\uAE30 \u2014 ", won(price * q))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--blue-400)',
      paddingTop: 20,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14,
      fontSize: 14,
      color: 'var(--blue-700)'
    }
  }, [['Minimum duration', '8:00H'], ['Best before bed', '30 MIN'], ['Caffeine', '0 MG'], ['Shipping', '무료 배송']].map(([a, b]) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      textTransform: 'uppercase',
      letterSpacing: '.04em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blue-400)'
    }
  }, a), /*#__PURE__*/React.createElement("span", null, b)))))));
}
function CartDrawer({
  open,
  items,
  onClose,
  onQty
}) {
  const {
    Button,
    QuantityStepper
  } = window.SleepWellDesignSystem_52d586;
  const total = items.reduce((s, it) => s + SW_PRODUCTS.find(p => p.id === it.id).price * it.q, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 90,
      pointerEvents: open ? 'auto' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(1,13,110,.55)',
      backdropFilter: 'blur(6px)',
      opacity: open ? 1 : 0,
      transition: 'opacity .4s ease-in-out'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: 'min(440px,100%)',
      background: 'var(--cream-100)',
      borderLeft: '2px solid var(--blue-700)',
      transform: open ? 'none' : 'translateX(100%)',
      transition: 'transform .5s ease-in-out',
      display: 'flex',
      flexDirection: 'column',
      padding: 30,
      gap: 25
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 44,
      color: 'var(--blue-700)'
    }
  }, "Your night"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "outline",
    onClick: onClose
  }, "Close")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, items.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--blue-400)'
    }
  }, "\uC7A5\uBC14\uAD6C\uB2C8\uAC00 \uBE44\uC5B4 \uC788\uC5B4\uC694.") : items.map(it => {
    const p = SW_PRODUCTS.find(x => x.id === it.id);
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      style: {
        display: 'grid',
        gridTemplateColumns: '70px 1fr',
        gap: 14,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: p.img,
      alt: "",
      style: {
        width: 70,
        height: 70,
        borderRadius: '50%',
        objectFit: 'cover'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 24,
        color: 'var(--blue-700)'
      }
    }, p.name), /*#__PURE__*/React.createElement("span", null, won(p.price * it.q))), /*#__PURE__*/React.createElement(QuantityStepper, {
      value: it.q,
      min: 0,
      onChange: n => onQty(it.id, n)
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--blue-400)',
      paddingTop: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      textTransform: 'uppercase',
      letterSpacing: '.04em',
      fontSize: 14,
      color: 'var(--blue-700)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, won(total))), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    disabled: !items.length
  }, "\uACB0\uC81C\uD558\uAE30"))));
}
Object.assign(window, {
  ShopGrid,
  ProductPage,
  CartDrawer,
  SW_PRODUCTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shop.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
