var rateApp = rateApp || {}

var multi = {
    'films': { // ****************************************************************************** FILMS
        'year2012': {
            'fiction': [{
                'title': "Поля смерти",
                'year': 1984,
                'imdb': 7.90,
                'imdbId': "tt0087553",
                'tmdbId': "625"
            }, {
                'title': "Елена",
                'year': 2011,
                'imdb': 7.30,
                'imdbId': "tt1925421",
                'tmdbId': "78182"
            }, {
                'title': "Дорога перемен",
                'year': 2008,
                'imdb': 7.30,
                'imdbId': "tt0959337",
                'tmdbId': "4148"
            }, {
                'title': "Прометей",
                'year': 2012,
                'imdb': 7.00,
                'imdbId': "tt1446714",
                'tmdbId': "70981"
            }, {
                'title': "Адвокат дьявола",
                'year': 1997,
                'imdb': 7.50,
                'imdbId': "tt0118971",
                'tmdbId': "1813"
            }, {
                'title': "Меланхолия",
                'year': 2011,
                'imdb': 7.10,
                'imdbId': "tt1527186",
                'tmdbId': "62215"
            }, {
                'title': "Хранитель времени",
                'year': 2011,
                'imdb': 7.60,
                'imdbId': "tt0970179",
                'tmdbId': "44826"
            }, {
                'title': "Дж. Эдгар",
                'year': 2011,
                'imdb': 6.60,
                'imdbId': "tt1616195",
                'tmdbId': "88794"
            }, {
                'title': "Артист",
                'year': 2011,
                'imdb': 8.00,
                'imdbId': "tt1655442",
                'tmdbId': "74643"
            }, {
                'title': "Нити",
                'year': 1984,
                'imdb': 8.10,
                'imdbId': "tt0090163",
                'tmdbId': "17835"
            }, {
                'title': "Треугольник",
                'year': 2009,
                'imdb': 6.90,
                'imdbId': "tt1187064",
                'tmdbId': "26466"
            }],
            'series': []
        },
        'year2013': {
            'fiction': [{
                'title': "Большой Лебовски",
                'year': 1998,
                'imdb': 8.20,
                'imdbId': "tt0118715",
                'tmdbId': "115"
            }, {
                'title': "Сияние",
                'year': 1980,
                'imdb': 8.50,
                'imdbId': "tt0081505",
                'tmdbId': "694"
            }, {
                'title': "Шерлок (сериал)",
                'year': '2010-2012',
                'imdb': 9.30,
                'imdbId': "tt1475582",
                'tmdbId': "19885"
            }, {
                'title': "Джанго освобожденный",
                'year': 2012,
                'imdb': 8.50,
                'imdbId': "tt0060315",
                'tmdbId': "10772"
            }, {
                'title': "Бэтмен (трилогия)",
                'year': '2005-2012',
                'imdb': '7.98 8.49 8.33',
                'imdbId': "tt0468569",
                'tmdbId': "155"
            }, {
                'title': "Церемония",
                'year': 1995,
                'imdb': 7.60,
                'imdbId': "tt0112769",
                'tmdbId': "1802"
            }, {
                'title': "Вспомнить все",
                'year': 2012,
                'imdb': 6.30,
                'imdbId': "tt1386703",
                'tmdbId': "64635"
            }, {
                'title': "Беспредел",
                'year': 2010,
                'imdb': 6.80,
                'imdbId': "tt1462667",
                'tmdbId': "45284"
            }, {
                'title': "Пипец",
                'year': 2010,
                'imdb': 7.80,
                'imdbId': "tt1250777",
                'tmdbId': "23483"
            }, {
                'title': "Мечта кассандры",
                'year': 2007,
                'imdb': 6.70,
                'imdbId': "tt0795493",
                'tmdbId': "4787"
            }],
            'series': []
        },
        'year2014': {
            'fiction': [{
                'title': "Однажды в Америке",
                'year': 1983,
                'imdb': 8.40,
                'imdbId': "tt0087843",
                'tmdbId': "311"
            }, {
                'title': "Отель 'Руанда'",
                'year': 2004,
                'imdb': 8.20,
                'imdbId': "tt0395169",
                'tmdbId': "205"
            }, {
                'title': "Волк с Уолл-стрит",
                'year': 2013,
                'imdb': 8.30,
                'imdbId': "tt0993846",
                'tmdbId': "26466"
            }, {
                'title': "Рокки",
                'year': 1976,
                'imdb': 8.10,
                'imdbId': "tt0075148",
                'tmdbId': "1366"
            }, {
                'title': "Интерстеллар",
                'year': 2014,
                'imdb': 8.90,
                'imdbId': "tt0816692",
                'tmdbId': "157336"
            }, {
                'title': "Обливион",
                'year': 2013,
                'imdb': 7.00,
                'imdbId': "tt1483013",
                'tmdbId': "75612"
            }, {
                'title': "Пленницы",
                'year': 2013,
                'imdb': 8.10,
                'imdbId': "tt1392214",
                'tmdbId': "146233"
            }, {
                'title': "Грань будущего",
                'year': 2014,
                'imdb': 8.00,
                'imdbId': "tt1631867",
                'tmdbId': "137113"
            }, {
                'title': "Таксист",
                'year': 1976,
                'imdb': 8.40,
                'imdbId': "tt0075314",
                'tmdbId': "103"
            }, {
                'title': "Исчезнувшая",
                'year': 2014,
                'imdb': 8.30,
                'imdbId': "tt2267998",
                'tmdbId': "210577"
            }, {
                'title': "Драйв",
                'year': 2011,
                'imdb': 7.80,
                'imdbId': "tt0780504",
                'tmdbId': "64690"
            }],
            'series': []
        },
        'year2015': {
            'fiction': [{
                'title': "Бегущий по лезвию бритвы",
                'year': 1982,
                'imdb': 8.20,
                'imdbId': "tt0083658",
                'tmdbId': "78"
            }, {
                'title': "Утомленные солнцем",
                'year': 1994,
                'imdb': 8.00,
                'imdbId': "tt0111579",
                'tmdbId': "50797"
            }, {
                'title': "Безумный Макс: Дорога ярости",
                'year': 2015,
                'imdb': 8.20,
                'imdbId': "tt1392190",
                'tmdbId': "76341"
            }, {
                'title': "Набережная Орфевр, 36",
                'year': 2004,
                'imdb': 7.20,
                'imdbId': "tt0390808",
                'tmdbId': "7291"
            }, {
                'title': "Рембо: Первая Кровь (часть 1, часть 2)",
                'year': "1982, 1985",
                'imdb': 8.90,
                'imdbId': "tt0083944",
                'tmdbId': "1368"
            }, {
                'title': "Звездные войны: Пробуждение силы (эпизод 7)",
                'year': 2015,
                'imdb': 8.60,
                'imdbId': "tt2488496",
                'tmdbId': "26466"
            }, {
                'title': "Имя розы",
                'year': 1986,
                'imdb': 7.80,
                'imdbId': "tt0091605",
                'tmdbId': "192"
            }, {
                'title': "Иди и смотри",
                'year': 1985,
                'imdb': 8.30,
                'imdbId': "tt0091251",
                'tmdbId': "25237"
            }, {
                'title': "Любовь и смерть",
                'year': 1975,
                'imdb': 7.80,
                'imdbId': "tt0073312",
                'tmdbId': "11686"
            }, {
                'title': "Робот по имени Чаппи",
                'year': 2015,
                'imdb': 6.90,
                'imdbId': "tt1823672",
                'tmdbId': "198184"
            }, {
                'title': "Воспоминания об убийстве",
                'year': 2003,
                'imdb': 8.10,
                'imdbId': "tt0353969",
                'tmdbId': "11423"
            }],
            'series': [{
                'title': "Фарго, сезон 1",
                'year': 2014,
                'imdb': 9.00,
                'imdbId': "tt2802850",
                'tmdbId': "60622"
            }, {
                'title': "Настоящий детектив, сезон 1",
                'year': 2014,
                'imdb': 9.20,
                'imdbId': "tt2356777",
                'tmdbId': "46648"
            }, {
                'title': "Настоящий детектив, сезон 2",
                'year': 2015,
                'imdb': 9.20,
                'imdbId': "tt2356777",
                'tmdbId': "46648"
            }, {
                'title': "Мост, сезон 1",
                'year': 2011,
                'imdb': 8.60,
                'imdbId': "tt1733785",
                'tmdbId': "45016"
            }]
        }
    },
    'books': { // ****************************************************************************** BOOKS
        'year2012': {
            'fiction': [{
                'title': "Имя розы",
                'author': "Умберто Эко",
                'year': 1980
            }, {
                'title': "Грозовой перевал",
                'author': "Эмилия Бронте",
                'year': 1847
            }, {
                'title': "Ася",
                'author': "Иван Тургенев",
                'year': 1858
            }, {
                'title': "Убежище",
                'author': "Анна Франк",
                'year': 1944
            }, {
                'title': "Старик и море",
                'author': "Эрнест Хэмингуэй",
                'year': 1952
            }, {
                'title': "Белая гвардия",
                'author': "Михаил Булгаков",
                'year': 1925
            }, {
                'title': "Аэропорт",
                'author': "Артур Хейли",
                'year': 1968
            }, {
                'title': "Гибель 31 отдела",
                'author': "Пер Вале",
                'year': 1970
            }, {
                'title': "12 стульев",
                'author': "Илья Ильф, Евгений Петров",
                'year': 1928
            }, {
                'title': "Приваловские миллионы",
                'author': "Дмитрий Мамин-Сибиряк",
                'year': 1883
            }],
            'nonfiction': [{
                'title': "Искусство системного мышления",
                'author': "Джозеф О'Коннор",
                'year': 2012
            }, {
                'title': "Вы, конечно, шутите мистер Фейнман",
                'author': "Ричард Фейнман",
                'year': 1985
            }, {
                'title': "Математические досуги",
                'author': "Мартин Гарднер",
                'year': 1972
            }, {
                'title': "Как читать книги",
                'author': "Сергей Поварнин",
                'year': 1924
            }, {
                'title': "Русский язык на грани нервного срыва",
                'author': "Максим Кронгауз",
                'year': 2008
            }]
        },
        'year2013': {
            'fiction': [{
                'title': "Замок",
                'author': "Франц Кафка",
                'year': 1926
            }, {
                'title': "Три товарища",
                'author': "Эрих-Мария Ремарк",
                'year': 1936
            }, {
                'title': "Мартин Иден",
                'author': "Джек Лондон",
                'year': 1909
            }, {
                'title': "Письма о добром",
                'author': "Дмитрий Лихачев",
                'year': 1985
            }, {
                'title': "451 градус по Фаренгейту",
                'author': "Рэй Брэдбери",
                'year': 1953
            }, {
                'title': "Белый Клык",
                'author': "Джек Лондон",
                'year': 1906
            }, {
                'title': "Рассказы",
                'author': "Антон Чехов",
                'year': "1870-1905"
            }, {
                'title': "Цветы для Элджернона (рассказ)",
                'author': "Дэниел Киз",
                'year': 1959
            }, {
                'title': "Дом, который построил Тил",
                'author': "Роберт Хайнлайн",
                'year': 1967
            }, {
                'title': "Немного солнца в холодной воде",
                'author': "Француаза Саган",
                'year': 1969
            }],
            'nonfiction': [{
                'title': "Блокадная книга",
                'author': "Алесь Адамович, Даниил Гранин",
                'year': "1977-1981"
            }, {
                'title': "Воспоминания о войне",
                'author': "Николай Никулин",
                'year': 1975
            }, {
                'title': "Простая одержимость",
                'author': "Джон Дербишер",
                'year': 2010
            }, {
                'title': "Искусство рассуждать о книгах, которые не читал",
                'author': "Пьер Байар",
                'year': 2012
            }, {
                'title': "Знать и помнить. Преступления фашизма в годы ВОВ",
                'author': "Нина Петрова",
                'year': 2012
            }, {
                'title': "Математические пятиминутки",
                'author': "Эдвард Берендес",
                'year': 2013
            }, {
                'title': "Восхождение денег",
                'author': "Найл Фергюссон",
                'year': 2009
            }, {
                'title': "Совершенный код",
                'author': "Стив Макконел",
                'year': 1993
            }, {
                'title': "Апокалипсис: Катастрофы прошлого, сценарии будущего",
                'author': "Александр Соловьев",
                'year': 2010
            }, {
                'title': "Книги в огне",
                'author': "Люсьен Поластрон",
                'year': 2006
            }]
        },
        'year2014': {
            'fiction': [{
                'title': "Уловка 22",
                'author': "Джозеф Хеллер",
                'year': 1961
            }, {
                'title': "Воскресение",
                'author': "Лев Толстой",
                'year': 1899
            }, {
                'title': "Дона флор и два ее мужа",
                'author': "Жоржи Амаду",
                'year': 1966
            }, {
                'title': "Бойня номер пять",
                'author': "Курт Воннегут",
                'year': 1969
            }, {
                'title': "Полковнику никто не пишет",
                'author': "Габриэль Гарсия Маркес",
                'year': 1961
            }, {
                'title': "Давай поженимся",
                'author': "Джон Апдайк",
                'year': 1977
            }, {
                'title': "Рассказы, Пьесы и др.",
                'author': "Вуди Аллен",
                'year': "1960-1999"
            }, {
                'title': "Марсианские хроники",
                'author': "Рэй Брэдбери",
                'year': 1950
            }, {
                'title': "9 рассказов",
                'author': "Джером Сэлинджер",
                'year': 1997
            }, {
                'title': "Любовник леди Чаттерлей",
                'author': "Дейвид Герберт Лоренс",
                'year': 1998
            }],
            'nonfiction': [{
                'title': "Информация. История. Теория. Поток",
                'author': "Джеймс Глик",
                'year': 2012
            }, {
                'title': "Геймификация в бизнесе",
                'author': "Гейб Зикерманн, Джоселин Линдер",
                'year': 2013
            }, {
                'title': "Не пытайтесь избавиться от книг",
                'author': "Умберто Эко",
                'year': 2010
            }, {
                'title': "Как читать книги",
                'author': "Мортимер Адлер",
                'year': 1972
            }, {
                'title': "Улыбка Пол Пота. Путешествие по Камбодже красных кхмеров",
                'author': "Петер Фреберг Идлинг",
                'year': 2013
            }, {
                'title': "Накануне империи",
                'author': "Валерий Коровин",
                'year': 2008
            }, {
                'title': "Технологии, которые изменят мир",
                'author': "Мартин Форд",
                'year': 2012
            }, {
                'title': "Откровения молодого романиста",
                'author': "Умберто Эко",
                'year': 2012
            }, {
                'title': "Уроки чтения",
                'author': "Александр Генис",
                'year': 2013
            }, {
                'title': "Геополитика: Как это делается",
                'author': "Николай Стариков",
                'year': 2014
            }]
        },
        'year2015': {
            'fiction': [{
                'title': "Сто лет одиночества",
                'author': "Габриэль Гарсиа Маркес",
                'year': 1967
            }, {
                'title': "Госпожа Бовари",
                'author': "Гюстав Флобер",
                'year': 1856
            }, {
                'title': "Триумфальная арка",
                'author': "Эрих Мария Ремарк",
                'year': 1945
            }, {
                'title': "Процесс",
                'author': "Франц Кафка",
                'year': 1925
            }, {
                'title': "Что-то случилось",
                'author': "Джозеф Хеллер",
                'year': 1974
            }, {
                'title': "Криптономикон",
                'author': "Нил Стивенсон",
                'year': 1999
            }, {
                'title': "Страдания юного Вертера",
                'author': "Иоганн Гёте",
                'year': "1774"
            }, {
                'title': "Автостопом по галактике",
                'author': "Дуглас Адамс",
                'year': 1979
            }, {
                'title': "Дневник молодого Л. Толстого",
                'author': "Лев Толстой",
                'year': 1967
            }, {
                'title': "Судьба Человека",
                'author': "Михаил Шолохов",
                'year': 1957
            }, {
                'title': "Рассказы",
                'author': "Юрий Мамлеев",
                'year': "1975-1990"
            }],
            'nonfiction': [{
                'title': "Манипуляция сознанием",
                'author': "Алесь Адамович, Даниил Гранин",
                'year': "1977-1981"
            }, {
                'title': "Криминальное чтиво",
                'author': "Николай Никулин",
                'year': 1975
            }, {
                'title': "История бестселлеров",
                'author': "Джон Дербишер",
                'year': 2010
            }, {
                'title': "Разруха в головах",
                'author': "Дмитрий Беляев",
                'year': 2012
            }, {
                'title': "Поп-культура и знаки времени",
                'author': "Александр Дугин",
                'year': 2012
            }, {
                'title': "650 фильмов: выбор Афиши",
                'author': "Эдвард Берендес",
                'year': 2013
            }, {
                'title': "Записики сантехника о кино, Украина це Россия, Мужские разговоры за жизнь",
                'author': "Дмитрий 'Гоблин' Пучков",
                'year': 2009
            }, {
                'title': "Энциклопедия компьютерных игр",
                'author': "Стив Макконел",
                'year': 1993
            }, {
                'title': "Обществоведение",
                'author': "Александр Дугин",
                'year': 2010
            }, {
                'title': "Моя Украина: геополитический дневник",
                'author': "Александр Дугин",
                'year': 2006
            }]
        }
    },
    'games': { // *********************************************************************************** GAMES
        'year2012': [{
            'title': "MTG: Duels of planewalkers 2013",
            'year': 2012,
            'metacritic': 77,
            'giantBombId':"3030-37907"
        }, {
            'title': "Mass Effect 2",
            'year': 2010,
            'metacritic': 94,
            'giantBombId':"3030-21590"
        }, {
            'title': "Grand Theft Auto 4",
            'year': 2008,
            'metacritic': 90,
            'giantBombId':"3030-20457"
        }, {
            'title': "Risen",
            'year': 2009,
            'metacritic': 77,
            'giantBombId':"3030-23081"
        }, {
            'title': "Hitman",
            'year': 2000,
            'metacritic': 73,
            'giantBombId':"3030-6709"
        }, {
            'title': "Braid",
            'year': 2010,
            'metacritic': 90,
            'giantBombId':"3030-20716"
        }],
        'year2013': [{
            'title': "Walking Dead. Season 1",
            'year': 2012,
            'metacritic': 82,
            'giantBombId':"3030-34205"
        }, {
            'title': "Mass Effect 3",
            'year': 2012,
            'metacritic': 89,
            'giantBombId':"3030-29935"
        }, {
            'title': "Sleeping Dogs",
            'year': 2012,
            'metacritic': 81,
            'giantBombId':"3030-29441"
        }, {
            'title': "Sword of the Stars: the Pit",
            'year': 2013,
            'metacritic': 68,
            'giantBombId':"3030-41913"
        }, {
            'title': "Hotline Miami",
            'year': 2012,
            'metacritic': 85,
            'giantBombId':"3030-39452"
        }, {
            'title': "The Binding of Isaac",
            'year': 2011,
            'metacritic': 84,
            'giantBombId':"3030-35899"
        }, {
            'title': "Mafia 2",
            'year': 2010,
            'metacritic': 74,
            'giantBombId':"3030-20538"
        }, {
            'title': "Alan Wake",
            'year': 2012,
            'metacritic': 83,
            'giantBombId':"3030-20982"
        }, {
            'title': "Just Cause 2. Multiplayer mod",
            'year': 2010,
            'metacritic': 84,
            'giantBombId':"3030-20742"
        }, {
            'title': "Chaos Engine",
            'year': 1993,
            'metacritic': 40,
            'giantBombId':"3030-948"
        }],
        'year2014': [{
            'title': "Dragon age: Origins",
            'year': 2009,
            'metacritic': 91,
            'giantBombId':"3030-20738"
        }, {
            'title': "XCOM: Enemy unknown",
            'year': 2013,
            'metacritic': 91,
            'giantBombId':"3030-37152"
        }, {
            'title': "Walking dead: Season 2",
            'year': 2014,
            'metacritic': 87,
            'giantBombId':"3030-39042"
        }, {
            'title': "The wolf among us",
            'year': 2014,
            'metacritic': 84,
            'giantBombId':"3030-34213"
        }, {
            'title': "Don't starve",
            'year': 2013,
            'metacritic': 79,
            'giantBombId':"3030-39664"
        }, {
            'title': "F1 2013",
            'year': 2013,
            'metacritic': 77,
            'giantBombId':"3030-43251"
        }, {
            'title': "Sniper elite V2",
            'year': 2012,
            'metacritic': 66,
            'giantBombId':"3030-34715"
        }, {
            'title': "FEZ",
            'year': 2013,
            'metacritic': 91,
            'giantBombId':"3030-24768"
        }, {
            'title': "Bioshock",
            'year': 2007,
            'metacritic': 96,
            'giantBombId':"3030-17280"
        }, {
            'title': "Worms Armageddon",
            'year': 1999,
            'metacritic': "-",
            'giantBombId':"3030-17255"
        }],
        'year2015': [{
            'title': "This war of mine",
            'year': 2014,
            'metacritic': 83,
            'giantBombId':"3030-45657"
        }, {
            'title': "Don't starve together",
            'year': 2014,
            'metacritic': 79,
            'giantBombId':"3030-39664"
        }, {
            'title': "Binding of Isaac: Rebirth",
            'year': 2014,
            'metacritic': 86,
            'giantBombId':"3030-40865"
        }, {
            'title': "XCOM: Enemy within",
            'year': 2014,
            'metacritic': 92,
            'giantBombId':"3030-43648"
        }, {
            'title': "Chess.com",
            'year': 2005,
            'metacritic': "-",
            'giantBombId':"3030-37907"
        }, {
            'title': "Rogue Legacy",
            'year': 2013,
            'metacritic': 85,
            'giantBombId':"3030-42828"
        }, {
            'title': "Hearthstone",
            'year': 2014,
            'metacritic': 88,
            'giantBombId':"3030-42033"
        }]
    }
};


var appModel = new rateApp.AppModel(multi);

var mainView = new rateApp.MainView({
    model: appModel,
    el: $('.main')
});
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
    'openMain': function() {
        $('.main').html('');
        mainView.render();
    },

    'openFilms': function() {
        $('.main').html('');

        var mainSection = new rateApp.FilmsView({
            model: mainView.model,
            el: $('.main')
        });
        mainSection.render();
    },

    'openBooks': function() {
        $('.main').html('');

        var mainSection = new rateApp.BooksView({
            model: mainView.model,
            el: $('.main')
        });
        mainSection.render();
    },

    'openGames': function() {
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

function typicalViewDressing() {

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

    $(".lefter").click(function() {
        $('.slick-prev').click();
    })
    $(".righter").click(function() {
        $('.slick-next').click();
    });

    $("#social").removeClass("main_social");
    $("#f").removeClass("main_footer");

}
// omdb
function getMovieInfo(IMDBid) {

    var localStorageFilm = localStorage.getItem(IMDBid);
    console.log("localStorageFilm");
    console.log(localStorageFilm);

    if(localStorageFilm == undefined){

        var urlString = "http://www.omdbapi.com/?i=" + IMDBid + "&plot=short&r=json";
        var result = "";
        return $.ajax({
            url: urlString,
            success: function(data) {
                // console.log("success");
                // console.log(data);
                result = data;
                localStorage.setItem(IMDBid, JSON.stringify(result));
                return result;
            },
            error: function() {
                // console.log("error");
                // console.log(data);
            }
        });

    }
    else {
        result = JSON.parse(localStorageFilm);
        //localStorage.removeItem(IMDBid);
        return result;
    }
}

// tmdb
function getMovieInfoTmdb(IMDBid) {

    // var localStorageFilm = localStorage.getItem(IMDBid);
    // console.log("localStorageFilm");
    // console.log(localStorageFilm);

    //if(localStorageFilm == undefined){

        // TMDB API_KEY
        var API_KEY = "37662c76ffc19e5cd1b95f37d77155fc";

        var urlString = "https://api.themoviedb.org/3/find/" + IMDBid + "?external_source=imdb_id&api_key=" + API_KEY;
        var result = "";
        return $.ajax({
            url: urlString,
            success: function(data) {
                console.log("success");
                console.log(data);
                result = data.movie_results[0];
                //localStorage.setItem(IMDBid, JSON.stringify(result));
                return result;
            },
            error: function() {
                // console.log("error");
                // console.log(data);
            }
        });

    //}
    // else {
    //     result = JSON.parse(localStorageFilm);
    //     //localStorage.removeItem(IMDBid);
    //     return result;
    // }
}

//tmdb
function getRequestTokenTmdb(){
    // TMDB API_KEY
    var API_KEY = "37662c76ffc19e5cd1b95f37d77155fc";

    var urlString = "https://api.themoviedb.org/3/authentication/token/new?api_key=" + API_KEY;
    var request_token = "";
    return $.ajax({
        url: urlString,
        success: function(data) {
            // console.log("success token request");
            // console.log(data);
            // request_token = data.request_token;
            // return request_token;
        },
        error: function() {
            // console.log("error");
            // console.log(data);
        }
    });
}

//tmdb
function askPermissionTmdb(request_token){

    // TMDB API_KEY
    var API_KEY = "37662c76ffc19e5cd1b95f37d77155fc";

    var urlString = "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=" + API_KEY + "&request_token=" + request_token + "&username=codyfet&password=.gb.gb30"
    //var request_token = "";
    return $.ajax({
        url: urlString,
        success: function(data) {
            // console.log("success token request");
            // console.log(data);
            // request_token = data.request_token;
            // return request_token;
        },
        error: function() {
            // console.log("error");
            // console.log(data);
        }
    });
}

//tmdb
function getSessionId(request_token){

    // TMDB API_KEY
    var API_KEY = "37662c76ffc19e5cd1b95f37d77155fc";

    var urlString = "https://api.themoviedb.org/3/authentication/session/new?api_key=" + API_KEY + "&request_token=" + request_token;
    var session_id = "";
    return $.ajax({
        url: urlString,
        success: function(data) {
            // console.log("success session request");
            // console.log(data);
            // request_token = data.request_token;
            // return request_token;
        },
        error: function() {
            // console.log("error");
            // console.log(data);
        }
    });

}

function createListTmdb(session_id){

    // TMDB API_KEY
    var API_KEY = "37662c76ffc19e5cd1b95f37d77155fc";

    var urlString = "https://api.themoviedb.org/3/list?api_key=" + API_KEY + "&session_id=" + session_id;
    var session_id = "";
    return $.ajax({
        url: urlString,
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: "{'name':'MyFilms','description':'Best films for all years'}",
        success: function(data) {
            console.log("success create list");
            console.log(data);
            // request_token = data.request_token;
            // return request_token;
        },
        error: function() {
            // console.log("error");
            // console.log(data);
        }
    });

}

function getInfoAboutListTmdb(list_id){

    // TMDB API_KEY
    var API_KEY = "37662c76ffc19e5cd1b95f37d77155fc";

    var urlString = "http://api.themoviedb.org/3/list/" + list_id + "?api_key=" + API_KEY;

    return $.ajax({
        url: urlString,
        success: function(data) {
            console.log("success get list request");
            console.log(data);
            // request_token = data.request_token;
            // return request_token;
        },
        error: function() {
            // console.log("error");
            // console.log(data);
        }
    });

}

function addMovieToList(list_id, session_id, tmdbId){

    // TMDB API_KEY
    var API_KEY = "37662c76ffc19e5cd1b95f37d77155fc";
    //5697c23f7536a13bcc00004e

    var urlString = "http://api.themoviedb.org/3/list/" + list_id + "/add_item?api_key=" + API_KEY + "&session_id=" + session_id;
    var session_id = "";
    return $.ajax({
        url: urlString,
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: "{'media_id':'" + tmdbId + "'}",
        success: function(data) {
            console.log("success add mobie to list");
            console.log(data);
        },
        error: function() {
            // console.log("error");
            // console.log(data);
        }
    });

}

function removieMovieFromList(list_id, session_id, tmdbId){

    // TMDB API_KEY
    var API_KEY = "37662c76ffc19e5cd1b95f37d77155fc";

    var urlString = "http://api.themoviedb.org/3/list/" + list_id + "/remove_item?api_key=" + API_KEY + "&session_id=" + session_id;
    return $.ajax({
        url: urlString,
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: "{'media_id':'" + tmdbId + "'}",
        success: function(data) {
            console.log("success remove film from list");
            console.log(data);
        },
        error: function() {
            // console.log("error");
            // console.log(data);
        }
    });

}

function findMovieByImdbId(imdbId){

    // TMDB API_KEY
    var API_KEY = "37662c76ffc19e5cd1b95f37d77155fc";

    var urlString = "https://api.themoviedb.org/3/find/" + imdbId + "?external_source=imdb_id&api_key=" + API_KEY;
    //var session_id = "";
    return $.ajax({
        url: urlString,
        success: function(data) {
            console.log("success find movie ");
            console.log(imdbId);
            console.log(data.movie_results[0].title);
            console.log(data.movie_results[0].id);
            // request_token = data.request_token;
            // return request_token;
        },
        error: function() {
            // console.log("error");
            // console.log(data);
        }
    });

}

function getGameInfo(gameId) {

    var result = "";

    var localStorageGame = localStorage.getItem(gameId);
    console.log("localStorageGame");
    console.log(localStorageGame);

    if(localStorageGame == undefined){

        var api_key = "7e50e7a3d98c9a9e449fada9dc8b5da92e67d9d4";
        var urlString = "http://www.giantbomb.com/api/game/" + gameId + "/?api_key=" + api_key + "&format=jsonp&field_list=id,name,image";
        return $.ajax({
            url: urlString,
            type: "GET",
            dataType: "jsonp",
            crossDomain: true,
            jsonp: "json_callback",
            success: function(data) {
                console.log("success game data");
                console.log(data);
                localStorage.setItem(gameId, JSON.stringify(data.results));
                result = data;
                return result;
            },
            error: function() {
                // console.log("error");
                // console.log(data);
            }
        });

    }
    else {
        result = JSON.parse(localStorageGame);
        localStorage.removeItem(gameId);
        return result;
    }

}