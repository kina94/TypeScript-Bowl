{
    /**
     * Type Inference
     */

    let text = 'hello'; // 선언하는 동시에 string으로 타입 추론
    function print(message){ //타입을 따로 선언하지 않으면 any로 추론💩
        console.log(message);
    }

    function add(x:number, y:number){
        return x+y // number로 타입 추론
    }

    const result = add(1,2);
}