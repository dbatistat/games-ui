import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {GameListComponent} from './game-list.component';
import {GameService} from '../game.service';
import {Game, GameDetail} from "../game.interfaces";
import {firstValueFrom, lastValueFrom, of} from "rxjs";

describe('GameListComponent', () => {
  let component: GameListComponent;
  let fixture: ComponentFixture<GameListComponent>;
  let gameServiceSpy: jasmine.SpyObj<GameService>;

  beforeEach(waitForAsync(() => {
    gameServiceSpy = jasmine.createSpyObj('GameService', ['getGames', 'getGameById']);

    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, NgxPaginationModule, GameListComponent],
      providers: [{provide: GameService, useValue: gameServiceSpy}],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call applyFilters on ngOnInit', () => {
    gameServiceSpy.getGames.and.returnValue(Promise.all([]));
    const applyFiltersSpy = spyOn(component, 'applyFilters');
    component.ngOnInit();
    expect(applyFiltersSpy).toHaveBeenCalled();
  });

  it('should set loading to false and get 2 games during applyFilters', async () => {
    gameServiceSpy.getGames.and.returnValue(Promise.all([
      {
        id: 571,
        title: "Infinite Borders",
        thumbnail: "https://www.freetogame.com/g/571/thumbnail.jpg",
        short_description: "A free-to-play strategy game from NetEase set during China’s Three Kingdoms period.",
        game_url: "https://www.freetogame.com/open/infinite-borders",
        genre: "Strategy",
        platform: "PC (Windows)",
        publisher: "NetEase Games",
        developer: "NetEase Games",
        release_date: "2023-12-22",
        freetogame_profile_url: "https://www.freetogame.com/infinite-borders"
      },
      {
        id: 570,
        title: "The Finals",
        thumbnail: "https://www.freetogame.com/g/570/thumbnail.jpg",
        short_description: "A game-show style PvP shooter from Embark Studios.",
        game_url: "https://www.freetogame.com/open/the-finals",
        genre: "Shooter",
        platform: "PC (Windows)",
        publisher: "Embark Studios",
        developer: "Embark Studios",
        release_date: "2023-12-07",
        freetogame_profile_url: "https://www.freetogame.com/the-finals"
      }]));
    await component.applyFilters();
    expect(component.loading).toBe(false);
    expect(component.games).toHaveSize(2)
  });

  it('should filter games by name', async () => {
    const games = [
      {
        id: 571,
        title: "Infinite Borders",
        thumbnail: "https://www.freetogame.com/g/571/thumbnail.jpg",
        short_description: "A free-to-play strategy game from NetEase set during China’s Three Kingdoms period.",
        game_url: "https://www.freetogame.com/open/infinite-borders",
        genre: "Strategy",
        platform: "PC (Windows)",
        publisher: "NetEase Games",
        developer: "NetEase Games",
        release_date: "2023-12-22",
        freetogame_profile_url: "https://www.freetogame.com/infinite-borders"
      },
      {
        id: 570,
        title: "The Finals",
        thumbnail: "https://www.freetogame.com/g/570/thumbnail.jpg",
        short_description: "A game-show style PvP shooter from Embark Studios.",
        game_url: "https://www.freetogame.com/open/the-finals",
        genre: "Shooter",
        platform: "PC (Windows)",
        publisher: "Embark Studios",
        developer: "Embark Studios",
        release_date: "2023-12-07",
        freetogame_profile_url: "https://www.freetogame.com/the-finals"
      }
    ];

    const testName = 'Infinite';

    // Test filterGamesByName
    let result: Game[] = await lastValueFrom(component.filterGamesByName(games, testName))

    expect(result.length).toBe(1);
    expect(result[0].title).toContain(testName);
  });

  it('should set gameDetail for selectGame', async () => {
    const mockGame: Game = {
      "id": 540,
      "title": "Overwatch 2",
      "thumbnail": "https://www.freetogame.com/g/540/thumbnail.jpg",
      "short_description": "A hero-focused first-person team shooter from Blizzard Entertainment.",
      "game_url": "https://www.freetogame.com/open/overwatch-2",
      "genre": "Shooter",
      "platform": "PC (Windows)",
      "publisher": "Activision Blizzard",
      "developer": "Blizzard Entertainment",
      "release_date": "2022-10-04",
      "freetogame_profile_url": "https://www.freetogame.com/overwatch-2"
    }

    const mockGameDetail: GameDetail = {
      "id": 540,
      "title": "Overwatch 2",
      "thumbnail": "https://www.freetogame.com/g/540/thumbnail.jpg",
      "status": "Live",
      "short_description": "A hero-focused first-person team shooter from Blizzard Entertainment.",
      "description": "The tale of the hero organization Overwatch continues in Overwatch 2. This new take on the popular team shooter changes up things a little with five-man teams, redefined classes, and new playable characters. With the adjustment to 5v5, players now have more individual impact than in the previous game.\r\n\r\nChallenge yourself in all-new modes. Take control of a robot with your team in Push and take it to the enemy base before the enemy can take it from you. Explore all new areas, including iconic real-world cities such as New York, Rome, Monte Carlo, Toronto, and more.\r\n\r\nOverwatch 2 features an update schedule that drops new content every nine weeks. It also boasts a regular battle pass – both free and premium. This is where some of the game’s characters will be obtained.",
      "game_url": "https://www.freetogame.com/open/overwatch-2",
      "genre": "Shooter",
      "platform": "Windows",
      "publisher": "Activision Blizzard",
      "developer": "Blizzard Entertainment",
      "release_date": "2022-10-04",
      "freetogame_profile_url": "https://www.freetogame.com/overwatch-2",
      "minimum_system_requirements": {
        "os": "Windows 10 64-bit",
        "processor": "Intel Core i3 or AMD Phenom X3 8650",
        "memory": "6 GB",
        "graphics": "NVIDIA GeForce GTX 600 series or AMD Radeon HD 7000 series",
        "storage": "50 GB"
      },
      "screenshots": [
        {
          "id": 1334,
          "image": "https://www.freetogame.com/g/540/overwatch-2-1.jpg"
        },
        {
          "id": 1335,
          "image": "https://www.freetogame.com/g/540/overwatch-2-2.jpg"
        },
        {
          "id": 1336,
          "image": "https://www.freetogame.com/g/540/overwatch-2-3.jpg"
        }
      ]
    };

    gameServiceSpy.getGameById.and.returnValue(firstValueFrom(of(mockGameDetail)));
    await component.selectGame(mockGame);
    expect(component.gameDetail).toEqual(mockGameDetail);
    expect(component.loading).toBe(false);
  });
});
