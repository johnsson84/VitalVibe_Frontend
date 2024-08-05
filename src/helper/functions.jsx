export const authenticate = () => {
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return false;
  }
};

// Function to sheck  and give more accurate error message for errorcodes.
export const checkingErrors = (errorcodes) => {
  const errorMessageCode = {
    400: "Användarnamnet e-posten existerar. Kontrollera fälten",
    401: "Ej behörig", // In this case this is not needed cause we dont ask for any authorazation before creating an account.
    403: "Ej tillåtelse", // this might not occur but its if a user tries to create an account from a forbidden ip-adress
    409: "Användarnamn eller e-post existerar redan",
    422: "Ej behandlingsbart objekt",
    // felkod 500 tas redan upp av catchen i Post begäran.
    // 500: "Hoppsan! \n Ett oväntat fel har inträffat",
  };
  switch (errorcodes) {
    case 400:
    case 401:
    case 403:
    case 409:
    case 422:
    // case 500:
      return errorMessageCode[errorcodes];
      default:
        return "Okänt fel"
  }
};
