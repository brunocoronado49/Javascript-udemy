import {User} from '../models/User.model'
import {userModelToLocalhost} from '../mappers/user-localhost.mapper'
import { localHostUserToModel } from '../mappers/localhost-user.mapper';

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async(userLike) => {
    const user = new User(userLike);
    if (!user.firstName || !user.lastName) throw new Error(
        'First and last name is required.'
    )

    const userToSave = userModelToLocalhost(user);
    let userUpdated;

    if (user.id) {
        userUpdated = await updateUser(userToSave);
    } else {
        userUpdated = await createUser(userToSave);
    }

    return localHostUserToModel(userUpdated);
}

/**
 * 
 * @param {Like<User>} user 
 */
const createUser = async(user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users`;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const newUser = await response.json();
    console.log({newUser});

    return newUser;
}

/**
 * 
 * @param {Like<User>} user 
 */
const updateUser = async(user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;
    const response = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const updatedUser = await response.json();
    console.log({updatedUser});

    return updatedUser;
}

