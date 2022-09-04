export default class Client {
    baseUrl = `${process.env.REACT_APP_API_BASE_URL}`;

    async getArticles() {
        const response = await fetch(this.baseUrl + "/articles");
        const articles = response.json();
        return articles;
    };

    async getServizi() {
        const response = await fetch(this.baseUrl + "/servizi");
        const servizi = response.json();
        return servizi;
    };

    async getAnnunci() {
        const response = await fetch(this.baseUrl + "/annunci");
        const annunci = response.json();
        return annunci;
    };
};