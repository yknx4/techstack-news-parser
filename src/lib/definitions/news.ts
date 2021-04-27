import { Data } from 'open-graph';

export type NewsItem = {
  readonly title: string;
  readonly url: string;
  readonly createdAt: string;
  readonly foundAt: string;
  readonly enrichedAt?: string;
  readonly metadata?: Data;
};
