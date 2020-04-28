class Github {
    constructor() {
        this.client_id = 'a9f594276df0ad78a22d';
        this.client_secretId = 'a45c7493ca784e17d501c114790aa00afd98e727';

    }
    asyncgetUser(user) {
        const profileResponse = await 
        fetch('https://api.github.com/users/${user}?client_id=${this.client_id}&client_secretId=${this.client_secretId}');

        const profile = await profileResponse.json();
        return {
            profile

        }
    }

}