
/**
 * 계산기 함수 만들기
*/
type Action = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder'
function calculator(action: Action, num1: number, num2: number): number {
    switch (action) {
        case 'add':
            return num1 + num2
        case 'substract':
            return  num1 - num2
        case 'multiply':
            return num1 * num2
        case 'divide':
            return num1 / num2
        case 'remainder':
            return num1 % num2
        default:
            throw Error('unknown action')
    }
}

console.log(calculator('add', 1, 3))
console.log(calculator('substract', 3, 1))
console.log(calculator('multiply', 4, 2))
console.log(calculator('divide', 4, 2))
console.log(calculator('remainder', 5, 2))
