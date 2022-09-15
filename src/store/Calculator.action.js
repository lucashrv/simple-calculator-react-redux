export function sum(num1, num2){
    return{
        type: 'SUM',
        payload: [num1, num2]
    }
}
export function sub(num1, num2){
    return{
        type: 'SUB',
        payload: [num1, num2]
    }
}
export function mult(num1, num2){
    return{
        type: 'MULT',
        payload: [num1, num2]
    }
}
export function div(num1, num2){
    return{
        type: 'DIV',
        payload: [num1, num2]
    }
}