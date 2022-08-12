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
  };

  //class: 둘 다 구현 가능
  const class1: PositionType = {
    x: 1,
    y: 2,
  };
  const class2: PositionInterface = {
    x: 1,
    y: 2,
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
}
