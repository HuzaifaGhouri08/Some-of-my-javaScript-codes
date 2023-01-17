function fn(change) {
let object = { name: 'Exhodius' };
object['company'] = object['name'];
delete object['name'];
console.log(object);
}
fn();
