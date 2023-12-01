import {Axios} from 'axios'
import { Root } from './types';

const client = new Axios({
    baseURL: "https://moviesdatabase.p.rapidapi.com/"
})

const options = {
  headers: {
    'X-RapidAPI-Key': '5cb934e90fmshf41345362baa112p1f30e8jsnae243a9b54cc',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

interface SearchParams {
    exact: boolean
    titleType: 'movie' | 'series'
}
const defaultSearchParams : SearchParams = {
    exact:false,
    titleType: 'movie'
}

export namespace MoviesAPI {

    // gets 10 random movies/series objects
    export async function getRandom() {
        const response = await client.get("titles/random", options);
        return JSON.parse(response.data) as Root
    }
    // search movies by name
    export async function search(title: string, searchParams: SearchParams = defaultSearchParams) { 
        const response = await client.get(
            `titles/search/title/${encodeURIComponent(title)}?titleType=${searchParams.titleType}&exact=${searchParams.exact}`, options);
        return JSON.parse(response.data) as Root
    }
}

