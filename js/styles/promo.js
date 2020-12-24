const paddingTopAndBottom = 100

scss.style({
  "section#promo": {
    "padding": `${paddingTopAndBottom}px 0`,
    "max-width": "40%",
    "text-align": "center",
    "margin": "auto",

    "h1": {
      "margin-bottom": 30
    },

    "ul": {
      "list-style": "none",

      "li": {
        "font-size": 20,

        "a": {
          "text-decoration": "none",
          "color": "silver",
          "transition": ".3s",

          "&:hover": {
            "text-decoration": "underline",
            "padding-left": 20
          }
        }
      }
    },

    "small": {
      "font-size": 12
    }
  }
})