# 远图后台项目统一文档测试版


## 预设脚本

### 环境准备

Install `node_modules`:

```bash
npm install
```

or

```bash
yarn
```

### 开始项目

```bash
npm start
```

### 编译项目

```bash
npm run build
```

### 检查代码风格

```bash
npm run lint
```

You can also use script to auto fix some lint error:

```bash
npm run lint:fix
```





## 流水线部署流程



1. 新建分支,分支名为daily/数字.数字.数字 (E.G. daily/1.0.0)

2. 推送到远程仓库 找到example流水线,点击复制 找到复制后的流水线,进入并修改名称为项目名,修改仓库地址为当前项目地址,修改分支为当前分支,把release文件指向当前仓库根目录下

3. 执行流水线,完成后访问 http://uat.yuantutech.com/yuantu/项目名/分支的数字部分/#  (E.G. http://uat.yuantutech.com/yuantu/hospital-admission-fe/1.0.0/#)


## git commit 规范

commit message 基本格式

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### type 类型如下：
>type代表某次提交的类型，比如是修复一个bug还是增加一个新的feature。

- feat: 新特性(feature)
- fix: 修改问题
- refactor: 代码重构
- docs: 文档修改
- style: 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑（注意不是 css 修改）
- test: 测试用例修改
- chore: 改变构建流程、或者增加依赖库、工具等
- revert: 回滚

### 组成部分

- scope: commit 影响的范围, 比如: route, component, utils, build...
- subject: commit 的概述
- body: commit 具体修改内容, 可以分为多行
- footer: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.


### 格式要求
```
# 标题行：50个字符以内，描述主要变更内容
#
# 主体内容：更详细的说明文本，建议72个字符以内。 需要描述的信息包括:
#
# * 为什么这个变更是必须的? 它可能是用来修复一个bug，增加一个feature，提升性能、可靠性、稳定性等等
# * 他如何解决这个问题? 具体描述解决问题的步骤
# * 是否存在副作用、风险?
#
# 尾部：如果需要的化可以添加一个链接到issue地址或者其它文档，或者关闭某个issue。
```

### git commit 模版配置（仅用于提醒，自行判断是否配置）
修改 ~/.gitconfig, 添加
```
[commit]
template = ~/.gitmessage
```
新建 ~/.gitmessage, 内容可以是：
```
# head: <type>(<scope>): <subject>
# - type: feat, fix, docs, style, refactor, test, chore
# - scope: can be empty (eg. if the change is a global or difficult to assign to a single component)
# - subject: start with verb (such as 'change'), 50-character line
#
# body: 72-character wrapped. This should answer:
# * Why was this change necessary?
# * How does it address the problem?
# * Are there any side effects?
#
# footer:
# - Include a link to the ticket, if any.
# - BREAKING CHANGE
#
```

