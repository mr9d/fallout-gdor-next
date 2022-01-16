# Fallout: Gravedigger's Original Research - теперь с открытым исходным кодом!

[Fallout GDOR](https://falloutgdor.ru/) - фансайт по компьютерным играм серии Fallout, на котором с 2007 по 2009 публиковались фанатский статьи и исследования, посвященные классическим играм серии, таким как первая часть Fallout, Fallout 2 и Fallout Tactics. Основные статьи выходили за моим авторством, но было и большое количество единомышленников их сообщества, которые присылали свои материалы.

В 2022 году в целях сохранения истории и в учебных целях я полностью переписал сайт в техническом плане, сохраненив весь оригинальный материал. Поскольку исходный код сайта открыт, добавления и исправления принимаются в порядке [пул реквестов](https://git-scm.com/book/ru/v2/GitHub-%D0%92%D0%BD%D0%B5%D1%81%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D0%BE%D0%B1%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B2%D0%BA%D0%BB%D0%B0%D0%B4%D0%B0-%D0%B2-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B).

## Запуск локальной версии

После создания локальной копии репозитория (`git clone`) выполните:

```bash
npm run dev
# или
yarn dev
```

После успешного выполнения, откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Запуск через Docker

[Установите Docker](https://docs.docker.com/get-docker/) на свой компьютер.

Соберите контейнер:

```
docker build -t fallout-gdor-docker .
```

Запустите контейнер:

```
docker run -p 3000:3000 fallout-gdor-docker
```

Созданный образ должен быть виден через `docker images`

## Технологии

- [Документация по TypeScript](https://www.typescriptlang.org/docs/)
- [Документация по React](https://reactjs.org/docs/getting-started.html)
- [Документация по Next.js](https://nextjs.org/docs)
- [Изучение Next.js](https://nextjs.org/learn)
