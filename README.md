# TG Stars Frontend

Frontend часть приложения TG Stars

---

#### Стек

- TypeScript
- React 18.3.1
- @tma.js/sdk-react 2.2.8
- @splinetool/react-spline 4.0.0
- formik 2.4.6
- framer-motion 11.3.22

## Структура

```
|-- public           - статические файлы
|-- src
|  |-- assets
|  |  |-- audio      - статические файлы с аудио
|  |  |-- fonts      - статические файлы со шрифтами
|  |  |-- icons      - статические файлы с иконками
|  |  |-- imgs       - статические файлы с изображениями
|  |-- components    - компоненты и виджеты
|  |-- hooks         - универсальные хуки
|  |-- context       - провайдеры контекста
|  |-- utils         - хелпер функции
```

---

## Сборка

Рекомендуемая версия Node.js – v22.2.0

Рекомендуемая версия npm – 10.7.0

1. Создать `.env` файл в соответствии с `.env.example`
2. `$ npm run build`

#### Запуск в dev режиме

1. Создать `.env` файл в соответствии с `.env.example`
2. `$ npm run dev`
3. Запуск приложения по адресу http://localhost:5173/

#### Запуск в production режиме

1. Создать `.env` файл в соответствии с `.env.example`
2. `$ npm run build`
3. В качестве точи входа production сборки используется dist/index.html

#### Запуск через Docker

1. `$ docker-compose build`
2. `$ docker-compose up -d`

---

## Конфигурация

Производится посредством переменных окружения. Список ключей указан в файле `/.env.example`.

Для dev и prod создаются соответствующие файлы `.env`

Примечание: dotenv файла

```
VITE_PORT=3000
```
