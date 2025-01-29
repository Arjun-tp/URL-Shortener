import React, { useState } from 'react'

function UrlShorten() {
  const [url, setUrl] = useState('')

  const urlCreate = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:7004/urls', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ primary_url: url }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data = await response.json()
      console.log(data)

      setUrl('')
    } catch (error) {
      console.error("Error creating URL:", error)
    }

  }
  return (
    <div className="url-form-container">
      <h1>Shorten URL</h1>
      <p>Paste the URL to be shortened</p>
      <form onSubmit={urlCreate}>
        <input
          type="text"
          placeholder="Add the link here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button type="submit">Shorten URL</button>
      </form>
      <p>
            Shorten URL is a convenient tool for creating short links from long URLs.
            It simplifies the process of generating shareable links, making it easier to distribute and manage.
      </p>
    </div>
  )
}

export default UrlShorten
