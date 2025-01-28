import React, { useState } from 'react'

function UrlShorten() {
  const [url, setUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Shortening URL: ${url}`)
    setUrl('')
  }
  return (
    <div className="url-form-container">
      <h1>Shorten URL</h1>
      <p>Paste the URL to be shortened</p>
      <form onSubmit={handleSubmit}>
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
