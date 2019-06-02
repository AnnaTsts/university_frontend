export const environment = {
  production: false,
  ws: 'http://localhost:51862/socket'
  // ws: '/socket'
};

export const title = 'TripGod';

export const BASE_URL = 'http://localhost:51862/';
// export const BASE_URL = "/";


export const LOGIN_URL = BASE_URL + 'signin';
export const REGISTRATION_URL = BASE_URL + 'api/Account/Register';
export const REGISTRATION_SPECIAL_USER_URL = BASE_URL + 'api/account/users';
export const PASSWORD_RECOVERY_URL = BASE_URL + 'api/auth/recovery';
export const REGISTRATION_CONFIRM_URL = BASE_URL + 'api/auth/sign-up/';

export const GET_ALL_USERS = BASE_URL + 'api/account/users';
export const GET_CURRENT_USER = BASE_URL + 'api/account/summary';
export const GET_USER_BY_ID = BASE_URL + 'api/account/summary/';

export const GET_CURR_USER_SUMM = BASE_URL + 'api/Summary';



export const DELETE_USER_BY_ID = BASE_URL + 'api/account/users';

export const EDIT_SUMMARY = BASE_URL + 'api/account/summary/edit';
export const CHANGE_PASSWORD_SUMMARY = BASE_URL + 'api/account/summary/changePassword';

export const GET_ALL_CHAIR = BASE_URL + 'api/Chair';
export const GET_ALL_GROUP = BASE_URL + 'api/Group';

export const GET_ALL_SUBJECT = BASE_URL + 'api/Subject/All';
export const GET_ALL_SUBJECT_BY_TEACHER = BASE_URL + 'api/TeacherSubject/teacher';



export const GET_ALL_GROUP_BY_TEACHER = BASE_URL + 'api/Group/Teacher';

export const GET_ALL_MARK_BY_TEACHER_AND_GROUP = BASE_URL + 'api/TeacherMark/TeacherSubject';


export const GRAVATAR_BASE_URL = 'https://www.gravatar.com/avatar/';

