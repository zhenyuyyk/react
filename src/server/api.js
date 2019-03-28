import req from './server'
const httpServer={
    get(){
        return req.get('/get')
    },
    post(){
        return req.post('/post')
    },
    list(){
        return req.post('/list')
    }
}
export default httpServer;
