import route from '~/vendor/router'

export default () => {
    route.setModule('Status')

    route.get('/statuses', 'StatusController@index')
    route.get('/statuses/:id', 'StatusController@show')

    route.post('/statuses', 'StatusController@store')
}
