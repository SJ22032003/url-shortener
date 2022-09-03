const BaseURL = process.env.REACT_APP_BASE_URL;
const PublicKey = process.env.REACT_APP_KEY_PUBLIC;
const Domain = process.env.REACT_APP_MY_DOMAIN;

export const getURLShortener = async (payload) => {
  var inputData = {
    domain: Domain,
    originalURL: payload,
  };
  console.log(inputData, PublicKey, BaseURL);
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
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
