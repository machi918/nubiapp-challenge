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
  date: string; // Should be in UTC. DD de mmmmm de YYYY format comes from the API.
  [x: string]: string; // Had to add this because amount comes as "amount " from API. Theres is a space at the end.
};
