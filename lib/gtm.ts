export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID ?? '';

// IDが取得できない場合を想定する
export const existsGtmId = GTM_ID !== '';
