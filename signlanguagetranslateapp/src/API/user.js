// import { createHeaders } from "./index";
// const apiUrl = process.env.REACT_APP__API_URL;

// //Making a function that checks if the user that tries to login already has an acount
// const checkForUser = async (username) => {
//   try {
//     const response = await fetch(`${apiUrl}?username=${username}`);
//     if (!response.ok) {
//       throw new Error("Could not complete request. ");
//     }
//     const data = await response.json();
//     return [null, data];
//   } catch (error) {
//     return [error.message, []];
//   }
// };

// //A function that creates new users
// const createUser = async () => {
//   try {
//     const response = await fetch(apiUrl, {
//       method: "POST",
//       headers: createHeaders(),
//       body: JSON.stringify({
//         username,
//         translations: [],
//       }),
//     });
//     if (!response.ok) {
//       throw new Error("Could not create user with username " + username);
//     }
//     const data = await response.json();
//     return [null, data];
//   } catch (error) {
//     return [error.message, []];
//   }
// };

//A functions that returns errors if there is an error or redirect the user to checkForUser function
// export const loginUser = async (username) => {
//   const [checkError, user] = await checkForUser(username);

//   if (createError !== null) {
//     return [checkError, null];
//   }

//   if (user.length > 0) {
//     return [null, user.pop()];
//   }
//   return await createUser(username);
// };

const apiURL = "https://topaz-deciduous-piper.glitch.me";

export const fetchUser = (username) => {
  return fetch(`${apiURL}/translations?username=${username}`).then((response) =>
    response.json()
  );
};

export const createUser = (username) => {
  return fetch(`${apiURL}/translations`, {
    method: "POST",
    headers: {
      "X-API-Key": "hytgrvfedws",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      translations: [],
    }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Could not create new user");
    }
    return response.json();
  });
};
