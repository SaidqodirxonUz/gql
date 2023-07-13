import db from '../../db/index.js';

export const addOrderItem = async (payload) => {
    const result = await db('order_items').insert(payload).returning('*')

    return result[0]
}