import React from "react"
import { Link } from "gatsby"

import "./links.scss"

const data = [
  {
    id: 1,
    text: "Pergoly, Altany",
    url: "/pergolyAltany",
  },
  {
    id: 2,
    text: "Dřevostavby",
    url: "/drevostavby",
  },
  {
    id: 3,
    text: "Dřevěné štíty a fasády",
    url: "/stityFasady",
  },
  {
    id: 4,
    text: "Krovy",
    url: "/krovy",
  },
  {
    id: 5,
    text: "Garážová stání",
    url: "/garazovaStani",
  },
  {
    id: 6,
    text: "Interiér Exteriér",
    url: "/interierExterier",
  },
  {
    id: 7,
    text: "Dřevníky",
    url: "/drevniky",
  },
]

const Links = () => {
  return (
    <ul className="links">
      {data.map(link => {
        return (
          <li key={link.id}>
            <Link to={link.url}>{link.text}</Link>
          </li>
        )
      })}
    </ul>
  )
}
export default Links
