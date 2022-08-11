{
    /*
    타입과 상관 없이 인자를 받고 싶은데,
    타입을 어떻게 설정해야 할까?
    GENERIC : 사용자가 사용할 때 어떤 타입인지 결정할 수 있고, 타입을 보장받을 수 있다.
    */
    
    // 숫자만 판독할 수 있다.
    function checkNotBad(arg: number | null): number{
        if(arg == null){
            throw new Error('not valid number!');
        }
        return arg;
    }

    // 다 판독할 수 있지만 타입 정보가 없다. any를 쓰는건 안전하지 않다.
    function checkNotBadAny(arg: any | null): number{
        if(arg == null){
            throw new Error('not valid number!');
        }
        return arg;
    }

    // 제네릭
    function checkNotNull<T>(arg: T | null): T{
        if(arg == null){
            throw new Error('not valid number!');
        }
        return arg;
    }
    const number = checkNotNull(123)
    const boal: boolean = checkNotNull(true)
}