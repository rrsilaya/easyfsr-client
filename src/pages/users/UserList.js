import React, { Component } from 'react';
import { Row, Col } from 'antd';

import User from './User';

class UserList extends Component {
  render() {
    const { userData, expanded } = this.props;
    const gridConfig = { xl: expanded ? 6 : 4, lg: 8, sm: 12, xs: 24 };

    return (
      <Row type="flex" gutter={16}>
        {userData.map(user => (
          <Col {...gridConfig}>
            <User title={user.name} description={user.type} />
          </Col>
        ))}
      </Row>
    );
  }
}

export default UserList;