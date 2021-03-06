'use strict'
/** @desc Authorization collection seeds, uses Authorization model, to run execute:
 @example ./ace db:seed [name]
 **/
const Authorization = use('App/Model/Authorization')
/** Test data with 3 similar registers only differing in the name, description and id */
const authorizationArray = [
    {"id": 1, "username": "harveybc", "process_hash": "ph", "role": 1, "active": true},
    {"id": 2, "username": "testnode", "process_hash": "ph", "role": 2, "active": true},
    {"id": 3, "username": "testoptimizer", "process_hash": "ph", "role": 3, "active": true},
    {"id": 4, "username": "testevaluator", "process_hash": "ph", "role": 4, "active": true},
    {"id": 5, "username": "testclient", "process_hash": "ph", "role": 5, "active": true},
] 
/** 
 @desc Database Seeder
 Can be used to seed dummy data to your application database.  Here you can also make use of Factories to create records witn random data.aaaa
 
 @example to execute:
 ./ace db:seed [name]
 */
class DatabaseSeeder {
    * run() {
        // yield Factory.model('App/Model/User').create(5)
        yield Authorization.createMany(authorizationArray)
    }
}
module.exports = DatabaseSeeder
