{
  /*
    Partial type은 부분적인 업데이트가 이뤄질 때 주로 사용되는 타입
    */
  type Todo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    //Todo 타입의 일부만 받아 업데이트
    return { ...todo, ...fieldsToUpdate };
  }

  const todo: Todo = {
    title: "learn Typescript",
    description: "study hard",
    label: "study",
    priority: "high",
  };

  const update = updateTodo(todo, { priority: "low" });
  console.log(update);
}
