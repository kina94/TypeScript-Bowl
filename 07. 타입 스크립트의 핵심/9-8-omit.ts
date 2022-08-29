{
  /*
    omit type은 pick과 반대로 제외하고 사용할 수 있다.
    */
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Omit<Video, "url" | "data" | "h">; //viedo에 없는 타입도 받을 수 있긴 함
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
