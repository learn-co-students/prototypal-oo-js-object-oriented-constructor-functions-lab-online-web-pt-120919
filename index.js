function Scooter(year, color, model) {
    this.year = year;
    this.color = color,
    this.model = model;        
}

let s = new Scooter('2009', 'Blue', 'Suzuki')
console.log(s)

function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}

let d = new Driver('Makai', '32', '15 years')
console.log('Driver info - ', d)

function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
}

let p = new PickupLocation( '500 Main Street', 'Atlanta, GA')
console.log('Pickup Here : ', p.address, p.city)