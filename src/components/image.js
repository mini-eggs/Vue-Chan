import "./image.css";

const name = "x-image";

const props = ["item"];

const data = () => ({ showImage: false });

const methods = {
  loadImage() {
    this.showImage = true;
  }
};

const template = `
  <div id="image" v-if="item.image">
  
    <!--BUTTON-->
    <div v-if="!showImage" class="button-container" :style="{ backgroundImage: 'url(' + item.thumbnail + ')' }">
      <md-button class="md-primary md-raised" @click.stop="loadImage">
        <md-icon >visibility_on</md-icon>
      </md-button>
    </div>

    <!--IMAGE-->
    <div v-else>
    
      <video v-if="item.ext === '.webm' " controls autoplay muted>
        <source :src="item.image" type="video/mp4">
        <source :src="item.image" type="video/ogg">
        Your browser does not support the video tag.
      </video>

      <a v-else :href="item.image" target="_blank">
        <img :src="item.image" />
      </a>

    </div>

  </div>
`;

export default { name, props, data, methods, template };
