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

how is watch compile done?

how is live load done?

how is webpack source map done?

how is jsx error sent to browser?

what is the test framework?

how is test done?

change default port:
  in window git shell (a power shell), $env:PORT = "3001"; npm start
    http://superuser.com/questions/612409/how-do-i-run-multiple-commands-on-one-line-in-powershell
