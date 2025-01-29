import { useEffect } from "react"
import { useParams } from "react-router-dom"

const RedirectPage = () => {
  const { shortCode } = useParams()

  useEffect(() => {
    const fetchOriginalUrl = async () => {
      if (!shortCode) return

      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/${shortCode}`, {
          method: "GET"
        })

        if (!response.ok) {
          throw new Error("URL not found")
        }

        const data = await response.json()
        window.location.href = data.primary_url
      } catch (error) {
        console.error("Error fetching the URL:", error)
      }
    }

    fetchOriginalUrl()
  }, [])

  return <h2>Redirecting...</h2>
}

export default RedirectPage
