export type UserType = {
  email: string;
  name: string;
  lastName: string;
  token: string;
  movements: UserMovement[];
};

export type UserMovement = {
  title: string;
  amount: string; // Should be number
  date: string; // should be in UTC
  [x: string]: string; // Tuve que poner esto porque amount viene como "amount ". Un espacio al final en la API
};
