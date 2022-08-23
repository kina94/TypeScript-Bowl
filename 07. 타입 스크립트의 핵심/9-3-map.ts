type Video = {
  title: string;
  author: string;
  description: string;
};

// type VideoOptional = {
//     title?: string;
//     author?: string;
//     description: string;
// }

// type VideoReadOnly = {
//     readonly title: string;
//     Video에서 변경이 되면 관련된 모든 타입을 찾아다니면서 수정을 해야 함..
// }

/**
 * Mappped Type을 사용해보자.
 * 재사용성을 높일 수 있음.
 */

type Optional<T> = {
  [P in keyof T]?: T[P];
};

type VideoOptional = Optional<Video>;

const VideoOp: VideoOptional = {
  title: "abc",
  author: "bcd",
};

type Animal = {
  name: string;
  age: number;
};

const animal: Optional<Animal> = {
  name: "dog",
};

type Nullabel<T> = { [P in keyof T]?: T[P] | null };
const obj3: Nullabel<Video> = {
  title: "hi",
  author: null,
};

type Proxy<T> = {
  get(): T;
  set(value: T): void;
};

type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>; // 한 번 감싸는 형식으로도 가능함.
};
