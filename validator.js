/*
    Скрипт для проверки синхронизации мест (Data Integrity Check)
    Имитирует сверку данных между файлом Организатора и Системой
*/

// 1. Данные, которые прислал организатор
const venueManifest = [
    { row: 1, seats: 10, category: 'VIP' },
    { row: 2, seats: 12, category: 'Standard' },
    { row: 3, seats: 12, category: 'Standard' }, 
    { row: 4, seats: 15, category: 'Economy' }
];

// 2. Данные, которые мы отрисовали в системе
const systemMap = [
    { row: 1, seats: 10, category: 'VIP' },      
    { row: 2, seats: 12, category: 'Standard' }, 
    { row: 3, seats: 11, category: 'Standard' }, // ОШИБКА тут
    { row: 4, seats: 15, category: 'Economy' }   
];

// 3. Функция сверки
function validateSync(venue, system) {
    console.log(`--- ЗАПУСК ПРОВЕРКИ СИНХРОНИЗАЦИИ ---`);
    let errorsFound = 0;

    for (let i = 0; i < venue.length; i++) {
        const venueRow = venue[i];
        const systemRow = system[i];

        if (venueRow.seats !== systemRow.seats) {
            console.error(`[ОШИБКА] Ряд ${venueRow.row}: У орга ${venueRow.seats} мест, в системе ${systemRow.seats}`);
            errorsFound++;
        } 
        else if (venueRow.category !== systemRow.category) {
            console.warn(`[ВНИМАНИЕ] Ряд ${venueRow.row}: Несовпадение категорий! (${venueRow.category} vs ${systemRow.category})`);
            errorsFound++;
        } 
        else {
            console.log(`[OK] Ряд ${venueRow.row} синхронизирован успешно.`);
        }
    }

    console.log(`---------------------------------------`);
    if (errorsFound > 0) {
        console.log(`ИТОГ: Найдено ошибок синхронизации: ${errorsFound}. Требуется исправление!`);
    } else {
        console.log(`ИТОГ: Синхронизация идеальна.`);
    }
}

validateSync(venueManifest, systemMap);
