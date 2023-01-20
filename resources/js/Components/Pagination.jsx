import { Link } from '@inertiajs/inertia-react'
import React from 'react'

function Pagination({ links }) {
  return (
    links.links.length > 3 && (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {
            links.links.map((link, i) => {
              return (
                link.url !== null ? (
                  <li className="page-item" key={i}><Link className="page-link" href={link.url}>{link.label}</Link></li>
                  ) : (
                    <li className="page-item" key={i}><Link className="page-link" href={link.url}>{link.label}</Link></li>
                  )
                  )
                })
              }
        </ul>
      </nav>
    )
  )
}

export default Pagination