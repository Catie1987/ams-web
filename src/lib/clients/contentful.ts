import { createClient } from 'contentful';
import { BlogPost, BlogPostDetailed, FunctionDetail, MakerDetail, ProductDetail, ProductDetailItem, TypeDetail } from '../types';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

const fetchContentfulData = async (query: string): Promise<any> => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      cache: process.env.NODE_ENV === 'production' ? 'force-cache' : 'no-cache',
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    }
  );
  const data = res.json();
  return data;
};

export const getTotalBlogPosts = async({
  query = '',
  category = [],
} : getBlogpostsArgs = {}): Promise<number> => {
  const validCategories = category.filter(c => c.trim() !== '');
  const categoryFilter = validCategories.length ? `category_contains_some:${JSON.stringify(category)}` : '';
    const gqlQuery = `{
      postCollection ( where: {title_contains:"${query || ''}", ${categoryFilter} } ) {
        total
      }
    }`;
    const res = await fetchContentfulData(gqlQuery);
    const totalPosts: number = res.data.postCollection.total || 0;
    return totalPosts;
  }

interface getBlogpostsArgs {
    limit?: number;
    skip?: number;
    locale?: string;
    query?: string;
    category?: string[];
    pick?: boolean;
  }

export const getlandingBlogposts = async ({
  locale = "",
  pick
}:getBlogpostsArgs = {}): Promise<BlogPost[]> => {
  const whereClause = pick ? `, where: { pick: true }` : "";
  const gqlQuery = `{
  postCollection (locale: "${locale}", limit:6, order:sys_firstPublishedAt_DESC, ${whereClause}) { 
    items {
      sys {
        firstPublishedAt
      }
      title
      slug
      pick
      category
    }
  }
  }`
  const res = await fetchContentfulData(gqlQuery);
    const landingPosts: BlogPost[] = res.data.postCollection.items || [];
    return landingPosts;
} 

export const getBlogposts = async ({
    limit = 6,
    skip = 0,
    locale = "",
    query = "",
    category = [],
}: getBlogpostsArgs = {}): Promise<BlogPost[]> => {
  const validCategories = category.filter(c => c.trim() !== '');
  const categoryFilter = validCategories.length ? `category_contains_some:${JSON.stringify(category)}` : '';
    const gqlQuery = `{
        postCollection (locale: "${locale}", limit: ${limit}, skip: ${skip}, order:sys_firstPublishedAt_DESC, where: {title_contains:"${query || ''}", ${categoryFilter}}) {
            items {
                title
                slug
                subTitle
                category
                coverImage {
                    url
                    width
                    height
                }
            }
        }
    }`;
    const res = await fetchContentfulData(gqlQuery);
    const blogPosts: BlogPost[] = res.data.postCollection.items || [];
    return blogPosts;
}

export const getBlogpost = async (
  slug: string,
  locale: string = "en-US",
): Promise<BlogPostDetailed | null> => {
  const gqlQuery = `{
    postCollection(locale: "${locale}", where: { slug: "${slug}" }, limit: 1){
      items {
        slug
        title
        category
        subTitle
        content{
                  json
                  links{
                    assets {
                      block {
                        sys {
                          id
                        }
                        url
                        title
                        width
                        height
                        description
                      }
                    }
                  }
                }
      }
    }
  }`;
  const res = await fetchContentfulData(gqlQuery);
  const blogPost: BlogPostDetailed | null =
    res?.data?.postCollection?.items[0] || null;
  return blogPost;
}

interface getRelatedpostsArgs {
  category?: string[];
  locale?: string;
  slug?: string,
}

export const getRelatedposts = async ({
  category = [],
  locale = "en-US",
  slug = "",
}: getRelatedpostsArgs = {}): Promise<BlogPost[]> => {
  const categoryFilter = category.length ? category.map(cat => `"${cat}"`).join(', ') : '';
  const gqlQuery = `{
    postCollection (locale: "${locale}", limit: 5, order:sys_firstPublishedAt_DESC, where: {category_contains_some:[${categoryFilter}], slug_not:"${slug}"}) {
        items {
            title
            slug
            subTitle
            category
            coverImage {
                url
            }
        }
    }
}`;
const res = await fetchContentfulData(gqlQuery);
const relatedPosts: BlogPost[] = res.data.postCollection.items || [];
return relatedPosts;
} 

interface getTotalProductsArgs { 
  query?: string; 
  makerNames?: string[]; 
  productTypes?: string[];
  functionTitles?: string[];
}

export const getTotalProducts = async({
  query="",
  makerNames = [],
  productTypes = [],
  functionTitles = [],
}:getTotalProductsArgs= {}) : Promise<number> => {
  const makerFilter = makerNames.length > 1
  ? `maker: { makerName_in: ${JSON.stringify(makerNames)} }` 
  : '';
  const typeFilter = productTypes.length > 1
  ? `type: { category_in: ${JSON.stringify(productTypes)} }` 
  : '';
  const functionFilter = functionTitles.length > 1
  ? `function: { title_in: ${JSON.stringify(functionTitles)} }` 
  : '';
  const gqlQuery = `{
    productCollection ( where: {name_contains:"${query || ''}", ${makerFilter}, ${typeFilter}, ${functionFilter}} ) {
      total
    }
  }`;
  const res = await fetchContentfulData(gqlQuery);
  const totalProducts: number = res.data.productCollection.total || 0;
  return totalProducts;
};

interface getProductsArgs {
  limit?: number;
  skip?: number;
  locale?: string;
  query?: string;
  makerNames?: string[];
  productTypes?: string[];
  functionTitles?: string[];
};

export const getProducts = async ({
  limit = 12,
  skip = 0,
  locale = "en-US",
  query = "",
  makerNames = [],
  productTypes = [],
  functionTitles = [],
}: getProductsArgs = {}): Promise<ProductDetail[]> => {

  const makerFilter = makerNames.length > 1
  ? `maker: { makerName_in: ${JSON.stringify(makerNames)} }` 
  : '';
  const typeFilter = productTypes.length > 1
  ? `type: { category_in: ${JSON.stringify(productTypes)} }` 
  : '';
  const functionFilter = functionTitles.length > 1
  ? `function: { title_in: ${JSON.stringify(functionTitles)} }` 
  : '';
  
  const gqlQuery = `{
      productCollection (locale: "${locale}", limit: ${limit}, skip: ${skip}, where: {name_contains:"${query || ''}",
      ${makerFilter}, ${typeFilter}, ${functionFilter}}) {
          items {
              id
              name
              image {
                  url
                  width
                  height
              }
              packing
              shelflife
              maker {
                makerName
                logo {
                  url
                  width
                  height
                }
              }
              type {
                title
                category
              }
              functionCollection {
                items {
                  title
                }
              }
          }
      }
  }`;
  const res = await fetchContentfulData(gqlQuery);
  const Products: ProductDetail[] = res.data.productCollection.items || [];
  return Products;
}

interface getRelatedProductsArgs {
  typeTitle?: string;
  locale?: string;
  id?: string;
}

export const getRelatedProducts = async ({
  typeTitle = "",
  locale = "en-US",
  id= "",
}: getRelatedProductsArgs = {}): Promise<ProductDetail[]> => {
  const gqlQuery = `{
    productCollection(locale: "${locale}", limit:5, where:{type: {title_contains:"${typeTitle}"}, id_not:"${id}"}) {
      items {
        id
        name
        image {
          url
          width
          height
        }
        maker {
          makerName
        }
        type {
          title
        }
      }
    }
  }`;
  const res = await fetchContentfulData(gqlQuery); 
  const relatedProducts: ProductDetail[] = res.data.productCollection.items || []; 
  return relatedProducts;
}

export const getProductItem = async (
  id: string,
  locale: string = "en-US",
): Promise<ProductDetailItem | null> => {
  const gqlQuery = `{
    productCollection(locale: "${locale}", where: { id: "${id}" }, limit: 1){
      items {
        id
        name
        image {
          url
          width
          height
        }
        packing
        shelflife
        tds
        sds
        maker {
          makerName
          logo {
            url
            width
            height
          }
        }
          type {
            title
          }
          functionCollection {
            items {
              title
            }
          }
        description {
          json
                  links{
                    assets {
                      block {
                        sys {
                          id
                        }
                        url
                        title
                        width
                        height
                        description
                      }
                    }
                  }
        }
        specification {
          json
                  links{
                    assets {
                      block {
                        sys {
                          id
                        }
                        url
                        title
                        width
                        height
                        description
                      }
                    }
                  }
        }
      }
    }
  }`;
  const res = await fetchContentfulData(gqlQuery);
  const ProductItem: ProductDetailItem | null =
  res?.data?.productCollection?.items[0] || null;
  return ProductItem;
};

export const getMakers = async (): Promise<MakerDetail[]> => {
  const gqlQuery = `{
    manufactureCollection (order: makerName_ASC) {
      items{
        makerName
      }
    }
  }`;
  const res = await fetchContentfulData(gqlQuery);
  const makers: MakerDetail[] = res.data.manufactureCollection.items || [];
    const sortedMakers = makers.sort((a, b) => {
      if (a.makerName === "Other") return 1;
      if (b.makerName === "Other") return -1;
      return a.makerName.localeCompare(b.makerName);
    });
  return sortedMakers;
};


export const getProductTypes = async (
  locale: string = "en-US"
): Promise<TypeDetail[]> => {
  const gqlQuery= `{
    byTypeCollection (locale: "${locale}", order: category_ASC) {
      items {
        slug
        title
        category
      }
    }
  }`;
  const res = await fetchContentfulData(gqlQuery);
  const ProductTypes: TypeDetail[] = res.data.byTypeCollection.items || [];
  return ProductTypes;
}

export const getFunctions = async (
  locale: string = "en-US"
): Promise<FunctionDetail[]> => {
  const gqlQuery= `{
    byFunctionCollection (locale:"${locale}", order:title_ASC) {
      items {
        title
      }
    }
  }`
  const res = await fetchContentfulData(gqlQuery);
  const Functions: FunctionDetail[] = res.data.byFunctionCollection.items || [];
  return Functions;
}
