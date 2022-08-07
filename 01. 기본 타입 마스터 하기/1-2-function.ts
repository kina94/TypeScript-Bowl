{
    // JavaScript 💩
    function jsAdd(num1, num2){
        return num1+num2
    }

    // TypeScript ✨
    function add(num1: number, num2: number): number{
        return num1+num2
    }

    // JavaScript 💩
    function jsFetchNumb(id){
        //code ....
        //code ....
        return new Promise((resolve, reject)=>{
            resolve(100)
        })
    }

    // TypeScript ✨
    function tsFetchNumb(id: string): Promise<number>{
        return new Promise((resolve, reject)=>{
            resolve(100)
        })
    }

    //JavaScript ✨ => TypeScript
    //둘 다 사용 가능하지만, Ts에서 더 기능이 강화된 기능들
    //Optional parameter: 전달해도 되고, 전달하지 않아도 되는 인자를 선언할 때 사용
    //Optional인 경우 undefined를 전달하지 않아도 된다
    function printName(firstName: string, lastName?: string){
        console.log(firstName);
        console.log(lastName);
    }
    printName('kim', 'kina')
    printName('kim')
    printName('kim', undefined)

    //Default parameter
    function printMessage(message: string = 'default message'){
        console.log(message)
    }
    printMessage()

    //Rest parameter
    function addNumbers(...numbers: number[]): number{
        return numbers.reduce((a,b)=>a+b);
    }
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1,2,3,4));
    console.log(addNumbers(1,2,3,4,5,0));
}