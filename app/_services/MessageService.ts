export type Message = {
  id: string;
  subject: string;
  type: string;
  status: string;
  template: string;
  configuration: object;
  date_created: Date;
};

class MessageService {
  static instance: MessageService;

  messages: Message[] = [];

  async getMessage(id: string) {
    const queryParams = new URLSearchParams();
    queryParams.append("id", id);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}` + "messages/?" + queryParams,
      {
        method: "GET",
      }
    );
    return response.json();
  }

  async getMessages(paginationModel: any, status?: string) {
    const queryParams = new URLSearchParams();

    let offest =
      paginationModel.page === 0
        ? 0
        : paginationModel.page * paginationModel.pageSize;

    status && queryParams.append("status", status);
    queryParams.append("offset", offest.toString());
    queryParams.append("limit", paginationModel.pageSize.toString());

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}` + "messages/?" + queryParams,
      {
        method: "GET",
      }
    );
    return response.json();
  }

  async createMessage(type: "sms" | "email") {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}` + "messages/",
      {
        method: "POST",
        body: JSON.stringify({
          type,
          status: "draft",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.json();
  }

  async saveDraft(message: any) {
    return;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}` + "messages/",
      {
        method: "PUT",
        body: JSON.stringify(message),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.json();
  }

  async sendDraft(message: any) {
    return await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}` + "messages/draft/",
      {
        method: "POST",
        body: JSON.stringify(message),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

export default new MessageService();
