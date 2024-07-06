import { useQuery } from "@tanstack/vue-query";
import { axiosInstance } from "~/lib/axios-custom";
import type { Product } from "~/types/product";
import type { ResponseProductShow } from "~/types/responses";

export const useQueryProducts = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      return axiosInstance
        .get<ResponseProductShow>("/product/show")
        .then((res) => res.data?.data);
    },
  });

  return { isLoading, data, error };
};
