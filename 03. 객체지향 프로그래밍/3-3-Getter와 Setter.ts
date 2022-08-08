{
    /**
        * Getter와 Setter
        * 둘은 한 묶음이고,
        * 데이터에 할당될 값이 어떠한 기준 안에 있을 때 setter를 통해 깂을 외부에서 설정할 수 있음
       */
    class User {
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
        private internalAge = 4;
        get age(): number {
            return this.internalAge;
        }
        set age(num: number) {
            if (num < 0) {
                throw new Error('age should be greater than 0')
            }
            this.internalAge = num
        }
        constructor(private firstName: string, private lastName: string) {
        }
    }
    const user = new User('Steve', 'jobs')
    user.age = 6;
}