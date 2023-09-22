// service/request.js
const request = async (url) => {
    try {
        const res = await fetch(url, {
            method: "GET",
            headers: {
                'Authorization': 'KL54otLSwevdv38N8Ggg7rItYUIagF5oF1O1lci4JkGmyRJcVBa09VX8',
                'Content-Type': 'application/json'
            },
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json(); // Парсим JSON
        return data; // Возвращаем результат
    } catch (error) {
        throw error; // Перехватываем и перебрасываем ошибку
    }
};

export default request;
