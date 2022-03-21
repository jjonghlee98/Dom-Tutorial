const x = 'x';
function c() { // 선언
    const y = 'y';
    console.log('c');
}

function a() { // 선언
    const x = 'x';
    console.log('a');
    function b() { // 선언
        const z = 'z';
        console.log('b');
        c();
    }
    b(); // 호출
}

a(); // 호출
c(); // 호출q

// const obj = {
//     name: 'zerocho',
//     sayName() {
//         console.log(this.name);
//         function inner() {
//             console.log(this.name);
//         }
//         inner();
//     }
// }

const obj = {
    name: 'zerocho',
    sayName() { // 이 함수의 부모는 모른다. 호출을 해봐야 안다.
        console.log(this.name);
        const inner = () => {
            console.log(this.name);
        }
        // inner();
        inner.call(obj);
    }
}

obj.sayName();

const header = {
    addEventListener: function(eventName, callback) {
        callback.call(this); // this가 header
        callback.call(header);
    }
} // 추측해볼 수는 있지만 정확히 알 수는 없다.

header.addEventListener('click', function() {
    console.log(this); // header
})

header.addEventListener('click', () => {
    console.log(this); // header
}) // 화살표 함수를 이용하는 방법

const header = {
    addEventListener(eventName, callback) {
        callback.call(header); // 이런식으로 call을 활용할 수도 있다.
    }

}

function add(a, b) {
    return a + b;
}

add.apply(null, [3, 5]);

// setTimeout
setTimeout(() => {
    console.log('a');
}, 1000);


// promise
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 1000);
});

promise.then(() => {
    console.log('a');
})

// 다른 방법
const p = new Promise();
const c = p.then((결과값) => {

}).catch((에러) => {})