import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
			<div className='header-inner'>
				<div className='header-bg'>
					<div className='top-tabs-container'>
						<div className='top-tabs-inner'>
							<div className='non-logo'>
								<NavLink
									className='header-tab'
									activeStyle={{ height: '100%', marginTop: '0%' }}
									exact
									to='/'
								>
									<div id='home'>Home</div>
								</NavLink>
								<NavLink
									className='header-tab'
									activeStyle={{ height: '100%', marginTop: '0%' }}
									exact
									to='/list'
								>
									<div id='list'>List</div>
								</NavLink>
								<NavLink
									className='header-tab'
									activeStyle={{ height: '100%', marginTop: '0%' }}
									exact
									to='/search'
								>
									<div id='search'>Search</div>
								</NavLink>
							</div>
							<div className='logo-container'>
								<img src='https://media.giphy.com/media/igtmRLH661Ohg1gxSp/giphy.gif' />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}

