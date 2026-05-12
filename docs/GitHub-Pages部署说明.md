# GitHub Pages 部署说明

## 目标

把英语口语练习助手部署成正式 HTTPS 网页，方便老师和学生直接打开试用。

## 访问地址

GitHub Pages 开启后，预计访问地址为：

```text
https://lyz20070426-beep.github.io/english-speaking-practice-assistant/
```

系统会自动跳转到：

```text
https://lyz20070426-beep.github.io/english-speaking-practice-assistant/app/
```

## 开启 GitHub Pages

1. 打开 GitHub 仓库：

```text
https://github.com/lyz20070426-beep/english-speaking-practice-assistant
```

2. 点击顶部或右侧的 `Settings`。
3. 左侧找到 `Pages`。
4. 在 `Build and deployment` 中选择：

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

5. 点击 `Save`。
6. 等待 1-3 分钟，GitHub 会生成 HTTPS 访问地址。

## 重要说明

- HTTPS 网页比本地 `file://` 打开更适合麦克风授权。
- 浏览器仍然会在第一次使用麦克风时询问是否允许，这是安全机制，网页代码不能自动绕过。
- 第一次点击允许后，浏览器通常会记住该网站的麦克风权限。
- 推荐使用 Chrome 或 Edge 测试。

