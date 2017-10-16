module.exports = {
    express: {
        port: 3000
    },
    rethinkdb: {
        host: 'localhost',
        port: 28015,
        authKey: '',
        db: 'burrito_base'
    },
    menu: {
        burritos: [
            'Bean & Cheese',
            'Beef',
            'Chicken',
            'Mixed',
            'Machaca',
            'Chorizo',
            'Chile Relleno',
            'Al Pastor',
            'Fish',
            'Pollo Asada',
            'California'
        ],
        tacos: [
            'Rolled',
            'Beef',
            'Chicken',
            'Al Pastor',
            'Fish',
            'Pollo Asado',
            'Carne Asada'
        ]
    }
}