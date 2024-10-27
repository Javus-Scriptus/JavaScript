// let city = 'Miami'
// let popular = false
// let country = 'Canada'

const myCity = {
  city: 'New York',
  popular: true,
  country: 'USA',
};

myCity.city = 'Las Vegas';

myCity.popular = false;

myCity.country = 'Canada';

myCity['city'] = true;

delete myCity.country;
// delete myCity.city

const countryPropertyName = 'country';

myCity[countryPropertyName] = 'USA';

// console.log(myCity);

const hisCity = {
  city: 'Miami',
  info: {
    isPopular: false,
    country: 'Mexico',
    budget: {
      monthly: '2000$',
      yearly: '24000$',
    },
  },
};

hisCity.info.isPopular = true

delete hisCity.info['isPopular']

// console.log(hisCity.info.budget)

// console.log(hisCity.info.isPopular);

const name = 'Bogdan'
const postQty = 23

// const userProfile = {
//     name: name,
//     postQty: postQty,
//     hasSignedAgreement: false
// }

const userProfile = {
    name,
    postQty,
    hasSignedAgreement: false
}

delete userProfile.hasSignedAgreement

// console.log(userProfile)

const ourCity = {
    city: 'NewYork',
    cityGreeting() {
        console.log('Greetings!!')
    }
}

ourCity.cityGreeting()

console.log(ourCity)

JSON.parse()

JSON.stringify()



const post = {
    title: 'My post',
    likesQty: 5
}

post




