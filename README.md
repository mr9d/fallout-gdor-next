# Fallout: Gravedigger's Original Research

## About

This is an open-source remake of the Fallout game series [fansite from 2007-2008](https://falloutgdor.ru/). The site included original articles about the plot of the original series's first games, such as Fallout, Fallout 2, Fallout Tactics, and Project Van Buren (unreleased Fallout 3 from Black Isle Studios). Most of the articles from 2007 were written by me, but later in 2008-2009 a lot of people from the Fallout fan community were sending their articles for the site as well.

Soon after the release of Fallout 3 by Bethesda Softworks in October 2008 a lot of new people came into the Fallout fan community. In addition, the dominance of social networks on the internet killed the old gaming fan-site vibe. That's why I lost interest in my site and switched to other projects.

In 2022 I’ve decided to remake the site as a learning project. The main challenge was to make a modern mobile-friendly design and a modern HTML5 layout. Another goal was to rewrite the site from PHP+jQuery to ES6+React/Next.js. Last but not least is to bring a website source code to the public domain and receive corrections and updates from the community.

## Current status

This is still a **Work In Progress**. The project is not the highest priority for me, that’s why I work on it only occasionally.

If you want to contribute, please contact me by:

- Email: <themrgd@gmail.com>
- Telegram: [@themrgd](https://t.me/themrgd)
- VK: [gravedigger](https://vk.com/gravedigger)

## Live version

Available at <https://new.falloutgdor.ru/> (deployed from the **main** branch)

## Running locally

### With Next.js dev server

If you don’t want to use the live version, you can run a local instance by cloning the repo and running:

```
yarn
yarn dev
```

After the successful execution the local instance should be available at <http://localhost:3000>

### With Docker

As an option, you can run the site with Docker. Make sure you [have it installed](https://docs.docker.com/get-docker/) on your computer and build the image by running:

```
docker build -t fallout-gdor-docker .
```

After the build run the image:

```
docker run -p 3000:3000 fallout-gdor-docker
```

The site should be available at <http://localhost:3000> after this.

## Used technologies

- TypeScript 4.5 ([documentation](https://www.typescriptlang.org/docs/))
- React 17 ([documentation](https://reactjs.org/docs/getting-started.html))
- Next.js 12.3 ([documentation](https://nextjs.org/docs), [learn](https://nextjs.org/learn))
- GitHub Actions ([documentation](https://docs.github.com/en/actions))
- Nginx 1.22 ([documentation](http://nginx.org/en/docs/))
- PM2 ([documentation](https://pm2.keymetrics.io/docs/usage/quick-start/))
- Docker ([documentation](https://docs.docker.com/))
