{
    //Array
    //readonly를 사용하려면 []만 사용 가능
    //코드의 일관성을 위해 []를 사용하기!
    const fruits: string[] = ['tomato', 'banana']; 
    const scores: Array<number> = [1,3,4];
    function printArray(fruits: readonly string[]){
    }

    //Tuple -> interface, type alias, class로 대체해서 쓰기. 가독성이 떨어짐.
    let student: [string, number];
    student = ['name', 123];
    student[0] //name
    student[1] //123
    const [name, age] = student;
}