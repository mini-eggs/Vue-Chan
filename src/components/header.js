import "./header.css";
import HeaderEvent from "../objects/headerEvent";

// constants

const HOME = 0;

const headerEvent = new HeaderEvent({
  container: "header",
  inner: "#hamburger-container",
  offset: 200
});

const scrollHandler = () => headerEvent.scrollHandler();

function getRouteFromIndex(index) {
  switch (index) {
    case HOME:
    default: {
      return "/";
    }
  }
}

// component specific

const name = "x-header";

const methods = {
  handleChange(index) {
    const path = getRouteFromIndex(index);
    this.$router.push({ path });
  }
};

function mounted() {
  window.addEventListener("scroll", scrollHandler);
}

function destroyed() {
  window.removeEventListener("scroll", scrollHandler);
}

const template = `
  <header>

    <!-- HAMBURGER -->
    <div id="hamburger-container" class="z-index-1 relative">
      <md-toolbar>
        <md-button class="md-icon-button">
          <md-icon>menu</md-icon>
        </md-button>
        <h2 class="md-title">Vue Chan</h2>
      </md-toolbar>
    </div>

    <!-- TABS -->
    <md-bottom-bar @change="handleChange" md-shift>
      <md-bottom-bar-item md-icon="home" md-active>Home</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="books">Books</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
    </md-bottom-bar>
    
  </header>
`;

export { name, template, methods, mounted, destroyed };
