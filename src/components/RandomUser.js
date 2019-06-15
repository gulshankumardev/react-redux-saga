import React, { Component } from "react";
import { connect } from "react-redux";
import { requestLogin } from "../actions/userActions";
import UserProfile from "./UserProfile";

class RandomUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "?gender="
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      query: e.target.value
    });
  }

  render() {
    const { user, requestLogin } = this.props;
    const { query } = this.state;

    return (
      <div className="randomUser">
        <button onClick={() => requestLogin(query)} className="btn">
          Random User
        </button>
        <input
          className="form-input"
          type="text"
          onChange={this.handleChange}
          value={query}
        />
        {user && <UserProfile user={user} />}
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = dispatch => ({
  requestLogin: query => {
    query = Boolean(query) ? query : "";
    return dispatch(requestLogin(query));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomUser);
