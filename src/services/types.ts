export interface IShortenedLinkResponse {
  ok: boolean;
  result: IShortenedLinkSuccessResponse;
}

export interface IShortenedLinkErrorResponse {
  ok: boolean;
  error_code: number;
  error: string;
}

export interface IShortenedLinkSuccessResponse {
  code: string;
  full_share_link: string;
  full_short_link: string;
  full_short_link2: string;
  full_short_link3: string;
  original_link: string;
  share_link: string;
  short_link: string;
  short_link2: string;
  short_link3: string;
}
