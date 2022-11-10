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

type MovieWithOutGrade = Omit<Movie, "id" | "grade" | "note">;

type MovieWithGrade = Omit<Movie, "id">;

export { Genres, Movie, MovieWithOutGrade, MovieWithGrade };
