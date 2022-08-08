{
    type CoffeCup = {
        shots: number;
        hasMilk: boolean;
    };

    /**
     * 캡슐화 방법 : public, private, protected
     * public : 기본 설정값
     * private : 외부에서 절대 접근 불가 -> 접근하기 위해서는 함수로 접근
     * protected : 외부에서는 접근할 수 없지만, 상속된 자식 클래스에선 외부에서도 접근할 수 있음
     */

    /**
     * Abstraction
     * - 메소드가 많고 복잡할 때 꼭 필요한 메소드만을 노출시켜서 클래스를 간단하게 사용할 수 있게 해줌
     * Interface
     * - class가 반드시 따라야 하는 명세서
     * Interface로 타입을 지정하면 Interface에 명세된 함수만을 사용할 수 있다.
    */

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeCup;
    }

    //커피 머신은 커피 메이커 인터페이스를 반드시 따라야 함.
    //인터페이스에 적혀있는 모든 메소드를 구현해야 한다.
    class CoffeeMachine implements CoffeeMaker{ //서로 관련 있는 데이터와 함수를 묶는 템플릿
        private static BEANS_GRAMM_PER_SHOT = 7; // static : class level로 오브젝트마다 생성되지 않음. (함께 공유돨 수 있는 변수에 사용)
        private coffeBeansGramm: number = 0; // instance (object) level : 오브젝트마다 생성.

        private constructor(coffeBeansGramm: number) { // instance를 만들 때 호출되는 함수
            this.coffeBeansGramm = coffeBeansGramm
        }

        //이러한 함수를 사용하면 생성자를 이용한 생성을 금지하는 경우임
        //constructor를 private로 설정해서 해당 static method를 이용하도록 하기
        static makeMachine(coffeBeansGram: number): CoffeeMachine {
            return new CoffeeMachine(coffeBeansGram)
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans sholud be greater than 0');
            }
            this.coffeBeansGramm += beans;
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`)
            if (this.coffeBeansGramm < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!')
            }
            this.coffeBeansGramm -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT
        }

        private preheat(): void {
            console.log('heating up...')
        }

        private extract(shots: number): CoffeCup {
            console.log(`Pulling ${shots} shots...`);
            return {
                shots,
                hasMilk: false,
            }
        }

        makeCoffee(shots: number): CoffeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    maker.fillCoffeeBeans(3)
    maker.makeCoffee(2)

    const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
    // maker2.fillCoffeeBeans(3) CoffeMaker Interface에는 없기 때문에 사용할 수 없다.
    maker2.makeCoffee(2)
}