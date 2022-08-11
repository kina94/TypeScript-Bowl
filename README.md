# TypeScript Bowl - 타입스크립트 공부하기
### 타입 스크립트를 공부한 결과를 모아놓은 레포입니다 😺
- [<a href='https://github.com/kina94/TypeScript-Bowl/edit/main/README.md#1-%EA%B8%B0%EB%B3%B8-%ED%83%80%EC%9E%85'>1. 기본 타입</a>](#1------)
  * [<a href='https://github.com/kina94/TypeScript-Bowl/edit/main/README.md#1-%EA%B8%B0%EB%B3%B8-%ED%83%80%EC%9E%85-%EB%A7%88%EC%8A%A4%ED%84%B0%ED%95%98%EA%B8%B0'>1. 기본 타입 마스터하기</a>](#1------------)
  * [<a href='https://github.com/kina94/TypeScript-Bowl/edit/main/README.md#2-%EA%B8%B0%EB%B3%B8-%ED%83%80%EC%9E%85-%EC%97%B0%EC%8A%B5%ED%95%98%EA%B8%B0'>2. 기본 타입 연습하기</a>](#2-----------)
- [<a href='https://github.com/kina94/TypeScript-Bowl/edit/main/README.md#2-%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D'>2. 객체지향 프로그래밍</a>](#2-----------)
  * [<a href='https://github.com/kina94/TypeScript-Bowl/edit/main/README.md#1-%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D'>1. 객체지향 프로그래밍</a>](#1-----------)
  * [<a href='https://github.com/kina94/TypeScript-Bowl/edit/main/README.md#2-%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EC%97%B0%EC%8A%B5%ED%95%98%EA%B8%B0'>2. 객체지향 프로그래밍 연습하기</a>](#2----------------)
- [<a href='https://github.com/kina94/TypeScript-Bowl/edit/main/README.md#3-%EC%A0%9C%EB%84%A4%EB%A6%AD'>3. 제네릭</a>](#2-----------)
  * [<a href='https://github.com/kina94/TypeScript-Bowl/edit/main/README.md#3-%EC%A0%9C%EB%84%A4%EB%A6%AD'>1. 제네릭 써보기(함수, 클래스, 제네릭 조건)</a>](#1-----------)
  * [<a href='https://github.com/kina94/TypeScript-Bowl/edit/main/README.md#3-%EC%A0%9C%EB%84%A4%EB%A6%AD'>2. 제네릭 연습하기</a>](#2----------------)

* * *

## 1. 기본 타입
> ### 1. 기본 타입 마스터하기
> #### <a href='https://github.com/kina94/TypeScript-Bowl/blob/main/01.%20%EA%B8%B0%EB%B3%B8%20%ED%83%80%EC%9E%85%20%EB%A7%88%EC%8A%A4%ED%84%B0%20%ED%95%98%EA%B8%B0/1-1-basic.ts'>  1-1. 기본 타입 정리하기 (numbers, string, boolean, undefined, null, unknown, any, void, never, object) </a>
> #### <a href="https://github.com/kina94/TypeScript-Bowl/blob/main/01.%20%EA%B8%B0%EB%B3%B8%20%ED%83%80%EC%9E%85%20%EB%A7%88%EC%8A%A4%ED%84%B0%20%ED%95%98%EA%B8%B0/1-2-function.ts"> 1-2. 함수에서 타입 이용하기</a>
> #### <a href="https://github.com/kina94/TypeScript-Bowl/blob/main/01.%20%EA%B8%B0%EB%B3%B8%20%ED%83%80%EC%9E%85%20%EB%A7%88%EC%8A%A4%ED%84%B0%20%ED%95%98%EA%B8%B0/1-3-array.ts"> 1-3. 배열과 튜플 </a>
> #### <a href="https://github.com/kina94/TypeScript-Bowl/blob/main/01.%20%EA%B8%B0%EB%B3%B8%20%ED%83%80%EC%9E%85%20%EB%A7%88%EC%8A%A4%ED%84%B0%20%ED%95%98%EA%B8%B0/1-4-alias.ts">1-4. Type Alias</a>
> #### <a href="https://github.com/kina94/TypeScript-Bowl/blob/main/01.%20%EA%B8%B0%EB%B3%B8%20%ED%83%80%EC%9E%85%20%EB%A7%88%EC%8A%A4%ED%84%B0%20%ED%95%98%EA%B8%B0/1-5-Union.ts">1-5. Union 타입</a>
> #### <a href="https://github.com/kina94/TypeScript-Bowl/blob/main/01.%20%EA%B8%B0%EB%B3%B8%20%ED%83%80%EC%9E%85%20%EB%A7%88%EC%8A%A4%ED%84%B0%20%ED%95%98%EA%B8%B0/1-6-discriminated.ts">1-6. Discriminated Union </a>
> #### <a href="https://github.com/kina94/TypeScript-Bowl/blob/main/01.%20%EA%B8%B0%EB%B3%B8%20%ED%83%80%EC%9E%85%20%EB%A7%88%EC%8A%A4%ED%84%B0%20%ED%95%98%EA%B8%B0/1-7-intersection.ts">1-7. Intersection 타입</a>
> #### <a href="https://github.com/kina94/TypeScript-Bowl/blob/main/01.%20%EA%B8%B0%EB%B3%B8%20%ED%83%80%EC%9E%85%20%EB%A7%88%EC%8A%A4%ED%84%B0%20%ED%95%98%EA%B8%B0/1-8-enum.ts">1-8. Enum</a>
> #### <a href="https://github.com/kina94/TypeScript-Bowl/blob/main/01.%20%EA%B8%B0%EB%B3%B8%20%ED%83%80%EC%9E%85%20%EB%A7%88%EC%8A%A4%ED%84%B0%20%ED%95%98%EA%B8%B0/1-9-inference.ts">1-9. 타입 추론?</a>
> #### <a href="https://github.com/kina94/TypeScript-Bowl/blob/main/01.%20%EA%B8%B0%EB%B3%B8%20%ED%83%80%EC%9E%85%20%EB%A7%88%EC%8A%A4%ED%84%B0%20%ED%95%98%EA%B8%B0/1-10-assertion.ts"> 1-10. Type Assertion</a>
> ### 2. 기본 타입 연습하기
> #### <a href="https://github.com/kina94/TypeScript-Bowl/blob/main/02.%20%EA%B8%B0%EB%B3%B8%20%ED%83%80%EC%9E%85%20%EC%97%B0%EC%8A%B5%ED%95%98%EA%B8%B0/calculator.ts">  2-1. 계산기 함수 만들기 </a>
> #### <a href="https://github.com/kina94/TypeScript-Bowl/blob/main/02.%20%EA%B8%B0%EB%B3%B8%20%ED%83%80%EC%9E%85%20%EC%97%B0%EC%8A%B5%ED%95%98%EA%B8%B0/game.ts"> 2-2. 좌표 이동 만들기</a>
> #### <a href="https://github.com/kina94/TypeScript-Bowl/blob/main/02.%20%EA%B8%B0%EB%B3%B8%20%ED%83%80%EC%9E%85%20%EC%97%B0%EC%8A%B5%ED%95%98%EA%B8%B0/loading.ts"> 2-3. 로딩 상태 알리기 </a>

* * *

## 2. 객체지향 프로그래밍
> ### 1. 객체지향 프로그래밍
> #### <a href='https://github.com/kina94/TypeScript-Bowl/blob/main/03.%20%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/3-1-%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5.md'>  1-1. 객체지향의 개념과 원칙 </a>
> #### <a href="https://github.com/kina94/TypeScript-Bowl/commit/2657d0a12a606e79c4e2166c9de469077291af16"> 1-2. 절차지향적으로 커피 기계 만들기</a>
> #### <a href="https://github.com/kina94/TypeScript-Bowl/commit/ce55bb1c097c686302e70dda60b784c796e6d1c1"> 1-3. 객체지향적으로 커피 기계 수정하기 </a>
> #### <a href="https://github.com/kina94/TypeScript-Bowl/blob/main/01.%20%EA%B8%B0%EB%B3%B8%20%ED%83%80%EC%9E%85%20%EB%A7%88%EC%8A%A4%ED%84%B0%20%ED%95%98%EA%B8%B0/1-4-alias.ts">1-4. 캡슐화 시키기</a>
> #### <a href="https://github.com/kina94/TypeScript-Bowl/blob/main/03.%20%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/3-3-Getter%EC%99%80%20Setter.ts">1-5. Getter와 Setter</a>
> #### <a href="https://github.com/kina94/TypeScript-Bowl/commit/13c4836b600cf79e0b6ae544452e87c21445fef1">1-6. 추상화</a>
> #### <a href="https://github.com/kina94/TypeScript-Bowl/commit/b4b92dd7c7cfa867e2be587c3a6aa7d7b34d9d17">1-7. Interface</a>
> #### <a href="https://github.com/kina94/TypeScript-Bowl/commit/de99775783b1e852d259a09587cd9627b994e3ad">1-8. 상속으로 라떼 머신 만들기</a>
> #### <a href="https://github.com/kina94/TypeScript-Bowl/commit/d0b3424b549f080448a1f4accbbb7b8915fca886">1-9. 다형성</a>
> #### <a href="https://github.com/kina94/TypeScript-Bowl/commit/57a4b4cd4e65168d7f9ecfcc8f167720138539ef">1-10. 상속 문제를 해결할 수 있는 Composition</a>
> #### <a href="https://github.com/kina94/TypeScript-Bowl/commit/ac61ba5a2adf1d309ea1805fc14fa636ac0b515e">1-11. Composition과 Interface로 커피 머신에 들어가는 재료 바꾸기 </a>
> #### <a href="https://github.com/kina94/TypeScript-Bowl/commit/94097602c49a1a3b5905404e0f713a593a29fd5e">1-11. Composition과 Interface로 커피머신 하나로 만들기 </a>
> ### 2. 객체지향 프로그래밍 연습하기
> #### <a href='https://github.com/kina94/TypeScript-Bowl/blob/main/04.%20%EA%B0%9D%EC%B1%84%EC%A7%80%ED%96%A5%20%EC%97%B0%EC%8A%B5%ED%95%98%EA%B8%B0/4-1-stack.ts'>  2-1. 객체지향적으로 스택 구현하기 </a>


* * *

## 3. 제네릭
> ### 1. 제네릭 써보기
> #### <a href='https://github.com/kina94/TypeScript-Bowl/blob/main/05.%20%EC%A0%9C%EB%84%A4%EB%A6%AD/5-1-function.ts'>  1-1. 함수에서의 제네릭 </a>
> #### <a href="https://github.com/kina94/TypeScript-Bowl/blob/main/05.%20%EC%A0%9C%EB%84%A4%EB%A6%AD/5-2-class.ts"> 1-2. 클래스에서의 제네릭</a>
> #### <a href='https://github.com/kina94/TypeScript-Bowl/blob/main/05.%20%EC%A0%9C%EB%84%A4%EB%A6%AD/5-3-constrains.ts'> 1-3. 제네릭 조건 </a>
> ### 2. 제네릭 연습하기
> #### <a href='https://github.com/kina94/TypeScript-Bowl/blob/main/06.%20%EC%A0%9C%EB%84%A4%EB%A6%AD%20%EC%97%B0%EC%8A%B5%ED%95%98%EA%B8%B0/6-1-generic_stack.ts'>  2-1. 제네릭으로 스택 구현하기 </a>
