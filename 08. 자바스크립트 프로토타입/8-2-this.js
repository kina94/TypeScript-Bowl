{
  /*
   * 아무것도 바인딩되지 않은 상태면 window에 바인딩.
   * 자바스크립트의 this는 호출한 상대에게 바인딩된다.
   */

  class Counter {
    count = 0;
    increase = function () {
      console.log(this);
    };
    increaseBind = () => {
      // arrow function을 이용하면 bind() 함수를 쓰지 않아도 바인드됨
      console.log(this);
    };
  }

  const counter = new Counter();
  counter.increase(); // this는 counter와 바인딩
  const caller = counter.increase;
  caller(); //undefined. why? caller와 바인딩되면서 this의 정보를 잃어버림.
  // map과 const로 선언한 변수는 window에 등록되어 있지 않으므로 caller를 호출하는 건 window도, object도 아님.

  // 정보를 잃어버리지 않으려면 바인딩을 해줘야 한다.
  const callerBind = counter.increase.bind(counter); // counter에 바인딩

  class Bob {}
  const bob = new Bob();
  bob.run = counter.increase;
  bob.run(); // bob 출력. 왜냐? run이란 함수를 bob이 불렀기 때문!
}
