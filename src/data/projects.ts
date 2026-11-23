export type ProjectRepository = {
  relationship: "owner" | "organization-contributor" | "individual-contributor";
  visibility: "public" | "private";
  topics: readonly string[];
};

export const projectRepositories = {
  "DaLae37/AmazingChecks_CPP": {
    relationship: "owner",
    visibility: "public",
    topics: ["chess", "cpp", "window-console"],
  },
  "DaLae37/AmazingChecks_Python": {
    relationship: "owner",
    visibility: "public",
    topics: ["chess-game", "pygame", "python"],
  },
  "DaLae37/AmazingPhoto": {
    relationship: "owner",
    visibility: "public",
    topics: ["cpp", "multimedia-applications", "qt5", "visualstudio2022"],
  },
  "DaLae37/DropOutSchool": {
    relationship: "owner",
    visibility: "public",
    topics: ["c-sharp", "game", "onetouch", "unity"],
  },
  "Team-Wally/ElementArithme": {
    relationship: "organization-contributor",
    visibility: "public",
    topics: ["unity"],
  },
  "DaLae37/HitABall": {
    relationship: "owner",
    visibility: "public",
    topics: ["game", "pygame", "python", "shooting-game"],
  },
  "DaLae37/NirnusMagicSchoolLife_Remake": {
    relationship: "owner",
    visibility: "public",
    topics: [],
  },
  "DaLae37/Pong": {
    relationship: "owner",
    visibility: "public",
    topics: ["cpp", "game", "tabletennis", "winapi"],
  },
  "DaLae37/PongGameServer": {
    relationship: "owner",
    visibility: "public",
    topics: ["cpp", "gameserver", "visualstudio2022", "winsocket"],
  },
  "Team-Wally/ReadMe_Android": {
    relationship: "organization-contributor",
    visibility: "public",
    topics: ["android-studio", "app", "kotlin", "text-reader"],
  },
  "DaLae37/DL-Engine-Console": {
    relationship: "owner",
    visibility: "public",
    topics: ["ascii-rendering", "clanguage", "framework", "game-engine", "windows-console"],
  },
  "DaLae37/DL-Engine": {
    relationship: "owner",
    visibility: "public",
    topics: ["framework", "game-engine"],
  },
  "DaLae37/DL-Engine-Direct2D": {
    relationship: "owner",
    visibility: "public",
    topics: ["cpp", "direct2d", "framework", "rendering-engine"],
  },
  "DaLae37/DL-Engine-DirectX11": {
    relationship: "owner",
    visibility: "public",
    topics: ["cpp", "directx11", "framework", "rendering-engine"],
  },
  "DaLae37/DL-Engine-WebGPU": {
    relationship: "owner",
    visibility: "public",
    topics: ["framework", "html-css-javascript", "rendering-engine", "webgpu"],
  },
  "W298/THE-CATS": {
    relationship: "individual-contributor",
    visibility: "public",
    topics: ["cats", "survival-game", "unreal-engine-4"],
  },
} satisfies Record<`${string}/${string}`, ProjectRepository>;

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
  repositories?: readonly (keyof typeof projectRepositories)[];
  publication: {
    web: boolean;
    pdf: boolean;
  };
};

export const projects: readonly Project[] = [
  {
    slug: "amazingchecks",
    title: "Amazing Checks",
    image: "/project/amazingchecks_cpp.webp",
    description: "A simple console-based chess game on C++, with a Python/Pygame version also available.",
    classification: { technology: "C++", type: "Game" },
    searchTerms: ["Windows Console", "Python", "Pygame", "Chess"],
    repositories: ["DaLae37/AmazingChecks_CPP", "DaLae37/AmazingChecks_Python"],
    publication: { web: true, pdf: true },
  },
  {
    slug: "amazingphoto",
    title: "Amazing Photo",
    image: "/project/amazingphoto.webp",
    description: "Multimedia Managing Program.",
    classification: { technology: "C++", type: "Application" },
    searchTerms: ["Qt 5", "Multimedia"],
    repositories: ["DaLae37/AmazingPhoto"],
    publication: { web: true, pdf: true },
  },
  {
    slug: "dllog",
    title: "DL Log",
    image: "/project/dllog.webp",
    classification: { type: "Application" },
    searchTerms: ["Data"],
    publication: { web: false, pdf: true },
  },
  {
    slug: "dropoutschool",
    title: "Dropout School",
    image: "/project/dropoutschool.webp",
    classification: { technology: "Unity", type: "Game" },
    searchTerms: ["C#", "One-touch"],
    repositories: ["DaLae37/DropOutSchool"],
    publication: { web: true, pdf: true },
  },
  {
    slug: "elementarithme",
    title: "Element Arithme",
    image: "/project/elementarithme.webp",
    classification: { technology: "Unity", type: "Game" },
    searchTerms: ["WebGL"],
    repositories: ["Team-Wally/ElementArithme"],
    publication: { web: true, pdf: true },
  },
  {
    slug: "energia",
    title: "Energia",
    image: "/project/energia.webp",
    classification: { type: "Game" },
    publication: { web: false, pdf: true },
  },
  {
    slug: "fireescapesimulation",
    title: "Fire Escape Simulation",
    image: "/project/fireescapesimulation.webp",
    classification: { type: "Simulation" },
    searchTerms: ["3D"],
    publication: { web: false, pdf: true },
  },
  {
    slug: "gotoschool",
    title: "Go To School",
    image: "/project/gotoschool.webp",
    classification: { type: "Game" },
    publication: { web: false, pdf: true },
  },
  {
    slug: "hitaball",
    title: "Hit A Ball",
    image: "/project/hitaball.webp",
    description: "Ball hitting game like golf.",
    classification: { technology: "Pygame", type: "Game" },
    searchTerms: ["Python", "Shooting"],
    repositories: ["DaLae37/HitABall"],
    publication: { web: true, pdf: true },
  },
  {
    slug: "littleprince",
    title: "Little Prince",
    image: "/project/littleprince.webp",
    classification: { technology: "Unity", type: "Game" },
    searchTerms: ["WebGL"],
    publication: { web: false, pdf: true },
  },
  {
    slug: "mintandchoco",
    title: "Mint & Choco",
    image: "/project/mintandchoco.webp",
    classification: { technology: "Web", type: "Game" },
    publication: { web: false, pdf: true },
  },
  {
    slug: "nirnusmagicschoollife",
    title: "Nirnu's Magic School Life",
    image: "/project/nirnusmagicschoollife.webp",
    description: "A C++ remake of Nirnu's Magic School Life.",
    classification: { technology: "C++", type: "Game" },
    repositories: ["DaLae37/NirnusMagicSchoolLife_Remake"],
    publication: { web: true, pdf: true },
  },
  {
    slug: "phoz",
    title: "PhoZ",
    image: "/project/phoz.webp",
    classification: { type: "Application" },
    searchTerms: ["Photo"],
    publication: { web: false, pdf: true },
  },
  {
    slug: "pong",
    title: "Pong",
    image: "/project/pong_cpp.webp",
    description: "A table tennis game with a separate network game server.",
    classification: { technology: "C++", type: "Game" },
    searchTerms: ["WinAPI", "Winsock", "Table Tennis", "Game Server", "Network"],
    repositories: ["DaLae37/Pong", "DaLae37/PongGameServer"],
    publication: { web: true, pdf: true },
  },
  {
    slug: "readme",
    title: "README",
    image: "/project/readme.webp",
    classification: { type: "Application" },
    repositories: ["Team-Wally/ReadMe_Android"],
    publication: { web: true, pdf: true },
  },
  {
    slug: "rhythmicbaseballworld",
    title: "Rhythmic Baseball World",
    image: "/project/rhythmicbaseballworld.webp",
    classification: { type: "Game" },
    searchTerms: ["Rhythm"],
    publication: { web: false, pdf: true },
  },
  {
    slug: "riotofmincho",
    title: "Riot of Mincho",
    image: "/project/riotofmincho.webp",
    classification: { type: "Game" },
    publication: { web: false, pdf: true },
  },
  {
    slug: "waveocean",
    title: "Wave Ocean",
    image: "/project/waveocean_rock.webp",
    classification: { type: "Simulation" },
    publication: { web: false, pdf: true },
  },
  {
    slug: "apartment",
    title: "Apartment",
    image: "/project/apartment_logo.png",
    classification: { type: "Game" },
    publication: { web: false, pdf: true },
  },
  {
    slug: "chickenatthezoo",
    title: "Chicken at the Zoo",
    image: "/project/chickenatthezoo.webp",
    classification: { type: "Game" },
    publication: { web: false, pdf: true },
  },
  {
    slug: "chickenfrompoultryfarm",
    title: "Chicken from Poultry Farm",
    image: "/project/chickenfrompoultryfarm.webp",
    classification: { type: "Game" },
    publication: { web: false, pdf: true },
  },
  {
    slug: "dl-engine-console",
    title: "DL Engine Console",
    image: "/project/dl-engine-console.webp",
    description: "C language based Windows Console Game Engine.",
    classification: { technology: "C", type: "Game Engine" },
    searchTerms: ["Windows Console"],
    repositories: ["DaLae37/DL-Engine-Console"],
    publication: { web: true, pdf: true },
  },
  {
    slug: "dl-engine",
    title: "DL Engine",
    image: "/project/engine_dl-engine_logo.png",
    description: "Frameworks for game development and rendering across desktop and web platforms.",
    classification: { technology: "DirectX", type: "Game Engine" },
    searchTerms: ["C++", "Python", "Pygame", "JavaScript", "WebGPU", "Rendering Framework"],
    repositories: [
      "DaLae37/DL-Engine",
      "DaLae37/DL-Engine-Direct2D",
      "DaLae37/DL-Engine-DirectX11",
      "DaLae37/DL-Engine-WebGPU",
    ],
    publication: { web: true, pdf: true },
  },
  {
    slug: "findingyounghee",
    title: "Finding Younghee",
    image: "/project/findingyounghee_logo.png",
    classification: { type: "Game" },
    publication: { web: false, pdf: true },
  },
  {
    slug: "imshopkeeper",
    title: "I'm Shopkeeper",
    image: "/project/imshopkeeper.webp",
    classification: { type: "Game" },
    publication: { web: false, pdf: true },
  },
  {
    slug: "onthetop",
    title: "On the Top",
    image: "/project/onthetop_logo.png",
    classification: { type: "Game" },
    publication: { web: false, pdf: true },
  },
  {
    slug: "thecats",
    title: "The Cats",
    image: "/project/thecats_logo.png",
    classification: { type: "Game" },
    repositories: ["W298/THE-CATS"],
    publication: { web: true, pdf: true },
  },
  {
    slug: "zeroengine",
    title: "ZeroEngine",
    image: "/project/ZeroEngine.webp",
    classification: { type: "Game Engine" },
    publication: { web: false, pdf: false },
  },
];
