// Image CDN URL for Restaurant card
export const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

// Image CDN URL for Restaurant Menu
export const ITEM_IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

// Swiggy API to get Restaurant data with corsanywhere
export const swiggy_api_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.875799843072848&lng=76.63093786686659&page_type=DESKTOP_WEB_LISTING";

  //Extra URL https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING

// Swiggy API to get Restaurant Menu data with corsanywhere
export const swiggy_menu_api_URL =
"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=";

// shimmer card unit
export const shimmer_card_unit = 8;

// shimmer Menu card unit
export const shimmer_menu_card_unit = 4;

// Github - username
export const Github_UserName = "harshsindhu0408";
export const Github_Repository_Name = "FoodZone";

// Github API for User
export const Github_API_User = "https://api.github.com/users/";

// Social Media Links
export const Linkedin_Link = "https://www.linkedin.com/in/harsh-sindhu-162894214/";
export const Twitter_Link = "https://twitter.com/elonmusk";
export const Github_Link = "https://github.com/harshsindhu0408";
export const Email_Link = "mailto:harshsindhu0404@gmail.com";

// Github Authorization Token
export const options = {
  method: "GET",
  headers: {
    Authorization: "",
  },
};

// menu items api card type key
export const MENU_ITEM_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const RESTAURANT_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";


const resList = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "636736",
      "name": "Dazzles Chaap",
      "uuid": "dbe6ddc0-d16f-4559-92a8-92ba818f4ed4",
      "city": "166",
      "area": "Rohtak City",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "649c351d4a55916a92070d8d09297cd8",
      "cuisines": [
        "North Indian",
        "Snacks",
        "Chinese",
        "Beverages"
      ],
      "tags": [],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 29,
      "minDeliveryTime": 29,
      "maxDeliveryTime": 29,
      "slaString": "29 MINS",
      "lastMileTravel": 4.300000190734863,
      "slugs": {
        "restaurant": "p-n-foods-(dazzles)-rohtak-city-rohtak-city",
        "city": "rohtak"
      },
      "cityState": "166",
      "address": "Shop No.4, Chanakyapuri Delhi Road, Sheila Bypass Chowk, Rohtak, Rohtak, Rohtak, Haryana-124001",
      "locality": "Chanakyapuri",
      "parentId": 384551,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [],
      "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6634475~p=1~eid=00000188-4ee1-a145-6e92-149f00e40166",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "4.3 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹175 OFF",
        "subHeader": "ABOVE ₹399",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "636736",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 4.300000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.4",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "462282",
      "name": "Gulab Sweets and Restaurant",
      "uuid": "86dbe0fb-23b9-4b4f-9a2c-cdfc1389d452",
      "city": "166",
      "area": "Rohtak",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "ufdkk4hduliv2cqnvqox",
      "cuisines": [
        "South Indian",
        "Chinese",
        "Indian",
        "North Indian",
        "Beverages",
        "Chaat",
        "Pastas",
        "Sweets",
        "Street Food",
        "Desserts"
      ],
      "tags": [],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "slaString": "27 MINS",
      "lastMileTravel": 4.099999904632568,
      "slugs": {
        "restaurant": "m/s-aditya-rai-and-company/gulab-rewri-and-gajjak-rohtak-city-rohtak-city",
        "city": "rohtak"
      },
      "cityState": "166",
      "address": "NH-10,B-70,Sheela Bye Pass,Delhi Road, Rohtak, Rohtak, Haryana-124001",
      "locality": "Sheela Bypaas Chowk",
      "parentId": 91305,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "4 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "",
        "subHeader": "",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "462282",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 4.099999904632568,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "637944",
      "name": "Kathi Roll Kingdom",
      "uuid": "d6fbc948-eb38-461b-887a-30bac4bca6a2",
      "city": "166",
      "area": "Rohtak",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "x9smmqjmfto6iazqoe7k",
      "cuisines": [
        "Snacks"
      ],
      "tags": [],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 24,
      "minDeliveryTime": 24,
      "maxDeliveryTime": 24,
      "slaString": "24 MINS",
      "lastMileTravel": 2.700000047683716,
      "slugs": {
        "restaurant": "kathi-roll-kingdom-rohtak-city-rohtak-city",
        "city": "rohtak"
      },
      "cityState": "166",
      "address": "VJQ7+254, Model Town, Rohtak, Haryana 124001, India",
      "locality": "Model Town",
      "parentId": 317752,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "2.7 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "637944",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "lastMileTravel": 2.700000047683716,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.5",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "706068",
      "name": "Foodiee Uncle",
      "uuid": "c85add13-68fc-4dca-a99a-1a9abb2ff198",
      "city": "166",
      "area": "Rohtak City",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "50f62a183f3d5f99f53f2b3b4e7aa016",
      "cuisines": [
        "Chinese",
        "Pizzas",
        "Snacks",
        "Italian"
      ],
      "tags": [],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 28,
      "minDeliveryTime": 28,
      "maxDeliveryTime": 28,
      "slaString": "28 MINS",
      "lastMileTravel": 4.5,
      "slugs": {
        "restaurant": "foodiee-uncle-rohtak-city-rohtak-city",
        "city": "rohtak"
      },
      "cityState": "166",
      "address": "Shop No. 767, Opposite Mansarover Park, Near Reliance Fresh, Rohtak",
      "locality": "Pappu Bakery",
      "parentId": 422586,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [],
      "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6738986~p=4~eid=00000188-4ee1-a145-6e92-14a000e40475",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "4.5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹100",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "706068",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "lastMileTravel": 4.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "--",
      "totalRatings": 0,
      "new": true
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "128780",
      "name": "Pizza Wings",
      "uuid": "836ee7f3-6e38-4f32-8262-6e4f8191f932",
      "city": "166",
      "area": "Chankyapuri",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "a46a6aa00709f771fabb45c864a81b5e",
      "cuisines": [
        "Pizzas",
        "Italian-American",
        "Beverages",
        "Continental",
        "Pastas"
      ],
      "tags": [],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "slaString": "27 MINS",
      "lastMileTravel": 4.099999904632568,
      "slugs": {
        "restaurant": "pizza-wings-rohtak-locality-rohtak-city",
        "city": "rohtak"
      },
      "cityState": "166",
      "address": "Plot No 71, Chanakyapuri Sheela Bypass Rohtak, Rohtak Locality, Rohtak",
      "locality": "Chanakyapuri Sheela Bypass",
      "parentId": 159048,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "4 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹399",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "128780",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 4.099999904632568,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "511393",
      "name": "Bakingo",
      "uuid": "d531a7da-17e3-46c4-8a82-682a4bd0e5ff",
      "city": "166",
      "area": "Rohtak",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "rjhlo8nfojcxhiwh8qmd",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Beverages",
        "Snacks"
      ],
      "tags": [],
      "costForTwo": 29900,
      "costForTwoString": "₹299 FOR TWO",
      "deliveryTime": 21,
      "minDeliveryTime": 21,
      "maxDeliveryTime": 21,
      "slaString": "21 MINS",
      "lastMileTravel": 2,
      "slugs": {
        "restaurant": "bakingo-rohtak-rohtak-city",
        "city": "rohtak"
      },
      "cityState": "166",
      "address": "SCO No. 8, Sector 14, Rohtak, Haryana ,124001",
      "locality": "Sector 14",
      "parentId": 3818,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "2 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "511393",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "lastMileTravel": 2,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.4",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "603776",
      "name": "Jugnu Grill Flame",
      "uuid": "cf814a47-8b9c-4a2b-94f8-7df1e29843ec",
      "city": "166",
      "area": "Rohtak",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "6b2a05a379e79084d5c5ec12d1b4dd1a",
      "cuisines": [
        "Chinese",
        "North Indian",
        "Tandoor",
        "Grill"
      ],
      "tags": [],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 25,
      "minDeliveryTime": 25,
      "maxDeliveryTime": 25,
      "slaString": "25 MINS",
      "lastMileTravel": 4.099999904632568,
      "slugs": {
        "restaurant": "ankit-foods-rohtak-city-rohtak-city",
        "city": "rohtak"
      },
      "cityState": "166",
      "address": "Shop no 517/2 ward no 23, Ashoka Chowk Rohtak (Rural) (Part) (74) Rohtak Haryana 124001",
      "locality": "Ashoka Chowk",
      "parentId": 111801,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "4 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "",
        "subHeader": "",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "603776",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "lastMileTravel": 4.099999904632568,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "623336",
      "name": "New Taj Hotel",
      "uuid": "4924b7f5-f57e-4477-91a8-81b6f84e8518",
      "city": "166",
      "area": "Rohtak",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "vwkg3m7mkb7bqnrl62ez",
      "cuisines": [
        "North Indian",
        "Thalis",
        "Chinese",
        "Beverages"
      ],
      "tags": [],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "slaString": "27 MINS",
      "lastMileTravel": 3.9000000953674316,
      "slugs": {
        "restaurant": "new-taj-hotel-rohtak-city-rohtak-city",
        "city": "rohtak"
      },
      "cityState": "166",
      "address": "5698, Bharat Colony, Model Town, Rohtak, Haryana 124001, India",
      "locality": "Bharat Colony",
      "parentId": 148192,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "3.9 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹250 OFF",
        "subHeader": "ABOVE ₹999",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "623336",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 3.9000000953674316,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.7",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "614346",
      "name": "Da Pizza Hub",
      "uuid": "84ef07d6-c73a-4092-83d5-cce4ff96351a",
      "city": "166",
      "area": "Rohtak",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "njqmtsrjjdifgjmaqn4k",
      "cuisines": [
        "Pizzas"
      ],
      "tags": [],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 32,
      "minDeliveryTime": 32,
      "maxDeliveryTime": 32,
      "slaString": "32 MINS",
      "lastMileTravel": 4.099999904632568,
      "slugs": {
        "restaurant": "da-pizza-hub-rohtak-city-rohtak-city-2",
        "city": "rohtak"
      },
      "cityState": "166",
      "address": "ground floor, Gulab Sweets  near sheela bypass, Rohtak Haryana 124001",
      "locality": "Sheela Bypass",
      "parentId": 67438,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "4 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "614346",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "lastMileTravel": 4.099999904632568,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.6",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "607920",
      "name": "Burger Adda",
      "uuid": "dc00e881-3c56-4b62-8956-7d625bb57b1c",
      "city": "166",
      "area": "Rohtak City",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "o3q6rfvsrjmhtomlnmdz",
      "cuisines": [
        "Burgers",
        "Snacks",
        "Fast Food"
      ],
      "tags": [],
      "costForTwo": 10000,
      "costForTwoString": "₹100 FOR TWO",
      "deliveryTime": 26,
      "minDeliveryTime": 26,
      "maxDeliveryTime": 26,
      "slaString": "26 MINS",
      "lastMileTravel": 2.4000000953674316,
      "slugs": {
        "restaurant": "pizza-monk-cafe-rohtak-city-rohtak-city-2",
        "city": "rohtak"
      },
      "cityState": "166",
      "address": "BASEMENT NEAR JAT COLLEGE MAIN DELHI ROAD ROHTAK, Rohtak (Rural)(Part) (74), Rohtak, Rohtak, Haryana - 124001",
      "locality": "Delhi Road",
      "parentId": 51159,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "2.4 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "607920",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 2.4000000953674316,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "689848",
      "name": "Paratha Your Choice",
      "uuid": "6b780867-98d1-427b-aabe-8f3367fc6903",
      "city": "166",
      "area": "Rohtak City",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "3fdf3d7e951ea446d5ffa2e098f39d10",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Fast Food",
        "Salads",
        "Thalis"
      ],
      "tags": [],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 38,
      "minDeliveryTime": 38,
      "maxDeliveryTime": 38,
      "slaString": "38 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "paratha-your-choice-rohtak-city-rohtak-city",
        "city": "rohtak"
      },
      "cityState": "166",
      "address": "Shop no 1, Bharat colony, Delhi Road, RohtAK, (RURAL) (PART) (74) Rohtak 124001 Haryana",
      "locality": "Bharat Colony",
      "parentId": 410194,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "689848",
        "deliveryTime": 38,
        "minDeliveryTime": 38,
        "maxDeliveryTime": 38,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "394537",
      "name": "Keventers - Milkshakes & Desserts",
      "uuid": "e92302f6-e3e9-4c1a-90f3-0695557d9f13",
      "city": "166",
      "area": "Rohtak City",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "af8216b15abde417bb0e1d8fc44fb877",
      "cuisines": [
        "Beverages",
        "Ice Cream",
        "Desserts",
        "Healthy Food"
      ],
      "tags": [],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 23,
      "minDeliveryTime": 23,
      "maxDeliveryTime": 23,
      "slaString": "23 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "keventers-milkshakes-ice-creams-medical-mor-rohtak-city",
        "city": "rohtak"
      },
      "cityState": "166",
      "address": "Shop no 273 , Medical mor , Delhi road , Rohtak , Haryana",
      "locality": "Medical mor",
      "parentId": 268997,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "394537",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "130775",
      "name": "Pind Punjab",
      "uuid": "d5b0dfe5-01e7-4201-81fe-0987a67d5e32",
      "city": "166",
      "area": "Rohtak",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "cu3x95yvggrcbuzhmdpf",
      "cuisines": [
        "North Indian",
        "Snacks",
        "Tandoor",
        "Beverages"
      ],
      "tags": [],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "slaString": "27 MINS",
      "lastMileTravel": 3.5,
      "slugs": {
        "restaurant": "sher-e-punjab-rohtak-locality-rohtak-city",
        "city": "rohtak"
      },
      "cityState": "166",
      "address": "Delhi Road, Rohtak - 124001, Near Raj Palace, Rohtak Locality, Rohtak",
      "locality": "Delhi Road",
      "parentId": 4196,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": "Closes soon"
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "3.5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "130775",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 3.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "2.9",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "398009",
      "name": "Punjabi Culture",
      "uuid": "d1da5cd1-e852-4c65-a28c-0f74f9c28c6e",
      "city": "166",
      "area": "Rohtak",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "bjlehtis1uf8yfvj44ce",
      "cuisines": [
        "North Indian",
        "Punjabi",
        "Thalis",
        "Biryani",
        "Kebabs",
        "Indian",
        "Snacks",
        "Tandoor",
        "Hyderabadi",
        "Desserts"
      ],
      "tags": [],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 28,
      "minDeliveryTime": 28,
      "maxDeliveryTime": 28,
      "slaString": "28 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "coffee-culture-rohtak-city-rohtak-city",
        "city": "rohtak"
      },
      "cityState": "166",
      "address": "C-693, Near Central Library, Model Town, Rohtak, Haryana",
      "locality": "Delhi Road",
      "parentId": 162197,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": "Closes soon"
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "398009",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "392711",
      "name": "Keventers Ice Cream",
      "uuid": "f0d4cda7-3dae-49ca-81f8-4976df6b8fda",
      "city": "166",
      "area": "Rohtak City",
      "totalRatingsString": "50+ ratings",
      "cloudinaryImageId": "5220cf2d5049dd54b0fb98bbb3d5a652",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "tags": [],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 24,
      "minDeliveryTime": 24,
      "maxDeliveryTime": 24,
      "slaString": "24 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "keventers-ice-creamery-rohtak-rohtak-city",
        "city": "rohtak"
      },
      "cityState": "166",
      "address": "Shop no 273 , Medical mor , Delhi road , Rohtak , Haryana",
      "locality": "Rohtak",
      "parentId": 272044,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "392711",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.6",
      "totalRatings": 50,
      "new": false
    },
    "subtype": "basic"
  }

];