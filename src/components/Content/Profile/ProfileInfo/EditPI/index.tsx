import React, { useEffect } from "react";
import css from "./style.module.css";
import { connect } from "react-redux";

import EditPIForm from "./EditPIForm";
import {
  updateProfileInfo,
  toggleIsPIUpdated,
  ProfileType,
  InfoType
} from "../../../../../redux/profileReducer";
import ChangesSaved from "../../../../common/Notifications/ChangesSaved";
import { AppStateType } from "../../../../../redux/store";

type mstpType = {
  updateProfileInfo: (info: InfoType) => void;
  toggleIsPIUpdated: (isPIUpdated: boolean) => void;
};
type mdtpType = {
  isPIUpdated: boolean;
  profile: ProfileType;
};
type Props = mstpType & mdtpType;

//EditProfileInfo
const EditPI: React.FC<Props> = ({
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

  const handleSubmit = (formData: FormData) => {
    const data = { ...formData, aboutMe: "Good", fullName: "andrew" };
    updateProfileInfo(data);
  };

  return (
    <div className={css.container}>
      <div className={css.header}>
        <span className={css.headerTitle}>Основное</span>
      </div>
      {isPIUpdated && <ChangesSaved />}
      <EditPIForm onSubmit={handleSubmit} initialValues={profile} />
    </div>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  isPIUpdated: state.profilePage.isPIUpdated,
  profile: state.profilePage.profile
});

export default connect(mapStateToProps, {
  updateProfileInfo,
  toggleIsPIUpdated
})(EditPI);

export type FormData = {
  lookingForAJob: string;
  lookingForAJobDescription: string;
};

//I think I've to move EditPI to Content or create a component 'Settings' and realise EditPI there.
//I'll change forms on this page with Routes
