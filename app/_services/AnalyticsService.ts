class GuestService {
  static instance: GuestService;

  async guestByAge() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}analytics/guestByAge/`,
      {
        method: "GET",
      }
    );
    if (res.ok) return await res.json();
    return [];
  }

  async guestByAgeVsShowAttendance() {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}analytics/guestByAgeVsShowAttendance/`,
      {
        method: "GET",
      }
    );
  }
  async guestAttendanceRate() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}analytics/guestAttendanceRate/`,
      {
        method: "GET",
      }
    );
    if (res.ok) return await res.json();
    return [];
  }
  async guestAttendanceByShowDay() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}analytics/guestAttendanceByShowDay/`,
      {
        method: "GET",
      }
    );
    if (res.ok) return await res.json();
    return [];
  }
  async guestAttendanceByShowTime() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}analytics/guestAttendanceByShowTime/`,
      {
        method: "GET",
      }
    );

    if (res.ok) {
      const temp = await res.json();
      return temp.map((temp: any) => {
        return {
          ...temp,
          percent: temp.percent,
        };
      });
    }
    return [];
  }
  async topGuestsByShowAttendance() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}analytics/topGuestsByShowAttendance/`,
      {
        method: "GET",
      }
    );
    if (res.ok) return await res.json();
    return [];
  }

  async topGuestsBySpend() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}analytics/topGuestsBySpend/`,
      {
        method: "GET",
      }
    );
    if (res.ok) return await res.json();
    return [];
  }

  async topGuestsByTickets() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}analytics/topGuestsByTickets/`,
      {
        method: "GET",
      }
    );
    if (res.ok) return await res.json();
    return [];
  }
}

export default new GuestService();
