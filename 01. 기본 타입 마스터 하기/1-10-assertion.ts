{
    /**
     * Type Assertions 💩
     * 타입을 정말 정말 확신하는 경우가 아니라면 쓰지 않기
     */

    function jsStrFunc(): any{
        return 'hello';
    }

    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)) // 😱

    function findNumbers(): number[] | undefined{
        return undefined;
    }
    const numbers = findNumbers();
    numbers!.push(2) // 😱
}
