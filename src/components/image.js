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
      <md-button class="md-primary md-raised" @click.stop="loadImage">Load Image</md-button>
    </div>

    <!--IMAGE-->
    <div v-else>
    
      <video v-if="item.ext === '.webm' " controls autoplay muted>
        <source :src="item.image" type="video/mp4">
        <source :src="item.image" type="video/ogg">
        Your browser does not support the video tag.
      </video>

      <img v-else :src="item.image" />

    </div>

  </div>
`;

export default { name, props, data, methods, template };
