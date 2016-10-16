# youths2
web project templete

##fetures
- es6
- javascript templete engine(swig)
- sass
- dev,production environment support

##how to use
- npm i 
- gulp （use for development model）
- gulp build (use for production model)
- gulp server (only serve from dist folder)
- npm run deploy (deploy on server)

##structure
```
├── config/                     // web project config
│   ├── webpack.config.base.js  // webpack base config
│   ├── webpack.config.dev.js   // webpack developement config
│   ├── webpack.config.prod.js  // webpack production config
│   └── index.js                // web project index config
├── app/                        // bussiness code
│   ├── js/                     // js file
│   │   ├── components/          // js public components(not compile to dist floder)
│   │   └── modules            // js modules (will be compile to dist floder)
│   ├── scss/                   // scss file
│   ├── img/                    // img file
│   └── views                   // views file
│		├── components/         // views public components(not compile to dist floder)
│       └── modules             // views modules (will be compile to dist floder)
├── deploy.js                   // deploy on server
├── gulpfile.babel.js           // webfrontend build tool
├── CHANGELOG.md                // changed log
└── README.md                   // 
```