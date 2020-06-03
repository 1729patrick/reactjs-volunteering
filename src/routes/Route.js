import React from "react";
import Layout from "../components/layout";

function Route({ isPublic, component: Component, ...props }) {
  if (isPublic) {
    return <Component {...props} />;
  }

  return (
    <Layout>
      <Component {...props} />
    </Layout>
  );
}

export default Route;
