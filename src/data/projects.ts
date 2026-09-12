export type ProjectRepository = {
  name: string;
  url: string;
  topics: readonly string[];
};

export type ProjectClassification = {
  technology?: string;
  type: string;
};

export type Project = {
  slug: string;
  title: string;
  image: string;
  description?: string;
  classification: ProjectClassification;
  searchTerms?: readonly string[];
  repositories?: readonly ProjectRepository[];
  published: boolean;
};

export const projects: readonly Project[] = [
  {
    slug: "amazingchecks",
    title: "Amazing Checks",
    image: "/project/amazingchecks_cpp.webp",
    description: "A simple console-based chess game on C++, with a Python/Pygame version also available.",
    classification: { technology: "C++", type: "Game" },
    searchTerms: ["Windows Console", "Python", "Pygame", "Chess"],
    repositories: [
      {
        name: "AmazingChecks_CPP",
        url: "https://github.com/DaLae37/AmazingChecks_CPP",
        topics: ["chess", "cpp", "window-console"],
      },
      {
        name: "AmazingChecks_Python",
        url: "https://github.com/DaLae37/AmazingChecks_Python",
        topics: ["chess-game", "pygame", "python"],
      },
    ],
    published: true,
  },
  {
    slug: "amazingphoto",
    title: "Amazing Photo",
    image: "/project/amazingphoto.webp",
    description: "Multimedia Managing Program.",
    classification: { technology: "C++", type: "Application" },
    searchTerms: ["Qt 5", "Multimedia"],
    repositories: [
      {
        name: "AmazingPhoto",
        url: "https://github.com/DaLae37/AmazingPhoto",
        topics: ["cpp", "multimedia-applications", "qt5", "visualstudio2022"],
      },
    ],
    published: true,
  },
  {
    slug: "dllog",
    title: "DL Log",
    image: "/project/dllog.webp",
    classification: { type: "Application" },
    searchTerms: ["Data"],
    published: true,
  },
  {
    slug: "dropoutschool",
    title: "Dropout School",
    image: "/project/dropoutschool.webp",
    classification: { technology: "Unity", type: "Game" },
    searchTerms: ["C#", "One-touch"],
    repositories: [
      {
        name: "DropOutSchool",
        url: "https://github.com/DaLae37/DropOutSchool",
        topics: ["c-sharp", "game", "onetouch", "unity"],
      },
    ],
    published: true,
  },
  {
    slug: "elementarithme",
    title: "Element Arithme",
    image: "/project/elementarithme.webp",
    classification: { technology: "Unity", type: "Game" },
    searchTerms: ["WebGL"],
    published: true,
  },
  {
    slug: "energia",
    title: "Energia",
    image: "/project/energia.webp",
    classification: { type: "Game" },
    published: true,
  },
  {
    slug: "fireescapesimulation",
    title: "Fire Escape Simulation",
    image: "/project/fireescapesimulation.webp",
    classification: { type: "Simulation" },
    searchTerms: ["3D"],
    published: true,
  },
  {
    slug: "gotoschool",
    title: "Go To School",
    image: "/project/gotoschool.webp",
    classification: { type: "Game" },
    published: true,
  },
  {
    slug: "hitaball",
    title: "Hit A Ball",
    image: "/project/hitaball.webp",
    description: "Ball hitting game like golf.",
    classification: { technology: "Pygame", type: "Game" },
    searchTerms: ["Python", "Shooting"],
    repositories: [
      {
        name: "HitABall",
        url: "https://github.com/DaLae37/HitABall",
        topics: ["game", "pygame", "python", "shooting-game"],
      },
    ],
    published: true,
  },
  {
    slug: "littleprince",
    title: "Little Prince",
    image: "/project/littleprince.webp",
    classification: { technology: "Unity", type: "Game" },
    searchTerms: ["WebGL"],
    published: true,
  },
  {
    slug: "mintandchoco",
    title: "Mint & Choco",
    image: "/project/mintandchoco.webp",
    classification: { technology: "Web", type: "Game" },
    published: true,
  },
  {
    slug: "nirnusmagicschoollife",
    title: "Nirnu's Magic School Life",
    image: "/project/nirnusmagicschoollife.webp",
    description: "A C++ remake of Nirnu's Magic School Life.",
    classification: { technology: "C++", type: "Game" },
    repositories: [
      {
        name: "NirnusMagicSchoolLife_Remake",
        url: "https://github.com/DaLae37/NirnusMagicSchoolLife_Remake",
        topics: [],
      },
    ],
    published: true,
  },
  {
    slug: "phoz",
    title: "PhoZ",
    image: "/project/phoz.webp",
    classification: { type: "Application" },
    searchTerms: ["Photo"],
    published: true,
  },
  {
    slug: "pong",
    title: "Pong",
    image: "/project/pong_cpp.webp",
    description: "A table tennis game with a separate network game server.",
    classification: { technology: "C++", type: "Game" },
    searchTerms: ["WinAPI", "Winsock", "Table Tennis", "Game Server", "Network"],
    repositories: [
      {
        name: "Pong",
        url: "https://github.com/DaLae37/Pong",
        topics: ["cpp", "game", "tabletennis", "winapi"],
      },
      {
        name: "PongGameServer",
        url: "https://github.com/DaLae37/PongGameServer",
        topics: ["cpp", "gameserver", "visualstudio2022", "winsocket"],
      },
    ],
    published: true,
  },
  {
    slug: "readme",
    title: "README",
    image: "/project/readme.webp",
    classification: { type: "Application" },
    published: true,
  },
  {
    slug: "rhythmicbaseballworld",
    title: "Rhythmic Baseball World",
    image: "/project/rhythmicbaseballworld.webp",
    classification: { type: "Game" },
    searchTerms: ["Rhythm"],
    published: true,
  },
  {
    slug: "riotofmincho",
    title: "Riot of Mincho",
    image: "/project/riotofmincho.webp",
    classification: { type: "Game" },
    published: true,
  },
  {
    slug: "waveocean",
    title: "Wave Ocean",
    image: "/project/waveocean_rock.webp",
    classification: { type: "Simulation" },
    published: true,
  },
  {
    slug: "apartment",
    title: "Apartment",
    image: "/project/apartment_logo.png",
    classification: { type: "Game" },
    published: true,
  },
  {
    slug: "chickenatthezoo",
    title: "Chicken at the Zoo",
    image: "/project/chickenatthezoo.webp",
    classification: { type: "Game" },
    published: true,
  },
  {
    slug: "chickenfrompoultryfarm",
    title: "Chicken from Poultry Farm",
    image: "/project/chickenfrompoultryfarm.webp",
    classification: { type: "Game" },
    published: true,
  },
  {
    slug: "dl-engine-console",
    title: "DL Engine Console",
    image: "/project/dl-engine-console.webp",
    description: "C language based Windows Console Game Engine.",
    classification: { technology: "C", type: "Game Engine" },
    searchTerms: ["Windows Console"],
    repositories: [
      {
        name: "DL-Engine-Console",
        url: "https://github.com/DaLae37/DL-Engine-Console",
        topics: ["ascii-rendering", "clanguage", "framework", "game-engine", "windows-console"],
      },
    ],
    published: true,
  },
  {
    slug: "dl-engine",
    title: "DL Engine",
    image: "/project/engine_dl-engine_logo.png",
    description: "Frameworks for game development and rendering across desktop and web platforms.",
    classification: { technology: "DirectX", type: "Game Engine" },
    searchTerms: ["C++", "Python", "Pygame", "JavaScript", "WebGPU", "Rendering Framework"],
    repositories: [
      {
        name: "DL-Engine",
        url: "https://github.com/DaLae37/DL-Engine",
        topics: ["framework", "game-engine"],
      },
      {
        name: "DL-Engine-Direct2D",
        url: "https://github.com/DaLae37/DL-Engine-Direct2D",
        topics: ["cpp", "direct2d", "framework", "rendering-engine"],
      },
      {
        name: "DL-Engine-DirectX11",
        url: "https://github.com/DaLae37/DL-Engine-DirectX11",
        topics: ["cpp", "directx11", "framework", "rendering-engine"],
      },
      {
        name: "DL-Engine-WebGPU",
        url: "https://github.com/DaLae37/DL-Engine-WebGPU",
        topics: ["framework", "html-css-javascript", "rendering-engine", "webgpu"],
      },
    ],
    published: true,
  },
  {
    slug: "findingyounghee",
    title: "Finding Younghee",
    image: "/project/findingyounghee_logo.png",
    classification: { type: "Game" },
    published: true,
  },
  {
    slug: "imshopkeeper",
    title: "I'm Shopkeeper",
    image: "/project/imshopkeeper.webp",
    classification: { type: "Game" },
    published: true,
  },
  {
    slug: "onthetop",
    title: "On the Top",
    image: "/project/onthetop_logo.png",
    classification: { type: "Game" },
    published: true,
  },
  {
    slug: "thecats",
    title: "The Cats",
    image: "/project/thecats_logo.png",
    classification: { type: "Game" },
    published: true,
  },
  {
    slug: "zeroengine",
    title: "ZeroEngine",
    image: "/project/ZeroEngine.webp",
    classification: { type: "Game Engine" },
    published: true,
  },
];
