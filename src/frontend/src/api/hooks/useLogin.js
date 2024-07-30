import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '../instance';
import { endpoint } from '../path';

const loginRequest = async (data) => {
  const requestData = {
    username: data.id,
    password: data.password,
  };
  const response = await axiosInstance.post(`${endpoint.AUTH}/login`, requestData);
  return response;
};

const useLogin = () => {
  return useMutation({
    mutationFn: loginRequest,
    onSuccess: (response) => {
      if (response.status === 200) {
        const { nickname } = response.data.user;
        const authorizationHeader = response.headers.authorization;
        const accessToken = authorizationHeader ? authorizationHeader.split(' ')[1] : null;
        localStorage.setItem('nickname', nickname);
        localStorage.setItem('token', accessToken);
      }
    },
  });
};

export default useLogin;
