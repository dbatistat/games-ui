import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Filter, Game, GameCategory, GameDetail, GameFilter, GameOrder, GamePlatform} from "../game.interfaces";
import {GameService} from "../game.service";
import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {GameCardComponent} from "../game-card/game-card.component";
import {NgxPaginationModule} from "ngx-pagination";
import {CATEGORIES, DEFAULT_CATEGORY, DEFAULT_ORDER, DEFAULT_PLATFORM, ORDER_BY, PLATFORMS} from "../game.constants";
import {LoaderComponent} from "../../shared/loader/loader.component";
import {GameDetailComponent} from "../game-detail/game-detail.component";

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    HttpClientModule,
    GameCardComponent,
    NgxPaginationModule,
    LoaderComponent,
    GameDetailComponent
  ],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent implements OnInit {
  loading: boolean = false;
  games: Game[] = [];
  gameDetail: GameDetail | null = null;
  platforms: Filter<GamePlatform>[] = PLATFORMS;
  categories: Filter<GameCategory>[] = CATEGORIES;
  orders: Filter<GameOrder>[] = ORDER_BY;
  currentPage = 1;
  selectedPlatform: GamePlatform = DEFAULT_PLATFORM.code;
  selectedCategory: GameCategory = DEFAULT_CATEGORY.code;
  selectedOrder: GameOrder = DEFAULT_ORDER.code;
  filter: GameFilter = {
    platform: DEFAULT_PLATFORM.code,
    category: DEFAULT_CATEGORY.code,
    order: DEFAULT_ORDER.code
  }

  constructor(private gameService: GameService) {
  }

  async ngOnInit(): Promise<void> {
    await this.applyFilters();
  }

  async applyFilters(): Promise<void> {
    this.loading = true;
    this.games = await this.gameService.getGames(this.filter);
    this.gameDetail = null;
    this.loading = false;
  }

  async onPlatformChange(): Promise<void> {
    this.filter.platform = this.selectedPlatform;
    await this.applyFilters();
  }

  async onCategoryChange(): Promise<void> {
    this.filter.category = this.selectedCategory;
    await this.applyFilters();
  }

  async onOrderByChange(): Promise<void> {
    this.filter.order = this.selectedOrder;
    await this.applyFilters();
  }

  async selectGame(game: Game): Promise<void> {
    this.gameDetail = await this.gameService.getGameById(game.id)
  }

  onGoBack() {
    this.gameDetail = null;
  }
}
