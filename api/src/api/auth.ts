const MOCK_USERS = [
  {
    id: "1",
    fname: "Abbra Liber",
    email: "abbra@gmail.com",
    password: "abbra2026",
    imageUrl: "",
    permissions: ["admin"],
  },
  {
    id: "2",
    fname: "Sandy Smith",
    email: "sandy@gmail.com",
    password: "sandy2026",
    imageUrl: "",
    permissions: ["manager"],
  },
];

export function signIn(req: string) {
  const body = JSON.parse(req);
  const exist = MOCK_USERS.find(
    (user) => user.email === body.email && user.password === body.password,
  );
  if (exist) {
    return Promise.resolve(exist);
  }
  return Promise.reject("User doesn't exist");
}

export function signUp(req: string) {
  const body = JSON.parse(req);
  const exist = MOCK_USERS.find(
    (user) => user.email === body.email && user.password === body.password,
  );
  if (exist) {
    return Promise.reject("User already exists");
  }
  const newUser = {
    id: `${MOCK_USERS.length + 1}`,
    ...body,
  };
  MOCK_USERS.push(newUser);
  return Promise.resolve(newUser);
}
