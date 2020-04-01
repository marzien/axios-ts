import axios, {AxiosResponse, AxiosRequestConfig} from 'axios';

interface ServerResponse {
    data: ServerData
}
  
interface ServerData {
    name: string
    country: number
    value: number
    image: string
    european_titles: number
}

axios.request<ServerData>({
    url: 'https://public.allaboutapps.at/hiring/clubs.json',
    transformResponse: (r: ServerResponse) => r
    }).then((response) => {
    const { data } = response
    console.log(data)
    return data
})