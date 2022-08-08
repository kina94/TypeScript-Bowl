{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
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
   * - Interface로 타입을 지정하면 Interface에 명세된 함수만을 사용할 수 있다.
   */

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  //커피 머신은 커피 메이커 인터페이스를 반드시 따라야 함.
  //인터페이스에 적혀있는 모든 메소드를 구현해야 한다.
  class CoffeeMachine implements CoffeeMaker {
    //서로 관련 있는 데이터와 함수를 묶는 템플릿
    private static BEANS_GRAMM_PER_SHOT = 7; // static : class level로 오브젝트마다 생성되지 않음. (함께 공유돨 수 있는 변수에 사용)
    private coffeBeansGramm: number = 0; // instance (object) level : 오브젝트마다 생성.

    constructor(
      coffeBeansGramm: number,
      private milk: MilkFrother,
      private sugar: SugarProvide
    ) {
      // instance를 만들 때 호출되는 함수
      this.coffeBeansGramm = coffeBeansGramm;
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans sholud be greater than 0");
      }
      this.coffeBeansGramm += beans;
    }

    clean() {
      console.log("cleaning the machine...");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeBeansGramm < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeBeansGramm -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up...");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee)
      return this.milk.makeMilk(sugarAdded)
    }
  }

  /**
   * Composition: 상속이 많아지면서 복잡해질때 사용
   */
  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvide {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }
  // 싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Steaming some milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return { ...cup, hasMilk: true };
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Steaming awesome milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return { ...cup, hasMilk: true };
    }
  }

  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Steaming cold milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return { ...cup, hasMilk: true };
    }
  }

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup) : CoffeeCup{
        return cup
    }
  }

  // 설탕 제조기
  class CandySugarMixer implements SugarProvide {
    private getSugar() {
      console.log("Getting some sugar from candy...");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return { ...cup, hasSugar: sugar };
    }
  }

  class SugarMixer implements SugarProvide {
    private getSugar() {
      console.log("Getting some sugar from jar...");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return { ...cup, hasSugar: sugar };
    }
  }

  class NoSugar implements SugarProvide{
    addSugar(cup: CoffeeCup) : CoffeeCup{
        return cup
    }
  }

  //MILK
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilkMaker = new NoMilk();

  //SUGAR
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  //Machine
  const sweetCandyMachine = new CoffeeMachine(12, noMilkMaker, candySugar);
  const sweetMachine = new CoffeeMachine(12, noMilkMaker, sugar);
  const latteMachine = new CoffeeMachine(12, fancyMilkMaker, noSugar);
  const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
  const sweetCaffeLatteMachine = new CoffeeMachine(
    12,
    fancyMilkMaker,
    sugar
  );
}
