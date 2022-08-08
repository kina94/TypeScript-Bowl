{
    type CoffeCup = {
        shots: number;
        hasMilk : boolean;
    };

    class CoffeMaker { //서로 관련 있는 데이터와 함수를 묶는 템플릿
        static BEANS_GRAMM_PER_SHOT = 7; // class level : 오브젝트마다 생성되지 않음. (함께 공유돨 수 있는 변수에 사용)
        coffeBeansGramm: number = 0; // instance (object) level : 오브젝트마다 생성.

        constructor(coffeBeansGramm: number){ // instance를 만들 때 호출되는 함수
            this.coffeBeansGramm = coffeBeansGramm
        }

        static makeMachine(coffeBeansGram: number): CoffeMaker {
            return new CoffeMaker(coffeBeansGram)
        }

        makeCoffe(shots: number): CoffeCup {
            // 클래스 변수에 접근할 때는 this를 사용
            if(this.coffeBeansGramm < shots * CoffeMaker.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enough coffee beans!')
            }
            this.coffeBeansGramm -= shots * CoffeMaker.BEANS_GRAMM_PER_SHOT
            return {
                shots,
                hasMilk: false,
            }
        }
    }

    const maker = new CoffeMaker(32);
    console.log(maker)
    const maker2 = CoffeMaker.makeMachine(3);
    console.log(maker2)
}