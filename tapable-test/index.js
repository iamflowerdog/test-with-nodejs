const { SyncHook } = require('tapable');

const hook = new SyncHook(['arg1', 'arg2', 'arg3']);

// 绑定事件到webpack事件流
hook.tap('hook1', (arg1, arg2, arg3) => {
    console.log(arg1, arg2, arg3);
});

// 执行绑定事件
hook.call(1, 2, 3);
