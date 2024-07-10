import { useQuery } from "@tanstack/react-query";

type CustomHooksParams = {
  data?: object[],
  error?: Error,
  queryKey?: string
}

export function useQueryMock({ data, error, queryKey }: CustomHooksParams) {
  return useQuery({ queryKey: [queryKey], queryFn: () => {
    if (error instanceof Error) throw error
    return data;
  } })
}