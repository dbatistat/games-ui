import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {firstValueFrom, Observable} from 'rxjs';
import {Game, GameDetail, GameFilter} from "./game.interfaces";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = 'https://free-to-play-games-database.p.rapidapi.com/api'

  constructor(private http: HttpClient) {
    this.http.options('', {

    })
  }

  getGames(filter: GameFilter): Promise<Game[]> {
    const params = {
      platform: filter.platform,
      ...(filter.category !== 'all' && { category: filter.category }),
      ['order-by']: filter.order
    }

    console.log({params})

    return firstValueFrom(this.http.get<Game[]>(`${this.apiUrl}/games`, {headers: {
        'X-RapidAPI-Key': '5b860c7b17msh5714a32ea6a1de4p110580jsnc80dccd9ceec',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }, params}));
  }

  getGameById(id: number): Promise<GameDetail> {
    return firstValueFrom(this.http.get<GameDetail>(`${this.apiUrl}/game?id=${id}`, {headers: {
        'X-RapidAPI-Key': '5b860c7b17msh5714a32ea6a1de4p110580jsnc80dccd9ceec',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }}));
  }
}
