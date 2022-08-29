{
  /*
    pick type은 기존 타입에서 내가 필요한 타입만 골라서 사용할 수 있게 한다.
    */
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Pick<Video, "id" | "title">;
  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }

  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id,
      title: "video",
    };
  }
}
