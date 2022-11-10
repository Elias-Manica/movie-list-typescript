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

export { Genres, Movie };
