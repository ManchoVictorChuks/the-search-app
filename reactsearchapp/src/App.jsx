import React, { useState } from 'react'
import './search-interface.css'

export default function SearchInterface() {
  const [searchQuery, setSearchQuery] = useState("Sisyphus Documentation")
  const [showNoResults, setShowNoResults] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchesPerPage] = useState(5)

  const allSearches = [
    { id: 1, title: "Sisyphus Ventures Logo Design", project: "Sisyphus Ventures", author: "Frankie Sullivan", avatars: ["/placeholder.svg?height=32&width=32", "/placeholder.svg?height=32&width=32", "/placeholder.svg?height=32&width=32"] },
    { id: 2, title: "Sisyphus Ventures Marketing Site", project: "Sisyphus Ventures", author: "Frankie Sullivan", avatars: ["/placeholder.svg?height=32&width=32", "/placeholder.svg?height=32&width=32", "/placeholder.svg?height=32&width=32", "/placeholder.svg?height=32&width=32"] },
    { id: 3, title: "Project Prometheus Documentation", project: "Project Prometheus", author: "Alice Johnson", avatars: ["/placeholder.svg?height=32&width=32", "/placeholder.svg?height=32&width=32"] },
    { id: 4, title: "Olympus Mountain Expedition", project: "Adventure Logs", author: "Bob Smith", avatars: ["/placeholder.svg?height=32&width=32", "/placeholder.svg?height=32&width=32", "/placeholder.svg?height=32&width=32"] },
    { id: 5, title: "Hades Underworld Map", project: "Mythological Atlas", author: "Charlie Brown", avatars: ["/placeholder.svg?height=32&width=32"] },
    { id: 6, title: "Athena's Wisdom Repository", project: "Divine Knowledge", author: "Diana Prince", avatars: ["/placeholder.svg?height=32&width=32", "/placeholder.svg?height=32&width=32"] },
    { id: 7, title: "Hermes Delivery System", project: "Olympian Logistics", author: "Ethan Hunt", avatars: ["/placeholder.svg?height=32&width=32", "/placeholder.svg?height=32&width=32", "/placeholder.svg?height=32&width=32"] },
    { id: 8, title: "Apollo's Solar Chariot Specs", project: "Celestial Vehicles", author: "Fiona Apple", avatars: ["/placeholder.svg?height=32&width=32", "/placeholder.svg?height=32&width=32"] },
    { id: 9, title: "Poseidon's Trident Maintenance", project: "Divine Artifacts", author: "George Clooney", avatars: ["/placeholder.svg?height=32&width=32", "/placeholder.svg?height=32&width=32", "/placeholder.svg?height=32&width=32", "/placeholder.svg?height=32&width=32"] },
    { id: 10, title: "Zeus Lightning Bolt Inventory", project: "Olympian Arsenal", author: "Helen Troy", avatars: ["/placeholder.svg?height=32&width=32"] },
  ]

  const indexOfLastSearch = currentPage * searchesPerPage
  const indexOfFirstSearch = indexOfLastSearch - searchesPerPage
  const currentSearches = allSearches.slice(indexOfFirstSearch, indexOfLastSearch)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const handleClearSearch = () => {
    setSearchQuery("")
    setShowNoResults(false)
  }

  return (
    <div className="search-interface">
      {/* Main Search */}
      <div className="search-container">
        <div className="search-input-container">
          <span className="search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
            placeholder="in projects"
          />
          <kbd className="keyboard-shortcut">⌘K</kbd>
        </div>
        
        {showNoResults && (
          <div className="no-results">
            <div className="no-results-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h3 className="no-results-title">No projects found</h3>
            <p className="no-results-description">
              "Sisyphus Documentation" did not match any projects.
              <br />
              Please try again or{' '}
              <a href="#" className="create-project-link">
                create a new project
              </a>
              .
            </p>
            <button onClick={handleClearSearch} className="clear-search-button">
              Clear search
            </button>
          </div>
        )}
      </div>

      {/* Command Palette */}
      <div className="command-palette">
        <div className="search-input-container">
          <span className="search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input
            type="text"
            className="search-input"
            placeholder="Type a command or search"
          />
          <kbd className="keyboard-shortcut">⌘K</kbd>
        </div>

        <div className="command-palette-content">
          <div className="command-palette-header">
            <span className="all-searches-title">All searches</span>
            <a href="#" className="customize-link">
              Customize
            </a>
          </div>

          {currentSearches.map((item) => (
            <div key={item.id} className="search-item">
              <div className="search-item-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="folder-icon">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div>
                  <div className="search-item-title">{item.title}</div>
                  <div className="search-item-description">
                    Project by {item.author} in {item.project}
                  </div>
                </div>
              </div>
              <div className="search-item-avatars">
                <div className="avatar-group">
                  {item.avatars.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar}
                      alt="User avatar"
                      className="avatar"
                    />
                  ))}
                </div>
                <span className="jump-to">Jump to...</span>
              </div>
            </div>
          ))}

          <div className="pagination">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="pagination-button"
            >
              Previous
            </button>
            <span className="page-info">
              Page {currentPage} of {Math.ceil(allSearches.length / searchesPerPage)}
            </span>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(allSearches.length / searchesPerPage)}
              className="pagination-button"
            >
              Next
            </button>
          </div>

          <div className="action-item">
            <div className="action-item-content">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="action-icon">
                <line x1="4" y1="9" x2="20" y2="9"></line>
                <line x1="4" y1="15" x2="20" y2="15"></line>
                <line x1="10" y1="3" x2="8" y2="21"></line>
                <line x1="16" y1="3" x2="14" y2="21"></line>
              </svg>
              <div>
                <div className="action-item-title">Add tag</div>
                <div className="action-item-description">
                  Organize projects and files with custom tags.
                </div>
              </div>
            </div>
            <kbd className="action-shortcut">T</kbd>
          </div>

          <div className="action-item">
            <div className="action-item-content">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="action-icon">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <div>
                <div className="action-item-title">Create new project</div>
                <div className="action-item-description">
                  Create a new project within this folder.
                </div>
              </div>
            </div>
            <kbd className="action-shortcut">N</kbd>
          </div>
        </div>
      </div>
    </div>
  )
}