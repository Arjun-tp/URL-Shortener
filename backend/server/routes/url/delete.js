
export async function urlDelete (request, reply) {

  const {
    params
  } = request

  const {
    invite_id: inviteId
  } = params

  console.log(`[${inviteId}] Attempting to get invite`)




  return reply
    .code(200)
    .header('Content-Type', 'application/json')
    .send('Success')
}
