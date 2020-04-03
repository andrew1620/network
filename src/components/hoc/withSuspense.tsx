import React from "react";
import Preloader from "../common/Preloader";

const withSuspense = (Component: React.ComponentType<any>) => {
  return (props: any) => (
    <React.Suspense fallback={<Preloader />}>
      <Component {...props} />
    </React.Suspense>
  );
};
export default withSuspense;
