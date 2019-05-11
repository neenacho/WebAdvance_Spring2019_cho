const app = new Vue({
  el: "#app",
  data() {
    return {
      fonts: null,
      ready: null,
      categories: [],
      headingCategory: null,
      headingFont: null,
      bodyCategory: null,
      headingStandart: null,
      headingImport: null,
      headingFontUrl: null,
      bodyStandart: null,
      bodyImport: null,
      bodyFont: null,
      bodyFontUrl: null,
      bodyFontSize: 18,
      headingFontSize: 32,
      darkBackground: false };

  },
  created() {
    this.$http.
    get(
    "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBjnzN-_nm1saTaG_pXEDx3TFlSAXESdt8").

    then(
    response => {
      this.ready = true;
      this.fonts = response.body.items;
      this.allCategories();
      this.generate();
    },
    response => {
      this.ready = false;
    });

  },
  methods: {
    allCategories() {
      this.fonts.
      filter(
      (category, index, self) =>
      self.findIndex(t => {
        return t.category === category.category;
      }) === index).

      map(obj => {
        this.categories.push(obj["category"]);
      });
      this.headingCategory = this.categories[0];
      this.bodyCategory = this.categories[1];
    },
    fontFilter(category) {
      let tempFonts = [],font;
      this.fonts.
      filter(item => {
        return item.category == category;
      }).
      map(obj => {
        tempFonts.push(obj);
      });
      font = tempFonts[Math.floor(Math.random() * (tempFonts.length - 1) + 1)];
      return font;
    },
    generate() {
      this.headingFont = this.fontFilter(this.headingCategory);
      this.bodyFont = this.fontFilter(this.bodyCategory);
      const combinedFont = document.head.querySelector("#combined-font");
      const googleUrl = "https://fonts.google.com/specimen/";
      this.headingFontUrl =
      googleUrl + this.headingFont.family.replace(/ /g, "+");
      this.bodyFontUrl = googleUrl + this.bodyFont.family.replace(/ /g, "+");
      if (combinedFont == null) {
        const link = document.createElement("link");
        link.id = "combined-font";
        link.href = `https://fonts.googleapis.com/css?family=${this.headingFont.family.replace(/ /g, "+")}|${this.bodyFont.family.replace(/ /g, "+")}`;
        link.rel = "stylesheet";
        document.head.appendChild(link);
      } else {
        combinedFont.href = `https://fonts.googleapis.com/css?family=${this.headingFont.family.replace(/ /g, "+")}|${this.bodyFont.family.replace(/ /g, "+")}`;
      }
    },
    changeBackground() {
      this.darkBackground ? this.darkBackground = false : this.darkBackground = true;
    } },

  watch: {
    bodyFontSize(val) {
      val == 11 ? this.bodyFontSize = 12 : false;
    },
    headingFontSize(val) {
      val == 11 ? this.headingFontSize = 12 : false;
    } } });