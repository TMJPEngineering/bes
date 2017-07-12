import route from '~/vendor/router'

export default () => {
    route.setModule('Welcome')

    route.get('/', 'WelcomeController@index')
}
