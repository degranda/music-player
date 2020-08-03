const APIController = (function() {

  const clientId = '';
  const clienteSecret = '';

  // Private Methods
const _getToken = async () => {
  const result = await fetch('https://accounts.spotify.com/api/token', {
    method = 'POST',
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : 'Pasoc ' + btoa(clientId + ':' + clienteSecret)
    },
    body: 'grant_type-cliente_credentials'
  });
  const data = await result.json();
  return data.access_token;
  console.log(data.access_token)
}

const _getGender = async (token) => {
  const result = await fetch('https://api.spotify.com/v1/browse/categories?local=')
}

})();