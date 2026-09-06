export type Project = {
  slug: string;
  title: string;
  image: string;
  tags: readonly string[];
};

export const projects: readonly Project[] = [
  { slug: "amazingchecks", title: "Amazing Checks", image: "/project/amazingchecks_cpp.webp", tags: ["C++", "Game"] },
  { slug: "amazingphoto", title: "Amazing Photo", image: "/project/amazingphoto.webp", tags: ["Application", "Image"] },
  { slug: "dllog", title: "DL Log", image: "/project/dllog.webp", tags: ["Application", "Data"] },
  { slug: "dropoutschool", title: "Dropout School", image: "/project/dropoutschool.webp", tags: ["Game"] },
  { slug: "elementarithme", title: "Element Arithme", image: "/project/elementarithme.webp", tags: ["Unity", "WebGL"] },
  { slug: "energia", title: "Energia", image: "/project/energia.webp", tags: ["Game"] },
  { slug: "fireescapesimulation", title: "Fire Escape Simulation", image: "/project/fireescapesimulation.webp", tags: ["Simulation", "3D"] },
  { slug: "gotoschool", title: "Go To School", image: "/project/gotoschool.webp", tags: ["Game"] },
  { slug: "hitaball", title: "Hit A Ball", image: "/project/hitaball.webp", tags: ["Game"] },
  { slug: "littleprince", title: "Little Prince", image: "/project/littleprince.webp", tags: ["Unity", "WebGL"] },
  { slug: "mintandchoco", title: "Mint & Choco", image: "/project/mintandchoco.webp", tags: ["Game", "Web"] },
  { slug: "nirnusmagicschoollife", title: "Nirnu's Magic School Life", image: "/project/nirnusmagicschoollife.webp", tags: ["Game"] },
  { slug: "phoz", title: "PhoZ", image: "/project/phoz.webp", tags: ["Application", "Photo"] },
  { slug: "pong", title: "Pong", image: "/project/pong_cpp.webp", tags: ["C++", "Network"] },
  { slug: "readme", title: "README", image: "/project/readme.webp", tags: ["Application"] },
  { slug: "rhythmicbaseballworld", title: "Rhythmic Baseball World", image: "/project/rhythmicbaseballworld.webp", tags: ["Game", "Rhythm"] },
  { slug: "riotofmincho", title: "Riot of Mincho", image: "/project/riotofmincho.webp", tags: ["Game"] },
  { slug: "waveocean", title: "Wave Ocean", image: "/project/waveocean_rock.webp", tags: ["Simulation"] },
  { slug: "apartment", title: "Apartment", image: "/project/apartment_logo.png", tags: [] },
  { slug: "chickenatthezoo", title: "Chicken at the Zoo", image: "/project/chickenatthezoo.webp", tags: [] },
  { slug: "chickenfrompoultryfarm", title: "Chicken from Poultry Farm", image: "/project/chickenfrompoultryfarm.webp", tags: [] },
  { slug: "dl-engine-console", title: "DL Engine Console", image: "/project/dl-engine-console.webp", tags: [] },
  { slug: "dl-engine", title: "DL Engine", image: "/project/engine_dl-engine_logo.png", tags: [] },
  { slug: "findingyounghee", title: "Finding Younghee", image: "/project/findingyounghee_logo.png", tags: [] },
  { slug: "imshopkeeper", title: "I'm Shopkeeper", image: "/project/imshopkeeper.webp", tags: [] },
  { slug: "onthetop", title: "On the Top", image: "/project/onthetop_logo.png", tags: [] },
  { slug: "thecats", title: "The Cats", image: "/project/thecats_logo.png", tags: [] },
  { slug: "zeroengine", title: "ZeroEngine", image: "/project/ZeroEngine.webp", tags: [] }
];
