const FIs = [
    {
        clientId: 1,
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
        clientId: 2,
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
    },
    {
        clientId: 3,
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
                    }
                ]
            }

        ]
    }
]

module.exports = FIs;