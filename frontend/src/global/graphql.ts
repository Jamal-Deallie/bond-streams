import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    //@ts-ignore
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  Upload: any;
};

export type Actor = {
  __typename?: 'Actor';
  createdAt?: Maybe<Scalars['DateTime']>;
  img_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ActorEntity = {
  __typename?: 'ActorEntity';
  attributes?: Maybe<Actor>;
  id?: Maybe<Scalars['ID']>;
};

export type ActorEntityResponse = {
  __typename?: 'ActorEntityResponse';
  data?: Maybe<ActorEntity>;
};

export type ActorEntityResponseCollection = {
  __typename?: 'ActorEntityResponseCollection';
  data: Array<ActorEntity>;
  meta: ResponseCollectionMeta;
};

export type ActorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ActorFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  img_url?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ActorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ActorFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ActorInput = {
  img_url?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ActorRelationResponseCollection = {
  __typename?: 'ActorRelationResponseCollection';
  data: Array<ActorEntity>;
};

export type BondCollection = {
  __typename?: 'BondCollection';
  actor?: Maybe<ActorEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  movies?: Maybe<MovieRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type BondCollectionMoviesArgs = {
  filters?: InputMaybe<MovieFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BondCollectionEntity = {
  __typename?: 'BondCollectionEntity';
  attributes?: Maybe<BondCollection>;
  id?: Maybe<Scalars['ID']>;
};

export type BondCollectionEntityResponse = {
  __typename?: 'BondCollectionEntityResponse';
  data?: Maybe<BondCollectionEntity>;
};

export type BondCollectionEntityResponseCollection = {
  __typename?: 'BondCollectionEntityResponseCollection';
  data: Array<BondCollectionEntity>;
  meta: ResponseCollectionMeta;
};

export type BondCollectionFiltersInput = {
  actor?: InputMaybe<ActorFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<BondCollectionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  movies?: InputMaybe<MovieFiltersInput>;
  not?: InputMaybe<BondCollectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BondCollectionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BondCollectionInput = {
  actor?: InputMaybe<Scalars['ID']>;
  movies?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Cast = {
  __typename?: 'Cast';
  actors?: Maybe<ActorRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  movie?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CastActorsArgs = {
  filters?: InputMaybe<ActorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CastEntity = {
  __typename?: 'CastEntity';
  attributes?: Maybe<Cast>;
  id?: Maybe<Scalars['ID']>;
};

export type CastEntityResponse = {
  __typename?: 'CastEntityResponse';
  data?: Maybe<CastEntity>;
};

export type CastEntityResponseCollection = {
  __typename?: 'CastEntityResponseCollection';
  data: Array<CastEntity>;
  meta: ResponseCollectionMeta;
};

export type CastFiltersInput = {
  actors?: InputMaybe<ActorFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<CastFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  movie?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CastFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CastFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CastInput = {
  actors?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  movie?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Category = {
  __typename?: 'Category';
  category?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  category?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  category?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection';
  data: Array<CategoryEntity>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type Episode = {
  __typename?: 'Episode';
  createdAt?: Maybe<Scalars['DateTime']>;
  img_url?: Maybe<Scalars['String']>;
  plot?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EpisodeEntity = {
  __typename?: 'EpisodeEntity';
  attributes?: Maybe<Episode>;
  id?: Maybe<Scalars['ID']>;
};

export type EpisodeEntityResponse = {
  __typename?: 'EpisodeEntityResponse';
  data?: Maybe<EpisodeEntity>;
};

export type EpisodeEntityResponseCollection = {
  __typename?: 'EpisodeEntityResponseCollection';
  data: Array<EpisodeEntity>;
  meta: ResponseCollectionMeta;
};

export type EpisodeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EpisodeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  img_url?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EpisodeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EpisodeFiltersInput>>>;
  plot?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EpisodeInput = {
  img_url?: InputMaybe<Scalars['String']>;
  plot?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EpisodeRelationResponseCollection = {
  __typename?: 'EpisodeRelationResponseCollection';
  data: Array<EpisodeEntity>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = Actor | BondCollection | Cast | Category | Episode | I18NLocale | Movie | Season | TvShow | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Watchlist;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Movie = {
  __typename?: 'Movie';
  awardWon?: Maybe<Scalars['Boolean']>;
  cast?: Maybe<CastEntityResponse>;
  categories?: Maybe<CategoryRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  desk_img?: Maybe<Scalars['String']>;
  director?: Maybe<Scalars['String']>;
  mobile_img?: Maybe<Scalars['String']>;
  plot?: Maybe<Scalars['String']>;
  popularity?: Maybe<Scalars['Float']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  rating?: Maybe<Scalars['String']>;
  releaseYear?: Maybe<Scalars['String']>;
  runningTime?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  trailer?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  writer?: Maybe<Scalars['String']>;
};


export type MovieCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MovieEntity = {
  __typename?: 'MovieEntity';
  attributes?: Maybe<Movie>;
  id?: Maybe<Scalars['ID']>;
};

export type MovieEntityResponse = {
  __typename?: 'MovieEntityResponse';
  data?: Maybe<MovieEntity>;
};

export type MovieEntityResponseCollection = {
  __typename?: 'MovieEntityResponseCollection';
  data: Array<MovieEntity>;
  meta: ResponseCollectionMeta;
};

export type MovieFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MovieFiltersInput>>>;
  awardWon?: InputMaybe<BooleanFilterInput>;
  cast?: InputMaybe<CastFiltersInput>;
  categories?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  desk_img?: InputMaybe<StringFilterInput>;
  director?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mobile_img?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<MovieFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MovieFiltersInput>>>;
  plot?: InputMaybe<StringFilterInput>;
  popularity?: InputMaybe<FloatFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  rating?: InputMaybe<StringFilterInput>;
  releaseYear?: InputMaybe<StringFilterInput>;
  runningTime?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  thumbnail?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  trailer?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  writer?: InputMaybe<StringFilterInput>;
};

export type MovieInput = {
  awardWon?: InputMaybe<Scalars['Boolean']>;
  cast?: InputMaybe<Scalars['ID']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  desk_img?: InputMaybe<Scalars['String']>;
  director?: InputMaybe<Scalars['String']>;
  mobile_img?: InputMaybe<Scalars['String']>;
  plot?: InputMaybe<Scalars['String']>;
  popularity?: InputMaybe<Scalars['Float']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  rating?: InputMaybe<Scalars['String']>;
  releaseYear?: InputMaybe<Scalars['String']>;
  runningTime?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  trailer?: InputMaybe<Scalars['String']>;
  writer?: InputMaybe<Scalars['String']>;
};

export type MovieRelationResponseCollection = {
  __typename?: 'MovieRelationResponseCollection';
  data: Array<MovieEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createActor?: Maybe<ActorEntityResponse>;
  createBondCollection?: Maybe<BondCollectionEntityResponse>;
  createCast?: Maybe<CastEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createEpisode?: Maybe<EpisodeEntityResponse>;
  createMovie?: Maybe<MovieEntityResponse>;
  createSeason?: Maybe<SeasonEntityResponse>;
  createTvShow?: Maybe<TvShowEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createWatchlist?: Maybe<WatchlistEntityResponse>;
  deleteActor?: Maybe<ActorEntityResponse>;
  deleteBondCollection?: Maybe<BondCollectionEntityResponse>;
  deleteCast?: Maybe<CastEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteEpisode?: Maybe<EpisodeEntityResponse>;
  deleteMovie?: Maybe<MovieEntityResponse>;
  deleteSeason?: Maybe<SeasonEntityResponse>;
  deleteTvShow?: Maybe<TvShowEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteWatchlist?: Maybe<WatchlistEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateActor?: Maybe<ActorEntityResponse>;
  updateBondCollection?: Maybe<BondCollectionEntityResponse>;
  updateCast?: Maybe<CastEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateEpisode?: Maybe<EpisodeEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateMovie?: Maybe<MovieEntityResponse>;
  updateSeason?: Maybe<SeasonEntityResponse>;
  updateTvShow?: Maybe<TvShowEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateWatchlist?: Maybe<WatchlistEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateActorArgs = {
  data: ActorInput;
};


export type MutationCreateBondCollectionArgs = {
  data: BondCollectionInput;
};


export type MutationCreateCastArgs = {
  data: CastInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateEpisodeArgs = {
  data: EpisodeInput;
};


export type MutationCreateMovieArgs = {
  data: MovieInput;
};


export type MutationCreateSeasonArgs = {
  data: SeasonInput;
};


export type MutationCreateTvShowArgs = {
  data: TvShowInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateWatchlistArgs = {
  data: WatchlistInput;
};


export type MutationDeleteActorArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBondCollectionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCastArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEpisodeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMovieArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSeasonArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTvShowArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWatchlistArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateActorArgs = {
  data: ActorInput;
  id: Scalars['ID'];
};


export type MutationUpdateBondCollectionArgs = {
  data: BondCollectionInput;
  id: Scalars['ID'];
};


export type MutationUpdateCastArgs = {
  data: CastInput;
  id: Scalars['ID'];
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID'];
};


export type MutationUpdateEpisodeArgs = {
  data: EpisodeInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateMovieArgs = {
  data: MovieInput;
  id: Scalars['ID'];
};


export type MutationUpdateSeasonArgs = {
  data: SeasonInput;
  id: Scalars['ID'];
};


export type MutationUpdateTvShowArgs = {
  data: TvShowInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUpdateWatchlistArgs = {
  data: WatchlistInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  actor?: Maybe<ActorEntityResponse>;
  actors?: Maybe<ActorEntityResponseCollection>;
  bondCollection?: Maybe<BondCollectionEntityResponse>;
  bondCollections?: Maybe<BondCollectionEntityResponseCollection>;
  cast?: Maybe<CastEntityResponse>;
  casts?: Maybe<CastEntityResponseCollection>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  episode?: Maybe<EpisodeEntityResponse>;
  episodes?: Maybe<EpisodeEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  movie?: Maybe<MovieEntityResponse>;
  movies?: Maybe<MovieEntityResponseCollection>;
  season?: Maybe<SeasonEntityResponse>;
  seasons?: Maybe<SeasonEntityResponseCollection>;
  tvShow?: Maybe<TvShowEntityResponse>;
  tvShows?: Maybe<TvShowEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  watchlist?: Maybe<WatchlistEntityResponse>;
  watchlists?: Maybe<WatchlistEntityResponseCollection>;
};


export type QueryActorArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryActorsArgs = {
  filters?: InputMaybe<ActorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryBondCollectionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryBondCollectionsArgs = {
  filters?: InputMaybe<BondCollectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCastArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCastsArgs = {
  filters?: InputMaybe<CastFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEpisodeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEpisodesArgs = {
  filters?: InputMaybe<EpisodeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMovieArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryMoviesArgs = {
  filters?: InputMaybe<MovieFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySeasonArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySeasonsArgs = {
  filters?: InputMaybe<SeasonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTvShowArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTvShowsArgs = {
  filters?: InputMaybe<TvShowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryWatchlistArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryWatchlistsArgs = {
  filters?: InputMaybe<WatchlistFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Season = {
  __typename?: 'Season';
  createdAt?: Maybe<Scalars['DateTime']>;
  episodes?: Maybe<EpisodeRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type SeasonEpisodesArgs = {
  filters?: InputMaybe<EpisodeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SeasonEntity = {
  __typename?: 'SeasonEntity';
  attributes?: Maybe<Season>;
  id?: Maybe<Scalars['ID']>;
};

export type SeasonEntityResponse = {
  __typename?: 'SeasonEntityResponse';
  data?: Maybe<SeasonEntity>;
};

export type SeasonEntityResponseCollection = {
  __typename?: 'SeasonEntityResponseCollection';
  data: Array<SeasonEntity>;
  meta: ResponseCollectionMeta;
};

export type SeasonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SeasonFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  episodes?: InputMaybe<EpisodeFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<SeasonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SeasonFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SeasonInput = {
  episodes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type TvShow = {
  __typename?: 'TvShow';
  actors?: Maybe<ActorRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  genre?: Maybe<Scalars['String']>;
  plot?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  rating?: Maybe<Scalars['String']>;
  releaseDate?: Maybe<Scalars['String']>;
  season?: Maybe<SeasonEntityResponse>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type TvShowActorsArgs = {
  filters?: InputMaybe<ActorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TvShowEntity = {
  __typename?: 'TvShowEntity';
  attributes?: Maybe<TvShow>;
  id?: Maybe<Scalars['ID']>;
};

export type TvShowEntityResponse = {
  __typename?: 'TvShowEntityResponse';
  data?: Maybe<TvShowEntity>;
};

export type TvShowEntityResponseCollection = {
  __typename?: 'TvShowEntityResponseCollection';
  data: Array<TvShowEntity>;
  meta: ResponseCollectionMeta;
};

export type TvShowFiltersInput = {
  actors?: InputMaybe<ActorFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<TvShowFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  genre?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TvShowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TvShowFiltersInput>>>;
  plot?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  rating?: InputMaybe<StringFilterInput>;
  releaseDate?: InputMaybe<StringFilterInput>;
  season?: InputMaybe<SeasonFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TvShowInput = {
  actors?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  genre?: InputMaybe<Scalars['String']>;
  plot?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  rating?: InputMaybe<Scalars['String']>;
  releaseDate?: InputMaybe<Scalars['String']>;
  season?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
  watchlist?: Maybe<WatchlistEntityResponse>;
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  first_name?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  last_name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
  watchlist?: InputMaybe<WatchlistFiltersInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
  watchlist?: InputMaybe<Scalars['ID']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type Watchlist = {
  __typename?: 'Watchlist';
  createdAt?: Maybe<Scalars['DateTime']>;
  movies?: Maybe<MovieRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users_permissions_users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type WatchlistMoviesArgs = {
  filters?: InputMaybe<MovieFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type WatchlistUsers_Permissions_UsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type WatchlistEntity = {
  __typename?: 'WatchlistEntity';
  attributes?: Maybe<Watchlist>;
  id?: Maybe<Scalars['ID']>;
};

export type WatchlistEntityResponse = {
  __typename?: 'WatchlistEntityResponse';
  data?: Maybe<WatchlistEntity>;
};

export type WatchlistEntityResponseCollection = {
  __typename?: 'WatchlistEntityResponseCollection';
  data: Array<WatchlistEntity>;
  meta: ResponseCollectionMeta;
};

export type WatchlistFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<WatchlistFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  movies?: InputMaybe<MovieFiltersInput>;
  not?: InputMaybe<WatchlistFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WatchlistFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users_permissions_users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type WatchlistInput = {
  movies?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  users_permissions_users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type GetThumbnailQueryVariables = Exact<{ [key: string]: never; }>;


export type GetThumbnailQuery = { __typename?: 'Query', movies?: { __typename?: 'MovieEntityResponseCollection', data: Array<{ __typename?: 'MovieEntity', attributes?: { __typename?: 'Movie', slug?: string | null, thumbnail?: string | null, trailer?: string | null, plot?: string | null, title?: string | null, rating?: string | null, runningTime?: string | null } | null }> } | null };


export const GetThumbnailDocument = `
    query getThumbnail {
  movies {
    data {
      attributes {
        slug
        thumbnail
        trailer
        plot
        title
        rating
        runningTime
      }
    }
  }
}
    `;
export const useGetThumbnailQuery = <
      TData = GetThumbnailQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetThumbnailQueryVariables,
      options?: UseQueryOptions<GetThumbnailQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetThumbnailQuery, TError, TData>(
      variables === undefined ? ['getThumbnail'] : ['getThumbnail', variables],
      fetcher<GetThumbnailQuery, GetThumbnailQueryVariables>(client, GetThumbnailDocument, variables, headers),
      options
    );


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Actor: ResolverTypeWrapper<Actor>;
  ActorEntity: ResolverTypeWrapper<ActorEntity>;
  ActorEntityResponse: ResolverTypeWrapper<ActorEntityResponse>;
  ActorEntityResponseCollection: ResolverTypeWrapper<ActorEntityResponseCollection>;
  ActorFiltersInput: ActorFiltersInput;
  ActorInput: ActorInput;
  ActorRelationResponseCollection: ResolverTypeWrapper<ActorRelationResponseCollection>;
  BondCollection: ResolverTypeWrapper<BondCollection>;
  BondCollectionEntity: ResolverTypeWrapper<BondCollectionEntity>;
  BondCollectionEntityResponse: ResolverTypeWrapper<BondCollectionEntityResponse>;
  BondCollectionEntityResponseCollection: ResolverTypeWrapper<BondCollectionEntityResponseCollection>;
  BondCollectionFiltersInput: BondCollectionFiltersInput;
  BondCollectionInput: BondCollectionInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BooleanFilterInput: BooleanFilterInput;
  Cast: ResolverTypeWrapper<Cast>;
  CastEntity: ResolverTypeWrapper<CastEntity>;
  CastEntityResponse: ResolverTypeWrapper<CastEntityResponse>;
  CastEntityResponseCollection: ResolverTypeWrapper<CastEntityResponseCollection>;
  CastFiltersInput: CastFiltersInput;
  CastInput: CastInput;
  Category: ResolverTypeWrapper<Category>;
  CategoryEntity: ResolverTypeWrapper<CategoryEntity>;
  CategoryEntityResponse: ResolverTypeWrapper<CategoryEntityResponse>;
  CategoryEntityResponseCollection: ResolverTypeWrapper<CategoryEntityResponseCollection>;
  CategoryFiltersInput: CategoryFiltersInput;
  CategoryInput: CategoryInput;
  CategoryRelationResponseCollection: ResolverTypeWrapper<CategoryRelationResponseCollection>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DateTimeFilterInput: DateTimeFilterInput;
  Episode: ResolverTypeWrapper<Episode>;
  EpisodeEntity: ResolverTypeWrapper<EpisodeEntity>;
  EpisodeEntityResponse: ResolverTypeWrapper<EpisodeEntityResponse>;
  EpisodeEntityResponseCollection: ResolverTypeWrapper<EpisodeEntityResponseCollection>;
  EpisodeFiltersInput: EpisodeFiltersInput;
  EpisodeInput: EpisodeInput;
  EpisodeRelationResponseCollection: ResolverTypeWrapper<EpisodeRelationResponseCollection>;
  FileInfoInput: FileInfoInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  FloatFilterInput: FloatFilterInput;
  GenericMorph: ResolversTypes['Actor'] | ResolversTypes['BondCollection'] | ResolversTypes['Cast'] | ResolversTypes['Category'] | ResolversTypes['Episode'] | ResolversTypes['I18NLocale'] | ResolversTypes['Movie'] | ResolversTypes['Season'] | ResolversTypes['TvShow'] | ResolversTypes['UploadFile'] | ResolversTypes['UploadFolder'] | ResolversTypes['UsersPermissionsPermission'] | ResolversTypes['UsersPermissionsRole'] | ResolversTypes['UsersPermissionsUser'] | ResolversTypes['Watchlist'];
  I18NLocale: ResolverTypeWrapper<I18NLocale>;
  I18NLocaleEntity: ResolverTypeWrapper<I18NLocaleEntity>;
  I18NLocaleEntityResponse: ResolverTypeWrapper<I18NLocaleEntityResponse>;
  I18NLocaleEntityResponseCollection: ResolverTypeWrapper<I18NLocaleEntityResponseCollection>;
  I18NLocaleFiltersInput: I18NLocaleFiltersInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IDFilterInput: IdFilterInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IntFilterInput: IntFilterInput;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONFilterInput: JsonFilterInput;
  Movie: ResolverTypeWrapper<Movie>;
  MovieEntity: ResolverTypeWrapper<MovieEntity>;
  MovieEntityResponse: ResolverTypeWrapper<MovieEntityResponse>;
  MovieEntityResponseCollection: ResolverTypeWrapper<MovieEntityResponseCollection>;
  MovieFiltersInput: MovieFiltersInput;
  MovieInput: MovieInput;
  MovieRelationResponseCollection: ResolverTypeWrapper<MovieRelationResponseCollection>;
  Mutation: ResolverTypeWrapper<{}>;
  Pagination: ResolverTypeWrapper<Pagination>;
  PaginationArg: PaginationArg;
  PublicationState: PublicationState;
  Query: ResolverTypeWrapper<{}>;
  ResponseCollectionMeta: ResolverTypeWrapper<ResponseCollectionMeta>;
  Season: ResolverTypeWrapper<Season>;
  SeasonEntity: ResolverTypeWrapper<SeasonEntity>;
  SeasonEntityResponse: ResolverTypeWrapper<SeasonEntityResponse>;
  SeasonEntityResponseCollection: ResolverTypeWrapper<SeasonEntityResponseCollection>;
  SeasonFiltersInput: SeasonFiltersInput;
  SeasonInput: SeasonInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringFilterInput: StringFilterInput;
  TvShow: ResolverTypeWrapper<TvShow>;
  TvShowEntity: ResolverTypeWrapper<TvShowEntity>;
  TvShowEntityResponse: ResolverTypeWrapper<TvShowEntityResponse>;
  TvShowEntityResponseCollection: ResolverTypeWrapper<TvShowEntityResponseCollection>;
  TvShowFiltersInput: TvShowFiltersInput;
  TvShowInput: TvShowInput;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  UploadFile: ResolverTypeWrapper<Omit<UploadFile, 'related'> & { related?: Maybe<Array<Maybe<ResolversTypes['GenericMorph']>>> }>;
  UploadFileEntity: ResolverTypeWrapper<UploadFileEntity>;
  UploadFileEntityResponse: ResolverTypeWrapper<UploadFileEntityResponse>;
  UploadFileEntityResponseCollection: ResolverTypeWrapper<UploadFileEntityResponseCollection>;
  UploadFileFiltersInput: UploadFileFiltersInput;
  UploadFileInput: UploadFileInput;
  UploadFileRelationResponseCollection: ResolverTypeWrapper<UploadFileRelationResponseCollection>;
  UploadFolder: ResolverTypeWrapper<UploadFolder>;
  UploadFolderEntity: ResolverTypeWrapper<UploadFolderEntity>;
  UploadFolderEntityResponse: ResolverTypeWrapper<UploadFolderEntityResponse>;
  UploadFolderEntityResponseCollection: ResolverTypeWrapper<UploadFolderEntityResponseCollection>;
  UploadFolderFiltersInput: UploadFolderFiltersInput;
  UploadFolderInput: UploadFolderInput;
  UploadFolderRelationResponseCollection: ResolverTypeWrapper<UploadFolderRelationResponseCollection>;
  UsersPermissionsCreateRolePayload: ResolverTypeWrapper<UsersPermissionsCreateRolePayload>;
  UsersPermissionsDeleteRolePayload: ResolverTypeWrapper<UsersPermissionsDeleteRolePayload>;
  UsersPermissionsLoginInput: UsersPermissionsLoginInput;
  UsersPermissionsLoginPayload: ResolverTypeWrapper<UsersPermissionsLoginPayload>;
  UsersPermissionsMe: ResolverTypeWrapper<UsersPermissionsMe>;
  UsersPermissionsMeRole: ResolverTypeWrapper<UsersPermissionsMeRole>;
  UsersPermissionsPasswordPayload: ResolverTypeWrapper<UsersPermissionsPasswordPayload>;
  UsersPermissionsPermission: ResolverTypeWrapper<UsersPermissionsPermission>;
  UsersPermissionsPermissionEntity: ResolverTypeWrapper<UsersPermissionsPermissionEntity>;
  UsersPermissionsPermissionFiltersInput: UsersPermissionsPermissionFiltersInput;
  UsersPermissionsPermissionRelationResponseCollection: ResolverTypeWrapper<UsersPermissionsPermissionRelationResponseCollection>;
  UsersPermissionsRegisterInput: UsersPermissionsRegisterInput;
  UsersPermissionsRole: ResolverTypeWrapper<UsersPermissionsRole>;
  UsersPermissionsRoleEntity: ResolverTypeWrapper<UsersPermissionsRoleEntity>;
  UsersPermissionsRoleEntityResponse: ResolverTypeWrapper<UsersPermissionsRoleEntityResponse>;
  UsersPermissionsRoleEntityResponseCollection: ResolverTypeWrapper<UsersPermissionsRoleEntityResponseCollection>;
  UsersPermissionsRoleFiltersInput: UsersPermissionsRoleFiltersInput;
  UsersPermissionsRoleInput: UsersPermissionsRoleInput;
  UsersPermissionsUpdateRolePayload: ResolverTypeWrapper<UsersPermissionsUpdateRolePayload>;
  UsersPermissionsUser: ResolverTypeWrapper<UsersPermissionsUser>;
  UsersPermissionsUserEntity: ResolverTypeWrapper<UsersPermissionsUserEntity>;
  UsersPermissionsUserEntityResponse: ResolverTypeWrapper<UsersPermissionsUserEntityResponse>;
  UsersPermissionsUserEntityResponseCollection: ResolverTypeWrapper<UsersPermissionsUserEntityResponseCollection>;
  UsersPermissionsUserFiltersInput: UsersPermissionsUserFiltersInput;
  UsersPermissionsUserInput: UsersPermissionsUserInput;
  UsersPermissionsUserRelationResponseCollection: ResolverTypeWrapper<UsersPermissionsUserRelationResponseCollection>;
  Watchlist: ResolverTypeWrapper<Watchlist>;
  WatchlistEntity: ResolverTypeWrapper<WatchlistEntity>;
  WatchlistEntityResponse: ResolverTypeWrapper<WatchlistEntityResponse>;
  WatchlistEntityResponseCollection: ResolverTypeWrapper<WatchlistEntityResponseCollection>;
  WatchlistFiltersInput: WatchlistFiltersInput;
  WatchlistInput: WatchlistInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Actor: Actor;
  ActorEntity: ActorEntity;
  ActorEntityResponse: ActorEntityResponse;
  ActorEntityResponseCollection: ActorEntityResponseCollection;
  ActorFiltersInput: ActorFiltersInput;
  ActorInput: ActorInput;
  ActorRelationResponseCollection: ActorRelationResponseCollection;
  BondCollection: BondCollection;
  BondCollectionEntity: BondCollectionEntity;
  BondCollectionEntityResponse: BondCollectionEntityResponse;
  BondCollectionEntityResponseCollection: BondCollectionEntityResponseCollection;
  BondCollectionFiltersInput: BondCollectionFiltersInput;
  BondCollectionInput: BondCollectionInput;
  Boolean: Scalars['Boolean'];
  BooleanFilterInput: BooleanFilterInput;
  Cast: Cast;
  CastEntity: CastEntity;
  CastEntityResponse: CastEntityResponse;
  CastEntityResponseCollection: CastEntityResponseCollection;
  CastFiltersInput: CastFiltersInput;
  CastInput: CastInput;
  Category: Category;
  CategoryEntity: CategoryEntity;
  CategoryEntityResponse: CategoryEntityResponse;
  CategoryEntityResponseCollection: CategoryEntityResponseCollection;
  CategoryFiltersInput: CategoryFiltersInput;
  CategoryInput: CategoryInput;
  CategoryRelationResponseCollection: CategoryRelationResponseCollection;
  DateTime: Scalars['DateTime'];
  DateTimeFilterInput: DateTimeFilterInput;
  Episode: Episode;
  EpisodeEntity: EpisodeEntity;
  EpisodeEntityResponse: EpisodeEntityResponse;
  EpisodeEntityResponseCollection: EpisodeEntityResponseCollection;
  EpisodeFiltersInput: EpisodeFiltersInput;
  EpisodeInput: EpisodeInput;
  EpisodeRelationResponseCollection: EpisodeRelationResponseCollection;
  FileInfoInput: FileInfoInput;
  Float: Scalars['Float'];
  FloatFilterInput: FloatFilterInput;
  GenericMorph: ResolversParentTypes['Actor'] | ResolversParentTypes['BondCollection'] | ResolversParentTypes['Cast'] | ResolversParentTypes['Category'] | ResolversParentTypes['Episode'] | ResolversParentTypes['I18NLocale'] | ResolversParentTypes['Movie'] | ResolversParentTypes['Season'] | ResolversParentTypes['TvShow'] | ResolversParentTypes['UploadFile'] | ResolversParentTypes['UploadFolder'] | ResolversParentTypes['UsersPermissionsPermission'] | ResolversParentTypes['UsersPermissionsRole'] | ResolversParentTypes['UsersPermissionsUser'] | ResolversParentTypes['Watchlist'];
  I18NLocale: I18NLocale;
  I18NLocaleEntity: I18NLocaleEntity;
  I18NLocaleEntityResponse: I18NLocaleEntityResponse;
  I18NLocaleEntityResponseCollection: I18NLocaleEntityResponseCollection;
  I18NLocaleFiltersInput: I18NLocaleFiltersInput;
  ID: Scalars['ID'];
  IDFilterInput: IdFilterInput;
  Int: Scalars['Int'];
  IntFilterInput: IntFilterInput;
  JSON: Scalars['JSON'];
  JSONFilterInput: JsonFilterInput;
  Movie: Movie;
  MovieEntity: MovieEntity;
  MovieEntityResponse: MovieEntityResponse;
  MovieEntityResponseCollection: MovieEntityResponseCollection;
  MovieFiltersInput: MovieFiltersInput;
  MovieInput: MovieInput;
  MovieRelationResponseCollection: MovieRelationResponseCollection;
  Mutation: {};
  Pagination: Pagination;
  PaginationArg: PaginationArg;
  Query: {};
  ResponseCollectionMeta: ResponseCollectionMeta;
  Season: Season;
  SeasonEntity: SeasonEntity;
  SeasonEntityResponse: SeasonEntityResponse;
  SeasonEntityResponseCollection: SeasonEntityResponseCollection;
  SeasonFiltersInput: SeasonFiltersInput;
  SeasonInput: SeasonInput;
  String: Scalars['String'];
  StringFilterInput: StringFilterInput;
  TvShow: TvShow;
  TvShowEntity: TvShowEntity;
  TvShowEntityResponse: TvShowEntityResponse;
  TvShowEntityResponseCollection: TvShowEntityResponseCollection;
  TvShowFiltersInput: TvShowFiltersInput;
  TvShowInput: TvShowInput;
  Upload: Scalars['Upload'];
  UploadFile: Omit<UploadFile, 'related'> & { related?: Maybe<Array<Maybe<ResolversParentTypes['GenericMorph']>>> };
  UploadFileEntity: UploadFileEntity;
  UploadFileEntityResponse: UploadFileEntityResponse;
  UploadFileEntityResponseCollection: UploadFileEntityResponseCollection;
  UploadFileFiltersInput: UploadFileFiltersInput;
  UploadFileInput: UploadFileInput;
  UploadFileRelationResponseCollection: UploadFileRelationResponseCollection;
  UploadFolder: UploadFolder;
  UploadFolderEntity: UploadFolderEntity;
  UploadFolderEntityResponse: UploadFolderEntityResponse;
  UploadFolderEntityResponseCollection: UploadFolderEntityResponseCollection;
  UploadFolderFiltersInput: UploadFolderFiltersInput;
  UploadFolderInput: UploadFolderInput;
  UploadFolderRelationResponseCollection: UploadFolderRelationResponseCollection;
  UsersPermissionsCreateRolePayload: UsersPermissionsCreateRolePayload;
  UsersPermissionsDeleteRolePayload: UsersPermissionsDeleteRolePayload;
  UsersPermissionsLoginInput: UsersPermissionsLoginInput;
  UsersPermissionsLoginPayload: UsersPermissionsLoginPayload;
  UsersPermissionsMe: UsersPermissionsMe;
  UsersPermissionsMeRole: UsersPermissionsMeRole;
  UsersPermissionsPasswordPayload: UsersPermissionsPasswordPayload;
  UsersPermissionsPermission: UsersPermissionsPermission;
  UsersPermissionsPermissionEntity: UsersPermissionsPermissionEntity;
  UsersPermissionsPermissionFiltersInput: UsersPermissionsPermissionFiltersInput;
  UsersPermissionsPermissionRelationResponseCollection: UsersPermissionsPermissionRelationResponseCollection;
  UsersPermissionsRegisterInput: UsersPermissionsRegisterInput;
  UsersPermissionsRole: UsersPermissionsRole;
  UsersPermissionsRoleEntity: UsersPermissionsRoleEntity;
  UsersPermissionsRoleEntityResponse: UsersPermissionsRoleEntityResponse;
  UsersPermissionsRoleEntityResponseCollection: UsersPermissionsRoleEntityResponseCollection;
  UsersPermissionsRoleFiltersInput: UsersPermissionsRoleFiltersInput;
  UsersPermissionsRoleInput: UsersPermissionsRoleInput;
  UsersPermissionsUpdateRolePayload: UsersPermissionsUpdateRolePayload;
  UsersPermissionsUser: UsersPermissionsUser;
  UsersPermissionsUserEntity: UsersPermissionsUserEntity;
  UsersPermissionsUserEntityResponse: UsersPermissionsUserEntityResponse;
  UsersPermissionsUserEntityResponseCollection: UsersPermissionsUserEntityResponseCollection;
  UsersPermissionsUserFiltersInput: UsersPermissionsUserFiltersInput;
  UsersPermissionsUserInput: UsersPermissionsUserInput;
  UsersPermissionsUserRelationResponseCollection: UsersPermissionsUserRelationResponseCollection;
  Watchlist: Watchlist;
  WatchlistEntity: WatchlistEntity;
  WatchlistEntityResponse: WatchlistEntityResponse;
  WatchlistEntityResponseCollection: WatchlistEntityResponseCollection;
  WatchlistFiltersInput: WatchlistFiltersInput;
  WatchlistInput: WatchlistInput;
};

export type ActorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Actor'] = ResolversParentTypes['Actor']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  img_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActorEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActorEntity'] = ResolversParentTypes['ActorEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['Actor']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActorEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActorEntityResponse'] = ResolversParentTypes['ActorEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['ActorEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActorEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActorEntityResponseCollection'] = ResolversParentTypes['ActorEntityResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['ActorEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActorRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActorRelationResponseCollection'] = ResolversParentTypes['ActorRelationResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['ActorEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BondCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BondCollection'] = ResolversParentTypes['BondCollection']> = {
  actor?: Resolver<Maybe<ResolversTypes['ActorEntityResponse']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  movies?: Resolver<Maybe<ResolversTypes['MovieRelationResponseCollection']>, ParentType, ContextType, RequireFields<BondCollectionMoviesArgs, 'pagination' | 'publicationState' | 'sort'>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BondCollectionEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['BondCollectionEntity'] = ResolversParentTypes['BondCollectionEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['BondCollection']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BondCollectionEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['BondCollectionEntityResponse'] = ResolversParentTypes['BondCollectionEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['BondCollectionEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BondCollectionEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BondCollectionEntityResponseCollection'] = ResolversParentTypes['BondCollectionEntityResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['BondCollectionEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CastResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cast'] = ResolversParentTypes['Cast']> = {
  actors?: Resolver<Maybe<ResolversTypes['ActorRelationResponseCollection']>, ParentType, ContextType, RequireFields<CastActorsArgs, 'pagination' | 'publicationState' | 'sort'>>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  movie?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CastEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['CastEntity'] = ResolversParentTypes['CastEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['Cast']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CastEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CastEntityResponse'] = ResolversParentTypes['CastEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['CastEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CastEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CastEntityResponseCollection'] = ResolversParentTypes['CastEntityResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['CastEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryEntity'] = ResolversParentTypes['CategoryEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryEntityResponse'] = ResolversParentTypes['CategoryEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['CategoryEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryEntityResponseCollection'] = ResolversParentTypes['CategoryEntityResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['CategoryEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryRelationResponseCollection'] = ResolversParentTypes['CategoryRelationResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['CategoryEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type EpisodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Episode'] = ResolversParentTypes['Episode']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  img_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  plot?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EpisodeEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['EpisodeEntity'] = ResolversParentTypes['EpisodeEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['Episode']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EpisodeEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EpisodeEntityResponse'] = ResolversParentTypes['EpisodeEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['EpisodeEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EpisodeEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EpisodeEntityResponseCollection'] = ResolversParentTypes['EpisodeEntityResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['EpisodeEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EpisodeRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EpisodeRelationResponseCollection'] = ResolversParentTypes['EpisodeRelationResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['EpisodeEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenericMorphResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenericMorph'] = ResolversParentTypes['GenericMorph']> = {
  __resolveType: TypeResolveFn<'Actor' | 'BondCollection' | 'Cast' | 'Category' | 'Episode' | 'I18NLocale' | 'Movie' | 'Season' | 'TvShow' | 'UploadFile' | 'UploadFolder' | 'UsersPermissionsPermission' | 'UsersPermissionsRole' | 'UsersPermissionsUser' | 'Watchlist', ParentType, ContextType>;
};

export type I18NLocaleResolvers<ContextType = any, ParentType extends ResolversParentTypes['I18NLocale'] = ResolversParentTypes['I18NLocale']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type I18NLocaleEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['I18NLocaleEntity'] = ResolversParentTypes['I18NLocaleEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['I18NLocale']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type I18NLocaleEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['I18NLocaleEntityResponse'] = ResolversParentTypes['I18NLocaleEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['I18NLocaleEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type I18NLocaleEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['I18NLocaleEntityResponseCollection'] = ResolversParentTypes['I18NLocaleEntityResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['I18NLocaleEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MovieResolvers<ContextType = any, ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie']> = {
  awardWon?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  cast?: Resolver<Maybe<ResolversTypes['CastEntityResponse']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<ResolversTypes['CategoryRelationResponseCollection']>, ParentType, ContextType, RequireFields<MovieCategoriesArgs, 'pagination' | 'publicationState' | 'sort'>>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  desk_img?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  director?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mobile_img?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  plot?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  popularity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  releaseYear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  runningTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trailer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  writer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MovieEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieEntity'] = ResolversParentTypes['MovieEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MovieEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieEntityResponse'] = ResolversParentTypes['MovieEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['MovieEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MovieEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieEntityResponseCollection'] = ResolversParentTypes['MovieEntityResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['MovieEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MovieRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieRelationResponseCollection'] = ResolversParentTypes['MovieRelationResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['MovieEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  changePassword?: Resolver<Maybe<ResolversTypes['UsersPermissionsLoginPayload']>, ParentType, ContextType, RequireFields<MutationChangePasswordArgs, 'currentPassword' | 'password' | 'passwordConfirmation'>>;
  createActor?: Resolver<Maybe<ResolversTypes['ActorEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateActorArgs, 'data'>>;
  createBondCollection?: Resolver<Maybe<ResolversTypes['BondCollectionEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateBondCollectionArgs, 'data'>>;
  createCast?: Resolver<Maybe<ResolversTypes['CastEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateCastArgs, 'data'>>;
  createCategory?: Resolver<Maybe<ResolversTypes['CategoryEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'data'>>;
  createEpisode?: Resolver<Maybe<ResolversTypes['EpisodeEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateEpisodeArgs, 'data'>>;
  createMovie?: Resolver<Maybe<ResolversTypes['MovieEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateMovieArgs, 'data'>>;
  createSeason?: Resolver<Maybe<ResolversTypes['SeasonEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateSeasonArgs, 'data'>>;
  createTvShow?: Resolver<Maybe<ResolversTypes['TvShowEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateTvShowArgs, 'data'>>;
  createUploadFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateUploadFileArgs, 'data'>>;
  createUploadFolder?: Resolver<Maybe<ResolversTypes['UploadFolderEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateUploadFolderArgs, 'data'>>;
  createUsersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsCreateRolePayload']>, ParentType, ContextType, RequireFields<MutationCreateUsersPermissionsRoleArgs, 'data'>>;
  createUsersPermissionsUser?: Resolver<ResolversTypes['UsersPermissionsUserEntityResponse'], ParentType, ContextType, RequireFields<MutationCreateUsersPermissionsUserArgs, 'data'>>;
  createWatchlist?: Resolver<Maybe<ResolversTypes['WatchlistEntityResponse']>, ParentType, ContextType, RequireFields<MutationCreateWatchlistArgs, 'data'>>;
  deleteActor?: Resolver<Maybe<ResolversTypes['ActorEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteActorArgs, 'id'>>;
  deleteBondCollection?: Resolver<Maybe<ResolversTypes['BondCollectionEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteBondCollectionArgs, 'id'>>;
  deleteCast?: Resolver<Maybe<ResolversTypes['CastEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteCastArgs, 'id'>>;
  deleteCategory?: Resolver<Maybe<ResolversTypes['CategoryEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteCategoryArgs, 'id'>>;
  deleteEpisode?: Resolver<Maybe<ResolversTypes['EpisodeEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteEpisodeArgs, 'id'>>;
  deleteMovie?: Resolver<Maybe<ResolversTypes['MovieEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteMovieArgs, 'id'>>;
  deleteSeason?: Resolver<Maybe<ResolversTypes['SeasonEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteSeasonArgs, 'id'>>;
  deleteTvShow?: Resolver<Maybe<ResolversTypes['TvShowEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteTvShowArgs, 'id'>>;
  deleteUploadFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteUploadFileArgs, 'id'>>;
  deleteUploadFolder?: Resolver<Maybe<ResolversTypes['UploadFolderEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteUploadFolderArgs, 'id'>>;
  deleteUsersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsDeleteRolePayload']>, ParentType, ContextType, RequireFields<MutationDeleteUsersPermissionsRoleArgs, 'id'>>;
  deleteUsersPermissionsUser?: Resolver<ResolversTypes['UsersPermissionsUserEntityResponse'], ParentType, ContextType, RequireFields<MutationDeleteUsersPermissionsUserArgs, 'id'>>;
  deleteWatchlist?: Resolver<Maybe<ResolversTypes['WatchlistEntityResponse']>, ParentType, ContextType, RequireFields<MutationDeleteWatchlistArgs, 'id'>>;
  emailConfirmation?: Resolver<Maybe<ResolversTypes['UsersPermissionsLoginPayload']>, ParentType, ContextType, RequireFields<MutationEmailConfirmationArgs, 'confirmation'>>;
  forgotPassword?: Resolver<Maybe<ResolversTypes['UsersPermissionsPasswordPayload']>, ParentType, ContextType, RequireFields<MutationForgotPasswordArgs, 'email'>>;
  login?: Resolver<ResolversTypes['UsersPermissionsLoginPayload'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
  multipleUpload?: Resolver<Array<Maybe<ResolversTypes['UploadFileEntityResponse']>>, ParentType, ContextType, RequireFields<MutationMultipleUploadArgs, 'files'>>;
  register?: Resolver<ResolversTypes['UsersPermissionsLoginPayload'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'input'>>;
  removeFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, RequireFields<MutationRemoveFileArgs, 'id'>>;
  resetPassword?: Resolver<Maybe<ResolversTypes['UsersPermissionsLoginPayload']>, ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'code' | 'password' | 'passwordConfirmation'>>;
  updateActor?: Resolver<Maybe<ResolversTypes['ActorEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateActorArgs, 'data' | 'id'>>;
  updateBondCollection?: Resolver<Maybe<ResolversTypes['BondCollectionEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateBondCollectionArgs, 'data' | 'id'>>;
  updateCast?: Resolver<Maybe<ResolversTypes['CastEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateCastArgs, 'data' | 'id'>>;
  updateCategory?: Resolver<Maybe<ResolversTypes['CategoryEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, 'data' | 'id'>>;
  updateEpisode?: Resolver<Maybe<ResolversTypes['EpisodeEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateEpisodeArgs, 'data' | 'id'>>;
  updateFileInfo?: Resolver<ResolversTypes['UploadFileEntityResponse'], ParentType, ContextType, RequireFields<MutationUpdateFileInfoArgs, 'id'>>;
  updateMovie?: Resolver<Maybe<ResolversTypes['MovieEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateMovieArgs, 'data' | 'id'>>;
  updateSeason?: Resolver<Maybe<ResolversTypes['SeasonEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateSeasonArgs, 'data' | 'id'>>;
  updateTvShow?: Resolver<Maybe<ResolversTypes['TvShowEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateTvShowArgs, 'data' | 'id'>>;
  updateUploadFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateUploadFileArgs, 'data' | 'id'>>;
  updateUploadFolder?: Resolver<Maybe<ResolversTypes['UploadFolderEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateUploadFolderArgs, 'data' | 'id'>>;
  updateUsersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsUpdateRolePayload']>, ParentType, ContextType, RequireFields<MutationUpdateUsersPermissionsRoleArgs, 'data' | 'id'>>;
  updateUsersPermissionsUser?: Resolver<ResolversTypes['UsersPermissionsUserEntityResponse'], ParentType, ContextType, RequireFields<MutationUpdateUsersPermissionsUserArgs, 'data' | 'id'>>;
  updateWatchlist?: Resolver<Maybe<ResolversTypes['WatchlistEntityResponse']>, ParentType, ContextType, RequireFields<MutationUpdateWatchlistArgs, 'data' | 'id'>>;
  upload?: Resolver<ResolversTypes['UploadFileEntityResponse'], ParentType, ContextType, RequireFields<MutationUploadArgs, 'file'>>;
};

export type PaginationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pagination'] = ResolversParentTypes['Pagination']> = {
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pageCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  actor?: Resolver<Maybe<ResolversTypes['ActorEntityResponse']>, ParentType, ContextType, Partial<QueryActorArgs>>;
  actors?: Resolver<Maybe<ResolversTypes['ActorEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryActorsArgs, 'pagination' | 'publicationState' | 'sort'>>;
  bondCollection?: Resolver<Maybe<ResolversTypes['BondCollectionEntityResponse']>, ParentType, ContextType, Partial<QueryBondCollectionArgs>>;
  bondCollections?: Resolver<Maybe<ResolversTypes['BondCollectionEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryBondCollectionsArgs, 'pagination' | 'publicationState' | 'sort'>>;
  cast?: Resolver<Maybe<ResolversTypes['CastEntityResponse']>, ParentType, ContextType, Partial<QueryCastArgs>>;
  casts?: Resolver<Maybe<ResolversTypes['CastEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryCastsArgs, 'pagination' | 'publicationState' | 'sort'>>;
  categories?: Resolver<Maybe<ResolversTypes['CategoryEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryCategoriesArgs, 'pagination' | 'publicationState' | 'sort'>>;
  category?: Resolver<Maybe<ResolversTypes['CategoryEntityResponse']>, ParentType, ContextType, Partial<QueryCategoryArgs>>;
  episode?: Resolver<Maybe<ResolversTypes['EpisodeEntityResponse']>, ParentType, ContextType, Partial<QueryEpisodeArgs>>;
  episodes?: Resolver<Maybe<ResolversTypes['EpisodeEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryEpisodesArgs, 'pagination' | 'publicationState' | 'sort'>>;
  i18NLocale?: Resolver<Maybe<ResolversTypes['I18NLocaleEntityResponse']>, ParentType, ContextType, Partial<QueryI18NLocaleArgs>>;
  i18NLocales?: Resolver<Maybe<ResolversTypes['I18NLocaleEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryI18NLocalesArgs, 'pagination' | 'sort'>>;
  me?: Resolver<Maybe<ResolversTypes['UsersPermissionsMe']>, ParentType, ContextType>;
  movie?: Resolver<Maybe<ResolversTypes['MovieEntityResponse']>, ParentType, ContextType, Partial<QueryMovieArgs>>;
  movies?: Resolver<Maybe<ResolversTypes['MovieEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryMoviesArgs, 'pagination' | 'publicationState' | 'sort'>>;
  season?: Resolver<Maybe<ResolversTypes['SeasonEntityResponse']>, ParentType, ContextType, Partial<QuerySeasonArgs>>;
  seasons?: Resolver<Maybe<ResolversTypes['SeasonEntityResponseCollection']>, ParentType, ContextType, RequireFields<QuerySeasonsArgs, 'pagination' | 'publicationState' | 'sort'>>;
  tvShow?: Resolver<Maybe<ResolversTypes['TvShowEntityResponse']>, ParentType, ContextType, Partial<QueryTvShowArgs>>;
  tvShows?: Resolver<Maybe<ResolversTypes['TvShowEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryTvShowsArgs, 'pagination' | 'publicationState' | 'sort'>>;
  uploadFile?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponse']>, ParentType, ContextType, Partial<QueryUploadFileArgs>>;
  uploadFiles?: Resolver<Maybe<ResolversTypes['UploadFileEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryUploadFilesArgs, 'pagination' | 'sort'>>;
  uploadFolder?: Resolver<Maybe<ResolversTypes['UploadFolderEntityResponse']>, ParentType, ContextType, Partial<QueryUploadFolderArgs>>;
  uploadFolders?: Resolver<Maybe<ResolversTypes['UploadFolderEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryUploadFoldersArgs, 'pagination' | 'sort'>>;
  usersPermissionsRole?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntityResponse']>, ParentType, ContextType, Partial<QueryUsersPermissionsRoleArgs>>;
  usersPermissionsRoles?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryUsersPermissionsRolesArgs, 'pagination' | 'sort'>>;
  usersPermissionsUser?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserEntityResponse']>, ParentType, ContextType, Partial<QueryUsersPermissionsUserArgs>>;
  usersPermissionsUsers?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryUsersPermissionsUsersArgs, 'pagination' | 'sort'>>;
  watchlist?: Resolver<Maybe<ResolversTypes['WatchlistEntityResponse']>, ParentType, ContextType, Partial<QueryWatchlistArgs>>;
  watchlists?: Resolver<Maybe<ResolversTypes['WatchlistEntityResponseCollection']>, ParentType, ContextType, RequireFields<QueryWatchlistsArgs, 'pagination' | 'publicationState' | 'sort'>>;
};

export type ResponseCollectionMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResponseCollectionMeta'] = ResolversParentTypes['ResponseCollectionMeta']> = {
  pagination?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SeasonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Season'] = ResolversParentTypes['Season']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  episodes?: Resolver<Maybe<ResolversTypes['EpisodeRelationResponseCollection']>, ParentType, ContextType, RequireFields<SeasonEpisodesArgs, 'pagination' | 'publicationState' | 'sort'>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SeasonEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['SeasonEntity'] = ResolversParentTypes['SeasonEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['Season']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SeasonEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SeasonEntityResponse'] = ResolversParentTypes['SeasonEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['SeasonEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SeasonEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SeasonEntityResponseCollection'] = ResolversParentTypes['SeasonEntityResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['SeasonEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TvShowResolvers<ContextType = any, ParentType extends ResolversParentTypes['TvShow'] = ResolversParentTypes['TvShow']> = {
  actors?: Resolver<Maybe<ResolversTypes['ActorRelationResponseCollection']>, ParentType, ContextType, RequireFields<TvShowActorsArgs, 'pagination' | 'publicationState' | 'sort'>>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  genre?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  plot?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  releaseDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  season?: Resolver<Maybe<ResolversTypes['SeasonEntityResponse']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TvShowEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['TvShowEntity'] = ResolversParentTypes['TvShowEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['TvShow']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TvShowEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['TvShowEntityResponse'] = ResolversParentTypes['TvShowEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['TvShowEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TvShowEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TvShowEntityResponseCollection'] = ResolversParentTypes['TvShowEntityResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['TvShowEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UploadFileResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFile'] = ResolversParentTypes['UploadFile']> = {
  alternativeText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  ext?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formats?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  previewUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  provider_metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  related?: Resolver<Maybe<Array<Maybe<ResolversTypes['GenericMorph']>>>, ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileEntity'] = ResolversParentTypes['UploadFileEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['UploadFile']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileEntityResponse'] = ResolversParentTypes['UploadFileEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['UploadFileEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileEntityResponseCollection'] = ResolversParentTypes['UploadFileEntityResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['UploadFileEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFileRelationResponseCollection'] = ResolversParentTypes['UploadFileRelationResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['UploadFileEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFolderResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFolder'] = ResolversParentTypes['UploadFolder']> = {
  children?: Resolver<Maybe<ResolversTypes['UploadFolderRelationResponseCollection']>, ParentType, ContextType, RequireFields<UploadFolderChildrenArgs, 'pagination' | 'sort'>>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  files?: Resolver<Maybe<ResolversTypes['UploadFileRelationResponseCollection']>, ParentType, ContextType, RequireFields<UploadFolderFilesArgs, 'pagination' | 'sort'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['UploadFolderEntityResponse']>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pathId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFolderEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFolderEntity'] = ResolversParentTypes['UploadFolderEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['UploadFolder']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFolderEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFolderEntityResponse'] = ResolversParentTypes['UploadFolderEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['UploadFolderEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFolderEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFolderEntityResponseCollection'] = ResolversParentTypes['UploadFolderEntityResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['UploadFolderEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFolderRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFolderRelationResponseCollection'] = ResolversParentTypes['UploadFolderRelationResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['UploadFolderEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsCreateRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsCreateRolePayload'] = ResolversParentTypes['UsersPermissionsCreateRolePayload']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsDeleteRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsDeleteRolePayload'] = ResolversParentTypes['UsersPermissionsDeleteRolePayload']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsLoginPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsLoginPayload'] = ResolversParentTypes['UsersPermissionsLoginPayload']> = {
  jwt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['UsersPermissionsMe'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsMeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsMe'] = ResolversParentTypes['UsersPermissionsMe']> = {
  blocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  confirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsMeRole']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsMeRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsMeRole'] = ResolversParentTypes['UsersPermissionsMeRole']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsPasswordPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPasswordPayload'] = ResolversParentTypes['UsersPermissionsPasswordPayload']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsPermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPermission'] = ResolversParentTypes['UsersPermissionsPermission']> = {
  action?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntityResponse']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsPermissionEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPermissionEntity'] = ResolversParentTypes['UsersPermissionsPermissionEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['UsersPermissionsPermission']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsPermissionRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsPermissionRelationResponseCollection'] = ResolversParentTypes['UsersPermissionsPermissionRelationResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['UsersPermissionsPermissionEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRole'] = ResolversParentTypes['UsersPermissionsRole']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['UsersPermissionsPermissionRelationResponseCollection']>, ParentType, ContextType, RequireFields<UsersPermissionsRolePermissionsArgs, 'pagination' | 'sort'>>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  users?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserRelationResponseCollection']>, ParentType, ContextType, RequireFields<UsersPermissionsRoleUsersArgs, 'pagination' | 'sort'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleEntity'] = ResolversParentTypes['UsersPermissionsRoleEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['UsersPermissionsRole']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleEntityResponse'] = ResolversParentTypes['UsersPermissionsRoleEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsRoleEntityResponseCollection'] = ResolversParentTypes['UsersPermissionsRoleEntityResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['UsersPermissionsRoleEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUpdateRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUpdateRolePayload'] = ResolversParentTypes['UsersPermissionsUpdateRolePayload']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUser'] = ResolversParentTypes['UsersPermissionsUser']> = {
  blocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  confirmed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UsersPermissionsRoleEntityResponse']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  watchlist?: Resolver<Maybe<ResolversTypes['WatchlistEntityResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserEntity'] = ResolversParentTypes['UsersPermissionsUserEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['UsersPermissionsUser']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserEntityResponse'] = ResolversParentTypes['UsersPermissionsUserEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserEntityResponseCollection'] = ResolversParentTypes['UsersPermissionsUserEntityResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['UsersPermissionsUserEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPermissionsUserRelationResponseCollection'] = ResolversParentTypes['UsersPermissionsUserRelationResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['UsersPermissionsUserEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WatchlistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Watchlist'] = ResolversParentTypes['Watchlist']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  movies?: Resolver<Maybe<ResolversTypes['MovieRelationResponseCollection']>, ParentType, ContextType, RequireFields<WatchlistMoviesArgs, 'pagination' | 'publicationState' | 'sort'>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  users_permissions_users?: Resolver<Maybe<ResolversTypes['UsersPermissionsUserRelationResponseCollection']>, ParentType, ContextType, RequireFields<WatchlistUsers_Permissions_UsersArgs, 'pagination' | 'sort'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WatchlistEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['WatchlistEntity'] = ResolversParentTypes['WatchlistEntity']> = {
  attributes?: Resolver<Maybe<ResolversTypes['Watchlist']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WatchlistEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['WatchlistEntityResponse'] = ResolversParentTypes['WatchlistEntityResponse']> = {
  data?: Resolver<Maybe<ResolversTypes['WatchlistEntity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WatchlistEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['WatchlistEntityResponseCollection'] = ResolversParentTypes['WatchlistEntityResponseCollection']> = {
  data?: Resolver<Array<ResolversTypes['WatchlistEntity']>, ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['ResponseCollectionMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Actor?: ActorResolvers<ContextType>;
  ActorEntity?: ActorEntityResolvers<ContextType>;
  ActorEntityResponse?: ActorEntityResponseResolvers<ContextType>;
  ActorEntityResponseCollection?: ActorEntityResponseCollectionResolvers<ContextType>;
  ActorRelationResponseCollection?: ActorRelationResponseCollectionResolvers<ContextType>;
  BondCollection?: BondCollectionResolvers<ContextType>;
  BondCollectionEntity?: BondCollectionEntityResolvers<ContextType>;
  BondCollectionEntityResponse?: BondCollectionEntityResponseResolvers<ContextType>;
  BondCollectionEntityResponseCollection?: BondCollectionEntityResponseCollectionResolvers<ContextType>;
  Cast?: CastResolvers<ContextType>;
  CastEntity?: CastEntityResolvers<ContextType>;
  CastEntityResponse?: CastEntityResponseResolvers<ContextType>;
  CastEntityResponseCollection?: CastEntityResponseCollectionResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CategoryEntity?: CategoryEntityResolvers<ContextType>;
  CategoryEntityResponse?: CategoryEntityResponseResolvers<ContextType>;
  CategoryEntityResponseCollection?: CategoryEntityResponseCollectionResolvers<ContextType>;
  CategoryRelationResponseCollection?: CategoryRelationResponseCollectionResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Episode?: EpisodeResolvers<ContextType>;
  EpisodeEntity?: EpisodeEntityResolvers<ContextType>;
  EpisodeEntityResponse?: EpisodeEntityResponseResolvers<ContextType>;
  EpisodeEntityResponseCollection?: EpisodeEntityResponseCollectionResolvers<ContextType>;
  EpisodeRelationResponseCollection?: EpisodeRelationResponseCollectionResolvers<ContextType>;
  GenericMorph?: GenericMorphResolvers<ContextType>;
  I18NLocale?: I18NLocaleResolvers<ContextType>;
  I18NLocaleEntity?: I18NLocaleEntityResolvers<ContextType>;
  I18NLocaleEntityResponse?: I18NLocaleEntityResponseResolvers<ContextType>;
  I18NLocaleEntityResponseCollection?: I18NLocaleEntityResponseCollectionResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Movie?: MovieResolvers<ContextType>;
  MovieEntity?: MovieEntityResolvers<ContextType>;
  MovieEntityResponse?: MovieEntityResponseResolvers<ContextType>;
  MovieEntityResponseCollection?: MovieEntityResponseCollectionResolvers<ContextType>;
  MovieRelationResponseCollection?: MovieRelationResponseCollectionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Pagination?: PaginationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ResponseCollectionMeta?: ResponseCollectionMetaResolvers<ContextType>;
  Season?: SeasonResolvers<ContextType>;
  SeasonEntity?: SeasonEntityResolvers<ContextType>;
  SeasonEntityResponse?: SeasonEntityResponseResolvers<ContextType>;
  SeasonEntityResponseCollection?: SeasonEntityResponseCollectionResolvers<ContextType>;
  TvShow?: TvShowResolvers<ContextType>;
  TvShowEntity?: TvShowEntityResolvers<ContextType>;
  TvShowEntityResponse?: TvShowEntityResponseResolvers<ContextType>;
  TvShowEntityResponseCollection?: TvShowEntityResponseCollectionResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  UploadFile?: UploadFileResolvers<ContextType>;
  UploadFileEntity?: UploadFileEntityResolvers<ContextType>;
  UploadFileEntityResponse?: UploadFileEntityResponseResolvers<ContextType>;
  UploadFileEntityResponseCollection?: UploadFileEntityResponseCollectionResolvers<ContextType>;
  UploadFileRelationResponseCollection?: UploadFileRelationResponseCollectionResolvers<ContextType>;
  UploadFolder?: UploadFolderResolvers<ContextType>;
  UploadFolderEntity?: UploadFolderEntityResolvers<ContextType>;
  UploadFolderEntityResponse?: UploadFolderEntityResponseResolvers<ContextType>;
  UploadFolderEntityResponseCollection?: UploadFolderEntityResponseCollectionResolvers<ContextType>;
  UploadFolderRelationResponseCollection?: UploadFolderRelationResponseCollectionResolvers<ContextType>;
  UsersPermissionsCreateRolePayload?: UsersPermissionsCreateRolePayloadResolvers<ContextType>;
  UsersPermissionsDeleteRolePayload?: UsersPermissionsDeleteRolePayloadResolvers<ContextType>;
  UsersPermissionsLoginPayload?: UsersPermissionsLoginPayloadResolvers<ContextType>;
  UsersPermissionsMe?: UsersPermissionsMeResolvers<ContextType>;
  UsersPermissionsMeRole?: UsersPermissionsMeRoleResolvers<ContextType>;
  UsersPermissionsPasswordPayload?: UsersPermissionsPasswordPayloadResolvers<ContextType>;
  UsersPermissionsPermission?: UsersPermissionsPermissionResolvers<ContextType>;
  UsersPermissionsPermissionEntity?: UsersPermissionsPermissionEntityResolvers<ContextType>;
  UsersPermissionsPermissionRelationResponseCollection?: UsersPermissionsPermissionRelationResponseCollectionResolvers<ContextType>;
  UsersPermissionsRole?: UsersPermissionsRoleResolvers<ContextType>;
  UsersPermissionsRoleEntity?: UsersPermissionsRoleEntityResolvers<ContextType>;
  UsersPermissionsRoleEntityResponse?: UsersPermissionsRoleEntityResponseResolvers<ContextType>;
  UsersPermissionsRoleEntityResponseCollection?: UsersPermissionsRoleEntityResponseCollectionResolvers<ContextType>;
  UsersPermissionsUpdateRolePayload?: UsersPermissionsUpdateRolePayloadResolvers<ContextType>;
  UsersPermissionsUser?: UsersPermissionsUserResolvers<ContextType>;
  UsersPermissionsUserEntity?: UsersPermissionsUserEntityResolvers<ContextType>;
  UsersPermissionsUserEntityResponse?: UsersPermissionsUserEntityResponseResolvers<ContextType>;
  UsersPermissionsUserEntityResponseCollection?: UsersPermissionsUserEntityResponseCollectionResolvers<ContextType>;
  UsersPermissionsUserRelationResponseCollection?: UsersPermissionsUserRelationResponseCollectionResolvers<ContextType>;
  Watchlist?: WatchlistResolvers<ContextType>;
  WatchlistEntity?: WatchlistEntityResolvers<ContextType>;
  WatchlistEntityResponse?: WatchlistEntityResponseResolvers<ContextType>;
  WatchlistEntityResponseCollection?: WatchlistEntityResponseCollectionResolvers<ContextType>;
};

