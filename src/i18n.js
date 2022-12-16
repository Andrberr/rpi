import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi) // Registering the back-end plugin
    .use(Backend)

    .init({
        debug: true,
        fallbacklng: "ru",
        supportedLngs: ["en", "ru"],

        interpolation: {
            escapeValue: false
        },

        resources: {
            en: {
                translation: {
                    "home_page": "Home",
                    "list_of_architects": "Architects of Belarus",
                    "russian_lang": "Russian",
                    "english_lang": "English",
                    "start_phrase": "Belarusian architects",
                    "about_site_line1": "An architect is a specialist who is engaged in architectural design, that is, the development of building plans, their facades - in general and in detail, as well as interior spaces.",
                    "about_site_line2": "The architecture of the country is a kind of image of the state, it can reveal the historical heritage, speak about the tastes, preferences and standard of living of the state.",

                    "creators": "Developers",
                    "creator1": "Dana Kononova",
                    "creator2": "Andrey Berezkin",
                    "creator3": "Nikita Aleksandrov",
                    "github": "GitHub profile",

                    "person_of_day": "Person of the day",
                    "personButton": "Learn more",

                    "list_of_arch": "List of architects of Belarus",
                    "searchCaption": "Search for an architect",

                    "ListHeader": "Architects of Belarus",
                    "search": "Search...",

                    "architects": {
                        "langbard": {
                            "name": "Joseph",
                            "surname": "Langbard",
                            "patronymic": "Grigorievich",
                            "shortDesc": "Belarusian Soviet architect, Honored Artist of the Byelorussian SSR (1934), winner of the Grand Prix of the World Exhibition in Paris, 1937, Doctor of Architecture (since 1939).",
                            "longDesc": "He is one of the outstanding architects of Europe of the 20th century, whose artistic heritage had a significant impact on the development of modern architecture. His architectural works greatly influenced the formation of the image of the city of Minsk and are examples of Belarusian architecture.",
                            "i0": "Joseph Langbard was born on January 6 (18), 1882 in the town of Belsk, Grodno province of the Russian Empire, into a Jewish family. His father saw the future for his son in commerce, but Joseph loved to draw from childhood.",
                            "i1": "Having brilliantly graduated from the local gymnasium in 1901, he entered the architectural department of the Odessa Art College, which he graduated in 1906.",
                            "i2": "In 1907 he moved to St. Petersburg, where he successfully passed the exams at the Higher Art School at the Imperial Academy of Arts at the Faculty of Architecture. He studied for seven years in St. Petersburg. ",
                            "i3": "During the First World War, Langbard worked at the front as the head of an engineering detachment. Under his leadership, the Zemstvo Administration in Kostroma, the Agricultural Museum and the Theater of Miniatures in Petrograd were built at that time.",
                            "i4": "During the Second World War, Langbard worked on camouflaging buildings in Leningrad, after being evacuated to the rear he lived in the Yaroslavl region. In 1944 he returned to Minsk, destroyed by the Nazis, where, as part of the commission of the Committee for Architecture under the Council of People's Commissars of the USSR, he worked on plans reconstruction of Minsk and Gomel.",
                            "i5": "Together with Mikhail Baklanov, he developed the project for the building of the Pobeda cinema in Minsk, completed in 1950.",
                            "captions": {
                                "1": "Independence Square in Minsk",
                                "2": "Building of the Academy of Sciences in Minsk",
                                "3": "House of officers in Minsk"
                            },
                            "maps": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38627.4881521161!2d23.155104918590883!3d52.76434165531651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472023903269b7d3%3A0xfedf75199d10c898!2s17-100%20Bielsk%20Podlaski%2C%20Poland!5e0!3m2!1sen!2sby!4v1671107264730!5m2!1sen!2sby"
                        },
                        "bovt": {
                            "name": "Ivan",
                            "surname": "Bovt",
                            "patronymic": "Ivanovich",
                            "shortDesc": "Soviet and Belarusian architect. Honored Architect of the Byelorussian SSR (1973).",
                            "longDesc": "Laureate of the Prize of the Council of Ministers of the USSR and the Prize of the Council of Ministers of the Republic of Belarus, Academician of the Belarusian Academy of Architecture, Academician of the International Academy of Architecture, Chairman of the Board of the Union of Architects of the BSSR (1977-1980), Secretary of the Union of Architects of the USSR (1977-1982), Member of the Urban Planning Council of the Gosstroy of the USSR (1977-1981), Gosstroy of the USSR (1968-1982), Department of Architecture of the Minsk Oblast Executive Committee and Minsk City Executive Committee (multiple times), deputy of the Leninsky District Council of Workers' Deputies of Minsk (1965, 1967).",
                            "i0": "Born in Minsk on July 20, 1932 in the family of a civil servant, the eldest of three children.",
                            "i1": "In 1948 he graduated from seven classes of secondary school No. 33. In his youth he was engaged in aircraft modeling, he was going to enter the Moscow Aviation Institute as an aviation designer",
                            "i2": "Graduated in 1952 from the Minsk Architectural and Civil Engineering College, in 1961 from the Belarusian Polytechnic Institute with a degree in Industrial and Civil Engineering",
                            "i3": "In 1952-2001 he worked at the Belpromproject Institute, in 1962-2001 he was the chief architect. In January-July 1956, with a group of architects, I. I. Bovt was sent to Kazakhstan to develop master plans and priority objects of virgin state farms of the Kokchetav region",
                            "i4": "Member of the Union of Architects of the BSSR since 1962, Chairman of the Board of the Union of Architects of the BSSR in 1978-80. Since 1978 - Secretary of the Board of the USSR SA. Member of the CPSU since 1971.",
                            "captions": {
                                "1": "Watch factory in Minsk",
                                "2": "Institute of Construction and Architecture",
                                "3": "Belarusian Automobile Plant"
                            },
                            "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75252.67274821814!2d27.523157469202456!3d53.88472069817362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2sMinsk!5e0!3m2!1sen!2sby!4v1671104803661!5m2!1sen!2sby"
                        },
                        "romanov": {
                            "name": "Nicholas",
                            "surname": "Romanov",
                            "patronymic": "Venediktovich",
                            "shortDesc": "Civil Engineer, Architect",
                            "longDesc": "Civil engineer, architect",
                            "i0": "Born in 1863, descended from chief officer children. After graduating from the Astrakhan Real School, he entered the Institute of Civil Engineers in 1882. He graduated from the 1st category course in 1887.",
                            "i1": "From 1893 to 1900, M. Romanov was a Grodno provincial architect. On February 12, 1900, due to the death of Grodno provincial engineer V.F. Nebolsin, he was temporarily appointed to perform his duties.",
                            "i2": "In 1906-09, he took an active part in the construction of the Petrovsky-Nikolaevsky bridge across the Neman River in the city of Grodno. For this, N. Romanov received the highest gratitude from His Imperial Majesty.",
                            "i3": "With the outbreak of the First World War, M. V. Romanov was seconded to the 1st district of military road works, and then to the command of the head of the military road department of the Northern Front.",
                            "i4": "After evacuation into the interior of the country at the end of the war, he returned to Grodno, where he died in 1927.",
                            "captions": {
                                "1": "Church of St. Nicholas in Bialowieza",
                                "2": "People's House in Grodno",
                                "3": "Brick St. Nicholas Church in Krupchitsy"
                            },
                            "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77855.46992147376!2d30.88069842531352!3d52.42509784008621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d4699b50faf1a5%3A0x5ecca30fd2361396!2sGomel!5e0!3m2!1sen!2sby!4v1671107303909!5m2!1sen!2sby"
                        },
                        "parusnikov": {
                            "name": "Mikhail",
                            "surname": "Parusnikov",
                            "patronymic": "Pavlovich",
                            "shortDesc": "Soviet architect, full member of the USSR Academy of Architecture (1950).",
                            "longDesc": "Academician of the Academy of Sciences of the BSSR (1950; corresponding member since 1947). Teacher, professor (since 1948). Laureate of the State Prize of the Byelorussian SSR (1968).",
                            "i0": "From 1913 to 1918 he studied at MUZHVZ (his father was rector of a nearby church), then until 1924 at VKHUTEMAS. A student of S. V. Noakovsky and I. V. Zholtovsky.",
                            "i1": "From 1924 he worked in the architectural design organizations of Moscow and at the same time taught (1934-1941, since 1948 - professor) at the Moscow Architectural Institute.",
                            "i2": "In 1941-1944 - senior researcher at the Academy of Architecture of the USSR, in 1944-1948 - head of the architectural design workshops of the Committee for Architecture of the USSR.",
                            "i3": "Published a number of scientific papers on the theory and history of architecture, including: \"On the principles of complex serial design of residential buildings\" (Architecture of the USSR. 1953. No. 12) and \"On the experience of designing a series of typical mid-rise buildings\" (Architecture USSR. 1955. No. 2).",
                            "captions": {
                                "1": "KGB building in Minsk",
                                "2": "Building of the National Bank of the Republic of Belarus",
                                "3": "Bridge over the Svisloch"
                            },
                            "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577325.4387329643!2d36.82376442827013!3d55.58151820195861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2sMoscow%2C%20Russia!5e0!3m2!1sen!2sby!4v1671108276718!5m2!1sen!2sby"
                        },
                        "korol": {
                            "name": "Vladimir",
                            "surname": "Korol",
                            "patronymic": "Adamovich",
                            "shortDesc": "Soviet, Belarusian architect, teacher. People's Architect of the USSR (1970).",
                            "longDesc": "Awards: State Prize of the Byelorussian SSR (1968) - for the architecture of Leninsky Prospekt in Minsk, Order of Lenin (1958), Order of the October Revolution (1971), Order of the Red Banner of Labor (1966), Order of the Badge of Honor (1949) )",
                            "i0": "In 1931 he graduated from the Vitebsk Art College. For several years he worked as a teacher and director of one of the schools in Dzerzhinsk, Minsk region. From 1934 to 1941 he studied at the architectural faculty of the Leningrad Institute of Painting, Sculpture and Architecture",
                            "i1": "In July 1941, he joined the people's militia and, as an assistant military engineer of the division, took part in the defense of Leningrad. In November 1941, he was recalled from the front to work at the All-Russian Academy of Arts, and in 1942 he was evacuated to Central Asia together with staff and students of the academy, where he worked as director of the art school",
                            "i2": "In 1945, he arrived in Minsk, liberated and destroyed by the Nazis. He was appointed head of the architectural and planning workshop of the Belgosproekt Institute, which was engaged in the implementation of one of the main tasks of post-war urban planning: the development of a plan for planning and building the center of the capital of Belarus",
                            "i3": "Since 1947, he began working as a teacher, and then as head of the department of urban planning at the Faculty of Architecture of the Belarusian Polytechnic Institute",
                            "captions": {
                                "1": "The buildings of the post office on Independence Avenue and the Central Telegraph on October Square in Minsk",
                                "2": "Memorial \"Brest Hero Fortress\"",
                                "3": "Administrative building in Polotsk"
                            },
                            "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18891.81731483488!2d28.41253913074416!3d53.70976151805052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46da1720fca28f3f%3A0x3e7aa55afeb062f8!2zxIxlcnZpZcWE!5e0!3m2!1sen!2sby!4v1671109384933!5m2!1sen!2sby"
                        }
                    }
                },
            },


            ru: {
                translation: {
                    "home_page": "Главная",
                    "list_of_architects": "Архитекторы Беларуси",
                    "russian_lang": "Русский",
                    "english_lang": "Английский",
                    "start_phrase": "Белорусские архитекторы",
                    "about_site_line1": "Архитектор - это специалист, который занимается архитектурным проектированием, то есть разработкой планов зданий, их фасадов - в целом и в деталях, а также внутренних пространств.",
                    "about_site_line2": "Архитектура страны — это своего рода имидж государства, она может раскрывать историческое наследие, говорить о вкусах, предпочтениях и уровне жизни государства.",

                    "creators": "Разработчики",
                    "creator1": "Дана Кононова",
                    "creator2": "Андрей Берёзкин",
                    "creator3": "Некит Александров",
                    "github": "Профиль на GitHub",

                    "person_of_day": "Деятель дня",
                    "personButton": "Узнать больше",

                    "list_of_arch": "Список архитекторов Беларуси",
                    "ListHeader": "Архитекторы Беларуси",
                    "search": "Поиск...",

                    "architects": {
                        "langbard": {
                            "name": "Иосиф",
                            "surname": "Лангбард",
                            "patronymic": "Григорьевич",
                            "shortDesc": "Белорусский советский архитектор, заслуженный деятель искусств Белорусской ССР (1934), обладатель Гран-при Всемирной выставки в Париже, 1937, доктор архитектуры (с 1939 года).",
                            "longDesc": "Является одним из выдающихся зодчих Европы XX века, чьё художественное наследие оказало значительное влияние на развитие современной архитектуры. Его архитектурные работы в большой степени повлияли на формирование облика города Минска и являются образцами белорусского зодчества.",
                            "i0": "Иосиф Лангбард родился 6 (18) января 1882 года в местечке Бельск Гродненской губернии Российской империи, в еврейской семье. Отец видел будущее для сына в коммерции, однако Иосиф с детства любил рисовать.",
                            "i1": "Блестяще окончив в 1901 году местную гимназию, поступил на архитектурное отделение Одесского художественного училища, которое окончил в 1906 году.",
                            "i2": "В 1907 году переехал в Санкт-Петербург, где успешно выдержал экзамены в Высшее художественное училище при Императорской академии художеств на архитектурный факультет. Отучился семь лет в Санкт-Петербурге. ",
                            "i3": "Во время Первой мировой войны Лангбард работал на фронте в качестве начальника инженерного отряда. Под его руководством в это время были построены земская управа в Костроме, сельскохозяйственный музей и театр миниатюр в Петрограде.",
                            "i4": "Во время Второй мировой войны Лангбард работал над маскировкой зданий в Ленинграде, после эвакуации в тыл жил в Ярославской области. В 1944 году вернулся в разрушенный фашистами Минск, где в составе комиссии Комитета по делам архитектуры при СНК СССР работал над планами реконструкции Минска и Гомеля.",
                            "i5": "Вместе с Михаилом Баклановым разрабатывал проект здания кинотеатра «Победа» в Минске, законченный в 1950 году.",
                            "captions": {
                                "1": "Площадь Независимости в Минске",
                                "2": "Здание Академии наук в Минске",
                                "3": "Дом офицеров в Минске"
                            },
                            "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38627.4881521161!2d23.155104918590883!3d52.76434165531651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472023903269b7d3%3A0xfedf75199d10c898!2zMTctMTAwINCR0LXQu9GM0YHQui3Qn9C-0LTQu9GP0YHQutC4LCDQn9C-0LvRjNGI0LA!5e0!3m2!1sru!2sby!4v1671104856130!5m2!1sru!2sby"
                        },
                        "bovt": {
                            "name": "Иван",
                            "surname": "Бовт",
                            "patronymic": "Иванович",
                            "shortDesc": "Советский и белорусский архитектор. Заслуженный архитектор Белорусской ССР (1973).",
                            "longDesc": "Лауреат премии Совета Министров СССР и премии Совета Министров Республики Беларусь, академик Белорусской академии архитектуры, академик Международной академии архитектуры, председатель правления Союза архитекторов БССР (1977—1980), секретарь Союза архитекторов СССР (1977—1982), член градостроительного совета Госстроя СССР (1977—1981), Госстроя СССР (1968—1982), управления архитектуры Миноблисполкома и Мингорисполкома (многократно), депутат Ленинского районного Совета депутатов трудящихся Минска (1965, 1967).",
                            "i0": "Родился в Минске 20 июля 1932 года в семье государственного служащего, старший из трех детей.",
                            "i1": "В 1948 году окончил семь классов средней школы № 33. В юности занимался авиамоделированием, собирался поступать в Московский авиационный институт на авиационного конструктора",
                            "i2": "Окончил в 1952 году Минский архитектурно-строительный техникум, в 1961 — Белорусский политехнический институт по специальности «Промышленное и гражданское строительство»",
                            "i3": "В 1952—2001 годах работал в институте Белпромпроект, в 1962—2001 годах — главный архитектор. В январе-июле 1956 г. с группой архитекторов, И. И. Бовт был командирован в Казахстан для разработки генеральных планов и первоочередных объектов целинных совхозов Кокчетавской области",
                            "i4": "Член Союза архитекторов БССР с 1962 года, председатель правления Союза архитекторов БССР в 1978-80 годах. С 1978 года — секретарь правления СА СССР. Член КПСС с 1971 года.",
                            "captions": {
                                "1": "Часовой завод в Минске",
                                "2": "Институт строительства и архитектуры",
                                "3": "Белорусский автомобильный завод"
                            },
                            "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d301010.7177773798!2d27.312507313811793!3d53.88471697835504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQug!5e0!3m2!1sru!2sby!4v1671104615270!5m2!1sru!2sby"
                        },
                        "romanov": {
                            "name": "Николай",
                            "surname": "Романов",
                            "patronymic": "Венедиктович",
                            "shortDesc": "Гражданский инженер, архитектор",
                            "longDesc": "Гражданский инженер, архитектор",
                            "i0": "Родился в 1863 году, происходил из обер-офицерских детей.После окончания Астраханского реального училища поступил в Институт гражданских инженеров в 1882 году. Окончил здесь курс по 1-му разряду в 1887 году.",
                            "i1": "С 1893 по 1900 год М. Романов был гродненским губернским архитектором.12 февраля 1900 года в связи со смертью гродненского губернского инженера В. Ф. Небольсина был временно назначен для исполнения своих обязанностей.",
                            "i2": "В 1906-09 годах принимал активное участие в строительстве Петровско-Николаевского моста через реку Неман в г. Гродно. Для этого Н. Романов получил от Его Императорского Величества высочайшую благодарность.",
                            "i3": "С началом Первой мировой войны М. В. Романов был откомандирован в 1-й округ военно-дорожных работ, а затем в подчинение начальника военно-дорожного управления Северного фронта.",
                            "i4": "После эвакуации в глубь страны по окончании войны вернулся в Гродно, где и умер в 1927 году.",
                            "captions": {
                                "1": "Церковь Святого Николая в Беловеже",
                                "2": "Народный дом в Гродно",
                                "3": "Кирпичная Свято-Николаевская церковь в Крупчицах"
                            },
                            "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75613.19307532748!2d23.7806400131158!3d53.684188737470784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dfd64beac55d1d%3A0xf013fd26569718c0!2z0JPRgNC-0LTQvdC-!5e0!3m2!1sru!2sby!4v1671105501335!5m2!1sru!2sby"
                        },
                        "parusnikov": {
                            "name": "Михаил",
                            "surname": "Парусников",
                            "patronymic": "Павлович",
                            "shortDesc": "Советский архитектор, действительный член Академии архитектуры СССР (1950).",
                            "longDesc": "Академик АН БССР (1950; член-корреспондент с 1947). Педагог, профессор (с 1948). Лауреат Государственной премии Белорусской ССР (1968).",
                            "i0": "С 1913 по 1918 года обучался в МУЖВЗ (его отец был настоятелем соседнего храма), затем до 1924 года во ВХУТЕМАСе. Ученик С. В. Ноаковского и И. В. Жолтовского.",
                            "i1": "С 1924 работал в архитектурно-проектных организациях Москвы и одновременно преподавал (1934—1941 годах, с 1948 года — профессор) в МАРХИ .",
                            "i2": "В 1941—1944 годах — старший научный сотрудник Академии архитектуры СССР, в 1944—1948 — руководитель архитектурно-проектных мастерских Комитета по делам архитектуры СССР.",
                            "i3": "Опубликовал ряд научных работ по теории и истории архитектуры, в том числе: «О принципах комплексного серийного проектирования жилых домов» (Архитектура СССР. 1953. № 12) и «Об опыте проектирования серии типовых домов средней этажности» (Архитектура СССР. 1955. № 2).",
                            "captions": {
                                "1": "Здание КГБ в Минске",
                                "2": "Здание Нацбанка РБ",
                                "3": "Мост через Свислочь"
                            },
                            "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577325.4387329643!2d36.82376442827013!3d55.58151820195861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2sby!4v1671108225881!5m2!1sru!2sby"
                        },
                        "korol": {
                            "name": "Владимир",
                            "surname": "Король",
                            "patronymic": "Адамович",
                            "shortDesc": "Советский, белорусский архитектор, педагог. Народный архитектор СССР (1970).",
                            "longDesc": "Награды: Государственная премия Белорусской ССР (1968) — за архитектуру Ленинского проспекта в Минске, Орден Ленина (1958), Орден Октябрьской революции (1971), Орден Трудового Красного Знамени (1966), Орден «Знак Почёта» (1949)",
                            "i0": "В 1931 году окончил Витебский художественный техникум. Несколько лет работал учителем и директором одной из школ Дзержинска Минской области. С 1934 по 1941 год обучался на архитектурном факультете Ленинградского института живописи, скульптуры и архитектуры",
                            "i1": "В июле 1941 года вступил в народное ополчение и как помощник военного инженера дивизии принимал участие в обороне Ленинграда. В ноябре 1941 года он был отозван с фронта для работы во Всероссийской академии художеств, а в 1942 году эвакуирован в Среднюю Азию вместе с сотрудниками и студентами академии, где работал директором художественного училища",
                            "i2": "В 1945 году приехал в освобождённый, разрушенный фашистами Минск. Его назначали руководителем архитектурно-планировочной мастерской института «Белгоспроект», занимавшейся реализацией одной из главных задач послевоенного градостроительства: разработкой проекта планировки и застройки центра столицы Беларуси",
                            "i3": "С 1947 года начал работать преподавателем, а затем и заведующим кафедрой градостроительства архитектурного факультета Белорусского политехнического института",
                            "captions": {
                                "1": "Здания почтамта на проспекте Независимости и Центрального телеграфа на Октябрьской площади в Минске",
                                "2": "Мемориала «Брестская крепость-герой»",
                                "3": "Административное здание в Полоцке"
                            },
                            "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18891.81731483488!2d28.41253913074416!3d53.70976151805052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46da1720fca28f3f%3A0x3e7aa55afeb062f8!2z0KfQtdGA0LLQtdC90Yw!5e0!3m2!1sru!2sby!4v1671109317198!5m2!1sru!2sby"
                        }
                    }
                }
            }
        },
    });

export default i18n;