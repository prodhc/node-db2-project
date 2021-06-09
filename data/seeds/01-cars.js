// STRETCH
const cars = [
{
    vin: '1J4HR48N25C636662',
    make: "toyota",
    model: "corolla",
    mileage: 100000,
    title: "clean",
    transmission: "manuual"
},
{
    vin: '1GC2CVCG2DZ365836',
    make: "ford",
    model: "focus",
    mileage: 234988,
},
{
    vin: '1C3CDFAA0DD203047',
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