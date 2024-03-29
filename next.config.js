const oldPagesMapping = {
  "/archive": "/articles/fallout1-2",
  "/banners": "/gallery/others",
  "/concept/anim": "/diggings/others/concepts/animations",
  "/concept/box": "/diggings/others/items/box",
  "/concept/chem": "/diggings/others/items/chem",
  "/concept/cod": "/diggings/others/items/cod",
  "/concept/cub": "/diggings/others/items/cub",
  "/concept/demo": "/diggings/others/concepts/demo",
  "/concept/holodisks": "/diggings/others/concepts/holodisks",
  "/concept": "/diggings/others",
  "/concept/key": "/diggings/others/items/key",
  "/concept/kulon": "/diggings/others/items/kulon",
  "/concept/neuro": "/diggings/others/items/neuro",
  //"/concept/quests": "",
  "/concept/redcard": "/diggings/others/items/redcard",
  "/concept/switch": "/diggings/others/items/switch",
  "/concept/thand": "/diggings/others/items/thand",
  "/concept/zipgun": "/diggings/others/items/zipgun",
  "/facts/aranc": "/articles/fallout1-2/aranc",
  "/facts/bbweap": "/articles/fallout1-2/bbweap",
  "/facts/economy": "/articles/fallout1-2/economy",
  "/facts/f3geo": "/articles/fallout3/pre-release/f3geo",
  "/facts/f3map": "/articles/fallout3/pre-release/f3map",
  "/facts/fallout-1-editorial": "/articles/fallout1-2/fallout-1-editorial",
  "/facts/fallout-2-editorial": "/articles/fallout1-2/fallout-2-editorial",
  "/facts/fallout-tactics-2": "/articles/fallout1-2/fallout-tactics-2",
  "/facts/fire": "/articles/fallout1-2/fire",
  "/facts/fo3doors": "/articles/fallout3/pre-release/fo3doors",
  "/facts/fo3industry": "/articles/fallout3/pre-release/fo3industry",
  "/facts/gekkons": "/articles/fallout1-2/gekkons",
  "/facts/gekkons2": "/articles/fallout1-2/gekkons2",
  "/facts": "/articles/fallout1-2",
  "/facts/items": "/articles/fallout1-2/items",
  "/facts/klamath": "/articles/fallout1-2/klamath",
  "/facts/lctions": "/articles/fallout1-2/lctions",
  "/facts/modsort": "/articles/fallout1-2/modsort",
  "/facts/nature": "/articles/fallout1-2/nature",
  "/facts/nrarms": "/articles/fallout1-2/nrarms",
  "/facts/numbers": "/articles/fallout1-2/numbers",
  "/facts/redding": "/articles/fallout1-2/redding",
  "/facts/religion": "/articles/fallout1-2/religion",
  "/facts/screenshots": "/articles/fallout1-2/screenshots",
  "/facts/standby": "/articles/fallout3/pre-release/standby",
  "/facts/sulik": "/articles/fallout1-2/sulik",
  "/facts/toxic": "/articles/fallout1-2/toxic",
  "/facts/v13path": "/articles/fallout1-2/v13path",
  "/facts/vbammo": "/articles/fallout3/van-buren/ammo",
  "/facts/vbarmor": "/articles/fallout3/van-buren/armor",
  "/facts/vbfaq": "/articles/fallout3/van-buren/faq",
  "/facts/vbfire": "/articles/fallout3/van-buren/firearms",
  "/facts/vbhand": "/articles/fallout3/van-buren/handarms",
  "/facts/vbother": "/articles/fallout3/van-buren/others",
  "/facts/vbposters": "/articles/fallout3/van-buren/posters",
  "/facts/walls": "/articles/fallout1-2/walls",
  "/fallout-3/achievements": "/articles/fallout3/post-release/achievements",
  "/fallout-3/evolution": "/articles/fallout3/post-release/evolution",
  "/fallout-3": "/articles/fallout3",
  //"/files": "",
  "/forum": "/",
  "/gallery/comics": "/gallery/dgt-comics",
  "/gallery/comics_all": "/gallery/dgt-comics",
  "/gallery/concept": "/gallery/concept-arts",
  "/gallery/dvg": "/gallery/dvg-comics",
  "/gallery/dvg_all": "/gallery/dvg-comics",
  "/gallery": "/gallery/wallpapers",
  //"/gallery/screenshots": "",
  "/gallery/stuff": "/gallery/others",
  //"/gallery/wallpapers": "",
  "/humor/dezinfo": "/articles/humor/developers/dezinfo",
  "/humor/fallout": "/articles/humor/gamers/toolong",
  "/humor/fo2hate": "/articles/fallout3/pre-release/fo2hate",
  "/humor/graves": "/articles/humor/developers/graves",
  "/humor/humor10": "/articles/humor/developers/humor10",
  "/humor": "/articles/humor",
  "/humor/krut": "/articles/humor/gamers/krut",
  "/humor/lamp": "/articles/humor/gamers/lamp",
  "/humor/quotes": "/articles/humor/developers/quotes",
  "/humor/quotes/quotes": "/articles/humor/developers/quotes",
  "/humor/story/17moments": "/articles/humor/fiction/17moments",
  "/humor/story/cheaters": "/articles/humor/fiction/cheaters",
  "/humor/town": "/articles/humor/gamers/town",
  "/imgview": "/gallery/wallpapers",
  //"/info/author": "",
  "/info/contact": "/about",
  "/info": "/about",
  "/info/links": "/about/links",
  "/info/music": "/about/music",
  "/info/news/2006": "/about/news-archive/2006",
  "/info/news/2007": "/about/news-archive/2007",
  "/info/news/2008": "/about/news-archive/2008",
  "/info/news/old": "/about/news-archive/oldest",
  "/locations/abbey": "/diggings/locations/fallout2/abbey",
  "/locations/blades": "/diggings/locations/fallout1/blades",
  "/locations/bosdead": "/diggings/locations/fallout1/bosdead",
  "/locations/burrows": "/diggings/locations/fallout1/burrows",
  "/locations/denres": "/diggings/locations/fallout2/denres",
  "/locations/desert13": "/diggings/locations/fallout2/desert13",
  "/locations/epa": "/diggings/locations/fallout2/epa",
  "/locations": "/diggings/locations",
  "/locations/invaded": "/diggings/locations/fallout1/invaded",
  "/locations/jackals": "/diggings/locations/fallout1/jackals",
  "/locations/pvillage": "/diggings/locations/fallout2/pvillage",
  "/locations/rippers": "/diggings/locations/fallout1/rippers",
  "/locations/vipers": "/diggings/locations/fallout1/vipers",
  "/persons/agatha": "/diggings/persons/fallout1/shady-sands#agatha",
  "/persons/alan": "/diggings/persons/fallout1/boneyard#alan",
  "/persons/amber": "/diggings/persons/fallout1/boneyard#amber",
  "/persons/barterman": "/diggings/persons/fallout1/shady-sands#barterman",
  "/persons/beca": "/diggings/persons/fallout1/boneyard#beca",
  "/persons/brenden": "/diggings/persons/fallout1/bos#brenden",
  "/persons/cheat": "/diggings/persons/fallout2/cheaters#vc",
  "/persons/cheater": "/diggings/persons/fallout2/cheaters#sf",
  "/persons/cheater2": "/diggings/persons/fallout2/cheaters#ncr",
  "/persons/dolgan": "/diggings/persons/fallout1/boneyard#dolgan",
  "/persons/dragon": "/diggings/persons/fallout1/boneyard#dragon",
  "/persons/elder": "/diggings/persons/fallout1/shady-sands#elder",
  "/persons/farli": "/diggings/persons/fallout1/bos#farli",
  "/persons/fire": "/diggings/persons/fallout1/boneyard#fire",
  //"/persons/genvault": "",
  "/persons/heather": "/diggings/persons/fallout1/boneyard#heather",
  "/persons/": "/diggings/persons/fallout1/junktown#hernandez",
  "/persons/hubbian": "/diggings/persons/fallout1/hub#hubbian",
  "/persons": "/diggings/persons",
  "/persons/jake": "/diggings/persons/fallout1/boneyard#jake",
  "/persons/jason": "/diggings/persons/fallout1/boneyard#jason",
  "/persons/joe": "/diggings/persons/fallout2/joe",
  "/persons/jtbob": "/diggings/persons/fallout1/junktown#jtbob",
  "/persons/julianna": "/diggings/persons/fallout1/boneyard#julianna",
  "/persons/kaga": "/diggings/persons/fallout2/kaga",
  "/persons/lance": "/diggings/persons/fallout1/shady-sands#lance",
  "/persons/marney": "/diggings/persons/fallout1/boneyard#marney",
  "/persons/michelle": "/diggings/persons/fallout1/boneyard#michelle",
  "/persons/monte": "/diggings/persons/fallout2/newreno#monte",
  "/persons/nail": "/diggings/persons/fallout1/boneyard#nail",
  "/persons/nikki": "/diggings/persons/fallout2/newreno#nikki",
  "/persons/peter": "/diggings/persons/fallout1/boneyard#peter",
  "/persons/rae": "/diggings/persons/fallout1/cathedral#rae",
  "/persons/richie": "/diggings/persons/fallout1/hub#richie",
  "/persons/rico": "/diggings/persons/fallout2/newreno#rico",
  "/persons/romero": "/diggings/persons/fallout1/boneyard#romero",
  "/persons/rufus": "/diggings/persons/fallout1/hub#rufus",
  "/persons/sammy": "/diggings/persons/fallout1/shady-sands#sammy",
  "/persons/tangler": "/diggings/persons/fallout1/boneyard#tangler",
  "/persons/troy": "/diggings/persons/fallout1/hub#troy",
  "/persons/uthern": "/diggings/persons/fallout1/cathedral#uthern",
  "/persons/vasquez": "/diggings/persons/fallout1/junktown#vasquez",
  "/preview": "/gallery",
  "/r": "/",
  "/toxic": "/articles/humor",
  "/toxic/izvrat": "/articles/humor/toxic/izvrat",
  "/toxic/maps": "/articles/humor/toxic/maps",
  "/toxic/suicid": "/articles/humor/toxic/suicid",
  "/toxic/toilet": "/articles/humor/toxic/toilet",
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:path*/index.php',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/:path*.php',
        destination: '/:path*',
        permanent: true,
      },
      ...Object.entries(oldPagesMapping).map(([oldPath, newPath]) => ({
        source: oldPath,
        destination: newPath,
        permanent: true,
      }))
    ];
  }
};

module.exports = nextConfig;
