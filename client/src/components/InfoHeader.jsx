export default function InfoHeader() {
  return (
    <div className="container-fluid w-75 text-light d-flex align-items-center justify-content-between" style={{ height: '50px', backgroundColor: '#f44336', padding: '0 15px' }}>
      <div>
        For the best experience, use <span className='font-semibold'>inShorts</span> app on your smartphone
      </div>
      <div>
        <img src='https://assets.inshorts.com/website_assets/images/appstore.png'
          alt='App Store'
          width='100'
          height='40'
          style={{ marginRight: '10px' }}
        />
        <img src='https://assets.inshorts.com/website_assets/images/playstore.png'
          alt='Play Store'
          width='100'
          height='40'
        />
      </div>
    </div>
  );
}