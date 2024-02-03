# SaleTaxesFe
### It is a nx multi project workspace

## Start the app

It needs some new version of node.js and npm installed on the machine.
To start the development server run from workspace root: `nx serve sale-taxes-user-fe`. Open your browser and navigate to http://localhost:4200/.

## Run the built app

Build the app with `nx build sale-taxes-user-fe` or use the existing build in `dist\apps\sale-taxes-user-fe\browser` folder.
I uploaded the build with this folder to make it easier to use.
Install some server for example this one with: `npm install -g angular-http-server`
Run the build on port 4200: `angular-http-server -p 4200` this way it can communicate with the back-end app on the same machine.

## To generate api install:
`openapi-generator-cli`

## Run e2e tests for sale-taxes-user-fe app:
`nx run sale-taxes-user-fe-e2e:e2e-open `
