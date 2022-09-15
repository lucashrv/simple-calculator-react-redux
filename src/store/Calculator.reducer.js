export default function(state = 0, action){
    switch(action.type){
        case 'SUM':
            return action.payload[0] + action.payload[1]
        case 'SUB':
            return action.payload[0] - action.payload[1]
        case 'MULT':
            return action.payload[0] * action.payload[1]
        case 'DIV':
            return action.payload[0] / action.payload[1]
        default:
            return state
    }
}