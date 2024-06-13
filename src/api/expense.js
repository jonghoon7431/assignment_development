import axios from "axios";

const JSON_SERVER_URL = "http://localhost:5000";

export const getExpenses = async () => {
  try {
    const response = await axios.get(`${JSON_SERVER_URL}/expenses`);

    return response.data;
  } catch (error) {
    alert("비상 비상 문제 발생~! 데이터 부를 수 없음 ~");
  }
};

export const postExpense = async (newExpense) => {
  try {
    const response = await axios.post(
      `${JSON_SERVER_URL}/expenses`,
      newExpense
    );
    alert("저장 완료");
    return response.data;
  } catch (error) {
    console.log(error);
    alert("비상 비상 문제 발생~! 항목 추가 실패 ~");
  }
};
