# API Mock 使用说明

## 启动服务器

启动服务器之前，需要先生成数据。执行命令 `npm run generate` 生成假数据，接着执行 `npm start` 启动服务器。

## 数据 mock

在 `generate.js` 文件里设置所需要的数据。每次新的 mock 需要改动的部分仅为 `rawData`

## 路由设置

在生成数据后，`json-server` 会根据 `db.json` 里面的数据结构和层级自动生成路由。如果需要定制化路由，可在 `routes.json` 文件设置。

## 受保护路由

需要登录才能访问的路由，可以在 `server.js` 里进行设置。设置方法和常规 Express 路由设置方法一致。已提供中间件 requireLogin。模拟登陆访问可以在请求头里加入 `x-auth: "randomString"`。

## 其它说明

1. 服务器模拟了 20% 可能性出现 500 错误。
2. modifiedRes 中间件修改了返回的数据，目的是在返回数据之外新增返回信息。