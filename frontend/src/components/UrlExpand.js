import React, { useState } from "react"

function UrlExpand() {
  const [url, setUrl] = useState("")
  let [data, setData] = useState({})
  let [isData, setIsData] = useState(false)

  const fetchUrl = (e) => {
    e.preventDefault()
    fetch(`http://localhost:7004/urls/${url}`)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
    setIsData(true)
  }

  return (
    <div>
      <div className="url-form-container">
        <h1>Expand URL</h1>
        <p>Paste the URL to be expanded</p>
        <form onSubmit={fetchUrl}>
          <input
            type="text"
            placeholder="Add the link here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <button type="submit">Expand URL</button>
        </form>
        <p>
            Expand URL is a convenient tool for expanding short links to their original long URLs.
            It simplifies the process of generating shareable links, making it easier to distribute and manage.
        </p>
      </div>
      {isData && (
        <div className="url-form-container bg-white p-6 rounded-xl shadow-md w-full max-w-md mt-6">
          <h1 className="text-xl font-bold text-gray-700 mb-2">Expanded URL</h1>
          <p className="text-blue-500 underline break-all">{data.primary_url}</p>
        </div>
      )}
    </div>
  )
}

export default UrlExpand