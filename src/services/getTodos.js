export async function getTodos() {
    console.log("x");
    await new Promise((res) => setTimeout(res, 500));
    return [
        { id: 1, text: 'Buy milk' },
        { id: 2, text: 'Walk the dog' }
    ];
}
