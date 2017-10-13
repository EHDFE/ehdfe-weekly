# 货嘀前端周刊

搜集团队每周开发过程中遇到的有趣的技术问题，专注而不局限于前端。
   
货嘀周刊的主页：[https://ehdfe.github.io/ehdfe-weekly/](https://ehdfe.github.io/ehdfe-weekly/)

### 周报书写规范

1，周报文档名遵循 数字.周报题目(YYYY.M.D-YYYY.M.D.md 的格式。 比如`4.百度无人车上路(2017-7-10-2017-7-14).md`，注意 `.`  `()`都是英文字符。
数字一方面百名周报期数，另一方面则是文档排序的重要依据。

2，周报题目应与周报名称相同,或稍有变化。 在题目下面注明本期整理人员，或其他相关信息，比如

> - 本期期数:一     
> - 本期整理:[@JeffWong16](https://github.com/JeffWong16)
> - 周报时间:2017/6/19~2017/6/23 


### 站点更新流程

1，下载项目项目到本地
```
git clone git@github.com:EHDFE/ehdfe-weekly.git
```

2，获取最新周报列表（如无新添周报文档，可跳过本步）
```
npm run fetch
```

3,打包更新好的周报文档。
```
npm run build
```

4，上传项目。
