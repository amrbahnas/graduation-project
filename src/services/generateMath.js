import axios from "axios";

const tryGenerate = async (subjectname, range, operator) => {
  const content =
    subjectname === "math"
      ? ` Generate 5 ${operator} problems within the range of ${range[0]} to ${range[1]}, each with three options, in the format: "{number: {num1: <num1>, num2: <num2>, operator: '<operator>'}, choices: [<choice1>, <choice2>, <choice3>]}" all problems inside one array.`
      : "";

  const options = {
    method: "POST",
    url: "https://chatgpt-api8.p.rapidapi.com/",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "30a778433amsh44ef6344d5a0937p1ca66cjsn5fdd378a630a",
      "X-RapidAPI-Host": "chatgpt-api8.p.rapidapi.com",
    },
    data: [
      {
        content,
        role: "user",
      },
    ],
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    const data = JSON.parse(response.data);
    if (Array.isArray(data)) return data;
    else return [];
  } catch (error) {
    console.error(error);
  }
};

export default tryGenerate;
