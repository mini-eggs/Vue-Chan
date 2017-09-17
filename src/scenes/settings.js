import "./settings.css";
import Picker from "../components/picker";

const name = "x-settings";

const colors = [
  { name: "red" },
  { name: "pink" },
  { name: "purple" },
  { name: "deep-purple" },
  { name: "indigo" },
  { name: "blue" },
  { name: "light-blue" },
  { name: "cyan" },
  { name: "teal" },
  { name: "green" },
  { name: "light-green" },
  { name: "lime" },
  { name: "yellow" },
  { name: "amber" },
  { name: "orange" },
  { name: "deep-orange" },
  { name: "brown" },
  { name: "grey" },
  { name: "blue-grey" },
  { name: "white" },
  { name: "black" }
];

const hues = [
  { name: "500" },
  { name: "50" },
  { name: "100" },
  { name: "200" },
  { name: "300" },
  { name: "400" },
  { name: "500" },
  { name: "600" },
  { name: "700" },
  { name: "800" },
  { name: "900" },
  { name: "A100" },
  { name: "A200" },
  { name: "A400" },
  { name: "A700" }
];

const textColors = [{ name: "white" }, { name: "black" }];

const data = () => ({
  primary: "",
  primaryHue: "",
  primaryTextColor: "",
  accent: "",
  accentHue: "",
  accentTextColor: "",
  warn: "",
  warnHue: "",
  warnTextColor: "",
  background: "",
  backgroundHue: "",
  backgroundTextColor: "",
  colors,
  hues,
  textColors
});

const components = {
  "x-picker": Picker
};

const methods = {
  getTheme() {
    return {
      primary: {
        color: this.primary || this.theme.primary.color,
        hue: this.primaryHue || this.theme.primary.hue,
        textColor: this.primaryTextColor || this.theme.primary.textColor
      },
      accent: {
        color: this.accent || this.theme.accent.color,
        hue: this.accentHue || this.theme.accent.hue,
        textColor: this.accentTextColor || this.theme.accent.textColor
      },
      warn: {
        color: this.warn || this.theme.warn.color,
        hue: this.warnHue || this.theme.warn.hue,
        textColor: this.warnTextColor || this.theme.warn.textColor
      },
      background: {
        color: this.background || this.theme.background.color,
        hue: this.backgroundHue || this.theme.background.hue,
        textColor: this.backgroundTextColor || this.theme.background.textColor
      }
    };
  },
  applyTheme() {
    this.saveTheme(this.getTheme());
  },
  handleChange(type) {
    return ({ name }) => {
      this[type] = name;
      this.$nextTick(this.applyTheme);
    };
  }
};

const template = `
  <div id="settings">
    <form novalidate @submit.stop.prevent>

      <div class="md-title">Theme</div>

      <div class="spacer"></div>

      <x-picker
        title="Primary color"
        :value="primary" 
        :onChange="handleChange('primary')"
        :list="colors"
      ></x-picker>
      <x-picker
        title="Primary hue"
        :value="primaryHue" 
        :onChange="handleChange('primaryHue')"
        :list="hues"
      ></x-picker>
      <x-picker
        title="Primary text color"
        :value="primaryTextColor" 
        :onChange="handleChange('primaryTextColor')"
        :list="textColors"
      ></x-picker>

      <x-picker
        title="Accent color"
        :value="accent" 
        :onChange="handleChange('accent')"
        :list="colors"
      ></x-picker>
      <x-picker
        title="Accent hue"
        :value="accentHue" 
        :onChange="handleChange('accentHue')"
        :list="hues"
      ></x-picker>
      <x-picker
        title="Accent text color"
        :value="accentTextColor" 
        :onChange="handleChange('accentTextColor')"
        :list="textColors"
      ></x-picker>

      <x-picker
        title="Warn color"
        :value="warn" 
        :onChange="handleChange('warn')"
        :list="colors"
      ></x-picker>
      <x-picker
        title="Warn hue"
        :value="warnHue" 
        :onChange="handleChange('warnHue')"
        :list="hues"
      ></x-picker>
      <x-picker
        title="Warn text color"
        :value="warnTextColor" 
        :onChange="handleChange('warnTextColor')"
        :list="textColors"
      ></x-picker>

      <x-picker
        title="Background color"
        :value="background" 
        :onChange="handleChange('background')"
        :list="colors"
      ></x-picker>
      <x-picker
        title="Background hue"
        :value="backgroundHue" 
        :onChange="handleChange('backgroundHue')"
        :list="hues"
      ></x-picker>
      <x-picker
        title="Background text color"
        :value="backgroundTextColor" 
        :onChange="handleChange('backgroundTextColor')"
        :list="textColors"
      ></x-picker>

    </form>
  </div>
`;

export default { name, data, components, methods, template };
