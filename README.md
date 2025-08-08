## Run Locally

Clone the project

```bash
  git clone https://github.com/DeepaliMoraskar/ecommerce.git
```

Go to the project directory

```bash
  cd eCommerce
```

Install dependencies

```bash
  npm install

  or 

  npm install react-material-ui-carousel --save --legacy-peer-deps
```

Start the server

```bash
  npm start
```

The server should now be running. You can access the application by opening a web browser and entering the following URL:

```bash
  http://localhost:3000
```


Layout Approach:
```
Added 
src/pages/Productcard.jsx
src/pages/ProductList.jsx
and displayed it under src/pages/Products.jsx
I used Bootstrap’s grid system within the ProductList component to ensure each row displays
a maximum of 3 products (col-md-4). The Products page wraps the layout with a Navbar at the top,
the product grid in the middle, and a Footer at the bottom for a clean, modular structure.
```

Responsiveness Considerations:
```
The Bootstrap grid automatically adjusts the number of columns based on screen size,
so on smaller devices, products stack vertically (1 per row on mobile,
2 per row on small tablets), ensuring the UI remains user-friendly and
visually appealing across all device sizes.
```
