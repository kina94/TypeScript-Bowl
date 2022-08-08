{
    type CoffeCup = {
        shots: number;
        hasMilk : boolean;
    };
    
    const BEANS_GRAMM_PER_SHOT = 7; // 타입 추론
    let coffeBeansGramm: number = 0;

    function makeCoffe(shots: number): CoffeCup {
        if(coffeBeansGramm < shots * BEANS_GRAMM_PER_SHOT){
            throw new Error('Not enough coffee beans!')
        }
        coffeBeansGramm -= shots * BEANS_GRAMM_PER_SHOT
        return {
            shots,
            hasMilk: false,
        }
    }

    coffeBeansGramm += 3 * BEANS_GRAMM_PER_SHOT;
    const coffee = makeCoffe(2)
    console.log(coffee)
}