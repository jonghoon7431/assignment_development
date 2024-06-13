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
//특정 항목(디테일 데이터) 가져오기
export const getExpense = async ({ queryKey }) => {
  const [_, id] = queryKey;
  try {
    const response = await axios.get(`${JSON_SERVER_URL}/expenses/${id}`);
    return response.data;
  } catch (error) {
    alert("비상 비상 문제 발생 ~! 해당 데이터 부를 수 없음 ~");
  }
};
//추가
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
//수정
export const putExpense = async (updatedExpense) => {
  const { id, ...rest } = updatedExpense;
  try {
    const response = await axios.put(`${JSON_SERVER_URL}/expenses/${id}`, rest);
    return response.data;
  } catch (error) {
    console.log(error);
    alert("비상 비상 문제 발생 ~! 수정 실패 ~");
  }
};
//삭제
export const deleteExpense = async (id) => {
  try {
    const response = await axios.delete(`${JSON_SERVER_URL}/expenses/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    alert("비상 비상 문제 발생 ~! 삭제 실패 ~");
  }
};
