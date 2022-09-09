- [x] 搭建响应式库 @my-reactive/reactive
  - [x] createRef 创建响应式数据
  - [x] createEffect 副作用，自动收集依赖
  - [x] createMemo  缓存
  - [x] untrack 不作为依赖的响应源
  - [ ] 额外的
    - [ ] createStore 创建复杂响应式数据
    - [ ] dispatch 负责处理
      - [ ] action 固定行为
      - [ ] mutation 突变
- [ ] 编写jsx转换函数 @yjw-reactive/jsx
  - [x] 工厂
  - [x] <></>
  - [ ] 细节处理
- [ ] 编写vite插件处理jsx模板 @my-reactive/vite-jsx-plugin
  - [ ] babel
- [ ] 编写测试用例
- [ ] 作为npm包发布
- [x] 入口文件 main.tsx