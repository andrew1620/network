import React, { useEffect } from "react";
import css from "./style.module.css";
import EditPIForm from "./EditPIForm";
import { connect } from "react-redux";
import {
  updateProfileInfo,
  toggleIsPIUpdated
} from "../../../../../redux/profileReducer";

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
      {isPIUpdated && (
        <div className={css.notification}>
          <span>
            <b>Изменения сохранены</b>
          </span>
          <div>Новые данные будут отражены на Вашей странице.</div>
        </div>
      )}
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
