import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {firstValueFrom, Observable} from 'rxjs';
import {Game, GameDetail, GameFilter} from "./game.interfaces";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = environment.gameApi;

  constructor(private http: HttpClient) {
    this.http.options('', {})
  }

  getGames(filter: GameFilter): Promise<Game[]> {
    const params = {
      platform: filter.platform,
      ...(filter.category !== 'all' && {category: filter.category}),
      ['order-by']: filter.order
    }

    return firstValueFrom(this.http.get<Game[]>(`${this.apiUrl}/games`, {
      headers: environment.gameApiHeaders, params
    }));
  }

  getGameById(id: number): Promise<GameDetail> {
    return firstValueFrom(this.http.get<GameDetail>(`${this.apiUrl}/game?id=${id}`, {
      headers: environment.gameApiHeaders
    }));
  }
}
