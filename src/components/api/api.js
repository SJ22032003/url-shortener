const BaseURL = process.env.REACT_APP_BASE_URL;
const PublicKey = process.env.REACT_APP_KEY_PUBLIC;
const Domain = process.env.REACT_APP_MY_DOMAIN;

export const getURLShortener = async (action) => {
  let data=null
  var inputData = {
    domain: Domain,
    originalURL: action.payload,
  };
  try {
    const response = await fetch(BaseURL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        authorization: PublicKey,
      },
      body: JSON.stringify(inputData),
    });
    data = await response.json();
    console.log(data , "INSIDE API");
  } catch (error) {
    console.log(error);
  }
  return data;
};
