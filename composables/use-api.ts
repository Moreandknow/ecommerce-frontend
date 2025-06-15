import type { UseFetchOptions } from "#app";

type UseApiOptions<T> = UseFetchOptions<T> & {
  showErrorToast?: boolean;
};

export function useApi<T = unknown>(
  request: string | Ref<string>,
  options: UseApiOptions<T> = {}
) {
  const toast = useToast();
  const session = useSession();
  const { showErrorToast = true, ...fetchOptions } = options;
  return useFetch(request, {
    ...fetchOptions,
    onRequest({ options }) {
      if (session.token) {
        options.headers.set("Authorization", `Bearer ${session.token}`);
      }
    },
    onResponseError({ response }) {
      if (showErrorToast && response._data.meta?.messages?.[0]) {
        toast.add({
          color: "red",
          title: response._data.meta.messages[0],
        });
      }
    },
    retry: false,
  });
}

// const { data } = useApi("/get-product");
