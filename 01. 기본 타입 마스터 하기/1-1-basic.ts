{
    /**
     * JavaScript
     * Primitive: number, strong, boolean, bigint, symbol, null, undefined
     * Object: function, array...
     */

    //number
    const num:number = 1;

    //string
    const str:string = 'hello';

    //boolean
    const bool:boolean = true;

    //undefined
    let age: number | undefined
    age = undefined;
    age = 1;
    function find(): number | undefined{
        return undefined
    }

    //null: 단독 사용x 💩
    let person: null; // 💩
    let person2: string | null; // o

    //unknown: 가능하면 쓰지 않기 💩
    //타입스크립트에서 타입이 없는 자바스크립트 라이브러리를 사용할 때 사용할 수 있음
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    //any: 가능하면 쓰지 않기 💩
    let anything: any = 0;
    anything = 'hello';

    //void: 아무것도 리턴하지 않을 때
    function print(): void{
        console.log('hello');
    }
    let unusable: void = undefined; //사용하지 않음 💩

    //never: 리턴하지 않으려고 할 때
    function throwError(message:string): never{
        //message => serrver (log)
        throw new Error(message);
        while(true){}
    }
    let neverEnding: never; //사용하지 않음 💩

    //object: 가능하면 어떤 타입인지 선언해서 사용해야 함 💩
    let obj: object;
    function acceptSomeObject(obj: object){}
    acceptSomeObject({name:'kina'});
    acceptSomeObject({animal:'dog'});
}