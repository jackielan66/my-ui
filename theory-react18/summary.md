### React渲染阶段概念大全
#### 1.简化逻辑
1.  createElement (JSX解析)
2.  render;
3.  Concurrent Mode (Fiber)
4.  Fibers Node;
5.  Render and Commit Phases
6.  Reconciliation;
7.  Function Components;
8.  hooks;
9.  类组件

---
### 总结
JSX -> FiberNode -> Concurrent Mode -> Fiber核心调度器 -> Scheduler -> 打断Reconciliation -> Render(执行Hooks) -> Commit Phases

