// @flow

type HeaderEventPropsT = {|
  container: string,
  inner: string,
  offset: number
|};

class HeaderEvent {
  container: string;
  inner: string;
  offset: number;
  lastPosition: number;

  constructor(props: HeaderEventPropsT) {
    this.container = props.container;
    this.inner = props.inner;
    this.offset = props.offset;
    this.lastPosition = 0;
  }

  _findHTMLElementExn(name: string): HTMLElement {
    const el = document.querySelector(name);
    if (!el) {
      throw new Error(`No HTML element available for ${name}`);
    } else {
      return el;
    }
  }

  get _header(): HTMLElement {
    return this._findHTMLElementExn(this.container);
  }

  get _hamburgerEL(): HTMLElement {
    return this._findHTMLElementExn(this.inner);
  }

  _showHeader() {
    this._header.style.transform = `translateY(0px)`;
  }

  _hideHeader() {
    const pixels = this._hamburgerEL.offsetHeight * -1;
    this._header.style.transform = `translateY(${pixels}px)`;
  }

  scrollHandler() {
    const scrollPosition = window.scrollY;
    const { offset } = this;

    if (scrollPosition < this.lastPosition) {
      this._showHeader();
    } else if (scrollPosition > offset) {
      this._hideHeader();
    }

    this.lastPosition = scrollPosition;
  }
}

export default HeaderEvent;
