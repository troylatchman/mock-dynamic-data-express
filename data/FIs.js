const FIs = [
    {
        clientId: 123,
        processes: [

            {
                name: 'lostStolen',
                variables: [
                    {
                        key: 'name',
                        type: 'string',
                        value: 'Bob'
                    },
                    {
                        key: 'age',
                        type: 'number',
                        value: 22
                    },
                    {
                        key: 'married',
                        type: 'boolean',
                        value: false
                    },
                ]
            }

        ]
    },
    {
        clientId: 456,
        processes: [

            {
                name: 'lostStolen',
                variables: [
                    {
                        key: 'firstName',
                        type: 'string',
                        value: 'Alice'
                    }
                ]
            }

        ]
    }
]

module.exports = FIs;