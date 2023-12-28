export type GameOrder = 'release-date' | 'popularity' | 'alphabetical' | 'relevance'
export type GamePlatform = 'pc' | 'browser' | 'all'
export type GameCategory =
  | 'all'
  | 'mmorpg'
  | 'shooter'
  | 'strategy'
  | 'moba'
  | 'racing'
  | 'sports'
  | 'social'
  | 'sandbox'
  | 'open-world'
  | 'survival'
  | 'pvp'
  | 'pve'
  | 'pixel'
  | 'voxel'
  | 'zombie'
  | 'turn-based'
  | 'first-person'
  | 'third-person'
  | 'top-down'
  | 'tank'
  | 'space'
  | 'sailing'
  | 'side-scroller'
  | 'superhero'
  | 'permadeath'
  | 'card'
  | 'battle-royale'
  | 'mmo'
  | 'mmofps'
  | 'mmotps'
  | '3d'
  | '2d'
  | 'anime'
  | 'fantasy'
  | 'sci-fi'
  | 'fighting'
  | 'action-rpg'
  | 'action'
  | 'military'
  | 'martial-arts'
  | 'flight'
  | 'low-spec'
  | 'tower-defense'
  | 'horror'
  | 'mmorts';

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

export interface GameDetail extends Game {
  status: string;
  description: string;
  release_date: string;
  freetogame_profile_url: string;
  minimum_system_requirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
  screenshots: { id: number; image: string }[];
}

export type Filter<T> = {
  code: T;
  name: string;
}

export type GameFilter = {
  platform: GamePlatform;
  category: GameCategory;
  order: GameOrder;
}
