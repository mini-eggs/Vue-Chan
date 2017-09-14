import "./home.css";

const name = "x-home";

function mounted() {
  this.requestBoards();
}

const template = `
  <section id="home">
    <div v-for="(item, index) in boards" :key="index">
      <span>/{{ item.board }}/ - {{ item.title }}</span>
    </div>
  </section>
`;

export default { name, template, mounted };
