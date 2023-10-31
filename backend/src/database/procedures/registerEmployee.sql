CREATE OR ALTER PROCEDURE registerEmployee(
    @employee_id VARCHAR(100),
    @name VARCHAR(200),
    @email VARCHAR(300),
    @phone_no VARCHAR(20),
    @id_no INT,
    @KRA_PIN VARCHAR(20),
    @NHIF_NO VARCHAR(20),
    @NSSF_NO VARCHAR(20),
    @password VARCHAR(200)
)
AS
BEGIN

    INSERT INTO Employees(employee_id, name, email, phone_no, id_no, KRA_PIN, NHIF_NO, NSSF_NO, password)
    VALUES(@employee_id, @name, @email, @phone_no, @id_no, @KRA_PIN, @NHIF_NO, @NSSF_NO, @password)

END