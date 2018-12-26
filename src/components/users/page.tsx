import * as React from 'react';
import { UserEntity } from '../../model';
import { userAPI } from '../../api/user';

interface State {
  users: UserEntity[];
}
interface Props {

}
export class UsersPage extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  public componentDidMount() {
    userAPI.fetchUsers()
      .then((users) => {
        this.setState({ users });
      });
  }

  public render() {
    return (
      <div className="row">
        <h2> users Page</h2>
        <table className="table">
          <thead>
            {UserHeader()}
          </thead>
          <tbody>
            {this.state.users.map(UserRow)}
          </tbody>
        </table>
      </div>
    );
  }
};

const UserHeader = () => {
  return (
    <tr>
      <th>Avatar</th>
      <th>Id</th>
      <th>Name</th>
    </tr>
  );
}

const UserRow = (user: UserEntity) => {
  return (
    <tr key={user.id}>
      <td>
        <img src={user.avatar_url} className="avatar" />
      </td>
      <td>
        <span>{user.id}</span>
      </td>
      <td>
        <span>{user.login}</span>
      </td>
    </tr>
  )
}
