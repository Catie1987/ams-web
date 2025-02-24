export interface BlogPost {
    title: string;
    locale: string;
    slug: string;
    subTitle: string;
    category: string[];
    coverImage: ImageFieldsFragment;
    sys: {
      id: string,
      firstPublishedAt: string;
    },
    
    pick?: boolean | null;
}

export interface ContentfulPhoto {
    sys: {
      id: string;
    };
    url: string;
    width: number;
    height: number;
  }
export type ImageFieldsFragment = { 
    __typename: 'Asset', 
    title?: string | null, 
    description?: string | null, 
    width?: number | null, 
    height?: number | null, 
    url?: string | null, 
    contentType?: string | null, 
    sys: { 
      __typename?: 'Sys', 
      id: string 
    } 
};

export interface ProductDetail {
  id: string;
  name: string;
  image: ImageFieldsFragment;
  locale: string;
  maker: MakerDetail;
  packing: string;
  shelflife: string;
  type?: TypeDetail | null;
  functionCollection: FunctionCollection;
  tds: string;
  sds: string;
};

export interface ProductDetailItem extends ProductDetail {
  description: RichTextContent;
  specification: RichTextContent;
}

export interface TypeDetail {
  locale: string;
  title: string;
  category: string;
  image?: ImageFieldsFragment;
  slug: string;
  subTitle?: RichTextContent;
};

export interface FunctionCollection { 
  items: FunctionDetail[]; 
}

export interface FunctionDetail {
  title: string;
  image?: ImageFieldsFragment;
  slug: string;
  subTitle?: RichTextContent;
};

export interface MakerDetail {
  makerName: string;
  logo?: ImageFieldsFragment;
  slug: string;
};


export interface RichTextContent {
  json: any;
  links: any;
};

export interface BlogPostDetailed extends BlogPost {
  content: RichTextContent;
}

export interface MetaDataData {
  title: string;
  description: string;
  slug: string;
  imageUrl?: string;
};

export interface MetaDataOptions {
  type?: string;
  path: string;
  gravity?: 'g_south' | 'g_face';
};

export interface Cover {
  url: string;
  height: number;
  width: number;
};