import { IShortenedLinkSuccessResponse } from '.';
import { localStorage } from '../utils';
import { EndPoints } from '../utils/apiEndpoints';
import { makeRequest } from '../utils/rest';

export const LinkShortnerService = {
  shortenLink: async function (urlToBeShortened: string) {
    const url = `${EndPoints.SHORTEN_LINK}?url=${urlToBeShortened}`;
    return await makeRequest.get({ url });
  },
  getLinks: function () {
    return localStorage.fetch('links') || [];
  },
  saveLinks: function (links: IShortenedLinkSuccessResponse[]) {
    localStorage.save('links', links);
  },
};
