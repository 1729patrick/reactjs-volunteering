import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import { useUser } from "../../context/UserContext";

export default withRouter(function SignOut({ history }) {
    const { onSetUser } = useUser();
    onSetUser({});

    return <Redirect to="/login" />;
});