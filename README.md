in project folder
touch .gitignore .eslintrc.json .prettierrc

npm init

npm i -D prettier

in package.json "format": "prettier --write \"src/\*_/_.{js,jsx,html}\"", in scripts
download Prettier VS Code extension:
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

npm install -D eslint eslint-config-prettier

Create this file called .eslintrc.json in root project folder

put there:
{
"extends": ["eslint:recommended", "prettier", "prettier/react"],
"plugins": [],
"parserOptions": {
"ecmaVersion": 2016,
"sourceType": "module",
"ecmaFeatures": {
"jsx": true
}
},
"env": {
"es6": true,
"browser": true,
"node": true
}
}

add in package.json>scripts: "lint": "eslint \"\*_/_.{js,jsx}\" --quiet",

npm run lint to show errors in console npm run lint -- --fix (to fix)

download eslint VS Code extension:
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

create a .gitignore at the root of project, put there:
node_modules
.cache/
dist/
.env
.DS_Store
coverage/
.vscode/

I will use parcel as bundler (alternative Webpack)
npm install -D parcel-bundler

now in package.json add to "scripts": "dev": "parcel src/index.html",

install React and ReactDOM with:
npm i react react-dom

ESLint + React
npm install -D babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react

Update your .eslintrc.json to:
{
"extends": [
"eslint:recommended",
"plugin:import/errors",
"plugin:react/recommended",
"plugin:jsx-a11y/recommended",
"prettier",
"prettier/react"
],
"rules": {
"react/prop-types": 0
},
"plugins": ["react", "import", "jsx-a11y"],
"parserOptions": {
"ecmaVersion": 2018,
"sourceType": "module",
"ecmaFeatures": {
"jsx": true
}
},
"env": {
"es6": true,
"browser": true,
"node": true
},
"settings": {
"react": {
"version": "detect"
}
}
}

Then ready to go run in console: npm run dev
go to http://localhost:1234 or click link in console with cmd to open in favourite browser

//
alternatywnie .gitignore

/node_modules

/.pnp

.pnp.js

/coverage

/build
dist/
.cache/

.DS_Store
.vscode/
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log\*
