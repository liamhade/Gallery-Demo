export type Show = {
  id: string;
  location_id: string;
  location_name: string;
  title: string;
  start: string;
  end: string;
  sold: number;
  ticket_price: number;
  ticket_url: string;
  capacity: number;
  notes: string;
  img_url: string;
  description: string;
  variant_id: string;
  related_shows: any;
  variant_name: string;
  background_color: string;
};

export type Guest = {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: string;
  instagram_handle: string;
  phone: string;
  city: string;
  intake?: number;
};

export type Anchor = "top" | "left" | "bottom" | "right";
