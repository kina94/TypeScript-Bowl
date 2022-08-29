{
  /*
    앞을 키로 쓰고 뒤에 들어가는 타입을 value의 key값으로 사용할 수 있다.
    */
  type PageInfo = {
    title: string;
  };

  type Page = "home" | "about" | "contact";

  const nav: Record<Page, PageInfo> = {
    home: {
      title: "Home",
    },
    about: { title: "About" },
    contact: { title: "Contact" },
  };
}
