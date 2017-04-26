import * as constants from '../constants';
import { ajax } from 'rxjs/observable/dom/ajax';
import { apiUrl } from '../config';
import * as loginHelper from '../core/helpers/loginHelper';

export const getAdminNewsListEpic = action$ => {
  return action$.ofType(constants.ADMIN_NEWS_GET_NEWS)
    .mergeMap(() => {
      const headers = {
        'authorization': 'Basic YnVyY3p1OmFiY2RmcmJrMzQwMzQxZmRzZnZkcw==',
        'x-access-token': loginHelper.getLoginToken()
      };

      return ajax.get(`${apiUrl}/admin/news`, headers)
        .map(responseData => {
          if (responseData.response.success === false && responseData.response.reason === 'bad-token') {
            return {
              type: constants.ADMIN_TOKEN_EXPIRED
            };
          }

          return {
            type: constants.ADMIN_NEWS_GET_NEWS_SUCCESS,
            payload: responseData.response.newses
          };
        })
        .catch(error => ({
          type: constants.ADMIN_NEWS_GET_NEWS_ERROR,
          payload: error
        }));
    });
};
