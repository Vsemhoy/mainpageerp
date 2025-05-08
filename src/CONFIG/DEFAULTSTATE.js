import React from "react";


// Данные о пользователе
export const DS_USER = {
    

    acls:    [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        27,
        28,
        33,
        34,
        36,
        37,
        39,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        77,
        78,
        79,
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        91,
        92,
        93,
        94,
        95,
        96,
        98,
        99,
        100,
        101,
        102,
        103,
        104,
        105,
        106,
        107,
        108,
        109,
        110,
        111,
        112,
        113,
        114,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        123,
        124,
        125,
        126,
        127,
        128,
        129,
        130,
        131,
        132,
        133,
        134,
        135,
        136,
        137,
        138,
        139,
        140,
        141,
        142,
        143,
        144,
        145,
        146,
        147,
        148,
        149
      ],

    "companies": [
        {
            "id": 2,
            "name": "Rondo",
            "description": "ООО Рондо",
            "is_active": 1,
            "template_prefix": "rond",
            "folder": "rondo",
            "color": "#2ccf2c",
            "ext_address_offers": "/",
            "path_logo": "/images/identics/iwtRd02l2h/logo.png",
            "created_at": null,
            "updated_at": null,
            "places": [
                {
                    "id": 89,
                    "name": "bidmanager",
                    "label": "Роль менеджер",
                    "accessgroup": 4,
                    "accessname": "Менеджер",
                    "position": 210,
                    "place": 1
                },
                {
                    "id": 91,
                    "name": "bidadministrator",
                    "label": "Роль администратора",
                    "accessgroup": 4,
                    "accessname": "Администратор",
                    "position": 220,
                    "place": 2
                }
            ]
        },
        {
            "id": 2,
            "name": "Arstel",
            "description": "ООО Арстел",
            "is_active": 1,
            "template_prefix": "ars",
            "folder": "arstel",
            "color": "#ff7700",
            "ext_address_offers": "/",
            "path_logo": "/images/identics/adw32jk2jl/Arstel_logo.svg",
            "created_at": null,
            "updated_at": null,
            "places": [
                {
                    "id": 89,
                    "name": "bidmanager",
                    "label": "Роль менеджер",
                    "accessgroup": 4,
                    "accessname": "Менеджер",
                    "position": 210,
                    "place": 1
                },
                {
                    "id": 91,
                    "name": "bidadministrator",
                    "label": "Роль администратора",
                    "accessgroup": 4,
                    "accessname": "Администратор",
                    "position": 220,
                    "place": 2
                },
                {
                    "id": 90,
                    "name": "bidbuch",
                    "label": "Роль бухгалтера",
                    "accessgroup": 4,
                    "accessname": "Бухгалтер",
                    "position": 230,
                    "place": 3
                }
            ]
        }
    ],
    "user": {
        "id": 46,
        "name" :'Игнат' ,
        "surname": 'Крудо',
        "patronymic": 'Мамонович',
        "occupy": "коммерческий директор",
        "passcard": null,
        "id_role": 2,
        "email": null,
        "sales_role": 2,
        "password2": "$2y$12$vwqewb1to3XkD3FUvSrgoeydtcmsswjQSp6DWvJfxZanevLwAq6BS",
        "active_company": 2,
        "id_departament": 11,
        "id_company" : 1,
    },
    "mode": 0,
    "duration": 0.0012869834899902344,
    "state": []
}


export const DS_DEFAULT_USER = {
    "companies": [],
    "user": {
        "id": null,
        "surname": null,
        "name": null,
        "secondname": null,
        "occupy": null,
        "passcard": null,
        "id_role": null,
        "email": null,
        "sales_role": 1,
        "password2": null,
        "active_company": null
    },
    "mode": null,
}


export const DS_SCHED_UNITS = [
    {
        key: 'unittype1',
        value: 1,
        label: 'День',
    },
    {
        key: 'unittype2',
        value: 2,
        label: 'Неделя'
    },
    {
        key: 'unittype3',
        value: 3,
        label: 'Месяц'
    },
    {
        key: 'unittype4',
        value: 4,
        label: 'Год'
    },
];



export const DS_YEARMONTHS_SELECT = [
    {
        key: 'yearmonth00',
        value: 0,
        label: 'Все месяцы'
    },
    {
        key: 'yearmonth01',
        value: 1,
        label: 'Январь'
    },
    {
        key: 'yearmonth02',
        value: 2,
        label: 'Февраль'
    },
    {
        key: 'yearmonth03',
        value: 3,
        label: 'Март'
    },
    {
        key: 'yearmonth04',
        value: 4,
        label: 'Апрель'
    },
    {
        key: 'yearmonth05',
        value: 5,
        label: 'Май'
    },
    {
        key: 'yearmonth06',
        value: 6,
        label: 'Июнь'
    },
    {
        key: 'yearmonth07',
        value: 7,
        label: 'Июль'
    },
    {
        key: 'yearmonth08',
        value: 8,
        label: 'Август'
    },
    {
        key: 'yearmonth09',
        value: 9,
        label: 'Сентябрь'
    },
    {
        key: 'yearmonth10',
        value: 10,
        label: 'Октябрь'
    },
    {
        key: 'yearmonth11',
        value: 11,
        label: 'Ноябрь'
    },
    {
        key: 'yearmonth12',
        value: 12,
        label: 'Декабрь'
    }
];


export const DS_COMPANIES =         [
    {key: 0,value: 0, label: 'Все компании'},
    {key: 1,value: 1, label: 'Arstel'},
    {key: 2,value: 2, label: 'Rondo'},
    {key: 3,value: 3, label: 'Maximus'}
];



export const DS_DEPARTMENTS = [
    {
        "id": 1,
        "name": "Администрация",
        "rang": 1,
        "visible": 1,
        "deleted": 0,
        "icon": null,
        "user_count": 37, 
        "id_company" : 1,
    },
    {
        "id": 2,
        "name": "Отдел персонала",
        "rang": 30,
        "visible": 1,
        "deleted": 0,
        "icon": null,
        "user_count": 27
    },
    {
        "id": 3,
        "name": "Бухгалтерия",
        "rang": 10,
        "visible": 1,
        "deleted": 0,
        "icon": null,
        "user_count": 18
    },
    {
        "id": 4,
        "name": "Техническая группа проектного отдела",
        "rang": 140,
        "visible": 1,
        "deleted": 0,
        "icon": null,
        "user_count": 3
    },
    {
        "id": 5,
        "name": "Отдел оптовых продаж",
        "rang": 50,
        "visible": 1,
        "deleted": 0,
        "icon": null,
        "user_count": 67
    },
    {
        "id": 6,
        "name": "Отдел рекламы",
        "rang": 70,
        "visible": 1,
        "deleted": 0,
        "icon": null,
        "user_count": 17
    },
    {
        "id": 7,
        "name": "Технический отдел трансляционного звука",
        "rang": 60,
        "visible": 1,
        "deleted": 0,
        "icon": null,
        "user_count": 25
    },
    {
        "id": 8,
        "name": "Проектный отдел",
        "rang": 100,
        "visible": 1,
        "deleted": 0,
        "icon": null,
        "user_count": 26
    },
    {
        "id": 9,
        "name": "Склад Санкт-Петербург",
        "rang": 120,
        "visible": 1,
        "deleted": 0,
        "icon": null,
        "user_count": 11
    },
    {
        "id": 11,
        "name": "Строительный отдел",
        "rang": 110,
        "visible": 1,
        "deleted": 0,
        "icon": null,
        "user_count": 14
    },
    {
        "id": 13,
        "name": "Дилерский отдел",
        "rang": 130,
        "visible": 1,
        "deleted": 0,
        "icon": null,
        "user_count": 1
    },
    {
        "id": 14,
        "name": "Отдел информационных технологий",
        "rang": 90,
        "visible": 1,
        "deleted": 0,
        "icon": null,
        "user_count": 24
    },
    {
        "id": 15,
        "name": "Отдел информации",
        "rang": 40,
        "visible": 1,
        "deleted": 0,
        "icon": null,
        "user_count": 22
    },
    {
        "id": 17,
        "name": "Пулково КПП",
        "rang": 150,
        "visible": 0,
        "deleted": 0,
        "icon": null,
        "user_count": 9
    },
    {
        "id": 18,
        "name": "Пулково 19",
        "rang": 170,
        "visible": 0,
        "deleted": 0,
        "icon": null,
        "user_count": 20
    },
    {
        "id": 19,
        "name": "Контрагенты",
        "rang": 180,
        "visible": 1,
        "deleted": 0,
        "icon": null,
        "user_count": 5
    },
    {
        "id": 20,
        "name": "Технический отдел профессионального звука",
        "rang": 80,
        "visible": 1,
        "deleted": 0,
        "icon": null,
        "user_count": 3
    },
    {
        "id": 21,
        "name": "Отдел Логистики",
        "rang": 20,
        "visible": 1,
        "deleted": 0,
        "icon": null,
        "user_count": 2
    }
];



export const DS_NOTICES = [
    {
        id: 341,
        user_id: 46,
        bo_type_notice_id: 1,
        type_name: "",
        type_color: "",
        content: "Hello wolf notification",
        mandatory: 1,
        is_read: 0,
        creator_id: null,
        created_at: "2025-03-14 02:00:43",
        updated_at: "",
    },
    {
        id: 134,
        user_id: null,
        bo_type_notice_id: 1,
        type_name: "",
        type_color: "",
        content: "Ooovaga goomanoids! Let me try to escape from the job center!",
        mandatory: 1,
        is_read: 0,
        creator_id: null,
        created_at: "2025-03-14 02:00:43",
        updated_at: "",
    },
    {
        id: 534,
        user_id: 46,
        bo_type_notice_id: 1,
        type_name: "",
        type_color: "",
        content: "Обновлен график отпусков",
        mandatory: 0,
        is_read: 0,
        creator_id: null,
        created_at: "2025-03-14 02:00:43",
        updated_at: "",
    },
    {
        id: 3241,
        user_id: 46,
        bo_type_notice_id: 1,
        type_name: "",
        type_color: "Больничный закрыт",
        content: "Ooovaga goomanoids! Let me try to escape from the job center!",
        mandatory: 1,
        is_read: 1,
        creator_id: 46,
        created_at: "2025-03-14 02:00:43",
        updated_at: "",
    },
    {
        id: 33241,
        user_id: 46,
        bo_type_notice_id: 1,
        type_name: "",
        type_color: "Больничный закрыт",
        content: "Ooovaga goomanoids! Let me try to escape from the job center!",
        mandatory: 1,
        is_read: 0,
        creator_id: 46,
        created_at: "2025-03-14 02:00:43",
        updated_at: "",
    },
    {
        id: 425,
        enabled_at: '2024-10-22',
        start_time: 45130,
        end_time: 49320
    },
    {
        id: 426,
        enabled_at: '2025-11-22',
        start_time: 45130,
        end_time: 66320
    }
];



export const DS_SKUD_GROUPS = [
    {
        id: 1,
        name: "Первая группа захвата пользователей",
        description: "Что-то здесь должно было быть написано, но не судьба, кажись...",
        company_name: "Arstel",
        company_color: "#ee7700",
        id_company: 1,
        linked_schedule: null,
        "linked_rules": [
            {
                "id": 5,
                "type" : 1,
                "name": "Fired by fire",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 4
            },
            {
                "id": 11,
                "type" : 2,
                "name": "Second rule type",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 0
            },
            {
                "id": 51,
                "type" : 3,
                "name": "Third rule type sat",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 4
            },
            {
                "id": 15,
                "type" : 4,
                "name": "Broken leg worse than broken dreams",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 2
            },
            {
                "id": 65,
                "type" : 5,
                "name": "If you wanna buy a house, just stop being beggar",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 43
            },
        ]
    },
    {
        id: 2,
        name: "Группа странных пингвинов",
        description: "Эти пингвины любят танцевать под дождем и собирать редкие камни.",
        id_company: 1,
        company_name: "Arstel",
        company_color: "#ee7700",
        linked_schedule: {
            "id": 5,
            "type": 1,
            "name": "Antoxa hey",
            "start": 452352345,
            "end": 23452345, //nullable
            "next_count": 4
        },
        "linked_rules": [
        ]
    },
    {
        id: 3,
        name: "Клуб любителей невидимых единорогов",
        description: "Мы собираемся каждую пятницу, чтобы обсуждать их последние приключения.",
        id_company: 1,
        company_name: "Arstel",
        company_color: "#ee7700",
        linked_schedule: {
            "id": 5,
            "type": 2,
            "name": "Grafir grafik simple simple",
            "start": 452352345,
            "end": 23452345, //nullable
            "next_count": 4
        },
        "linked_rules": [

            {
                "id": 51,
                "type" : 3,
                "name": "Third rule type sat",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 4
            },
            {
                "id": 15,
                "type" : 4,
                "name": "Broken leg worse than broken dreams",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 2
            },
            {
                "id": 65,
                "type" : 5,
                "name": "If you wanna buy a house, just stop being beggar",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 43
            },
        ]
    },
    {
        id: 4,
        name: "Ассоциация котов-экспертов по лазанью",
        description: "Наши коты знают все о лазанье и готовы делиться секретами приготовления.",
        id_company: 1,
        company_name: "Arstel",
        company_color: "#ee7700",
        linked_schedule: {
            "id": 5,
            "type": 5,
            "name": "Antoxa hey",
            "start": 452352345,
            "end": 23452345, //nullable
            "next_count": 4
        },
        "linked_rules": [
            {
                "id": 5,
                "type" : 1,
                "name": "Fired by fire",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 4
            },
            {
                "id": 11,
                "type" : 2,
                "name": "Second rule type",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 0
            },
            {
                "id": 51,
                "type" : 3,
                "name": "Third rule type sat",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 4
            },
            {
                "id": 15,
                "type" : 4,
                "name": "Broken leg worse than broken dreams",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 2
            },
            {
                "id": 65,
                "type" : 5,
                "name": "If you wanna buy a house, just stop being beggar",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 43
            },
        ]
    },
    {
        id: 71,
        name: "Общество любителей обосранных штанов",
        description: "Каждая пара штанов имеет свою историю. Мы собираем их продаем под видом дизайнерских.",
        id_company: 1,
        company_name: "Arstel",
        company_color: "#ee7700",
        linked_schedule: {
            "id": 5,
            "type": 4,
            "name": "Antoxa hey",
            "start": 452352345,
            "end": 23452345, //nullable
            "next_count": 4
        },
        "linked_rules": [
            {
                "id": 5,
                "type" : 1,
                "name": "Fired by fire",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 4
            },
            {
                "id": 11,
                "type" : 2,
                "name": "Second rule type",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 0
            },
            {
                "id": 51,
                "type" : 3,
                "name": "Third rule type sat",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 4
            },
            {
                "id": 15,
                "type" : 4,
                "name": "Broken leg worse than broken dreams",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 2
            },
            {
                "id": 65,
                "type" : 5,
                "name": "If you wanna buy a house, just stop being beggar",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 43
            },
        ]
    },
    {
        id: 5,
        name: "Команда по исследованию параллельных вселенных",
        description: "Мы изучаем альтернативные реальности, где все наоборот.",
        id_company: 2,
        company_name: "RONDO",
        company_color: "#44bb00",
        linked_schedule: {
            "id": 5,
            "type": 3,
            "name": "Antoxa hey",
            "start": 452352345,
            "end": 23452345, //nullable
            "next_count": 4
        },
        "linked_rules": [
            {
                "id": 5,
                "type" : 1,
                "name": "Fired by fire",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 4
            },
            {
                "id": 11,
                "type" : 2,
                "name": "Second rule type",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 0
            },
            {
                "id": 51,
                "type" : 3,
                "name": "Third rule type sat",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 4
            },
            {
                "id": 15,
                "type" : 4,
                "name": "Broken leg worse than broken dreams",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 2
            },
            {
                "id": 65,
                "type" : 5,
                "name": "If you wanna buy a house, just stop being beggar",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 43
            },
        ]
    },
    {
        id: 6,
        name: "Группа по защите прав летающих картошек",
        description: "Мы боремся за права картошки, которая хочет взлететь и увидеть мир.",
        id_company: 2,
        company_name: "Rondo",
        company_color: "#44bb00",
        linked_schedule: null,
        "linked_rules": [
        ]
    },
    {
        id: 7,
        name: "Общество любителей странных шляп",
        description: "Каждая шляпа имеет свою историю. Мы собираем их и рассказываем сказки.",
        id_company: 2,
        company_name: "RONDO",
        company_color: "#44bb00",
        linked_schedule: {
            "id": 5,
            "type": 1,
            "name": "Antoxa hey",
            "start": 452352345,
            "end": 23452345, //nullable
            "next_count": 4
        },
        "linked_rules": [
            {
                "id": 5,
                "type" : 1,
                "name": "Fired by fire",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 4
            },
            {
                "id": 11,
                "type" : 2,
                "name": "Second rule type",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 0
            },
            {
                "id": 51,
                "type" : 3,
                "name": "Third rule type sat",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 4
            },
            {
                "id": 15,
                "type" : 4,
                "name": "Broken leg worse than broken dreams",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 2
            },
            {
                "id": 65,
                "type" : 5,
                "name": "If you wanna buy a house, just stop being beggar",
                "start": 452352345,
                "end": 23452345, //nullable
                "next_count": 43
            },
        ]
    },
];

export const DS_GROUP_USERS = [
    {
        id: 1,
        name: 'Кетчуп',
        surname: 'Помидорчатый',
        patronymic: 'Со-специями',
        department: 1,
        id_company: 1,
        user_group_id: 0,
    },
    {
        id: 21,
        name: 'Кирилл',
        surname: 'Овечкин',
        patronymic: 'Степанович',
        department: 4,
        id_company: 1,
        user_group_id: 0,
    },
    {
        id: 2,
        name: 'Майонез',
        surname: 'Сливочный',
        patronymic: 'Супер-легкий',
        department: 1,
        id_company: 1,
        user_group_id: 0,
    },
    {
        id: 3,
        name: 'Гарнир',
        surname: 'Овощной',
        patronymic: 'Смешанный',
        department: 1,
        id_company: 1,
        user_group_id: 7,
    },
    {
        id: 4,
        name: 'Паста',
        surname: 'Макаронная',
        patronymic: 'Сосисочная',
        department: 1,
        id_company: 1,
        user_group_id: 7,
    },
    {
        id: 5,
        name: 'Томатный',
        surname: 'Соусик',
        patronymic: 'Легкий',
        department: 1,
        id_company: 1,
        user_group_id: 7,
    },
    {
        id: 6,
        name: 'Чесночный',
        surname: 'Волшебник',
        patronymic: 'Зеленый',
        department: 1,
        id_company: 1,
        user_group_id: 0,
    },
    {
        id: 7,
        name: 'Луковый',
        surname: 'Мечтатель',
        patronymic: 'Сладкий',
        department: 1,
        id_company: 1,
        user_group_id: 3,
    },
    {
        id: 8,
        name: 'Перечный',
        surname: 'Фантазер',
        patronymic: 'Острый',
        department: 1,
        id_company: 1,
        user_group_id: 3,
    },
    {
        id: 9,
        name: 'Сырный',
        surname: 'Гуру',
        patronymic: 'Деревенский',
        department: 1,
        id_company: 1,
        user_group_id: 1,
    },
    {
        id: 10,
        name: 'Шпинатный',
        surname: 'Зеленец',
        patronymic: 'Витаминный',
        department: 1,
        id_company: 1,
        user_group_id: 1,
    },
    {
        id: 11,
        name: 'Фруктовый',
        surname: 'Пирожок',
        patronymic: 'Сладкий',
        department: 1,
        id_company: 1,
        user_group_id: 7,
    },
    {
        id: 12,
        name: 'Карамельный',
        surname: 'Обманщик',
        patronymic: 'Липкий',
        department: 1,
        id_company: 1,
        user_group_id: 1,
    },
    {
         id :13, 
         name : "Пирожковый", 
         surname : "Тестоед", 
         patronymic : "Сдобный", 
         department : 1, 
         id_company : 1, 
         user_group_id :7 
     },
     {
         id :14, 
         name : "Ванильный", 
         surname : "Мороженчик", 
         patronymic : "Холодный", 
         department : 1, 
         id_company : 1, 
         user_group_id :0 
     },
     {
         id :15, 
         name : "Кокосовый", 
         surname : "Нежный", 
         patronymic : "Тропический", 
         department : 1, 
         id_company : 1, 
         user_group_id :0 
     },
     {
         id :16, 
         name : "Мятный", 
         surname : "Свежак", 
         patronymic : "Зеленый", 
         department : 1, 
         id_company : 1, 
         user_group_id :0 
     },
     {
         id :17, 
         name : "Шоколадный", 
         surname : "Какаоед", 
         patronymic : "Горький", 
         department : 1, 
         id_company : 1, 
         user_group_id :2 
     },
     {
         id :18, 
         name :"Лимонный",  
         surname :"Цитрусовый",  
         patronymic :"Кислый",  
         department :1,  
         id_company :1,  
         user_group_id :2  
     },
     {
          id :19,  
          name :"Ореховый",  
          surname :"Хрустик",  
          patronymic :"Мотоциклетный",  
          department :1,  
          id_company :1,  
          user_group_id :2  
      },
      {
          id :20,  
          name :"Ягодный",  
          surname :"Вкусняшка",  
          patronymic :"Сочный",  
          department :1,  
          id_company :1,  
          user_group_id :0  
      }
];

export const DS_SCHEDULE_ENTITIES = [
    {
        id: 1,
        type : 3,
        name: 'Jacob',
        surname: 'вафыва фывафывафы',
        patronymic: 'Со-специями',
        description: null,
        schedule_id : 0,
        id_company :1,  
        rule_links: [],
    },
    {
        id: 337,
        type : 2,
        name: 'Группа выходного дня',
        surname: null,
        patronymic: null,
        description: "Описание группы",
        schedule_id : 0,
        id_company :2, 
        rule_links: [],
    },
    {
        id: 2,
        type : 3,
        name: 'Борис авыафывафыфффффф ',
        surname: 'аааааааааааааааааа',
        patronymic: 'Владимирович',
        description: null,
        schedule_id : 0,
        id_company :1,
        rule_links: [],
    },
    {
        id: 436,
        type : 2,
        name: 'MASTER вв GROUP',
        surname: null,
        patronymic: null,
        description: "Описание группы",
        schedule_id : 0,
        id_company :1,
        rule_links: [{rule_id:5, type: 1}],
    },
    {
        id: 1451,
        type : 3,
        name: 'Jacob фывафыва ',
        surname: 'аааааааааыфыыыыыыыыыыы',
        patronymic: 'Со-специями',
        description: null,
        schedule_id : 0,
        id_company :1,
        rule_links: [],
    },
    {
        id: 332741,
        user_id: 46,
        bo_type_notice_id: 1,
        type_name: "",
        type_color: "Больничный закрыт",
        content: "Ooovaga goomanoids! Let me try to escape from the job center!",
        mandatory: 1,
        is_read: 0,
        creator_id: 46,
        created_at: "2025-03-14 02:00:43",
        updated_at: "",
    },
    {
        id: 3325741,
        user_id: 46,
        bo_type_notice_id: 1,
        type_name: "",
        type_color: "Больничный закрыт",
        content: "Ooovaga goomanoids! Let me try to escape from the job center!",
        mandatory: 1,
        is_read: 0,
        creator_id: 46,
        created_at: "2025-03-14 02:00:43",
        updated_at: "",
    },
    {
        id: 3322241,
        user_id: null,
        bo_type_notice_id: 1,
        type_name: "",
        type_color: "Больничный закрыт",
        content: "Ooovaga goomanoids! Let me try to escape from the job center!",
        mandatory: 1,
        is_read: 0,
        creator_id: 46,
        created_at: "2025-03-14 02:00:43",
        updated_at: "",
    },
    {
        id: 3325641,
        user_id: 46,
        bo_type_notice_id: 1,
        type_name: "",
        type_color: "Больничный закрыт",
        content: "Ooovaga goomanoids! Let me try to escape from the job center!",
        mandatory: 0,
        is_read: 0,
        creator_id: 46,
        created_at: "2025-03-14 02:00:43",
        updated_at: "",
    },
    {
        id: 334241,
        user_id: 46,
        bo_type_notice_id: 1,
        type_name: "",
        type_color: "Больничный закрыт",
        content: "Ooovaga goomanoids! Let me try to escape from the job center!",
        mandatory: 0,
        is_read: 0,
        creator_id: 46,
        created_at: "2025-03-14 02:00:43",
        updated_at: "",
    },
]