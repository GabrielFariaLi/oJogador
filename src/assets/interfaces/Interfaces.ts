export interface User {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  img: string;

  _id?: string;
}

export interface selectInterface {
  value: string;
  viewValue: string;
}

export interface Player {
  id: string;
  name: string;
  country?: string | null;
  has_image?: boolean;
}
interface Team {
  id: string;
  name: string;
}

interface Transfer {
  team: Team;
  from: string;
  to: string | null;
}

interface LastTeam {
  id: string;
  name: string;
}

export interface oJogador {
  id: string;
  name: string;
  country: string;
  birth_date: string;
  foot: string;
  height: string;
  has_image: boolean;
  last_team: LastTeam;
  transfers: Transfer[];
}
