import React from 'react'
import {BrowseCategory} from './BrowseCategory'

export const BrowseCategories = () => {
  
  return(
     <div className="browse-categories">
       <BrowseCategory category={"trending"} />
       <BrowseCategory category={"popular"} />
       <BrowseCategory category={"other"} />
     </div>
  )
}