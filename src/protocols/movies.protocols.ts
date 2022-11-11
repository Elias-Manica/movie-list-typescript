type Genres = {
  id: number;
  name: string;
};

type Movie = {
  id: number;
  name: string;
  plataform: string;
  genre: string;
  status: string;
  grade: null | number;
  note: null | string;
};

type JustMovie = {
  id: number;
  name: string;
  plataform: number;
  genre: number;
  status: number;
  grade: null | number;
  note: null | string;
  userid: number;
};

type QtdMovie = {
  name: string;
  qtd: number;
};

type MovieWithOutGrade = Omit<Movie, "id" | "grade" | "note">;

type MovieWithGrade = Omit<Movie, "id">;

export {
  Genres,
  Movie,
  MovieWithOutGrade,
  MovieWithGrade,
  JustMovie,
  QtdMovie,
};
