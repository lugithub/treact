https://egghead.io/courses/build-your-first-production-quality-react-app?utm_source=drip&utm_medium=email&utm_campaign=production-quality-react

npm install create-react-app

./node_modules/.bin/create-react-app ./app

install chrome extension: react developer tools


how is 'npm start' done?
  webpack-dev-server is a little Node.js Express server, which uses the webpack-dev-middleware to serve a webpack bundle. It also has a little runtime which is connected to the server via Sock.js.

how is import logo from './logo.svg' done?
  webpack
    http://stackoverflow.com/questions/32612912/dynamically-add-images-react-webpack

how is import './App.css' done?
  webpack
    dev: it's in file
    production: it's in a separate minified css file

where is http://localhost:3000/static/js/bundle.js?
    a virtual path created. i cannot find the physical file
      C:\lc\treact\app\node_modules\react-scripts\config\webpack.config.dev.js

how is watch compile done?

how is live load done?
  C:\lc\treact\app\node_modules\react-scripts\scripts\start.js
    hot: true, //set false but it still live load
    https://github.com/sockjs/sockjs-node
    not https://github.com/socketio/socket.io

how is webpack source map done?

how is jsx error sent to browser?
  Probably sockjs-node

what is the test framework?
  jest

how is test done?

change default port:
  in window git shell (a power shell), $env:PORT = "3001"; npm start
    http://superuser.com/questions/612409/how-do-i-run-multiple-commands-on-one-line-in-powershell

to see an example of eslint error
add
  const f = function() {}
    var x = new f();
    to src/index.js
    then watch the console output from npm start
eslint rules: C:\lc\treact\app\node_modules\eslint-config-react-app\index.js

spread properties
  https://github.com/sebmarkbage/ecmascript-rest-spread

yarn(0.21.3) install vs npm(3.10.10) install
  in app foler, yarn install took 1 minute 57 seconds
  npm install took 2 minutes 5 seconds

add routing to react apps using react router v4
https://egghead.io/courses/add-routing-to-react-apps-using-react-router-v4?utm_source=drip&utm_medium=email&utm_content=react-router-v4  

atom-react plugin
https://orktes.github.io/atom-react/
