function PageBanner ({title}) {
    return (
        <div className="page-banner">
            <img src="https://cnhojaapnhcfkhpbkbup.supabase.co/storage/v1/object/public/events/images/banner.jpg" alt="banner"/>
            <h1 className="centered">{title}</h1>
        </div>
    )
}

export default PageBanner;