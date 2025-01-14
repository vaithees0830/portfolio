class fetchData {

    constructor () {
        this.url = "./assets/server/infor.json";
    }

    fetchMethod () {
        return fetch(this.url)
            .then ((response)=> {

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                return response.json();
            }).then((res) => {
                return res;
            }).catch ((err) => {
                console.log(err);
                return null;
            });
    }

}

export default fetchData;