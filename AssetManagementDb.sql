create database AssetManagementDb;

use AssetManagementDb;

-- drop database AssetManagementDb;

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

CREATE TABLE Category (
  category_id SERIAL PRIMARY KEY,
  slug VARCHAR(255),
  name VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

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

select * from user;
select * from Category;
select * from asset;
select * from Asset_Request;
select * from Asset_Service_Request;
