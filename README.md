# web cosmos react-app

This file includes the global command for [React App]<br>
Please refer to the documentation:

- No configuration or complicated folder structures, only the files you need to build your app.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you will find out one .env file which contains alredy set entries like :

```sh
NODE_SERVER_PORT=3000
ENVIRONMENT=localhost
BASE_PATH=
```
Here NODE_SERVER_PORT is the port on which your node server will run.
ENVIRONMENT will be used by webpack to check if dev or prod mode build is demanded.
BASE_PATH is the public base path of all the static assets being served.


You can run some built-in commands:

### `npm start`

Runs the app in development mode.<br>
Open [http://localhost:8082](http://localhost:8082) to view it in the browser.
By default 8082 port is being used. If you want to change, then you can do it in the file 
 `config/webpack/development/webpack.dev.client.js`
The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

### `npm run build-prod`

Build the app in production mode. A new dist folder will be created with all the required files.<br>

### `npm run serve:server`

Runs the app in production mode from dist folder<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
By default 3000 port is being used. If you want to change, then you can do it in the .env file 

### `npm run test`

This command will the look out for all the unit test cases written.

### `npm run test-report`

The command to find out the coverage of unit test cases in your newly created codebase.

### `npm run lint`

The command to identify all the eslint errors in your codebase.