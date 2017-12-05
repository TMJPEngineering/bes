# bes.js

*A friendly MVC Framework for Node.js*

[![Build Status](https://travis-ci.org/TMJPEngineering/bes.svg?branch=master)](https://travis-ci.org/TMJPEngineering/bes)
[![CircleCI](https://circleci.com/gh/TMJPEngineering/bes/tree/master.svg?style=svg)](https://circleci.com/gh/TMJPEngineering/bes/tree/master)

This framework uses ECMAScript 6 (ES6). See the [ES6 standard](http://www.ecma-international.org/ecma-262/6.0/) for full specification of the ECMAScript 6 language.

## Getting Started

To install the framework, run this command and you're good to go.

```
npm run setup
```

## Features

- Modular Structure
- Passport
- ES6 (ECMAScript 6)
- Ready-made commands
  - **npm test or karma start** (For Testing)
  - **npm start or babel-node server** (Run framework using Babel)
  - **npm run nodemon** (Note: Please install nodemon "npm install -g nodemon" to watch all the files)
  - **npm run setup** (Install framework)
  - **npm run dev** (Run webpack in development mode)
  - **npm run prod** (Run webpack in production mode)
  - **npm run watch** (Watch all files)
- Bootstrap 4 (Beta)
- MVC Architecture
- TDD (Using **karma** and **jasmine**)
- CI (Using **CircleCI** or **Travis**)
- Helpers (e.g. env, logger, etc.)
- Database Seeder
- Socket.io

## Usage

### Route Methods

**GET Method**

```js
Route.get('<uri>', '<controller>@<method>|<closure>', [<middlewares>]);
```

**POST Method**

```js
Route.post('<uri>', '<controller>@<method>|<closure>', [<middlewares>]);
```

**UPDATE Method**

```js
Route.update('<uri>', '<controller>@<method>|<closure>', [<middlewares>]);
```

**DELETE Method**

```js
Route.delete('<uri>', '<controller>@<method>|<closure>', [<middlewares>]);
```

**RESOURCE Method**

```js
Route.resource('<uri>', '<controller>', [<middlewares>], {only|except});
```

**VIEW Method**

It loads a html file.

```js
Route.view('<uri>', '<file>');
```

**ALL Method**

This method is used for loading middleware functions at a path for all request methods.

```js
Route.all('<uri>', '<closure>');
```

In `resource` method, it provides `get`, `post`, `update`, and `delete` method. These are the following methods in controller that uses `resource` method:

- `index` for **GET** Method
- `create` for **GET** Method
- `store` for **POST** Method
- `show` for **GET** Method
- `edit` for **GET** Method
- `update` for **UPDATE** Method
- `destroy` for **DELETE** Method

You can also limit by using `only` or `except`. See example below:

**Example #1**

```js
export default () => {
    namespace('Blog'); // or
    namespace(tmj.config.namespace.blog); // It must have a value inside helper (located in /lib/helpers.js)
    ...
    Route.resource('/user', 'UserController', ['client'], {
        only: ['index', 'show']
    });
    ...
};
```

**Example #2**

```js
export default () => {
    namespace('Blog'); // or
    namespace(tmj.config.namespace.blog); // It must have a value inside helper (located in /lib/helpers.js)
    ...
    Route.resource('/api/blog', 'UserController', ['oauth'], {
        except: ['create', 'edit']
    });
    ...
};
```

**Example #3**

```js
export default () => {
    namespace('Home'); // or
    namespace(tmj.config.namespace.home); // It must have a value inside helper (located in /lib/helpers.js)
    ...
    Route.view('/home', 'pages.home');
    // It says that route will load the html file in /resources/views/pages/home.html
    ...
};
```

**Note: Every routes file must have a namespace inside the function. Always put it in the first line.**

### Route Groups

```js
Route.group({ prefix: 'lorem', middleware: ['foo', 'bar'] }, () => {
   ...
   // Insert route methods here
   ...
});
```

## TODO

- Nested Route Groups
- `bes` command line interface (cli)

## Credits

- [Mean Stack Framework](https://github.com/TMJPEngineering/mean-stack-framework)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/TMJPEngineering/bes/blob/master/LICENSE) file for details
