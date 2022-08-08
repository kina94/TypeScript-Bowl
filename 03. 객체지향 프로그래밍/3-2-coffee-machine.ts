{
    type CoffeCup = {
        shots: number;
        hasMilk : boolean;
    };

    /**
     * 캡슐화 방법 : public, private, protected
     * public : 기본 설정값
     * private : 외부에서 절대 접근 불가 -> 접근하기 위해서는 함수로 접근
     * protected : 외부에서는 접근할 수 없지만, 상속된 자식 클래스에선 외부에서도 접근할 수 있음
     */ 
    class CoffeMaker { //서로 관련 있는 데이터와 함수를 묶는 템플릿
        private static BEANS_GRAMM_PER_SHOT = 7; // static : class level로 오브젝트마다 생성되지 않음. (함께 공유돨 수 있는 변수에 사용)
        private coffeBeansGramm: number = 0; // instance (object) level : 오브젝트마다 생성.

        private constructor(coffeBeansGramm: number){ // instance를 만들 때 호출되는 함수
            this.coffeBeansGramm = coffeBeansGramm
        }

        //이러한 함수를 사용하면 생성자를 이용한 생성을 금지하는 경우임
        //constructor를 private로 설정해서 해당 static method를 이용하도록 하기
        static makeMachine(coffeBeansGram: number): CoffeMaker {
            return new CoffeMaker(coffeBeansGram)
        }

        fillCoffeeBeans(beans: number){
            if(beans < 0){
                throw new Error('value for beans sholud be greater than 0');
            }
            this.coffeBeansGramm += beans;
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

    const maker = CoffeMaker.makeMachine(32);
    maker.fillCoffeeBeans(3)
    console.log(maker)
    // const maker2 = CoffeMaker.makeMachine(3);
    // console.log(maker2)

}