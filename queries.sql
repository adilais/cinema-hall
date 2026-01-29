/* 
    SQL-запросы для HD
*/

-- 1. ПОИСК КЛИЕНТА
SELECT * 
FROM users 
WHERE phone_number = '+77011234567';

-- 2. ПРОВЕРКА СТАТУСА ЗАКАЗА
SELECT id, user_id, amount, status, created_at
FROM orders
WHERE id = 55555 
AND status = 'paid';

-- 3. СПИСОК ПРОДАННЫХ МЕСТ
SELECT row_number, seat_number, price, ticket_status
FROM tickets
WHERE event_name = 'Imagine Dragons' 
AND ticket_status = 'sold'
ORDER BY row_number ASC;

-- 4. ПОИСК ОШИБОК (ТРАБЛШУТИНГ)
SELECT * 
FROM transactions
WHERE payment_status = 'success' 
AND order_status = 'error';

-- 5. ВЫГРУЗКА ДЛЯ РАССЫЛКИ
SELECT email, phone_number
FROM users
WHERE purchase_date = CURRENT_DATE
ORDER BY id DESC
LIMIT 50;

-- 6. ИСПРАВЛЕНИЕ ДАННЫХ
UPDATE users
SET email = 'correct_email@gmail.com'
WHERE id = 1024;

-- 7. УДАЛЕНИЕ ТЕСТОВОЙ БРОНИ
DELETE FROM bookings
WHERE id = 999 
AND is_test = 1;