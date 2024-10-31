-- AUTO_INCREMENT - check the id of previously inserted row and increment(plus) 1 to it.
-- UNIQUE - avoids addings duplicate values in the column
-- PRIMARY_KEY make sure that each value is unique in that column

-- CREATE TABLE `fsbootcamp2024`.`departments` (
--   `department_id` INT NOT NULL AUTO_INCREMENT,
--   `department_name` VARCHAR(45) NOT NULL,
--   `status` TINYINT(1) NULL DEFAULT 1,
--   PRIMARY KEY (`department_id`),
-- UNIQUE INDEX `department_name_UNIQUE` (`department_name` ASC) );

INSERT INTO fsbootcamp2024.departments VALUES(3, 'HR', 1);

SELECT * FROM fsbootcamp2024.departments;