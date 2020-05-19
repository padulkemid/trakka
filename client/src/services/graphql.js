import AppoloClient from 'apollo-boost'

const client = new AppoloClient({
    uri: 'http://localhost:4000/'
})

export default client