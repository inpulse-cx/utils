import useSWRMutation from "swr/mutation";
import POST from "../data/post";

function useMutation(key: string) {
  const { data, trigger, isMutating, error, reset }: any = useSWRMutation(
    key,
    POST
  );

  return {
    data,
    trigger,
    isLoading: isMutating,
    error,
    reset,
  };
}

export default useMutation;
