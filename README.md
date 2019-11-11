### 测试nodejs

#### webpack-v4.0-features/map-performance.js 测试map
* 测试结果
  - v6.17.1 114ms
  - v8.16.2 33ms
  - v12.13.0 30ms
* for...of 在可迭代对象上创建一个迭代循环，调用自定义钩子，为每个不同的属性的值执行语句
* for...in 以任意顺序遍历一个对象的除Symbol以外的可枚举属性
* Math.random() ==> [0, 1) 小数
* Math.round() ---> 四舍五入取整

#### webpack-v4.0-features/compare-incules-index-of.js 对比indexOf inclues
* 测试结果
  boron
    includes: 19.968ms
    indexOf: 60.642ms
  erbium
    inclues: 3.360ms
    indexOf: 19.315ms
* Array.prototype.fill(value, startIndex = 0, endIndex = this.length)) 
* Array.prototype.includes(valueToFind, fromIndex) // 如果fromIndex为负，则从绝对值开始往后找
* arr.indexOf(searchElement[, fromIndex]) // 同上

#### tapable-test 
* tapable 是一个类似于 Node.js 的 EventEmitter 的库，控制钩子函数的发布与订阅，控制webpack的插件系统
* tap绑定 call执行