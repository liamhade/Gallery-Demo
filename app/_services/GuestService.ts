class GuestService {
  static instance: GuestService;

  async getGuests({
    paginationModel,
    search,
    since,
    sortModel,
    filters,
  }: {
    paginationModel?: any;
    sortModel?: any;
    search?: string | undefined;
    since?: any;
    filters?: any;
  }): Promise<any> {
    const queryParams = new URLSearchParams();

    if (search) queryParams.append("search", search);
    if (since) queryParams.append("since", since);
    if (filters) queryParams.append("filters", JSON.stringify(filters));
    if (sortModel) queryParams.append("sort", JSON.stringify(sortModel));
    if (paginationModel) {
      let offest =
        paginationModel.page === 0
          ? 0
          : paginationModel.page * paginationModel.pageSize;
      queryParams.append("offset", offest.toString());
      queryParams.append("limit", paginationModel.pageSize.toString());
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}guest/?${queryParams}`
    );

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    return res.json();
  }

  async addGuest(guest: any) {
    return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}guest/`, {
      method: "POST",
      body: JSON.stringify(guest),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async updateGuest(guest: any, waitlist = false) {
    let newGuest = guest;
    newGuest["waitlist"] = waitlist;
    return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}guest/`, {
      method: "PUT",
      body: JSON.stringify(newGuest),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async deletGuest(id: string) {
    return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}guest/?id=${id}`, {
      method: "DELETE",
    });
  }

  async getGuestLastShow(id: string) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}guest/show/?id=${id}`,
      {
        method: "GET",
      }
    );
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    return res.json();
  }
}

export default new GuestService();
