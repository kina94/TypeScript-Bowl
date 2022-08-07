{
    /**
     * Enum (타입이 보장되지 않기 때문에 웹에선 Union으로 대체하여 사용)
     * 안드로이드나 IOS처럼 다른 클라이언트에게 보내야할 때 enum 타입을 쓴다.
     */   
    //Javascript
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUSEDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({
        "MONDAY": 0,
        "TUSEDAY": 1,
    })
    const dayOfToday = DAYS_ENUM.MONDAY

    //TypeScript
    type DaysOfWeek = 'Monday' | 'TuesDay' | 'Wednesday'; // 타입이 명확하게 보장됨
    enum Days{ // 타입이 정확하게 보장되지 않음
        Monday = 1,
        Tuesday, //2
        Wednesday, //3
        Thurday, //4
        Friday, //5
        Saturday, //6
        Sunday,// 7
    };
    let day = Days.Friday;
    day = 10 

    let dayOfWeek: DaysOfWeek = 'Monday'; 
} 