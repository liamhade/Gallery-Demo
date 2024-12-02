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
  variant_name: string;
  background_color: string;
};

class ShowService {
  static instance: ShowService;
  shows: Show[] = [];
  async getShow({
    id,
    past = false,
    future = false,
  }: {
    id?: any;
    past?: boolean;
    future?: boolean;
  }) {
    const queryParams = new URLSearchParams();
    if (id) queryParams.append("id", id);
    if (past) queryParams.append("past", true.toString());
    if (future) queryParams.append("future", true.toString());

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}show/?${queryParams}`,
      {
        method: "GET",
      }
    );
    return await res.json();
  }

  async getLocations() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}show/locations/`
    );
    return await res.json();
  }

  async getGuestList({
    show_id,
    masterlist = false,
  }: {
    show_id: string;
    masterlist?: boolean;
  }) {
    const queryParams = new URLSearchParams();
    if (show_id) queryParams.append("show_id", show_id);
    if (masterlist) queryParams.append("masterlist", masterlist.toString());
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}show/order/?${queryParams}`,
      {
        method: "GET",
      }
    );
    const guests = await res.json();
    let count = 0;
    let total = 0;
    for (let i = 0; i < guests.length; i++) {
      count += Number(guests[i].redeemed);
      total += Number(guests[i].quantity);
    }
    return { guests, count, total };
  }

  async addGuest(order: any) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}show/order/`,
      {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res;
  }

  async exportGuestList(show_id: any) {
    const queryParams = new URLSearchParams();
    if (show_id) queryParams.append("show_id", show_id);
    queryParams.append("export", true.toString());
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}show/order/?${queryParams}`
    );
    return await res.blob();
  }

  async put() {}
  async delete() {}
}

export default new ShowService();
