'use-strict';

const runCount = 100;
const keyConut = 10000;

let map = new Map();

/**
 * Array 构造器会根据给定元素创建一个数组，但是当仅有一个参数且这个参数是数字的时候除外
 * 如果只有一个数字，此时将返回一个length等于该参数的数组，
 */
let keys = new Array(keyConut);
for (let i = 0; i < keyConut; i++) keys[i] = {};

for (let key of keys) map.set(key, true);

let startTime = process.hrtime();

for (let i =0; i < runCount; i++) {
  for (let key of keys) {
    let value = map.get(key);
    if (value !== true) throw new Error();
  }
}

let elapsed = process.hrtime(startTime);
let [seconds, nanoseconds] = elapsed;
let milliseconds = Math.round(seconds * 1e3 + nanoseconds / 1e6);
/**
 * v6.17.1 114ms
 * v8.16.2 33ms
 * v12.13.0 30ms
 */
console.log(`${process.version} ${milliseconds}ms`);
