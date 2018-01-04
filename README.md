# pc+移动端适配模板（nodejs+gulp+git+scss）




## 安装nodejs

- http://nodejs.cn/download/


## 1. start

```
$ git clone https://github.com/zzlw/webpack-dev-super
$ cd webpack-dev-super
$ npm install
```
## 2. dev
### 2.1 开发调试
```
//首先运行dll预打包
$ npm run start:pre
//打包完成，启动项目
$ npm start
```

查看效果` http://127.0.0.1:9090`

### 2.2 代码检查
```
$ npm run lint
```

### 2.3 测试用例
```
$ npm run test:watch
```

### 2.4 产出资源
```
$ npm run build
```

## 3. 技术栈

- [x] [Webpack](https://webpack.github.io)
- [x] [React](https://facebook.github.io/react/)
- [x] [ES6](http://es6.ruanyifeng.com/)
- [x] [Redux](https://github.com/rackt/redux)
- [x] [React-router](https://github.com/rackt/react-router-redux)
- [x] [Babel](https://babeljs.io/)
- [ ] [immutable](https://www.npmjs.com/package/immutable)
- [ ] [redux-immutable](https://www.npmjs.com/package/immutable)
- [ ] [react-immutable-proptypes](https://www.npmjs.com/package/immutable)
- [ ] [react-router-redux](https://www.npmjs.com/package/immutable)
- [ ] [Autoprefixer](https://github.com/postcss/autoprefixer)
- [ ] [PostCSS](https://github.com/postcss/postcss)
- [x] [CSS modules](https://github.com/outpunk/postcss-modules)
- [x] [Less](https://github.com/less/less.js)
- [x] [Sass](https://github.com/sass/node-sass)
- [x] [Eslint](https://github.com/eslint/eslint)

