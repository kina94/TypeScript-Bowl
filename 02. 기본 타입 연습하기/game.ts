/**
 * 좌표 움직이기
 */

type Direction = 'up' | 'down' | 'left' | 'right'
const coor = {
    x: 0,
    y: 0,
}
function move(direction:Direction): void{
    switch (direction){
        case 'up':
            coor.y+=1
            break
        case 'down':
            coor.y-=1
            break
        case 'left':
            coor.x-=1
            break
        case 'right':
            coor.x+=1
            break
        default:
            throw Error('undefined direction')
    }
}

console.log(coor)
move('up')
console.log(coor)
move('down')
console.log(coor)
move('left')
console.log(coor)
move('right')
console.log(coor)
