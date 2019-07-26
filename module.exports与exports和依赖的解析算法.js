/*
* 1. exports只是module.exports的初始值的引用
* 2. module.exports是require函数的导出对象
* 3. 给exports新增属性，导出对象也会变化
* 4. 可以给exports赋新的值，但是没有意义，不会改变导出
*/

/* resolve函数的模块路径解析算法
*  文件模块： moduleName以/开头，被视为绝对路径，以./开头，被认为是相对路径，从需求模块开始运算
*  核心模块： moduleName没有前缀/或./，算法将尝试在核心Node.js模块中搜索
*  包模块： 如果没有找到匹配moduleName的核心模块，则搜索将在第一个node_modules中查找匹配的模块目录，他从所需模块开始在目录结构中向上导航。
           该算法通过查找目录树中的下一个node_module目录继续搜索匹配，知道它到达文件系统的根目录。
*  对于文件模块和包模块，单个文件和目录都可以与moduleName匹配。将尝试匹配以下内容：
*  <moduleName>.js
*  <moduleName>/index.js
*  <moduleName>/package.json中的main属性中指定的目录/文件
*/