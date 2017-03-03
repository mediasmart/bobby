# <a href='https://github.com/mediasmart/bobby'><img src='https://dl.dropboxusercontent.com/u/420149/bobby.js.png?dl=0' height='128'></a>

A declarative way of validating complex javascript nested objects.

[![npm version](https://img.shields.io/npm/v/bobby.js.svg?style=flat-square)](https://www.npmjs.com/package/bobby.js) [![Build Status](http://img.shields.io/travis/mediasmart/bobby/master.svg?style=flat-square)](https://travis-ci.org/mediasmart/bobby) [![NPM Status](http://img.shields.io/npm/dm/bobby.js.svg?style=flat-square)](https://www.npmjs.org/package/bobby.js) [![devDependency Status](https://img.shields.io/david/mediasmart/bobby.svg?style=flat-square)](https://david-dm.org/mediasmart/bobby#info=dependencies) [![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/soyjavi)
[![npm](https://img.shields.io/npm/l/botkit.svg?style=flat-square)](https://spdx.org/licenses/MIT)

There are already many validation libraries out there today but most of them are very tightly coupled to a language or framework. The goal of bobby.js is to provide a cross framework and cross language way of validating data. The validation constraints can be declared in JSON and shared between clients and the server.

Bobby.js works with any ECMAScript 5.1 runtime which means it works in both the browser and in node.js All modern browsers are supported (IE9+, Firefox 3+, Opera 10.5+, Safari 4+, Chrome).

This is an Open Source project, so any help will be welcomed.

## Installation
#### Using npm
`$ npm install bobby.js --save`
and then, require it
```javascript
import bobby from 'bobby.js';
```

#### Directly use Booby.js

```javascript
<script type='text/javascript' src='bobby.js'><script>
```

Now you can use `bobby` as an simple method.

## Usage

In its simplest essence, Bobby.js can be used as

```javascript
const errors = bobby(obj, schema);
```

The above function takes two arguments, the `Schema` of the object you want to validate and the `Object` itself. For example lets consider an object

```javascript
const Obj = {
  name: 'javi',
  year: 1980,
  languages: ['basque', 'spanish', 'english', 'thai'],
  networks: {
    twitter: 'soyjavi',
  },
};
```

And the schema for the above object is

```javascript
const Schema = {
  name: {
    contains: 'av',
    exists: true,
    type: String,
    length: 4,
    value: 'javi'
  },
  languages: {
    type: Array,
    length: 4,
    contains: ['spanish', 'english']
  },
  year: {
    type: Number,
    exists: true,
    value: 1980
  },
  'networks.twitter': {
    exists: true,
    contains: 'javi'
  },
};
```

Now Bobby.js function will take these two arguments and will return the
following output:

```javascript
const errors = [];
```

As you can see the resultant array is empty 'cause the object passes all the rules of the schema. Now we will try with a different schema:

```javascript
const Schema = {
  name: { value: 'com' },
  year: { value: 1981 },
};
```

Now the return is pretty different:

```javascript
const errors = [
  { field: 'name', rule: 'value', expected: 'com', value: 'javi' },
  { field: 'year', rule: 'value', expected: 1981, value: 1980 },
];
```

As you can see we get and array with 2 items, gives you capability to drill down to any level to know whether that property is true or false.
@todo

## Rules
@todo

#### contains
@todo

#### custom
@todo

#### exists
@todo

#### length
@todo

#### pattern
@todo

#### type
@todo

#### value
@todo


## License

Copyright (c) 2016 Javier Jimenez Villar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
