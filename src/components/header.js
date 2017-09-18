// @flow

const name = "x-header";

const methods = {
  handleSearch() {
    if (this.$route.path === "/") {
      this.$bus.$emit("search");
    } else {
      this.$router.push({ path: "/" }, () => {
        this.$nextTick(() => {
          this.$bus.$emit("search");
        });
      });
    }
  },
  handleRefresh() {
    this.$bus.$emit("refresh");
    window.scrollTo(0, 0);
  }
};

const template = `
  <header>
    <v-toolbar dark class="primary">
    
      <!--BRAND-->
      <router-link tag="v-toolbar-items" to="/">
        <v-btn flat>Vue Chan</v-btn>
      </router-link>

      <v-spacer></v-spacer>

      <!--ACTIONS-->
      <v-btn icon @click="$router.back()">
        <v-icon>arrow_back</v-icon>
      </v-btn>

      <v-btn icon @click="handleRefresh" >
        <v-icon>refresh</v-icon>
      </v-btn>

      <v-btn icon @click="handleSearch" >
        <v-icon>search</v-icon>
      </v-btn>

      <router-link tag="span" to="/settings">
        <v-btn icon>
          <v-icon>person</v-icon>
        </v-btn>
      </router-link>

    </v-toolbar>
  </header>
`;

export default { name, template, methods };
