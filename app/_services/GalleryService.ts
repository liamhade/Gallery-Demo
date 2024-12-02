class GalleryService {
  static instance: GalleryService;

  async fetchImage(show_name: string, file_name: string, image_url: string) {
    const cors_proxy = "https://desolate-headland-01724-f360f389c3a6.herokuapp.com/";
    const res = await fetch(cors_proxy + image_url);
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    return res;
  }

  async postUserInfo({
    name,
    email,
    instagram,
  }: {
    name?: string;
    email?: string;
    instagram?: string;
  }) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}gallery/handleUserInfo/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          instagram: instagram,
          email: email,
        }),
      }
    );

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
  }

  async listShowImages(show_name: string): Promise<any> {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}gallery/${show_name}`
    );

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    return res;
  }

  async getState(): Promise<any> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}gallery/`);

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    return res;
  }

  downloadImageBlob(image_blob: Blob, download_name: string) {
    const url = window.URL.createObjectURL(image_blob);
    const a = document.createElement("a");

    a.id = "imageDownload";
    a.href = url;
    a.download = `${download_name}`;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  async downloadImage(show_name: string, file_name: string, image_url: string) {
    const image = await this.fetchImage(show_name, file_name, image_url),
    blob = await image.blob();
    this.downloadImageBlob(blob, file_name);
  }
}

export default new GalleryService();
