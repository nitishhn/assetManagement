create database AssetManagementDb;

use AssetManagementDb;



CREATE TABLE User (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(50),
  email VARCHAR(50),
  password VARCHAR(50),
  name VARCHAR(50),
  gender ENUM ('male', 'female', 'other'),
  phone_number VARCHAR(50),
  address VARCHAR(50),
  role ENUM ('user', 'admin'),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO User (username, email, password, name, gender, phone_number, address, role)
VALUES
  ('john_doe', 'john@example.com', 'password123', 'John Doe', 'male', '1234567890', '123 Main St, Bangalore', 'user'),
  ('jane_smith', 'jane@example.com', 'password456', 'Jane Smith', 'female', '9876543210', '456 Elm St, Mumbai', 'user'),
  ('sam_jackson', 'sam@example.com', 'password789', 'Sam Jackson', 'male', '5551234567', '789 Oak St, Delhi', 'user'),
  ('amit_kumar', 'amit@example.com', 'password123', 'Amit Kumar', 'male', '7894561230', '456 Park St, Kolkata', 'user'),
  ('priya_sharma', 'priya@example.com', 'password456', 'Priya Sharma', 'female', '9876543210', '789 Lake St, Chennai', 'user'),
  ('vikram_singh', 'vikram@example.com', 'password789', 'Vikram Singh', 'male', '5551234567', '123 River St, Hyderabad', 'user'),
  ('anu_joshi', 'anu@example.com', 'password123', 'Anu Joshi', 'female', '7894561230', '456 Hill St, Pune', 'user'),
  ('akash_patel', 'akash@example.com', 'password456', 'Akash Patel', 'male', '9876543210', '789 Valley St, Ahmedabad', 'user'),
  ('divya_mishra', 'divya@example.com', 'password789', 'Divya Mishra', 'female', '5551234567', '123 Ridge St, Jaipur', 'user'),
  ('rohit_gupta', 'rohit@example.com', 'password123', 'Rohit Gupta', 'male', '7894561230', '456 Peak St, Lucknow', 'user');







CREATE TABLE Category (
  category_id SERIAL PRIMARY KEY,
  slug VARCHAR(255),
  name VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);




INSERT INTO Category (slug, name)
VALUES
  ('electronics', 'Electronics'),
  ('clothing', 'Clothing'),
  ('home-appliances', 'Home Appliances'),
  ('books', 'Books'),
  ('groceries', 'Groceries'),
  ('furniture', 'Furniture'),
  ('jewelry', 'Jewelry'),
  ('sports', 'Sports'),
  ('beauty', 'Beauty'),
  ('toys', 'Toys');





CREATE TABLE Asset (
  asset_id SERIAL PRIMARY KEY,
  category_id INTEGER REFERENCES Category(category_id) ON DELETE CASCADE,
  name VARCHAR(255),
  model VARCHAR(255),
  manufacturing_date DATE,
  expiry_date DATE,
  price NUMERIC(10,2),
  image VARCHAR(255),
  description VARCHAR(255),
  quantity INTEGER,
  asset_availability_status ENUM ('yes', 'no'),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO Asset (category_id, name, model, manufacturing_date, expiry_date, price, image, description, quantity, asset_availability_status)
VALUES
  (1, 'Smartphone', 'XYZ123', '2022-01-15', '2024-01-15', 25000.00, 'smartphone.jpg', 'High-quality smartphone with latest features', 50, 'yes'),
  (1, 'Laptop', 'ABC456', '2021-11-20', '2025-11-20', 50000.00, 'laptop.jpg', 'Powerful laptop for professional use', 30, 'yes'),
  (2, 'Saree', 'SilkSaree', '2022-03-10', NULL, 5000.00, 'saree.jpg', 'Elegant silk saree for special occasions', 100, 'yes'),
  (2, 'Kurta', 'CottonKurta', '2022-02-05', NULL, 2000.00, 'kurta.jpg', 'Comfortable cotton kurta for daily wear', 150, 'yes'),
  (3, 'Refrigerator', 'FrostFree', '2021-12-01', NULL, 30000.00, 'refrigerator.jpg', 'Energy-efficient refrigerator with frost-free technology', 20, 'yes'),
  (3, 'Washing Machine', 'FrontLoad', '2022-02-20', NULL, 25000.00, 'washing_machine.jpg', 'Front-load washing machine with multiple wash programs', 25, 'yes'),
  (4, 'Physics Book', NULL, '2021-08-15', NULL, 500.00, 'physics_book.jpg', 'Comprehensive physics textbook for students', 50, 'yes'),
  (4, 'Cookbook', NULL, '2022-01-01', NULL, 300.00, 'cookbook.jpg', 'Collection of Indian recipes for cooking enthusiasts', 100, 'yes'),
  (5, 'Rice', 'BasmatiRice', NULL, '2023-12-31', 500.00, 'rice.jpg', 'Premium quality Basmati rice for cooking delicious meals', 200, 'yes'),
  (5, 'Dal', 'MasoorDal', NULL, '2024-12-31', 200.00, 'dal.jpg', 'High-protein Masoor dal for nutritious meals', 300, 'yes');


CREATE TABLE Asset_Request (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES User(user_id) ON DELETE CASCADE,
  asset_id INTEGER REFERENCES Asset(asset_id) ON DELETE CASCADE,
  asset_description VARCHAR(255),
  asset_request_type ENUM ('borrow', 'return'),
  asset_request_status ENUM ('pending', 'verified', 'rejected'),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO Asset_Request (user_id, asset_id, asset_description, asset_request_type, asset_request_status)
VALUES
  (1, 1, 'Need to borrow smartphone for a week', 'borrow', 'pending'),
  (2, 2, 'Requesting laptop for office work', 'borrow', 'pending'),
  (3, 3, 'Interested in buying this saree', 'borrow', 'pending'),
  (4, 4, 'Planning to buy this kurta for upcoming festival', 'borrow', 'pending'),
  (1, 5, 'Looking to purchase a new refrigerator', 'borrow', 'pending'),
  (2, 6, 'Interested in buying a washing machine', 'borrow', 'pending'),
  (3, 7, 'Need this physics book for exam preparation', 'borrow', 'pending'),
  (4, 8, 'Interested in this cookbook for cooking recipes', 'borrow', 'pending'),
  (1, 9, 'Need to purchase rice for home', 'borrow', 'pending'),
  (2, 10, 'Looking to buy dal for cooking', 'borrow', 'pending');







CREATE TABLE Asset_Service_Request (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES User(user_id) ON DELETE CASCADE,
  asset_id INTEGER REFERENCES Asset(asset_id) ON DELETE CASCADE,
  issue_type ENUM ('malfunction', 'repair'),
  issue_resolve_status ENUM ('solved', 'unsolved', 'rejected'),
  description VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Asset_Service_Request (user_id, asset_id, issue_type, issue_resolve_status, description)
VALUES
  (1, 1, 'malfunction', 'unsolved', 'Smartphone screen not working properly'),
  (2, 2, 'repair', 'solved', 'Laptop battery replacement needed'),
  (3, 3, 'malfunction', 'unsolved', 'Saree color bleeding issue'),
  (4, 4, 'repair', 'unsolved', 'Kurta stitching problem'),
  (1, 5, 'malfunction', 'unsolved', 'Refrigerator not cooling properly'),
  (2, 6, 'repair', 'solved', 'Washing machine door lock issue'),
  (3, 7, 'malfunction', 'unsolved', 'Physics book pages torn'),
  (4, 8, 'repair', 'solved', 'Cookbook binding broken'),
  (1, 9, 'malfunction', 'unsolved', 'Rice container lid broken'),
  (2, 10, 'repair', 'unsolved', 'Dal packet seal broken');




select * from user;
select * from Category;
select * from asset;
select * from Asset_Request;
select * from Asset_Service_Request;













