class Client {
    baseUrl = `${process.env.REACT_APP_API_BASE_URL}`;

    async addMail(mail) {
        const mailsResponse = await fetch(this.baseUrl + "/mails", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(mail),
        });
        const newMail = mailsResponse.json();
        return newMail;
      }
};

export const client = new Client();