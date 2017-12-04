export default {
    render: [
        'app/Exception/Exceptions/ReferenceException',
        'app/Exception/Exceptions/TypeException',
        'app/Exception/Exceptions/ErrorException'
    ],
    fallback: 'app/Exception/Exceptions/ErrorException'
};
