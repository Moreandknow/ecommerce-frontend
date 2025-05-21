import type { UseFetchOptions } from "#app";

export function useApi<T = unknown>(
  request: string | Ref<string>,
  options: UseFetchOptions<T>
) {
  const toast = useToast();
  const token = "";
  return useFetch(request, {
    onRequest({ options }) {
      if (token) {
        options.headers.set("Authorization", `Bearer ${token}`);
      }
    },
    onResponseError({ response }) {
      if (response._data.meta?.messages?.[0]) {
        toast.add({
          color: "red",
          title: response._data.meta.messages[0],
        });
      }
    },
    ...options,
  });
}

// const { data } = useApi("/get-product");
