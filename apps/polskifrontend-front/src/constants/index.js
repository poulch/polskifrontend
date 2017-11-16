/* eslint-disable import/prefer-default-export */

// home route actions
export const HOME_GET_BLOG_LIST = 'HOME_GET_BLOG_LIST';
export const HOME_GET_BLOG_LIST_SUCCESS = 'HOME_GET_BLOG_LIST_SUCCESS';
export const HOME_GET_BLOG_LIST_ERROR = 'HOME_GET_BLOG_LIST_ERROR';

export const HOME_SWITCH_TO_LIST_VIEW = 'HOME_SWITCH_TO_LIST_VIEW';
export const HOME_SWITCH_TO_LIST_VIEW_SUCCESS = 'HOME_SWITCH_TO_LIST_VIEW_SUCCESS';
export const HOME_SWITCH_TO_LIST_VIEW_ERROR = 'HOME_SWITCH_TO_LIST_VIEW_ERROR';

export const HOME_BLOG_PROPOSAL_URL_CHANGE = 'HOME_BLOG_PROPOSAL_URL_CHANGE';
export const HOME_ADD_LINK_TO_CLICKED = 'HOME_ADD_LINK_TO_CLICKED';

// login route actions
export const LOGIN_USER_CHANGED = 'LOGIN_USER_CHANGED';
export const LOGIN_PASSWORD_CHANGED = 'LOGIN_PASSWORD_CHANGED';

export const LOGIN_INVOKE = 'LOGIN_INVOKE';
export const LOGIN_INVOKE_SUCCESS = 'LOGIN_INVOKE_SUCCESS';
export const LOGIN_INVOKE_ERROR = 'LOGIN_INVOKE_ERROR';

// admin route actions
export const ADMIN_TOKEN_EXPIRED = 'ADMIN_TOKEN_EXPIRED';
export const ADMIN_RESET_STATE = 'ADMIN_TOKEN_RESET_STATE';
export const ADMIN_RESET_TOKEN = 'ADMIN_RESET_TOKEN';

export const ADMIN_GET_BLOG_LIST = 'ADMIN_GET_BLOG_LIST';
export const ADMIN_GET_BLOG_LIST_SUCCESS = 'ADMIN_GET_BLOG_LIST_SUCCESS';
export const ADMIN_GET_BLOG_LIST_ERROR = 'ADMIN_GET_BLOG_LIST_ERROR';

export const ADMIN_DELETE_BLOG_REQUEST = 'ADMIN_DELETE_BLOG_REQUEST';
export const ADMIN_DELETE_BLOG_REQUEST_CANCEL = 'ADMIN_DELETE_BLOG_REQUEST_CANCEL';

export const ADMIN_DELETE_BLOG = 'ADMIN_DELETE_BLOG';
export const ADMIN_DELETE_BLOG_SUCCESS = 'ADMIN_DELETE_BLOG_SUCCESS';
export const ADMIN_DELETE_BLOG_ERROR = 'ADMIN_DELETE_BLOG_ERROR';

export const ADMIN_NEW_BLOG_NAME_CHANGED = 'ADMIN_NEW_BLOG_NAME_CHANGED';
export const ADMIN_NEW_BLOG_URL_CHANGED = 'ADMIN_NEW_BLOG_URL_CHANGED';
export const ADMIN_NEW_BLOG_RSS_CHANGED = 'ADMIN_NEW_BLOG_RSS_CHANGED';

export const ADMIN_ADD_BLOG = 'ADMIN_ADD_BLOG';
export const ADMIN_ADD_BLOG_SUCCESS = 'ADMIN_ADD_BLOG_SUCCESS';
export const ADMIN_ADD_BLOG_ERROR = 'ADMIN_ADD_BLOG_ERROR';

export const ADMIN_BLOG_REFRESH = 'ADMIN_BLOG_REFRESH';
export const ADMIN_BLOG_REFRESH_SUCCESS = 'ADMIN_BLOG_REFRESH_SUCCESS';
export const ADMIN_BLOG_REFRESH_ERROR = 'ADMIN_BLOG_REFRESH_ERROR';

// submit actions
export const SUBMIT_URL_CHANGED = 'SUBMIT_URL_CHANGED';
export const SUBMIT_URL_CHANGED_VALID = 'SUBMIT_URL_CHANGED_VALID';
export const SUBMIT_EMAIL_CHANGED = 'SUBMIT_EMAIL_CHANGED';
export const SUBMIT_EMAIL_CHANGED_VALID = 'SUBMIT_EMAIL_CHANGED_VALID';
export const SUBMIT_CAPTCHA_CHANGED = 'SUBMIT_CAPTCHA_CHANGED';

export const SUBMIT_BLOG_SEND = 'SUBMIT_BLOG_SEND';
export const SUBMIT_BLOG_SEND_SUCCESS = 'SUBMIT_BLOG_SEND_SUCCESS';
export const SUBMIT_BLOG_SEND_ERROR = 'SUBMIT_BLOG_SEND_ERROR';

export const SUBMIT_RESET_STATE = 'SUBMIT_RESET_STATE';

// feedback actions
export const FEEDBACK_EMAIL_CHANGED = 'FEEDBACK_EMAIL_CHANGED';
export const FEEDBACK_TEXT_CHANGED = 'FEEDBACK_TEXT_CHANGED';
export const FEEDBACK_CAPTCHA_CHANGED = 'FEEDBACK_CAPTCHA_CHANGED';

export const FEEDBACK_SEND = 'FEEDBACK_SEND';
export const FEEDBACK_SEND_SUCCESS = 'FEEDBACK_SEND_SUCCESS';
export const FEEDBACK_SEND_ERROR = 'FEEDBACK_SEND_ERROR';

export const FEEDBACK_RESET_STATE = 'FEEDBACK_RESET_STATE';

// admin/news route actions
export const ADMIN_NEWS_GET_NEWS = 'ADMIN_NEWS_GET_NEWS';
export const ADMIN_NEWS_GET_NEWS_SUCCESS = 'ADMIN_NEWS_GET_NEWS_SUCCESS';
export const ADMIN_NEWS_GET_NEWS_ERROR = 'ADMIN_NEWS_GET_NEWS_ERROR';

export const ADMIN_NEWS_TITLE_CHANGED = 'ADMIN_NEWS_TITLE_CHANGED';
export const ADMIN_NEWS_MESSAGE_CHANGED = 'ADMIN_NEWS_MESSAGE_CHANGED';

export const ADMIN_NEWS_ADD_NEWS = 'ADMIN_NEWS_ADD_NEWS';
export const ADMIN_NEWS_ADD_NEWS_SUCCESS = 'ADMIN_NEWS_ADD_NEWS_SUCCESS';
export const ADMIN_NEWS_ADD_NEWS_ERROR = 'ADMIN_NEWS_ADD_NEWS_ERROR';

export const ADMIN_NEWS_DELETE_NEWS_REQUEST = 'ADMIN_NEWS_DELETE_NEWS_REQUEST';
export const ADMIN_NEWS_DELETE_NEWS_CANCEL = 'ADMIN_NEWS_DELETE_NEWS_CANCEL';

export const ADMIN_NEWS_DELETE_NEWS = 'ADMIN_NEWS_DELETE_NEWS';
export const ADMIN_NEWS_DELETE_NEWS_SUCCESS = 'ADMIN_NEWS_DELETE_NEWS_SUCCESS';
export const ADMIN_NEWS_DELETE_NEWS_ERROR = 'ADMIN_NEWS_DELETE_NEWS_ERROR';

export const ADMIN_SLUG_REFRESH = 'ADMIN_SLUG_REFRESH';
export const ADMIN_SLUG_REFRESH_SUCCESS = 'ADMIN_SLUG_REFRESH_SUCCESS';
export const ADMIN_SLUG_REFRESH_ERROR = 'ADMIN_SLUG_REFRESH_ERROR';

export const ADMIN_FAVICON_REFRESH = 'ADMIN_FAVICON_REFRESH';
export const ADMIN_FAVICON_REFRESH_SUCCESS = 'ADMIN_FAVICON_REFRESH_SUCCESS';
export const ADMIN_FAVICON_REFRESH_ERROR = 'ADMIN_FAVICON_REFRESH_ERROR';

// news actions
export const NEWS_GET_NEWS_PAGE = 'NEWS_GET_NEWS_PAGE';
export const NEWS_GET_NEWS_PAGE_SUCCESS = 'NEWS_GET_NEWS_PAGE_SUCCESS';
export const NEWS_GET_NEWS_PAGE_ERROR = 'NEWS_GET_NEWS_PAGE_ERROR';

// articles actions
export const ARTICLES_CLEAR_DATA_LOADED = 'ARTICLES_CLEAR_DATA_LOADED';

export const ARTICLES_GET_ARTICLE = 'ARTICLES_GET_ARTICLE';
export const ARTICLES_GET_ARTICLE_SUCCESS = 'ARTICLES_GET_ARTICLE_SUCCESS';
export const ARTICLES_GET_ARTICLE_ERROR = 'ARTICLES_GET_ARTICLE_ERROR';
