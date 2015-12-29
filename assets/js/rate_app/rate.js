var rateApp = rateApp || {}

var multi = {
	'films' : {
		'year2012' : [
			{
				'title' : "Поля смерти",
				'year' : 1984,
				'imdb' : 7.90
			},
			{
				'title' : "Елена",
				'year' : 2011,
				'imdb' : 7.30
			},
			{
				'title' : "Дорога перемен",
				'year' : 2008,
				'imdb' : 7.30
			},
			{
				'title' : "Прометей",
				'year' : 2012,
				'imdb' : 7.00
			},
			{
				'title' : "Адвокат дьявола",
				'year' : 1997,
				'imdb' : 7.50
			},
			{
				'title' : "Меланхолия",
				'year' : 2011,
				'imdb' : 7.10
			},
			{
				'title' : "Хранитель времени",
				'year' : 2011,
				'imdb' : 7.60
			},
			{
				'title' : "Дж. Эдгар",
				'year' : 2011,
				'imdb' : 6.60
			},
			{
				'title' : "Артист",
				'year' : 2011,
				'imdb' : 8.00
			},
			{
				'title' : "Нити",
				'year' : 1984,
				'imdb' : 8.10
			},
			{
				'title' : "Треугольник",
				'year' : 2009,
				'imdb' : 6.90
			}
		],
		'year2013' : [
			{
				'title' : "Большой Лебовски",
				'year' : 1998,
				'imdb' : 8.20
			},
			{
				'title' : "Сияние",
				'year' : 1980,
				'imdb' : 8.50
			},
			{
				'title' : "Шерлок (сериал)",
				'year' : '2010-2012',
				'imdb' : 9.30
			},
			{
				'title' : "Джанго освобожденный",
				'year' : 2012,
				'imdb' : 8.50
			},
			{
				'title' : "Бэтмен (трилогия)",
				'year' : '2005-2012',
				'imdb' : '7.98 8.49 8.33'
			},
			{
				'title' : "Церемония",
				'year' : 1995,
				'imdb' : 7.60
			},
			{
				'title' : "Вспомнить все",
				'year' : 2012,
				'imdb' : 6.30
			},
			{
				'title' : "Беспредел",
				'year' : 2010,
				'imdb' : 6.80
			},
			{
				'title' : "Пипец",
				'year' : 2010,
				'imdb' : 7.80
			},
			{
				'title' : "Мечта кассандры",
				'year' : 2007,
				'imdb' : 6.70
			}
		],
		'year2014' : [
			{
				'title' : "Однажды в Америке",
				'year' : 1983,
				'imdb' : 8.40
			},
			{
				'title' : "Отель 'Руанда'",
				'year' : 2004,
				'imdb' : 8.20
			},
			{
				'title' : "Волк с Уолл-стрит",
				'year' : 2013,
				'imdb' : 8.30
			},
			{
				'title' : "Рокки",
				'year' : 1976,
				'imdb' : 8.10
			},
			{
				'title' : "Интерстеллар",
				'year' : 2014,
				'imdb' : 8.90
			},
			{
				'title' : "Обливион",
				'year' : 2013,
				'imdb' : 7.00
			},
			{
				'title' : "Пленницы",
				'year' : 2013,
				'imdb' : 8.10
			},
			{
				'title' : "Грань будущего",
				'year' : 2014,
				'imdb' : 8.00
			},
			{
				'title' : "Таксист",
				'year' : 1976,
				'imdb' : 8.40
			},
			{
				'title' : "Исчезнувшая",
				'year' : 2014,
				'imdb' : 8.30
			},
			{
				'title' : "Драйв",
				'imdb' : 7.80
			}
		]
	},
	'books' : {  // ****************************************************************************** BOOKS
		'year2012' : {
			'fiction' : [
				{
					'title' : "Имя розы",
					'author' : "Умберто Эко",
					'year' : 1980
				},
				{
					'title' : "Грозовой перевал",
					'author' : "Эмилия Бронте",
					'year' : 1847
				},
				{
					'title' : "Ася",
					'author' : "Иван Тургенев",
					'year' : 1858
				},
				{
					'title' : "Убежище",
					'author' : "Анна Франк",
					'year' : 1944
				},
				{
					'title' : "Старик и море",
					'author' : "Эрнест Хэмингуэй",
					'year' : 1952
				},
				{
					'title' : "Белая гвардия",
					'author' : "Михаил Булгаков",
					'year' : 1925
				},
				{
					'title' : "Аэропорт",
					'author' : "Артур Хейли",
					'year' : 1968
				},
				{
					'title' : "Гибель 31 отдела",
					'author' : "Пер Вале",
					'year' : 1970
				},
				{
					'title' : "12 стульев",
					'author' : "Илья Ильф, Евгений Петров",
					'year' : 1928
				},
				{
					'title' : "Приваловские миллионы",
					'author' : "Дмитрий Мамин-Сибиряк",
					'year' : 1883
				}
			],
			'nonfiction' : [
				{
					'title' : "Искусство системного мышления",
					'author' : "Джозеф О'Коннор",
					'year' : 2012
				},
				{
					'title' : "Вы, конечно, шутите мистер Фейнман",
					'author' : "Ричард Фейнман",
					'year' : 1985
				},
				{
					'title' : "Математические досуги",
					'author' : "Мартин Гарднер",
					'year' : 1972
				},
				{
					'title' : "Как читать книги",
					'author' : "Сергей Поварнин",
					'year' : 1924
				},
				{
					'title' : "Русский язык на грани нервного срыва",
					'author' : "Максим Кронгауз",
					'year' : 2008
				}
			]
		},
		'year2013' : {
			'fiction' : [
				{
					'title' : "Замок",
					'author' : "Франц Кафка",
					'year' : 1926
				},
				{
					'title' : "Три товарища",
					'author' : "Эрих-Мария Ремарк",
					'year' : 1936
				},
				{
					'title' : "Мартин Иден",
					'author' : "Джек Лондон",
					'year' : 1909
				},
				{
					'title' : "Письма о добром",
					'author' : "Дмитрий Лихачев",
					'year' : 1985
				},
				{
					'title' : "451 градус по Фаренгейту",
					'author' : "Рэй Брэдбери",
					'year' : 1953
				},
				{
					'title' : "Белый Клык",
					'author' : "Джек Лондон",
					'year' : 1906
				},
				{
					'title' : "Рассказы",
					'author' : "Антон Чехов",
					'year' : "1870-1905"
				},
				{
					'title' : "Цветы для Элджернона (рассказ)",
					'author' : "Дэниел Киз",
					'year' : 1959
				},
				{
					'title' : "Дом, который построил Тил",
					'author' : "Роберт Хайнлайн",
					'year' : 1967
				},
				{
					'title' : "Немного солнца в холодной воде",
					'author' : "Француаза Саган",
					'year' : 1969
				}
			],
			'nonfiction' : [
				{
					'title' : "Блокадная книга",
					'author' : "Алесь Адамович, Даниил Гранин",
					'year' : "1977-1981"
				},
				{
					'title' : "Воспоминания о войне",
					'author' : "Николай Никулин",
					'year' : 1975
				},
				{
					'title' : "Простая одержимость",
					'author' : "Джон Дербишер",
					'year' : 2010
				},
				{
					'title' : "Искусство рассуждать о книгах, которые не читал",
					'author' : "Пьер Байар",
					'year' : 2012
				},
				{
					'title' : "Знать и помнить. Преступления фашизма в годы ВОВ",
					'author' : "Нина Петрова",
					'year' : 2012
				},
				{
					'title' : "Математические пятиминутки",
					'author' : "Эдвард Берендес",
					'year' : 2013
				},
				{
					'title' : "Восхождение денег",
					'author' : "Найл Фергюссон",
					'year' : 2009
				},
				{
					'title' : "Совершенный код",
					'author' : "Стив Макконел",
					'year' : 1993
				},
				{
					'title' : "Апокалипсис: Катастрофы прошлого, сценарии будущего",
					'author' : "Александр Соловьев",
					'year' : 2010
				},
				{
					'title' : "Книги в огне",
					'author' : "Люсьен Поластрон",
					'year' : 2006
				}
			]
		},
		'year2014' : {
			'fiction' : [
				{
					'title' : "Уловка 22",
					'author' : "Джозеф Хеллер",
					'year' : 1961
				},
				{
					'title' : "Воскресение",
					'author' : "Лев Толстой",
					'year' : 1899
				},
				{
					'title' : "Дона флор и два ее мужа",
					'author' : "Жоржи Амаду",
					'year' : 1966
				},
				{
					'title' : "Бойня номер пять",
					'author' : "Курт Воннегут",
					'year' : 1969
				},
				{
					'title' : "Полковнику никто не пишет",
					'author' : "Габриэль Гарсия Маркес",
					'year' : 1961
				},
				{
					'title' : "Давай поженимся",
					'author' : "Джон Апдайк",
					'year' : 1977
				},
				{
					'title' : "Рассказы, Пьесы и др.",
					'author' : "Вуди Аллен",
					'year' : "1960-1999"
				},
				{
					'title' : "Марсианские хроники",
					'author' : "Рэй Брэдбери",
					'year' : 1950
				},
				{
					'title' : "9 рассказов",
					'author' : "Джером Сэлинджер",
					'year' : 1997
				},
				{
					'title' : "Любовник леди Чаттерлей",
					'author' : "Дейвид Герберт Лоренс",
					'year' : 1998
				}
			],
			'nonfiction' : [
				{
					'title' : "Информация. История. Теория. Поток",
					'author' : "Джеймс Глик",
					'year' : 2012
				},
				{
					'title' : "Геймификация в бизнесе",
					'author' : "Гейб Зикерманн, Джоселин Линдер",
					'year' : 2013
				},
				{
					'title' : "Не пытайтесь избавиться от книг",
					'author' : "Умберто Эко",
					'year' : 2010
				},
				{
					'title' : "Как читать книги",
					'author' : "Мортимер Адлер",
					'year' : 1972
				},
				{
					'title' : "Улыбка Пол Пота. Путешествие по Камбодже красных кхмеров",
					'author' : "Петер Фреберг Идлинг",
					'year' : 2013
				},
				{
					'title' : "Накануне империи",
					'author' : "Валерий Коровин",
					'year' : 2008
				},
				{
					'title' : "Технологии, которые изменят мир",
					'author' : "Мартин Форд",
					'year' : 2012
				},
				{
					'title' : "Откровения молодого романиста",
					'author' : "Умберто Эко",
					'year' : 2012
				},
				{
					'title' : "Уроки чтения",
					'author' : "Александр Генис",
					'year' : 2013
				},
				{
					'title' : "Геополитика: Как это делается",
					'author' : "Николай Стариков",
					'year' : 2014
				}
			]
		}
	},
	'games' : {   // *********************************************************************************** GAMES
		'year2012' : [
			{
				'title' : "MTG: Duels of planewalkers 2013",
				'year' : 2012,
				'metacritic' : 77
			},
			{
				'title' : "Mass Effect 2",
				'year' : 2010,
				'metacritic' : 94
			},
			{
				'title' : "Grand Theft Auto 4",
				'year' : 2008,
				'metacritic' : 90
			},
			{
				'title' : "Risen",
				'year' : 2009,
				'metacritic' : 77
			},
			{
				'title' : "Hitman",
				'year' : 2000,
				'metacritic' : 73
			},
			{
				'title' : "Braid",
				'year' : 2010,
				'metacritic' : 90
			}
		],
		'year2013' : [
			{
				'title' : "Walking Dead. Season 1",
				'year' : 2012,
				'metacritic' : 82
			},
			{
				'title' : "Mass Effect 3",
				'year' : 2012,
				'metacritic' : 89
			},
			{
				'title' : "Sleeping Dogs",
				'year' : 2012,
				'metacritic' : 81
			},
			{
				'title' : "Sword of the Stars: the Pit",
				'year' : 2013,
				'metacritic' : 68
			},
			{
				'title' : "Hotline Miami",
				'year' : 2012,
				'metacritic' : 85
			},
			{
				'title' : "The Binding of Isaac",
				'year' : 2011,
				'metacritic' : 84
			},
			{
				'title' : "Mafia 2",
				'year' : 2010,
				'metacritic' : 74
			},
			{
				'title' : "Alan Wake",
				'year' : 2012,
				'metacritic' : 83
			},
			{
				'title' : "Just Cause 2. Multiplayer mod",
				'year' : 2010,
				'metacritic' : 84
			},
			{
				'title' : "Chaos Engine",
				'year' : 1993,
				'metacritic' : 40
			}
		],
		'year2014' : [
			{
				'title' : "Dragon age: Origins",
				'year' : 2009,
				'metacritic' : 91
			},
			{
				'title' : "XCOM: Enemy unknown",
				'year' : 2013,
				'metacritic' : 91
			},
			{
				'title' : "Walking dead: Season 2",
				'year' : 2014,
				'metacritic' : 87
			},
			{
				'title' : "The wolf among us",
				'year' : 2014,
				'metacritic' : 84
			},
			{
				'title' : "Don't starve",
				'year' : 2013,
				'metacritic' : 79
			},
			{
				'title' : "F1 2013",
				'year' : 2013,
				'metacritic' : 77
			},
			{
				'title' : "Sniper elite V2",
				'year' : 2012,
				'metacritic' : 66
			},
			{
				'title' : "FEZ",
				'year' : 2013,
				'metacritic' : 91
			},
			{
				'title' : "Bioshock",
				'year' : 2007,
				'metacritic' : 96
			},
			{
				'title' : "Worms Armageddon",
				'year' : 1999,
				'metacritic' : "-"
			}
		]
	}
};


var appModel = new rateApp.AppModel(multi);

var mainView = new rateApp.MainView({model: appModel, el:$('.main')});
	mainView.render();

var Router = Backbone.Router.extend({
    routes: {
        "": "openMain",
        "books": "openBooks",
        "films": "openFilms",
        "games": "openGames"
        // "edit/:index": "editToDo",
        // "delete/:index": "delteToDo"
    },
    'openMain': function(){
      	$('.main').html('');
		mainView.render();
    },

	'openFilms': function(){
		$('.main').html('');

		var mainSection = new rateApp.FilmsView({
			model: mainView.model,
			el: $('.main')
		});
		mainSection.render();
	},

	'openBooks': function(){
		$('.main').html('');

		var mainSection = new rateApp.BooksView({
			model: mainView.model,
			el: $('.main')
		});
		mainSection.render();
	},

	'openGames': function(){
		$('.main').html('');

		var mainSection = new rateApp.GamesView({
			model: mainView.model,
			el: $('.main')
		});
		mainSection.render();
	}
});

var router = new Router();

Backbone.history.start();

function typicalViewDressing(){

 		$('.years').slick({
         	dots: true,
	        infinite: true,
	        speed: 500,
	        slidesToShow: 1,
	        slidesToScroll: 1
        });

        $(".image_gallery").show();
        $(".main_link").show();
        $("#social").hide();

		$(".lefter").click(function(){
			$('.slick-prev').click();
		})
		$(".righter").click(function(){
			$('.slick-next').click();
		});

		$("#social").removeClass("main_social");
		$("#f").removeClass("main_footer");

}