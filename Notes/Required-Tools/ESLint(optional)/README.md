# ESLint

[ESLint](http://eslint.org/) is an open source project originally created by Nicholas C. Zakas in June 2013. Its goal is to provide a pluggable linting utility for JavaScript.  Adding it to all your projects and setting up a linter plugin in your code editor may help you write more maintainable code.

## Installation

* Install the Atom [Linter plugin](https://atom.io/packages/linter)

* Install the Atom [ES-Lint Plugin](https://github.com/AtomLinter/linter-eslint)

* In your project(s) add the dependencies by updating your `package.json` file(s).

```
"devDependencies": {
    "babel-eslint": "^7.1.1",
    "eslint": "^3.15.0",
    "eslint-config-airbnb": "^14.1.0",
    "eslint-plugin-import": "^2.2.0",
    "eslint-plugin-jsx-a11y": "^2.2.3",
    "eslint-plugin-react": "^6.9.0"
}
```

* Install the dependencies:

```
npm install
```

* In each of your project folders create a `.eslintrc` file.  I recommended that you follow the AirBnB style guide when developing apps using ES5 Javascript add the following:

```
{
  "extends": "airbnb/legacy",
  "rules": {
    "no-plusplus": 0
  }
}
```
