import { esaApiBase as api } from "./esaApiBase";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTeams: build.query<GetTeamsApiResponse, GetTeamsApiArg>({
      query: (queryArg) => ({
        url: `/teams`,
        params: { page: queryArg.page, per_page: queryArg.perPage },
      }),
    }),
    getTeam: build.query<GetTeamApiResponse, GetTeamApiArg>({
      query: (queryArg) => ({ url: `/teams/${queryArg.teamName}` }),
    }),
    batchMoveCategory: build.mutation<
      BatchMoveCategoryApiResponse,
      BatchMoveCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/categories/batch_move`,
        method: "POST",
        body: queryArg.batchMoveOptions,
      }),
    }),
    getComments: build.query<GetCommentsApiResponse, GetCommentsApiArg>({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/comments`,
        params: { page: queryArg.page, per_page: queryArg.perPage },
      }),
    }),
    getComment: build.query<GetCommentApiResponse, GetCommentApiArg>({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/comments/${queryArg.commentId}`,
        params: { include: queryArg.include },
      }),
    }),
    updateComment: build.mutation<
      UpdateCommentApiResponse,
      UpdateCommentApiArg
    >({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/comments/${queryArg.commentId}`,
        method: "PATCH",
        body: queryArg.updateCommentBody,
      }),
    }),
    deleteComment: build.mutation<
      DeleteCommentApiResponse,
      DeleteCommentApiArg
    >({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/comments/${queryArg.commentId}`,
        method: "DELETE",
      }),
    }),
    starComment: build.mutation<StarCommentApiResponse, StarCommentApiArg>({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/comments/${queryArg.commentId}/star`,
        method: "POST",
        body: queryArg.newStar,
      }),
    }),
    unstarComment: build.mutation<
      UnstarCommentApiResponse,
      UnstarCommentApiArg
    >({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/comments/${queryArg.commentId}/star`,
        method: "DELETE",
      }),
    }),
    getCommentStargazers: build.query<
      GetCommentStargazersApiResponse,
      GetCommentStargazersApiArg
    >({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/comments/${queryArg.commentId}/stargazers`,
        params: { page: queryArg.page, per_page: queryArg.perPage },
      }),
    }),
    getEmojis: build.query<GetEmojisApiResponse, GetEmojisApiArg>({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/emojis`,
        params: { include: queryArg.include },
      }),
    }),
    createEmoji: build.mutation<CreateEmojiApiResponse, CreateEmojiApiArg>({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/emojis`,
        method: "POST",
        body: queryArg.createEmojiBody,
      }),
    }),
    deleteEmoji: build.mutation<DeleteEmojiApiResponse, DeleteEmojiApiArg>({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/emojis/${queryArg.code}`,
        method: "DELETE",
      }),
    }),
    getInvitations: build.query<
      GetInvitationsApiResponse,
      GetInvitationsApiArg
    >({
      query: (queryArg) => ({ url: `/teams/${queryArg.teamName}/invitations` }),
    }),
    invite: build.mutation<InviteApiResponse, InviteApiArg>({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/invitations`,
        method: "POST",
        body: queryArg.inviteBody,
      }),
    }),
    disinvite: build.mutation<DisinviteApiResponse, DisinviteApiArg>({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/invitations/${queryArg.code}`,
        method: "DELETE",
      }),
    }),
    getMembers: build.query<GetMembersApiResponse, GetMembersApiArg>({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/members`,
        params: {
          sort: queryArg.sort,
          order: queryArg.order,
          page: queryArg.page,
          per_page: queryArg.perPage,
        },
      }),
    }),
    deleteMember: build.mutation<DeleteMemberApiResponse, DeleteMemberApiArg>({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/members/${queryArg.screenName}`,
        method: "DELETE",
      }),
    }),
    getPosts: build.query<GetPostsApiResponse, GetPostsApiArg>({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/posts`,
        params: {
          q: queryArg.q,
          include: queryArg.include,
          sort: queryArg.sort,
          order: queryArg.order,
          page: queryArg.page,
          per_page: queryArg.perPage,
        },
      }),
    }),
    createPost: build.mutation<CreatePostApiResponse, CreatePostApiArg>({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/posts`,
        method: "POST",
        body: queryArg.createPostBody,
      }),
    }),
    getPost: build.query<GetPostApiResponse, GetPostApiArg>({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/posts/${queryArg.postNumber}`,
        params: { include: queryArg.include },
      }),
    }),
    updatePost: build.mutation<UpdatePostApiResponse, UpdatePostApiArg>({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/posts/${queryArg.postNumber}`,
        method: "PATCH",
        body: queryArg.updatePostBody,
      }),
    }),
    deletePost: build.mutation<DeletePostApiResponse, DeletePostApiArg>({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/posts/${queryArg.postNumber}`,
        method: "DELETE",
      }),
    }),
    getPostComments: build.query<
      GetPostCommentsApiResponse,
      GetPostCommentsApiArg
    >({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/posts/${queryArg.postNumber}/comments`,
        params: { page: queryArg.page, per_page: queryArg.perPage },
      }),
    }),
    createComment: build.mutation<
      CreateCommentApiResponse,
      CreateCommentApiArg
    >({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/posts/${queryArg.postNumber}/comments`,
        method: "POST",
        body: queryArg.createCommentBody,
        params: { page: queryArg.page, per_page: queryArg.perPage },
      }),
    }),
    starPost: build.mutation<StarPostApiResponse, StarPostApiArg>({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/posts/${queryArg.postNumber}/star`,
        method: "POST",
        body: queryArg.newStar,
      }),
    }),
    unstarPost: build.mutation<UnstarPostApiResponse, UnstarPostApiArg>({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/posts/${queryArg.postNumber}/star`,
        method: "DELETE",
      }),
    }),
    getPostStargazers: build.query<
      GetPostStargazersApiResponse,
      GetPostStargazersApiArg
    >({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/posts/${queryArg.postNumber}/stargazers`,
        params: { page: queryArg.page, per_page: queryArg.perPage },
      }),
    }),
    watchPost: build.mutation<WatchPostApiResponse, WatchPostApiArg>({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/posts/${queryArg.postNumber}/watch`,
        method: "POST",
      }),
    }),
    unwachPost: build.mutation<UnwachPostApiResponse, UnwachPostApiArg>({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/posts/${queryArg.postNumber}/watch`,
        method: "DELETE",
      }),
    }),
    getWatchers: build.query<GetWatchersApiResponse, GetWatchersApiArg>({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/posts/${queryArg.postNumber}/watchers`,
        params: { page: queryArg.page, per_page: queryArg.perPage },
      }),
    }),
    getTeamStats: build.query<GetTeamStatsApiResponse, GetTeamStatsApiArg>({
      query: (queryArg) => ({ url: `/teams/${queryArg.teamName}/stats` }),
    }),
    getTags: build.query<GetTagsApiResponse, GetTagsApiArg>({
      query: (queryArg) => ({
        url: `/teams/${queryArg.teamName}/tags`,
        params: { page: queryArg.page, per_page: queryArg.perPage },
      }),
    }),
    getAuthenticatedUser: build.query<
      GetAuthenticatedUserApiResponse,
      GetAuthenticatedUserApiArg
    >({
      query: (queryArg) => ({
        url: `/user`,
        params: { include: queryArg.include },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as esaApi };
export type GetTeamsApiResponse = /** status 200 成功 */ PaginatedTeams;
export type GetTeamsApiArg = {
  /** ページ番号 */
  page?: number;
  /** 1ページあたりに含まれる要素数 */
  perPage?: number;
};
export type GetTeamApiResponse = /** status 200 成功 */ Team;
export type GetTeamApiArg = {
  /** チーム名 */
  teamName: string;
};
export type BatchMoveCategoryApiResponse =
  /** status 200 成功 */ BatchMoveResult;
export type BatchMoveCategoryApiArg = {
  /** チーム名 */
  teamName: string;
  batchMoveOptions: BatchMoveOptions;
};
export type GetCommentsApiResponse = /** status 200 成功 */ PaginatedComments;
export type GetCommentsApiArg = {
  /** チーム名 */
  teamName: string;
  /** ページ番号 */
  page?: number;
  /** 1ページあたりに含まれる要素数 */
  perPage?: number;
};
export type GetCommentApiResponse = /** status 200 成功 */ Comment;
export type GetCommentApiArg = {
  /** チーム名 */
  teamName: string;
  /** コメントID */
  commentId: number;
  /** `stargazers`を指定するとStarの配列を含んだレスポンスを返します。 */
  include?: "stargazers";
};
export type UpdateCommentApiResponse = /** status 200 成功 */ Comment;
export type UpdateCommentApiArg = {
  /** チーム名 */
  teamName: string;
  /** コメントID */
  commentId: number;
  updateCommentBody: UpdateCommentBody;
};
export type DeleteCommentApiResponse = unknown;
export type DeleteCommentApiArg = {
  /** チーム名 */
  teamName: string;
  /** コメントID */
  commentId: number;
};
export type StarCommentApiResponse = unknown;
export type StarCommentApiArg = {
  /** チーム名 */
  teamName: string;
  /** コメントID */
  commentId: number;
  newStar: NewStar;
};
export type UnstarCommentApiResponse = unknown;
export type UnstarCommentApiArg = {
  /** チーム名 */
  teamName: string;
  /** コメントID */
  commentId: number;
};
export type GetCommentStargazersApiResponse =
  /** status 200 成功 */ PaginatedStargazers;
export type GetCommentStargazersApiArg = {
  /** チーム名 */
  teamName: string;
  /** コメントID */
  commentId: number;
  /** ページ番号 */
  page?: number;
  /** 1ページあたりに含まれる要素数 */
  perPage?: number;
};
export type GetEmojisApiResponse = /** status 200 成功 */ EmojiList;
export type GetEmojisApiArg = {
  /** チーム名 */
  teamName: string;
  /** `all`を指定すると、チーム固有の絵文字だけではなく、すべての絵文字を返します。 */
  include?: "all";
};
export type CreateEmojiApiResponse = /** status 201 成功 */ CreatedEmoji;
export type CreateEmojiApiArg = {
  /** チーム名 */
  teamName: string;
  createEmojiBody: CreateEmojiBody;
};
export type DeleteEmojiApiResponse = unknown;
export type DeleteEmojiApiArg = {
  /** チーム名 */
  teamName: string;
  /** 絵文字コード */
  code: string;
};
export type GetInvitationsApiResponse = /** status 200 成功 */ InvitationList;
export type GetInvitationsApiArg = {
  /** チーム名 */
  teamName: string;
};
export type InviteApiResponse = /** status 201 成功 */ InvitationList;
export type InviteApiArg = {
  /** チーム名 */
  teamName: string;
  inviteBody: InviteBody;
};
export type DisinviteApiResponse = unknown;
export type DisinviteApiArg = {
  /** チーム名 */
  teamName: string;
  /** 招待時の識別子を指定します */
  code: string;
};
export type GetMembersApiResponse = /** status 200 成功 */ PaginatedMembers;
export type GetMembersApiArg = {
  /** チーム名 */
  teamName: string;
  sort?: "posts_count" | "joined" | "last_accessed";
  /** 設定可能な値:
    
    - `desc`: 降順 (default)
    - `asc`: 昇順 */
  order?: "asc" | "desc";
  /** ページ番号 */
  page?: number;
  /** 1ページあたりに含まれる要素数 */
  perPage?: number;
};
export type DeleteMemberApiResponse = unknown;
export type DeleteMemberApiArg = {
  /** チーム名 */
  teamName: string;
  /** 削除するメンバーのscreen_name */
  screenName: string;
};
export type GetPostsApiResponse = /** status 200 成功 */ PaginatedPosts;
export type GetPostsApiArg = {
  /** チーム名 */
  teamName: string;
  /** 記事を絞り込むための条件を指定します */
  q?: string;
  /** - `comments` を指定するとコメントの配列を含んだレスポンスを返します。
    - `comments,comments.stargazers`を指定するとコメントとコメントに対するStarの配列を含んだレスポンスを返します。
    - `stargazers` を指定するとStarの配列を含んだレスポンスを返します。
    - `stargazers,comments` のように `,` で区切ることで複数指定できます */
  include?: ("comments" | "comments.stargazers" | "stargazers")[];
  /** 記事の並び順を指定します
    
    - 設定可能な値
      - `updated` (default)
          - 記事の更新日時
      - `created`
          - 記事の作成日時
      - `number`
          - 記事番号
      - `stars`
          - 記事へのStarの数
      - `watches`
          - 記事へのWatchの数
      - `comments`
          - 記事へのCommentの数
      - `best_match`
          - 総合的な記事のスコア */
  sort?:
    | "updated"
    | "created"
    | "number"
    | "stars"
    | "watches"
    | "comments"
    | "best_match";
  /** 設定可能な値:
    
    - `desc`: 降順 (default)
    - `asc`: 昇順 */
  order?: "asc" | "desc";
  /** ページ番号 */
  page?: number;
  /** 1ページあたりに含まれる要素数 */
  perPage?: number;
};
export type CreatePostApiResponse = /** status 201 成功 */ Post;
export type CreatePostApiArg = {
  /** チーム名 */
  teamName: string;
  createPostBody: CreatePostBody;
};
export type GetPostApiResponse = /** status 200 成功 */ Post;
export type GetPostApiArg = {
  /** チーム名 */
  teamName: string;
  /** 記事ID */
  postNumber: number;
  /** - `comments` を指定するとコメントの配列を含んだレスポンスを返します。
    - `comments,comments.stargazers`を指定するとコメントとコメントに対するStarの配列を含んだレスポンスを返します。
    - `stargazers` を指定するとStarの配列を含んだレスポンスを返します。
    - `stargazers,comments` のように `,` で区切ることで複数指定できます */
  include?: ("comments" | "comments.stargazers" | "stargazers")[];
};
export type UpdatePostApiResponse = /** status 200 成功 */ Post;
export type UpdatePostApiArg = {
  /** チーム名 */
  teamName: string;
  /** 記事ID */
  postNumber: number;
  updatePostBody: UpdatePostBody;
};
export type DeletePostApiResponse = unknown;
export type DeletePostApiArg = {
  /** チーム名 */
  teamName: string;
  /** 記事ID */
  postNumber: number;
};
export type GetPostCommentsApiResponse =
  /** status 200 成功 */ PaginatedComments;
export type GetPostCommentsApiArg = {
  /** チーム名 */
  teamName: string;
  /** 記事ID */
  postNumber: number;
  /** ページ番号 */
  page?: number;
  /** 1ページあたりに含まれる要素数 */
  perPage?: number;
};
export type CreateCommentApiResponse = /** status 200 成功 */ Comment;
export type CreateCommentApiArg = {
  /** チーム名 */
  teamName: string;
  /** 記事ID */
  postNumber: number;
  /** ページ番号 */
  page?: number;
  /** 1ページあたりに含まれる要素数 */
  perPage?: number;
  createCommentBody: CreateCommentBody;
};
export type StarPostApiResponse = unknown;
export type StarPostApiArg = {
  /** チーム名 */
  teamName: string;
  /** 記事ID */
  postNumber: number;
  newStar: NewStar;
};
export type UnstarPostApiResponse = unknown;
export type UnstarPostApiArg = {
  /** チーム名 */
  teamName: string;
  /** 記事ID */
  postNumber: number;
};
export type GetPostStargazersApiResponse =
  /** status 200 成功 */ PaginatedStargazers;
export type GetPostStargazersApiArg = {
  /** チーム名 */
  teamName: string;
  /** 記事ID */
  postNumber: number;
  /** ページ番号 */
  page?: number;
  /** 1ページあたりに含まれる要素数 */
  perPage?: number;
};
export type WatchPostApiResponse = unknown;
export type WatchPostApiArg = {
  /** チーム名 */
  teamName: string;
  /** 記事ID */
  postNumber: number;
};
export type UnwachPostApiResponse = unknown;
export type UnwachPostApiArg = {
  /** チーム名 */
  teamName: string;
  /** 記事ID */
  postNumber: number;
};
export type GetWatchersApiResponse = /** status 200 成功 */ PaginatedWatchers;
export type GetWatchersApiArg = {
  /** チーム名 */
  teamName: string;
  /** 記事ID */
  postNumber: number;
  /** ページ番号 */
  page?: number;
  /** 1ページあたりに含まれる要素数 */
  perPage?: number;
};
export type GetTeamStatsApiResponse = /** status 200 成功 */ TeamStats;
export type GetTeamStatsApiArg = {
  /** チーム名 */
  teamName: string;
};
export type GetTagsApiResponse = /** status 200 成功 */ PaginatedTags;
export type GetTagsApiArg = {
  /** チーム名 */
  teamName: string;
  /** ページ番号 */
  page?: number;
  /** 1ページあたりに含まれる要素数 */
  perPage?: number;
};
export type GetAuthenticatedUserApiResponse =
  /** status 200 成功 */ AuthenticatedUser;
export type GetAuthenticatedUserApiArg = {
  /** teams を指定すると所属するチームの配列を含んだレスポンスを返します。 */
  include?: "teams";
};
export type Team = {
  name: string;
  privacy: "closed" | "open";
  description: string;
  icon: string;
  url: string;
};
export type PaginatedTeams = {
  teams: Team[];
  prev_page: number | null;
  next_page: number | null;
  total_count: number;
  page: number;
  per_page: number;
  max_per_page: number;
};
export type BatchMoveResult = {
  from: string;
  to: string;
  count: number;
};
export type BatchMoveOptions = {
  from: string;
  to: string;
};
export type User = {
  myself: boolean;
  name: string;
  screen_name: string;
  icon: string;
};
export type Stargazer = {
  created_at: string;
  body: string | null;
  user: User;
};
export type Comment = {
  id: number;
  body_md: string;
  body_html: string;
  created_at: string;
  updated_at: string;
  post_number: number;
  url: string;
  created_by: User;
  stargazers_count: number;
  star: boolean;
  stargazers?: Stargazer[];
};
export type PaginatedComments = {
  comments: Comment[];
  prev_page: number | null;
  next_page: number | null;
  total_count: number;
  page: number;
  per_page: number;
  max_per_page: number;
};
export type UpdateCommentBody = {
  comment: {
    body_md?: string;
    user?: string;
  };
};
export type NewStar = {
  body?: string;
};
export type PaginatedStargazers = {
  stargazers: Stargazer[];
  prev_page: number | null;
  next_page: number | null;
  total_count: number;
  page: number;
  per_page: number;
  max_per_page: number;
};
export type Emoji = {
  code: string;
  aliases: string[];
  category: string;
  url: string;
};
export type EmojiList = {
  emojis: Emoji[];
};
export type CreatedEmoji = {
  code: string;
};
export type NewEmoji = {
  code: string;
  origin_code?: string;
  image?: Blob;
};
export type CreateEmojiBody = {
  emoji: NewEmoji;
};
export type Invitation = {
  email: string;
  code: string;
  expires_at: string;
  url: string;
};
export type InvitationList = {
  invitations: Invitation[];
};
export type InviteBody = {
  member: {
    emails: string[];
  };
};
export type Member = {
  myself: boolean;
  name: string;
  screen_name: string;
  icon: string;
  role: "owner" | "member";
  posts_count: number;
  joined_at: string;
  last_accessed_at: string;
  email?: string;
};
export type PaginatedMembers = {
  members: Member[];
  prev_page: number | null;
  next_page: number | null;
  total_count: number;
  page: number;
  per_page: number;
  max_per_page: number;
};
export type Post = {
  number: number;
  name: string;
  full_name: string;
  wip: boolean;
  body_md: string;
  body_html: string;
  created_at: string;
  message: string;
  url: string;
  updated_at: string;
  tags: string[];
  category: string | null;
  revision_number: number;
  created_by: User;
  updated_by: User;
  kind: "stock" | "flow";
  comments_count: number;
  tasks_count: number;
  done_tasks_count: number;
  stargazers_count: number;
  watchers_count: number;
  star: boolean;
  watch: boolean;
  sharing_urls: {
    html: string;
    slides: string;
  } | null;
  comments?: Comment[];
  stargazers?: Stargazer[];
};
export type PaginatedPosts = {
  posts: Post[];
  prev_page: number | null;
  next_page: number | null;
  total_count: number;
  page: number;
  per_page: number;
  max_per_page: number;
};
export type NewPost = {
  name: string;
  body_md?: string;
  tags?: string[];
  category?: string | null;
  wip?: boolean;
  message?: string;
  user?: string;
  template_post_id?: number;
};
export type CreatePostBody = {
  post: NewPost;
};
export type EditPost = {
  name?: string;
  body_md?: string;
  tags?: string[];
  category?: string | null;
  wip?: boolean;
  message?: string;
  created_by?: string;
  updated_by?: string;
  original_revision?: {
    body_md: string;
    number: number;
    user: string;
  };
};
export type UpdatePostBody = {
  post: EditPost;
};
export type NewComment = {
  body_md: string;
  user?: string;
};
export type CreateCommentBody = {
  comment: NewComment;
};
export type Watcher = {
  created_at: string;
  user: User;
};
export type PaginatedWatchers = {
  watchers: Watcher[];
  prev_page: number | null;
  next_page: number | null;
  total_count: number;
  page: number;
  per_page: number;
  max_per_page: number;
};
export type TeamStats = {
  members: number;
  posts: number;
  posts_wip: number;
  posts_shipped: number;
  comments: number;
  stars: number;
  daily_active_users: number;
  weekly_active_users: number;
  monthly_active_users: number;
};
export type Tag = {
  name: string;
  posts_count: number;
};
export type PaginatedTags = {
  tags: Tag[];
  prev_page: number | null;
  next_page: number | null;
  total_count: number;
  page: number;
  per_page: number;
  max_per_page: number;
};
export type AuthenticatedUser = {
  id: number;
  name: string;
  screen_name: string;
  created_at: string;
  updated_at: string;
  icon: string;
  email: string;
  teams?: Team[];
};
export const {
  useGetTeamsQuery,
  useGetTeamQuery,
  useBatchMoveCategoryMutation,
  useGetCommentsQuery,
  useGetCommentQuery,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
  useStarCommentMutation,
  useUnstarCommentMutation,
  useGetCommentStargazersQuery,
  useGetEmojisQuery,
  useCreateEmojiMutation,
  useDeleteEmojiMutation,
  useGetInvitationsQuery,
  useInviteMutation,
  useDisinviteMutation,
  useGetMembersQuery,
  useDeleteMemberMutation,
  useGetPostsQuery,
  useCreatePostMutation,
  useGetPostQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
  useGetPostCommentsQuery,
  useCreateCommentMutation,
  useStarPostMutation,
  useUnstarPostMutation,
  useGetPostStargazersQuery,
  useWatchPostMutation,
  useUnwachPostMutation,
  useGetWatchersQuery,
  useGetTeamStatsQuery,
  useGetTagsQuery,
  useGetAuthenticatedUserQuery,
} = injectedRtkApi;
