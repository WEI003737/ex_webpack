# webpack example

### Webpack
###### -D webpack@4.44.1
###### -D webpack-cli@3.3.12

### Babel: 對syntax進行轉換
###### @babel/core@7.13.10
###### @babel/preset-env@7.13.10
###### babel-loader@8.2.2
###### @babel/register@7.11.5 => 對 require 命令加載的文件轉碼
###### 
###### 沒轉到以下二擇一
###### 1. -save @babel/polyfill@7.10.4 => 檔案很肥、汙染全域
###### 2. -D @babel/plugin-transform-runtime@7.11.0 + -save @babel/runtime@7.11.2

###### 配置檔案 .babelrc 或 babel.config.js

### 拆分 webpack 設定檔
###### webpack.base.babel.js
###### webpack.dev.babel.js
###### webpack.prod.babel.js

###### -D webpack-merge@5.1.1 => 合併 webpack 配置檔
###### -D cross-env@7.0.2 => 設定 webpack 配置檔可讀取到的環境變數
###### -D webpack-dev-serve@3.11.0 => live reload / 支援 hmr 熱加載
###### -D html-webpack-plugin@4.3.0 => 指定 chunk 生成 html / 引入 entry 內靜態檔 / 內建 lodash template (支援部分ejs) / 壓縮 html
###### -D mini-css-extract-plugin@0.9.0 => 將css抽出成獨立檔案

### 引入 css / file loader
###### loader (轉換器) 是 function，接受源文件返回轉換結果
###### -D css-loader@4.2.1 => 處理 css 檔案
###### -D style-loader@1.2.1 => 將 css 注入 <style> 標籤
###### -D sass@1.26.10
###### -D sass-loader@10.0.2
###### -D postcss@7.0.32 => 要配置 postcss.config.js
###### -D postcss-loader@3.0.0
###### -D postcss-preset-env@6.7.0
###### -D autoprefixer@9.8.6 => 自動加上前綴詞
###### -D url-loader@4.1.0
###### -D resolve-url-loader@3.1.1
###### -D file-loader@6.0.0

### 其他
###### -D clean-webpack-plugin@3.0.0 => 產出檔案前刪除檔案
###### -D copy-webpack-plugin@6.0.3 => 搬移檔案
###### -D terser-webpack-plugin@4.0.0 => js 壓縮，webpack 有預設，若配置其他 optimization 選項就要手動配置
###### -D optimize-css-assets-webpack-plugin@5.0.3 => css 壓縮，需配置 optimization 選項
###### splitChunksPlugin => webpack4 預設

### hbs 模板
###### handlebars@4.7.6
###### -D handlebars-loader@1.7.1

### vue
###### --save vue@2.6.11
###### -D vue-template-compiler@2.6.11 => 和 vue 版本需一致
###### -D vue-loader@15.9.1
###### --save vue-router@3.5.1
###### --save vuex@3.4.0

