# COFFEE-API

I have used express to test my API

In the terminal execute the following command
nodemon index.js

Open Chrome or any browser - Assuming the port is 3000

Try the following test cases

Test Cases - Assuming the product type is a mandatory field from the UI in both Coffee and Pods screens

# Machines

# - Small Machines
http://localhost:3000/api/getProductDetails?product_type=COFFEE_MACHINE_SMALL

http://localhost:3000/api/getProductDetails?product_type=COFFEE_MACHINE_SMALL&water_line_compatible=true

http://localhost:3000/api/getProductDetails?product_type=COFFEE_MACHINE_SMALL&water_line_compatible=false

# - Large Machines
http://localhost:3000/api/getProductDetails?product_type=COFFEE_MACHINE_LARGE

http://localhost:3000/api/getProductDetails?product_type=COFFEE_MACHINE_LARGE&water_line_compatible=true

http://localhost:3000/api/getProductDetails?product_type=COFFEE_MACHINE_LARGE&water_line_compatible=false


# - Espresso Machines
http://localhost:3000/api/getProductDetails?product_type=ESPRESSO_MACHINE

http://localhost:3000/api/getProductDetails?product_type=ESPRESSO_MACHINE&water_line_compatible=true

http://localhost:3000/api/getProductDetails?product_type=ESPRESSO_MACHINE&water_line_compatible=false

# Pods
# - Small Pods
http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_SMALL

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_small&coffee_flavor=COFFEE_FLAVOR_VANILLA

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_small&coffee_flavor=COFFEE_FLAVOR_CARAMEL

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_small&coffee_flavor=COFFEE_FLAVOR_PSL

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_small&coffee_flavor=COFFEE_FLAVOR_MOCHA

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_small&coffee_flavor=COFFEE_FLAVOR_HAZELNUT

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_small&coffee_flavor=COFFEE_FLAVOR_VANILLA&pack_size=1

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_small&coffee_flavor=COFFEE_FLAVOR_VANILLA&pack_size=3

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_small&coffee_flavor=COFFEE_FLAVOR_CARAMEL&pack_size=1

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_small&coffee_flavor=COFFEE_FLAVOR_CARAMEL&pack_size=3

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_small&coffee_flavor=COFFEE_FLAVOR_PSL&pack_size=1

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_small&coffee_flavor=COFFEE_FLAVOR_PSL&pack_size=3

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_small&coffee_flavor=COFFEE_FLAVOR_MOCHA&pack_size=1

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_small&coffee_flavor=COFFEE_FLAVOR_MOCHA&pack_size=3

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_small&coffee_flavor=COFFEE_FLAVOR_HAZELNUT&pack_size=1

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_small&coffee_flavor=COFFEE_FLAVOR_HAZELNUT&pack_size=3

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_small&pack_size=1

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_small&pack_size=3

# - Large Pods
http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_LARGE

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_LARGE&coffee_flavor=COFFEE_FLAVOR_VANILLA

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_LARGE&coffee_flavor=COFFEE_FLAVOR_CARAMEL

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_LARGE&coffee_flavor=COFFEE_FLAVOR_PSL

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_LARGE&coffee_flavor=COFFEE_FLAVOR_MOCHA

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_LARGE&coffee_flavor=COFFEE_FLAVOR_HAZELNUT

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_LARGE&coffee_flavor=COFFEE_FLAVOR_VANILLA&pack_size=1

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_LARGE&coffee_flavor=COFFEE_FLAVOR_VANILLA&pack_size=3

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_LARGE&coffee_flavor=COFFEE_FLAVOR_CARAMEL&pack_size=1

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_LARGE&coffee_flavor=COFFEE_FLAVOR_CARAMEL&pack_size=3

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_LARGE&coffee_flavor=COFFEE_FLAVOR_PSL&pack_size=1

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_LARGE&coffee_flavor=COFFEE_FLAVOR_PSL&pack_size=3

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_LARGE&coffee_flavor=COFFEE_FLAVOR_MOCHA&pack_size=1

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_LARGE&coffee_flavor=COFFEE_FLAVOR_MOCHA&pack_size=3

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_LARGE&coffee_flavor=COFFEE_FLAVOR_HAZELNUT&pack_size=1

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_LARGE&coffee_flavor=COFFEE_FLAVOR_HAZELNUT&pack_size=3

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_LARGE&pack_size=1

http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_LARGE&pack_size=3

# - Espresso Pods
http://localhost:3000/api/getProductDetails?product_type=ESPRESSO_POD

http://localhost:3000/api/getProductDetails?product_type=ESPRESSO_POD&coffee_flavor=COFFEE_FLAVOR_VANILLA

http://localhost:3000/api/getProductDetails?product_type=ESPRESSO_POD&coffee_flavor=COFFEE_FLAVOR_CARAMEL

http://localhost:3000/api/getProductDetails?product_type=ESPRESSO_POD&coffee_flavor=COFFEE_FLAVOR_VANILLA&pack_size=1

http://localhost:3000/api/getProductDetails?product_type=ESPRESSO_POD&coffee_flavor=COFFEE_FLAVOR_VANILLA&pack_size=3

http://localhost:3000/api/getProductDetails?product_type=ESPRESSO_POD&coffee_flavor=COFFEE_FLAVOR_VANILLA&pack_size=7

http://localhost:3000/api/getProductDetails?product_type=ESPRESSO_POD&coffee_flavor=COFFEE_FLAVOR_CARAMEL&pack_size=1

http://localhost:3000/api/getProductDetails?product_type=ESPRESSO_POD&coffee_flavor=COFFEE_FLAVOR_CARAMEL&pack_size=3

http://localhost:3000/api/getProductDetails?product_type=ESPRESSO_POD&coffee_flavor=COFFEE_FLAVOR_CARAMEL&pack_size=7

http://localhost:3000/api/getProductDetails?product_type=ESPRESSO_POD&pack_size=1

http://localhost:3000/api/getProductDetails?product_type=ESPRESSO_POD&pack_size=3

http://localhost:3000/api/getProductDetails?product_type=ESPRESSO_POD&pack_size=7

# - No Result Found
http://localhost:3000/api/getProductDetails?product_type=COFFEE_POD_LARGE&coffee_flavor=COFFEE_FLAVOR_HAZELNUT&pack_size=7
