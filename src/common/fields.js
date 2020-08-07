export default {
    lastName: {
        id: 0,
        name: "last-name",
        title: "Фамилия*:",
        placeholder: "Фамилия",
        type: "text"
    },
    firstName: {
        id: 1,
        name: "first-name",
        title: "Имя*:",
        placeholder: "Имя",
        type: "text"
    },
    middleName: {
        id: 2,
        name: "last-name",
        title: "Отчество:",
        placeholder: "Отчество",
        type: "text"
    },
    birthDate: {
        id: 3,
        name: "birth-date",
        title: "Дата рождения*:",
        type: "date"
    },
    phoneNumber: {
        id: 4,
        name: "phone-number",
        title: "Номер телефона*:",
        placeholder: "79994562134",
        type: "text"
    },
    gender: {
        id: 5,
        name: "gender",
        title: "Пол:",
        type: "select",
        multiple: false,
        options: {
            male: "Мужчина",
            female: "Женщина"
        }
    },
    clientGroup: {
        id: 6,
        name: "client-group",
        title: "Группа клиентов*:",
        type: "select",
        multiple: true,
        options: {
            VIP: "VIP",
            handicapped: "Проблемные",
            OMS: "ОМС"
        }
    },
    physician: {
        id: 7,
        name: "physician",
        title: "Лечащий врач:",
        type: "select",
        multiple: false,
        options: {
            Ivanov: "Иванов",
            Zaharov: "Захаров",
            Chernisheva: "Чернышева"
        }
    },
    pushSms: {
        id: 8,
        name: "push-sms",
        title: "Не отправлять sms",
        type: "checkbox"
    },
    adress: {
        id: 9,
        title: "Адреc:",
        type: "group",
        fields: {
            mailIndex: {
                id: 0,
                name: "mail-index",
                title: "Индекс",
                placeholder: "Индекс",
                type: "text"
            },
            country: {
                id: 1,
                name: "country",
                title: "Страна:",
                placeholder: "Страна",
                type: "text"
            },
            region: {
                id: 2,
                name: "region",
                title: "Область:",
                placeholder: "Область",
                type: "text"
            },
            city: {
                id: 3,
                name: "city",
                title: "Город*:",
                placeholder: "Город*",
                type: "text"
            },
            street: {
                id: 4,
                name: "street",
                title: "Улица:",
                placeholder: "Улица",
                type: "text"
            },
            houseNumber: {
                id: 5,
                name: "house-number",
                title: "Дом:",
                placeholder: "Дом",
                type: "text"
            }
        }
    },
    documetn: {
        id: 10,
        title: "Документ:",
        type: "group",
        fields: {
            documentType: {
                id: 0,
                name: "document-type",
                title: "Тип документа*:",
                placeholder: "Тип документа*",
                type: "select",
                options: {
                    passport: "Пасспорт",
                    birthSertificate: "Свидетельство о рождении",
                    driverLicense: "Водительское удостоверение"
                }
            },
            siries: {
                id: 1,
                name: "siries",
                title: "Серия:",
                placeholder: "Серия",
                type: "text"
            },
            number: {
                id: 2,
                name: "number",
                title: "Номер:",
                placeholder: "Номер",
                type: "text"
            },
            issued: {
                id: 3,
                name: "issued",
                title: "Кем выдан*:",
                placeholder: "Кем выдан*",
                type: "text"
            },
            dateIssue: {
                id: 4,
                name: "date-issue",
                title: "Дата выдачи:",
                placeholder: "Дата выдачи",
                type: "date"
            }
        }
    }
}