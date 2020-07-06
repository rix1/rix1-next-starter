# Rix1's Next.js starter 👨‍🍳

> This is Rix1s NextJS starter. I have sort of done _[mise en place](https://en.wikipedia.org/wiki/Mise_en_place)_ so that I can just start cooking PoCs without setting up anything.

The kitchen has the following prepared for you

- NextJS
- Tachyons (from CDN) and styled-jsx for styling
- Flow
- Jest
- ESLint
- Prettier
- Common components

## Installing / Getting started

```shell
yarn install
yarn start
```

This runs the server in production.

## Developing

### Built With

This project uses [Next.js](nextjs.org) which makes it easy to create React apps with zero config. Styling is done with [Tachyons](http://tachyons.io/), and custom stuff is achieved with [styled-jsx](https://github.com/vercel/styled-jsx).

### Prerequisites

A fresh Node version (I think 7 is the minimum requirement).

### Setting up Dev

To start developing, first clone the repo

```shell
git clone https://github.com/rix1/rix1-next-starter.git
cd rix1-next-starter/
yarn install
```

That's it! To fire up a local dev server, do:

```shell
yarn dev
```

See additional scripts in `package.json`.

### Building

To build a production ready application, do:

```shell
yarn build
```

Nextjs is set up with Webpack(?) and Babel, and takes care of bundeling everyhing for us.

### Deploying / Publishing

_TODO..._

<!-- give instructions on how to build and release a new version
In case there's some step you have to take that publishes this project to a
server, this is the right time to state it.

```shell
packagemanager deploy your-project -s server.com -u username -p password
```

And again you'd need to tell what the previous code actually does. -->

## Configuration

<!-- Here you should write what are all of the configurations a user can enter when
using the project. -->

_TODO_

## Tests

I'm thinking about using Jest, but I guess I'll with installing this until I need it.

## Style guide

Using Prettier for formatting, Eslint for linting and Flowtype for static type checking.

## Licensing

Not yet decided, so for now it's free for anyone to do whatever 🙃
