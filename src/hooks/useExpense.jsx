import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "../api/expense";

const useExpense = () => {
  const {
    data: expenses = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["expenses"],
    queryFn: getExpenses,
  });

  return { expenses, isLoading, error };
};

export default useExpense;
