import { UserEntity } from '../../model';
import { users } from './mockData';

const fetchUsers = (): Promise<UserEntity[]> => {
  return Promise.resolve(users);
};

export const userAPI = {
  fetchUsers,
};
