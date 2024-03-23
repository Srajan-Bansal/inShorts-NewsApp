export default function Header() {
	return (
		<nav className='navbar bg-tertiary shadow-lg p-3 mb-5 rounded'>
			<div className='container-fluid justify-content-center'>
				<a className='navbar-brand' href='/'>
					<img src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png'
						alt='Logo'
						width='140'
						height='60'
						className='d-inline-block align-text-top'
					/>
				</a>
			</div>
		</nav>
	);
}