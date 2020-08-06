import React, {useEffect} from 'react'
import { BrowseCategories } from '../shared/HOCs/BrowseCategories'
import { ListPreviews } from '../shared/HOCs/ListPreviews';
import {Switch} from 'react-router-dom'


export const HomeView = () => {

  return(
    <div className="homeview-container">
      <div className="homeview-inner">
        {/* <BrowseCategories /> */}
        {/* <ListPreviews /> */}
      </div>
    </div>
  ) 
}