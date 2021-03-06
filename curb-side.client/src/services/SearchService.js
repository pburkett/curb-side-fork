/* eslint-disable */
import { AppState } from '../AppState'
import { api } from './AxiosService'

class SearchService {
    async getAll() {
        const res = await api.get('api/businesses')
        AppState.businesses = res.data
    }
}

export const searchService = new SearchService()