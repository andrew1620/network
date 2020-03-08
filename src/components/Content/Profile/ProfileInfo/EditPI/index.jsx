import React, { useEffect } from "react";
import css from "./style.module.css";
import { connect } from "react-redux";

import EditPIForm from "./EditPIForm";
import {
  updateProfileInfo,
  toggleIsPIUpdated
} from "../../../../../redux/profileReducer";
import ChangesSaved from "../../../../common/Notifications/ChangesSaved";

//EditProfileInfo
const EditPI = ({
  updateProfileInfo,
  isPIUpdated,
  toggleIsPIUpdated,
  profile
}) => {
  useEffect(() => {
    return () => {
      toggleIsPIUpdated(false);
    };
  }, [toggleIsPIUpdated]);

  const handleSubmit = formData => {
    const data = { ...formData, aboutMe: "Good", fullName: "andrew" };
    updateProfileInfo(data);
  };

  return (
    <div className={css.container}>
      {isPIUpdated && <ChangesSaved />}
      <EditPIForm onSubmit={handleSubmit} initialValues={profile} />
    </div>
  );
};

const mapStateToProps = state => ({
  isPIUpdated: state.profilePage.isPIUpdated,
  profile: state.profilePage.profile
});

export default connect(mapStateToProps, {
  updateProfileInfo,
  toggleIsPIUpdated
})(EditPI);

//I think I've to move EditPI to Content or create a component 'Settings' and realise EditPI there.
//I'll change forms on this page with Routes
