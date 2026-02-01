import { API } from '@/models';
const axios = require('axios')

exports.handler = async (event) => {
  try {
    const category =
      event.queryStringParameters?.category || 'general'

    const response = await axios.get(
      'https://newsapi.org/v2/top-headlines',
      {
        params: {
          country: 'us',
          category: category,
          apiKey: API.KEY
        }
      }
    )

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(response.data)
    }

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Error fetching news',
        details: error.message
      })
    }
  }
}
