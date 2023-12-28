import {Filter, GameCategory, GameOrder, GamePlatform} from "./game.interfaces";

export const PLATFORMS: Filter<GamePlatform>[] = [
  {code: 'all', name: 'All'},
  {code: 'pc', name: 'PC'},
  {code: 'browser', name: 'Browser'}
]

export const DEFAULT_PLATFORM: Filter<GamePlatform> = {code: 'all', name: 'All'}

export const CATEGORIES: Filter<GameCategory>[] = [
  {code: 'all', name: 'All'},
  {code: 'mmorpg', name: 'MMORPG'},
  {code: 'shooter', name: 'Shooter'},
  {code: 'strategy', name: 'Strategy'},
  {code: 'moba', name: 'MOBA'},
  {code: 'racing', name: 'Racing'},
  {code: 'sports', name: 'Sports'},
  {code: 'social', name: 'Social'},
  {code: 'sandbox', name: 'Sandbox'},
  {code: 'open-world', name: 'Open World'},
  {code: 'survival', name: 'Survival'},
  {code: 'pvp', name: 'PvP'},
  {code: 'pve', name: 'PvE'},
  {code: 'pixel', name: 'Pixel'},
  {code: 'voxel', name: 'Voxel'},
  {code: 'zombie', name: 'Zombie'},
  {code: 'turn-based', name: 'Turn-Based'},
  {code: 'first-person', name: 'First Person'},
  {code: 'third-person', name: 'Third Person'},
  {code: 'top-down', name: 'Top-Down'},
  {code: 'tank', name: 'Tank'},
  {code: 'space', name: 'Space'},
  {code: 'sailing', name: 'Sailing'},
  {code: 'side-scroller', name: 'Side-Scroller'},
  {code: 'superhero', name: 'Superhero'},
  {code: 'permadeath', name: 'Permadeath'},
  {code: 'card', name: 'Card'},
  {code: 'battle-royale', name: 'Battle Royale'},
  {code: 'mmo', name: 'MMO'},
  {code: 'mmofps', name: 'MMOFPS'},
  {code: 'mmotps', name: 'MMOTPS'},
  {code: '3d', name: '3D'},
  {code: '2d', name: '2D'},
  {code: 'anime', name: 'Anime'},
  {code: 'fantasy', name: 'Fantasy'},
  {code: 'sci-fi', name: 'Sci-Fi'},
  {code: 'fighting', name: 'Fighting'},
  {code: 'action-rpg', name: 'Action RPG'},
  {code: 'action', name: 'Action'},
  {code: 'military', name: 'Military'},
  {code: 'martial-arts', name: 'Martial Arts'},
  {code: 'flight', name: 'Flight'},
  {code: 'low-spec', name: 'Low Spec'},
  {code: 'tower-defense', name: 'Tower Defense'},
  {code: 'horror', name: 'Horror'},
  {code: 'mmorts', name: 'MMORTS'},
];

export const DEFAULT_CATEGORY: Filter<GameCategory> = {code: 'all', name: 'All'}

export const ORDER_BY: Filter<GameOrder>[] = [
  {code: 'release-date', name: 'Release Date'},
  {code: 'popularity', name: 'Popularity'},
  {code: 'alphabetical', name: 'Alphabetical'},
  {code: 'relevance', name: 'Relevance'}
]

export const DEFAULT_ORDER: Filter<GameOrder> = {code: 'release-date', name: 'Release Date'}
