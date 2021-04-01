小程序测试号信息
AppID wxe5be7ea35be51ff7
AppSecret 1604ee4ee80201402b8230bfe880620a

## 目录结构

```
├── components (公共组件目录)
│   ├── @anima (动画组件)
│   ├── @common (基础组件/common/...)
│   ├── @actions (业务组件/home/...)
│   └── ...
├── images（公共图片）
│   └── icon
│      ├── icon@download.png
│      └── icon@cancel.png
├── pages（主包目录）
│   └── home (app.json 设置的入口页)
│       ├── home.wxml
│       ├── home.js
│       ├── home.json
│       └── home.wxss
│   └── parentPage (app.json 设置的入口页)
│       └──subpage
│       │      ├── subpage.wxml
│       │      ├── subpage.js
│       │      ├── subpage.json
│       │      └── subpage.wxss
│       ├── parentPage.wxml
│       ├── parentPage.js
│       ├── parentPage.json
│       └── parentPage.wxss
├── style（公用样式目录）
├── subpackages（分包目录）
│   │── news
|   └── store
├── utils（公共模块，工具类）
│   ├── config.js（项目配置）
│   └── local.config.js (本地配置，git忽略)
├── .editorconfig
├── .gitignore
├── app.js
├── app.json
├── app.wxss
├── project.config.json
└── README.md

```

## 命名规则

参考：(https://github.com/kettanaito/naming-cheatsheet/blob/master/README.md)

## 状态管理

wxMiniStore 参考： (https://github.com/xiaoyao96/wxMiniStore)

## API Promise 化

扩展微信小程序 api 支持 promise
参考: (https://developers.weixin.qq.com/miniprogram/dev/extended/utils/api-promise.html)
参考: (https://www.yuque.com/bigweb/xd1sgc/us1iqi)

## CSS 命名规则

- main-text--cloor
