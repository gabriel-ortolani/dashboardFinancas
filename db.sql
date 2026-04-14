CREATE DATABASE dashboardFinanceira;

USE dashboardFinanceira;

CREATE TABLE transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  value DECIMAL(10,2),
  type VARCHAR(10)
);
