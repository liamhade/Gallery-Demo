class ConfigService {
  static instance: ConfigService;

  async getConfigs() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}config/`, {
      method: "GET",
    });
    return res.json();
  }

  async setConfig(config: any) {
    return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}config/`, {
      method: "POST",
      body: JSON.stringify(config),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export default new ConfigService();
