// @flow

// redux

type DispatchT = (action: ActionT | ThunkActionT) => any;
type ThunkActionT = (dispatch: DispatchT) => any;
type ActionT = { type: string, payload: Array<BoardT> };

export type { DispatchT, ThunkActionT, ActionT };

// 4chan

type BoardT = {|
  board: string,
  bump_limit: number,
  image_limit: number,
  is_archived: 1 | 0,
  max_comment_chars: number,
  max_filesize: number,
  max_webm_duration: number,
  max_webm_filesize: number,
  meta_description: string,
  pages: number,
  per_page: number,
  title: string,
  ws_board: 1 | 0,
  cooldowns: {|
    images: number,
    replies: number,
    threads: number
  |}
|};

type PostT = {|
  no: number,
  sticky: 1 | 0,
  closed: 1 | 0,
  now: string,
  name: string,
  com: string,
  filename: string,
  ext: string,
  w: number,
  h: number,
  tn_w: number,
  tn_h: number,
  tim: number,
  time: number,
  md5: string,
  fsize: number,
  resto: number,
  capcode: string,
  semantic_url: string,
  replies: number,
  images: number,
  image: null | string
|};

export type { BoardT };
