import axios from "axios";

class LatestService {
    async  index(){
        try {
            const res = await axios.get('https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2022&api_key=642b78b39a82d01fa71058b22ac6a80e')
            const data = res.data
            return data
        } catch (error) {
            return error
        }
    }

    async latestCollection(){
        try {
            const res = await this.index()
            const data = res.data.results.slice(0,4)
            return data
        } catch (error) {
            return error
        }
    }
    }

export default LatestService