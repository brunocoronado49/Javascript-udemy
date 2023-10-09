/**
 * 
 * @param {String|Number} id 
 */
export const deleteUser = async(id) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    const response = await fetch(url, {
        method: 'DELETE',
    });

    const deletedUser = await response.json();
    console.log({deletedUser});

    return true;
}

