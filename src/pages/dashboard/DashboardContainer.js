import { connect } from 'react-redux';
import Dashboard from './Dashboard';

import {
  toggleModal,
  searchUser,
  addNotification,
  addAnnouncement,
} from './duck';

const mapStateToProps = state => {
  const {
    isSendNotificationModalOpen,
    isCreateFSRModalOpen,
    isCreateAnnouncementModalOpen,
    isSettingsModalOpen,

    isAddingNotification,
    isAddingAnnouncement,

    user,
    searchedUsers,
  } = state.dashboard;

  return {
    isSendNotificationModalOpen,
    isCreateFSRModalOpen,
    isCreateAnnouncementModalOpen,
    isSettingsModalOpen,

    isAddingNotification,
    isAddingAnnouncement,

    user,
    searchedUsers,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: modal => {
      dispatch(toggleModal(modal));
    },
    searchUser: query => {
      dispatch(searchUser(query));
    },
    addNotification: values => {
      dispatch(addNotification(values));
    },
    addAnnouncement: values => {
      dispatch(addAnnouncement(values));
    },
  };
};

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(
  Dashboard,
);
export default DashboardContainer;
