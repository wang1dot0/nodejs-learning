// 利用自执行函数创造私有作用域，仅公开有意公开的部分。这是Node模块系统的基础
const module = (() => {
  const privateFoo = () => {};
  const privateBar = () => {};
  const exported = {
    publicFoo: () => {},
    publicBar: () => {},
  };
  return exported;
})();

console.log(exported);
