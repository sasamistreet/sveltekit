import { getDetail } from "../../libs/microcms";
import { getStepList } from "../../libs/microcms";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    return await getDetail(
        params.slug
    );
};

export const prerender = true;