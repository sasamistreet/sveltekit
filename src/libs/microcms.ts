import { createClient, type MicroCMSQueries, type MicroCMSImage } from "microcms-js-sdk";
import { MICROCMS_SERVICE_DOMAIN, X_MICROCMS_API_KEY } from '$env/static/private';

const client = createClient({
  serviceDomain: MICROCMS_SERVICE_DOMAIN,
  apiKey: X_MICROCMS_API_KEY,
});

//型定義
export type Blog = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    content: string;
    eyecatch?: MicroCMSImage;
};
export type BlogResponse = {
    totalCount: number;
    offset: number;
    limit: number;
    contents: Blog[];
};
export type Step = {
  id: string;
  model_id: string; 
  title: string;
  number: number;
  diagram?: MicroCMSImage;
  comment: string;
};

export type StepList = {
    totalCount: number;
    offset: number;
    limit: number;
    contents: Step[];
}

  //APIの呼び出し
export const getList = async (queries?: MicroCMSQueries) => {
    return await client.get<BlogResponse>({ endpoint: "blogs", queries });
};
export const getDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Blog>({
      endpoint: "blogs",
      contentId,
      queries,
  });
};

export const getStepList = async (queries?: MicroCMSQueries) => {
  return await client.get<StepList>({ endpoint: "steps", queries });
};

export const getStepDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Step>({
      endpoint: "steps",
      contentId,
      queries,
  });
};