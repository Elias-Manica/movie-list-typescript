type Token = {
  id: number;
  userid: number;
  token: string;
  active: boolean;
};

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export { Token, User };
