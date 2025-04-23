declare module "@sanity/client" {
  export interface SanityQueries {
    '*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[0...12]{\n  _id,\n  title,\n  slug,\n  body,\n  mainImage,\n  publishedAt,\n  "categories": coalesce(\n    categories[]->{\n      _id,\n      slug,\n      title\n    },\n    []\n  ),\n  author->{\n    name,\n    image\n  }\n}': POSTS_QUERYResult;
    '*[_type == "post" && defined(slug.current)]{ \n  "slug": slug.current\n}': POSTS_SLUGS_QUERYResult;
    '*[_type == "post" && slug.current == $slug][0]{\n  _id,\n  title,\n  body,\n  mainImage,\n  publishedAt,\n  "categories": coalesce(\n    categories[]->{\n      _id,\n      slug,\n      title\n    },\n    []\n  ),\n  author->{\n    name,\n    image\n  }\n}': POST_QUERYResult;
  }
}
