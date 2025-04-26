const r = (i, t, e) => Math.min(Math.max(i, t), e), p = (i, t) => {
  let e = 0, n = null;
  return (...s) => {
    const a = Date.now();
    a - e >= t ? (e = a, i(...s)) : n || (n = window.setTimeout(() => {
      e = Date.now(), n = null, i(...s);
    }, t - (a - e)));
  };
}, h = (i, t, e) => {
  if (i !== null)
    return t === e ? i.setAttribute("disabled", "true") : i.removeAttribute("disabled");
}, u = (i, t) => t ? `${i} ${i <= 1 ? t.single : t.plural}` : i.toString(), v = (i, t = {}, e) => {
  const n = new CustomEvent(`Spinbutton.${e}`, {
    bubbles: !1,
    cancelable: !0,
    detail: t
  });
  return i.dispatchEvent(n);
}, c = {
  text: {
    single: "item",
    plural: "items"
  },
  step: 1,
  delay: 20
}, d = () => {
  const i = document.createElement("style");
  i.textContent = `
		.sr-only {
			position: absolute;
			width: 1px;
			height: 1px;
			padding: 0;
			margin: -1px;
			overflow: hidden;
			clip: rect(0, 0, 0, 0);
			white-space: nowrap;
			border: 0;
		}
	`, document.head.appendChild(i);
};
d();
class m {
  constructor(t, e = {}) {
    this.throttle = null, this.handleClick = (s) => this.setValue(s), this.handleInput = (s) => {
      const { target: a } = s, l = a.value, o = isNaN(Number(l)) ? 0 : parseInt(l, 10);
      this.setValue(o);
    }, this.handleKeydown = (s) => {
      const a = s.key || s.code, l = {
        ArrowUp: () => this.setValue(this.value.now + this.options.step),
        ArrowRight: () => this.setValue(this.value.now + this.options.step),
        ArrowDown: () => this.setValue(this.value.now - this.options.step),
        ArrowLeft: () => this.setValue(this.value.now - this.options.step),
        PageDown: () => this.setValue(this.value.now - this.options.step * 5),
        PageUp: () => this.setValue(this.value.now + this.options.step * 5),
        Home: () => this.value.min && this.setValue(this.value.min),
        End: () => this.value.max && this.setValue(this.value.max),
        default: () => !1
      };
      l[a] && (s.preventDefault(), l[a]());
    }, this.el = t, this.options = { ...c, ...e }, this.$input = this.el.querySelector('input[type="text"]'), this.$increase = this.el.querySelector(".js-increase"), this.$decrease = this.el.querySelector(".js-decrease"), this.$liveRegion = document.createElement("div"), this.$liveRegion.setAttribute("aria-live", "polite"), this.$liveRegion.setAttribute("aria-atomic", "true"), this.$liveRegion.classList.add("sr-only"), this.el.appendChild(this.$liveRegion);
    const n = parseInt(this.el.getAttribute("aria-valuenow") || "0", 10);
    this.text = (() => {
      try {
        return JSON.parse(this.el.getAttribute("data-spinbutton-text")) || e.text;
      } catch {
        return e.text;
      }
    })(), this.options.step = parseInt(this.el.getAttribute("data-spinbutton-step") || this.options.step.toString(), 10), this.options.delay = parseInt(this.el.getAttribute("data-spinbutton-delay") || this.options.delay.toString(), 10), this.value = {
      min: this.el.getAttribute("aria-valuemin") !== null ? parseInt(this.el.getAttribute("aria-valuemin"), 10) : !1,
      max: this.el.getAttribute("aria-valuemax") !== null ? parseInt(this.el.getAttribute("aria-valuemax") || "0", 10) : !1,
      now: n,
      text: u(n, this.text).toString()
    }, this.handleClick = this.handleClick.bind(this);
  }
  init() {
    this.setValue(this.value.now, !1), this.initEvents();
  }
  initEvents() {
    this.el.addEventListener("keydown", this.handleKeydown), this.$increase && this.$increase.addEventListener("click", () => this.handleClick(this.value.now + this.options.step)), this.$decrease && this.$decrease.addEventListener("click", () => this.handleClick(this.value.now - this.options.step)), this.$input && this.$input.addEventListener("input", this.handleInput);
  }
  setMin(t, e = !0) {
    this.value.min = parseInt(t.toString(), 10), this.el.setAttribute("aria-valuemin", t.toString()), this.setValue(this.value.now, e);
  }
  setMax(t, e = !0) {
    this.value.max = parseInt(t.toString(), 10), this.el.setAttribute("aria-valuemax", t.toString()), this.setValue(this.value.now, e);
  }
  setValue(t, e = !0) {
    const n = parseInt(t.toString(), 10), s = this.value.min !== !1 ? this.value.min : Number.MIN_SAFE_INTEGER, a = this.value.max !== !1 ? this.value.max : Number.MAX_SAFE_INTEGER;
    this.value.now = r(n, s, a), this.value.text = u(this.value.now, this.text), this.value.max && h(this.$increase, this.value.now, this.value.max), this.value.min && h(this.$decrease, this.value.now, this.value.min), this.el.setAttribute("aria-valuenow", this.value.now.toString()), this.el.setAttribute("aria-valuetext", this.value.text), this.$input && (this.$input.setAttribute("value", this.value.now.toString()), this.$input.value = this.value.now.toString()), this.$liveRegion && (this.$liveRegion.textContent = this.value.text), e && (this.throttle || (this.throttle = p(() => {
      const l = { value: this.value.now };
      v(this.el, l, "change");
    }, this.options.delay)), this.throttle());
  }
}
export {
  m as default
};
