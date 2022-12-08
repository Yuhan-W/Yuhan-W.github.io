const isProd = process.env.NODE_ENV === "production";


module.exports = {
  title: "Yuhan Wang",
  description: "Yuhan Wang is an undergraduate student in computer science.",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/img/logo/favicon-16x16.png`
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/favicon-32x32.png`
      }
    ],
    ["meta", { name: "application-name", content: "Yuhan Wang" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "Yuhan Wang" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` }
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }]
  ],

  /* site-level locales config
  locales: {
    "/": {
      lang: "en-US",
      title: "VuePress Theme Gungnir",
      description: "A blog theme for VuePress"
    }
  },*/

  bundler: "@vuepress/vite",

  theme: "vuepress-theme-gungnir",

  themeConfig: {
    repo: "Yuhan-W/Yuhan-W.github.io",
    docsDir: "blog",
    docsBranch: "main",

    //hitokoto: "https://v1.hitokoto.cn?c=i", // enable hitokoto (一言) or not?

    // personal information
    personalInfo: {
      name: "Yuhan's Blog",
      avatar: "/img/myavatar.jpg",
      description: "CS, Math, Physics",
      sns: {
        github: "Yuhan-W",
        linkedin: "yuhan-wang-cn",
        facebook: "yuhanwang.us",
        twitter: "real_wangyuhan",
        zhihu: "wang-yu-han-74-82",
        email: "cnwangyuhan@gmail.com",
        //rss: "/rss.xml"
      }
    },

    // header images on home page
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.jpg",
        mask: "rgba(40, 57, 101, .4)"
      },
      /*{
        path: "/img/home-bg/2.jpg",
        mask: "rgba(196, 176, 131, .1)"
      },*/
      {
        path: "/img/home-bg/4.jpg",
        mask: "rgba(19, 75, 50, .2)"
      },
      {
        path: "/img/home-bg/3.jpg",
        mask: "rgba(68, 74, 83, .1)"
      },
      {
        path: "/img/home-bg/bg_11.webp",
        mask: "rgba(68, 74, 83, .1)"
      },
      {
        path: "/img/home-bg/bg_15.webp",
        mask: "rgba(68, 74, 83, .1)"
      },
      {
        path: "/img/home-bg/bg_18.webp",
        mask: "rgba(68, 74, 83, .1)"
      },
      {
        path: "/img/home-bg/bg_21.webp",
        mask: "rgba(68, 74, 83, .1)"
      },
      {
        path: "/img/home-bg/bg_22.webp",
        mask: "rgba(68, 74, 83, .1)"
      },
    ],

    // other pages
    pages: {
      tags: {
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },
      links: {
        subtitle:
          "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      }
    },

    // theme-level locales config
    /*locales: {
      /**
       * English locale config
       *
       * As the default locale is English, we don't need to set all of the locale fields
       
      "/": {
        // navbar
        navbar: navbar.en,
        // sidebar
        sidebar: sidebar.en
      },

    },*/

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      katex: true,
      giscus: {
        repo: "This-is-an-Apple/blog-giscus-comments",
        repoId: "R_kgDOGl2SjQ",
        category: "Announcements",
        categoryId: "DIC_kwDOGl2Sjc4CAcxK",
        darkTheme: "https://yuhan-w.github.io/styles/giscus-dark.css"
      },
      mdPlus: {
        all: true
      },
      ga: "G-HCQSX53XFG",
      ba: "75381d210789d3eaf855fa16246860cc",
      rss: {
        siteURL: "https://yuhan-w.github.io",
        copyright: "Yuhan 2022"
      }
    },

    navbar: [
      {
        text: "Home",
        link: "/",
        icon: "fa-fort-awesome"
      },
      {
        text: "Tags",
        link: "/tags/",
        icon: "fa-tag"
      },
      {
        text: "Links",
        link: "/links/",
        icon: "fa-satellite-dish"
      },
      //{
        //text: "About",
        //link: "/about/",
        //icon: "fa-paw"
      //},
      {
        text: "Notes",
        link: "https://portfolio.zxh.io/",
        icon: "ri-book-2-fill"
      }
    ],

    footer: `
      &copy; <a href="https://github.com/Yuhan-W" target="_blank">Yuhan Wang</a> 2022
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  },

  markdown: {
    extractHeaders: {
      level: [2, 3, 4, 5]
    },
    code: {
      lineNumbers: false
    }
  }
};
