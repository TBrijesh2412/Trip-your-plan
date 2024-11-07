// tour detail
import image1 from "../../assets/images/new/1.jpg";
import image2 from "../../assets/images/new/2.jpg";
import image3 from "../../assets/images/new/3.jpg";
import image4 from "../../assets/images/new/4.jpg";
import image5 from "../../assets/images/new/5.jpg";
import image6 from "../../assets/images/new/6.jpg";
import image7 from "../../assets/images/new/7.jpg";
import image8 from "../../assets/images/new/8.jpg";

// Indian Destinations
import TajMahal from "../../assets/images/popular/Taj_Mahal.png"; 
import Goa from "../../assets/images/popular/Goa.jpeg"; 
import Varanasi from "../../assets/images/popular/varansi.webp"; 
import Kerala from "../../assets/images/popular/Kerala.jpeg"; 
import LehLadakh from "../../assets/images/popular/LehLadakh.jpeg"; 
import Mysore from "../../assets/images/popular/Mysore.jpeg"; 
import Jaipur from "../../assets/images/popular/jaipur.jpeg"; 
import Rishikesh from "../../assets/images/popular/Rishikesh.jpeg";
export const popularsData = [
  {
    id: 0,
    title: "Taj Mahal",
    image: TajMahal,
    location: "Agra, Uttar Pradesh",
    category: ["Historical", "Cultural"],
    days: "1 day",
    price: 5000,
    afterDiscount: 4500,
    rating: 5,
    reviews: 150,
    des1 : "1. Iconic Monument: The Taj Mahal is a UNESCO World Heritage Site and a symbol of love, built by Mughal Emperor Shah Jahan in memory of his wife, Mumtaz Mahal.",
    des2 : "2. Stunning Architecture: Known for its exquisite white marble, intricate carvings, and beautiful gardens, the Taj Mahal showcases Mughal architectural brilliance.",
    des3 : "3. Historical Significance: Completed in 1653, it attracts millions of visitors each year, reflecting India's rich history and culture.",
    des4 : "4. Cultural Symbol: The Taj Mahal represents eternal love and is often regarded as one of the most beautiful buildings in the world."
  },
  {
    id: 1,
    title: "Goa",
    image: Goa,
    location: "Goa, India",
    category: ["Beach", "Adventure"],
    days: "3 days - 2 nights",
    price: 20000,
    afterDiscount: 18000,
    rating: 4.5,
    reviews: 120,
    des1 : "1. Beautiful Beaches: Goa is famous for its stunning beaches like Baga and Anjuna, perfect for relaxation and water sports.",
    des2 : "2. Cultural Mix: The state features a blend of Indian and Portuguese cultures, with historic churches and delicious cuisine.",
    des3 : "3. Lively Nightlife: Goa offers vibrant nightlife with beach parties, clubs, and bars, making it a hotspot for fun.",
    des4 : "4. Adventure Activities: Visitors can enjoy water sports, wildlife tours, and trekking, providing plenty of adventure options."
  },
  {
    id: 2,
    title: "Varanasi",
    image: Varanasi,
    location: "Varanasi, Uttar Pradesh",
    category: ["Spiritual", "Cultural"],
    days: "2 days - 1 night",
    price: 15000,
    afterDiscount: 14000,
    rating: 4,
    reviews: 90,
    des1 : "1. Spiritual Hub: Varanasi, one of the oldest cities in the world, is a major pilgrimage site for Hindus, known for its sacred ghats along the Ganges River.",
    des2 : "2. Rich Cultural Heritage: The city is famous for its vibrant festivals, classical music, dance, and traditional handicrafts, reflecting India's diverse culture.",
    des3 : "3. Historical Significance: With a history spanning over 3,000 years, Varanasi is steeped in history, featuring ancient temples and archaeological sites.",
    des4 : "4. Ganga Aarti: The mesmerizing Ganga Aarti ceremony, performed at sunset, draws visitors and locals alike, showcasing devotion and the city’s spiritual essence."
  },
  {
    id: 3,
    title: "Kerala Backwaters",
    image: Kerala,
    location: "Kerala, India",
    category: ["Nature", "Relaxation"],
    days: "2 days - 1 night",
    price: 30000,
    afterDiscount: 28000,
    rating: 5,
    reviews: 110,
    des1 : "1. Natural Beauty: Known as 'God's Own Country,' Kerala boasts stunning landscapes, including lush green hills, tranquil backwaters, and picturesque beaches.",
    des2 : "2. Cultural Diversity: The state is rich in culture, featuring vibrant festivals, classical dance forms like Kathakali, and traditional music that reflect its heritage.",
    des3 : "3. Ayurvedic Treatments: Kerala is renowned for its Ayurvedic wellness practices, offering treatments that promote health and relaxation amidst serene surroundings.",
    des4 : "4. Ecotourism: With numerous wildlife sanctuaries, hill stations, and eco-friendly resorts, Kerala promotes sustainable tourism while preserving its natural beauty."
  },
  {
    id: 4,
    title: "Leh-Ladakh",
    image: LehLadakh,
    location: "Leh, Jammu & Kashmir",
    category: ["Adventure", "Nature"],
    days: "5 days - 4 nights",
    price: 80000,
    afterDiscount: 75000,
    rating: 5,
    reviews: 200,
    des1 : "1. Breathtaking Landscapes: Leh-Ladakh is known for its stunning landscapes, featuring rugged mountains, deep valleys, and serene lakes like Pangong and Tso Moriri.",
    des2 : "2. Rich Culture: The region is home to a unique blend of Buddhist and Indian cultures, evident in its monasteries, festivals, and traditional architecture.",
    des3 : "3. Adventure Activities: Leh-Ladakh offers thrilling adventure opportunities, including trekking, river rafting, mountain biking, and exploring high-altitude passes like Khardung La.",
    des4 : "4. Starlit Nights: The clear skies and low light pollution make Leh-Ladakh a paradise for stargazers, providing breathtaking views of the night sky and constellations."
  },
  {
    id: 5,
    title: "Mysore",
    image: Mysore,
    location: "Mysore, Karnataka",
    category: ["Historical", "Cultural"],
    days: "2 days - 1 night",
    price: 18000,
    afterDiscount: 16000,
    rating: 4.5,
    reviews: 85,
    des1 : "1. Royal Heritage: Mysore is known for its royal heritage, showcased in the magnificent Mysore Palace, which is a major tourist attraction and a UNESCO World Heritage Site.",
    des2 : "2. Dussehra Festival: The city is famous for its grand Dussehra festival, celebrated with colorful processions, cultural events, and a display of the palace illuminated at night.",
    des3 : "3. Silk and Sandalwood: Mysore is renowned for its silk sarees and sandalwood products, making it a popular destination for shopping unique handcrafted items.",
    des4 : "4. Beautiful Gardens: The city boasts beautiful gardens, including the famous Brindavan Gardens, known for its musical fountain and vibrant flower displays."
  },
  {
    id: 6,
    title: "Jaipur",
    image: Jaipur,
    location: "Jaipur, Rajasthan",
    category: ["Historical", "Cultural"],
    days: "3 days - 2 nights",
    price: 30000,
    afterDiscount: 28000,
    rating: 4.5,
    reviews: 100,
    des1 : "1. Pink City: Jaipur, also known as the Pink City, is famous for its stunning pink-colored buildings, a legacy of its royal heritage, and is a UNESCO World Heritage Site.",
    des2 : "2. Palaces and Forts: The city is home to magnificent palaces and forts, including the Hawa Mahal, Amber Fort, and City Palace, reflecting the grandeur of Rajasthan's royal history.",
    des3 : "3. Rich Culture: Jaipur is known for its rich culture and traditions, featuring vibrant bazaars, folk music, and traditional Rajasthani cuisine.",
    des4 : "4. Astronomical Marvel: The Jantar Mantar, an astronomical observatory, showcases a collection of architectural astronomical instruments and is a UNESCO World Heritage Site."
  },
  {
    id: 7,
    title: "Rishikesh",
    image: Rishikesh,
    location: "Rishikesh, Uttarakhand",
    category: ["Adventure", "Spiritual"],
    days: "3 days - 2 nights",
    price: 25000,
    afterDiscount: 23000,
    rating: 4,
    reviews: 95,
    des1 : "1. Yoga Capital: Rishikesh is renowned as the 'Yoga Capital of the World,' attracting spiritual seekers and yoga enthusiasts for its ashrams and wellness retreats.",
    des2 : "2. Gateway to the Himalayas: Nestled in the foothills of the Himalayas, Rishikesh serves as a gateway for pilgrims heading to the sacred sites of the Char Dham.",
    des3 : "3. Adventure Hub: The town offers a range of adventure activities, including white-water rafting, trekking, and bungee jumping, making it a popular destination for thrill-seekers.",
    des4 : "4. Sacred Ganges: Located on the banks of the Ganges River, Rishikesh is considered a holy city, known for its serene ghats, yoga practices, and the iconic Ganga Aarti ceremony."
  },
];

export const destinationsData = {
  title : "Beautiful Bali with Malaysia",
  des: ` Bali, also known as the land of gods has plenty to offer to travelers from across the globe. As it so contrasted oh estimating instrument. Size like body some one had.  Are conduct viewing boy minutes warrant the expense?  Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted.  Lively use looked latter regard had. Do he it part more  last in. We understand that theory is important to build a solid foundation, we understand that theory alone isn’t going to get the job done so that’s why this is packed with practical hands-on examples that you can  follow step by step. `,
  tourInfo: [
    '<strong className="font-bold"> Place Covered</strong>: Bali - Ubud',
    ' <strong className="font-bold">Duration:</strong>5 Days, 4 Nights',
    '<strong className="font-bold">Start Point:</strong> Ngurah International Airport',
    '<strong className="font-bold">End Point:</strong>  Ngurah International Airport',
  ],

  highlights: [
    " Experience a delightful tropical getaway with a luxurious stay and witness the picture-perfect beaches, charming waterfalls and so much more",
    " Dependent on so extremely delivered by. Yet no jokes  worse her why. Bed one supposing breakfast day fulfilled off depending questions.",
    " Whatever boy her exertion his extended. Ecstatic  followed handsome drawings entirely Mrs one yet  outweigh.",
    "Meant balls it if up doubt small purse. Required his  you put the outlived answered position. A pleasure exertion if believed provided to.",
  ],

  itinerary:[
    {
      title : `<span class="me-1 fw-bold">Day 1:</span>  Airport Pick Up `,
      des:` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,
    },

    {
      title : `<span class="me-1 fw-bold">Day 2:</span>  Temples & River Cruise `,
      des:` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in. `,
    },
    {
      title : `<span class="me-1 fw-bold">Day 3:</span>  Massage & Overnight Train `,
      des:` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,
    },
    {
      title : `<span class="me-1 fw-bold">Day 4:</span>  Khao Sok National Park `,
      des:` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,
    },
    {
      title : `<span class="me-1 fw-bold">Day 5:</span>  Travel to Koh Phangan `,
      des:` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.
      `,
    },
    {
      title : `<span class="me-1 fw-bold">Day 6:</span> Morning Chill & Muay Thai Lesson `,
      des:`Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.
      `,
    },
    
  ],

  included:[
    'Comfortable stay for 4 nights in your preferred category Hotels',
    'Professional English speaking guide to help you explore the cities',
    'Breakfast is included as mentioned in Itinerary.',
    'Per Peron rate on twin sharing basis',
    'Entrance Tickets to Genting Indoor Theme Park    ',
    'All Tours & Transfers on Seat In Coach Basis ',
    'Visit Bali Safari & Marine Park with Jungle Hopper Pass    ',

  ],
  exclusion:[
    'Lunch and dinner are not included in CP plans',
    'Any other services not specifically mentioned in the inclusions',
    'Medical and Travel insurance',
    'Airfare is not included ',
    'Early Check-In & Late Check-Out ',
    'Anything which is not specified in Inclusions    ',

  ],

  images: [
    {
      original: image1,
      thumbnail: image1,
    },
    {
      original: image2,
      thumbnail: image2,
    },
    {
      original: image3,
      thumbnail: image3,
    },
    {
      original: image4,
      thumbnail: image4,
    },
    {
      original: image5,
      thumbnail: image5,
    },

    {
      original: image6,
      thumbnail: image6,
    },
    {
      original: image7,
      thumbnail: image7,
    },
    {
      original: image8,
      thumbnail: image8,
    },
  ],
};