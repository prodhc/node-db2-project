// STRETCH
const cars = [
{
    vin: '11111111111111111',
    make: "toyota",
    model: "corolla",
    mileage: 100000,
    title: "clean",
    transmission: "manuual"
},
{
    vin: '11111111111111111',
    make: "ford",
    model: "focus",
    mileage: 234988,
},
{
    vin: '11111111111111111',
    make: "honda",
    model: "civic",
    mileage: 10456,
    title: "reconstructed",
    transmission: "auto"
}
]

exports.seed = function(knex) {
    return knex('cars').truncate().then(() => {
        return knex('cars').insert(cars)
    })
}