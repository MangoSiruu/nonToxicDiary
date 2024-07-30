import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '../instance';
import { endpoint } from '../path';

const signUpRequest = async (data) => {
  const response = await axiosInstance.post(`${endpoint.AUTH}/signup`, {
    username: data.id,
    password: data.password,
    nickname: data.nickname,
  });
  return response.data;
};

const useSignUp = () => {
  return useMutation({
    mutationFn: signUpRequest,
    onSuccess: () => {
      // store에 저장
    },
  });
};

export default useSignUp;
