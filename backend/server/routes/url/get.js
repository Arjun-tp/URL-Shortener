
export async function urlGet (request, reply) {

    const {
        params
    } = request

    const {
        invite_id: inviteId
    } = params

    console.log(`[${inviteId}] Attempting to get invite`)




    return reply.send('Success')
}
