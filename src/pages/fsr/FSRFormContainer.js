import { connect } from 'react-redux';
import FSRForm from './FSRForm';

import {
  toggleModal,
  nextStep,
  prevStep,
  getFSR,
  getSubjects,
  addSubject,
  deleteSubject,
  editSubject,
  changeSelected,
  getTimeslots,
  getResearches,
  addResearch,
  deleteResearch,
  editResearch,
  getCreativeWorks,
  addCreativeWork,
  deleteCreativeWork,
  editCreativeWork,
  getAdminWorks,
  addAdminWork,
  deleteAdminWork,
  editAdminWork,
  getExtAndCommServices,
  addExtAndCommService,
  deleteExtAndCommService,
  editExtAndCommService,
  getStudyLoad,
  editStudyLoad,
  getCourses,
  addCourse,
  deleteCourse,
  editCourse,
  getCourseScheds,
  getLtdPractOfProfs,
  editLtdPractOfProf,
  getAwards,
  editAward,
} from './duck';

const mapStateToProps = state => {
  const {
    isAddSubjectModalOpen,
    isAddCWorkModalOpen,
    isAddResearchModalOpen,
    isAddAdminWorkModalOpen,
    isAddExtAndCommServiceModalOpen,
    isAddCourseModalOpen,
    isAddConsultationHourModalOpen,
    isEditSubjectModalOpen,
    isEditResearchModalOpen,
    isEditCWorkModalOpen,
    isEditAdminWorkModalOpen,
    isEditExtAndCommServiceModalOpen,
    isEditCourseModalOpen,
    currentStep,
    fsr,
    subjects,
    subject,
    timeslots,
    researches,
    research,
    cworks,
    cwork,
    adminWorks,
    adminWork,
    extAndCommServices,
    extAndCommService,
    studyLoad,
    courses,
    course,
    courseScheds,
    ltdPractOfProf,
    award,
    isGettingFSR,
    isGettingSubjects,
    isAddingSubject,
    isAddingTimeslot,
    isEditingSubject,
    isGettingTimeslots,
    isGettingResearches,
    isAddingResearch,
    isEditingResearch,
    isGettingCWorks,
    isAddingCWork,
    isEditingCWork,
    isGettingAdminWorks,
    isAddingAdminWork,
    isEditingAdminWork,
    isGettingExtAndCommServices,
    isAddingExtAndCommService,
    isEditingExtAndCommService,
    isGettingStudyLoad,
    isEditingStudyLoad,
    isGettingCourses,
    isAddingCourse,
    isEditingCourse,
    isGettingCourseScheds,
    isAddingCourseSched,
    isGettingLtdPractOfProf,
    isEditingLtdPractOfProf,
    isGettingAward,
    isEditingAward,
  } = state.fsr;

  return {
    isAddSubjectModalOpen,
    isAddCWorkModalOpen,
    isAddResearchModalOpen,
    isAddAdminWorkModalOpen,
    isAddExtAndCommServiceModalOpen,
    isAddCourseModalOpen,
    isAddConsultationHourModalOpen,
    isEditSubjectModalOpen,
    isEditResearchModalOpen,
    isEditCWorkModalOpen,
    isEditAdminWorkModalOpen,
    isEditExtAndCommServiceModalOpen,
    isEditCourseModalOpen,
    currentStep,
    fsr,
    subjects,
    subject,
    timeslots,
    researches,
    research,
    cworks,
    cwork,
    adminWorks,
    adminWork,
    extAndCommServices,
    extAndCommService,
    studyLoad,
    courses,
    course,
    courseScheds,
    ltdPractOfProf,
    award,
    isGettingFSR,
    isGettingSubjects,
    isAddingSubject,
    isAddingTimeslot,
    isEditingSubject,
    isGettingTimeslots,
    isGettingResearches,
    isAddingResearch,
    isEditingResearch,
    isGettingCWorks,
    isAddingCWork,
    isEditingCWork,
    isGettingAdminWorks,
    isAddingAdminWork,
    isEditingAdminWork,
    isGettingExtAndCommServices,
    isAddingExtAndCommService,
    isEditingExtAndCommService,
    isGettingStudyLoad,
    isEditingStudyLoad,
    isGettingCourses,
    isAddingCourse,
    isEditingCourse,
    isGettingCourseScheds,
    isAddingCourseSched,
    isGettingLtdPractOfProf,
    isEditingLtdPractOfProf,
    isGettingAward,
    isEditingAward,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: modal => {
      dispatch(toggleModal(modal));
    },
    nextStep: () => {
      dispatch(nextStep());
    },
    prevStep: () => {
      dispatch(prevStep());
    },
    getFSR: id => {
      dispatch(getFSR(id));
    },
    getSubjects: query => {
      dispatch(getSubjects(query));
    },
    addSubject: subject => {
      dispatch(addSubject(subject));
    },
    deleteSubject: subjectID => {
      dispatch(deleteSubject(subjectID));
    },
    editSubject: (subjectID, body) => {
      dispatch(editSubject(subjectID, body));
    },
    changeSelected: data => {
      dispatch(changeSelected(data));
    },
    getTimeslots: query => {
      dispatch(getTimeslots(query));
    },
    getResearches: query => {
      dispatch(getResearches(query));
    },
    addResearch: research => {
      dispatch(addResearch(research));
    },
    deleteResearch: researchID => {
      dispatch(deleteResearch(researchID));
    },
    editResearch: (researchID, body) => {
      dispatch(editResearch(researchID, body));
    },
    getCreativeWorks: query => {
      dispatch(getCreativeWorks(query));
    },
    addCreativeWork: cwork => {
      dispatch(addCreativeWork(cwork));
    },
    deleteCreativeWork: creativeWorkID => {
      dispatch(deleteCreativeWork(creativeWorkID));
    },
    editCreativeWork: (creativeWorkID, body) => {
      dispatch(editCreativeWork(creativeWorkID, body));
    },
    getAdminWorks: query => {
      dispatch(getAdminWorks(query));
    },
    addAdminWork: adminWork => {
      dispatch(addAdminWork(adminWork));
    },
    deleteAdminWork: adminWorkID => {
      dispatch(deleteAdminWork(adminWorkID));
    },
    editAdminWork: (adminWorkID, body) => {
      dispatch(editAdminWork(adminWorkID, body));
    },
    getExtAndCommServices: query => {
      dispatch(getExtAndCommServices(query));
    },
    addExtAndCommService: extAndCommService => {
      dispatch(addExtAndCommService(extAndCommService));
    },
    deleteExtAndCommService: extAndCommServiceID => {
      dispatch(deleteExtAndCommService(extAndCommServiceID));
    },
    editExtAndCommService: (extAndCommServiceID, body) => {
      dispatch(editExtAndCommService(extAndCommServiceID, body));
    },
    getStudyLoad: id => {
      dispatch(getStudyLoad(id));
    },
    editStudyLoad: (id, body) => {
      dispatch(editStudyLoad(id, body));
    },
    getCourses: query => {
      dispatch(getCourses(query));
    },
    addCourse: course => {
      dispatch(addCourse(course));
    },
    deleteCourse: courseID => {
      dispatch(deleteCourse(courseID));
    },
    editCourse: (courseID, body) => {
      dispatch(editCourse(courseID, body));
    },
    getCourseScheds: query => {
      dispatch(getCourseScheds(query));
    },
    getLtdPractOfProfs: query => {
      dispatch(getLtdPractOfProfs(query));
    },
    editLtdPractOfProf: (limitedPracticeOfProfID, body) => {
      dispatch(editLtdPractOfProf(limitedPracticeOfProfID, body));
    },
    getAwards: query => {
      dispatch(getAwards(query));
    },
    editAward: (awardID, body) => {
      dispatch(editAward(awardID, body));
    },
  };
};

const FSRFormContainer = connect(mapStateToProps, mapDispatchToProps)(FSRForm);
export default FSRFormContainer;
