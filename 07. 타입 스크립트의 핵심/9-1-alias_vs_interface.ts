{
  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  }

  // object: 둘 다 구현 가능
  const obj1: PositionType = {
    x: 1,
    y: 2,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 2,
    z: 3,
  };

  //class: 둘 다 구현 가능
  const class1: PositionType = {
    x: 1,
    y: 2,
  };
  const class2: PositionInterface = {
    x: 1,
    y: 2,
    z: 3,
  };

  //Extends: 둘 다 구현 가능
  interface ZPositionInterface extends PositionInterface{
    z: number;
  }
  type ZpositionType = PositionType & {z:number};

  // interface만 merge가 가능하다.
  interface PositionInterface{
    z:number;
  }

  // Type aliases에는 compute property를 사용할 수 있다.
  type Person = {
    name: string,
    age:number
  }
  type Name = Person['name']; //string
  type NumberType = number;
  type Direction = 'left' | 'right'


  /**
   * interfcae는 '명세서'와 같은 역할을 하기 때문에 '규격'이 필요한 곳에 사용되어야 한다.
   * (API 등, class 등)
   * Type Alias는 어떤 것을 구현할 목적이 아니라 데이터를 담을 목적일 때 사용한다.
   */
}
