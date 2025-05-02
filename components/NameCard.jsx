const nameCard = () => {
    return (
        <div className="" translate="no">
            <div className="max-w-24 mx-auto my-3 rounded-full overflow-hidden">
                <img className="object-cover grayscale-100" 
                     src="profile.jpeg" 
                     alt="profile iamge"/>
            </div>
            <div className="mt-3 text-center">
                <h2 className="text-white text-lg capitalize font-bold">
                    changhyun cho
                </h2>
                <p className="text-white/40 text-sm capitalize">
                    web developer
                </p>
            </div>
        </div>
    )
}

export default nameCard;