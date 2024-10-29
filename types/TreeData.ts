interface Locale {
  en: {
    id?: number;
    cg_name?: string;
    cg_description?: string;
    cg_title?: string;
    cg_slug?: string;
    meta_description?: string;
    meta_keywords?: string;
    link?: string;
  };
  ru: {
    id: number;
    cg_name: string;
    cg_description: string;
    cg_title: string;
    cg_slug: string;
    meta_description: string;
    meta_keywords: string;
    link: string;
  };
  fr: Record<string, unknown>;
}

interface OG {
  id: number;
  cat_id: number;
  og_property_name: string;
  locale: Locale;
}

interface Twitter {
  id: number;
  cat_id: number;
  extra_meta_name: string;
  locale: Locale;
}

export interface Child {
  id: number;
  depth: number;
  numchild: number;
  category_image: string | null;
  logo_image: string | null;
  menu_image: string | null;
  separate_menu: boolean;
  c_images: number;
  product_rep_1_id: number | null;
  product_rep_2_id: number | null;
  c_views: number;
  og: OG[] | null;
  twitter: Twitter[] | null;
  locale: Locale;
  path_to_top: number[];
  childs?: Child[];
}

export interface TreeData {
  id: number;
  depth: number;
  numchild: number;
  category_image: string;
  logo_image: string;
  menu_image: string;
  separate_menu: boolean;
  c_images: number;
  product_rep_1_id: number | null;
  product_rep_2_id: number | null;
  c_views: number;
  og: OG[] | null;
  twitter: Twitter[] | null;
  locale: Locale;
  search_target: boolean;
  path_to_top: number[];
  childs: Child[];
}
