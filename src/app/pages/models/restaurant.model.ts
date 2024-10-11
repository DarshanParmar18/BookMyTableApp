export interface Restaurant {
  Name: string;
  Description: string;
  Address: string;
  City: string;
  State: string;
  PostalCode: string;
  PhoneNumber: string;
  Email: string;
  Website: string;
  CreatedDate: string;
  Images: [];
  Gallery: [];
  Cuisines: [];
  Types: [];
}
export interface Gallery {
  url: string;
  description: string;
}

// restaurantData = [
// {
//   Name: 'Cafe Paradise',
//   Description: 'Cozy cafe with a selection of homemade pastries.',
//   Address: '789 Sweet St',
//   City: 'Pune',
//   State: 'Maharashtra',
//   PostalCode: '411002',
//   PhoneNumber: '9876543211',
//   Email: 'contact@cafeparadise.com',
//   Website: 'www.cafeparadise.com',
//   CreatedDate: '2024-09-13T00:00:00Z',
//   Images: ['https://picsum.photos/id/57/300/230'],
//   Gallery: [
//     {
//       url: 'https://picsum.photos/id/57/300/230',
//       description: 'Pastries',
//     },
//     {
//       url: 'https://picsum.photos/id/57/300/230',
//       description: 'Coffee bar',
//     },
//   ],
//   Cuisines: ['Indian'],
//   Types: ['Veg'],
// },
// {
//   Name: 'Sunset Diner',
//   Description: 'A rooftop diner with an excellent view of the sunset.',
//   Address: '321 Sky View Rd',
//   City: 'Mumbai',
//   State: 'Maharashtra',
//   PostalCode: '400002',
//   PhoneNumber: '9123456780',
//   Email: 'sunsetdiner@mumbai.com',
//   Website: null,
//   CreatedDate: '2024-09-13T00:00:00Z',
//   Images: ['https://picsum.photos/id/57/300/230'],
//   Gallery: [
//     {
//       url: 'https://picsum.photos/id/57/300/230',
//       description: 'Rooftop view',
//     },
//   ],
//   Cuisines: ['Indian', 'Italian'],
//   Types: ['Veg', 'Non-Veg'],
// },
// {
//   Name: 'The Vegan Haven',
//   Description: 'Plant-based dishes prepared with love.',
//   Address: '65 Green Lane',
//   City: 'Pune',
//   State: 'Maharashtra',
//   PostalCode: '411003',
//   PhoneNumber: '9976543210',
//   Email: 'veganhaven@gmail.com',
//   Website: null,
//   CreatedDate: '2024-09-13T00:00:00Z',
//   Images: [
//     'https://picsum.photos/id/57/300/230',
//     'https://picsum.photos/id/57/300/230',
//   ],
//   Gallery: [
//     {
//       url: 'https://picsum.photos/id/57/300/230',
//       description: 'Vegan desserts',
//     },
//     {
//       url: 'https://picsum.photos/id/57/300/230',
//       description: 'Salad bar',
//     },
//   ],
//   Cuisines: ['Indian','French', 'Italian'],
//   Types: ['Veg', 'Non-Veg'],
// },
// {
//   Name: 'Bombay Bistro',
//   Description:
//     'Traditional Indian dishes served in a contemporary setting.',
//   Address: '88 Spice Rd',
//   City: 'Mumbai',
//   State: 'Maharashtra',
//   PostalCode: '400003',
//   PhoneNumber: '9123456781',
//   Email: 'info@bombaybistro.com',
//   Website: 'www.bombaybistro.com',
//   CreatedDate: '2024-09-13T00:00:00Z',
//   Images: ['https://picsum.photos/id/57/300/230'],
//   Gallery: [
//     {
//       url: 'https://picsum.photos/id/57/300/230',
//       description: 'Dining area',
//     },
//     {
//       url: 'https://picsum.photos/id/57/300/230',
//       description: 'Open kitchen',
//     },
//   ],
//   Cuisines: ['French', 'Chineese'],
//   Types: ['Veg', 'Non-Veg'],
// },
// {
//   Name: 'Pasta Palace',
//   Description: 'Classic Italian dishes with a modern twist.',
//   Address: '45 Italy Street',
//   City: 'Pune',
//   State: 'Maharashtra',
//   PostalCode: '411004',
//   PhoneNumber: '9876543212',
//   Email: 'pastapalace@gmail.com',
//   Website: null,
//   CreatedDate: '2024-09-13T00:00:00Z',
//   Images: ['https://picsum.photos/id/57/300/230'],
//   Gallery: [
//     {
//       url: 'https://picsum.photos/id/57/300/230',
//       description: 'Pasta bar',
//     },
//   ],
//   Cuisines: ['French','Indian', 'Chineese'],
//   Types: ['Veg', 'Non-Veg'],
// },
// {
//   Name: 'Sushi Station',
//   Description: 'Fresh sushi and sashimi prepared daily.',
//   Address: '99 Fish Market Ave',
//   City: 'Mumbai',
//   State: 'Maharashtra',
//   PostalCode: '400004',
//   PhoneNumber: '9123456782',
//   Email: 'sushi.station@mumbai.com',
//   Website: 'www.sushistation.com',
//   CreatedDate: '2024-09-13T00:00:00Z',
//   Images: [
//     'https://picsum.photos/id/57/300/230',
//     'https://picsum.photos/id/57/300/230',
//   ],
//   Gallery: [
//     {
//       url: 'https://picsum.photos/id/57/300/230',
//       description: 'Sushi bar',
//     },
//   ],
//   Cuisines: ['French', 'Chineese'],
//   Types: ['Veg', 'Non-Veg'],
// },
// {
//   Name: 'Grill House',
//   Description: 'Steaks, burgers, and more from the grill.',
//   Address: '567 Meat St',
//   City: 'Pune',
//   State: 'Maharashtra',
//   PostalCode: '411005',
//   PhoneNumber: '9876543213',
//   Email: 'grillhouse@pune.com',
//   Website: 'www.grillhouse.com',
//   CreatedDate: '2024-09-13T00:00:00Z',
//   Images: ['https://picsum.photos/id/57/300/230'],
//   Gallery: [
//     {
//       url: 'https://picsum.photos/id/57/300/230',
//       description: 'Grill area',
//     },
//   ],
//   Cuisines: ['French','Indian',],
//   Types: ['Veg', 'Non-Veg'],
// },
// {
//   Name: 'Chaat Street',
//   Description: 'Spicy Indian street food.',
//   Address: '123 Snack Lane',
//   City: 'Mumbai',
//   State: 'Maharashtra',
//   PostalCode: '400005',
//   PhoneNumber: '9123456783',
//   Email: 'chaat.street@mumbai.com',
//   Website: null,
//   CreatedDate: '2024-09-13T00:00:00Z',
//   Images: ['https://picsum.photos/id/57/300/230'],
//   Gallery: [
//     {
//       url: 'https://picsum.photos/id/57/300/230',
//       description: 'Chaat counter',
//     },
//   ],
//   Cuisines: ['French', 'Indian',],
//   Types: ['Veg', 'Non-Veg'],
// },
// {
//   Name: 'Burger Town',
//   Description: 'Gourmet burgers and craft beer.',
//   Address: '34 Patty Rd',
//   City: 'Pune',
//   State: 'Maharashtra',
//   PostalCode: '411006',
//   PhoneNumber: '9876543214',
//   Email: 'contact@burgertown.com',
//   Website: 'www.burgertown.com',
//   CreatedDate: '2024-09-13T00:00:00Z',
//   Images: [
//     'https://picsum.photos/id/57/300/230',
//     'https://picsum.photos/id/57/300/230',
//   ],
//   Gallery: [
//     {
//       url: 'https://picsum.photos/id/57/300/230',
//       description: 'Burger counter',
//     },
//   ],
//   Cuisines: ['Indian', 'Chineese'],
//   Types: ['Veg', 'Non-Veg'],
// },
// {
//   Name: 'Tandoori Flames',
//   Description: 'Authentic tandoori and kebabs.',
//   Address: '77 Spice Alley',
//   City: 'Mumbai',
//   State: 'Maharashtra',
//   PostalCode: '400006',
//   PhoneNumber: '9123456784',
//   Email: 'flames.tandoori@gmail.com',
//   Website: 'www.tandooriflames.com',
//   CreatedDate: '2024-09-13T00:00:00Z',
//   Images: ['https://picsum.photos/id/57/300/230'],
//   Gallery: [
//     {
//       url: 'https://picsum.photos/id/57/300/230',
//       description: 'Tandoori oven',
//     },
//   ],
//   Cuisines: ['French', 'Chineese'],
//   Types: ['Veg', 'Non-Veg'],
// },
// {
//   Name: 'The Dessert Bar',
//   Description: 'Sweets and desserts from around the world.',
//   Address: '44 Sugar Rd',
//   City: 'Pune',
//   State: 'Maharashtra',
//   PostalCode: '411007',
//   PhoneNumber: '9876543215',
//   Email: 'dessertbar@pune.com',
//   Website: 'www.thedessertbar.com',
//   CreatedDate: '2024-09-13T00:00:00Z',
//   Images: [
//     'https://picsum.photos/id/57/300/230',
//     'https://picsum.photos/id/57/300/230',
//   ],
//   Gallery: [
//     {
//       url: 'https://picsum.photos/id/57/300/230',
//       description: 'Dessert bar',
//     },
//   ],
//   Cuisines: ['French', 'Chineese''Indian',],
//   Types: ['Veg', 'Non-Veg'],
// },
// {
//   Name: 'Mumbai Bistro',
//   Description: 'Casual dining with fusion cuisine.',
//   Address: '56 Fusion St',
//   City: 'Mumbai',
//   State: 'Maharashtra',
//   PostalCode: '400007',
//   PhoneNumber: '9123456785',
//   Email: 'info@mumbaibistro.com',
//   Website: null,
//   CreatedDate: '2024-09-13T00:00:00Z',
//   Images: ['https://picsum.photos/id/57/300/230'],
//   Gallery: [
//     {
//       url: 'https://picsum.photos/id/57/300/230',
//       description: 'Outdoor seating',
//     },
//   ],
//   Cuisines: ['Indian','French', 'Chineese'],
//   Types: ['Veg', 'Non-Veg'],
// },
// {
//   Name: 'Pizza Point',
//   Description: 'Fresh pizzas with gourmet toppings.',
//   Address: '12 Cheese Lane',
//   City: 'Pune',
//   State: 'Maharashtra',
//   PostalCode: '411008',
//   PhoneNumber: '9876543216',
//   Email: 'pizzapoint@pune.com',
//   Website: 'www.pizzapoint.com',
//   CreatedDate: '2024-09-13T00:00:00Z',
//   Images: ['https://picsum.photos/id/57/300/230'],
//   Gallery: [
//     {
//       url: 'https://picsum.photos/id/57/300/230',
//       description: 'Pizza oven',
//     },
//   ],
//   Cuisines: ['French','Indian', 'Chineese'],
//   Types: ['Veg', 'Non-Veg'],
// },
// {
//   Name: 'Curry Delight',
//   Description: 'Rich curries from across India.',
//   Address: '23 Flavor St',
//   City: 'Mumbai',
//   State: 'Maharashtra',
//   PostalCode: '400008',
//   PhoneNumber: '9123456786',
//   Email: 'contact@currydelight.com',
//   Website: 'www.currydelight.com',
//   CreatedDate: '2024-09-13T00:00:00Z',
//   Images: [
//     'https://picsum.photos/id/57/300/230',
//     'https://picsum.photos/id/57/300/230',
//   ],
//   Gallery: [
//     {
//       url: 'https://picsum.photos/id/57/300/230',
//       description: 'Spice counter',
//     },
//   ],
//   Cuisines: ['French','Indian',],
//   Types: ['Veg', 'Non-Veg'],
// },
// {
//   Name: 'Noodle Nation',
//   Description: 'Delicious noodle bowls and stir-fries.',
//   Address: '89 Wok Way',
//   City: 'Pune',
//   State: 'Maharashtra',
//   PostalCode: '411009',
//   PhoneNumber: '9876543217',
//   Email: 'noodlenation@pune.com',
//   Website: null,
//   CreatedDate: '2024-09-13T00:00:00Z',
//   Images: ['https://picsum.photos/id/57/300/230'],
//   Gallery: [
//     {
//       url: 'https://picsum.photos/id/57/300/230',
//       description: 'Noodle station',
//     },
//   ],
//   Cuisines: ['French', 'Indian',],
//   Types: ['Veg', 'Non-Veg'],
// },
// ];
